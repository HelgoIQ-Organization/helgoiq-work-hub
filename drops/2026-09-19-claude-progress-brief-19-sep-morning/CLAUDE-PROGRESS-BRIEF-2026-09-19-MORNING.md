# HelgoIQ progress brief for Claude — 19 Sep 2026 (morning)

**Audience:** Claude (shared by Declan)  
**Author:** Bot Commander (Grok)  
**As of:** 2026-09-19 ~07:45 Europe/Athens  
**Live staging tip:** `d5b7d47de4cd96afbb95ec3a14d53e7be40bc463` (`d5b7d47d`)  
**Staging:** https://lobster-app-662c7.ondigitalocean.app  
**Tenant for all Measured work:** Bluebird `c=150002` only — never Reformer writes  
**Launch Hub headline:** **70%** (held since AI-24 honest re-score on tip `205d5bb8`)

---

## Executive read (one screen)

| | |
|---|---|
| **Headline** | **70%** weighted strand average — not a tip rollback |
| **Biggest unlock waiting** | **Occupancy + Retention Observe pilots** via existing platform-admin API — blocked on a **platform-admin Agentmail seat** (Clerk OTP on Declan's Gmail; studio Admin2 → 401) |
| **Programme rule (Declan 18 Sep evening)** | Everything else waits behind Observe until configured **or** precisely blocked (already posted). Cursor unavailable several days → Feel findings go to **#1180 as FIX_CANDIDATEs**; **Codex builds**, **Claude Code coordinates** |
| **Command Centre** | Cluster A **24/24 PASS** on live tip; B–F **24/30** (6 FAIL held) |
| **Feel** | Mean **84/100** flat across tip moves; **DEF-T-PERF-ROUTE** still open |
| **Isolation** | **86% Measured FAIL hold** — #1376 live but ISO-18 + ISO-29 still FAIL on Admin2 Reformer |
| **AI-24** | **25% Measured** (3 PASS / 17 BLOCKED / 4 SKIP) — drove 76→70 headline; empty opportunity ≠ invent PASS |

---

## Why Hub is 70% (not broken)

Exact Hub math (half-up):

```
round((80×12 + 87×10 + 86×10 + 25×15 + 95×9 + 73×10 + 55×6 + 74×8 + 100×10 + 42×10) / 100)
= round(69.92) = 70%
```

The **76% → 70%** drop on 18 Sep was **only** the AI strand **68 → 25** at 15% weight after an honest AI-24 re-score against live twelve-month Bluebird data. Tip did not roll back. Dataset Confirm lift earlier the same day had taken the headline to 76% first.

---

## Current strand board (tip `d5b7d47d`)

| Strand | % | Basis | Weight | Honest note |
|---|---:|---|---:|---|
| Dataset | **80** | Measured | 12 | #1388 LIVE. Company Admin2 Confirm/Approve canary PASS (3-row draft → Approved). Import/Activate **not** run. 12m seed: **177** members / **165** `SEED:12M-2026-09` / Member A present |
| Command Centre | **87** | Measured | 10 | A **24/24** on `d5b7d47d`; B–F **24/30** (see fails below) |
| Isolation | **86** | Measured FAIL hold | 10 | #1376 on tip; Admin2 Reformer retest **ISO-18 FAIL + ISO-29 FAIL** (Bluebird still in chooser / access). No invented PASS |
| AI-24 (`ai-85`) | **25** | Measured | 15 | 3 PASS / 0 FAIL / 17 BLOCKED / 4 SKIP on tip `205d5bb8` vs live 12m; 6-row disagreement ledger |
| Ambient | **95** | Estimate | 9 | Embeds/widgets held — no invent from merge alone |
| M1 | **73** | hold | 10 | No new M1 Measured invent |
| Smoke | **55** | Measured FAIL hold | 6 | Cancelling≠terminal / checkout gates; Turnstile NEED_DECLAN on fresh smoke signup |
| Payments | **74** | Estimate | 8 | Cash refuse paths partially improved; cash gift gate still FAIL in bank |
| Findings-fix | **100** | at-risk | 10 | Tracked findings shipping; remaining FAIL packs still open |
| Comms | **42** | Measured hold | 10 | 1 PASS (Consent) / 5 PARTIAL all classified **B = never arrived**; proof inbox missing |

**Hub dataAsOf (last regen):** `2026-09-18T17:23:25.569Z` (~20:23 Athens) — tip still `d5b7d47d` this morning.

---

## P0 — Observe Occupancy + Retention (programme gate)

Declan (18 Sep): single most valuable work. Steps:

1. Configure authorised Observe pilots for **Occupancy** and **Retention** via existing **platform-admin application API** (`commandCentreAgents.getDashboard` → `updateAgent`). Astra: **no new UI / no Start Observe card**.
2. Let the **normal scheduler** run the first ordinary scan (not manual `requestRun`; never global worker — not Bluebird-scoped).
3. Wait **≥1 hour**, let it run again (Astra also notes separate six-hour UTC buckets).
4. Post **run IDs, work IDs, natural identities, source lineage** for both runs on #1180.
5. Then re-score AI surfaces populated by findings; post 6-row disagreement ledger verbatim to Astra + Codex on #1180.

### Exact block (posted #1180 within the hour)

| | |
|---|---|
| **Stamp** | 2026-09-18 ~18:01 EEST (same gate ~17:31) |
| **Error** | No authorised platform-admin application session. Studio Admin2 → `getDashboard` **HTTP 401** `UNAUTHORIZED`. Declan Gmail PA sign-in stops at Clerk **`/sign-in/factor-one`** OTP |
| **Endpoint** | `commandCentreAgents.getDashboard` then `updateAgent` (occupancy + retention → observe / observe_pilot) |
| **Seat tried** | PA Declan Gmail; insufficient prior session Admin2 Agentmail |
| **One-line unblock** | Create a **platform-admin Agentmail seat** Grok can sign into without Declan's Gmail OTP (or complete OTP on the open factor-one page) |

**Astra payload shape (unconfigured agent):**  
`companyId: 150002`, `agentKey: occupancy|retention`, `mode: "observe"`, `maxAutonomy: "inform"`, `targetStage: "observe_pilot"`, `rolloutConsent: true`, plus promotion reason. Inspect stage first; preserve narrower cohort; `proactiveReviewsEnabled=false` blocks schedule and API has no setter.

**State:** Occupancy/Retention **NOT READ / NOT CHANGED**. No run/work/finding IDs from authorised path.

Evidence folder: `/workspace/helgoiq-full-programme-2026-09-17/observe-pilots-205d5bb8/`

---

## Command Centre (tip `d5b7d47d`)

| Bank | Result |
|---|---|
| Cluster A | **24/24 PASS** (Admin2 + Teacher2; MGR-10 + ACS-X01 teacher_refuse PASS) |
| Clusters B–F | **24/30** |
| Still FAIL | `B-HOW-01`, `D-CASH-01`, `E-FU-01`, `F-ISO-01`, `F-INJ-01`, `F-HOW-01` |

#1180 has Cluster A + B–F comments. Loop stays armed.

**Also owed (do not invent PASS):** F-ISO-01 retest after #1404; D-RI-01 retest after #1401; Manager location grants #1396 GATED prove.

---

## Feel + Connections

| | |
|---|---|
| Remeasure mean | **84/100** flat on tip moves through `d5b7d47d` (no Feel-named PRs in those deltas) |
| Surfaces (last remasure) | Signed-out **87** · Admin Home **83** · Members/CRM **82** · Timetable **83** · Teacher Perf **83** |
| Open Feel defect | **DEF-T-PERF-ROUTE** — `/teacher/my-performance` blank chrome; `/teacher/performance` honest empty |

### Feel FIX_CANDIDATEs → Codex (Cursor down)

Posted #1180 with full FIX_CANDIDATE detail for Codex; Claude Code coordinates.

1. **T-PERF-ROUTE** — teacher my-performance blank  
2. **CONN-DISCONNECT-NOOP** — Stripe/Gmail Disconnect no-ops  
3. **CONN-GTM-REFRM** — GTM Container ID + Reformer verification URL on Bluebird  
4. **CONN-META-DEADEND** — Facebook Connect does not hand off  

Work Hub drop: `drops/2026-09-18-feel-fix-candidates-for-codex-cursor-down/`

---

## Comms (re-census tip `205d5bb8`; hold 42%)

| Check | Verdict | A/B split |
|---|---|---|
| Consent | **PASS** | — |
| Member cancel | PARTIAL | **B** never arrived (status toast only) |
| Cover swap | PARTIAL | **B** never arrived |
| Journey | PARTIAL | **B** never arrived (claimed Admin2; inbox empty) |
| Segment Send Test | PARTIAL | **B** — toast "sent"; proof inbox **404 / not provisioned** |
| Manager newsletter | PARTIAL | **B** — same missing proof inbox |

**Infra:** recreate `helgoiq-comms-proof@agentmail.to` (or successor) before Segment/Manager Send Test can prove arrival. #1420 campaign-test provider receipt is on tip — Comms re-census after that still owed; hold 42% until Measured.

---

## Isolation

- **#1376** merged and live (chooser leak fix).  
- Retest Admin2 Reformer read-only: **ISO-18 FAIL**, **ISO-29 FAIL** — Bluebird still appears under Reformer Business access / Memberships and CC "Choose a studio" offers only Bluebird.  
- Isolation strand **Measured 86% FAIL hold**. Prefer not to need `import.rollbackBatch`.

---

## Other open / parked (behind Observe)

| Item | State |
|---|---|
| Smoke fresh member | Turnstile NEED_DECLAN; smoke fixtures must change after accept |
| Restricted Manager Pulse | #1396 / seat restrict GATED; Turnstile history |
| #1377 MEM-F01 | Still OPEN / not on tip |
| #1410 CMS | Still OPEN |
| AI re-score after Observe findings | Parked until two scheduled scans + IDs posted |
| 6-row CC vs Pulse/Dispatch/Twin ledger | Exists from AI-24; re-post verbatim to Astra+Codex after Observe findings populate |

---

## Tip trail (18 Sep, Bluebird-only Measured)

Approximate sequence ending at live tip:

`cace7a56` → `6adaf8e2` (#1400 Admin Home) → `0507113f` → `205d5bb8` (Dataset #1388 + AI-24 day) → `56e66fbb` (#1376 ISO + #1401 D-RI) → `660c9038` (#1418/#1396/#1420 pack) → **`d5b7d47d` (#1404 F-ISO-01)**

Headline held **70%** across late tip moves without inventing strand PASS from merges alone.

---

## What Claude / Codex should do next (priority order)

1. **Unblock Observe** — Declan creates Agentmail **platform-admin** seat (or completes Gmail OTP). Grok configures Occupancy+Retention, waits for two normal scheduler scans ≥1h apart, posts IDs/lineage on #1180.  
2. **Codex** — build the four Feel FIX_CANDIDATEs already on #1180 (Claude Code coordinates).  
3. **After Observe evidence** — AI surface re-score + 6-row ledger to Astra+Codex on #1180.  
4. **Isolation fix follow-up** — ISO-18/29 still FAIL despite #1376; needs another product fix + Admin2 Reformer retest.  
5. **CC FAIL pack** — B-HOW / D-CASH / E-FU / F-ISO / F-INJ / F-HOW (and F-ISO-01 / D-RI-01 retests).  
6. **Comms** — recreate proof inbox; re-census after #1420; do not raise 42% until Measured arrival.

**Policy reminders:** Never invent PASS. Empty AI opportunity = BLOCKED not FAIL. Bluebird `c=150002` only. Prefer not to need import rollback. Never paste seat passwords / API keys into #1180 or this brief.

---

## Key links / paths

- Staging `/api/version` tip: `d5b7d47de4cd96afbb95ec3a14d53e7be40bc463`  
- Tracker: HelgoIQ-Organization/HelgoIQ-Platform **#1180**  
- Work Hub: Launch Hub drops for tip `d5b7d47d`; Feel FIX pack `2026-09-18-feel-fix-candidates-for-codex-cursor-down/`  
- Observe evidence (block): `/workspace/helgoiq-full-programme-2026-09-17/observe-pilots-205d5bb8/`  
- This brief: `/workspace/helgoiq-full-programme-2026-09-17/pack-1180/CLAUDE-PROGRESS-BRIEF-2026-09-19-MORNING.md`
