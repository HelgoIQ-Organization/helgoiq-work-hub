# Bluebird Feel re-measure — 2026-09-17

- Company: Bluebird (`c=150002`)
- Staging: https://lobster-app-662c7.ondigitalocean.app
- Tip SHA: `cace7a56b6912c3ddfc95cda8749d4a71ef20ee5` (confirmed via `/api/version`; build/release SHA matched)
- Basis: measured live staging UI, signed-out first, then Admin 2; WhatsApp/Slack reference is directional, not a synthetic benchmark.

## Score lines (0–100)

| Surface | Joyful | Obvious | Frictionless | Overall | Measured basis |
|---|---:|---:|---:|---:|---|
| Signed-out client (home, timetable, buy, 404) | 70 | 78 | 66 | 71 | Polished landing and warm 404 with Home/Timetable/Buy shortcuts; timetable is browseable while signed out; Buy correctly gates to sign-in, but adds a step. Cookie chrome #1382 was not visible in this owned browser session. |
| Admin Home / overview | 35 | 26 | 20 | 27 | Admin 2 authenticated successfully, but `/admin/home?c=150002` displayed “This admin page is unavailable”; other admin tools remained available. |
| Members & CRM | 65 | 84 | 72 | 74 | Members directory showed 177 total members, useful metrics and searchable table; CRM showed a 12-lead Sales Pipeline with add/search controls, but the visible board is sparse/one-column-heavy. |
| Timetable & bookings | 64 | 78 | 72 | 71 | Admin timetable showed 7 classes this week, date/location controls, Classes/Appointments/Recovery tabs, filters and Add Class; calendar viewport was initially mostly empty and an opportunity banner competes for attention. |
| Safe Studio overview + tile drill | 80 | 88 | 86 | 85 | Overview clearly exposed 1 open fault and 1 open incident by building. Open-fault tile drilled to scoped Operations URL with `tab=faults`, `locationId=150005`, `focus=open`; Bluebird Central showed 1 fault and 1 incident. |

## Issue visibility checks

- #1382 cookie chrome: **Not observed** on signed-out landing, timetable, buy gate, or warm 404 in this persisted browser session; no cookie-consent UI appeared. (Fresh-profile confirmation may be warranted.)
- #1383 warm 404: **Visible / PASS** — “We couldn't find that page” plus Back, Home, Timetable and Buy shortcuts.
- #1385 Safe Studio tile drill: **Visible / PASS** — overview tile opened scoped Bluebird Central operations records; scope and open counts were retained.

## Evidence

- `signed-out/home.png`, `signed-out/timetable.png`, `signed-out/buy-signin.png`, `signed-out/warm-404.png`
- `home/admin-home-unavailable.png`
- `members/members-directory.png`, `members/crm-pipeline.png`
- `timetable/admin-timetable.png`
- `safe-studio/overview.png`, `safe-studio/operations-faults-scoped-central.png`
