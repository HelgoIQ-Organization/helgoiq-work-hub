# AI-85 — 24 UNCERTAIN re-score checklist

**Date:** 2026-09-10 (Europe/London)  
**Sources:** `MASTER.csv`, section notes A–I, ambient pack `/workspace/helgoiq-ambient-2026-09-09/`, status `/workspace/helgoiq-status-for-claude-2026-09-10.md`, dataset `/workspace/helgoiq-bluebird-12m-dataset-2026-09-10/BLOCKED.md`  
**Tenant:** Bluebird `c=150002` only · **No credentials** · **NO browser in this artefact**  
**Preferred seat for re-score:** **Admin2** (`helgoiq-bb-admin-2@agentmail.to`) — spot-check / settle; Platform Admin only where noted (NEED_DECLAN).  
**Dataset gate:** 12m seed `SEED:12M-2026-09` blocked until **PR #1229** merges + staging deploy (import `companyId` stamp).  
**Cursor broken-list — do NOT re-test until fixed separately:** Pulse movement · Dispatch viewer · Event Bus · Twin Cancelling mismatch.

Legend for each row:
- **dataset_blocked** — needs 12m seed / rich history before usefulness can be judged
- **flags_off_provisional** — scored while Feature Controls UI showed 0/21 (or `scored_pre_enable`)
- **broken_list** — skip re-test; defect already owned outside this UNCERTAIN settle

Companion: `READY-AFTER-DATASET.md`

---

## AI-007 — AI Governance (census: AI Governance Centre)

| Field | Value |
|---|---|
| Surface / title | AI Governance |
| Route | `/admin/ai-governance?c=150002` |
| Seat (re-score) | **Admin2** preferred (original: Owner) |
| Last UNCERTAIN reason | Page healthy but zero actions, zero approvals, no activity. Seed a Bluebird governance action/approval to verify end-to-end usefulness. |
| dataset_blocked (12m) | **Yes** — empty activity; settle after seed + real governance events |
| flags_off_provisional | **Yes** (Section A provisional / 0/21) |
| broken_list | **No** |
| Re-score note | After #1229 seed; confirm approvals/actions appear. Do not toggle Feature Controls. |

---

## AI-008 — AI Operations Health

| Field | Value |
|---|---|
| Surface / title | AI Operations Health |
| Route | `/admin/ai-operations/health?c=150002` |
| Seat (re-score) | **Admin2** first; settle needs **Platform Admin** (NEED_DECLAN) |
| Last UNCERTAIN reason | Blocked by Platform Admin Access Required. Platform-admin seat needed to verify health data; flag Declan rather than changing settings. |
| dataset_blocked (12m) | **No** — access gate, not empty seed |
| flags_off_provisional | **Yes** (Section A) |
| broken_list | **No** |
| Re-score note | Ready to re-check access now; cannot PASS without Platform Admin. |

---

## AI-009 — AI Decision Audit

| Field | Value |
|---|---|
| Surface / title | AI Decision Audit |
| Route | `/admin/ai-decision-audit?c=150002` |
| Seat (re-score) | **Admin2** first; settle needs **Platform Admin** (NEED_DECLAN) |
| Last UNCERTAIN reason | Blocked by Platform Admin Access Required. Platform-admin seat needed to verify the audit trail; flag Declan. |
| dataset_blocked (12m) | **No** — access gate |
| flags_off_provisional | **Yes** (Section A) |
| broken_list | **No** |
| Re-score note | Same as AI-008 — gate, not dataset. |

---

## AI-011 — Customer Voice Synthesis

| Field | Value |
|---|---|
| Surface / title | Customer Voice Synthesis |
| Route | `/admin/customer-voice-synthesis?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Page reports customer voice data temporarily unavailable; could not load voice profile/examples. Working Bluebird voice profile connection would settle. |
| dataset_blocked (12m) | **No** — integration / profile availability (not 12m CSV) |
| flags_off_provisional | **Yes** (Section A) |
| broken_list | **No** |
| Re-score note | Retry now; if still unavailable → keep UNCERTAIN with connection settler. |

---

## AI-014 — Command Centre Agents (Your operational AI team / Agentic Operations)

| Field | Value |
|---|---|
| Surface / title | Your operational AI team / Agentic Operations |
| Route | `/admin/command-centre/agents?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Operational queue empty (no approvals, agent work, tasks, or recommendations). Seed a Bluebird agent item/workflow to verify behavior. |
| dataset_blocked (12m) | **Yes** (parked with 12m empties; light CC activity alone may still be thin) |
| flags_off_provisional | **Yes** (Section A) |
| broken_list | **No** |
| Re-score note | Prefer after #1229; optional light Admin2 CC probe only if Declan wants early settle. |

---

## AI-015 — Command Centre Tasks (Tasks)

