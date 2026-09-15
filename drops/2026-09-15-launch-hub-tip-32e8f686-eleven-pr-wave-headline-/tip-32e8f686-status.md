# Launch Hub tip move — 32e8f686

**When:** 15 Sep 2026 ~09:34 Europe/Athens  
**Staging tip:** `ed71129c` → `32e8f686`  
**Headline:** held **~68%** (no Bluebird Measured invent)

## What landed (same CI wave)

| PR | One line |
|----|----------|
| #1213 | P0 unify automated communication delivery (ledger) |
| #1310 | Bind batch uploads to active company |
| #1307 | Smoke: dismiss purchase overlays |
| #1311 | Stripe: resume billing after scheduled collection pause |
| #1297 | CC: route win-back drafts before cohorts |
| #1322 | CC: registered guidance hand-offs |
| #1338 | CC: F-FC016 from selected-company overview |
| #1326 | Pulse comparison names + restricted-location disclosure |
| #1312 | Astra: open saved Pulse card data in one tap |
| #1320 | Keep Dispatch referral actions on exact briefing |
| #1323 | Archive saved Studio Pulse with executive reports |

## Strand posture

All percents **held** (dataset 52 Measured, CC 65 est, isolation 86 Measured, ai-85 65 est, ambient 95 est, m1 73 Measured, smoke 72 est, payments 72 est, findings-fix 98 est, **comms 15 est** — #1213 code live, Measured/E2E still open).

## Your moves (Bluebird only)

1. Retest #1213 delivery ledger (booking/cancel/reminders/newsletter).  
2. Retest dataset canary after #1310 — **never** `import.rollbackBatch`.  
3. Retest CC/Astra Pulse pack (#1297/#1322/#1338/#1326/#1312/#1320/#1323).  
4. Retest smoke six-step + #1307 overlays; #1311 Stripe resume.

HARD RULE: never instruct `import.rollbackBatch` (#1240).
