#!/usr/bin/env node
/**
 * sync-tracker.mjs
 *
 * Refresh tracker/items.json for the Work Hub Tracker tab.
 *
 * Source priority (does not invent live Projects cards or credentials):
 *   1. Optional reviewed Platform pull — pull-latest.json via --platform-pull=/path
 *   2. Optional local export — TRACKER_EXPORT.json (cwd / repo root)
 *      or --export=/path/to/file.json or TRACKER_EXPORT=/path
 *   3. Optional GitHub Issues — labels tracker and/or findings via `gh`
 *      (only when --from-github is passed)
 *   4. Keep the existing board when no source is supplied
 *
 * Usage:
 *   node scripts/sync-tracker.mjs
 *   node scripts/sync-tracker.mjs --dry-run
 *   node scripts/sync-tracker.mjs --platform-pull=/path/to/pull-latest.json
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
const BUILDER_ENUM = new Set([
  "claude",
  "codex",
  "cursor",
  "grok",
  "bot-commander",
  "declan",
  "engineering",
  "unassigned",
  "external",
]);
const BLOCKED_BANNER =
  "Hub-first tracker: tracker/items.json is the Work Hub source of truth. Optional Platform/Projects imports remain blocked (Live Issue Tracker API 401; GitHub needs read:project); seed rows are examples only.";
const PLATFORM_SOURCE = "platform-live-pull-2026-09-24";
const PLATFORM_STATUS_MAP = new Map([
  ["Not started", "open"],
  ["In progress", "in-progress"],
  ["Partially complete", "in-progress"],
  ["Fixed — awaiting confirmation", "in-progress"],
  ["Verified by agent", "in-progress"],
  ["Confirmed complete", "done"],
  ["Wont fix", "wontfix"],
]);
const PLATFORM_OWNER_MAP = new Map([
  ["Codex", "codex"],
  ["Claude Code", "claude"],
  ["Cursor", "cursor"],
  ["Grok", "grok"],
  ["Declan", "declan"],
  ["External", "external"],
  ["Unassigned", "unassigned"],
]);
const PLATFORM_AREA_MAP = new Map([
  ["Admin", "command-centre"],
  ["Teacher", "m1"],
  ["Client", "ambient"],
  ["Backend", "ops"],
  ["Infrastructure", "ops"],
  ["Platform", "ops"],
]);

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

function normalizeBuilder(value) {
  const builder = String(value || "").toLowerCase().trim();
  if (BUILDER_ENUM.has(builder)) return builder;
  if (builder === "claude code") return "claude";
  if (builder === "bot commander" || builder === "bot_commander") return "bot-commander";
  if (builder === "external") return "external";
  return "unassigned";
}

function resolvePlatformPullPath() {
  const fromArg = argVal("platform-pull", "");
  if (!fromArg) return null;
  const abs = isAbsolute(fromArg) ? fromArg : resolve(process.cwd(), fromArg);
  return existsSync(abs) ? abs : null;
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
    builder: normalizeBuilder(raw.builder || inferBuilder(raw) || "unassigned"),
    openedAt: raw.openedAt || raw.createdAt || raw.created_at || isoNow(),
    updatedAt: raw.updatedAt || raw.updated_at || raw.openedAt || isoNow(),
    summary: raw.summary || raw.body || raw.plainEnglish || "",
    seed: Boolean(raw.seed),
    ...(raw.platformStatus ? { platformStatus: String(raw.platformStatus) } : {}),
    ...(typeof raw.launchBlocking === "boolean" ? { launchBlocking: raw.launchBlocking } : {}),
    githubIssue: raw.githubIssue || raw.html_url || raw.url || "",
    evidence,
    ...(raw.claimedBy ? { claimedBy: normalizeBuilder(raw.claimedBy) } : {}),
    ...(raw.claimedAt ? { claimedAt: raw.claimedAt } : {}),
    ...(raw.agentNotes ? { agentNotes: String(raw.agentNotes) } : {}),
  };
}

function platformSummary(issue) {
  const text = String(issue.title || issue.detail || issue.whatToCheck || "").replace(/\s+/g, " ").trim();
  return text.split("\n", 1)[0].slice(0, 300);
}

function normalizePlatformItem(issue) {
  if (!issue || typeof issue !== "object" || !issue.id || !issue.title) return null;
  const platformStatus = String(issue.status || "Not started");
  const waitingOn = String(issue.waitingOn || "").trim();
  const notes = [];
  if (waitingOn) notes.push(`Waiting on: ${waitingOn}`);
  if (issue.severity) notes.push(`Severity: ${issue.severity}`);
  if (issue.evidenceNote) notes.push(`Evidence: ${String(issue.evidenceNote).replace(/\s+/g, " ").trim()}`);
  const evidence = [];
  if (issue.evidenceUrl) evidence.push({ label: "Platform evidence", url: String(issue.evidenceUrl), kind: "staging" });
  if (issue.evidenceNote) evidence.push({ label: "Platform evidence note", note: String(issue.evidenceNote).replace(/\s+/g, " ").trim(), kind: "note" });
  return {
    id: String(issue.id),
    title: String(issue.title),
    state:
      platformStatus === "Fixed — awaiting confirmation" && waitingOn
        ? "blocked"
        : PLATFORM_STATUS_MAP.get(platformStatus) || "open",
    area: PLATFORM_AREA_MAP.get(issue.area) || "ops",
    builder: PLATFORM_OWNER_MAP.get(issue.owner) || "unassigned",
    openedAt: issue.createdAt || issue.updatedAt || isoNow(),
    updatedAt: issue.updatedAt || issue.createdAt || isoNow(),
    summary: platformSummary(issue),
    seed: false,
    platformStatus,
    launchBlocking: Boolean(issue.launchBlocking),
    ...(notes.length ? { agentNotes: notes.join("; ") } : {}),
    ...(evidence.length ? { evidence } : {}),
  };
}

function buildPlatformPayload(platformPath) {
  const pull = JSON.parse(readFileSync(platformPath, "utf8"));
  const issues = Array.isArray(pull) ? pull : pull.issues || [];
  const existing = readExisting() || {};
  const seeds = (existing.items || []).filter((item) => item && item.seed === true);
  const liveItems = issues.map(normalizePlatformItem).filter(Boolean);
  let pulledAt = pull.pulled_at || pull.pulledAt || "";
  if (!pulledAt) {
    const summaryPath = join(dirname(platformPath), "SUMMARY.json");
    if (existsSync(summaryPath)) {
      try { pulledAt = JSON.parse(readFileSync(summaryPath, "utf8")).pulled_at || ""; } catch {}
    }
  }
  pulledAt = pulledAt || isoNow();
  const schema = existing.schema || {};
  schema.sourcePriority = [
    `${PLATFORM_SOURCE} (reviewed Platform mirror; preserve platformStatus, launchBlocking, and External→external builder mapping)`,
    "direct upsert or reviewed agent PR to tracker/items.json (Hub-first)",
    "TRACKER_EXPORT.json (optional local export; reviewed before publish)",
    "gh issues labeled tracker and/or findings (optional secondary feed)",
    "the seven seeded example rows (retained alongside live rows)",
  ];
  schema.itemFields = {
    ...(schema.itemFields || {}),
    platformStatus: "exact Platform status; primary Tracker filter; preserve In progress, Partially complete, and Fixed — awaiting confirmation",
    launchBlocking: "Platform boolean; Tracker badge only, never Dashboard launch readiness or hero %",
    builder: "claude | codex | cursor | grok | bot-commander | declan | engineering | external | unassigned; Platform External maps to external",
  };
  return {
    schemaVersion: 2,
    schema,
    updatedAt: pulledAt,
    source: PLATFORM_SOURCE,
    live: true,
    blocked: null,
    banner: "Live Platform mirror / Hub source of truth for Tracker filters. launchBlocking is shown here only and never feeds Dashboard launch readiness or hero %. See tracker/CODEX-DEDUPE.md: Codex outstanding-started pack dedupe is pending; counts are not final until that pack lands.",
    itemsNote: `${liveItems.length} live Platform rows from ${PLATFORM_SOURCE} (live:true, seed:false) plus the seven retained seed rows (seed:true). Hub state is derived from Platform status; platformStatus stays first-class. See tracker/CODEX-DEDUPE.md; Codex outstanding-started pack dedupe is pending, so counts are not final until that pack lands.`,
    items: [...seeds, ...liveItems],
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
  if (l.includes("claude")) return "claude";
  if (l.includes("codex")) return "codex";
  if (l.includes("cursor")) return "cursor";
  if (l.includes("grok")) return "grok";
  if (l.includes("bot") && l.includes("commander")) return "bot-commander";
  if (l.includes("engineering")) return "engineering";
  return "unassigned";
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
    live: source !== "seed-example" && items.some((item) => !item.seed),
    blocked:
      source === "seed-example"
        ? existing.blocked || {
            reason: "Legacy import blockers: Live Issue Tracker API returned 401 without a valid agent token; GitHub Projects still needs read:project.",
            since: "2026-09-03",
            needs: ["PLATFORM_ISSUE_AGENT_TOKEN / PLATFORM_ISSUE_AGENT_TOKENS", "read:project"],
          }
        : null,
    banner: source === "seed-example" ? BLOCKED_BANNER : extra && extra.banner ? extra.banner : "",
    itemsNote:
      source === "export"
        ? "Imported from TRACKER_EXPORT.json. Review before treating as live Projects truth."
        : source === "github-issues"
          ? "Imported from GitHub Issues labelled tracker/findings. Projects board fields are not included (needs read:project)."
          : existing.itemsNote ||
            "Seed/example set retained for the Hub-first board. Platform/Projects imports remain optional and blocked; do not treat seeds as live.",
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

  const platformPullPath = resolvePlatformPullPath();
  const exportPath = resolveExportPath();
  let payload;
  let note;

  if (platformPullPath) {
    console.log("using Platform pull:", platformPullPath);
    payload = buildPlatformPayload(platformPullPath);
    note = `platform pull ${(payload.items || []).length - (payload.items || []).filter((item) => item.seed).length} item(s) plus seeds`;
  } else if (exportPath) {
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
      if (payload.source === "seed-example" || !payload.source) {
        payload.banner = BLOCKED_BANNER;
        payload.live = false;
        payload.source = payload.source || "seed-example";
      }
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
