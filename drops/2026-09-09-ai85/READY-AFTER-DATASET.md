# AI-85 UNCERTAIN — ready now vs wait for #1229 / 12m dataset

**Date:** 2026-09-10 (Europe/London)  
**Companion:** `UNCERTAIN-RESCORE-CHECKLIST.md`  
**Import blocker:** PR **#1229** (CSV `import.members` `companyId` stamp) → staging deploy → commit `SEED:12M-2026-09` (currently **0** seed rows).  
**Seat:** Admin2 preferred for all re-scores below. No credentials in this file. No browser run here.

---

## Counts

| Bucket | N | IDs |
|---|---|---|
| **Ready-now** (score without 12m seed) | **8** | AI-008, 009, 011, 017, 044, 051, 055, 076 |
| **Wait-dataset** (must wait #1229 import / 12m seed) | **15** | AI-007, 014, 015, 022, 026, 027, 028, 030, 031, 032, 033, 039, 040, 041, 046 |
| **Skip broken-list** (do not re-test) | **1** | AI-019 |
| **Total** | **24** | |

---

## Ready-now (N=8) — no #1229 import required

| ID | Surface | Why ready now | Settler / caveat |
|---|---|---|---|
| AI-008 | AI Operations Health | Platform Admin gate, not empty seed | NEED_DECLAN Platform Admin; Admin2 re-check access only |
| AI-009 | AI Decision Audit | Platform Admin gate | Same as AI-008 |
| AI-011 | Customer Voice Synthesis | Voice profile connection unavailable | Retry load; not 12m CSV |
| AI-017 | Command History | One permitted non-chat CC op can populate history | Admin2 safe CC action; no dataset |
| AI-044 | Monthly Intelligence Review | JSON already generated; summary temporarily unavailable | Retry Generate / executive summary |
| AI-051 | AI Audience Intelligence | 0 suggestions tied to Feature Controls 0/21 + Platform Admin | Re-confirm gate; NEED_DECLAN for true ON |
| AI-055 | Communications Hub AI replies | Inbox already has conversations | Verify draft suggestion / AI settings; do not send |
| AI-076 | AI Recovery (orchestrator) | Flag OFF + product identity (Hub ≠ Orchestrator) | Re-search identity; do not toggle flag |

---

## Wait-dataset (N=15) — after #1229 merge + `SEED:12M-2026-09` commit

| ID | Surface | Why wait for 12m |
|---|---|---|
| AI-007 | AI Governance | Zero governance actions/approvals |
| AI-014 | CC Agents / operational AI team | Empty agent queue / workflows |
| AI-015 | CC Tasks | No tasks (optional early single test task only if Declan authorises) |
| AI-022 | What We've Learned | 0 lessons / 0 outcomes |
| AI-026 | Intelligence Centre | 0 open opportunities |
| AI-027 | Intelligence Impact Centre | £0/0 impact metrics |
| AI-028 | Decision Engine | No priority scores |
| AI-030 | Manager Intelligence | No managers / attention items |
| AI-031 | My Actions | No assignments |
| AI-032 | Recommendation Tracker | No tracked recommendations |
| AI-033 | Action Effectiveness Library | No recorded outcomes |
| AI-039 | Studio Intelligence | No active items/lessons (do not re-test Pulse movement) |
| AI-040 | Org Intelligence | No contribution/recognition data |
| AI-041 | Workforce Intelligence | Staff review empty |
| AI-046 | Daily Focus | No active intelligence objects after Calculate Priorities |

Many of AI-026–041 also remain **flags-off provisional** (`scored_pre_enable` / UI 0/21). After seed, still treat enablement mismatch as NEED_DECLAN if controls stay 0/21.

---

## Skip broken-list (N=1)

| ID | Surface | Broken item | Action |
|---|---|---|---|
| AI-019 | Morning Dispatch (full page) | **Dispatch viewer** | **Do not re-test** until `/dispatch` (and `/admin/dispatch`) fixed. Generate Now already known PASS. |

Other broken-list items (Pulse movement, Event Bus, Twin Cancelling mismatch) are **not** among these 24 UNCERTAIN IDs — do not fold them into this re-score walk.

---

## Suggested order after #1229 lands

1. Finish any **ready-now** leftovers (gates / AI-017 / AI-044 / AI-055 / AI-076).  
2. Import + verify seed marker on Bluebird only.  
3. Re-score the **15** wait-dataset IDs on Admin2.  
4. Keep AI-019 parked until Dispatch viewer leaves the Cursor broken-list.
