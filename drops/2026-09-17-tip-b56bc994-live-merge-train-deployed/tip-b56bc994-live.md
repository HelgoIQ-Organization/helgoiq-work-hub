# Tip b56bc994 LIVE — merge train deployed

**When:** 2026-09-17 Europe/Athens late morning  
**Live tip:** `b56bc9947c1e6dbf0c564f3b426de97085798db2` (confirmed via `/api/version`)

## What changed
Staging advanced from `5b1def5c` → `b56bc994`. The 13-PR merge train is now LIVE, including:
- #1351 Pulse location grants
- #1346 manager newsletter
- #1363 purchase catalogue
- Feel CC / mobile (#1366/#1357/#1368)
- #1370 timetable IANA timezone
- plus #1350/#1353/#1347/#1348/#1367/#1369

## Scores
Headline **held at 68%** (morning 52%). No new Measured Cluster A / smoke / dataset canary on this tip yet — overnight holds from `5b1def5c` kept pending Bluebird retest.

## Primary retests (Bluebird 150002 only)
1. PA-PULSE-MGR / #1351
2. Manager newsletter / #1346 (Estimate pending — do not invent PASS)
3. Purchase catalogue signed-out / #1363
4. Feel wave #1366–#1368
5. Timetable #1370
6. Cluster A re-walk (hold 19/24)
7. Smoke still NEED_DECLAN #1375

Never recommend CSV import.rollbackBatch.
