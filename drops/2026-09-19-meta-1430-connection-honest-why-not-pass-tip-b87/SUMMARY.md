# Meta honest-error retest — tip `b87f71f3ca13261731b4e6237195d5cee655db06` (#1430 CONN-META-DEADEND)

| Field | Value |
|---|---|
| **Verdict** | **PASS** |
| Measured | **Clear why-not** (honest; no silent dead-end; no false connected) |
| Tip | `b87f71f3ca13261731b4e6237195d5cee655db06` (matched at start + end) |
| Seat | Admin2 / owner-admin path `helgoiq-bb-admin-2@agentmail.to` |
| Route | `/admin/meta-hub?c=150002&tab=connection` (Meta Hub → Connection) |
| Finished | 2026-09-19 19:31 EEST (UTC+3) |
| GitHub | none |

## What we saw

On Connection tab, **Connect Meta** card shows a yellow honest banner:

> **Facebook sign-in is not switched on for this environment yet.** Nothing was connected, and your studio does not need to do anything. HelgoIQ needs to finish its Meta app setup before studios can connect here.

- No Facebook OAuth popup / handoff (expected while env switch is off)
- No green false-connected state
- No silent spinner dead-end

## Classifier note

An automated pass initially flagged FAIL (false-connected) because the word “connected” appears inside “Nothing was connected”. Human/screenshot review corrected this to **PASS — clear why-not**. Correction recorded in `evidence/run-state.json`.

## Network

`network/clicks.json` — page load + trpc; no successful Meta OAuth begin URL. Screenshots: `01-meta.png`, `02-after-click.png`.

## Rollup

**Meta honest-error: PASS (clear why-not)**
