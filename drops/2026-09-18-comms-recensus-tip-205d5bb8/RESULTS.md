# HelgoIQ communications re-census — Bluebird

- Tenant: Bluebird (`c=150002`) only
- Release SHA: `205d5bb897fa84c76f2af92b2cad16b568f1cca2` (confirmed at `/api/version`; starts with requested `205d5bb8`)
- Timestamp: 2026-09-18 12:25 Europe/Athens
- Scope rule: no live/mass campaign sends; campaign checks used Send Test only.

| # | Check | Verdict | Result and limitation | Evidence |
|---|---|---|---|---|
| 1 | Member cancel | **PARTIAL** | Cancellation path was triggered and the UI showed “Membership cancellation scheduled”. The member history view did not show a matching cancellation message/history row, so delivery is not proven. | `evidence/member-cancel-toast.png`, `evidence/member-cancel-history.png` |
| 2 | Cover swap | **PARTIAL** | Teacher cover swap was confirmed in the timetable/UI. No matching notification mail or message-history row was found. | `evidence/cover-swap-confirm.png` |
| 3 | Journey | **PARTIAL** | Journey test ran with 2 results: tag step passed; in-app notification step failed. The run showed email/SMS delivery targeted to the Admin2 seat, not the proof inbox; no independent inbox/history proof was obtained. | `evidence/journey-results.png` |
| 4 | Consent | **PASS** | Member B Communications > Preferences email setting was toggled and saved. On the post-save view the Save control was no longer pending and the setting remained in its saved state. No confirmation toast was visible. | `evidence/consent-saved.png` |
| 5 | Segment Send Test | **PARTIAL** | Send Test to `helgoiq-comms-proof@agentmail.to` completed with a “Test email sent!” toast. Message Logs remained empty, so a matching history row was not proven. No live send was used. | `evidence/segment-send-test-toast.png`, `evidence/message-logs-empty.png` |
| 6 | Newsletter on Manager | **PARTIAL** | Logged in as Manager, opened a draft newsletter, and used Send Test to the proof inbox. “Test email sent!” appeared, but Message Logs remained empty; matching history/inbox proof was not obtained. | `evidence/manager-newsletter-send-test-toast.png`, `evidence/manager-newsletter-history-empty.png` |

## Rollup

1 PASS, 5 PARTIAL, 0 FAIL, 0 BLOCKED, 0 UNTESTED. No Cloudflare Turnstile or NEED_DECLAN block appeared. The cancellation, cover, journey, segment, and Manager newsletter UI actions were exercised, but matching delivery/history proof was absent where noted; no live campaign blast was sent.
