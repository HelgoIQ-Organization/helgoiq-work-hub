# Overnight breakfast — tip 232659cf (final)

**When:** 11 Sep 2026 ~01:30 Europe/London  
**Live tip:** `232659cf05d22e5de920ee547925b37581cfb6d4` (confirmed on `/api/version`)  
**Headline:** Launch Hub **~65%** Measured (morning was 52% on `6cb5d8d9`)

## Overnight roll-up

| Strand | Result |
|---|---|
| Smoke | **6/6 PASS** Measured (membership reverse first proven) |
| Cluster A | **20/24** Measured — same 4 fails |
| M1 Wave1 | Partial Measured — freeze/cancel/reverse PASS; unfreeze FAIL (provider) |
| ISO-29 | **26 PASS / 4 FAIL / 2 NOT_RUN** Measured (same leaks 18/20/27/29) |
| Ambient | Measured evidence — Pulse OK; Dispatch viewer FAIL; Twin Cancelling agrees |
| AI-85 | **48/5/23/8/1** Measured — rescore no movement |
| Dataset canary | **FAIL** — `Missing companyId` on `batchImport.upload` (403); **0** members; **no rollback** |

## Hard rules (unchanged)

- **Rollback ban ACTIVE** — #1240 is LIVE, but Declan has **NOT** cleared it.
- Never instruct `import.rollbackBatch` / never roll back until Declan clears.
- Keep all Measured strands as Measured; do not invent scores.

Full one-pager: `BREAKFAST.md` in this drop. Overnight pack: `/workspace/helgoiq-overnight-2026-09-10-11/`.

No credentials in this drop.
