# ISO-29 COMPLETE Measured — tip 232659cf

- **Staging tip:** `232659cf05d22e5de920ee547925b37581cfb6d4` (confirmed `/api/version` start + finish; unchanged)
- **Bank:** 32 rows (ISO-01…29 + FC-016 + Weymouth-1245 + Luton-1242)
- **Result:** **26 PASS / 4 FAIL / 2 NOT_RUN**
- **Fails (unchanged):** ISO-18, ISO-20, ISO-27, ISO-29
- **NOT_RUN:** Weymouth #1245 and Luton #1242 only (no dedicated fixture/route)
- **Core ISO-01…29:** 25 PASS / 4 FAIL (all 29 walked) → Measured **~86%** (25/29)
- **Prior hub:** PARTIAL 12 PASS / 4 FAIL / 16 NOT_RUN at **61%** overall — superseded by this complete bank
- **Unchanged tonight:** Smoke Measured 6/6 · Cluster A Measured 20/24 · M1 Wave1 partial Measured
- **Rollback ban:** still **ACTIVE** — Declan has NOT cleared; never `import.rollbackBatch` even though #1240 is live

## Artefacts

- Overnight pack: `/workspace/helgoiq-overnight-2026-09-10-11/04-iso29/` (`SUMMARY.md`, `MATRIX.csv`, `evidence/`)
- This drop: `SUMMARY.md`, `MATRIX.csv` (copied)

## Hard honesty

Do not invent Weymouth/Luton PASS. Same four privacy leaks remain FAIL. Completing the bank restores isolation Measured to the prior 25/29-class score; it does **not** clear the architecture debt on ISO-18/20/27/29.
