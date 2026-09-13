# FIX_CANDIDATE — H-F001 Refrm leak on Bluebird Overview

- **Surface:** Home / `/admin/overview`
- **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`
- **Severity:** broken
- **Axis:** obvious
- **Seat:** Admin 2 · `?c=150002` Bluebird

## Repro
1. Sign in as Admin 2 on staging tip above.
2. Open `https://lobster-app-662c7.ondigitalocean.app/admin/overview?c=150002`.
3. Look at tablist under KPI cards and the company card header.

## Expected
Bluebird-only overview: no other-tenant names; tabs/badges only for companies the seat may see for this `c=`.

## Actual
Tab **Refrm** beside **All Companies**; Bluebird card shows grey badge **Refrm** next to **Active**.

## Before screenshot
`/workspace/helgoiq-afternoon-2026-09-13/feel-measured/home/screenshots/01-overview-first.png`  
(reconfirm: `09-overview-refrm-confirm.png`)

## Suggested outcome
- **Problem:** Tenant chrome leaks Refrm into Bluebird Home — trust breaker.
- **Success criteria:** With `?c=150002`, no “Refrm” string in overview tabs, badges, or company cards; only Bluebird (and legitimate Bluebird locations). Server rejects/scopes cross-company overview data.
