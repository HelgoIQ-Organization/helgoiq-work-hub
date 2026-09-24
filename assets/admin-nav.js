/**
 * HelgoIQ Work Hub — Admin nav / IA planner (planning canvas only).
 * Default seed: coverage/sources/live-sidebar-seed.json (Studio + Platform, max 2 sidebar levels).
 * Legacy: folders.json + workspaces + admin-menu (optional archive toggle).
 * Catalog tabs: admin-menu.json + admin-pages.json. Persist: localStorage v2 + Export/Import.
 */
(function () {
  const STORAGE_KEY = "helgoiq-admin-nav-plan-v2";
  const SCHEMA_VERSION = 2;
  const PANEL_STUDIO = "studio";
  const PANEL_PLATFORM = "platform";
  const PANEL_LEGACY = "legacy";

  /** Hub id → primary menu keys + workspace ids (navKeys attached as tabs when unplaced). */
  const HUB_TAB_MAP = {
    "ai-command-centre": { primary: ["command-centre"], workspaces: ["dashboard"] },
    timetable: { primary: ["timetable"], workspaces: ["todays-studio"] },
    access: { primary: ["door-access"], workspaces: ["access-control"] },
    pos: { primary: ["pos-hub"], workspaces: ["kiosks"] },
    "safe-studio": { primary: ["safe-studio"], workspaces: ["safe-studio"] },
    security: { primary: ["security-hub"], workspaces: ["cameras-security", "cctv-hub"] },
    reports: { primary: ["reports-hub"], workspaces: ["reporting", "custom-dashboards"] },
    members: { primary: ["members"], workspaces: ["members"] },
    training: { primary: ["training-hub"], workspaces: ["training-hub"] },
    crm: { primary: ["crm-hub"], workspaces: ["sales-crm"] },
    journeys: { primary: ["automation", "journey-orchestrator"], workspaces: ["journey-automations"] },
    retention: { primary: ["retention-hub"], workspaces: ["retain-members"] },
    inbox: { primary: ["inbox"], workspaces: ["communications"] },
    campaigns: { primary: ["campaigns"], workspaces: ["campaigns-email"] },
    advertising: { primary: ["meta-hub"], workspaces: ["advertising"] },
    social: { primary: ["social"], workspaces: ["social-reviews"] },
    onsite: { primary: ["popups", "banners"], workspaces: ["popups-onsite", "qr-generator", "digital-signage"] },
    website: { primary: ["website"], workspaces: ["website-content"] },
    staff: { primary: ["staff-hub"], workspaces: ["staff-hr"] },
    learning: { primary: ["learning-engine"], workspaces: ["learning-engine"] },
    "lms-overview": {
      primary: [
        "academy",
        "academy-insights",
        "academy-settings",
        "academy-reports",
        "academy-ai-personality",
        "academy-ai-analytics",
        "academy-ai-settings",
      ],
      workspaces: [],
    },
    courses: {
      primary: [
        "academy-courses",
        "academy-libraries",
        "academy-exercises",
        "academy-quizzes",
        "academy-resources",
        "academy-news",
        "academy-course-groups",
        "academy-course-recordings",
        "academy-import-content",
        "academy-class-tags",
        "academy-cohort-tags",
      ],
      workspaces: [],
    },
    learners: {
      primary: [
        "academy-learners",
        "academy-users",
        "academy-invites",
        "academy-reflections",
        "academy-teachers",
        "academy-assessments",
        "academy-import-students",
      ],
      workspaces: [],
    },
    certificates: { primary: ["academy-certificates", "academy-certificate-design"], workspaces: [] },
    "lms-community": { primary: ["academy-community", "academy-communications"], workspaces: [] },
    commerce: {
      primary: [
        "academy-commerce",
        "academy-financials",
        "academy-pricing",
        "academy-discount-codes",
        "academy-contracts",
        "academy-terms",
        "academy-automations",
        "academy-import",
      ],
      workspaces: [],
    },
    payments: {
      primary: ["finance-hub", "dispute-hub", "discount-codes", "pt-packages", "platform-billing"],
      workspaces: ["finance-payments"],
    },
    products: { primary: ["products"], workspaces: [] },
    bookkeeping: { primary: ["bookkeeping"], workspaces: [] },
    "open-banking": { primary: ["open-banking"], workspaces: [] },
    "gift-cards": { primary: ["gift-cards"], workspaces: [] },
    revenue: { primary: ["revenue-intelligence"], workspaces: ["revenue-intelligence"] },
    loyalty: { primary: ["milestones"], workspaces: ["loyalty-rewards"] },
    retreats: { primary: ["retreats"], workspaces: ["retreats"] },
    setup: { primary: ["setup"], workspaces: ["setup"] },
    connections: { primary: ["studio-connections"], workspaces: ["connections"] },
    data: { primary: ["data-migration"], workspaces: ["data-integrations"] },
    guides: {
      primary: ["software-guides", "video-guides", "progress-guides"],
      workspaces: ["onboarding-guides", "video-guides"],
    },
    compliance: { primary: ["gdpr", "documents"], workspaces: ["compliance-governance"] },
  };

  const state = {
    ready: false,
    loading: false,
    panelMode: PANEL_STUDIO,
    tree: [],
    orphans: [],
    collapsed: new Set(),
    orphanQuery: "",
    seedMeta: null,
    menuByKey: {},
    workspacesById: {},
    pages: [],
    liveSeed: null,
    plans: {
      studio: null,
      platform: null,
      legacy: null,
    },
    platformKeySet: new Set(),
    collapseDefaultsMigrated: false,
  };

  let dragPayload = null;

  function $(id) {
    return document.getElementById(id);
  }

  function uid(prefix) {
    return (prefix || "n") + "-" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  }

  function normalizePath(p) {
    if (!p) return "";
    let s = String(p).trim();
    if (!s) return "";
    if (!s.startsWith("/")) s = "/" + s;
    if (s.length > 1 && s.endsWith("/")) s = s.slice(0, -1);
    return s;
  }


  const STAGING_ORIGIN = "https://lobster-app-662c7.ondigitalocean.app";
  const STAGING_COMPANY = "150002";

  /** Concrete path for preview: drop :param / * segments so list pages open when an id is unknown. */
  function previewPath(raw) {
    const full = normalizePath(raw);
    if (!full) return "";
    const parts = full.split("/").filter(Boolean);
    const concrete = [];
    for (const part of parts) {
      if (part.startsWith(":") || part.startsWith("*") || part.includes("{")) break;
      concrete.push(part);
    }
    return concrete.length ? "/" + concrete.join("/") : "";
  }

  function stagingPreviewHref(raw) {
    const p = previewPath(raw) || "/admin";
    try {
      const url = new URL(p, STAGING_ORIGIN);
      url.searchParams.set("c", STAGING_COMPANY);
      return url.toString();
    } catch (err) {
      return STAGING_ORIGIN + "/admin?c=" + STAGING_COMPANY;
    }
  }

  function previewTitle(full) {
    const concrete = previewPath(full);
    const truncated = concrete && concrete !== full;
    return truncated
      ? "Open Bluebird staging (list page — this route needs an id). Close the tab to return here."
      : "Open this page on Bluebird staging. Close the tab to return here.";
  }

  /** Clickable path → Bluebird staging (new tab). Hub Admin nav stays open. */
  function appendPathPreview(parent, rawPath) {
    const full = normalizePath(rawPath);
    if (!full || !parent) return null;
    const href = stagingPreviewHref(full);
    const path = document.createElement("a");
    path.className = "an-path an-path-link";
    path.href = href;
    path.target = "_blank";
    path.rel = "noopener noreferrer";
    path.textContent = full;
    path.title = previewTitle(full);
    path.addEventListener("click", (e) => e.stopPropagation());
    path.addEventListener("dragstart", (e) => e.stopPropagation());
    parent.appendChild(path);
    return path;
  }

  function makeOpenPreviewButton(rawPath) {
    const full = normalizePath(rawPath);
    if (!full) return null;
    const href = stagingPreviewHref(full);
    const openBtn = document.createElement("a");
    openBtn.className = "btn mini ghost an-open-preview";
    openBtn.href = href;
    openBtn.target = "_blank";
    openBtn.rel = "noopener noreferrer";
    openBtn.textContent = "Open";
    openBtn.title = previewTitle(full);
    openBtn.addEventListener("click", (e) => e.stopPropagation());
    openBtn.addEventListener("dragstart", (e) => e.stopPropagation());
    return openBtn;
  }


  function nearIdentical(a, b) {
    const na = normalizePath(a).toLowerCase();
    const nb = normalizePath(b).toLowerCase();
    if (!na || !nb || na === nb) return na === nb;
    const strip = (x) =>
      x
        .replace(/\/:[^/]+/g, "/:param")
        .replace(/\{[^}]+\}/g, ":param")
        .replace(/\/+/g, "/")
        .replace(/\/$/, "");
    const sa = strip(na);
    const sb = strip(nb);
    if (sa === sb) return true;
    if (sa.length > 8 && sb.length > 8) {
      const dist = Math.abs(sa.length - sb.length);
      if (dist <= 6 && (sa.startsWith(sb) || sb.startsWith(sa))) return true;
    }
    return false;
  }

  function labelNorm(l) {
    return String(l || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(url + " " + res.status);
    return res.json();
  }

  function leafFromMenuKey(key, menuByKey) {
    const item = menuByKey[key];
    if (!item) {
      return {
        id: uid("tab"),
        kind: "leaf",
        key: key,
        label: key,
        path: "",
        markedDelete: false,
        children: [],
      };
    }
    return {
      id: uid("tab"),
      kind: "leaf",
      key: item.key,
      label: item.label,
      path: item.path,
      markedDelete: false,
      children: [],
    };
  }

  function takeKeys(candidates, placedKeys, menuByKey, platformKeys) {
    const out = [];
    (candidates || []).forEach((key) => {
      if (!key || placedKeys.has(key)) return;
      if (platformKeys && platformKeys.has(key)) return;
      if (!menuByKey[key]) return;
      placedKeys.add(key);
      out.push(key);
    });
    return out;
  }

  function collectKeys(node, set) {
    if (node.key) set.add(node.key);
    (node.children || []).forEach((c) => collectKeys(c, set));
  }

  function collectPaths(node, set) {
    const p = normalizePath(node.path);
    if (p) set.add(p);
    (node.children || []).forEach((c) => collectPaths(c, set));
  }

  function walk(nodes, fn, parent) {
    (nodes || []).forEach((n, i) => {
      fn(n, parent, i, nodes);
      if (n.children && n.children.length) walk(n.children, fn, n);
    });
  }

  function findNode(nodes, id, parent) {
    for (let i = 0; i < (nodes || []).length; i++) {
      const n = nodes[i];
      if (n.id === id) return { node: n, parent: parent || null, index: i, siblings: nodes };
      const found = findNode(n.children || [], id, n);
      if (found) return found;
    }
    return null;
  }

  function removeNode(id) {
    const hit = findNode(state.tree, id, null);
    if (hit) {
      hit.siblings.splice(hit.index, 1);
      return hit.node;
    }
    const oi = state.orphans.findIndex((o) => o.id === id);
    if (oi >= 0) {
      return state.orphans.splice(oi, 1)[0];
    }
    return null;
  }

  function platformKeysFromSeed(liveSeed) {
    const set = new Set();
    const hubs = (liveSeed && liveSeed.platformRoot && liveSeed.platformRoot.hubs) || [];
    hubs.forEach((h) => (h.keys || []).forEach((k) => set.add(k)));
    return set;
  }

  function resolveHubTabKeys(hubId, menuByKey, workspacesById, placedKeys, platformKeys) {
    const cfg = HUB_TAB_MAP[hubId] || { primary: [hubId], workspaces: [] };
    const keys = [];
    takeKeys(cfg.primary, placedKeys, menuByKey, platformKeys).forEach((k) => keys.push(k));
    // Exact hub id as menu key if still free
    takeKeys([hubId], placedKeys, menuByKey, platformKeys).forEach((k) => keys.push(k));
    (cfg.workspaces || []).forEach((wid) => {
      const ws = workspacesById[wid];
      if (!ws) return;
      takeKeys(ws.navKeys || [], placedKeys, menuByKey, platformKeys).forEach((k) => keys.push(k));
    });
    return keys;
  }

  function seedStudioTree(liveSeed, menu, workspaces) {
    const menuByKey = {};
    menu.forEach((m) => {
      menuByKey[m.key] = m;
    });
    const workspacesById = {};
    workspaces.forEach((w) => {
      workspacesById[w.id] = w;
    });
    state.menuByKey = menuByKey;
    state.workspacesById = workspacesById;

    const platformKeys = platformKeysFromSeed(liveSeed);
    state.platformKeySet = platformKeys;
    const placedKeys = new Set();

    const hubsByRoot = {};
    (liveSeed.studioHubs || []).forEach((h) => {
      if (!hubsByRoot[h.rootId]) hubsByRoot[h.rootId] = [];
      hubsByRoot[h.rootId].push(h);
    });

    // Pass 1: primary keys in hub order so specific hubs win over broad workspaces
    const hubTabKeys = {};
    (liveSeed.studioHubs || []).forEach((h) => {
      const cfg = HUB_TAB_MAP[h.id] || { primary: [h.id], workspaces: [] };
      hubTabKeys[h.id] = takeKeys(cfg.primary.concat([h.id]), placedKeys, menuByKey, platformKeys);
    });
    // Pass 2: workspace extras
    (liveSeed.studioHubs || []).forEach((h) => {
      const cfg = HUB_TAB_MAP[h.id] || { primary: [], workspaces: [] };
      const extras = [];
      (cfg.workspaces || []).forEach((wid) => {
        const ws = workspacesById[wid];
        if (!ws) return;
        takeKeys(ws.navKeys || [], placedKeys, menuByKey, platformKeys).forEach((k) => extras.push(k));
      });
      hubTabKeys[h.id] = (hubTabKeys[h.id] || []).concat(extras);
    });

    const tree = (liveSeed.studioRoots || []).map((root) => {
      const children = (hubsByRoot[root.id] || []).map((hub) => {
        const tabKeys = hubTabKeys[hub.id] || [];
        const tabs = tabKeys.map((k) => leafFromMenuKey(k, menuByKey));
        const kind = tabs.length ? "hub" : "hub";
        return {
          id: uid("hub"),
          kind: kind,
          key: hub.id,
          label: hub.label,
          path: "",
          rootId: root.id,
          hubId: hub.id,
          markedDelete: false,
          children: tabs,
        };
      });
      return {
        id: uid("root"),
        kind: "menu",
        label: root.label,
        path: "",
        key: root.id,
        rootId: root.id,
        panel: PANEL_STUDIO,
        markedDelete: false,
        children,
      };
    });

    return { tree, placedKeys, menuByKey, workspacesById };
  }

  function seedPlatformTree(liveSeed, menu) {
    const menuByKey = state.menuByKey && Object.keys(state.menuByKey).length ? state.menuByKey : {};
    if (!Object.keys(menuByKey).length) {
      menu.forEach((m) => {
        menuByKey[m.key] = m;
      });
      state.menuByKey = menuByKey;
    }
    const platformKeys = platformKeysFromSeed(liveSeed);
    state.platformKeySet = platformKeys;
    const placedKeys = new Set();
    const pr = liveSeed.platformRoot || { id: "platform", label: "Platform", hubs: [] };

    const children = (pr.hubs || []).map((hub) => {
      const tabs = [];
      (hub.keys || []).forEach((k) => {
        placedKeys.add(k);
        tabs.push(leafFromMenuKey(k, menuByKey));
      });
      return {
        id: uid("hub"),
        kind: "hub",
        key: hub.id,
        label: hub.label,
        path: "",
        hubId: hub.id,
        panel: PANEL_PLATFORM,
        markedDelete: false,
        children: tabs,
      };
    });

    const tree = [
      {
        id: uid("root"),
        kind: "menu",
        label: pr.label || "Platform",
        path: "",
        key: pr.id || "platform",
        panel: PANEL_PLATFORM,
        badge: "Platform owner",
        markedDelete: false,
        children,
      },
    ];
    return { tree, placedKeys };
  }

  /** Legacy seed from folders.json (old Core Operations etc.). */
  function buildNodeFromMenuKey(key, workspacesById, menuByKey, depth) {
    const item = menuByKey[key];
    if (!item) return null;
    const ws = workspacesById[key];
    const base = {
      id: uid("item"),
      key: item.key,
      label: item.label,
      path: item.path,
      markedDelete: false,
      children: [],
    };
    if (!ws) {
      base.kind = "leaf";
      return base;
    }
    const tabKeys = (ws.navKeys || []).filter((k) => k !== key);
    const secondaryHubKeys = new Set(
      tabKeys.filter((k) => workspacesById[k] && workspacesById[k].navKeys && workspacesById[k].navKeys.length > 1)
    );
    base.kind = secondaryHubKeys.size ? "hub-secondary" : "hub";
    base.workspaceId = ws.id;
    base.children = tabKeys
      .map((tk) => {
        if (secondaryHubKeys.has(tk) && depth < 2) {
          const childWs = workspacesById[tk];
          const childMenu = menuByKey[tk];
          return {
            id: uid("hub"),
            kind: "hub",
            key: tk,
            label: (childMenu && childMenu.label) || childWs.label || tk,
            path: (childMenu && childMenu.path) || "",
            workspaceId: childWs.id,
            markedDelete: false,
            children: (childWs.navKeys || [])
              .filter((k) => k !== tk)
              .map((sk) => leafFromMenuKey(sk, menuByKey)),
          };
        }
        return leafFromMenuKey(tk, menuByKey);
      })
      .filter(Boolean);
    return base;
  }

  function seedLegacyTree(folders, workspaces, menu) {
    const menuByKey = {};
    menu.forEach((m) => {
      menuByKey[m.key] = m;
    });
    const workspacesById = {};
    workspaces.forEach((w) => {
      workspacesById[w.id] = w;
    });
    state.menuByKey = menuByKey;
    state.workspacesById = workspacesById;

    const placedKeys = new Set();
    const tree = folders.map((folder) => {
      const children = [];
      (folder.keys || []).forEach((key) => {
        const node = buildNodeFromMenuKey(key, workspacesById, menuByKey, 0);
        if (!node) return;
        children.push(node);
        collectKeys(node, placedKeys);
      });
      return {
        id: uid("menu"),
        kind: "menu",
        label: folder.name,
        path: "",
        key: null,
        panel: PANEL_LEGACY,
        markedDelete: false,
        children,
      };
    });

    menu.forEach((m) => {
      if (!placedKeys.has(m.key)) {
        const node = buildNodeFromMenuKey(m.key, workspacesById, menuByKey, 0);
        if (node) {
          tree.push({
            id: uid("menu"),
            kind: "menu",
            label: "Unfiled: " + m.label,
            path: "",
            key: null,
            panel: PANEL_LEGACY,
            markedDelete: false,
            children: [node],
          });
          collectKeys(node, placedKeys);
        }
      }
    });

    return { tree, placedKeys };
  }

  function buildOrphans(pages, tree, extraPlacedKeys) {
    const placedKeys = new Set(extraPlacedKeys || []);
    const placedPaths = new Set();
    walk(tree, (n) => {
      if (n.key) placedKeys.add(n.key);
      const p = normalizePath(n.path);
      if (p) placedPaths.add(p);
    });
    // Keys reserved for the other live panel are not orphans
    if (state.panelMode !== PANEL_LEGACY) {
      state.platformKeySet.forEach((k) => placedKeys.add(k));
    }

    const orphans = [];
    const seen = new Set();
    (pages || []).forEach((page) => {
      const route = normalizePath(page.route);
      const key = page.key || null;
      const inTree = (key && placedKeys.has(key)) || (route && placedPaths.has(route));
      if (inTree) return;
      const sig = route || page.id || key || page.title;
      if (!sig || seen.has(sig)) return;
      seen.add(sig);
      orphans.push({
        id: uid("orphan"),
        kind: "leaf",
        key: key,
        label: page.title || route || key || page.id,
        path: route || "",
        pageId: page.id,
        markedDelete: false,
        children: [],
        fromOrphanRail: true,
      });
    });
    // Unmapped menu keys (not in pages) also surface as orphans
    Object.keys(state.menuByKey || {}).forEach((key) => {
      if (placedKeys.has(key)) return;
      if (seen.has(key)) return;
      const m = state.menuByKey[key];
      const route = normalizePath(m.path);
      if (route && placedPaths.has(route)) return;
      if (route && seen.has(route)) return;
      seen.add(key);
      if (route) seen.add(route);
      orphans.push({
        id: uid("orphan"),
        kind: "leaf",
        key: key,
        label: m.label || key,
        path: route || "",
        markedDelete: false,
        children: [],
        fromOrphanRail: true,
      });
    });
    orphans.sort((a, b) => (a.path || a.label).localeCompare(b.path || b.label));
    return orphans;
  }

  function detectDuplicates() {
    const byPath = new Map();
    const byLabel = new Map();
    const pathList = [];
    const issues = [];
    const dupIds = new Set();

    function add(map, key, node) {
      if (!key) return;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(node);
    }

    walk(state.tree, (n) => {
      const p = normalizePath(n.path);
      if (p) {
        add(byPath, p.toLowerCase(), n);
        pathList.push({ path: p, node: n });
      }
      add(byLabel, labelNorm(n.label), n);
    });
    state.orphans.forEach((n) => {
      const p = normalizePath(n.path);
      if (p) {
        add(byPath, p.toLowerCase(), n);
        pathList.push({ path: p, node: n });
      }
      add(byLabel, labelNorm(n.label), n);
    });

    byPath.forEach((nodes, p) => {
      if (nodes.length > 1) {
        nodes.forEach((n) => dupIds.add(n.id));
        issues.push({
          type: "same-path",
          message: "Same path " + p + " ×" + nodes.length + " (" + nodes.map((n) => n.label).join(", ") + ")",
        });
      }
    });

    byLabel.forEach((nodes, lab) => {
      if (!lab || nodes.length < 2) return;
      if (lab === "home" || lab === "overview" || lab === "settings") return;
      const paths = new Set(nodes.map((n) => normalizePath(n.path).toLowerCase()).filter(Boolean));
      if (paths.size <= 1 && nodes.every((n) => !n.path)) return;
      if (paths.size === 1) return;
      nodes.forEach((n) => dupIds.add(n.id));
      issues.push({
        type: "same-label",
        message: 'Same label "' + nodes[0].label + '" on different routes ×' + nodes.length,
      });
    });

    const cap = Math.min(pathList.length, 120);
    for (let i = 0; i < cap; i++) {
      for (let j = i + 1; j < cap; j++) {
        const a = pathList[i];
        const b = pathList[j];
        if (a.path.toLowerCase() === b.path.toLowerCase()) continue;
        if (nearIdentical(a.path, b.path)) {
          dupIds.add(a.node.id);
          dupIds.add(b.node.id);
          issues.push({
            type: "near-path",
            message: "Near-identical routes: " + a.path + " ≈ " + b.path,
          });
        }
      }
    }

    const seenMsg = new Set();
    const unique = [];
    issues.forEach((iss) => {
      if (seenMsg.has(iss.message)) return;
      seenMsg.add(iss.message);
      unique.push(iss);
    });

    return { issues: unique.slice(0, 40), dupIds };
  }

  function snapshotActivePlan() {
    return {
      tree: state.tree,
      orphans: state.orphans,
      collapsed: Array.from(state.collapsed),
    };
  }

  function applySnapshot(snap) {
    if (!snap) return;
    state.tree = snap.tree || [];
    state.orphans = snap.orphans || [];
    state.collapsed = new Set(snap.collapsed || []);
  }

  function persist() {
    state.plans[state.panelMode] = snapshotActivePlan();
    const payload = serialize();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      console.warn("admin-nav localStorage failed", err);
    }
  }

  function serialize() {
    state.plans[state.panelMode] = snapshotActivePlan();
    return {
      schemaVersion: SCHEMA_VERSION,
      schema: {
        description: "HelgoIQ Admin IA planner export for Claude (v2 live Studio/Platform seed)",
        panelModes: [PANEL_STUDIO, PANEL_PLATFORM, PANEL_LEGACY],
        nodeKinds: ["menu", "leaf", "hub", "hub-secondary"],
        fields: {
          id: "stable planning id",
          kind: "menu | leaf | hub | hub-secondary",
          label: "display name",
          key: "admin-menu / hub key when known",
          path: "admin route when known",
          workspaceId: "workspaces.json id when hub",
          badge: "optional badge e.g. Platform owner",
          panel: "studio | platform | legacy",
          markedDelete: "soft planning delete / don't need",
          children: "nested nodes (max 2 sidebar levels: root → hub; below = tabs)",
        },
      },
      updatedAt: new Date().toISOString(),
      collapseDefaultsMigrated: state.collapseDefaultsMigrated,
      panelMode: state.panelMode,
      seedMeta: state.seedMeta,
      plans: state.plans,
      tree: state.tree,
      orphans: state.orphans,
      collapsed: Array.from(state.collapsed),
    };
  }

  function loadPersisted() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || data.schemaVersion !== SCHEMA_VERSION) return null;
      if (!data.plans && !Array.isArray(data.tree)) return null;
      return data;
    } catch (err) {
      return null;
    }
  }

  function applyPlan(data) {
    if (data.plans) {
      state.plans = {
        studio: data.plans.studio || null,
        platform: data.plans.platform || null,
        legacy: data.plans.legacy || null,
      };
    }
    if (data.panelMode && [PANEL_STUDIO, PANEL_PLATFORM, PANEL_LEGACY].includes(data.panelMode)) {
      state.panelMode = data.panelMode;
    }
    if (data.seedMeta) state.seedMeta = data.seedMeta;
    const snap = (data.plans && data.plans[state.panelMode]) || {
      tree: data.tree || [],
      orphans: data.orphans || [],
      collapsed: data.collapsed || [],
    };
    applySnapshot(snap);
  }

  function kindLabel(kind) {
    if (kind === "menu") return "root";
    if (kind === "hub") return "hub+tabs";
    if (kind === "hub-secondary") return "hub+tabs+secondary";
    return "tab";
  }

  function kindClass(kind) {
    if (kind === "menu") return "an-kind-menu";
    if (kind === "hub") return "an-kind-hub";
    if (kind === "hub-secondary") return "an-kind-hub-secondary";
    return "an-kind-leaf";
  }

  function canHaveChildren(node) {
    return node && (node.kind === "menu" || node.kind === "hub" || node.kind === "hub-secondary");
  }

  function collapseHubsDefault(tree, collapsed) {
    const target = collapsed || state.collapsed;
    walk(tree || state.tree, (node) => {
      if (canHaveChildren(node) && node.children && node.children.length) target.add(node.id);
    });
    return target;
  }

  function defaultCollapsedIds(tree) {
    return Array.from(collapseHubsDefault(tree, new Set()));
  }

  function hasExpandedNodes() {
    let expanded = false;
    walk(state.tree, (node) => {
      if (canHaveChildren(node) && node.children && node.children.length && !state.collapsed.has(node.id)) {
        expanded = true;
      }
    });
    return expanded;
  }

  function updateRollUpToggleUI() {
    const btn = $("anRollUpToggle");
    if (!btn) return;
    const expanded = hasExpandedNodes();
    btn.textContent = expanded ? "Roll up all" : "Expand all";
    btn.title = expanded ? "Collapse all menus and hubs" : "Expand all menus and hubs";
    btn.setAttribute("aria-label", btn.title);
  }

  function updatePanelToggleUI() {
    document.querySelectorAll("[data-an-panel]").forEach((btn) => {
      const on = btn.getAttribute("data-an-panel") === state.panelMode;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("an-panel-active", on);
    });
    const wrap = $("anTreeWrap");
    if (wrap) {
      wrap.classList.toggle("an-panel-platform", state.panelMode === PANEL_PLATFORM);
      wrap.classList.toggle("an-panel-legacy", state.panelMode === PANEL_LEGACY);
      wrap.classList.toggle("an-panel-studio", state.panelMode === PANEL_STUDIO);
    }
    const title = $("anTreeTitle");
    if (title) {
      if (state.panelMode === PANEL_PLATFORM) title.textContent = "Platform owner tree";
      else if (state.panelMode === PANEL_LEGACY) title.textContent = "Legacy archive (folders.json)";
      else title.textContent = "Studio tree";
    }
    const sub = $("anTreeSub");
    if (sub) {
      if (state.panelMode === PANEL_PLATFORM) sub.textContent = "Overview · Product · Operations · Governance — Platform owner only";
      else if (state.panelMode === PANEL_LEGACY) sub.textContent = "Old Core Operations / Sales & CRM folders seed";
      else sub.textContent = "Root → hub (max two sidebar levels). Tabs under hubs.";
    }
  }

  function render() {
    const dups = detectDuplicates();
    updatePanelToggleUI();
    updateRollUpToggleUI();
    renderStats(dups);
    renderDupWarn(dups);
    renderTree(dups.dupIds);
    renderOrphans(dups.dupIds);
  }

  function renderStats(dups) {
    const el = $("anStats");
    if (!el) return;
    let menus = 0,
      hubs = 0,
      leaves = 0,
      marked = 0;
    walk(state.tree, (n) => {
      if (n.markedDelete) marked++;
      if (n.kind === "menu") menus++;
      else if (n.kind === "hub" || n.kind === "hub-secondary") hubs++;
      else leaves++;
    });
    state.orphans.forEach((o) => {
      if (o.markedDelete) marked++;
    });
    el.innerHTML =
      '<span class="an-stat"><strong>' +
      menus +
      "</strong> roots</span>" +
      '<span class="an-stat"><strong>' +
      hubs +
      "</strong> hubs</span>" +
      '<span class="an-stat"><strong>' +
      leaves +
      "</strong> tabs</span>" +
      '<span class="an-stat"><strong>' +
      state.orphans.length +
      "</strong> orphans</span>" +
      '<span class="an-stat"><strong>' +
      marked +
      "</strong> don’t need</span>" +
      (dups.issues.length
        ? '<span class="an-stat"><strong>' + dups.issues.length + "</strong> dup warnings</span>"
        : "");
  }

  function renderDupWarn(dups) {
    const el = $("anDupWarn");
    if (!el) return;
    if (!dups.issues.length) {
      el.classList.add("hidden");
      el.innerHTML = "";
      return;
    }
    el.classList.remove("hidden");
    el.innerHTML =
      "<strong>Duplicate warnings</strong> (same path, same label, or near-identical routes)" +
      "<ul>" +
      dups.issues
        .slice(0, 12)
        .map((i) => "<li>" + escapeHtml(i.message) + "</li>")
        .join("") +
      (dups.issues.length > 12 ? "<li>… +" + (dups.issues.length - 12) + " more</li>" : "") +
      "</ul>";
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTree(dupIds) {
    const root = $("anTree");
    if (!root) return;
    root.innerHTML = "";
    if (!state.tree.length) {
      root.innerHTML = '<p class="an-empty-hint">No menus yet — use “New top-level menu” or Reset to seed.</p>';
      return;
    }
    state.tree.forEach((node) => root.appendChild(renderNode(node, dupIds, 0)));
    root.ondragover = onRootDragOver;
    root.ondrop = onRootDrop;
  }

  function renderNode(node, dupIds, depth) {
    const wrap = document.createElement("div");
    wrap.className = "an-node an-kind-wrap-" + (node.kind || "leaf");
    if (node.panel === PANEL_PLATFORM || node.badge) wrap.classList.add("an-platform-node");
    if (node.markedDelete) wrap.classList.add("an-marked-delete");
    if (dupIds && dupIds.has(node.id)) wrap.classList.add("an-dup");
    wrap.dataset.id = node.id;
    wrap.dataset.kind = node.kind || "leaf";

    const hasKids = canHaveChildren(node);
    const collapsed = state.collapsed.has(node.id);
    const childCount = (node.children || []).length;

    const row = document.createElement("div");
    row.className = "an-row";

    const handle = document.createElement("span");
    handle.className = "an-handle";
    handle.title = "Drag to move / reorder";
    handle.textContent = "⠿";
    handle.draggable = true;
    handle.addEventListener("dragstart", (e) => onDragStart(e, node, "tree"));
    handle.addEventListener("dragend", onDragEnd);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "an-toggle";
    toggle.textContent = hasKids ? (collapsed ? "▸" : "▾") : "·";
    toggle.disabled = !hasKids;
    toggle.setAttribute("aria-label", collapsed ? "Expand" : "Collapse");
    toggle.addEventListener("click", () => {
      if (state.collapsed.has(node.id)) state.collapsed.delete(node.id);
      else state.collapsed.add(node.id);
      persist();
      render();
    });

    const kind = document.createElement("span");
    kind.className = "an-kind " + kindClass(node.kind);
    kind.textContent = kindLabel(node.kind);

    const label = document.createElement("span");
    label.className = "an-label";
    label.textContent = node.label || "(untitled)";

    row.appendChild(handle);
    row.appendChild(toggle);
    row.appendChild(kind);
    row.appendChild(label);

    if (node.badge) {
      const badge = document.createElement("span");
      badge.className = "an-platform-badge";
      badge.textContent = node.badge;
      row.appendChild(badge);
    }

    if (node.path) {
      appendPathPreview(row, node.path);
    }

    if (dupIds && dupIds.has(node.id)) {
      const badge = document.createElement("span");
      badge.className = "an-dup-badge";
      badge.textContent = "dup";
      row.appendChild(badge);
    }

    const actions = document.createElement("div");
    actions.className = "an-row-actions";

    if (node.path) {
      const openBtn = makeOpenPreviewButton(node.path);
      if (openBtn) actions.appendChild(openBtn);
    }

    if (hasKids) {
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "btn mini ghost";
      addBtn.textContent = "Add child";
      addBtn.title = "Add empty leaf under this node";
      addBtn.addEventListener("click", () => {
        if (!node.children) node.children = [];
        node.children.push({
          id: uid("leaf"),
          kind: "leaf",
          label: "New item",
          key: null,
          path: "",
          markedDelete: false,
          children: [],
        });
        state.collapsed.delete(node.id);
        persist();
        render();
      });
      actions.appendChild(addBtn);
    }

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "btn mini danger-soft";
    delBtn.textContent = node.markedDelete ? "Keep" : "Don’t need";
    delBtn.setAttribute("aria-pressed", node.markedDelete ? "true" : "false");
    delBtn.title = "Soft planning mark — does not delete live product nav";
    delBtn.addEventListener("click", () => {
      node.markedDelete = !node.markedDelete;
      persist();
      render();
    });
    actions.appendChild(delBtn);

    const parkBtn = document.createElement("button");
    parkBtn.type = "button";
    parkBtn.className = "btn mini ghost";
    parkBtn.textContent = "→ Orphan";
    parkBtn.title = "Park on orphan rail";
    parkBtn.addEventListener("click", () => {
      const removed = removeNode(node.id);
      if (removed) {
        removed.fromOrphanRail = true;
        if (removed.kind === "menu" && removed.children && removed.children.length) {
          removed.children.forEach((c) => {
            c.fromOrphanRail = true;
            state.orphans.push(c);
          });
        } else {
          state.orphans.push(removed);
        }
        state.orphans.sort((a, b) => (a.path || a.label || "").localeCompare(b.path || b.label || ""));
        persist();
        render();
      }
    });
    actions.appendChild(parkBtn);

    row.appendChild(actions);
    wrap.appendChild(row);

    wrap.addEventListener("dragover", (e) => onNodeDragOver(e, node));
    wrap.addEventListener("dragleave", (e) => {
      if (e.target === wrap) wrap.classList.remove("an-drag-over");
    });
    wrap.addEventListener("drop", (e) => onNodeDrop(e, node));

    if (hasKids && !collapsed) {
      const kids = document.createElement("div");
      kids.className = "an-children an-drop-zone";
      kids.dataset.parentId = node.id;
      if (!childCount) {
        const hint = document.createElement("div");
        hint.className = "an-empty-hint";
        hint.textContent = "Drop items here";
        kids.appendChild(hint);
      } else {
        (node.children || []).forEach((ch) => kids.appendChild(renderNode(ch, dupIds, depth + 1)));
      }
      kids.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.stopPropagation();
        kids.classList.add("an-drag-over");
      });
      kids.addEventListener("dragleave", () => kids.classList.remove("an-drag-over"));
      kids.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        kids.classList.remove("an-drag-over");
        acceptDropInto(node, null);
      });
      wrap.appendChild(kids);
    }

    return wrap;
  }

  function renderOrphans(dupIds) {
    const root = $("anOrphans");
    if (!root) return;
    root.innerHTML = "";
    const q = state.orphanQuery.trim().toLowerCase();
    const list = state.orphans.filter((o) => {
      if (!q) return true;
      return (
        (o.label || "").toLowerCase().includes(q) ||
        (o.path || "").toLowerCase().includes(q) ||
        (o.key || "").toLowerCase().includes(q)
      );
    });
    if (!list.length) {
      root.innerHTML =
        '<p class="an-empty-hint">' +
        (state.orphans.length ? "No orphans match filter." : "No orphans — every catalog key/path is placed in Studio hubs or Platform keys.") +
        "</p>";
    } else {
      list.forEach((node) => {
        const card = document.createElement("div");
        card.className = "an-orphan";
        if (node.markedDelete) card.classList.add("an-marked-delete");
        if (dupIds && dupIds.has(node.id)) card.classList.add("an-dup");
        card.draggable = true;
        card.dataset.id = node.id;
        card.addEventListener("dragstart", (e) => onDragStart(e, node, "orphan"));
        card.addEventListener("dragend", onDragEnd);

        const row = document.createElement("div");
        row.className = "an-row";
        const kind = document.createElement("span");
        kind.className = "an-kind an-kind-leaf";
        kind.textContent = "orphan";
        const label = document.createElement("span");
        label.className = "an-label";
        label.textContent = node.label || node.path || "(untitled)";
        row.appendChild(kind);
        row.appendChild(label);
        if (dupIds && dupIds.has(node.id)) {
          const badge = document.createElement("span");
          badge.className = "an-dup-badge";
          badge.textContent = "dup";
          row.appendChild(badge);
        }
        const actions = document.createElement("div");
        actions.className = "an-row-actions";
        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "btn mini danger-soft";
        delBtn.textContent = node.markedDelete ? "Keep" : "Don’t need";
        delBtn.setAttribute("aria-pressed", node.markedDelete ? "true" : "false");
        delBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          node.markedDelete = !node.markedDelete;
          persist();
          render();
        });
        if (node.path) {
          const openBtn = makeOpenPreviewButton(node.path);
          if (openBtn) actions.appendChild(openBtn);
        }
        actions.appendChild(delBtn);
        row.appendChild(actions);
        card.appendChild(row);
        if (node.path) {
          const pathWrap = document.createElement("div");
          pathWrap.className = "an-path-wrap";
          appendPathPreview(pathWrap, node.path);
          card.appendChild(pathWrap);
        }
        root.appendChild(card);
      });
    }

    let rail = root.parentElement.querySelector(".an-orphan-rail-drop");
    if (!rail) {
      rail = document.createElement("div");
      rail.className = "an-orphan-rail-drop";
      rail.textContent = "Drop here to park as orphan";
      root.parentElement.appendChild(rail);
    }
    rail.ondragover = (e) => {
      e.preventDefault();
      rail.classList.add("an-drag-over");
    };
    rail.ondragleave = () => rail.classList.remove("an-drag-over");
    rail.ondrop = (e) => {
      e.preventDefault();
      rail.classList.remove("an-drag-over");
      if (!dragPayload) return;
      const removed = removeNode(dragPayload.id);
      if (removed) {
        removed.fromOrphanRail = true;
        if (removed.kind === "menu" && removed.children && removed.children.length) {
          removed.children.forEach((c) => {
            c.fromOrphanRail = true;
            state.orphans.push(c);
          });
        } else {
          if (removed.kind === "menu") removed.kind = "leaf";
          state.orphans.push(removed);
        }
        state.orphans.sort((a, b) => (a.path || a.label || "").localeCompare(b.path || b.label || ""));
        persist();
        render();
      }
      dragPayload = null;
    };
  }

  function onDragStart(e, node, source) {
    dragPayload = { id: node.id, source: source, kind: node.kind };
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", node.id);
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-id="' + node.id + '"]').forEach((el) => el.classList.add("an-dragging"));
    });
  }

  function onDragEnd() {
    document.querySelectorAll(".an-dragging").forEach((el) => el.classList.remove("an-dragging"));
    document.querySelectorAll(".an-drag-over").forEach((el) => el.classList.remove("an-drag-over"));
    dragPayload = null;
  }

  function onNodeDragOver(e, node) {
    if (!dragPayload || dragPayload.id === node.id) return;
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add("an-drag-over");
  }

  function isDescendant(ancestorId, maybeChildId) {
    const hit = findNode(state.tree, ancestorId, null);
    if (!hit) return false;
    let found = false;
    walk(hit.node.children || [], (n) => {
      if (n.id === maybeChildId) found = true;
    });
    return found;
  }

  function acceptDropInto(parentNode, beforeId) {
    if (!dragPayload) return;
    if (dragPayload.id === parentNode.id) return;
    if (isDescendant(dragPayload.id, parentNode.id)) return;

    const removed = removeNode(dragPayload.id);
    if (!removed) return;

    if (removed.kind === "menu" && parentNode.kind !== "menu") {
      removed.kind = "leaf";
    }
    if (!removed.children) removed.children = [];

    if (!parentNode.children) parentNode.children = [];
    if (beforeId) {
      const idx = parentNode.children.findIndex((c) => c.id === beforeId);
      if (idx >= 0) parentNode.children.splice(idx, 0, removed);
      else parentNode.children.push(removed);
    } else {
      parentNode.children.push(removed);
    }
    state.collapsed.delete(parentNode.id);
    persist();
    render();
    dragPayload = null;
  }

  function onNodeDrop(e, node) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove("an-drag-over");
    if (!dragPayload || dragPayload.id === node.id) return;

    if (canHaveChildren(node)) {
      acceptDropInto(node, null);
      return;
    }

    const hit = findNode(state.tree, node.id, null);
    if (!hit || !hit.parent) {
      const removed = removeNode(dragPayload.id);
      if (!removed) return;
      if (removed.kind !== "menu") {
        state.tree.push({
          id: uid("menu"),
          kind: "menu",
          label: removed.label || "New menu",
          path: "",
          key: null,
          markedDelete: false,
          children: [removed],
        });
      } else {
        const idx = state.tree.findIndex((n) => n.id === node.id);
        if (idx >= 0) state.tree.splice(idx, 0, removed);
        else state.tree.push(removed);
      }
      persist();
      render();
      dragPayload = null;
      return;
    }

    const removed = removeNode(dragPayload.id);
    if (!removed) return;
    if (!hit.parent.children) hit.parent.children = [];
    const idx = hit.parent.children.findIndex((c) => c.id === node.id);
    if (idx >= 0) hit.parent.children.splice(idx, 0, removed);
    else hit.parent.children.push(removed);
    persist();
    render();
    dragPayload = null;
  }

  function onRootDragOver(e) {
    if (!dragPayload) return;
    e.preventDefault();
  }

  function onRootDrop(e) {
    if (e.target !== $("anTree") && !e.target.classList.contains("an-empty-hint")) return;
    e.preventDefault();
    if (!dragPayload) return;
    const removed = removeNode(dragPayload.id);
    if (!removed) return;
    if (removed.kind !== "menu") {
      state.tree.push({
        id: uid("menu"),
        kind: "menu",
        label: "Menu: " + (removed.label || "Untitled"),
        path: "",
        key: null,
        markedDelete: false,
        children: [Object.assign(removed, { kind: removed.kind === "menu" ? "leaf" : removed.kind })],
      });
    } else {
      state.tree.push(removed);
    }
    persist();
    render();
    dragPayload = null;
  }

  function downloadExport() {
    const data = serialize();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
    a.href = URL.createObjectURL(blob);
    a.download = "helgoiq-admin-nav-plan-" + stamp + ".json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  function newTopLevelMenu() {
    const name = window.prompt("New top-level menu name", "New menu");
    if (name == null) return;
    const label = String(name).trim() || "New menu";
    state.tree.push({
      id: uid("menu"),
      kind: "menu",
      label,
      path: "",
      key: null,
      markedDelete: false,
      children: [],
    });
    persist();
    render();
  }

  function toggleRollUpAll() {
    if (hasExpandedNodes()) collapseHubsDefault();
    else state.collapsed.clear();
    persist();
    render();
  }

  async function ensureSources() {
    const [menu, folders, workspaces, pages, liveSeed] = await Promise.all([
      fetchJson("coverage/sources/admin-menu.json"),
      fetchJson("coverage/sources/folders.json"),
      fetchJson("coverage/sources/workspaces.json"),
      fetchJson("coverage/admin-pages.json"),
      fetchJson("coverage/sources/live-sidebar-seed.json"),
    ]);
    state.pages = pages;
    state.liveSeed = liveSeed;
    state.platformKeySet = platformKeysFromSeed(liveSeed);
    const menuByKey = {};
    menu.forEach((m) => {
      menuByKey[m.key] = m;
    });
    const workspacesById = {};
    workspaces.forEach((w) => {
      workspacesById[w.id] = w;
    });
    state.menuByKey = menuByKey;
    state.workspacesById = workspacesById;
    state.seedMeta = {
      source: "live-sidebar-seed",
      version: liveSeed.version || 2,
      menuCount: menu.length,
      folderCount: folders.length,
      workspaceCount: workspaces.length,
      pageCount: pages.length,
      studioRootCount: (liveSeed.studioRoots || []).length,
      studioHubCount: (liveSeed.studioHubs || []).length,
      platformHubCount: ((liveSeed.platformRoot && liveSeed.platformRoot.hubs) || []).length,
      seededAt: new Date().toISOString(),
    };
    return { menu, folders, workspaces, pages, liveSeed };
  }

  function seedPanel(mode, sources) {
    const { menu, folders, workspaces, pages, liveSeed } = sources;
    let tree;
    let placedKeys;
    if (mode === PANEL_PLATFORM) {
      ({ tree, placedKeys } = seedPlatformTree(liveSeed, menu));
    } else if (mode === PANEL_LEGACY) {
      ({ tree, placedKeys } = seedLegacyTree(folders, workspaces, menu));
    } else {
      ({ tree, placedKeys } = seedStudioTree(liveSeed, menu, workspaces));
    }
    const orphans = buildOrphans(pages, tree, placedKeys);
    return { tree, orphans, collapsed: defaultCollapsedIds(tree) };
  }

  async function resetToSeed() {
    const label =
      state.panelMode === PANEL_LEGACY
        ? "Reset this panel to Legacy folders.json seed? Local edits for Legacy will be replaced."
        : state.panelMode === PANEL_PLATFORM
          ? "Reset Platform tree to live platformRoot seed? Local Platform edits will be replaced."
          : "Reset Studio tree to live Studio/Platform sidebar seed? Local Studio edits will be replaced.";
    if (!window.confirm(label)) return;
    const sources = await ensureSources();
    const snap = seedPanel(state.panelMode, sources);
    applySnapshot(snap);
    state.plans[state.panelMode] = snap;
    persist();
    render();
  }

  async function switchPanel(mode) {
    if (!mode || mode === state.panelMode) return;
    state.plans[state.panelMode] = snapshotActivePlan();
    state.panelMode = mode;
    if (!state.plans[mode]) {
      const sources = await ensureSources();
      const snap = seedPanel(mode, sources);
      applySnapshot(snap);
      state.plans[mode] = snap;
    } else {
      applySnapshot(state.plans[mode]);
    }
    persist();
    render();
  }

  async function boot() {
    if (state.loading) return;
    state.loading = true;
    try {
      const sources = await ensureSources();
      const persisted = loadPersisted();

      if (persisted) {
        const needsCollapseMigration = persisted.collapseDefaultsMigrated !== true;
        applyPlan(persisted);
        // Ensure active panel has a tree; seed missing panels lazily
        if (!state.tree.length) {
          const snap = seedPanel(state.panelMode, sources);
          applySnapshot(snap);
          state.plans[state.panelMode] = snapshotActivePlan();
        }
        // Migrate the previous all-expanded state once; populated collapsed arrays remain user choices.
        if (needsCollapseMigration) {
          Object.values(state.plans).forEach((plan) => {
            if (!plan || !Array.isArray(plan.tree)) return;
            if (!Array.isArray(plan.collapsed) || plan.collapsed.length === 0) {
              plan.collapsed = defaultCollapsedIds(plan.tree);
            }
          });
          const activePlan = state.plans[state.panelMode];
          if (activePlan && Array.isArray(activePlan.tree)) applySnapshot(activePlan);
          else if (!state.collapsed.size && state.tree.length) collapseHubsDefault();
        }
        state.collapseDefaultsMigrated = true;
        persist();
      } else {
        // Fresh v2: seed Studio + Platform; Legacy on demand
        state.collapseDefaultsMigrated = true;
        state.panelMode = PANEL_STUDIO;
        const studio = seedPanel(PANEL_STUDIO, sources);
        const platform = seedPanel(PANEL_PLATFORM, sources);
        state.plans = { studio, platform, legacy: null };
        applySnapshot(studio);
        state.plans.studio = snapshotActivePlan();
        persist();
      }
      state.ready = true;
      render();
    } catch (err) {
      console.error("Admin nav load failed", err);
      const stats = $("anStats");
      if (stats) stats.innerHTML = '<span class="an-stat">Failed to load seed data — check coverage/sources.</span>';
    } finally {
      state.loading = false;
    }
  }

  function wire() {
    const exportBtn = $("anExport");
    const resetBtn = $("anReset");
    const newBtn = $("anNewMenu");
    const rollUpToggle = $("anRollUpToggle");
    const importFile = $("anImportFile");
    const orphanSearch = $("anOrphanSearch");
    if (exportBtn) exportBtn.addEventListener("click", downloadExport);
    if (resetBtn) resetBtn.addEventListener("click", () => resetToSeed());
    if (newBtn) newBtn.addEventListener("click", newTopLevelMenu);
    if (rollUpToggle) rollUpToggle.addEventListener("click", toggleRollUpAll);
    if (importFile) {
      importFile.addEventListener("change", async () => {
        const file = importFile.files && importFile.files[0];
        if (!file) return;
        try {
          const text = await file.text();
          const data = JSON.parse(text);
          if (!data || (!Array.isArray(data.tree) && !data.plans)) throw new Error("Missing tree[] / plans");
          applyPlan(data);
          persist();
          render();
        } catch (err) {
          window.alert("Import failed: " + (err && err.message ? err.message : err));
        }
        importFile.value = "";
      });
    }
    if (orphanSearch) {
      orphanSearch.addEventListener("input", (e) => {
        state.orphanQuery = e.target.value || "";
        render();
      });
    }
    document.querySelectorAll("[data-an-panel]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-an-panel");
        switchPanel(mode);
      });
    });
  }

  window.HelgoAdminNav = {
    ensure: function () {
      if (!state.ready && !state.loading) boot();
      else if (state.ready) render();
    },
    exportPlan: serialize,
    switchPanel: switchPanel,
  };

  function onReady(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  onReady(() => {
    wire();
    const raw = (location.hash || "").replace(/^#/, "");
    if (raw === "admin-nav" || raw.startsWith("admin-nav/")) {
      boot();
    }
  });
})();
