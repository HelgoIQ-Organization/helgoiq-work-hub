# Remaining FIX_CANDIDATEs — Bluebird re-measure

1. **Admin Home unavailable for authenticated Admin 2**
   - Route: `/admin/home?c=150002`
   - Observed: authenticated Admin 2 sees “This admin page is unavailable. This link may be out of date, or the page may not be available in your workspace yet.”
   - Impact: primary Admin Home/overview surface is not usable even though Members, CRM, Timetable and Safe Studio load.
   - Evidence: `home/admin-home-unavailable.png`

2. **Cookie chrome #1382 not observable in persisted signed-out session**
   - Observed: no cookie-consent/preferences chrome appeared on signed-out landing, timetable, buy gate or warm 404.
   - Impact: cannot confirm the intended cookie treatment from this session; verify in a fresh browser profile before closing the candidate.
   - Evidence: `signed-out/home.png`, `signed-out/timetable.png`, `signed-out/buy-signin.png`, `signed-out/warm-404.png`

3. **Timetable attention competition / sparse first viewport**
   - Observed: a large “Unlock Your Data's Full Potential” opportunity banner precedes the timetable, while the captured calendar viewport shows mostly empty early-hour rows despite 7 classes this week.
   - Impact: booking availability is less immediate than WhatsApp/Slack-style task-first surfaces.
   - Evidence: `timetable/admin-timetable.png`
