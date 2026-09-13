# HelgoIQ progress handoff for Claude — 13 Sep 2026 (~13:05 EEST)

**Live tip:** `f40075da5f7ce0287e406459ace4adcbe6f053f7` (includes merged #1295 smoke Clerk session fix)  
**Prior score tip (many Hub strand stamps):** `6486be87a68821e383d36d5246f9da08a802ee59`  
**Staging:** https://lobster-app-662c7.ondigitalocean.app  
**Tenant for Feel/smoke:** Bluebird `c=150002` · Stripe TEST · observe-only unless noted  
**Work Hub:** https://helgoiq-organization.github.io/helgoiq-work-hub/  
**Tracker:** https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180  

**Author:** Bot Commander (Grok) for Declan Ryan  
**Purpose:** Shareable status for Claude / Codex — Feel measured wave, open fix PRs, smoke gate, launch strands. No seat passwords or invite tokens in this file.

---

## 1. Plain English (30 seconds)

Launch health is still **~63–66%** — not ready. Coverage L2 is strong (~**89%**). Feel (joyful/obvious/frictionless) headline is **~42%** with **9/15** surfaces measured. About **20 Feel fix PRs** are open waiting on the shared staging smoke gate / Codex. Critical-path smoke is **not green yet**: #1295 fixed the Clerk **401**, but invitation replay still fails (`already_accepted` not reported). Studio Pulse showing **0 CRITICAL** on Refrm is likely the **insufficient-data placeholder zero**, not a trusted measured critical score (Astra mid-flight).

---

## 2. Staging tip & smoke gate

| Item | State |
|---|---|
| Live `/api/version` | `f40075da…` |
| Shared commit status | **Staging critical-path smoke gate = FAIL** on open staging PRs |
| #1295 | **MERGED** — Playwright in-page Clerk Bearer for `getActiveCompany` (fixes prior 401) |
| `GROK_SMOKE_FIXTURES` | Refreshed 13 Sep (Member B + invite token + memberName) via `gh secret set` |
| Latest smoke fail | Step 1 invitation replay: *“not reported as already accepted”* (after 401 fix) |
| Gate rule | Green only via Actions PASS on current staging tip **or** trusted `<!-- helgoiq-smoke {…} -->` PASS marker (6 steps, ≤15 min, exact SHA) |

**Do not** treat chat PASS as the gate. Owner of marker/Actions path: Grok (Bot Commander).

---

## 3. Feel bar (joyful · obvious · frictionless)

Hub Feel: https://helgoiq-organization.github.io/helgoiq-work-hub/#feel  

**Headline:** J45 / O40 / F40 / **overall ~42** (equal-weight; **not** launch health %)  
**Basis tip on ux-bar.json:** still stamped `6486be87` for measured walks (retest after Feel PRs merge onto live tip)

### Measured (9)

| Surface | J | O | F | Overall | Top issues |
|---|---:|---:|---:|---:|---|
| Marketing | 68 | 72 | 58 | **66** | Rails overflow; 1850% Active Members; en-GB date |
| Website | 64 | 72 | 60 | **65** | Phone tab clip; Health contradiction; Unknown; Unsaved |
| Finance | 58 | 47 | 49 | **51** | Invoicing→Payroll; POS count disagree; non-drilling KPIs |
| Staff | 48 | 44 | 36 | **43** | Profile Unknown; clipped tabs; rota under dock |
| Members/CRM | 48 | 36 | 40 | **41** | Directory dead-end; Overview count —; buried list |
| Intelligence | 44 | 47 | 27 | **39** | Heat Map Refrm; Overview Refrm; MRR crash; splash; Seed Demo |
| Home | 40 | 22 | 38 | **33** | Refrm on Overview; full-page splash; aggregate dash |
| Academy | 42 | 22 | 34 | **33** | Named URL misroutes; dock clip |
| Team chat | 28 | 32 | 18 | **26** | Lowest measured |

### Still provisional (6)

Timetable ~45 · Ambient ~55 · Forms ~38 · Safe Studio ~39 · Settings ~35 · Command Centre ~34

### Standing Feel rules
- Census bots: observe-only → `REVIEW.md` + `FIX_CANDIDATE.md` + before shots; **no Platform edits**
- Bot Commander launches CloudAgent PRs on HelgoIQ-Platform
- Declan UX bar: joyful / obvious / frictionless vs WhatsApp & Slack

---

## 4. Open Feel / related fix PRs (merge queue)

Smoke gate + Codex exact-head may block merge until smoke is green.

| PR | Title |
|---:|---|
| [#1276](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1276) | FC-INTEL-01 Heat Map tenant filters |
| [#1277](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1277) | FC-INTEL-02 Hide Refrm on Overview |
| [#1278](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1278) | FC-INTEL-03 MRR empty state |
| [#1279](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1279) | FC-INTEL-04 In-admin loading chrome |
| [#1280](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1280) | Website/Blog phone overflow |
| [#1281](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1281) | Website Health honest failure |
| [#1282](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1282) | FC-INTEL-05 Warm empty / hide Seed Demo |
| [#1283](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1283) | CMS identity Unknown + Unsaved |
| [#1284](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1284) | Members Directory → list |
| [#1285](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1285) | Inbox rails + 1850% fix |
| [#1286](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1286) | Overview Members count |
| [#1287](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1287) | Members invitations collapse |
| [#1288](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1288) | Campaign schedule en-GB 24h |
| [#1289](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1289) | Academy named routes |
| [#1290](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1290) | Admin dock clearance (LMS + Rota) |
| [#1291](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1291) | Staff Unknown + wrap tabs |
| [#1292](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1292) | Finance payroll / invoicing / money actions |
| [#1293](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1293) | POS paid-order + refund KPIs |
| [#1294](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1294) | BI scorecard no-baseline vs missed |
| [#1295](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1295) | **MERGED** smoke Clerk session |

Also related open: #1269 (Codex smoke auth), #1268 QR checkout, #1270 privacy names, #1271–#1273 CC/finance drills.

---

## 5. Launch strands (Hub dashboard — tip stamp lag possible)

| Strand | % | Status | Notes |
|---|---:|---|---|
| Ambient | **92** | on-track | Dispatch viewer PASS |
| Findings-fix | **87** | at-risk | Pack of fixes; Feel PRs queued |
| Isolation | **86** | at-risk | ISO-18/20/27/29 still FAIL |
| M1 / member journey | **72** | at-risk | Provider / partials |
| Critical-path smoke | **67** | at-risk | Gate red; invite replay next |
| Payments | **62** | at-risk | Stripe TEST fragile |
| AI-85 | **56** | at-risk | ~48/85 PASS held |
| Dataset | **52** | at-risk | Canary 403 `Missing companyId` |
| Command Centre | **48** | at-risk | A **24/24** · M2 B–F **4/30** |
| Comms automation | **15** | blocked | Needs 5 Resend/Agentmail secrets (#1213) |

**Coverage:** L≥1 ~**93%** (383/413) · L≥2 ~**89%** (368/413) — L2 long-tail wave complete.

**Milestone 2 Clusters B–F:** frozen 30-slot bank scored **4 PASS / 26 FAIL** on `6486be87`. PASSes: B-MSG-01, C-TODAY-01, E-FU-01, F-FU-01. Detail on #1180.

---

## 6. Studio Pulse (Refrm Home “0 CRITICAL”)

- Old ~**50** was often a **default**, removed by #1237 (“never a default fifty”).
- Insufficient studios still **store** `pulseScore = 0` (DB NOT NULL).
- Correct UX: `confidenceReason` starting `insufficient_data` → band **Insufficient data**, not Critical.
- Critical band is for a **real** score **0–34**.
- Declan’s Refrm screenshot (0 + CRITICAL copy) is consistent with **placeholder zero painted as Critical** — do **not** treat as trusted “studio is dying.” Astra stage work (#1255/#1266 merged; more in flight).

---

## 7. What Claude / Codex should do next (ordered)

1. **Unblock smoke invite replay** so Actions 6/6 can PASS on tip `f40075da` (or coordinate with Grok on fixture/replay). Until green, Feel PR merge queue stays sticky.
2. **Merge Feel fix PRs** (#1276–#1294) in small batches once smoke/Codex allow; Grok will retest Feel scores after deploy.
3. **Milestone 2 B–F** — fix the 26 fails from #1180 verbatim pack (biggest CC % swing).
4. **Dataset canary** — `batchImport.upload` Missing companyId HTTP 403.
5. **ISO-18 / 20 / 27 / 29** privacy leaks.
6. **Pulse Home card** — never show Critical for insufficient placeholder zero (align Home with `getStudioPulseBand` / `scoreAvailability`).
7. **Comms** — only if Declan supplies the five secrets.

---

## 8. What Grok will keep doing

- Press invitation-replay smoke fail; re-fire gate when fixed  
- Merge Hub drops + Feel retests after tip moves  
- Census bots stay observe-only for remaining provisional Feel surfaces  
- No Feature Control toggles without Declan; no passwords in markdown/#1180  

---

## 9. Artefact paths (box)

- Feel packs: `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/`  
- Hub Feel drop: `drops/2026-09-13-ux-bar-feel/`  
- This handoff: `/workspace/helgoiq-afternoon-2026-09-13/22-progress/HELGOIQ-PROGRESS-FOR-CLAUDE-2026-09-13.md`  
- Prior morning progress: `/workspace/helgoiq-afternoon-2026-09-12/21-progress/HELGOIQ-PROGRESS-2026-09-13.md`  

---

*No passwords, invite tokens, or Clerk secrets in this document.*
