# Launch Hub tip 41451e93 live — #1444 Pulse forecast; #1429 undeployed

**When:** Saturday 19 Sep 2026 evening (Europe/Athens)

**Live tip:** `41451e93` — fix(pulse): forecast only measured history on actual dates (#1444)

**Previous tip:** `b87f71f3` (#1425 isolation)

**Headline:** **69%** (morning baseline 73%; delta −4). Strand percents held — tip move alone does not invent Measured change. Corrected `nowHeadlinePercent` from a stale 72 to 69.

## What went live
- **#1444** Pulse forecast now only uses measured history on actual dates.

## What did NOT go live
- Wake event was **#1429** CONN-DISCONNECT-NOOP merge (`e82ebc8d…`), but that commit is **1 ahead of the live tip** — still undeployed on DigitalOcean. Do not claim #1429 live.

## Strand holds (no invent)
Dataset 80 · CC 87 · Isolation 95 (Measured on #1425 ancestry) · AI-24 0 · Ambient 95 · M1 73 · Smoke 55 FAIL hold (not a merge gate) · Payments 74 · Findings→Fix 100 · Comms 65

## Next
- Feel/Measured retest for **#1444** Pulse forecast on tip 41451e93
- When DO deploys **#1429**, retest disconnect with network log (no UI-only no-op)
- Keep GTM/#1428 Feel open until Measured PASS
- Prefer not to need import.rollbackBatch
