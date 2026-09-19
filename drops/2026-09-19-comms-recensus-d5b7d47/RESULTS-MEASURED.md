# HelgoIQ Comms re-census MEASURED — tip d5b7d47 · Bluebird c=150002

- `/api/version` releaseSha `d5b7d47de4cd96afbb95ec3a14d53e7be40bc463` confirmed
- Proof inbox: `helgoiq-comms-proof@agentmail.to` (recreated 2026-09-19)
- Browser pass left 5×C (Agentmail MCP not on computerUse). Parent Agentmail MCP query converted delivery checks.

## Rollup (Measured)

| Check | Result | Split |
|---|---|---|
| Consent | **PASS** | — |
| Segment Send Test | **PASS** | arrived proof 05:26:09Z `[TEST] CENSUS MKT Sep3…` |
| Manager newsletter Send Test | **PASS** | arrived proof 05:26:36Z + 05:26:47Z `[TEST] CENSUS37-CAMP-Sep15` |
| Journey | **PARTIAL** | **B** — Admin2 inbox readable; no product/journey mail in window; runner in-app step failed |
| Member cancel | **PARTIAL** | **C** — fixture already cancelled; no fresh independent cancel |
| Cover swap | **PARTIAL** | **C** — swap applied; no UI history; recipient mailbox not pinned |

**3 PASS · 3 PARTIAL (1B + 2C) · 0 FAIL**

Evidence: `RESULTS.md`, `PARTIAL-SPLIT.md`, `PARTIAL-SPLIT-MEASURED.md`, this file.
