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
    selectedTags: new Set(),
    selectedTypes: new Set(),
    query: "",
    activeDrop: null,
    activePath: null,
  };

  const $ = (id) => document.getElementById(id);

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
    const tagOrder = [...TAG_VOCAB.filter((t) => tagsUsed.has(t)), ...[...tagsUsed].filter((t) => !TAG_VOCAB.includes(t)).sort()];
    const typeOrder = [...TYPE_VOCAB.filter((t) => typesUsed.has(t)), ...[...typesUsed].filter((t) => !TYPE_VOCAB.includes(t)).sort()];

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
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "Open " + drop.title);
      const badges = [
        `<span class="badge type">${escapeHtml(drop.type || "report")}</span>`,
        ...(drop.tags || []).map((t) => `<span class="badge">${escapeHtml(t)}</span>`),
      ];
      if (drop.tip) badges.push(`<span class="badge tip">${escapeHtml(String(drop.tip).slice(0, 8))}</span>`);
      card.innerHTML = `
        <div class="card-top">
          <h3>${escapeHtml(drop.title)}</h3>
          <span class="date">${escapeHtml(drop.date || "")}</span>
        </div>
        <p class="summary">${escapeHtml(drop.summary || "")}</p>
        <div class="badges">${badges.join("")}</div>
      `;
      card.addEventListener("click", () => openDrop(drop));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDrop(drop);
        }
      });
      feed.appendChild(card);
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  async function openDrop(drop) {
    state.activeDrop = drop;
    const paths = drop.paths || [];
    state.activePath = paths[0] || null;
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
    $("rawLink").href = path;
    $("rawLink").download = path.split("/").pop();
    $("viewerBody").innerHTML = "<p class='muted'>Loading…</p>";
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(res.status + " " + res.statusText);
      const text = await res.text();
      if (typeof marked !== "undefined") {
        $("viewerBody").innerHTML = marked.parse(text);
      } else {
        $("viewerBody").innerHTML = "<pre>" + escapeHtml(text) + "</pre>";
      }
    } catch (err) {
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

  function closeViewer() {
    $("viewer").classList.add("hidden");
    document.body.style.overflow = "";
    state.activeDrop = null;
  }

  async function init() {
    $("closeViewer").addEventListener("click", closeViewer);
    $("viewer").addEventListener("click", (e) => {
      if (e.target === $("viewer")) closeViewer();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeViewer();
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

    try {
      const res = await fetch("index.json");
      if (!res.ok) throw new Error("index.json " + res.status);
      const data = await res.json();
      state.drops = data.drops || [];
      if (data.updatedAt) $("updatedAt").textContent = "Updated " + formatDate(data.updatedAt);
      // Fix repo link if under user account (Pages may rewrite later)
      const host = location.hostname;
      if (host.includes("github.io")) {
        const parts = host.split(".");
        // user.github.io/repo or org.github.io/repo
      }
    } catch (err) {
      state.drops = [];
      $("updatedAt").textContent = "Failed to load index.json";
      console.error(err);
    }
    renderChips();
    renderFeed();

    // Deep link ?drop=id
    const params = new URLSearchParams(location.search);
    const id = params.get("drop");
    if (id) {
      const d = state.drops.find((x) => x.id === id);
      if (d) openDrop(d);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
