# Comms PARTIALs retry — tip `b87f71f3ca13261731b4e6237195d5cee655db06`

| Field | Value |
|---|---|
| **Overall** | **3 PARTIAL (all B = never arrived)** |
| Tip expected | `b87f71f3ca13261731b4e6237195d5cee655db06` |
| Tip final `/api/version` | `b87f71f3ca13261731b4e6237195d5cee655db06` (**match**) |
| Staging | https://lobster-app-662c7.ondigitalocean.app |
| Tenant | Bluebird only `c=150002` |
| Seat | `helgoiq-bb-admin-2@agentmail.to` |
| Teacher pin | `helgoiq-bb-teacher-2@agentmail.to` |
| Proof inbox | `helgoiq-comms-proof@agentmail.to` |
| Subject tag | `[TEST] EVE80-COMMS-<rand>` |
| Stripe | TEST only |
| Method | Playwright CDP (dedicated :98 Chrome port 9344 after shared 9320 wedged) |
| Finished | 2026-09-19 19:31 EEST (UTC+3) |
| GitHub | none |

## Per-check

| Check | Verdict | A/B/C | Evidence |
|---|---|---|---|
| Journey | **PARTIAL** | **B — never arrived** | Automation Journeys run attempted; Admin2 + proof Agentmail MCP readable; no EVE80/[TEST] product mail tonight |
| Member cancel | **PARTIAL** | **B — never arrived** | Fresh cancel path on BB Join Pay Proof (Paused→Cancel→**Cancelling** on Stripe TEST). Join-pay + proof inboxes: no cancel mail after action |
| Cover swap | **PARTIAL** | **B — never arrived** | Fri Slow Flow cover/swap Confirm exercised; teacher-2 pin + proof: no cover mail |

## PARTIAL split

- **A** (arrived, missing HelgoIQ history): **0**
- **B** (never arrived, readable inbox checked): **3**
- **C** (unknown / fixture / recipient): **0**

## Agentmail MCP (subjects/ids only)

| Inbox | Tonight observation |
|---|---|
| `helgoiq-bb-admin-2@agentmail.to` | Clerk device-sign-in ~16:09Z; no journey product mail |
| `helgoiq-comms-proof@agentmail.to` | Prior CENSUS37 ~05:26Z only; no EVE80 |
| `helgoiq-bb-teacher-2@agentmail.to` | Clerk OTPs earlier; no cover/substitution product mail |
| `helgoiq-bb-join-pay@agentmail.to` | Last product mail Payment Confirmed 2026-09-15; no cancel mail after Cancelling UI |

## Screenshots / network

Under `screenshots/` (r3–r7 series) and `network/` (journey/cancel/cover JSON). State: `evidence/run-state.json`, `evidence/final-rollup.json`.

## Rollup

**0 PASS / 3 PARTIAL / 0 FAIL / 0 BLOCKED** — all three PARTIAL classified **B**.

Parent owns headline + any #1180. This executor did **not** post GitHub.
