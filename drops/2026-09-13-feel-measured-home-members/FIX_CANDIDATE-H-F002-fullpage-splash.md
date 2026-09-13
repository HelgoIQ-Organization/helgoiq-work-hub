# FIX_CANDIDATE — H-F002 Full-page splash on in-app Home moves

- **Surface:** Home (`/admin`, `/admin/overview`)
- **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`
- **Severity:** confusing
- **Axis:** frictionless
- **Seat:** Admin 2 · Bluebird

## Repro
1. Already in admin shell (e.g. Members or Overview).
2. Navigate to `/admin?c=150002` or click overview KPI chrome.
3. Watch first paint.

## Expected
Admin chrome stays; content pane shows skeleton/pulse placeholders.

## Actual
Full-page centered Helgo **H** + “FITNESS BUSINESS PLATFORM” (or bare logo) splash — shell disappears briefly.

## Before screenshot
`/workspace/helgoiq-afternoon-2026-09-13/feel-measured/home/screenshots/10-nav-splash.png`  
(also `04-after-kpi-click.png`)

## Suggested outcome
- **Problem:** In-app moves feel like a cold restart vs Slack-smooth.
- **Success criteria:** No full-viewport marketing splash for authenticated in-admin navigations; loading limited to main content region; perceived move &lt; ~300ms chrome-stable.
