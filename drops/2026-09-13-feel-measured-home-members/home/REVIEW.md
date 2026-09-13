# Admin Home / overview — Feel MEASURED

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13 (Europe/Athens morning)  
**Tip:** `6486be87a68821e383d36d5246f9da08a802ee59` (GET /api/version buildToken+releaseSha match)  
**Seat:** Admin 2 `helgoiq-bb-admin-2@agentmail.to` · Tenant `?c=150002` Bluebird · CDP 9234  
**Paths:** `/admin/overview?c=150002`, `/admin?c=150002` (Studio Pulse / home stack)

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **40%** | **22%** | **38%** | **33%** |

`overall = round((40+22+38)/3) = 33`

Phone (~390×844): **not measured** this pass — no phone score invented.

## Plain English

Live walk on tip `6486be87a688…` vs WhatsApp/Slack bar. `/admin` Home has real warmth (date greeting, Studio Pulse honesty, empty cards with Timetable CTA). `/admin/overview` is the trust breaker: under Bluebird you still see a **Refrm** tab and a **Refrm** badge on the Bluebird company card, while Members (aggregated) shows **—** even though Members lists 11 people. In-app moves often flash a full-page Helgo **FITNESS BUSINESS PLATFORM** splash instead of an in-shell skeleton. Home is reachable and partly human — not yet obvious or trustworthy as a studio dashboard.

## Strengths

- `/admin` greets with weekday date + “Quiet floor today” and an honest Studio Pulse “INSUFFICIENT DATA” (no fake middle score)
- Empty “Today’s classes” points to Timetable; location pills (All / Bluebird Central / North) are clear
- Bluebird shell + TEST DATA badges make staging context hard to miss
- Meaning on overview appeared in ~3s after nav (no endless spinner once settled)
- Customise Home affordance present

## Findings

### H-F001 — Refrm tab + badge on Bluebird Overview
- **Axis:** obvious · **Severity:** broken
- **Detail:** `/admin/overview?c=150002` shows tablist **All Companies | Refrm** and a grey **Refrm** pill on the Bluebird Pilates company card (Active). Same leak reconfirmed on second open. Studio owner cannot trust tenant scope.
- **Suggestion:** When `companyId=150002` (Bluebird), never render other-tenant tabs/badges; scope overview queries server-side; badge Bluebird only.

### H-F002 — Full-page splash for in-app Home moves
- **Axis:** frictionless · **Severity:** confusing
- **Detail:** Navigating Members → `/admin` and KPI/overview transitions captured a centered Helgo **H** + “FITNESS BUSINESS PLATFORM” full-page splash (also bare logo splash on KPI click). Leaves the admin shell entirely.
- **Suggestion:** Keep chrome; skeleton/pulse placeholders in the content pane only.

### H-F003 — Members (aggregated) shows “—” while Members has 11
- **Axis:** obvious · **Severity:** broken
- **Detail:** Overview KPI **Members (aggregated)** is a dash; `/admin/members` reports **11 total members** / **9** active on the same tip+seat+tenant. Number you see on Home does not match the named Members surface.
- **Suggestion:** Wire aggregated count to the same member query as Directory/Members, or hide the tile until count is real; make the tile drill to `/admin/members`.

### H-F004 — No single next action; greeting says “there”
- **Axis:** joyful · **Severity:** polish
- **Detail:** Quiet floor + empty classes/birthdays/tasks — several soft cards, no one primary “do this now”. Greeting reads **Good morning, there** (missing display name).
- **Suggestion:** One hero next action (e.g. open Timetable / review invites / unpaid). Resolve admin first name in greeting.

### H-F005 — Overview KPI chrome does not drill cleanly
- **Axis:** frictionless · **Severity:** confusing
- **Detail:** Clicking numeric overview chrome produced splash / no clear named-list landing with reliable return; Locations/Brand cards feel decorative.
- **Suggestion:** Each KPI → named list with back into Overview; no full reload splash.

## Suggestions

1. Kill Refrm tab/badge under Bluebird before any other Home polish (H-F001)
2. Replace full-page splash with in-shell skeleton (H-F002)
3. Fix or hide Members (aggregated) until it matches Members (H-F003)
4. One clear next action on quiet days; fix “Good morning, there”
5. Make KPI tiles drill + return

## Evidence

- `screenshots/01-overview-first.png` + `01-overview-text.txt` + `01-refrm-hits.json` + `01-overview-signals.json`
- `screenshots/02-admin-home.png` + `02-admin-text.txt` + `02-admin-signals.json`
- `screenshots/04-after-kpi-click.png` (splash)
- `screenshots/09-overview-refrm-confirm.png` + `.txt` (reconfirm)
- `screenshots/10-nav-splash.png` (FITNESS BUSINESS PLATFORM splash)
- Walk notes: `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/walk-notes.json`
