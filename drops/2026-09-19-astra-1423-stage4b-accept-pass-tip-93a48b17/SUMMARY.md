# HelgoIQ PR #1423 — Astra stage4b saved contracts acceptance

- **tipSha / releaseSha:** `93a48b176a31d22d90b9701cf3d4d9026541dd11` (matched `/api/version`)
- **Staging:** `https://lobster-app-662c7.ondigitalocean.app`
- **Tenant:** Bluebird Pilates, company `150002` only
- **Seat:** `helgoiq-bb-owner@agentmail.to`
- **Verdict:** **PASS** (Measured)

## Measured

A normal on-demand **Strategic Intelligence Brief** was generated once from Executive Briefing. The resulting report was dated `2026-09-01` and displayed **Contracts marked active: 0**. Its Active contracts section explicitly says the count is current company records captured when the report was generated and that these are contract rows, not people/activity.

Opening the report's saved Active contract data showed:

- Contracts marked active: `0`
- Scope: All locations
- Observation started/completed: `19/09/2026 03:52:04`
- Explicit guard text: “No contracts were marked active in this observation.”
- No contributor rows were shown because the saved count was zero.

Before generation, the briefing page had no visible live active-contract count/envelope. The pre-existing Daily report's Active contract data correctly returned unavailable (“It was not captured when this report was generated”), rather than inventing zero or merging current data. No Refrm tenant was opened or mutated.

## Contract checks

| Check | Result | Evidence |
|---|---|---|
| Deterministic saved count | PASS | Report and saved panel both show `Contracts marked active: 0`. |
| Saved-data-only panel | PASS | Panel states current company records at report generation and gives observation scope/times; no live contributor merge. |
| Mismatch/unavailable guard | PASS | Older 15 Sep report explicitly says saved active contract data unavailable because it was not captured. |
| Count/contributor consistency | PASS | Count is zero and no contributors are displayed. |
| Existing-report immutability | PASS | Older report remained unavailable; it did not acquire current report's count/data. |
| Back/selection behavior | PASS | “Back to report” from the saved contract panel returned the same generated report; navigating away to Bluebird Home and returning preserved the generated card and its saved count at the briefing's prior lower scroll section. |

## Blockers

None. No writes were made outside the single permitted Bluebird report generation; no policies/devices/billing/Refrm actions were touched.

## Screenshots

- `version-stamp.png` — `/api/version` stamp with matching `buildToken`/`releaseSha`.
- `briefing-initial.png` — initial Bluebird Executive Briefing state.
- `older-report-unavailable.png` — older Daily report unavailable guard.
- `generated-report-active-contracts.png` — generated report with `Contracts marked active: 0`.
- `generated-report-saved-panel.png` — saved Active contract data panel and observation details.
