# FIX_CANDIDATE — CONN-GTM-REFRM GTM setup asks technical ID + shows Refrm verification URL

- **Surface:** Admin Connections · GTM
- **Route:** `/admin/social/gtm?c=150002`
- **Tip:** `205d5bb897fa84c76f2af92b2cad16b568f1cca2`
- **Severity:** broken (cross-tenant) / confusing
- **Axis:** obvious / trust
- **Seat:** Admin 2 · Bluebird `c=150002`
- **Env:** https://lobster-app-662c7.ondigitalocean.app

## Repro
1. Sign in as Admin 2, Bluebird only.
2. Open `https://lobster-app-662c7.ondigitalocean.app/admin/social/gtm?c=150002`.
3. Click **Connect container**.

## Expected
Owner-friendly provider sign-in or a Bluebird-scoped setup path. Verification website must be Bluebird’s domain, never another tenant.

## Actual
Modal asks for a technical GTM Container ID and displays `Verification website: https://refm.co.uk/` while the active tenant is Bluebird. No value was entered.

## Before screenshot
`/workspace/helgoiq-full-programme-2026-09-17/feel-lane/connections-205d5bb8/evidence/gtm-container-modal.png`

## Suggested outcome
- **Problem:** Owner-hostile technical requirement plus Refrm verification URL on Bluebird — tenant boundary risk.
- **Success criteria:** With `?c=150002`, verification website is Bluebird-only; no `refm.co.uk` / Refrm strings; prefer OAuth/provider handoff over raw Container ID, or make ID optional with plain-English help.
