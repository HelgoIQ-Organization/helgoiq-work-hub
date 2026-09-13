# FIX_CANDIDATE — M-F001 Directory nav → unavailable

- **Surface:** Members / CRM sidebar **Directory**
- **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`
- **Severity:** broken
- **Axis:** frictionless
- **Seat:** Admin 2 · Bluebird

## Repro
1. Open any admin page with Members nav expanded.
2. Click **Directory** (or go `/admin/directory?c=150002`).

## Expected
Member directory / people list (same as Members list or a dedicated directory).

## Actual
“This admin page is unavailable” with **Open Home** and **Go to Home** (duplicate) + Go back.

## Before screenshot
`/workspace/helgoiq-afternoon-2026-09-13/feel-measured/members-crm/screenshots/24-directory-unavailable.png`

## Suggested outcome
- **Problem:** Named nav item is a dead end.
- **Success criteria:** Directory opens a real people list (or redirects 302/client to `/admin/members?c=` preserving tenant); no unavailable dead-end for pinned Directory; single recovery CTA if ever missing.
