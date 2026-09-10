# Cluster A — Measured 20/24 on tip 232659cf (no improvement)

**When:** 10 Sep 2026 ~23:10 Europe/London  
**Live tip:** `232659cf05d22e5de920ee547925b37581cfb6d4` (start and end)  
**Tenant:** Bluebird `c=150002` · Command Centre · no writes  
**Headline impact:** Launch Hub **~66%** (was ~68% after smoke; morning 52%) — Cluster A Measured, same score as prior tips

## Result — Measured 20/24 PASS

| Metric | Value |
|---|---|
| PASS | 20 |
| FAIL | 4 |
| UNCERTAIN | 0 |
| UNREACHABLE | 0 |

### Same four fails (no improvement vs prior Cluster A)

| ID | Verdict | Notes |
|---|---|---|
| MEM-X01 | FAIL | Member transfer plan / historic-payment guard / action_confirm missing |
| ACS-F01 | FAIL | Teacher list noise (extra Teacher IDs + duplicated BB Teacher) |
| TAG-C01 | FAIL | No tag “Top Tier Bluebird 8” in selected company |
| TAG-A01 | FAIL | Tag catalog only — no Central-active segment proposal |

### Teacher seat — PASS

- **MGR-10** PASS (owner-only refund draft refused safely)
- **ACS-X01** PASS (owner-only bulk pay-rate draft refused safely)

`#1239` Cluster A final-four + `#1245` Weymouth are on tip but **did not clear** the four fails above.

## Still not done tonight

- Full M1 lifecycle matrix
- ISO-29 privacy retest
- Ambient Pulse / Dispatch / Twin evidence
- AI-85 re-sample

## Hard rules (unchanged)

- **#1240 is LIVE** on `/api/version`, but **Declan has NOT cleared the rollback ban**.
- Never instruct `import.rollbackBatch` / never roll back until Declan clears.
- Smoke remains Measured **6/6 PASS** on this tip.

## Evidence location (box)

`/workspace/helgoiq-overnight-2026-09-10-11/02-cluster-a/` (`FINAL.json`, `RESULTS.md`, `evidence/`)

No credentials in this drop.
