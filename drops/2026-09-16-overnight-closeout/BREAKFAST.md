# Breakfast — overnight programme FINAL

**Pack tip:** `aee3b690b2f895393adf2b636dfc0c202d5d43fc`  
**Drift:** **none** for programme sections that re-checked `/api/version` on this tip (dataset, Feel, isolation, CC B–F final, coverage L2, LIMITED probes). Historical note only: Astra PA-SCAN-2 previously recorded tip `51015ca2…` (producer_ran=false). AI-85 prior rescore remains stamped to `ac845589…` (not re-run on aee3b690).  
**Staging:** https://lobster-app-662c7.ondigitalocean.app  
**Tenant:** Bluebird `c=150002` only  
**Finalized:** 2026-09-15T20:57Z UTC (23:57 EEST)

## Single thing Declan should know

**Dataset Confirm is blocked by a role gate, not a CSV problem.** Company Admin can `batchImport.list` + `upload` (canary batch **id 10**, 3/3 Valid), but `batchImport.getById` returns **403 Platform admin access required**, so the UI shows **Batch not found** and Confirm never appears. Fix: allow company Admin `getById` for their own company (or stop auto-opening via a platform-only procedure). Until then 12m + year-backed AI / Pulse / Dispatch / Twin / CC disagreement stay gated. Tip `aee3b690`. See `dataset/STATUS.md` + `dataset/RETRY.md`.

## What works that did not

