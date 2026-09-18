# FIX_CANDIDATE — CONN-META-DEADEND Meta/Facebook Connect CTA does not hand off

- **Surface:** Admin Meta Hub · Connection
- **Route:** `/admin/meta-hub?c=150002&tab=connection`
- **Tip:** `205d5bb897fa84c76f2af92b2cad16b568f1cca2`
- **Severity:** broken
- **Axis:** frictionless
- **Seat:** Admin 2 · Bluebird `c=150002`
- **Env:** https://lobster-app-662c7.ondigitalocean.app

## Repro
1. Sign in as Admin 2, Bluebird only.
2. Open `https://lobster-app-662c7.ondigitalocean.app/admin/meta-hub?c=150002&tab=connection`.
3. Click **Continue with Facebook**.

## Expected
Facebook sign-in / authorization screen (or a clear blocked/error state with recovery).

## Actual
Button remained on the page/spinner; no provider sign-in, error, or green state.

## Before screenshot
`/workspace/helgoiq-full-programme-2026-09-17/feel-lane/connections-205d5bb8/evidence/meta-connect-dead-end.png`

## Suggested outcome
- **Problem:** Primary social Connect flow is a dead end with no recovery guidance.
- **Success criteria:** Continue with Facebook opens Meta OAuth (or honest “not configured for staging” with next step); never silent spinner; Bluebird-only; no Refrm side effects.
