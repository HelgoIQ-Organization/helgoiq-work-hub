#!/usr/bin/env node
/**
 * sync-coverage.mjs
 *
 * Build coverage.json so every strand / page card can show lastTestedStamp
 * and a Stale-vs-live-tip badge.
 *
 * 1. GET live staging /api/version for releaseSha (same hook as refresh-dashboard)
 * 2. `gh pr list` recent merged PRs on HelgoIQ-Organization/HelgoIQ-Platform
 * 3. Scan drops SUMMARY.md files (and sibling md) + index.json for verdicts/stamps
 * 4. Mark freshness stale when lastTestedStamp != live tip
 *
 * Does not invent strand scores. Does not store secrets.
 *
 * Usage:
 *   node scripts/sync-coverage.mjs
 *   node scripts/sync-coverage.mjs --dry-run
 *   node scripts/sync-coverage.mjs --skip-gh --skip-version
 *   STAGING_URL=... node scripts/sync-coverage.mjs
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_PATH = join(ROOT, "coverage.json");
const DASH_PATH = join(ROOT, "dashboard.json");
const INDEX_PATH = join(ROOT, "index.json");
const DROPS_DIR = join(ROOT, "drops");
const DEFAULT_STAGING = process.env.STAGING_URL || process.env.STAGING || "";
const PLATFORM_REPO = "HelgoIQ-Organization/HelgoIQ-Platform";

const SHA_RE = /\b([a-f0-9]{7,40})\b/gi;
const TIP_LINE_RE =
  /(?:live tip|tip at (?:start|finish)|tip|build(?:stamp)?|releaseSha)\s*[:=]?\s*`?([a-f0-9]{7,40})`?/i;
const VERDICT_RE = /\b(PASS|FAIL|BLOCKED|NOT_RUN|UNTESTED|UNCERTAIN|PARTIAL|UNREACHABLE|SKIP)\b/g;
const ROUTE_RE = /`(\/(?:admin|teacher|sign-in|sign-up|sign-out|help|guides|forms)[^`]*)`|^\d+\.\s+`(\/[^`]+)`/gm;

const TAG_TO_STRAND = {
  dataset: "dataset",
  "command-centre": "command-centre",
  isolation: "isolation",
  "ai-85": "ai-85",
  ambient: "ambient",
  m1: "m1",
  smoke: "smoke",
  payments: "payments",
  findings: "findings-fix",
  comms: "comms",
  finance: "payments",
};

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

function shortSha(sha) {
  return String(sha || "").slice(0, 8);
}

function normSha(sha) {
  return String(sha || "").toLowerCase().replace(/[^a-f0-9]/g, "");
}

function shaMatch(a, b) {
  const x = normSha(a);
  const y = normSha(b);
  if (!x || !y) return false;
  const n = Math.min(x.length, y.length);
  if (n < 7) return x === y;
  return x.slice(0, n) === y.slice(0, n) || x.startsWith(y) || y.startsWith(x);
}

function freshness(stamp, liveTip) {
  if (!stamp) return "untested";
  if (!liveTip) return "unknown";
  return shaMatch(stamp, liveTip) ? "current" : "stale";
}

function extractTips(text) {
  const tips = [];
  const line = String(text).match(TIP_LINE_RE);
  if (line) tips.push(line[1]);
  const fences = String(text).matchAll(/"releaseSha"\s*:\s*"([a-f0-9]{7,40})"/g);
  for (const m of fences) tips.push(m[1]);
  return tips;
}

function extractVerdicts(text) {
  const set = new Set();
  const s = String(text);
  let m;
  const re = new RegExp(VERDICT_RE.source, "g");
  while ((m = re.exec(s))) set.add(m[1]);
  return [...set];
}

function primaryVerdict(verdicts) {
  const order = ["FAIL", "BLOCKED", "UNREACHABLE", "PARTIAL", "UNCERTAIN", "NOT_RUN", "UNTESTED", "SKIP", "PASS"];
  for (const v of order) {
    if (verdicts.includes(v)) return v;
  }
  return verdicts[0] || "";
}

function walkMarkdown(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    let st;
    try {
      st = statSync(p);
    } catch {
      continue;
    }
    if (st.isDirectory()) walkMarkdown(p, acc);
    else if (/\.(md|csv|txt|json)$/i.test(name)) acc.push(p);
  }
  return acc;
}

async function fetchVersion(base) {
  if (!base || base.includes("[REDACTED]")) {
    throw new Error("staging URL not configured (pass --staging= or STAGING_URL)");
  }
  const url = base.replace(/\/$/, "") + "/api/version";
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`/api/version ${res.status} ${res.statusText}`);
  return res.json();
}

function listMergedPrs(repo) {
  const res = spawnSync(
    "gh",
    [
      "pr",
      "list",
      "--repo",
      repo,
      "--state",
      "merged",
      "--limit",
      "20",
      "--json",
      "number,title,mergedAt,url,mergeCommit",
    ],
    { encoding: "utf8" }
  );
  if (res.status !== 0) {
    return { ok: false, error: (res.stderr || res.stdout || "gh pr list failed").trim(), prs: [] };
  }
  try {
    const rows = JSON.parse(res.stdout || "[]");
    const prs = rows.map((p) => ({
      number: p.number,
      title: p.title,
      mergedAt: p.mergedAt,
      url: p.url,
      mergeSha: (p.mergeCommit && (p.mergeCommit.oid || p.mergeCommit.sha)) || "",
    }));
    return { ok: true, prs, error: null };
  } catch {
    return { ok: false, error: "gh returned non-JSON", prs: [] };
  }
}

function loadJson(path) {
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

function collectDropScans(index) {
  const byId = new Map();
  (index.drops || []).forEach((d) => {
    byId.set(d.id, {
      id: d.id,
      title: d.title,
      date: d.date,
      tip: d.tip || "",
      indexTip: d.tip || "",
      tags: d.tags || [],
      type: d.type,
      paths: d.paths || [],
      verdicts: [],
      summaryTips: [],
      routes: [],
      files: [],
    });
  });

  if (!existsSync(DROPS_DIR)) return [...byId.values()];

  for (const folder of readdirSync(DROPS_DIR)) {
    const dir = join(DROPS_DIR, folder);
    if (!statSync(dir).isDirectory()) continue;
    const files = walkMarkdown(dir);
    const prefer = files.filter((f) => /SUMMARY\.md$/i.test(f));
    const extra = files.filter((f) => !/SUMMARY\.md$/i.test(f) && /\.(md|csv)$/i.test(f));
    const readList = [...prefer, ...extra].slice(0, 8);
    const texts = [];
    for (const f of readList) {
      try {
        texts.push({ file: relative(ROOT, f), text: readFileSync(f, "utf8") });
      } catch {
        /* skip */
      }
    }
    const joined = texts.map((t) => t.text).join("\n");
    const tips = texts.flatMap((t) => extractTips(t.text));
    const verdicts = extractVerdicts(joined);
    const routes = new Set();
    let rm;
    const routeRe = /`(\/[-a-zA-Z0-9_/:.*]+)`/g;
    while ((rm = routeRe.exec(joined))) {
      if (rm[1].length < 80) routes.add(rm[1]);
    }

    let entry = [...byId.values()].find((d) => (d.paths || []).some((p) => p.startsWith("drops/" + folder + "/")));
    if (!entry) {
      entry = {
        id: folder,
        title: folder,
        date: folder.slice(0, 10),
        tip: "",
        tags: [],
        type: "pack",
        paths: texts.map((t) => t.file),
        verdicts: [],
        summaryTips: [],
        routes: [],
        files: [],
      };
      byId.set(folder, entry);
    }
    entry.verdicts = [...new Set([...(entry.verdicts || []), ...verdicts])];
    entry.summaryTips = [...new Set([...(entry.summaryTips || []), ...tips])];
    entry.routes = [...new Set([...(entry.routes || []), ...routes])];
    entry.files = texts.map((t) => t.file);
    if (!entry.indexTip && !entry.tip && tips[0]) entry.tip = tips[0];
  }

  return [...byId.values()];
}

