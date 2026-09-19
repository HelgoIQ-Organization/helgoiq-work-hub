# RESULTS-AI24 — Measured re-score

- **Tip:** `b87f71f3ca13261731b4e6237195d5cee655db06` (verified from `/api/version`)
- **Seat:** Admin2 Bluebird, `c=150002`
- **Date:** 2026-09-19
- **Guards:** no Confirm&Execute, Seed Demo, Feature Control toggle, Refrm write, `import.rollbackBatch`, or mass send.

## Full score table

| ID | Surface | Verdict | Reason | Evidence |
|---|---|---|---|---|
| AI-007 | AI Governance Centre | BLOCKED | Reachable AI Governance Centre but activity is empty; no tenant-scoped governance content. | `evidence/AI-007.png` |
| AI-011 | Customer Voice Synthesis | BLOCKED | Reachable Customer Voice Synthesis but voice data is unavailable/thin; no usable synthesis. | `evidence/AI-011.png` |
| AI-014 | Command Centre Agents | FAIL | Command Centre Agents is populated, but Bluebird-scoped view exposes the other-tenant member Otto Othertenant; wrong-tenant leak. Prepared work includes 0% occupancy cards and 7 open agent items; no new findingId is shown. | `evidence/AI-014.png` |
| AI-015 | Command Centre Tasks | BLOCKED | Command Centre Tasks is reachable but has no usable tenant-scoped task outcome; data-gated/empty. | `evidence/AI-015.png` |
| AI-019 | Morning Dispatch | SKIP | Morning Dispatch viewer/deep route is a broken-list retest; landing/admin page only was captured per instruction. | `evidence/AI-019.png` |
| AI-022 | What We've Learned | BLOCKED | What We've Learned is reachable but has no completed lessons/content; waiting on learning evidence. | `evidence/AI-022.png` |
| AI-026 | Intelligence Centre | BLOCKED | Intelligence Centre is reachable but findings/data are unavailable; no populated intelligence result. | `evidence/AI-026.png` |
| AI-027 | Intelligence Impact | BLOCKED | Intelligence Impact is reachable but empty/data-gated; no usable impact measurement. | `evidence/AI-027.png` |
| AI-028 | Decision Engine | BLOCKED | Decision Engine is reachable and honestly reports no active intelligence items; no populated finding-backed decision. | `evidence/AI-028.png` |
| AI-030 | Manager Intelligence | BLOCKED | Manager Intelligence is reachable but thin/data-gated; no usable manager intelligence. | `evidence/AI-030.png` |
| AI-031 | My Actions | BLOCKED | My Actions is reachable but empty/data-gated; no usable action content. | `evidence/AI-031.png` |
| AI-032 | Recommendation Tracker | BLOCKED | Recommendation Tracker is reachable but has no finding-backed recommendations; waiting on data. | `evidence/AI-032.png` |
| AI-033 | Action Effectiveness | BLOCKED | Action Effectiveness is reachable but empty/data-gated; no measured effectiveness result. | `evidence/AI-033.png` |
| AI-039 | Studio Intelligence | BLOCKED | Studio Intelligence Pulse is live for Bluebird but state is “Insufficient data” with no score; finding/data-gated rather than a measured Pulse result. | `evidence/AI-039.png` |
| AI-040 | Org Intelligence | BLOCKED | Org Intelligence is reachable but empty/thin; no usable tenant-scoped intelligence. | `evidence/AI-040.png` |
| AI-041 | Workforce Intelligence | BLOCKED | Workforce Intelligence is reachable but empty/thin; no usable tenant-scoped intelligence. | `evidence/AI-041.png` |
| AI-044 | Monthly Intelligence Review | BLOCKED | September 2026 brief is marked Ready to review/generated, but executive summary is temporarily unavailable; no usable brief content. | `evidence/AI-044.png` |
| AI-046 | Daily Focus | BLOCKED | Daily Focus is reachable but empty/thin; no usable tenant-scoped focus output. | `evidence/AI-046.png` |
| AI-051 | AI Audience Intelligence | BLOCKED | AI Audience Intelligence is reachable but empty/thin; no usable tenant-scoped audience result. | `evidence/AI-051.png` |
| AI-055 | Communications Hub | BLOCKED | Communications Hub is reachable but empty/data-gated; no usable communications intelligence. | `evidence/AI-055.png` |
| AI-071 | AI Class Recommender | SKIP | Target has no route in TARGETS.json; missing/broken-list. | `evidence/AI-071.png` |
| AI-072 | AI Progress Reports | SKIP | Target has no route in TARGETS.json; missing/broken-list. | `evidence/AI-072.png` |
| AI-074 | Pre-Class Briefings | SKIP | Target has no route in TARGETS.json and the attempted pre-class-briefings page reports “This admin page is unavailable”. | `evidence/AI-074.png` |
| AI-076 | AI Recovery Orchestrator | BLOCKED | Recovery page is reachable and honest, but shows no recovery bookings for the day; no usable AI recovery output. | `evidence/AI-076.png` |

## Rollup

- PASS: **0**
- FAIL: **1**
- BLOCKED: **19**
- SKIP: **4**
- Measured PASS rate: **0/24 = 0.0%**
- Strand: **0.0%** (half-up; `round(100*PASS/24)`)

## Prior-PASS re-checks

- **AI-014:** **FAIL** — populated Command Centre Agents view exposed `Otto Othertenant` in Bluebird's scoped view (wrong-tenant leak). No new finding IDs were claimed; Observe workIds 52/41/35/25 and 32/30/24 were not visible. Visible operational cards included 0% occupancy and 7 open agent items.
- **AI-039:** **BLOCKED** — live Studio Pulse state is **Insufficient data** with no score.
- **AI-044:** **BLOCKED** — September 2026 brief is marked Ready to review/generated, but executive summary is temporarily unavailable.

## Pointers

- Per-target screenshots: `evidence/<ID>.png`
- Walk JSONL: `walk-results.jsonl`
- Disagreement ledger: `DISAGREEMENT-LEDGER.md`
- Observe lineage: `../LINEAGE.md`
