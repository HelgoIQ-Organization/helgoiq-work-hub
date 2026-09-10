# Launch Hub tip move — 232659cf live (#1240)

**When:** 10 Sep 2026 ~22:28 Europe/London  
**Trigger:** Live staging tip left 99e17af7; `/api/version` now 232659cf  
**Live tip:** `232659cf05d22e5de920ee547925b37581cfb6d4` (was `99e17af7`)  
**Headline:** **64%** (estimate; was 62% on 99e17af7; morning 52%)

## What newly landed on DigitalOcean
- **#1240** SAFE rollback (this tip *is* the merge commit)
- **#1245** Weymouth door-tool (in the same tip range)

Afternoon + evening packs from tip 99e17af7 remain on the studio.

## Overnight
Full retest programme just started on this tip — **smoke in progress**. All Launch Hub strand scores are **Estimate** until those retests land. Do not invent measured wins.

## Hard rules (unchanged standing)
- **#1240 is LIVE** on `/api/version`, but **Declan has NOT cleared the rollback ban**.
- Never instruct `import.rollbackBatch` / never roll back until Declan clears.
- Dataset: overnight may **TRY** a normal import only if Select/import works — still **no rollback**.

## Your Moves (top)
1. Let overnight six-step smoke finish on tip 232659cf
2. TRY 12-month import only if Select works — **no rollback** until Declan clears
3. Add five Resend/Agentmail secrets for #1213

No credentials in this drop. Bluebird-only notes.
