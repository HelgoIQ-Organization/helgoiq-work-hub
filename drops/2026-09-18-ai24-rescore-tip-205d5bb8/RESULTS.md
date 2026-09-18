# AI-24 re-score — Bluebird live 12-month data

**Tip SHA:** `205d5bb897fa84c76f2af92b2cad16b568f1cca2` (live `/api/version` buildToken and releaseSha both start `205d5bb8`)
**Tenant:** Bluebird `c=150002` only
**Seat:** `helgoiq-bb-admin-2@agentmail.to`
**Run date:** 2026-09-18 (UTC+3)
**Data gate:** 12m seed reported live: 177 members; 165 carry `SEED:12M-2026-09`.

This is the 24-item post-dataset AI queue reused from the prior AI-24 work. Verdicts below are this run's observations only; the prior 11 PASS / 13 BLOCKED result was not carried forward. No Reformer writes, Seed Demo, or `import.rollbackBatch` were used.

## Score table

| ID | Surface / check | Verdict | One-line measured reason |
|---|---|---|---|
| AI-007 | AI Governance Centre | BLOCKED | Page loaded, but it reports no activity and no queue activity; no governed action/approval exists to settle usefulness. |
| AI-011 | Customer Voice Synthesis | BLOCKED | Voice profile/examples remain unavailable; no tenant voice output was measured. |
| AI-014 | Command Centre Agents | PASS | Bluebird queue is populated with 6 agent-work findings and reviewable prepared work; no silent mutation observed. |
| AI-015 | Command Centre Tasks | BLOCKED | Tasks surface has no tenant task data to exercise lifecycle or filtering. |
| AI-019 | Morning Dispatch | SKIP | Admin health page is reachable and says “Not yet run today”; Dispatch viewer/content comparison remains on the broken-list. |
| AI-022 | What We've Learned | BLOCKED | Page is healthy but shows 0 active lessons/outcomes; no measured learning cycle is present. |
| AI-026 | Intelligence Centre | BLOCKED | No open intelligence opportunities were present for Bluebird. |
| AI-027 | Intelligence Impact Centre | BLOCKED | Impact metrics remain empty/£0/0; no impact event exists to verify attribution. |
| AI-028 | Decision Engine | BLOCKED | Studio Intelligence reports no active intelligence items; no priority score/recalculation result to judge. |
| AI-030 | Manager Intelligence | BLOCKED | No manager hierarchy/manager attention data is present for Bluebird. |
| AI-031 | My Actions | BLOCKED | No assigned intelligence actions are present. |
| AI-032 | Recommendation Tracker | BLOCKED | No generated recommendations are tracked. |
| AI-033 | Action Effectiveness Library | BLOCKED | No recorded action outcomes/effectiveness evidence; no Seed Demo used. |
| AI-039 | Studio Intelligence | PASS | Hub is reachable and honest: Pulse is measured at 30/100 Critical, Decision Engine is clear, and zero-lessons state is explicit. |
| AI-040 | Org Intelligence | BLOCKED | Organisational recognition/brief data is still building; no settled Bluebird brief was available. |
| AI-041 | Workforce Intelligence | BLOCKED | Staff roster is present, but no generated workforce review was available. |
| AI-044 | Monthly Intelligence Review | PASS | September brief exists and is “Ready to review”; executive summary is explicitly unavailable and was not invented. |
| AI-046 | Daily Focus | BLOCKED | No active focus items remain after calculation; no populated priority set to validate. |
| AI-051 | AI Audience Intelligence | BLOCKED | Audience page remains at zero generated/total segments after the non-mutating suggestion check. |
| AI-055 | Communications | BLOCKED | Communications Hub shell loads, but no independent AI draft suggestion was verified; no send was attempted. |
| AI-071 | AI Class Recommender | SKIP | No reachable/inventory-backed Bluebird route was available for this check. |
| AI-072 | AI Progress Reports | SKIP | Claimed admin page is unavailable; no Progress Reports surface was exposed. |
| AI-074 | Pre-Class Briefings | SKIP | Claimed admin page is unavailable; no Pre-Class Briefing surface was exposed. |
| AI-076 | AI Recovery Orchestrator | BLOCKED | Recovery Hub is reachable, but no distinct Orchestrator surface or Bluebird recovery booking set was available. |

## Rollup

| Verdict | Count |
|---|---:|
| PASS | 3 |
| FAIL | 0 |
| BLOCKED | 17 |
| SKIP | 4 |
| **Total** | **24** |

**Measured PASS rate:** 3/24. No PASS was inferred from an empty state; PASS means the surface produced a usable, tenant-scoped result or an explicitly honest, complete state under its check.

## Evidence pointers

- `evidence/observations.json` — live tip, API stamp, and measured Pulse/Dispatch/Twin observations.
- Command Centre cross-surface source: `/workspace/helgoiq-full-programme-2026-09-17/cc/205d5bb8/cluster-bf/answers.json` and `cross-surface/`.
- Admin surface observations were captured from Bluebird-scoped routes with `?c=150002`.
