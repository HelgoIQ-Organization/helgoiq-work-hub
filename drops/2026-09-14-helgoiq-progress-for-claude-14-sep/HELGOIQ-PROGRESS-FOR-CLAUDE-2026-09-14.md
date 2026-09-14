# HelgoIQ progress handoff for Claude — 14 Sep 2026 (~08:30 EEST)

**Live tip (`/api/version`):** `40da6535c03b3f1bc8e1dd28b181143da0268f69`  
**Tip path today:** `3ad37824` (overnight) → `af7e6009` (~08:10) → **`40da6535`** (~08:25)  
**Staging:** https://lobster-app-662c7.ondigitalocean.app  
**Tenant:** Bluebird `c=150002` · Stripe **TEST** · Refrm `c=150001` **read-only**  
**Work Hub:** https://helgoiq-organization.github.io/helgoiq-work-hub/  
**Tracker:** https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180  

**Author:** Bot Commander (Grok) for Declan Ryan  
**Purpose:** Shareable platform-testing status for Claude / Codex. **No seat passwords, invite tokens, or fixture secrets in this file.**

---

## 1. Plain English (30 seconds)

Launch health is still about **~63–65%** — not ready. Overnight on tip `3ad37824` landed a big Feel fix retest batch (**14 PASS**) and Stage 1B Pulse Explain (**PASS**), but **smoke is still red** (1/6 — Bluebird 8 checkout Playwright locator on step 2; invitation replay #1296 is now PASS). This morning tip moved twice; several Command Centre / payments / smoke PRs are on tip **`40da6535`** and **need Bluebird Measured retests**. Declan granted Bot Commander **full Bluebird settings authority** (2026-09-14); Occupancy/Retention opt-in + Feature Controls Enable All are **in progress** this morning for Astra Stage 2 / AI-85. Refrm stays untouched.

---

## 2. Staging tip timeline (14 Sep)

| Tip | When | What landed |
|---|---|---|
| `3ad37824…` | Overnight | Feel merge batch; smoke #1296 step1; Stage 1B #1266 |
| `af7e6009…` | ~08:10 | #1279 admin chrome · #1286 Overview Members=directory · #1274 paired admin figures |
| **`40da6535…`** | ~08:25 **LIVE** | #1304 Cluster C North timetable · #1300 campaign send guidance · **#1268** public QR checkout · **#1298** smoke exact membership product select |

Headline estimate after tip moves: ~**63% → ~65%** (Hub strand bumps only — Measured retests on `40da6535` not finished).

---

## 3. Overnight testing results (tip `3ad37824`)

### What works that did not

- **#1296 invitation replay** — smoke step 1 **PASS** (`already_accepted` + tenant denial).
- **Feel merged-fix retests PASS (14):** #1284 Directory, #1287 Members invitations, #1285 Inbox rails/%, #1288 campaign en-GB 24h, #1276 Heat Map filters, #1277 Overview no Refrm, #1278 MRR loads, #1280/#1281/#1283 Website/CMS, #1289 Academy named URLs, #1291 Staff heading/tabs, #1273 finance drill-downs, #1294 BI no-baseline honesty.
- **Feel headline** 42 → **46**; **Website** 65 → **72**.
- **Stage 1B (#1266)** Owner Pulse Explain — **PASS**.

### What still fails / blocked

| Item | Verdict | Notes |
|---|---|---|
| Smoke six-step (#1296 companion) | **FAIL 1/6** | Step 2 discounted-checkout: Playwright **strict-mode locator** on Bluebird 8 (5 matches). **Not** paused-Stripe. Steps 3–6 skipped. |
| #1290 dock | **FINDING** | LMS/rota still under admin dock after merge. Fix PR **NEED_DECLAN** Auto-review. |
| ISO-18 / 20 / 27 / 29 | **FAIL** | Isolation pack unchanged. Heat map + Overview isolation **PASS**. |
| #1265 finding identity | **BLOCKED** overnight | Agents **Paused / Not opted in**; Run review disabled (settings change parked overnight). |
| #1270 privacy-name preview | **BLOCKED** | Surface not findable in Admin nav. |
| Cluster A / M2 30-slot B–F | Not re-run | Tip stable overnight; prior B–F **4/30** still governs. |

Evidence root: `/workspace/helgoiq-overnight-2026-09-13/` · breakfast pack on Work Hub `2026-09-14-overnight-close-out-pack-2026-09-14`.

---

## 4. Smoke & fixtures (Grok-owned)

| Item | State |
|---|---|
| Shared staging critical-path smoke gate | Still **FAIL** until six-step PASS on live tip (or trusted `<!-- helgoiq-smoke {…} -->` marker) |
| Step 1 invitation | **PASS** on overnight run (#1296) |
| Step 2 checkout | **FAIL** locator (overnight). **#1298** (exact membership product select) is now **on tip `40da6535`** — re-fire smoke after retest. |
| `GROK_SMOKE_FIXTURES` | Present (refreshed 13 Sep). Do not mint/switch seats for pause workarounds. |
| `JOIN_PAY_PROOF_FIXTURES` | **SET** 14 Sep morning (repo Actions secret). Dedicated Agentmail inbox created; HelgoIQ member invite/accept **still in progress**. Password only in Declan chat backup — **never in reports**. |
| BB Smoke Sep8 pause | **Last known:** membership **Paused** after Admin2 Resume payment-provider FAIL (tip `232659cf` era). Overnight smoke notes **disagree** (RESULTS expected pause; #1180 comment said locator fail not pause). **Live admin re-check in progress** this morning — treat as **UNCERTAIN until confirmed**. If still paused: step 2 fails until Codex Stripe resume fix; fixture mint does not help. |

**Gate rule:** chat PASS alone does not satisfy the gate. Owner of marker/Actions path: Grok.

---

## 5. Settings authority (new 14 Sep)

Declan granted Bot Commander **full authority** over Bluebird `150002` settings (Feature Controls, setup flags, agent rollout stages, tenant config) **without asking first**.

**Boundaries (unchanged):**
- Never touch Refrm `150001` or any other tenant.
- Log every settings change on **#1180** (setting · old → new · tip stamp).

**In flight this morning:**
1. Opt **Occupancy** + **Retention** agents to a stage that produces **findings + recommendations** (not Observe-only).
2. Run scans **twice ≥1h apart**; post finding IDs/counts on #1180 for Astra Stage 2 / #1265.
3. Settle **21 Feature Controls** to the AI-85 walk state (Enable All / 21/21); then re-score surfaces marked provisional because flags were unknown.
4. Scan 2 scheduled ~**09:28 Europe/Athens** (finite routine).

---

## 6. Feel bar (joyful · obvious · frictionless)

Hub Feel: https://helgoiq-organization.github.io/helgoiq-work-hub/#feel  

**Headline after overnight rescore:** ~**46** (was ~42). Website ~**72**. Before/after gallery: Work Hub drop `2026-09-13-feel-before-after`.

**#1290** remains the loudest Feel FAIL on tip (dock covering Academy overview + rota).

**Still provisional / awaiting Feature Controls + tip retest:** several AI / Intel surfaces (flags previously unknown or 0/21).

---

## 7. Open PRs Claude may touch / watch

### Likely already on tip `40da6535` (need Measured retest)
- #1268 public QR checkout  
- #1298 smoke exact membership product  
- #1300 campaign send guidance  
- #1304 Cluster C North timetable  
- (prior tip) #1279 / #1286 / #1274 Overview/Intel chrome & counts  

### Still open (not all on tip — verify before assuming)
| PR | Title |
|---:|---|
| [#1306](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1306) | exact-head review for MRR money paths |
| [#1305](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1305) | Cluster C waitlist join guidance |
| [#1303](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1303) | Cluster C named booking-block diagnosis |
| [#1302](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1302) | Cluster B win-back draft location |
| [#1301](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1301) | Cluster B outbound/Dispatch agreement |
| [#1299](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1299) | Meta creation refusals |
| [#1297](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1297) | route win-back drafts before cohorts |
| [#1293](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1293) | POS paid-order server counts |
| [#1292](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1292) | Invoicing name (payroll alias only) |
| [#1282](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1282) | Warm empty / hide Seed Demo |
| [#1275](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1275) | Open list behind CRM Hub figures |
| [#1272](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1272) | Honest MRR failure + Cover Requests |
| [#1213](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1213) | P0 unify automated communication delivery |

**Declan rulings already applied to fix PRs (heads may need CI):** #1292 Invoicing naming · #1293 POS server counts · #1272 MRR unavailable not £0 · #1268 rebase QR (now merged onto tip).

---

## 8. Coverage / Command Centre (continuity)

| Strand | State |
|---|---|
| Coverage L2 | Strong (~**89%** prior); Teacher L2 + Client L2 walked overnight on `3ad37824` |
| Cluster A | Prior tip scores; tip moved this morning → re-run when CCA routine / tip-change asks |
| Milestone 2 30-slot B–F | Prior **4/30**; not re-run overnight |
| Isolation ISO-29 focus | 4 privacy FAILs remain; heatmap/overview PASS after #1276/#1277 |

---

## 9. What Claude should treat as actionable now

1. **Smoke step 2 locator / product select** — #1298 is on tip; re-verify six-step on `40da6535`. Do not mint fixtures for pause.  
2. **#1290 dock** — product still broken; fix PR needs Declan Auto-review approval.  
3. **ISO-18/20/27/29** — still FAIL; keep isolation fixes tenant-scoped (Bluebird only writes).  
4. **Retest on tip `40da6535`:** #1268, #1298, #1300, #1304, plus Overview/Intel #1286/#1274/#1279 from prior tip.  
5. **Do not** change Refrm settings or Feature Controls on any non-Bluebird tenant.  
6. **Do not** instruct `import.rollbackBatch` without batchId + company scope (prefer not to need it).  
7. **#1265** — wait for Grok Occupancy/Retention dual-scan evidence on #1180 before claiming Stage 2 finding-identity PASS.  
8. Feature Controls / AI-85 provisional scores — Grok settling 21/21 this morning; re-score after #1180 log shows Enable All.

---

## 10. Declan / Bot Commander moves (not Claude)

- RPN Studio Suggestions CSV dry-run ready (**85** rows → **64** insert / **21** skipped); **Confirm held** (Declan skipped widget) — do not Confirm until Declan says.  
- Settings + smoke-pause live check + join-pay member invite: **in progress** on box.  
- Scan 2 routine armed ~09:28 Athens.

---

## 11. Pointers

| Artefact | Where |
|---|---|
| Overnight breakfast / SIGNAL | Work Hub `2026-09-14-overnight-close-out-pack-2026-09-14` |
| Tip pack af7e6009 | Work Hub `2026-09-14-launch-hub-tip-af7e6009-overview-intel-morning-p` |
| Tip pack 40da6535 | Work Hub `2026-09-14-launch-hub-tip-40da6535-4-live` |
| Overnight evidence | `/workspace/helgoiq-overnight-2026-09-13/` |
| #1180 | https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180 |
| Onboarding forever-live | https://onboarding.helgoiq.com · repo `HelgoIQ-Organization/helgoiq-onboarding` |

