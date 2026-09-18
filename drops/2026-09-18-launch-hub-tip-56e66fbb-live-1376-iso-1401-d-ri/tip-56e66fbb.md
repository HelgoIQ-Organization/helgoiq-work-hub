# Launch Hub tip 56e66fbb live

**When:** 2026-09-18 ~18:40 Europe/Athens  
**Trigger:** staging CI passed → live `/api/version` moved

| | |
|---|---|
| Previous tip | `205d5bb897fa84c76f2af92b2cad16b568f1cca2` |
| New tip | `56e66fbbc4eca8149a8f7e115d72abfb8d58a02d` |
| Headline | **70%** (held — no new Measured retest) |

## On this tip

1. **#1376** — Fix ISO-18 and ISO-29 tenant chooser leaks  
2. **#1401** — Command Centre: scoped two-studio ledger truth for D-RI-01  

## Honest strand read

- Isolation stays **Estimate 86%** until Bluebird (150002) ↔ Refrm (150001) retest PASSes (Bot Commander closing gate).
- Command Centre Measured bank still tip 205d5bb8; **D-RI-01 FAIL held** until retest on #1401.
- Dataset 80 / AI-24 25 / Comms 42 / CC 87 held.
- **#1377** MEM-F01 still OPEN (not on tip).

## Your Moves

1. Retest ISO-18/29 on tip 56e66fbb — close only on PASS.  
2. Retest D-RI-01 on tip 56e66fbb — do not invent PASS.  
3. Prefer not to need `import.rollbackBatch`.

No credentials in this note.
