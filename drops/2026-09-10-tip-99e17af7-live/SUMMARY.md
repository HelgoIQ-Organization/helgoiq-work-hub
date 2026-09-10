# Launch Hub tip move — 99e17af7 live

**When:** 10 Sep 2026 ~22:21 Europe/London  
**Trigger:** PR #1240 merge wake (tip-change listener)  
**Live tip:** `99e17af76b00f3d94158ea154e3417ab8cdd0cc0` (was `6cb5d8d9`)  
**Headline:** **62%** (estimate; was 58% while tip stuck; morning 52%)

## What landed on DigitalOcean
Afternoon + evening packs are now on the test studio: invites (#1244), Timetable waitlist (#1243), Luton CC (#1242), Dispatch types (#1246), Pulse (#1237), Cluster A final four (#1239), Select (#1232), payments join (#1231), and related afternoon fixes.

## Still ahead of live tip
- **#1240** SAFE rollback — merged on GitHub, **not** on tip yet. Do **not** import 12-month dataset; never use old rollback.
- **#1245** Weymouth door-tool — merged, not on tip yet.

## Your Moves (top)
1. Re-run six-step smoke starting with member invite (#1244)
2. Wait for #1240 on `/api/version` before any dataset import
3. Add five Resend/Agentmail secrets for #1213

No credentials in this drop. Bluebird-only notes.
