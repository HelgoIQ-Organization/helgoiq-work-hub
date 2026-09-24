# Till payment link (#1559) — Bluebird walk

**Status: BLOCKED** (no money taken)

## What we tried
On staging tip that already includes #1559, we opened Till as manager, put **POS Test Basket £20** on the sale, chose **Payment link**, picked member Nina Bell, and pressed create.

## What happened
The app returned **This request could not be completed** (server HTTP 500 on create till sale). No payment page opened. Stripe was never reached. Front desk alone cannot open Till (Admin Access Required) — manager can.

## Money check
| | |
|---|---|
| Page said | £20.00 before pay |
| Pay button said | not seen |
| Stripe took | not seen |

## What this means
The till payment-link control is on staging, but **creating** the link is broken right now. I have not marked the feature as working.

## Next
Bot Commander is handing Claude/Codex a fix brief for the 500, then we rewalk create → phone pay as soon as tip carries a fix.