function strandIdsFromTags(tags) {
  const ids = new Set();
  for (const t of tags || []) {
    if (TAG_TO_STRAND[t]) ids.add(TAG_TO_STRAND[t]);
  }
  return [...ids];
}

function pickLatestStamp(drops, strandId) {
  const isPrimary = (d) => {
    const tags = d.tags || [];
    return TAG_TO_STRAND[tags[0]] === strandId || tags[0] === strandId;
  };
  const typeRank = (d) => {
    const t = String(d.type || "").toLowerCase();
    if (t === "finding" || t === "matrix" || t === "evidence") return 0;
    if (t === "checklist" || t === "status") return 1;
    return 2;
  };
  const hits = drops.filter((d) => strandIdsFromTags(d.tags).includes(strandId) && (d.indexTip || d.tip || (d.summaryTips || [])[0]));
  hits.sort((a, b) => {
    const byPrimary = (isPrimary(a) ? 0 : 1) - (isPrimary(b) ? 0 : 1);
    if (byPrimary !== 0) return byPrimary;
    const byDate = String(b.date || "").localeCompare(String(a.date || ""));
    if (byDate !== 0) return byDate;
    return typeRank(a) - typeRank(b);
  });
  if (!hits.length) return null;
  const d = hits[0];
  return {
    lastTestedStamp: d.indexTip || d.tip || (d.summaryTips || [])[0],
    lastTestedAt: d.date || null,
    evidenceDropId: d.id,
    verdict: primaryVerdict(d.verdicts || []),
    title: d.title,
  };
}

