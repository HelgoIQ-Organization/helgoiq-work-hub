# Overnight Teacher + Client Coverage L2 — tip `3ad37824`

**Tip:** `3ad3782443d147934342e08a27d7151133369f74` · Bluebird `c=150002` · Stripe TEST  
**Seats:** Teacher 3 · Member B  
**Guards:** no Feature Control · no Refrm writes · no passwords in artefacts

## Scores

| Hub | Seat | PASS | PARTIAL | FAIL | BLOCKED | Total |
|---|---|---:|---:|---:|---:|---:|
| Teacher | Teacher 3 | 1 | 10 | 2 | 0 | 13 |
| Client | Member B | 0 | 21 | 0 | 0 | 21 |
| **Combined** | | **1** | **31** | **2** | **0** | **34** |

## Highest-value defects (Teacher)

1. `/teacher/profile` vs `/teacher` figure disagreement (ACTIVE CLASSES 12 / WEEKLY HOURS 34 vs Home HOURS 0.0 / Weekly Attendance 0).
2. Home + Profile KPI tiles do not drill.

## Client

All 21 routes **L2_PARTIAL** — controls partially exercised; book/buy/charge confirms withheld; no blank crashes; no Refrm UI leak.

## Paths

- `coverage/results/TEACHER-SUMMARY.md`
- `coverage/results/CLIENT-SUMMARY.md`
- `coverage/results/teacher-l2.jsonl`
- `coverage/results/client-l2.jsonl`
- `coverage/evidence/teacher-*.webp` · `coverage/evidence/client-*.webp`
