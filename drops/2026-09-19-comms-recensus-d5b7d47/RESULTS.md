# HelgoIQ Comms re-census — Bluebird (`c=150002`)

- Release tip requested: `d5b7d47`
- `/api/version`: `releaseSha=d5b7d47de4cd96afbb95ec3a14d53e7be40bc463` — **confirmed**
- Window: 2026-09-19 08:21 UTC+3 (fixture UI shows Fri 18 Sep for the tested class)
- Scope: Bluebird only; no live campaign send. Campaigns used Send Test only.
- Proof target for both campaign checks: `helgoiq-comms-proof@agentmail.to`

## Results

| Check | Result | A/B/C | Measured evidence / exact limitation |
|---|---|---|---|
| Member cancel | PARTIAL | **C — unknown** | Member A profile was inspected. Communications > History still contains 3 booking-confirmation rows and no cancellation row. A fresh independent cancellation could not be triggered because the fixture already has the cancellation state / no active membership to cancel. No arrival determination was possible because Agentmail MCP was not available in this execution. |
| Cover swap | PARTIAL | **C — unknown** | Reopened Slow Flow (Fri 18 Sep 2026 12:00), opened Confirm Teacher Swap, and confirmed BB Teacher with Mark as Substitution and Apply Substitution Pay Rate enabled. Timetable returned to Covered. No notification/history row was exposed in the UI, and Agentmail MCP was not available to determine recipient arrival. |
| Journey | PARTIAL | **C — unknown** | Re-ran “MKT-M1 Two-Step Test Journey Sep3” to `helgoiq-bb-admin-2@agentmail.to`. Runner reported 2 total, 1 passed, 1 failed: tag step verified; in-app notification failed. The runner stated email/SMS would go to Admin2. Agentmail MCP was not available for an inbox arrival check. |
| Consent | **PASS** | — | Member B Communications > Preferences loaded with saved preference switches and Save Preferences disabled (no pending change). Consent remains saved; no campaign or live send involved. |
| Segment Send Test | PARTIAL | **C — unknown** | Re-ran campaign `CENSUS MKT Tag Send Sep3` Send Test with the exact proof address. UI showed “Test email sent!”. Agentmail MCP was not available, so arrival in the recreated inbox could not be measured and PASS is not claimed. |
| Manager newsletter Send Test | PARTIAL | **C — unknown** | Re-ran draft `CENSUS37-CAMP-Sep15` Send Test with the exact proof address. UI showed “Test email sent!”. Agentmail MCP was not available, so arrival in the recreated inbox could not be measured and PASS is not claimed. |

## Rollup

- **1 PASS, 5 PARTIAL, 0 FAIL, 0 BLOCKED**
- Partial split: **0×A, 0×B, 5×C**.
- A/B could not be honestly assigned for this run because the Agentmail MCP arrival check was unavailable to this execution. The recreated proof address was entered as the target for both required campaign Send Tests, but UI success is not delivery proof.
- No mass/live campaign send was performed.

## Important limitation

The task-required Agentmail MCP check was not exposed in the available execution tools. Therefore this report deliberately records **C — unknown**, rather than inventing “never arrived” or PASS. Parent should run `get_inbox`/`list_messages` for the proof address and the Admin2 recipient to convert the campaign/journey C results to measured A or B.
