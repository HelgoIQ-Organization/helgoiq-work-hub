# OBSERVE scan2 — SUMMARY

- **Tip:** `b87f71f3ca13261731b4e6237195d5cee655db06` (live `/api/version` buildToken/releaseSha)
- **Seat:** `helgoiq-pa@agentmail.to` (PA session; Clerk Bearer + `x-active-company: 150002`)
- **Tenant:** Bluebird only `companyId=150002`
- **Observed:** 2026-09-19 ~19:20 EEST
- **Verdict:** **SCAN2_FIRED** (≥1 ordinary scheduler scan after scan1; actually T06 and T12 both completed)

## Agent state (unchanged observe_pilot)

| Agent | mode | rolloutStage | health | lastSuccessAt (UTC) | proactiveReviews |
|---|---|---|---|---|---:|
| occupancy | observe | observe_pilot | healthy | 2026-09-19T14:22:43Z | 43 |
| retention | observe | observe_pilot | healthy | 2026-09-19T14:22:43Z | 43 |

No `requestRun` / manual trigger / global worker used.

## Scan1 (known) — Bluebird Central `locationId=150033` · bucket `2026-09-19T00`

| Agent | runId | completedAt (UTC) | idempotencyKey | workId | summary | lineage |
|---|---:|---|---|---|---|---|
| occupancy | **802** | 2026-09-19T01:31:17Z | `cc-agent-schedule:150002:occupancy:150033:2026-09-19T00` | none (no new work) | No new actionable exception found | appointments, appointment_types, appointment_staff_eligibility, staff_appointment_availability, studio_areas, locations |
| retention | **800** | 2026-09-19T01:31:17Z | `cc-agent-schedule:150002:retention:150033:2026-09-19T00` | none (no new work) | No new actionable exception found | churn_predictions, member_profiles |

## Scan2 — same Central scope · bucket `2026-09-19T06` (≥1h after scan1)

| Agent | runId | completedAt (UTC) | idempotencyKey | workId | summary | lineage |
|---|---:|---|---|---|---|---|
| occupancy | **810** | 2026-09-19T06:23:31Z | `cc-agent-schedule:150002:occupancy:150033:2026-09-19T06` | none | No new actionable exception found | same occupancy lineage |
| retention | **808** | 2026-09-19T06:23:31Z | `cc-agent-schedule:150002:retention:150033:2026-09-19T06` | none | No new actionable exception found | same retention lineage |

Δ scan1→scan2: **~4h 52m** (01:31Z → 06:23Z). Ordinary six-hour UTC bucket schedule.

## Later ordinary scan (T12) — latest at observation time

| Agent | runId | completedAt (UTC) | idempotencyKey | summary |
|---|---:|---|---|---|
| occupancy | **818** | 2026-09-19T14:22:43Z | `...:occupancy:150033:2026-09-19T12` | No new actionable exception found |
| retention | **816** | 2026-09-19T14:22:43Z | `...:retention:150033:2026-09-19T12` | No new actionable exception found |

## Lineage findings visible (sibling location `150005`, same schedule ticks)

These are the actionable findings that re-surface each bucket (work deduped onto standing ready work):

| runId | agent | bucket | natural identity / finding | source lineage |
|---:|---|---|---|---|
| 801 / 809 / **817** | occupancy | T00/T06/T12 | identity `150002:occupancy:class_schedule:1673:occupancy` — *Class may need promotion — Slow Flow — 21 Sept 2026, 14:00* | class_schedules, class_types, bookings, waitlist, locations, system_events |
| 799 / 807 / **815** | retention | T00/T06/T12 | Otto Othertenant retention review (91% churn risk) | churn_predictions, member_profiles (+ member subject) |

Standing **ready** work visible on Command Centre Agents dashboard (examples): workIds **52** (run 785, Slow Flow promotion), **41**, **35**, **25** (occupancy); **32**, **30**, **24** (retention, incl. Otto). EvidenceJSON carries the same identity.key + lineage arrays — visible to AI / Command Centre surfaces.

## Gate for AI-24

- ≥2 ordinary scheduled scans: **YES** (T00 + T06; T12 bonus)
- Lineage present on runs: **YES** (`observationJson.evidence.lineage`)
- Findings / natural identities visible to AI surfaces: **YES** (ready work queue + identity keys)
- → AI-24 re-score protocol **UNBLOCKED** (do not invent PASS; measure)

## Evidence

- `evidence/getDashboard.json`, `getDashboard-raw.json`
- `evidence/run-{800,802,808,810,815,816,817,818}.json`
- `evidence/scan-extract.json`
- `evidence/auth-me-bearer.json`, screenshots under `evidence/`

## Notes

- Prefer not to need `import.rollbackBatch`. No GitHub writes.
- Central 150033 scans remain “no new exception”; findings keep firing on 150005 and remain deduped into ready work.
