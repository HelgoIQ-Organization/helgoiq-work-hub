#!/usr/bin/env node
/**
 * refresh-dashboard.mjs
 *
 * Starter routine for HelgoIQ Launch Hub freshness stamps.
 *
 * Primary trigger (Bot Commander / cron): regenerate when live staging tip changes.
 * Backup: weekday every 30 minutes during daytime Europe/London.
 *
 * This script:
 *  - curls live /api/version for tip / buildStamp
 *  - optionally reads local MASTER.csv / Cluster A FINAL paths if present
 *  - updates dashboard.json meta.dataAsOf + meta.buildStamp + tip
 *  - writes history/latest.json
 *  - keeps previous-day history files; does not invent strand scores
 *
 * Strand / progressToday content is filled by Bot Commander after live facts
 * (gh PRs, MASTER.csv, Cluster A, #1180). Pass --embed-check to print tip only.
 *
 * Usage:
 *   node scripts/refresh-dashboard.mjs
 *   node scripts/refresh-dashboard.mjs --staging=https://lobster-app-662c7.ondigitalocean.app
 *   STAGING_URL=... MASTER_CSV=/path/to/MASTER.csv node scripts/refresh-dashboard.mjs
 *
 * Never prints or writes secrets.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DASH_PATH = join(ROOT, "dashboard.json");
const HISTORY_DIR = join(ROOT, "history");
const DEFAULT_STAGING = "https://lobster-app-662c7.ondigitalocean.app";

function argVal(name, fallback) {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  if (hit) return hit.slice(name.length + 3);
  return process.env[name.toUpperCase().replace(/-/g, "_")] || fallback;
}

function londonDay(d = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function isoNow() {
  return new Date().toISOString();
}

async function fetchVersion(base) {
  const url = base.replace(/\/$/, "") + "/api/version";
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`/api/version ${res.status} ${res.statusText}`);
  return res.json();
}

function readCsvSummary(path) {
  if (!path || !existsSync(path)) return null;
  const text = readFileSync(path, "utf8");
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return { path, rows: 0 };
  const header = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const statusIdx = header.findIndex((h) => h === "status" || h === "result" || h === "outcome");
  const counts = {};
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",");
    const key = (statusIdx >= 0 ? cols[statusIdx] : "row").trim().toUpperCase() || "ROW";
    counts[key] = (counts[key] || 0) + 1;
  }
  return { path, rows: lines.length - 1, counts };
}

function ensureHistory(dash, tipChanged) {
  mkdirSync(HISTORY_DIR, { recursive: true });
  const day = londonDay();
  const latestPath = join(HISTORY_DIR, "latest.json");
  writeFileSync(latestPath, JSON.stringify(dash, null, 2) + "\n");

  // Keep previous-day snapshot if present; do not overwrite morning/afternoon named files here.
  // When tip changes, also drop a dated tip-change snapshot for audit.
  if (tipChanged) {
    const tipSnap = join(HISTORY_DIR, `${day}-tip-${String(dash.tip || "unknown").slice(0, 8)}.json`);
    writeFileSync(tipSnap, JSON.stringify(dash, null, 2) + "\n");
  }

  // Always keep yesterday if we can find a prior latest-like file named YYYY-MM-DD*.json
  const files = readdirSync(HISTORY_DIR).filter((f) => /^\d{4}-\d{2}-\d{2}/.test(f));
  const days = [...new Set(files.map((f) => f.slice(0, 10)))].sort();
  if (days.length >= 2) {
    const prev = days[days.length - 2];
    console.log(`history: keeping previous day ${prev} (${files.filter((f) => f.startsWith(prev)).length} file(s))`);
  }
}

async function main() {
  const staging = argVal("staging", DEFAULT_STAGING);
  const masterCsv = argVal("master-csv", process.env.MASTER_CSV || "");
  const clusterPath = argVal("cluster-a", process.env.CLUSTER_A_FINAL || "");
  const embedCheck = process.argv.includes("--embed-check");

  console.log("HelgoIQ Launch Hub refresh");
  console.log("staging:", staging);

  let version;
  try {
    version = await fetchVersion(staging);
  } catch (err) {
    console.error("Failed to fetch live /api/version:", err.message || err);
    process.exitCode = 1;
    return;
  }

  const tip = version.releaseSha || version.buildToken || version.sha || "";
  console.log("live tip:", tip);
  console.log("version payload keys:", Object.keys(version).join(", "));

  if (embedCheck) {
    console.log(JSON.stringify({ tip, version, dataAsOf: isoNow() }, null, 2));
    return;
  }

  if (!existsSync(DASH_PATH)) {
    console.error("dashboard.json missing — abort");
    process.exitCode = 1;
    return;
  }

  const dash = JSON.parse(readFileSync(DASH_PATH, "utf8"));
  const prevTip = dash.tip || (dash.meta && dash.meta.buildStamp) || "";
  const tipChanged = Boolean(tip) && tip !== prevTip;
  const now = isoNow();

  dash.updatedAt = now;
  dash.tip = tip || prevTip;
  dash.meta = dash.meta || {};
  dash.meta.dataAsOf = now;
  dash.meta.buildStamp = tip || prevTip;
  dash.meta.liveTip = tip || prevTip;
  dash.meta.refreshMechanism =
    dash.meta.refreshMechanism ||
    "Primary: regenerate when live staging /api/version tip changes. Backup: weekday every 30 minutes daytime Europe/London.";
  dash.meta.lastRefreshNote = tipChanged
    ? `Tip changed ${String(prevTip).slice(0, 8)} → ${String(tip).slice(0, 8)}; Bot Commander should rescore strands.`
    : `Tip unchanged (${String(tip).slice(0, 8)}); stamps refreshed only — do not look more confident without new measured facts.`;

  const master = readCsvSummary(masterCsv);
  const cluster = clusterPath && existsSync(clusterPath)
    ? { path: clusterPath, bytes: readFileSync(clusterPath).length }
    : null;

  dash.meta.sourceHints = {
    versionUrl: staging.replace(/\/$/, "") + "/api/version",
    masterCsv: master,
    clusterA: cluster,
    checkedAt: now,
  };

  if (dash.health) {
    // Keep headline; never invent a higher score on stamp-only refresh
    dash.health.refreshWarning = tipChanged
      ? null
      : "Live tip unchanged since last strand rebuild — readiness may be stale relative to merged-but-undeployed PRs.";
  }

  writeFileSync(DASH_PATH, JSON.stringify(dash, null, 2) + "\n");
  ensureHistory(dash, tipChanged);

  console.log(tipChanged ? "TIP CHANGED — rescore strands before claiming progress" : "tip unchanged — stamps only");
  console.log("wrote", DASH_PATH);
  console.log("wrote history/latest.json");
  console.log("dataAsOf", now);
  if (master) console.log("MASTER.csv summary", master);
  if (cluster) console.log("Cluster A file present", cluster.path);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
