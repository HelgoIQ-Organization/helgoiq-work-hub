# Teacher + Client Coverage L2 — overnight-pack 2026-09-15

**Guards:** Bluebird `c=150002` only · no Feature Control · no secrets · writes/Stripe withheld

## Scores

| Hub | Seat | Tip stamp | PASS | PARTIAL | FAIL | BLOCKED | Total | Isolation |
|---|---|---|---:|---:|---:|---:|---:|---|
| Teacher | Teacher2 | `e3ba86e8…` (programme; live drifted to ac845589 after walk) | 1 | 10 | 2 | 0 | 13 | no Refrm URL/control (key-name leftovers only) |
| Client | Member B | `ac845589…` (live) | 0 | 21 | 0 | 0 | 21 | **PASS** I080–I083 |
| **Combined** | | | **1** | **31** | **2** | **0** | **34** | |

## Highest-value defects

1. Teacher profile vs home figure disagreement (ACTIVE CLASSES 12 / WEEKLY HOURS 34 vs Home HOURS 1.7 / Weekly Attendance 0).
2. Teacher home + profile KPI tiles do not drill.
3. Client `/purchase` empty membership/packs catalog while wallet still shows pack prices.

Full reports: `TEACHER-L2.md`, `CLIENT-L2.md`. JSONL: `coverage/results/*.jsonl`.
