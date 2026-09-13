# FIX_CANDIDATE — H-F003 Members (aggregated) dash vs real member count

- **Surface:** Home Overview KPI ↔ Members
- **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`
- **Severity:** broken
- **Axis:** obvious
- **Seat:** Admin 2 · Bluebird

## Repro
1. Open `/admin/overview?c=150002` — note **Members (aggregated)** value.
2. Open `/admin/members?c=150002` — note **11 total members** / active KPI.

## Expected
Same tip/seat/tenant → Overview aggregate matches Members (or tile hidden if unknown).

## Actual
Overview shows **—**; Members shows **11** / **9** active.

## Before screenshot
Overview: `.../home/screenshots/01-overview-first.png`  
Members: `.../members-crm/screenshots/14-members-directory.png`

## Suggested outcome
- **Problem:** Lying/empty KPI on Home destroys obviousness.
- **Success criteria:** Overview Members tile equals Members list total (or active — labeled); click drills to `/admin/members` and back works without splash.
