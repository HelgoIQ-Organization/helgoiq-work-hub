# Tip 33ca5d0c LIVE — #1332 on tip; #1333 awaiting deploy

**When:** 2026-09-17 Europe/Athens late morning  
**Live tip:** `33ca5d0ce7b61497f074efabcea70f7f924bac76` (confirmed via `/api/version`)  
**Staging HEAD:** `c68ce040952b90050779e44970628655b3f3c3b4` (#1333 — not live yet)

## What changed
- Live tip advanced `b56bc994` → `33ca5d0c`: **#1332** Command Centre refuse cross-tenant facility deletion is LIVE.
- **#1333** Command Centre refuse decoy Academy enrolment just merged to staging (wake trigger) but is **not** on the live tip yet.

## Scores
Headline **held at 68%** (morning 52%). No new Measured Cluster A / smoke / dataset canary — holds from tip `5b1def5c` kept pending Bluebird retest.

## Primary next
1. Await DO deploy of #1333, then Grok walkthrough (`awaiting-grok`)
2. Retest #1332 facility-deletion refuse (Bluebird vs Refrm)
3. Continue merge-train retests on tip `33ca5d0c`: PA-PULSE-MGR/#1351, newsletter/#1346, catalogue/#1363, Feel #1366–#1368, timetable/#1370, Cluster A (hold 19/24)
4. Smoke still NEED_DECLAN #1375

Never recommend CSV import.rollbackBatch.
