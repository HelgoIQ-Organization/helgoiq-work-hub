# Defects — Connections / Connect flows

Bluebird only (`c=150002`), staging, tip prefix `205d5bb8`.

## P1 — Disconnect controls are no-ops (Stripe and Gmail)

- **Routes:** `/admin/stripe-connect`, `/admin/social/integrations` (Gmail tab)
- **Steps:** Open the already-connected state; click Disconnect / Disconnect Gmail; reload the route.
- **Expected:** Connected state clears, green tick is removed, and a Connect CTA is shown.
- **Observed:** No visible response after click; after reload each still showed connected/ready.
- **Impact:** An owner cannot revoke or recover a linked provider connection from the advertised control.
- **Evidence:** `evidence/stripe-connected.png`; Gmail state observed in the same Integrations surface.

## P1 — GTM setup requires technical input and shows a Reformer verification URL

- **Route:** `/admin/social/gtm?c=150002`
- **Steps:** Click Connect container.
- **Expected:** Owner-friendly provider sign-in or a Bluebird-scoped setup path.
- **Observed:** Modal asks for a technical GTM Container ID and displays `Verification website: https://refm.co.uk/` while the active tenant is Bluebird. No value was entered.
- **Impact:** Owner-hostile requirement and cross-tenant branding/verification risk; conflicts with the Bluebird-only test boundary.
- **Evidence:** `evidence/gtm-container-modal.png`.

## P1 — Meta/Facebook Connect CTA does not hand off

- **Route:** `/admin/meta-hub?c=150002&tab=connection`
- **Steps:** Click Continue with Facebook.
- **Expected:** Facebook sign-in/authorization screen.
- **Observed:** Button remained on the page/spinner; no provider sign-in, error, or green state.
- **Impact:** A primary social Connect flow is a dead end with no recovery guidance.
- **Evidence:** `evidence/meta-connect-dead-end.png`.
