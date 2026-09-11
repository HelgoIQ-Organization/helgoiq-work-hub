# Declan blockers vs engineering — morning 11 Sep 2026

**Tip:** `232659cf05d22e5de920ee547925b37581cfb6d4` (confirmed live)  
**Headline:** ~65% (unchanged Measured overnight board)  
**Rollback ban:** ACTIVE until Declan clears (#1240 live ≠ cleared)

## What changed on the hub

Your Moves is now **Declan-only**. Product/code fixes sit in a separate **Engineering queue**. Overnight Measured facts are kept as-is (no invented scores).

## Declan blockers (only you can clear)

1. **Say yes to safe rollback** — ban still on; unlocks `import.rollbackBatch` after a bad import.
2. **Add five Resend/Agentmail secrets** — unblocks #1213 / automated communications.
3. **Platform Admin: Feature Controls + Event Bus** — ask before toggles; unlocks AI-85 UNCERTAIN settle.
4. **Approve or reject Clusters B–F banks**.
5. **Soft:** decide whether BB Smoke Sep8 stays paused / needs a fix card / Bot retries after payment fix.

## Engineering queue (not waiting on Declan)

1. Fix `batchImport.upload` Missing companyId (403) — blocks 12m dataset.
2. Fix ISO-18, 20, 27, 29 privacy leaks.
3. Fix Morning Dispatch viewer (Something went wrong).
4. Fix Admin2 Resume / unfreeze payment-provider path (Smoke paused).
5. Fix Cluster A MEM-X01, ACS-F01, TAG-C01, TAG-A01.
6. Optional: Weymouth/Luton fixture coverage (NOT_RUN).

## Overnight Measured facts (kept)

- Smoke 6/6  
- Cluster A 20/24  
- M1 Wave1 partial  
- ISO 26 PASS / 4 FAIL / 2 NOT_RUN  
- Ambient evidence (Pulse OK; Dispatch viewer FAIL)  
- AI-85 48/5/23/8/1  
- Dataset canary FAIL (Missing companyId 403; 0 members; no rollback)