- **Command Centre Cluster A:** **24/24 PASS** on `aee3b690…` (Teacher2 refuse, TAG refuse, BLK-01 blocked before send).
- **Milestone 2 B–F:** **15 PASS / 15 FAIL** of **30/30** recorded on tip (`SUMMARY-BF-FINAL.md`). Includes **B-META-01 PASS** (`meta_not_connected`) — no Meta spend.
- **Feel re-walk on `aee3b690`:** Forms **+6**, Website **+5**, Timetable/Finance **+4**, Members/Settings **+3**, Home/Safe Studio/Ambient **+2**.
- **Astra on tip:** **PA-TWIN PASS**, **PA-SUPPORT-OWNER PASS** (seven areas; no Refrm leak).
- **Comms #1213 booking confirmation (retest):** **PASS** — Member A Agentmail + History Sent.
- **Coverage Teacher+Client L2 on `aee3b690`:** measured — Teacher 0P/11Partial/2F; Client 0P/21Partial/0F; isolation no Refrm URL/control (Teacher), Client I080–I083 PASS.
- **ISO-29 isolation on tip:** **25 PASS / 4 EXPECTED_FAIL / 0 unexpected FAIL** (matrix current for #1309).
- **LIMITED probes (thin fixture):** Pulse landing 52 Steady; Twin 2160676 cancelling hard-rule OK; Dispatch landing observed — not FULL year programme.
- **AI-85 prior (tip `ac845589…`, not re-run):** 3 PASS (AI-014 / AI-039 / AI-044).

## What still does not

- **Dataset:** Draft → **Batch not found**; canary not confirmed; **12m not loaded**. Orphan Drafts left on Bluebird.
- **Feel Command Centre −7** (50→43) — Aster stalls / weak Obvious+Frictionless.
- **Six-step smoke:** member still **Cancelling**; needs Stripe TEST immediate cancel of Connect sub — **NEED_DECLAN** (handoff previously declined; do not re-ask same handoff).
- **Consent gating:** **UNTESTED** — prefs Save disabled.
- **Comms:** member-cancel notify PARTIAL; cover #1343 PARTIAL; journey #1344 BLOCKED; newsletter Manager BLOCKED.
- **Astra:** PA-PULSE-MGR **EXPECTED_GAP**; PA-CC-1326-OWNER **BLOCKED** (no UI); PA-EXEC-MGR + PA-CC-1326-MGR **BLOCKED NEED_DECLAN** (no Manager password in secrets overnight); PA-GRANTS, PA-SCAN-1/2, PA-SUPPORT-PA **BLOCKED**.
- **Coverage defects still open:** Teacher profile vs home figure disagreement; KPI tiles do not drill; Client `/purchase` catalog empty while wallet shows pack prices.
- **ISO expected fails still open (#1309):** ISO-18, ISO-20, ISO-27, ISO-29.

## What could not be tested and why

| Item | Why |
|---|---|
| 12m dataset full load | `getById` 403 → Confirm unreachable after canary upload |
| AI-85 / AI-24 full-year re-score on planted history | Needs 12m; overnight re-score on `aee3b690` not done |
| Studio Pulse real-data movement from planted year | Dataset gate (LIMITED thin Pulse 52 only) |
| Morning Dispatch Owner/Manager/Teacher figure audit | Dataset gate (LIMITED landing only) |
| Twin planted at-risk / improving / steady cohorts | Dataset gate (existing Twin 2160676 LIMITED only) |
| CC vs Pulse/Dispatch/Twin disagreement matrix (§7e) | Dataset gate |
| Six-step smoke marker complete on tip | NEED_DECLAN Stripe Connect cancel |
| Consent marketing-off proof | Save disabled on prefs |
| Astra scans / grants / PA-CC-1326 / Support PA | BLOCKED (auth, UI absent, or hour-apart scan incomplete) |
| FULL post-dataset pack | Explicitly BLOCKED until 12m |

## LIMITED probes (thin fixture — not FULL)

- Tip `aee3b690` — FULL still BLOCKED (no 12m)
- **Pulse:** 52/100 Steady (−4 wk); biggest drag Attendance 0; Churn 100
- **Twin 2160676:** never labelled Improving — “Cancelling — access until 10 Oct 2026” / membership tile wins
- **Dispatch:** Not yet run today; last successful 2026-09-10 owner
- Evidence: `dataset-tests/limited-run/RESULTS.md`

## Feel re-walk (`aee3b690` vs prior)

| Surface | Before | After | Δ |
|---|---:|---:|---:|
| Website/CMS | 75 | 80 | +5 |
| Safe Studio | 53 | 55 | +2 |
| Settings | 45 | 48 | +3 |
| Home | 47 | 49 | +2 |
| Members/CRM | 56 | 59 | +3 |
| Timetable | 51 | 55 | +4 |
| Forms | 55 | 61 | +6 |
| Ambient | 63 | 65 | +2 |
| Command Centre | 50 | 43 | **-7** |
| Finance | 54 | 58 | +4 |

Source: `feel/AFTER-SCORES.md`.

## Isolation ISO-29 (`aee3b690`)

- **25 PASS / 4 EXPECTED_FAIL / 0 unexpected FAIL**
- EXPECTED_FAIL still: ISO-18, ISO-20, ISO-27, ISO-29 (#1309)
- Source: `isolation/RESULTS.md`

## Section tip ledger

| § | Item | Tip | Status |
|---|---|---|---|
| 1 | Dataset canary→12m | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | BLOCKED product — getById 403 Platform admin (batch 10 uploaded, Confirm unreachable) |
| 2 | Six-step smoke | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | BLOCKED NEED_DECLAN (Stripe Connect cancel) |
| 3 | Comms + consent | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | PARTIAL (consent UNTESTED) |
| 4 | Cluster A + 30-slot | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | A 24/24; B–F 15P/15F of 30 DONE |
| 5 | Astra Pass A | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | PARTIAL (SCAN-2 historically `51015ca2…`) |
| 6 | Otto | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | DONE |
| 7a | AI uncertain re-score | — | BLOCKED (no 12m) |
| 7b | Pulse real-data | `aee3b690…` | LIMITED done (52 Steady); FULL BLOCKED |
| 7c | Morning Dispatch audit | `aee3b690…` | LIMITED landing only; FULL BLOCKED |
| 7d | Twin planted cohorts | `aee3b690…` | LIMITED 2160676 cancelling OK; planted cohorts BLOCKED |
| 7e | CC disagreement matrix | — | BLOCKED (no 12m) |
| 8a | Coverage Teacher+Client L2 | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | DONE 0P/32Partial/2F |
| 8b | Feel re-walk | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | DONE — Forms+6 Website+5 CC−7 |
| 9 | 29-surface isolation | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | DONE 25P / 4 EXPECTED_FAIL |
| 10 | Breakfast | `aee3b690b2f895393adf2b636dfc0c202d5d43fc` | FINAL |

No secrets · no seat passwords · no invented scores.
