#!/usr/bin/env node
/**
 * build-coverage-admin.mjs
 *
 * Regenerate coverage/admin-pages.json + coverage/meta.json from:
 *   - coverage/sources/admin-menu.json | admin-menu.tsv   (sidebar map)
 *   - coverage/sources/folders.json + workspaces.json     (breadcrumbs)
 *   - coverage/sources/_routes_from_bundle.txt | routes-407.json | routes-407.csv
 *   - coverage/sources/admin-router-paths.json + router-extras.json
 *   - coverage.json page stamps (honest drop evidence only)
 *
 * Does not invent PASS rates. Default state is not_tested.
 *
 * Usage:
 *   node scripts/build-coverage-admin.mjs
 *   node scripts/build-coverage-admin.mjs --dry-run
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC = join(ROOT, "coverage", "sources");
const OUT_PAGES = join(ROOT, "coverage", "admin-pages.json");
const OUT_META = join(ROOT, "coverage", "meta.json");

const PLATFORM_TIP = "a73ff70b266057f226bb02c5f3112f72a92ad53d";
const PLATFORM_REPO = "HelgoIQ-Organization/HelgoIQ-Platform";

function argFlag(name) {
  return process.argv.includes(`--${name}`);
}

function loadJson(path) {
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
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

function normPath(p) {
  if (!p) return "";
  let s = String(p).trim();
  if (!s.startsWith("/")) return s;
  const q = s.indexOf("?");
  const pathOnly = q === -1 ? s : s.slice(0, q);
  if (pathOnly.length > 1 && pathOnly.endsWith("/")) return pathOnly.slice(0, -1);
  return pathOnly;
}

function titleFromRoute(route) {
  const base = normPath(route).replace(/^\/admin\/?/, "") || "home";
  const last = base.split("/").filter(Boolean).pop() || "home";
  return last
    .replace(/[:*].*$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim() || route;
}

function readMenu() {
  const json = loadJson(join(SRC, "admin-menu.json"));
  if (Array.isArray(json) && json.length) {
    return json.map((row) => ({
      key: row.key || "",
      label: row.label || titleFromRoute(row.path || row.route),
      path: row.path || row.route,
    }));
  }
  const tsvPath = join(SRC, "admin-menu.tsv");
  if (!existsSync(tsvPath)) return [];
  return readFileSync(tsvPath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [key, label, path] = line.split("\t");
      return { key: key || "", label: label || titleFromRoute(path), path };
    })
    .filter((row) => row.path);
}

function collectRouteList(raw) {
  const out = [];
  const add = (v) => {
    if (!v) return;
    if (typeof v === "string") out.push(v);
    else if (v.route) out.push(v.route);
    else if (v.path) out.push(v.path);
  };
  if (Array.isArray(raw)) raw.forEach(add);
  else if (raw && Array.isArray(raw.routes)) raw.routes.forEach(add);
  else if (raw && Array.isArray(raw.pages)) raw.pages.forEach(add);
  return [...new Set(out.map(normPath).filter((p) => p.startsWith("/")))];
}

function parseCsvRoutes(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim());
  if (!lines.length) return [];
  const header = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, "").toLowerCase());
  const idx = header.findIndex((h) => ["route", "path", "url", "page"].includes(h));
  const col = idx === -1 ? 0 : idx;
  const start = header.some((h) => ["route", "path", "url", "page"].includes(h)) ? 1 : 0;
  return lines.slice(start).map((line) => {
    const cells = line.split(",");
    return (cells[col] || "").trim().replace(/^"|"$/g, "");
  });
}

function load407AdminRoutes() {
  const files = [
    join(SRC, "_routes_from_bundle.txt"),
    join(SRC, "routes-407.txt"),
    join(SRC, "routes-407.json"),
    join(SRC, "routes-407.csv"),
  ];
  for (const file of files) {
    if (!existsSync(file)) continue;
    const text = readFileSync(file, "utf8");
    let routes = [];
    if (file.endsWith(".json")) routes = collectRouteList(JSON.parse(text));
    else if (file.endsWith(".csv")) routes = parseCsvRoutes(text).map(normPath);
    else {
      routes = text
        .split(/\r?\n/)
        .map((l) => normPath(l.replace(/^\d+\s+/, "")))
        .filter(Boolean);
    }
    const admin = routes.filter((r) => r === "/admin" || r.startsWith("/admin/"));
    if (admin.length) {
      return { routes: [...new Set(admin)], source: file.replace(ROOT + "/", ""), present: true };
    }
  }
  return { routes: [], source: null, present: false };
}

function loadRouterRoutes() {
  const extras = loadJson(join(SRC, "router-extras.json"));
  const dumped = loadJson(join(SRC, "admin-router-paths.json"));
  const fromExtras = extras ? collectRouteList(extras) : [];
  const fromDump = dumped ? collectRouteList(dumped) : [];
  return [...new Set([...fromDump, ...fromExtras])];
}

function pathSet(paths) {
  return new Set(paths.map(normPath));
}

function inSet(set, route) {
  const n = normPath(route);
  if (set.has(n)) return true;
  if (set.has(n + "/*")) return true;
  // query-stripped menu vs router
  const noQuery = n.split("?")[0];
  if (set.has(noQuery)) return true;
  return false;
}

function liveTipFromHub() {
  const cov = loadJson(join(ROOT, "coverage.json"));
  const dash = loadJson(join(ROOT, "dashboard.json"));
  return (
    (cov && cov.liveTip) ||
    (dash && dash.tip) ||
    (dash && dash.meta && (dash.meta.liveTip || dash.meta.buildStamp)) ||
    PLATFORM_TIP
  );
}

function verdictToState(verdict) {
  const v = String(verdict || "").toUpperCase();
  if (v === "PASS") return "fully_tested";
  if (v === "FAIL") return "failed";
  if (v === "BLOCKED" || v === "UNREACHABLE") return "blocked";
  if (v === "PARTIAL" || v === "UNCERTAIN") return "partially_tested";
  return "not_tested";
}

function evidenceFromCoverage() {
  const cov = loadJson(join(ROOT, "coverage.json"));
  const index = loadJson(join(ROOT, "index.json"));
  const drops = (index && index.drops) || [];
  const dropById = Object.fromEntries(drops.map((d) => [d.id, d]));
  const byRoute = new Map();
  for (const page of (cov && cov.pages) || []) {
    const route = normPath(page.route);
    if (!route.startsWith("/admin")) continue;
    const drop = dropById[page.evidenceDropId];
    const state = verdictToState(page.verdict);
    if (state === "not_tested" && !page.lastTestedStamp) {
      // keep a pointer so we can still attach the UNTESTED drop, but do not upgrade state
    }
    const prev = byRoute.get(route);
    const next = {
      state: state === "fully_tested" ? "not_tested" : state, // never invent complete greens from scrapes
      lastTestedStamp: page.lastTestedStamp || "",
      lastTestedAt: page.lastTestedAt || null,
      reason: page.verdict && page.verdict !== "UNTESTED" ? String(page.verdict) : null,
      blockedBy:
        String(page.verdict || "").toUpperCase() === "UNREACHABLE"
          ? "Unreachable on the stamped tip (see evidence drop)"
          : String(page.verdict || "").toUpperCase() === "BLOCKED"
            ? "Blocked — see evidence drop"
            : null,
      evidenceDropId: page.evidenceDropId || "",
      evidencePath: drop && drop.paths && drop.paths[0] ? drop.paths[0] : null,
      issueUrl: (drop && drop.githubIssue) || null,
    };
    // Prefer a stronger (non-not_tested) mapping if we already have one
    if (!prev || (prev.state === "not_tested" && next.state !== "not_tested")) {
      byRoute.set(route, next);
    }
  }
  return byRoute;
}

function folderForKey(folders, key) {
  for (const f of folders) {
    if ((f.keys || []).includes(key)) return f.name;
  }
  return null;
}

function workspaceForKey(workspaces, key) {
  for (const w of workspaces) {
    if ((w.navKeys || []).includes(key)) return w.label;
  }
  return null;
}

function breadcrumb(item, folders, workspaces) {
  if (!item || !item.key) return "ORPHANED";
  const hub = workspaceForKey(workspaces, item.key);
  const folder = folderForKey(folders, item.key);
  const parts = ["Home"];
  const pushUnique = (label) => {
    if (!label) return;
    if (parts[parts.length - 1] === label) return;
    parts.push(label);
  };
  pushUnique(hub);
  pushUnique(folder);
  pushUnique(item.label);
  return parts.join(" › ");
}

function completeness({ inMenu, in407, inRouter, bundlePresent }) {
  const other = bundlePresent ? in407 : inRouter;
  if (inMenu && other) return "matched";
  if (inMenu && !other) return "hub_only";
  if (!inMenu && other) return "orphaned";
  return "hub_only";
}

function pageId(route, key) {
  const base = key || normPath(route).replace(/^\//, "").replace(/[^a-z0-9]+/gi, "-");
  return "admin-" + base.replace(/^admin-/, "");
}

function build() {
  const dry = argFlag("dry-run");
  const menu = readMenu();
  const folders = loadJson(join(SRC, "folders.json")) || [];
  const workspaces = loadJson(join(SRC, "workspaces.json")) || [];
  const bundle = load407AdminRoutes();
  const routerRoutes = loadRouterRoutes();
  const liveTip = liveTipFromHub();
  const evidence = evidenceFromCoverage();

  const menuByPath = new Map();
  for (const item of menu) {
    const n = normPath(item.path);
    if (!menuByPath.has(n)) menuByPath.set(n, item);
    const noQ = n.split("?")[0];
    if (!menuByPath.has(noQ)) menuByPath.set(noQ, item);
  }

  const bundleSet = pathSet(bundle.routes);
  const routerSet = pathSet(routerRoutes);
  const unionOther = new Set([...bundleSet, ...routerSet]);

  const pages = [];
  const seen = new Set();

  function pushPage({ route, item, inMenu }) {
    const n = item && item.path ? item.path : route;
    const key = n + "::" + (item && item.key ? item.key : "");
    if (seen.has(key)) return;
    seen.add(key);

    const pathNorm = normPath(n);
    const in407 = bundle.present ? inSet(bundleSet, pathNorm) : null;
    const inRouter = inSet(routerSet, pathNorm);
    const ev = evidence.get(pathNorm) || evidence.get(normPath(route));
    const state = (ev && ev.state) || "not_tested";
    const stamp = (ev && ev.lastTestedStamp) || "";
    const stale = Boolean(stamp && liveTip && !shaMatch(stamp, liveTip));
    const orphaned = !inMenu;
    const evLinks = [];
    if (ev && ev.evidenceDropId) {
      evLinks.push({
        kind: "drop",
        id: ev.evidenceDropId,
        path: ev.evidencePath || null,
        href: "#drop-" + ev.evidenceDropId,
      });
    }
    if (ev && ev.issueUrl) {
      evLinks.push({ kind: "issue", href: ev.issueUrl });
    }

    pages.push({
      id: pageId(pathNorm, item && item.key),
      key: (item && item.key) || null,
      title: (item && item.label) || titleFromRoute(pathNorm),
      route: item && item.path ? item.path : pathNorm,
      breadcrumb: orphaned ? "ORPHANED" : breadcrumb(item, folders, workspaces),
      orphaned,
      inMenu,
      inRouter,
      in407,
      completeness: completeness({
        inMenu,
        in407: Boolean(in407),
        inRouter,
        bundlePresent: bundle.present,
      }),
      state,
      percentPassed: state === "partially_tested" && ev && typeof ev.percentPassed === "number" ? ev.percentPassed : null,
      percentFailed: state === "failed" && ev && typeof ev.percentFailed === "number" ? ev.percentFailed : null,
      blockedBy: state === "blocked" ? (ev && ev.blockedBy) || "Blocked — see evidence" : null,
      reason: ev && ev.reason ? ev.reason : null,
      lastTestedStamp: stamp,
      lastTestedAt: (ev && ev.lastTestedAt) || null,
      stale,
      evidence: evLinks,
      prUrl: null,
      issueUrl: (ev && ev.issueUrl) || null,
    });
  }

  for (const item of menu) {
    pushPage({ route: item.path, item, inMenu: true });
  }

  const extras = bundle.present ? bundle.routes : [...unionOther];
  for (const route of extras) {
    const n = normPath(route);
    if (menuByPath.has(n) || menuByPath.has(n.split("?")[0])) continue;
    pushPage({ route: n, item: null, inMenu: false });
  }

  pages.sort((a, b) => {
    if (a.orphaned !== b.orphaned) return a.orphaned ? 1 : -1;
    return String(a.route).localeCompare(String(b.route));
  });

  const counts = {
    total: pages.length,
    menu: pages.filter((p) => p.inMenu).length,
    matched: pages.filter((p) => p.completeness === "matched").length,
    hubOnly: pages.filter((p) => p.completeness === "hub_only").length,
    orphaned: pages.filter((p) => p.completeness === "orphaned").length,
    fullyTested: pages.filter((p) => p.state === "fully_tested").length,
    partiallyTested: pages.filter((p) => p.state === "partially_tested").length,
    blocked: pages.filter((p) => p.state === "blocked").length,
    failed: pages.filter((p) => p.state === "failed").length,
    notTested: pages.filter((p) => p.state === "not_tested").length,
    stale: pages.filter((p) => p.stale).length,
  };

  const bundleClause = bundle.present
    ? `the 407-route orphan audit admin subset (${bundle.routes.length} /admin paths from ${bundle.source})`
    : "the 407-route orphan audit admin subset is NOT in this repo yet — Bot Commander should drop `coverage/sources/_routes_from_bundle.txt` (or `routes-407.json` / `.csv`). Until then the router side is a best-effort AdminRoutes snapshot + extras from HelgoIQ-Platform @ " +
      shortSha(PLATFORM_TIP);

  const completenessStatement =
    "How we verified completeness: intersection of the product sidebar map " +
    `(HelgoIQ-Platform client/src/lib/adminMenuCatalog.ts + AdminNav adminMenuItems — ${menu.length} menu paths) ` +
    `vs ${bundleClause}. ` +
    `Counts: ${counts.matched} matched (in sidebar and in the router/407 side), ` +
    `${counts.hubOnly} hub-only (sidebar/menu path with no matching 407/router row), ` +
    `${counts.orphaned} orphaned (407/router path with no menu breadcrumb). ` +
    "SURFACES.md / full-census inventory was not in this hub repo; breadcrumbs use workspace › folder › title from the live AdminNav folder map. " +
    "Most pages are not_tested — we do not invent PASS rates. Known FAIL/BLOCKED rows are stamped only when a hub drop already named that route.";

  const generatedAt = new Date().toISOString();
  const meta = {
    generatedAt,
    liveTip,
    liveTipPlaceholder: !liveTip,
    liveTipShort: shortSha(liveTip),
    audience: "admin",
    platformRepo: PLATFORM_REPO,
    platformMenuTip: PLATFORM_TIP,
    bundle407: {
      present: bundle.present,
      source: bundle.source,
      adminRouteCount: bundle.routes.length,
      expectedBundleCount: 407,
    },
    counts,
    completenessStatement,
    sourcesUsed: {
      adminMenu: existsSync(join(SRC, "admin-menu.json"))
        ? "coverage/sources/admin-menu.json"
        : "coverage/sources/admin-menu.tsv",
      folders: "coverage/sources/folders.json",
      workspaces: "coverage/sources/workspaces.json",
      routerExtras: existsSync(join(SRC, "router-extras.json")),
      routes407: bundle.source,
      coverageJson: existsSync(join(ROOT, "coverage.json")),
    },
    notes: [
      "Admin ships first. Platform owner / Teacher / Client are placeholders.",
      "Feed coverage/sources/_routes_from_bundle.txt to reconcile against the Cursor 407 orphan list.",
      "Never invent greens. Prefer not_tested over a guessed PASS.",
    ],
  };

  if (dry) {
    console.log("DRY RUN — would write", OUT_PAGES, "and", OUT_META);
    console.log(JSON.stringify(counts, null, 2));
    console.log("407 present:", bundle.present, bundle.source || "(missing)");
    console.log("menu:", menu.length, "router extras:", routerRoutes.length);
    console.log(completenessStatement);
    return;
  }

  writeFileSync(join(SRC, "admin-menu.json"), JSON.stringify(menu, null, 2) + "\n");
  writeFileSync(OUT_PAGES, JSON.stringify(pages, null, 2) + "\n");
  writeFileSync(OUT_META, JSON.stringify(meta, null, 2) + "\n");
  console.log("wrote", OUT_PAGES, "pages:", pages.length);
  console.log("wrote", OUT_META);
  console.log("matched", counts.matched, "hub-only", counts.hubOnly, "orphaned", counts.orphaned);
  console.log("states: not_tested", counts.notTested, "failed", counts.failed, "blocked", counts.blocked);
}

build();
