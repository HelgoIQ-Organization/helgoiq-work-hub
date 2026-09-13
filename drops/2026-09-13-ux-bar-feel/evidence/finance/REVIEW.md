# HelgoIQ feel-measured review — Finance / payments UI

- **Basis:** `measured` · live observe-only Admin2 Bluebird walk; no invented figures
- **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59` (full `/api/version` buildToken and releaseSha)
- **Seat:** Admin2 Bluebird; studio shown as Bluebird Pilates — TEST DATA (fabricated)
- **Scored date:** 2026-09-13
- **Stamp:** Sunday, 2026-09-13 08:24–08:38 UTC+3

## Scores

| Measure | Score |
|---|---:|
| Joyful | 58 |
| Obvious | 47 |
| Frictionless | 49 |
| **Overall** | **51** |

## Plain-English read

The UI has a calm, friendly visual system and some genuinely reassuring sandbox/status language, but it does not yet reach a WhatsApp/Slack money-ops bar where the next action is obvious from the number in front of you. Empty payroll states are clean but cold: August shows £0.00 and zeros without telling an operator whether that is “nothing yet” or a problem. The largest trust hit is POS Overview showing 0 paid orders and £0.00 sales while Orders shows three paid £20.00 orders. The invoicing URL landing on Payroll is a direct route-label mismatch, and several KPI tiles look clickable but do nothing when tested. Refund detail and Stripe sandbox handoffs are usable, while Gift Cards, Products, and AI BI are rich enough to support real work once the navigation and state language are tightened.

## Surfaces walked

| Route / path | Feel measured live |
|---|---|
| `/admin/finance-hub?c=150002` — September | Payroll workspace is visually clear and populated (non-zero payroll, 1 staff member, 1 pending review); KPI cards do not visibly drill or provide a return affordance when clicked. Screenshot: `screenshots/02-finance-september.webp` |
| `/admin/finance-hub?c=150002` — August | Month filter works; empty period becomes £0.00 Total Payroll and zeros for staff/pending/approved/paid, with no inviting “start here” explanation. Screenshot: `screenshots/03-finance-august-empty.webp` |
| `/admin/pos-hub?c=150002` — Overview | KPI grid is readable but reports Today’s sales £0.00 and Paid orders 0; Stock-outs is 1 and Shop seller says Not connected. Screenshot: `screenshots/04-pos-overview.webp` |
| `/admin/pos-hub?c=150002` — Orders / Till | Orders lists #1, #2, #3 as paid at £20.00 each, disagreeing with Overview. New till sale opens a safe draft sale with £0.00 subtotal; it was returned from without submitting. Screenshot: `screenshots/05-pos-orders-paid.webp` |
| `/admin/billing?c=150002` | Enterprise plan shows £149/month. View Invoices, Payment Methods, and Upgrade Plan cards were tested and opened Stripe-hosted sandbox billing sessions; no purchase or payment method was added. Screenshot: `screenshots/06-billing-cards.webp`, `screenshots/07-stripe-sandbox-billing.webp` |
| `/admin/stripe-connect?c=150002` | Strong status language: “Connected and ready” / “Safe Studio sandbox”; Open Stripe and Disconnect are explicit. No onboarding submit or disconnect was attempted. Screenshot: `screenshots/08-stripe-connect.webp` |
| `/admin/invoicing?c=150002` | URL promises invoicing but visible page heading and controls are Payroll, including payroll period and Approve Payrun. Screenshot: `screenshots/09-invoicing-payroll-misroute.webp` |
| `/admin/refunds?c=150002` | KPIs show 3 total requests, £30.00 refunded, 2 pending, 1 completed, 0 rejected, 0 failed. KPI tiles did not visibly filter/drill; eye action opened a useful Refund #5 detail and was closed without action. Screenshots: `screenshots/10-refunds-overview.webp`, `screenshots/11-refund-detail.webp` |
| `/admin/gift-cards?c=150002` | Populated and comparatively warm: 5 issued, £125 total value, 1 redeemed, £100 outstanding, with status filters and Issue gift card. Screenshot: `screenshots/12-gift-cards.webp` |
| `/admin/products?c=150002` | Populated Credit Packs list (Single Class £20, 5 Class Pack £80, 10 Class Pack £150) with clear Test Mode / Sandbox Connected messaging; it is nested in Finance rather than a first-class money action. Screenshot: `screenshots/13-products-pricing.webp` |
| Members → search “AI Business Insights” → `/admin/business-insights?c=150002` | Headline KPIs are populated (including £1,066 revenue/net profit and 100% margin). KPI Results uses current values plus target em dashes and a “requires an earlier month” churn state, which reads more like failure than insufficient history. Screenshot: `screenshots/15-ai-bi-kpi-scorecard.webp` |
| AI BI Financials / Cashflow Forecast | P&L revenue is £1,065.96; cashflow summary shows opening cash £0.00, 3-month avg revenue £1,065.96, avg costs £0.00, live revenue/member £532.98. The live chart **does show a readable y-axis** with £4k/£8k/£12k/£16k labels; the prior “no visible y-axis” note was not reproduced on this tip. Screenshot: `screenshots/14-ai-bi-cashflow-axis.webp` |
| `/admin/reporting?c=150002` | Revenue is rounded to £1.1k alongside Active Members 9, Avg. Class Occupancy 3%, Member Retention 33%, and Revenue per Member £118. The figures feel scannable, though a visible period/drill context is weak. Screenshot: `screenshots/16-reporting.webp` |

## Findings

### F-FIN-01 — Payroll KPI tiles and zero-month state
- **Axis:** frictionless / joyful
- **Severity:** confusing
- **Detail:** September KPI cards look like drill targets but clicking tested cards produced no visible route/filter change. Switching to August produces bare £0.00/0 KPIs without a human next step.
- **Suggestion:** make each card a labeled filter link with “View …” and a return path, or remove clickable styling; for an empty month, say “No payroll run for August yet” and point to Run Payroll.
- **Screenshot:** `screenshots/before-finance-august-empty.webp`

### F-FIN-02 — Invoicing route shows Payroll
- **Axis:** obvious
- **Severity:** broken
- **Detail:** `/admin/invoicing` visibly renders Payroll, payroll period controls, Generate Invoices, and Approve Payrun. The URL promise and destination chrome disagree.
- **Suggestion:** point the route at a real invoice workspace, or rename the route/navigation to Payroll; keep heading, tab, and action labels consistent.
- **Screenshot:** `screenshots/before-invoicing-misroute.webp`

### F-FIN-03 — POS Overview and Orders disagree
- **Axis:** obvious / frictionless
- **Severity:** broken
- **Detail:** Overview says Paid orders 0 and Today’s sales £0.00, while Orders visibly lists three paid orders at £20.00 each.
- **Suggestion:** share the same paid-order query and period context; make the KPI say “View 3 paid orders” and land on the matching Orders filter.
- **Screenshots:** `screenshots/before-pos-overview.webp`, `screenshots/before-pos-orders-paid.webp`

### F-FIN-04 — Refund KPIs do not expose drill behavior
- **Axis:** frictionless
- **Severity:** confusing
- **Detail:** Six refund KPI cards look actionable, but the tested click did not filter or navigate. The reliable path is a separate status tab/filter or a small eye icon in the table.
- **Suggestion:** wire cards to status filters with selected state and Clear filter, or style them as static summaries and put “Filter refunds” beside them.
- **Screenshot:** `screenshots/before-refunds-overview.webp`

### F-FIN-05 — BI scorecard makes insufficient history look like failure
- **Axis:** joyful / obvious
- **Severity:** confusing
- **Detail:** KPI Results shows populated current values but target em dashes and red X statuses; Churn says it requires an earlier month with an active member. Headline cards also expose internal-looking target keys such as `totalRevenue`.
- **Suggestion:** use a neutral “Not enough history” state, plain-language labels, and a one-line next step instead of red failure iconography when no baseline exists.
- **Screenshot:** `screenshots/before-ai-bi-kpi-scorecard.webp`

### F-FIN-06 — Daily money paths are buried
- **Axis:** frictionless / joyful
- **Severity:** polish
- **Detail:** Gift Cards and Products are tucked under the expanded Finance navigation instead of being obvious daily money actions. Both pages are usable once found, but discovery depends on knowing the rail or using search.
- **Suggestion:** add a compact Money actions row to Finance hub/rail with Gift Cards, Products, Refunds, and Invoicing plus direct Issue/New/View labels.
- **Screenshots:** `screenshots/before-gift-cards.webp`, `screenshots/before-products.webp`

### Chart-axis verification (not a current defect)
- **Axis:** obvious
- **Severity:** polish (watch item, not a confirmed break)
- **Detail:** Cashflow Forecast on this live tip has visible y-axis labels (£4k, £8k, £12k, £16k), so the prior missing-axis observation was not reproduced. Keep the axis visible at all responsive widths and consider a £0 baseline when opening cash is £0.00.
- **Suggestion:** preserve the axis and add a zero/baseline annotation if the chart scale starts above zero.
- **Screenshot:** `screenshots/14-ai-bi-cashflow-axis.webp`

## Strengths

- Stripe Connect clearly says “Connected and ready” and “Safe Studio sandbox”; the external handoff is explicit.
- Billing cards successfully hand off to Stripe’s sandbox portal; the visible portal states no payment method and no invoice history without forcing a charge.
- Refund table → eye → detail → close is a short, understandable observe-only path.
- Gift Cards has useful totals, status filters, and a warm “Issue gift card” action; Products clearly labels Stripe Test Mode.
- AI BI has jump links across Financials, Cashflow Forecast, and KPI Results, and the live cashflow chart has readable currency ticks.
- No live charge, refund Process, Approve, Connect onboarding submit, Refrm write, or Feature Control toggle was needed.

## Actionable suggestions

1. Fix the invoicing route alias before polishing: URL, page heading, nav label, and primary actions must agree.
2. Reconcile the POS paid-order query and make KPI → filtered Orders a single path.
3. Give every KPI tile one of two honest treatments: actionable drill with return, or clearly static summary.
4. Replace cold zero states and red “failure” icons for no-history states with plain-language next steps.
5. Promote daily money actions in Finance and add period/context labels to Reporting figures.
6. Keep the current cashflow y-axis treatment; add a visible zero baseline/annotation where the scale could mislead.

## Guard confirmation

Observe-only. **No charges** were made; no refund Process/Approve action, Connect onboarding submit, Feature Control toggle, or Refrm write was performed. Stripe TEST/sandbox UI was observed only. No passwords are included in this review.
