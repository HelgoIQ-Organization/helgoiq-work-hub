# FIX_CANDIDATE — M-F002 Member count disagreement (Overview vs Members)

- **Surface:** Members/CRM (cross-link with Home Overview)
- **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`
- **Severity:** broken
- **Axis:** obvious
- **Seat:** Admin 2 · Bluebird

## Repro
1. `/admin/overview?c=150002` → Members (aggregated) = **—**
2. `/admin/members?c=150002` → **11 total members**

## Expected
One trusted count everywhere that names “members”.

## Actual
Dash on Overview; 11 on Members (9 active KPI).

## Before screenshot
`.../home/screenshots/01-overview-first.png`  
`.../members-crm/screenshots/14-members-directory.png`

## Suggested outcome
- **Problem:** Find-a-member journey starts from a Home number you cannot trust.
- **Success criteria:** Shared counter API; Overview and Members never disagree by &gt;0 on same tenant snapshot; L2 assertion covers both.
