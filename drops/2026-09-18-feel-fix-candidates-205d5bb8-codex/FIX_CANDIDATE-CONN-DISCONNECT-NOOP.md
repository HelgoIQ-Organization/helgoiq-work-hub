# FIX_CANDIDATE — CONN-DISCONNECT-NOOP Stripe / Gmail Disconnect are no-ops

- **Surface:** Admin Connections / Integrations
- **Routes:** `/admin/stripe-connect?c=150002`, `/admin/social/integrations?c=150002` (Gmail tab)
- **Tip:** `205d5bb897fa84c76f2af92b2cad16b568f1cca2`
- **Severity:** broken
- **Axis:** frictionless / trust
- **Seat:** Admin 2 · Bluebird `c=150002`
- **Env:** https://lobster-app-662c7.ondigitalocean.app

## Repro
1. Sign in as Admin 2 on tip above (Bluebird only).
2. Open Stripe Connect already-connected state; click **Disconnect**.
3. Reload the route.
4. Open Integrations → Gmail connected state; click **Disconnect Gmail**; reload.

## Expected
Connected state clears, green tick removed, Connect CTA shown. Owner can revoke a linked provider from the advertised control.

## Actual
No visible response after click; after reload each still showed connected/ready.

## Before screenshot
`/workspace/helgoiq-full-programme-2026-09-17/feel-lane/connections-205d5bb8/evidence/stripe-connected.png`  
Gmail state observed on the same Integrations surface.

## Suggested outcome
- **Problem:** Disconnect controls advertise revoke but do nothing — owner cannot recover or revoke.
- **Success criteria:** Disconnect clears connection for Stripe and Gmail (Bluebird only), UI updates immediately, reload stays disconnected, audit/log records the revoke; no Refrm tenant writes.