function pagesFromScans(drops, liveTip) {
  const pages = [];
  const seen = new Set();

  function add(page) {
    const key = page.id || page.route || page.name;
    if (!key || seen.has(key)) return;
    seen.add(key);
    pages.push({
      id: page.id,
      name: page.name,
      route: page.route || "",
      strandId: page.strandId || "",
      lastTestedStamp: page.lastTestedStamp || "",
      lastTestedAt: page.lastTestedAt || null,
      verdict: page.verdict || "",
      freshness: freshness(page.lastTestedStamp, liveTip),
      evidenceDropId: page.evidenceDropId || "",
    });
  }

  for (const d of drops) {
    const stamp = d.tip || (d.summaryTips || [])[0] || "";
    const strandId = strandIdsFromTags(d.tags)[0] || "";
    const verdict = primaryVerdict(d.verdicts || []);
    if (d.routes && d.routes.length) {
      for (const route of d.routes.slice(0, 12)) {
        add({
          id: "route:" + route,
          name: route,
          route,
          strandId,
          lastTestedStamp: /untested/i.test(d.title + d.id) ? "" : stamp,
          lastTestedAt: d.date,
          verdict: /untested/i.test(d.title + d.id) ? "UNTESTED" : verdict,
          evidenceDropId: d.id,
        });
      }
    }
    add({
      id: "drop:" + d.id,
      name: d.title,
      route: "",
      strandId,
      lastTestedStamp: stamp,
      lastTestedAt: d.date,
      verdict,
      evidenceDropId: d.id,
    });
  }

  return pages;
}

function applyStampsToDashboard(dash, strands) {
  if (!dash || !Array.isArray(dash.strands)) return false;
  let changed = false;
  const byId = Object.fromEntries(strands.map((s) => [s.id, s]));
  for (const s of dash.strands) {
    const cov = byId[s.id];
    if (!cov) continue;
    if (s.lastTestedStamp !== cov.lastTestedStamp) {
      s.lastTestedStamp = cov.lastTestedStamp || "";
      changed = true;
    }
    if (cov.verdict && s.lastTestedVerdict !== cov.verdict) {
      s.lastTestedVerdict = cov.verdict;
      changed = true;
    }
    if (s.coverageFreshness !== cov.freshness) {
      s.coverageFreshness = cov.freshness;
      changed = true;
    }
  }
  return changed;
}