| Field | Value |
|---|---|
| Surface / title | Tasks |
| Route | `/admin/command-centre/tasks?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Tenant has no tasks. Create a non-destructive Bluebird test task or provide task data to verify filtering and lifecycle. |
| dataset_blocked (12m) | **Borderline → treat as wait-dataset** for cohort settle; a single non-destructive task can settle without 12m if authorised |
| flags_off_provisional | **Yes** (Section A) |
| broken_list | **No** |
| Re-score note | Checklist default: wait #1229 unless Declan authorises one test task now. |

---

## AI-017 — Command History (Your Command History)

| Field | Value |
|---|---|
| Surface / title | Your Command History |
| Route | `/admin/command-history?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Personal history zero entries. Run a permitted non-chat Command Centre operation, or provide history data, to verify results. |
| dataset_blocked (12m) | **No** — one permitted CC operation can settle without 12m |
| flags_off_provisional | **Yes** (Section A) |
| broken_list | **No** |
| Re-score note | **Ready-now** via safe Admin2 CC action (no chat bank). |

---

## AI-019 — Morning Dispatch (full page)

| Field | Value |
|---|---|
| Surface / title | Morning Dispatch (admin page) |
| Route | `/admin/morning-dispatch?c=150002` (viewer `/dispatch` / `/admin/dispatch`) |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Generate Now completed for Studio Owner (Ready/1 role view), but linked `/dispatch` viewer errors — generated briefing content could not be verified. |
| dataset_blocked (12m) | **No** — blocked by viewer defect |
| flags_off_provisional | **Yes** (Section B provisional) |
| broken_list | **YES — Dispatch viewer** · **DO NOT RE-TEST** until viewer fixed |
| Re-score note | Ambient confirms Generate PASS / viewer FAIL. Skip until Dispatch viewer leaves broken-list. |

---

## AI-022 — What We've Learned (page)

| Field | Value |
|---|---|
| Surface / title | What We've Learned |
| Route | `/admin/what-we-learned?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Healthy page; 0 active lessons / No lessons yet. Lessons begin after actions recorded and outcomes measured. |
| dataset_blocked (12m) | **Yes** — needs measured outcomes (ambient Learning UNCERTAIN; 12m seed) |
| flags_off_provisional | **Yes** (Section B) |
| broken_list | **No** (Event Bus is separate; do not re-test Event Bus UI) |
| Re-score note | After #1229 + action/outcome cycle. |

---

## AI-026 — Intelligence Centre

| Field | Value |
|---|---|
| Surface / title | Intelligence Centre |
| Route | `/admin/intelligence-centre?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Bluebird state empty (0 open opportunities). Needs populated intelligence opportunities or authorised demo seeding; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** |
| Re-score note | Wait #1229 import. |

---

## AI-027 — Intelligence Impact Centre

| Field | Value |
|---|---|
| Surface / title | Intelligence Impact Centre |
| Route | `/admin/intelligence-impact?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Impact metrics all £0/0. Needs impact events or authorised demo data; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** |
| Re-score note | Wait #1229 import. |

---

## AI-028 — Decision Engine

| Field | Value |
|---|---|
| Surface / title | Decision Engine |
| Route | `/admin/decision-engine?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | No priority scores. Needs populated recommendations/actions and successful recalculation; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** |
| Re-score note | Wait #1229 import. |

---

## AI-030 — Manager Intelligence

| Field | Value |
|---|---|
| Surface / title | Manager Intelligence |
| Route | `/admin/intelligence/manager?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | No managers / attention items. Needs manager hierarchy/seeded managers; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** |
| Re-score note | Wait #1229 import. |

---

## AI-031 — My Actions

| Field | Value |
|---|---|
| Surface / title | My Actions |
| Route | `/admin/intelligence/my-actions?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | No attention items or assigned recommendations. Needs intelligence cycle that creates assignments; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** |
| Re-score note | Wait #1229 import. |

---

## AI-032 — Recommendation Tracker

| Field | Value |
|---|---|
| Surface / title | Recommendation Tracker |
| Route | `/admin/recommendation-tracker?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | No recommendations tracked. Needs generated recommendations and tracking events; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** |
| Re-score note | Wait #1229 import. |

---

## AI-033 — Action Effectiveness Library

| Field | Value |
|---|---|
| Surface / title | Action Effectiveness Library |
| Route | `/admin/action-effectiveness?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | No action-effectiveness data. Needs recorded action outcomes; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** |
| Re-score note | Wait #1229 import. Also ISO-19 / FC-011 isolation row. |

---

## AI-039 — Studio Intelligence

| Field | Value |
|---|---|
| Surface / title | Studio Intelligence |
| Route | `/admin/studio-intelligence?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Studio Pulse 50 but no active items/new lessons. Needs active intelligence cycle/outcomes; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** — do **not** re-test **Pulse movement** here (separate broken-list item on Studio Pulse recompute) |
| Re-score note | After seed; score intelligence items/lessons only — not Pulse recompute. |

---

## AI-040 — Org Intelligence

| Field | Value |
|---|---|
| Surface / title | Org Intelligence |
| Route | `/admin/org-intelligence?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | All clear / no attention. Needs contribution/recognition data; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** |
| Re-score note | Wait #1229 import. |

---

