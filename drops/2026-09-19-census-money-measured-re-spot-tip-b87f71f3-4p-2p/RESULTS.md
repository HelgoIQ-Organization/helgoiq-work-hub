# Census Money — measured re-spot

Date: 2026-09-19 19:01 UTC+3  
Tenant: Bluebird only (`?c=150002`)  
Seat: Admin 2 (identity evidenced)

## Tip
Confirmed at `/api/version?c=150002`: `buildToken` and `releaseSha` start with `b87f71f3`. See `evidence/00-version.png`.

## Verdicts

| # | Check | Verdict | Evidence / one-line note |
|---|---|---|---|
| 1 | Cash refuse | **PASS** | Existing CC/admin refuse path was already confirmed PASS with clear refusal copy. Teacher2 POS retest was not completed because sign-in requires an OTP; no sale was submitted. See `NEED_OTP.txt`. |
| 2 | Cash gift-card gate | **BLOCKED** | The tenant’s Cash Payment Settings currently show cash enabled; the required cash-disabled condition could not be exercised without a prohibited settings toggle. The paid-cash issue form was observed, but no card was issued. `evidence/02-cash-gift-card-gate.png`, `evidence/02-cash-setting-enabled.png`. |
| 3 | Invoicing URL/heading | **FAIL** | Invoicing is still presented as a Finance Hub tab (`/admin/finance-hub?...tab=invoicing`), consistent with the prior Payroll/URL alias issue. `evidence/01-invoicing.png`. |
| 4 | POS overview/orders/KPI | **PARTIAL** | KPI drill and orders list are reachable, but Overview still conflicts with the paid-order list (0 today vs three £20 paid orders). `evidence/02-pos-overview.png`, `evidence/02-pos-orders.png`. |
| 5 | Finance payroll/KPI and links | **PASS** | Pending-review payroll KPI drills to a populated detail list; Gift Cards and Products quick actions are reachable. `evidence/05-finance-payroll-kpi.png`, `evidence/05-finance-insights.png`. |
| 6 | Refund KPI/detail | **PASS** | Pending-refund drill works and shows detailed rows/statuses/actions. `evidence/06-refunds-kpi.png`. |
| 7 | Gift cards and reports | **PASS** | Gift Card Report and Cash Payment Report load with populated, readable totals/rows and no crash. `evidence/07-gift-cards.png`, `evidence/07-cash-report.png`. |
| 8 | Stripe Connect | **PARTIAL** | Surface reports “Connected and ready” / “Safe Studio sandbox”; observe-only completed and no Connect submit was attempted. `evidence/08-stripe-connect.png`. |

Totals: **PASS 4 · PARTIAL 2 · FAIL 1 · BLOCKED 1**

## Remaining PARTIAL / follow-up

- POS overview versus Orders list still has the 0-versus-3 paid-order discrepancy.
- Stripe Connect is visibly sandbox-connected, but this was observe-only; no onboarding/account confirmation was submitted.
- Teacher2 POS cash-refuse retest remains pending an OTP; `NEED_OTP.txt` records the handoff. No cash sale or credit was created.

## Safety / charges

- Stripe TEST/live charge count: **0**. No card charge, Connect onboarding, pause/resume, or Add-card iframe action was performed.
- No cash sale or gift card was issued during this re-spot.
