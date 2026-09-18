# HelgoIQ staging ISO-1376 tenant-chooser retest

- Tip at start: `660c9038ea12a2543db5f3049b0c098f4298ff5a` (from `/api/version`)
- Tip at finish: `660c9038ea12a2543db5f3049b0c098f4298ff5a` (from `/api/version`)
- Seat email used: `helgoiq-bb-admin-2@agentmail.to`

## ISO-18 — FAIL

The explicit Bluebird client deep link (`?view=client&c=150002`) loaded the Bluebird member home with Bluebird activity and no visible Refrm context. The explicit Refrm deep link (`?view=client&c=150001`) showed the central account chooser with “Bluebird Pilates — TEST DATA (fabricated)” under both Business access and Memberships, so the Bluebird membership/business leak remains. The unscoped `/?view=client` redirected to the current Bluebird-scoped client home rather than presenting a chooser; no unscoped chooser screenshot was created.

## ISO-29 — FAIL

Bluebird Command Centre (`/admin/command-centre?c=150002`) loaded Bluebird-scoped Command Centre and retained `c=150002`. Refrm Command Centre (`/admin/command-centre?c=150001`) rendered “Choose a studio first” with only “Bluebird Pilates — TEST DATA (fabricated)” as the option, exposing the membership-only Bluebird tenant on the Refrm deep link.

- Overall clean? **no**
- No mutations performed.

## Evidence screenshots

- `/workspace/helgoiq-iso-1376-sweep-2026-09-18/evidence/ISO-18/bluebird-client-home.png`
- `/workspace/helgoiq-iso-1376-sweep-2026-09-18/evidence/ISO-18/refrm-client-or-account.png`
- `/workspace/helgoiq-iso-1376-sweep-2026-09-18/evidence/ISO-29/bluebird-command-centre.png`
- `/workspace/helgoiq-iso-1376-sweep-2026-09-18/evidence/ISO-29/refrm-command-centre.png`