async function main() {
  const dry = argFlag("dry-run");
  const skipGh = argFlag("skip-gh");
  const skipVersion = argFlag("skip-version");
  const staging = argVal("staging", DEFAULT_STAGING);
  const repo = argVal("repo", PLATFORM_REPO);
  const stampDash = !argFlag("no-stamp-dashboard");

  console.log("HelgoIQ coverage sync");
  console.log("dry-run:", dry);
  console.log("staging:", staging ? "(configured)" : "(unset — pass --staging or STAGING_URL)");
  console.log("repo:", repo);

  const dash = loadJson(DASH_PATH) || {};
  const index = loadJson(INDEX_PATH) || { drops: [] };

  let liveTip = dash.tip || (dash.meta && dash.meta.buildStamp) || dash.meta?.liveTip || "";
  let versionError = null;
  if (!skipVersion) {
    try {
      const version = await fetchVersion(staging);
      liveTip = version.releaseSha || version.buildToken || version.sha || liveTip;
      console.log("live tip:", liveTip);
    } catch (err) {
      versionError = err.message || String(err);
      console.warn("version fetch skipped:", versionError);
      console.log("falling back to dashboard tip:", shortSha(liveTip) || "(none)");
    }
  } else {
    console.log("skip-version — using dashboard tip:", shortSha(liveTip) || "(none)");
  }

  let merged = { ok: false, prs: [], error: "skipped" };
  if (!skipGh) {
    merged = listMergedPrs(repo);
    if (!merged.ok) console.warn("gh pr list skipped:", merged.error);
    else console.log("merged PRs:", merged.prs.length);
  } else {
    console.log("skip-gh — no merged PR list");
  }

  const scans = collectDropScans(index);
  console.log("drops scanned:", scans.length);

  const strandMeta = (dash.strands || []).map((s) => {
    const picked = pickLatestStamp(scans, s.id);
    const lastTestedStamp = (picked && picked.lastTestedStamp) || s.lastTestedStamp || "";
    return {
      id: s.id,
      name: s.name,
      lastTestedStamp,
      lastTestedAt: (picked && picked.lastTestedAt) || null,
      verdict: (picked && picked.verdict) || s.lastTestedVerdict || "",
      freshness: freshness(lastTestedStamp, liveTip),
      evidenceDropId: (picked && picked.evidenceDropId) || (s.detailDropIds && s.detailDropIds[0]) || "",
      basis: s.basis || "",
      percent: s.percent,
    };
  });

  const pages = pagesFromScans(scans, liveTip);
  const staleStrands = strandMeta.filter((s) => s.freshness === "stale").length;
  const currentStrands = strandMeta.filter((s) => s.freshness === "current").length;
  const stalePages = pages.filter((p) => p.freshness === "stale").length;

  const coverage = {
    updatedAt: isoNow(),
    liveTip,
    liveTipShort: shortSha(liveTip),
    refreshLag: {
      tipChange: "near-real-time (refresh-dashboard.mjs when /api/version tip changes)",
      coverageSync: "≤15m when the 15-minute routine is wired",
      dashboardBackup: "30m weekday daytime Europe/London",
    },
    source: {
      versionUrl: staging ? "(configured staging)/api/version" : null,
      versionError,
      platformRepo: repo,
      mergedPrsError: merged.ok ? null : merged.error,
      dropsScanned: scans.length,
    },
    counts: {
      strands: strandMeta.length,
      strandsStaleVsLiveTip: staleStrands,
      strandsCurrent: currentStrands,
      pages: pages.length,
      pagesStaleVsLiveTip: stalePages,
    },
    recentMergedPrs: merged.prs,
    strands: strandMeta,
    pages,
  };

  if (dry) {
    console.log("DRY RUN — would write", OUT_PATH);
    console.log("liveTip:", shortSha(liveTip) || "(none)");
    console.log("strands:", strandMeta.length, "stale:", staleStrands, "current:", currentStrands);
    console.log("pages:", pages.length, "stale:", stalePages);
    console.log("merged PRs:", merged.prs.length);
    strandMeta.forEach((s) => {
      console.log(`  ${s.id.padEnd(16)} ${s.freshness.padEnd(8)} ${shortSha(s.lastTestedStamp) || "—"}  ${s.verdict || ""}`);
    });
    return;
  }

  writeFileSync(OUT_PATH, JSON.stringify(coverage, null, 2) + "\n");
  console.log("wrote", OUT_PATH);

  if (stampDash && dash.strands) {
    const changed = applyStampsToDashboard(dash, strandMeta);
    if (changed) {
      writeFileSync(DASH_PATH, JSON.stringify(dash, null, 2) + "\n");
      console.log("stamped lastTestedStamp onto dashboard.json strands");
    } else {
      console.log("dashboard.json strand stamps already current");
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
