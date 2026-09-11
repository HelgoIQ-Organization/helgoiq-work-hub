# AI-85 overnight rescore — plain English (tip 232659cf)

**Tenant:** Bluebird Pilates (`c=150002`) · **Seat:** Admin2 · **Tip:** `232659cf…` (confirmed live on `/api/version`)

Overnight live recheck only — no Feature Controls toggles, no CSV/import/rollback, no Seed Demo, no Refrm writes.

## Counts (unchanged)

| Verdict | Count |
|---|---:|
| PASS | 48 |
| FAIL | 5 |
| UNCERTAIN | 23 |
| UNREACHABLE | 8 |
| SKIP | 1 |
| **Total** | **85** |

**Measured strand score:** 48/85 PASS ≈ **56%** (same number as the prior paper hold, now Measured on this tip).

## What we refreshed

Seven UNCERTAIN rows were re-checked with tip-specific evidence. **All stayed UNCERTAIN:**

| ID | Still UNCERTAIN because |
|---|---|
| AI-008 | Platform Admin Access Required |
| AI-009 | Platform Admin Access Required |
| AI-011 | Customer voice temporarily unavailable |
| AI-044 | Executive summary temporarily unavailable |
| AI-051 | Audience totals / AI segments still 0 |
| AI-055 | No independently verified AI reply draft |
| AI-076 | Recovery Orchestrator search returned 0 |

No verdict flipped. Dataset-blocked and known broken-list items (Pulse movement, Dispatch viewer, Event Bus reach, Twin cancelling-mismatch) were not re-scored tonight.

## Programme facts kept

- Smoke **6/6** Measured
- Cluster A **20/24** Measured
- ISO-29 **26 PASS / 4 FAIL / 2 NOT_RUN** Measured
- M1 Wave1 **partial** Measured
- Ambient evidence Measured (Pulse OK; Dispatch viewer FAIL)
- **Rollback ban ACTIVE** — never `import.rollbackBatch` until Declan clears
