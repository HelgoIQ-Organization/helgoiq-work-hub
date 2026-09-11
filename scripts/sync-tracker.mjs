#!/usr/bin/env node
/**
 * sync-tracker.mjs
 *
 * Refresh tracker/items.json for the Work Hub Tracker tab.
 *
 * Source priority (does not invent live Projects cards or credentials):
 *   1. Optional local export — TRACKER_EXPORT.json (cwd / repo root)
 *      or --export=/path/to/file.json or TRACKER_EXPORT=/path
 *   2. Optional GitHub Issues — labels tracker and/or findings via `gh`
 *      (only when --from-github is passed, or no export exists and gh works)
 *   3. Keep the seeded example file + blocked banner
 *
 * Usage:
 *   node scripts/sync-tracker.mjs
 *   node scripts/sync-tracker.mjs --dry-run
 *   node scripts/sync-tracker.mjs --export=./TRACKER_EXPORT.json
 *   node scripts/sync-tracker.mjs --from-github --repo=HelgoIQ-Organization/HelgoIQ-Platform
 *
 * Never prints or writes secrets. Never fabricates issue rows when gh/export is missing.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_PATH = join(ROOT, "tracker", "items.json");
const BLOCKED_BANNER =
  "Live tracker blocked — GitHub Projects needs read:project; in-app findings agent token rotate outstanding since 3 Sep (Declan).";

function argFlag(name) {
  return process.argv.includes(`--${name}`);
}

function argVal(name, fallback) {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  if (hit) return hit.slice(name.length + 3);
  const envKey = name.toUpperCase().replace(/-/g, "_");
  return process.env[envKey] || fallback;
}

function isoNow() {
  return new Date().toISOString();
}

function resolveExportPath() {
  const fromArg = argVal("export", "");
  const candidates = [
    fromArg,
    process.env.TRACKER_EXPORT || "",
    join(ROOT, "TRACKER_EXPORT.json"),
    join(process.cwd(), "TRACKER_EXPORT.json"),
  ].filter(Boolean);
  for (const c of candidates) {
    const abs = isAbsolute(c) ? c : resolve(process.cwd(), c);
    if (existsSync(abs)) return abs;
  }
  return null;
}

function normalizeItem(raw, idx) {
  if (!raw || typeof raw !== "object") return null;
  const id = raw.id || raw.number || `trk-import-${idx + 1}`;
  const title = raw.title || raw.name || "";
  if (!title) return null;
  const evidence = Array.isArray(raw.evidence)
    ? raw.evidence
        .filter((e) => e && (e.url || e.path))
        .map((e) => ({
          label: e.label || e.title || e.url || e.path,
          url: e.url || e.path,
          kind: e.kind || "note",
        }))
    : [];
  if (raw.githubIssue && !evidence.some((e) => e.url === raw.githubIssue)) {
    evidence.push({ label: "GitHub", url: raw.githubIssue, kind: "github" });
  }
  if (raw.html_url && !evidence.some((e) => e.url === raw.html_url)) {
    evidence.push({ label: "Issue", url: raw.html_url, kind: "github" });
  }
  return {
    id: String(id),
    title: String(title),
    state: String(raw.state || "open").toLowerCase().replace(/_/g, "-"),
    area: raw.area || inferArea(raw) || "findings-fix",
    builder: raw.builder || inferBuilder(raw) || "unassigned",
    openedAt: raw.openedAt || raw.createdAt || raw.created_at || isoNow(),
    updatedAt: raw.updatedAt || raw.updated_at || raw.openedAt || isoNow(),
    summary: raw.summary || raw.body || raw.plainEnglish || "",
    seed: Boolean(raw.seed),
    githubIssue: raw.githubIssue || raw.html_url || raw.url || "",
    evidence,
  };
}

function inferArea(raw) {
  const labels = (raw.labels || []).map((l) => (typeof l === "string" ? l : l.name || "")).map((s) => s.toLowerCase());
  const hay = [raw.title, raw.body, ...(labels)].join(" ").toLowerCase();
  const keys = [
    "isolation",
    "dataset",
    "command-centre",
    "smoke",
    "m1",
    "payments",
    "ai-85",
    "ambient",
    "comms",
    "ops",
    "findings-fix",
  ];
  return keys.find((k) => hay.includes(k) || labels.includes(k)) || null;
}

function inferBuilder(raw) {
  const assignees = raw.assignees || [];
  const first = assignees[0];
  const login = typeof first === "string" ? first : first && first.login;
  if (!login) return null;
  const l = String(login).toLowerCase();
  if (l.includes("declan")) return "declan";
  return login;
}

function mapGhIssue(issue) {
  const labels = (issue.labels || []).map((l) => (typeof l === "string" ? l : l.name || ""));
  const state = String(issue.state || "OPEN").toLowerCase() === "closed" ? "done" : "open";
  return normalizeItem(
    {
      id: issue.number != null ? `issue-${issue.number}` : issue.id,
      title: issue.title,
      state,
      labels,
      assignees: issue.assignees,
      openedAt: issue.createdAt || issue.created_at,
      updatedAt: issue.updatedAt || issue.updated_at,
      summary: String(issue.body || "").split(/\n/)[0].slice(0, 240),
      githubIssue: issue.url || issue.html_url,
      seed: false,
      evidence: [{ label: `Issue #${issue.number}`, url: issue.url || issue.html_url, kind: "github" }],
    },
    0
  );
}

function runGhIssues(repo) {
  const labels = ["tracker", "findings"];
  const seen = new Map();
  for (const label of labels) {
    const res = spawnSync(
      "gh",
      [
        "issue",
        "list",
        "--repo",
        repo,
        "--label",
        label,
        "--state",
        "all",
        "--limit",
        "50",
        "--json",
        "number,title,state,labels,assignees,createdAt,updatedAt,url,body",
      ],
      { encoding: "utf8" }
    );
    if (res.status !== 0) {
      const err = (res.stderr || res.stdout || "").trim();
      return { ok: false, error: err || `gh issue list --label ${label} failed`, items: [] };
    }
    let rows;
    try {
      rows = JSON.parse(res.stdout || "[]");
    } catch (e) {
      return { ok: false, error: "gh returned non-JSON", items: [] };
    }
    for (const row of rows) {
      const mapped = mapGhIssue(row);
      if (mapped) seen.set(mapped.id, mapped);
    }
  }
  return { ok: true, items: [...seen.values()], error: null };
}

function readExisting() {
  if (!existsSync(OUT_PATH)) return null;
  try {
    return JSON.parse(readFileSync(OUT_PATH, "utf8"));
  } catch {
    return null;
  }
}

function buildPayload({ source, items, extra }) {
  const existing = readExisting() || {};
  return {
    schemaVersion: existing.schemaVersion || 1,
    schema: existing.schema,
    updatedAt: isoNow(),
    source,
    live: source !== "seed-example",
    blocked:
      source === "seed-example"
        ? existing.blocked || {
            reason: "GitHub Projects needs read:project; in-app findings agent token rotate outstanding since 3 Sep (Declan).",
            since: "2026-09-03",
            needs: ["read:project", "findings-agent-token-rotate"],
          }
        : null,
    banner: source === "seed-example" ? BLOCKED_BANNER : extra && extra.banner ? extra.banner : "",
    itemsNote:
      source === "export"
        ? "Imported from TRACKER_EXPORT.json. Review before treating as live Projects truth."
        : source === "github-issues"
          ? "Imported from GitHub Issues labelled tracker/findings. Projects board fields are not included (needs read:project)."
          : existing.itemsNote ||
            "Seed/example set. Live Projects sync is blocked until read:project + findings-agent token rotate.",
    items,
  };
}

function main() {
  const dry = argFlag("dry-run");
  const forceGithub = argFlag("from-github");
  const repo = argVal("repo", "HelgoIQ-Organization/HelgoIQ-Platform");

  console.log("HelgoIQ tracker sync");
  console.log("dry-run:", dry);
  console.log("repo:", repo);

  const exportPath = resolveExportPath();
  let payload;
  let note;

  if (exportPath) {
    console.log("using export:", exportPath);
    const raw = JSON.parse(readFileSync(exportPath, "utf8"));
    const list = Array.isArray(raw) ? raw : raw.items || raw.issues || [];
    const items = list.map(normalizeItem).filter(Boolean);
    payload = buildPayload({ source: "export", items, extra: { banner: raw.banner || "" } });
    note = `export ${items.length} item(s)`;
  } else if (forceGithub || argFlag("try-github")) {
    console.log("no TRACKER_EXPORT.json — trying gh issues");
    const gh = runGhIssues(repo);
    if (!gh.ok) {
      console.warn("gh issues unavailable:", gh.error);
      console.warn("keeping seed example file; not inventing live rows");
      payload = readExisting();
      if (payload) {
        payload.updatedAt = isoNow();
        payload.source = payload.source || "seed-example";
        payload.banner = BLOCKED_BANNER;
        payload.live = false;
      }
      note = "gh failed — seed kept";
    } else {
      payload = buildPayload({ source: "github-issues", items: gh.items });
      note = `github-issues ${gh.items.length} item(s)`;
    }
  } else {
    console.log("no TRACKER_EXPORT.json and --from-github not set — keeping seed");
    console.log("later: drop a local export or pass --from-github once gh can list labelled issues");
    payload = readExisting();
    if (payload) {
      payload.updatedAt = isoNow();
      payload.banner = BLOCKED_BANNER;
      payload.live = false;
      payload.source = payload.source || "seed-example";
    }
    note = "seed kept (blocked banner)";
  }

  if (!payload) {
    console.error("tracker/items.json missing and no import source — abort");
    process.exitCode = 1;
    return;
  }

  const text = JSON.stringify(payload, null, 2) + "\n";
  if (dry) {
    console.log("DRY RUN — would write", OUT_PATH);
    console.log("source:", payload.source);
    console.log("items:", (payload.items || []).length);
    console.log("banner:", payload.banner || "(none)");
    console.log(note);
    return;
  }

  writeFileSync(OUT_PATH, text);
  console.log("wrote", OUT_PATH);
  console.log(note);
}

main();
