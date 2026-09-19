# PARTIAL split — MEASURED (parent Agentmail MCP) — tip d5b7d47

Browser re-census left 5×C because Agentmail MCP was not on the computerUse tool surface. Parent queried Agentmail directly 2026-09-19 ~05:30Z.

## Proof inbox `helgoiq-comms-proof@agentmail.to` (3 messages)

| Time (UTC) | Subject | Class |
|---|---|---|
| 05:26:09 | `[TEST] CENSUS MKT Sep3 - manual tag test (QA, ignore)` | Segment Send Test **arrived** |
| 05:26:36 | `[TEST] CENSUS37-CAMP-Sep15` | Manager newsletter **arrived** |
| 05:26:47 | `[TEST] CENSUS37-CAMP-Sep15` | Manager newsletter **arrived** (2nd) |

## Admin2 `helgoiq-bb-admin-2@agentmail.to`

No HelgoIQ product/journey email in the re-census window (≈05:21Z onward). Latest product mail is older (booking/device). Journey runner claimed email/SMS to Admin2; **no matching arrival** in readable inbox → Journey email **B**.

## Updated split

| Check | Was (browser) | Measured | Notes |
|---|---|---|---|
| Consent | PASS | PASS | unchanged |
| Segment Send Test | C | **PASS** | UI toast + proof inbox arrival (05:26:09Z) |
| Manager newsletter | C | **PASS** | UI toast + proof inbox arrival (05:26:36Z / 05:26:47Z) |
| Journey | C | **PARTIAL B** | in-app step failed in runner; email never in Admin2 inbox |
| Member cancel | C | **C** | fixture already cancelled; no fresh action; no MCP cancel mail expected |
| Cover swap | C | **C** | swap confirmed; no UI history; recipient mailbox not identified |

## Rollup (Measured)

- **3 PASS** (Consent, Segment Send Test, Manager newsletter)
- **1 PARTIAL-B** (Journey — never arrived at Admin2)
- **2 PARTIAL-C** (cancel, cover — fixture / recipient unknown)
- **0 FAIL**

Hub note: Comms was previously held at 42% with “never arrived unknowable” while proof inbox missing. Proof inbox recreated; Segment+Manager delivery now Measured PASS. Journey still B. Cancel/cover still C.
