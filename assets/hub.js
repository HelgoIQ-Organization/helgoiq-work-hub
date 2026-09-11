(function () {
  const TAG_VOCAB = [
    "ambient", "booking", "payments", "isolation", "command-centre",
    "dataset", "smoke", "ai-85", "m1", "census", "findings", "status", "finance"
  ];
  const TYPE_VOCAB = [
    "report", "checklist", "matrix", "status", "proposal", "evidence", "finding", "pack"
  ];

  const state = {
    drops: [],
    dashboard: null,
    selectedTags: new Set(),
    selectedTypes: new Set(),
    query: "",
    activeDrop: null,
    activePath: null,
    activeMarkdown: "",
  };

  const $ = (id) => document.getElementById(id);

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleString("en-GB", {
        timeZone: "Europe/London",
        dateStyle: "medium",
        timeStyle: "short",
      }) + " PT";
    } catch {
      return iso;
    }
  }

  function statusClass(status) {
    const s = (status || "").toLowerCase();
    if (s === "on-track" || s === "done") return "status-" + s;
    if (s === "at-risk") return "status-at-risk";
    if (s === "blocked") return "status-blocked";
    return "status-at-risk";
  }

  function statusLabel(status) {
    const map = {
      "on-track": "On track",
      blocked: "Blocked",
      "at-risk": "At risk",
      done: "Done",
      needed: "Needed",
      waiting: "Waiting",
    };
    return map[status] || status || "";
  }

  function setHash(hash) {
    if (location.hash === hash) return;
    history.replaceState(null, "", hash || location.pathname + location.search);
  }

  function showToast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied markdown — ready for Claude or Cursor");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        showToast("Copied markdown — ready for Claude or Cursor");
      } catch {
        showToast("Could not copy — select the prompt manually");
      }
      ta.remove();
    }
  }

  /* —— Dashboard render —— */
  function shortSha(sha) {
    return String(sha || "").slice(0, 8) || "—";
  }

  function renderHero(dash) {
    const h = dash.health || {};
    const meta = dash.meta || {};
    const pct = Math.round(h.overallLaunchPercent || 0);
    $("heroPercent").textContent = pct + "%";
    $("readinessLabel").textContent = h.readinessLabel || "";
    $("healthSummary").textContent = h.plainSummary || "";

    const dataAsOf = meta.dataAsOf || dash.updatedAt || "";
    const build = meta.buildStamp || dash.tip || "";
    const stamp = $("dataStamp");
    if (stamp) {
      const local = dataAsOf ? formatDate(dataAsOf) : "unknown";
      stamp.textContent = "Data as of " + local + " · build " + shortSha(build);
      stamp.title = "Full tip: " + (build || "unknown") + " — never treat readiness as live-proven when this stamp is stale";
      // Soft warn if tip looks old vs afternoon expectation is handled by copy; visual if missing
      if (!dataAsOf || !build) stamp.classList.add("stale");
      else stamp.classList.remove("stale");
    }

    const circ = 2 * Math.PI * 52;
    const ring = $("heroRing");
    ring.style.strokeDasharray = String(circ);
    ring.style.strokeDashoffset = String(circ * (1 - pct / 100));
    if (pct < 40) ring.style.stroke = "var(--blocked)";
    else if (pct < 70) ring.style.stroke = "var(--warn)";
    else ring.style.stroke = "var(--accent2)";

    const fill = (el, items) => {
      el.innerHTML = "";
      (items || []).forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        el.appendChild(li);
      });
    };
    fill($("strengthsList"), h.strengths);
    fill($("risksList"), h.risks);
    fill($("prioritiesList"), h.topPriorities);
  }

  function renderProgressToday(dash) {
    const pt = dash.progressToday;
    const section = $("progressToday");
    if (!pt || !section) {
      if (section) section.classList.add("hidden");
      return;
    }
    section.classList.remove("hidden");
    $("morningHeadline").textContent = Math.round(pt.morningHeadlinePercent || 0) + "%";
    $("nowHeadline").textContent = Math.round(pt.nowHeadlinePercent || 0) + "%";
    $("plainEnglishDay").textContent = pt.plainEnglishDay || "";
    const link = $("morningSnapshotLink");
    if (link && pt.keptMorningSnapshotPath) {
      link.href = pt.keptMorningSnapshotPath;
    }
    const sub = $("progressTodaySub");
    if (sub) {
      const delta = Math.round((pt.nowHeadlinePercent || 0) - (pt.morningHeadlinePercent || 0));
      const sign = delta > 0 ? "+" : "";
      sub.textContent =
        "Morning board vs now (" + sign + delta + " pts headline). Afternoon merges may still be waiting on the live tip — check the data stamp.";
    }
    const bars = $("progressTodayBars");
    bars.innerHTML = "";
    const morning = pt.morningStrands || {};
    const now = pt.nowStrands || {};
    const deltas = pt.deltas || {};
    const order = (dash.strands || []).map((s) => s.id);
    const ids = order.length ? order : Object.keys(now);
    const nameById = {};
    (dash.strands || []).forEach((s) => { nameById[s.id] = s.name; });
    ids.forEach((id) => {
      const m = morning[id] != null ? morning[id] : 0;
      const n = now[id] != null ? now[id] : 0;
      const d = deltas[id] != null ? deltas[id] : n - m;
      const row = document.createElement("div");
      row.className = "pt-row";
      const dClass = d > 0 ? "up" : d < 0 ? "down" : "flat";
      const dLabel = (d > 0 ? "+" : "") + d;
      row.innerHTML =
        '<div class="pt-name">' + escapeHtml(nameById[id] || id) + "</div>" +
        '<div class="pt-dual">' +
        '<div class="pt-bar-wrap"><span class="pt-cap">am ' + Math.round(m) + '%</span><div class="bar-track"><div class="bar-fill morning" style="width:' + Math.max(0, Math.min(100, m)) + '%"></div></div></div>' +
        '<div class="pt-bar-wrap"><span class="pt-cap">now ' + Math.round(n) + '%</span><div class="bar-track"><div class="bar-fill now" style="width:' + Math.max(0, Math.min(100, n)) + '%"></div></div></div>' +
        "</div>" +
        '<div class="pt-delta ' + dClass + '">' + dLabel + "</div>";
      bars.appendChild(row);
    });
  }

  function renderPhases(dash) {
    const el = $("phasesStrip");
    el.innerHTML = "";
    (dash.phases || []).forEach((p) => {
      const card = document.createElement("div");
      card.className = "phase-card";
      card.innerHTML =
        "<h3>" + escapeHtml(p.name) + "</h3>" +
        '<div class="phase-weight">' + escapeHtml(String(p.projectWeightPercent)) + "% of whole project</div>" +
        '<div class="bar-track"><div class="bar-fill" style="width:' + (p.percentComplete || 0) + '%"></div></div>' +
        '<div class="phase-pct">' + Math.round(p.percentComplete || 0) + "% complete</div>" +
        "<p>" + escapeHtml(p.plainSummary || "") + "</p>";
      el.appendChild(card);
    });
  }

  function basisLabel(basis) {
    const b = (basis || "").toLowerCase();
    if (b === "measured") return "Measured";
    if (b === "estimate") return "Estimate";
    return basis ? String(basis) : "Estimate";
  }

  function renderStrands(dash) {
    const el = $("strandGrid");
    el.innerHTML = "";
    (dash.strands || []).forEach((s) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "strand-card";
      btn.id = "strand-" + s.id;
      const basis = (s.basis || "estimate").toLowerCase();
      btn.innerHTML =
        '<div class="strand-badges">' +
        '<span class="status ' + statusClass(s.status) + '">' + escapeHtml(statusLabel(s.status)) + "</span>" +
        '<span class="basis-badge basis-' + escapeHtml(basis) + '">' + escapeHtml(basisLabel(s.basis)) + "</span>" +
        "</div>" +
        '<div class="pct">' + Math.round(s.percent || 0) + "%</div>" +
        '<div class="name">' + escapeHtml(s.name) + "</div>" +
        '<p class="note">' + escapeHtml(s.progressNote || "") + " · " +
        escapeHtml(String(s.projectWeightPercent)) + "% of project</p>";
      btn.addEventListener("click", () => openStrand(s.id));
      el.appendChild(btn);
    });
  }

  function actionAudience(a) {
    return String(a.audience || a.owner || "").toLowerCase();
  }

  function sortActionCards(list) {
    return list.slice().sort((a, b) => {
      const dangerRank = (x) => {
        if (x.status === "blocked") return 0;
        if ((x.warningLevel || "") === "danger" || x.warning) return 1;
        if (x.status === "needed") return 2;
        if (x.status === "done") return 4;
        return 3;
      };
      const dr = dangerRank(a) - dangerRank(b);
      if (dr !== 0) return dr;
      return (Number(b.movesProjectForwardPercent) || 0) - (Number(a.movesProjectForwardPercent) || 0);
    });
  }

  function buildActionCard(a) {
    const card = document.createElement("article");
    card.id = "action-" + a.id;

    const links = document.createElement("div");
    links.className = "action-links";
    (a.links || []).forEach((lnk) => {
      if (lnk.kind === "copy-prompt") {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "btn copy";
        b.textContent = lnk.label || "Copy prompt";
        b.addEventListener("click", () => copyText(lnk.text || lnk.url || ""));
        links.appendChild(b);
      } else {
        const b = document.createElement("a");
        b.className = "btn" + (lnk.kind === "github" ? " primary" : "");
        b.href = lnk.url;
        b.target = "_blank";
        b.rel = "noopener";
        b.textContent = lnk.label || lnk.kind || "Open";
        links.appendChild(b);
      }
    });

    const audience = actionAudience(a);
    const audienceChip = audience
      ? '<span class="audience-chip audience-' + escapeHtml(audience) + '">' +
        escapeHtml(audience === "declan" ? "Declan" : audience === "engineering" ? "Engineering" : audience) +
        "</span>"
      : "";
    const warn = a.warning
      ? '<div class="action-warning ' + escapeHtml(a.warningLevel || "danger") + '" role="alert">' +
        escapeHtml(a.warning) + "</div>"
      : "";
    card.className =
      "action-card" +
      (a.warning ? " has-warning" : "") +
      (a.status === "blocked" ? " is-blocked" : "") +
      (audience ? " audience-" + audience : "");
    card.innerHTML =
      "<h3>" + escapeHtml(a.title) + "</h3>" +
      (audienceChip ? '<div class="action-audience">' + audienceChip + "</div>" : "") +
      warn +
      '<p class="action-why">' + escapeHtml(a.plainWhy || "") + "</p>" +
      '<p class="action-unlock"><strong>Unlocks:</strong> ' + escapeHtml(a.unblocks || "") + "</p>" +
      '<div class="action-moves">' +
      '<span class="move-chip project">+' + escapeHtml(String(a.movesProjectForwardPercent)) + "% project</span>" +
      '<span class="move-chip phase">+' + escapeHtml(String(a.movesPhaseForwardPercent)) + "% phase</span>" +
      '<span class="move-chip effort">' + escapeHtml(a.effort || "") + "</span>" +
      '<span class="move-chip status-' + escapeHtml(a.status || "") + '">' + escapeHtml(statusLabel(a.status)) + "</span>" +
      "</div>";
    card.appendChild(links);
    return card;
  }

  function fillActionGrid(el, list) {
    if (!el) return;
    el.innerHTML = "";
    sortActionCards(list).forEach((a) => el.appendChild(buildActionCard(a)));
  }

  function renderActions(dash) {
    const declanEl = $("actionsGrid");
    const engEl = $("engineeringGrid");
    const note = $("actionsNote");
    if (note) {
      note.textContent =
        "Only you can clear these. Each card says what it unlocks and how far it moves launch.";
    }
    const engNote = $("engineeringNote");
    if (engNote && dash.notes && dash.notes.botCommander) {
      engNote.textContent =
        "Product/code fixes — not waiting on Declan. Cursor / Bot Commander track these. " +
        dash.notes.botCommander;
    }

    const all = dash.actions || [];
    const engFromField = dash.engineeringActions || [];
    const declan = all.filter((a) => {
      const aud = actionAudience(a);
      if (aud === "declan") return true;
      if (aud === "engineering") return false;
      // Legacy cards without audience: keep only if explicitly Declan-owned ids
      return false;
    });
    const engineering = engFromField.length
      ? engFromField
      : all.filter((a) => actionAudience(a) === "engineering");

    fillActionGrid(declanEl, declan);
    fillActionGrid(engEl, engineering);
  }

  function openStrand(id) {
    const dash = state.dashboard;
    if (!dash) return;
    const s = (dash.strands || []).find((x) => x.id === id);
    if (!s) return;
    location.hash = "strand-" + id;
    $("strandTitle").textContent = s.name;
    const st = $("strandStatus");
    st.className = "status-pill " + statusClass(s.status);
    st.textContent = statusLabel(s.status);
    $("strandMeta").textContent =
      Math.round(s.percent) + "% · " + basisLabel(s.basis) + " · " + s.projectWeightPercent + "% of project · phase " + (s.phaseId || "");
    $("strandBar").style.width = (s.percent || 0) + "%";
    $("strandPct").textContent = Math.round(s.percent || 0) + "%";
    $("strandSummary").textContent = s.plainSummary || "";
    $("strandProgress").textContent = s.progressNote || "";
    const ul = $("strandBlockers");
    ul.innerHTML = "";
    (s.blockers || []).forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });
    if (!(s.blockers || []).length) {
      const li = document.createElement("li");
      li.className = "muted";
      li.textContent = "No open blockers listed.";
      ul.appendChild(li);
    }
    const dropsEl = $("strandDrops");
    dropsEl.innerHTML = "";
    (s.detailDropIds || []).forEach((did) => {
      const drop = state.drops.find((d) => d.id === did);
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = drop ? drop.title : did;
      b.addEventListener("click", () => {
        closeStrand(false);
        if (drop) openDrop(drop, true);
        else location.hash = "drop-" + did;
      });
      dropsEl.appendChild(b);
    });
    if (!(s.detailDropIds || []).length) {
      dropsEl.innerHTML = '<p class="muted">No linked drops yet.</p>';
    }
    $("strandPanel").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeStrand(clearHash) {
    $("strandPanel").classList.add("hidden");
    if (!$("viewer") || $("viewer").classList.contains("hidden")) {
      document.body.style.overflow = "";
    }
    if (clearHash !== false && location.hash.indexOf("strand-") === 1) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  /* —— Drops (existing + plainEnglish) —— */
  function chip(label, pressed, onToggle) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.textContent = label;
    b.setAttribute("aria-pressed", pressed ? "true" : "false");
    b.addEventListener("click", () => onToggle(label));
    return b;
  }

  function renderChips() {
    const tagsUsed = new Set();
    const typesUsed = new Set();
    state.drops.forEach((d) => {
      (d.tags || []).forEach((t) => tagsUsed.add(t));
      if (d.type) typesUsed.add(d.type);
    });
    const tagOrder = [
      ...TAG_VOCAB.filter((t) => tagsUsed.has(t)),
      ...[...tagsUsed].filter((t) => !TAG_VOCAB.includes(t)).sort(),
    ];
    const typeOrder = [
      ...TYPE_VOCAB.filter((t) => typesUsed.has(t)),
      ...[...typesUsed].filter((t) => !TYPE_VOCAB.includes(t)).sort(),
    ];

    const tagEl = $("tagChips");
    const typeEl = $("typeChips");
    tagEl.innerHTML = "";
    typeEl.innerHTML = "";
    typeOrder.forEach((t) =>
      typeEl.appendChild(
        chip(t, state.selectedTypes.has(t), (label) => {
          if (state.selectedTypes.has(label)) state.selectedTypes.delete(label);
          else state.selectedTypes.add(label);
          renderChips();
          renderFeed();
        })
      )
    );
    tagOrder.forEach((t) =>
      tagEl.appendChild(
        chip(t, state.selectedTags.has(t), (label) => {
          if (state.selectedTags.has(label)) state.selectedTags.delete(label);
          else state.selectedTags.add(label);
          renderChips();
          renderFeed();
        })
      )
    );
  }

  function matches(drop) {
    if (state.selectedTypes.size && !state.selectedTypes.has(drop.type)) return false;
    if (state.selectedTags.size) {
      const tags = drop.tags || [];
      for (const t of state.selectedTags) {
        if (!tags.includes(t)) return false;
      }
    }
    const q = state.query.trim().toLowerCase();
    if (!q) return true;
    const hay = [
      drop.title,
      drop.summary,
      drop.plainEnglish || "",
      drop.id,
      drop.project,
      drop.type,
      ...(drop.tags || []),
      ...(drop.paths || []),
      drop.tip || "",
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  }

  function renderFeed() {
    const list = state.drops
      .filter(matches)
      .slice()
      .sort((a, b) => (b.date || "").localeCompare(a.date || "") || (b.id || "").localeCompare(a.id || ""));

    $("resultCount").textContent = list.length + " drop" + (list.length === 1 ? "" : "s");
    const feed = $("feed");
    const empty = $("emptyState");
    feed.innerHTML = "";
    if (!list.length) {
      empty.classList.remove("hidden");
      return;
    }
    empty.classList.add("hidden");
    list.forEach((drop) => {
      const card = document.createElement("article");
      card.className = "card";
      card.id = "drop-" + drop.id;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "Open " + drop.title);
      const badges = [
        '<span class="badge type">' + escapeHtml(drop.type || "report") + "</span>",
        ...(drop.tags || []).map((t) => '<span class="badge">' + escapeHtml(t) + "</span>"),
      ];
      if (drop.tip) badges.push('<span class="badge tip">' + escapeHtml(String(drop.tip).slice(0, 8)) + "</span>");
      const plain = drop.plainEnglish || drop.summary || "";
      const tech = drop.plainEnglish && drop.summary ? drop.summary : "";
      const paths = drop.paths || [];
      const fileActs = paths
        .map((fp) => {
          const name = fp.split("/").pop();
          return (
            '<div class="file-act" data-path="' + escapeHtml(fp) + '">' +
            '<span class="file-name">' + escapeHtml(name) + "</span>" +
            '<button type="button" class="btn ghost mini copy-file">Copy</button>' +
            '<a class="btn ghost mini download-file" href="' + escapeHtml(fp) + '" download="' + escapeHtml(name) + '">Download</a>' +
            "</div>"
          );
        })
        .join("");
      card.innerHTML =
        '<div class="card-top">' +
        "<h3>" + escapeHtml(drop.title) + "</h3>" +
        '<span class="date">' + escapeHtml(drop.date || "") + "</span>" +
        "</div>" +
        '<p class="plain-english">' + escapeHtml(plain) + "</p>" +
        (tech ? '<p class="summary">' + escapeHtml(tech) + "</p>" : "") +
        '<div class="badges">' + badges.join("") + "</div>" +
        (fileActs ? '<div class="file-acts" onclick="event.stopPropagation()">' + fileActs + "</div>" : "");
      card.addEventListener("click", () => openDrop(drop, true));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDrop(drop, true);
        }
      });
      card.querySelectorAll(".copy-file").forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          e.stopPropagation();
          const fp = btn.closest(".file-act").getAttribute("data-path");
          try {
            const res = await fetch(fp);
            if (!res.ok) throw new Error("fetch failed");
            await copyText(await res.text());
          } catch {
            showToast("Could not copy — open the file and try Copy inside");
          }
        });
      });
      card.querySelectorAll(".download-file").forEach((a) => {
        a.addEventListener("click", (e) => e.stopPropagation());
      });
      feed.appendChild(card);
    });
  }

  async function openDrop(drop, setHashFlag) {
    state.activeDrop = drop;
    const paths = drop.paths || [];
    state.activePath = paths[0] || null;
    if (setHashFlag) location.hash = "drop-" + drop.id;
    $("viewerTitle").textContent = drop.title;
    $("viewerMeta").textContent = [drop.date, drop.type, (drop.tags || []).join(", "), drop.project]
      .filter(Boolean)
      .join(" · ");
    const sel = $("fileSelect");
    sel.innerHTML = "";
    paths.forEach((p) => {
      const opt = document.createElement("option");
      opt.value = p;
      opt.textContent = p.split("/").pop();
      sel.appendChild(opt);
    });
    sel.onchange = () => {
      state.activePath = sel.value;
      loadMarkdown(state.activePath);
    };
    $("viewer").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (state.activePath) await loadMarkdown(state.activePath);
    else {
      $("viewerBody").innerHTML = "<p class='muted'>No files in this drop.</p>";
      $("rawLink").href = "#";
    }
  }

  async function loadMarkdown(path) {
    const name = path.split("/").pop();
    $("rawLink").href = path;
    $("downloadLink").href = path;
    $("downloadLink").setAttribute("download", name);
    $("downloadLink").classList.remove("disabled");
    $("copyMdBtn").disabled = false;
    state.activeMarkdown = "";
    $("viewerBody").innerHTML = "<p class='muted'>Loading…</p>";
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(res.status + " " + res.statusText);
      const text = await res.text();
      state.activeMarkdown = text;
      if (typeof marked !== "undefined") {
        $("viewerBody").innerHTML = marked.parse(text);
      } else {
        $("viewerBody").innerHTML = "<pre>" + escapeHtml(text) + "</pre>";
      }
    } catch (err) {
      state.activeMarkdown = "";
      $("copyMdBtn").disabled = true;
      $("viewerBody").innerHTML =
        "<p>Could not load <code>" +
        escapeHtml(path) +
        "</code>.</p><p class='muted'>" +
        escapeHtml(String(err.message || err)) +
        "</p><p>Open the <a href='" +
        escapeHtml(path) +
        "' target='_blank' rel='noopener'>raw file</a>.</p>";
    }
  }

  function closeViewer(clearHash) {
    $("viewer").classList.add("hidden");
    if ($("strandPanel").classList.contains("hidden")) {
      document.body.style.overflow = "";
    }
    state.activeDrop = null;
    if (clearHash !== false && location.hash.indexOf("drop-") === 1) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  function applyHash() {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!raw) return;
    if (raw.startsWith("strand-")) {
      openStrand(raw.slice("strand-".length));
    } else if (raw.startsWith("action-")) {
      closeStrand(false);
      closeViewer(false);
      const el = document.getElementById(raw);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (raw.startsWith("drop-")) {
      const id = raw.slice("drop-".length);
      const d = state.drops.find((x) => x.id === id);
      if (d) openDrop(d, false);
    } else if (raw === "drops" || raw === "dashboard") {
      const el = document.getElementById(raw);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  async function init() {
    $("closeViewer").addEventListener("click", () => closeViewer(true));
    $("copyMdBtn").addEventListener("click", () => {
      if (!state.activeMarkdown) {
        showToast("Nothing to copy yet");
        return;
      }
      copyText(state.activeMarkdown);
    });
    $("closeStrand").addEventListener("click", () => closeStrand(true));
    $("viewer").addEventListener("click", (e) => {
      if (e.target === $("viewer")) closeViewer(true);
    });
    $("strandPanel").addEventListener("click", (e) => {
      if (e.target === $("strandPanel")) closeStrand(true);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!$("viewer").classList.contains("hidden")) closeViewer(true);
        else if (!$("strandPanel").classList.contains("hidden")) closeStrand(true);
      }
    });
    $("search").addEventListener("input", (e) => {
      state.query = e.target.value;
      renderFeed();
    });
    $("clearFilters").addEventListener("click", () => {
      state.selectedTags.clear();
      state.selectedTypes.clear();
      state.query = "";
      $("search").value = "";
      renderChips();
      renderFeed();
    });
    window.addEventListener("hashchange", applyHash);

    try {
      const [idxRes, dashRes] = await Promise.all([
        fetch("index.json"),
        fetch("dashboard.json"),
      ]);
      if (!idxRes.ok) throw new Error("index.json " + idxRes.status);
      const data = await idxRes.json();
      state.drops = data.drops || [];
      const updated = data.updatedAt;
      if (dashRes.ok) {
        state.dashboard = await dashRes.json();
        renderHero(state.dashboard);
        renderProgressToday(state.dashboard);
        renderPhases(state.dashboard);
        renderStrands(state.dashboard);
        renderActions(state.dashboard);
        const metaAsOf = (state.dashboard.meta && state.dashboard.meta.dataAsOf) || state.dashboard.updatedAt;
        if (metaAsOf) {
          $("updatedAt").textContent = "Updated " + formatDate(metaAsOf);
        } else if (updated) {
          $("updatedAt").textContent = "Updated " + formatDate(updated);
        }
      } else if (updated) {
        $("updatedAt").textContent = "Updated " + formatDate(updated);
        $("healthSummary").textContent = "Dashboard data missing — drops still available below.";
      }
    } catch (err) {
      state.drops = [];
      $("updatedAt").textContent = "Failed to load data";
      console.error(err);
    }
    renderChips();
    renderFeed();

    // Legacy ?drop=id
    const params = new URLSearchParams(location.search);
    const qid = params.get("drop");
    if (qid && !location.hash) {
      const d = state.drops.find((x) => x.id === qid);
      if (d) openDrop(d, true);
    } else {
      applyHash();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