## AI-041 — Workforce Intelligence

| Field | Value |
|---|---|
| Surface / title | Workforce Intelligence |
| Route | `/admin/workforce-intelligence?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Staff review generation produced no output. Needs sufficient staff activity data; `scored_pre_enable`. |
| dataset_blocked (12m) | **Yes** |
| flags_off_provisional | **Yes** (`scored_pre_enable`) |
| broken_list | **No** |
| Re-score note | Wait #1229 import. |

---

## AI-044 — Monthly Intelligence Review

| Field | Value |
|---|---|
| Surface / title | Monthly Intelligence Review |
| Route | `/admin/monthly-review?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Generation returned September 2026 performance JSON, but executive summary was temporarily unavailable. Needs summary generation/fix to settle usefulness. |
| dataset_blocked (12m) | **No** — JSON already generated; summary path flake/fix |
| flags_off_provisional | **Partial** — evaluated after Enable All attempt; UI still 0/21 |
| broken_list | **No** |
| Re-score note | **Ready-now** — retry Generate / summary without waiting for #1229. Also ISO-21 / FC-014. |

---

## AI-046 — Daily Focus

| Field | Value |
|---|---|
| Surface / title | Daily Focus |
| Route | `/admin/daily-focus?c=150002` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | No focus items after Calculate Priorities; page says no active intelligence objects. |
| dataset_blocked (12m) | **Yes** — needs active priorities/recommendations |
| flags_off_provisional | **Partial** — post Enable All attempt; still empty |
| broken_list | **No** |
| Re-score note | Wait #1229. Also ISO-14 / I023 isolation. |

---

## AI-051 — AI Audience Intelligence

| Field | Value |
|---|---|
| Surface / title | AI Audience Intelligence |
| Route | `/admin/audience-intelligence` |
| Seat (re-score) | **Admin2** preferred (Section D was Admin2) |
| Last UNCERTAIN reason | AI suggestion request completed but generated 0 segment suggestions; metrics remained 0. Settler: Feature Controls UI 0/21 + Platform Admin required to enable; NEED_DECLAN. |
| dataset_blocked (12m) | **No** — flag / Platform Admin gate |
| flags_off_provisional | **Yes** (0/21 + NEED_DECLAN) |
| broken_list | **No** |
| Re-score note | **Ready-now** to re-confirm gate; PASS needs Declan Platform Admin / true ON state. |

---

## AI-055 — Communications Hub (AI replies)

| Field | Value |
|---|---|
| Surface / title | Communications Hub — AI replies aspect |
| Route | `/admin/communications-hub` |
| Seat (re-score) | **Admin2** preferred |
| Last UNCERTAIN reason | Hub + AI Reply Engine loaded; 47 conversations / 24 open; AI Overview + reply composer present. No reply sent; no dedicated AI-settings panel or draft suggestion independently verified. |
| dataset_blocked (12m) | **No** — inbox already populated |
| flags_off_provisional | **Weak / no** — catalogue later showed OFF but surface loaded |
| broken_list | **No** |
| Re-score note | **Ready-now** — verify draft suggestion / AI settings without sending. |

---

## AI-076 — AI Recovery (catalogue: AI Recovery Orchestrator)

| Field | Value |
|---|---|
| Surface / title | AI Recovery / Recovery Orchestrator (flag) |
| Route | Catalogue `/admin/ai-feature-toggles`; linked search “Recovery Orchestrator”; Recovery Hub ≠ orchestrator |
| Seat (re-score) | **Admin2** (Section I was Admin2); flag ON needs NEED_DECLAN |
| Last UNCERTAIN reason | Flag OFF; control present not exercised. Exact Recovery Orchestrator search absent; Recovery Hub calendar/reporting exists but is not the AI orchestrator. |
| dataset_blocked (12m) | **No** — product identity + flag gate |
| flags_off_provisional | **Yes** (claimed OFF; NEED_DECLAN) |
| broken_list | **No** |
| Re-score note | **Ready-now** for identity/search re-check; do not toggle flag. |

---

## Broken-list crosswalk (ambient defects — not AI-85 UNCERTAIN rows to re-walk)

| Broken item | Ambient verdict | Related AI-85 note |
|---|---|---|
| Pulse movement | FAIL (recompute stuck at 50) | Not an UNCERTAIN ID; **do not** re-test Pulse move while settling AI-039 |
| Dispatch viewer | FAIL (`/dispatch`, `/admin/dispatch`) | **AI-019** skip |
| Event Bus | UNREACHABLE (Platform Admin) | AI-013 UNREACHABLE — outside this 24 |
| Twin Cancelling mismatch | Member A directory Cancelling vs Twin Improving | Ambient Twin defect; AI-085 was PASS — **do not** re-test mismatch here |

---

## Counts (see also READY-AFTER-DATASET.md)

| Bucket | N |
|---|---|
| Total UNCERTAIN in checklist | **24** |
| Ready-now (no 12m required) | **8** |
| Wait #1229 / 12m dataset | **15** |
| Skip broken-list | **1** (AI-019) |
