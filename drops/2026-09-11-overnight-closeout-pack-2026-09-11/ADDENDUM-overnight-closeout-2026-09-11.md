# ADDENDUM — Overnight close-out Re-test column 2026-09-11

Companion to `helgoiq-test-ledger.html` (untouched HTML). Prefer this addendum for Dispatch1 / Finance / smoke / GDPR / overnight re-test rows after the 10→11 Sep overnight programme.

**Overnight tip stamped (all overnight sections):** `232659cf05d22e5de920ee547925b37581cfb6d4`  
**Live tip at morning pack time (2026-09-11 ~07:20 Europe/London):** `a263c4ab3e85e24d82f292268a2427907ae7eec4` (moved past overnight tip)

## Re-test rows (Dispatch1 / Finance / smoke / GDPR / overnight)

| ID / programme | Prior | Re-test | Notes |
|---|---|---|---|
| #1175 membership SoT + CC `?c=` | HOLD until merge → MERGED 2026-09-05 | **MERGED** (already) · smoke reverse **PASS** on `232659cf` | Membership cancel→reverse first proven overnight |
| Six-step smoke | FAIL (#1181 reverse) | **PASS 6/6** | Purchase/book/cancel + membership reverse on Bluebird |
| Cluster A (#1188 lineage) | FAIL fours | **20 PASS / 4 FAIL** | Same fails: MEM-X01, ACS-F01, TAG-C01, TAG-A01 |
| M1 Wave1 freeze | — | **PASS** | Admin2 BB Smoke paused |
| M1 Wave1 unfreeze | — | **FAIL** | Payment provider resume error; stayed paused |
| M1 cancel + reverse | prior reverse FAIL | **PASS** | Admin2 Member B reinstated |
| M1 upgrade/downgrade | — | **BLOCKED** | No selectable tiers |
| ISO-29 tenancy | 25/4 prior | **26 PASS / 4 FAIL / 2 NOT_RUN** | Same ISO-18,20,27,29; Weymouth/Luton NOT_RUN |
| Ambient Dispatch viewer | FAIL | **FAIL** | “Something went wrong” with `c=` |
| Ambient Pulse / Twin / LE | — | **PASS / PASS / PARTIAL** | Twin Cancelling agrees; LE one-tap OK, 0 lessons |
| Event Bus | — | **BLOCKED** | Platform Admin gate |
| AI-85 rescore | 48/5/23/8/1 | **unchanged 48/5/23/8/1** | Evidence refreshed; verdicts static |
| Dataset CSV canary | blocked / partial | **FAIL** | `Missing companyId` on `batchImport.upload` (403); 0 created; no rollback |
| Finance accuracy Steps 5–8 | PASS=12 FAIL=5 PARTIAL=15 BLOCKED=2 | **no new artefacts since 2026-09-07** | Continuity copy only; figures unchanged |
| Dispatch1 #1165/#1167/#1170/#1172/#1160 | overnight 09-04/07 | **no new Dispatch1 artefacts since 2026-09-07** | Continuity copy only |
| GDPR #1148 re-test | prior addendum | **unchanged this pack** | markdown continuity only |
