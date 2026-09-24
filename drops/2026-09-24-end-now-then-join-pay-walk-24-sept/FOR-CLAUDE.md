# FAIL-first — End now (#1565) then #1533 join→pay — 2026-09-24 quiet watch

## FAIL first
1. **#1533 join→pay FAIL (display + incomplete Stripe submit)**  
   - **page-said:** Order Summary Total **£112.00/mo** + HELGOBIRD 15% / “First invoice only”; copy defers exact amount to Stripe — **no plain first-invoice £19.21 on app before pay**  
   - **Pay-button-said:** `Complete Purchase` (no amount)  
   - **Stripe-took:** n/a (ZIP incomplete — Subscribe not completed). Stripe **displayed** £19.21 Total due today (Then £112.00/mo from 1 Oct 2026).  
   - **session:** `cs_test_a1Btcdn9PS3WIsh5Ipnm0TZdniVSaRsec6XoFQqewt1SBPg2FL2lGKfcYX`  
   - **grant:** no — home still **5 credits**; notifications still old £20 Single Class  
   - **Evidence:** `evidence/B-02b-checkout-helgobird.png`, `B-03-pay-button.png`, `B-05-stripe-after.png` (ZIP error), `B-07-home-after.png`  
   - **Billing lock:** pro rata + HELGOBIRD arithmetic may be right (£22.60 − £3.39 = £19.21 on Stripe) — **display mismatch still FAIL** per Declan 2026-09-23 rule.

## PASS
1. **End now (#1565) PASS (already ended / prior prove)**  
   - Prior same evening (tip `2b928217`): End now **beside Reinstate**, no refund, toast “Membership ended now…”, panel → No active membership.  
   - This tip `009d31f9…`: panel still **No active membership** (A02/A06). Cannot re-show beside Reinstate without Cancelling membership.  
   - `#1565` merge `8558a9cc…` still ancestor of tip (compare ahead).  
2. Tip gate on walk tip `009d31f9f4e27baebb1bd63325c5387d8c5ca2f8` stable through Walk B.  
3. Isolation: admin profile then separate member-b profile; no shared session.

## Tip drift
- Brief: `dc20442b…` (#1606) → mid-evening `3ec26e2d…` (#1679) → walk tip `009d31f9…` (#1662).  
- End now UI fix remains on tip lineage.

## Machine
- `state-a.json`, `state-b.json`, `RESULT.md`  
- Paths: `/workspace/endnow-1533-2026-09-24/`

## Routine
Recommend **delete End-now half** of `quiet-watch-end-now-ui-fix-tip-then-1533` (proven). **Do not close #1533** — HELGOBIRD first-invoice plain Total still FAIL.
