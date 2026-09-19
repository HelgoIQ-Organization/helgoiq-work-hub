# PARTIAL split — d5b7d47 Bluebird (`c=150002`)

## Classification key

- **A** — arrived in the intended inbox/recipient, but the matching HelgoIQ history row is missing.
- **B** — never arrived in the intended inbox/recipient, with a readable inbox checked.
- **C** — unknown; exact reason is recorded below.

## Re-census split

### 1. Member cancel — C

Member A was opened and Communications > History showed 3 booking-confirmation rows only; no cancellation row. The fixture already carries cancellation/no-active-membership state, so an independent second cancellation could not be exercised without changing the fixture. Agentmail MCP was unavailable, so recipient arrival could not be checked. This is **C**, not B: there is no readable recipient absence measurement.

### 2. Cover swap — C

Slow Flow on Fri 18 Sep 2026 at 12:00 was opened. Confirm Teacher Swap was submitted with substitution and substitution-pay-rate switches on; the timetable returned to Covered. No matching notification/history row was visible. Agentmail MCP was unavailable, so the relevant teacher/member recipient inboxes were not measurable. This is **C**, not B.

### 3. Journey — C

The MKT-M1 Two-Step Test Journey was run to `helgoiq-bb-admin-2@agentmail.to`. The runner measured 2 steps: tag step passed/verified; in-app notification failed. Its banner said test email/SMS would target Admin2. Agentmail MCP was unavailable, so Admin2 arrival was not measurable. This is **C**, not B.

### 4. Segment Send Test — C

Campaign `CENSUS MKT Tag Send Sep3` was sent with Send Test to `helgoiq-comms-proof@agentmail.to`; the UI displayed “Test email sent!”. Agentmail MCP was unavailable, so the recreated proof inbox could not be queried for the message. UI toast is not inbox proof. This is **C**, not A or B.

### 5. Manager newsletter Send Test — C

Draft `CENSUS37-CAMP-Sep15` was sent with Send Test to `helgoiq-comms-proof@agentmail.to`; the UI displayed “Test email sent!”. Agentmail MCP was unavailable, so the recreated proof inbox could not be queried. This is **C**, not A or B.

## Rollup

| Partial | Class | Why |
|---|---:|---|
| Member cancel | C | Existing cancellation state prevented a fresh independent action; no MCP arrival check. |
| Cover swap | C | Swap was confirmed but no UI history row; no MCP recipient check. |
| Journey | C | Runner had 1 pass/1 fail and targeted Admin2; no MCP arrival check. |
| Segment Send Test | C | Send-test toast only; no MCP proof-inbox query. |
| Manager newsletter | C | Send-test toast only; no MCP proof-inbox query. |

**Measured truth is pending the required Agentmail MCP query.** Before the proof inbox existed, B was unknowable for the campaign checks; after recreation, this run still could not perform the MCP measurement in the available tool surface. No PASS is invented.
