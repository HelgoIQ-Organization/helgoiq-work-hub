# ISO-29 tenancy isolation — PARTIAL Measured on tip 232659cf

**When:** 11 Sep 2026 ~00:05 Europe/London  
**Live tip:** `232659cf05d22e5de920ee547925b37581cfb6d4` (start and finish — confirmed via `/api/version`)  
**Tenants:** Bluebird `c=150002` · Refrm `c=150001` (read-only)  
**Headline impact:** Launch Hub **~61%** (was 65% after M1 Wave1; morning 52%) — isolation moves from Estimate 86% (prior 25/29 claim) to **Measured partial ~41%**

## Do NOT claim prior complete sweep

A previous drop claimed **25 PASS / 4 FAIL**. **This tip did not re-walk the full bank.** Current honest counts only:

| Result | Count | Notes |
|---|---|---|
| **PASS** | **12** | ISO-15,16,17,19,21,22,23,24,25,26,28 + FC-016 |
| **FAIL** | **4** | **Same four leaks:** ISO-18, ISO-20, ISO-27, ISO-29 |
| **NOT_RUN** | **16** | ISO-01…14 + Weymouth #1245 + Luton #1242 (and remaining extras) |

**Incomplete.** Do not treat this as 25/4 or as a green privacy bank.

## Same four fails (verbatim)

1. **ISO-18** — Refrm client home / account chooser exposes Bluebird Pilates  
2. **ISO-20** — Refrm Cohorts repeats Bluebird retention metrics/periods  
3. **ISO-27** — Refrm Staff Availability lists Bluebird roster  
4. **ISO-29** — Refrm Command Centre `?c=` shows Choose-a-studio with only Bluebird Pilates  

## Unchanged tonight

| Bank | Result | Basis |
|---|---|---|
| Six-step smoke | **6/6 PASS** | Measured |
| Cluster A | **20/24 PASS** (same 4 fails) | Measured |
| M1 Wave1 | **partial** (freeze PASS; unfreeze FAIL; cancel+reverse PASS) | Measured |

## Hard rules (unchanged)

- **#1240 is LIVE** on tip, but **Declan has NOT cleared the rollback ban**.
- Never instruct `import.rollbackBatch` / never roll back until Declan clears.
- Report-only ISO run — no Stripe, publish, Seed Demo, Feature Controls toggles, or CSV import/rollback.

## Evidence (box)

`/workspace/helgoiq-overnight-2026-09-10-11/04-iso29/` (`SUMMARY.md`, `MATRIX.csv`, `evidence/`)

No credentials in this drop.
