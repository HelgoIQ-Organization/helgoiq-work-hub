# Finance feel-measured fix candidates

Basis: live observe-only review on tip `6486be87a68821e383d36d5246f9da08a802ee59`; seat Admin2 Bluebird; scored 2026-09-13. UI copy/layout only. No Stripe charge, Feature Control toggle, Refrm write, or code change was made.

## FIX-FIN-01 — Make finance KPI cards honest and actionable
- Surface/route: `/admin/finance-hub?c=150002` (Run Payroll, September and empty August).
- What feels wrong: Total Payroll, Staff Members, Pending Review, Approved, and Paid look like tiles but clicking them does not drill or change the list; August renders bare £0.00/0 metrics with no welcoming next step.
- Axis: frictionless / joyful.
- Proposed fix: either make each tile a labeled filter link with a visible “View …” affordance and a return path, or remove hover/card affordance; for zero months use friendly copy such as “No payroll run for August yet — choose Run Payroll” beside the zero values.
- Before screenshot: `screenshots/before-finance-august-empty.webp` (source `screenshots/03-finance-august-empty.webp`).
- Tip: `6486be87…`; seat: Admin2 Bluebird.

## FIX-FIN-02 — Align invoicing route and destination
- Surface/route: `/admin/invoicing?c=150002`.
- What feels wrong: URL and expected destination promise invoicing, but page chrome says Payroll and shows payroll period, payroll KPIs, and Approve Payrun.
- Axis: obvious.
- Proposed fix: route `/admin/invoicing` to an actual invoice workspace, or rename the destination and navigation label to Payroll; add a short “You are in …” heading that matches the URL.
- Before screenshot: `screenshots/before-invoicing-misroute.webp` (source `screenshots/09-invoicing-payroll-misroute.webp`).
- Tip: `6486be87…`; seat: Admin2 Bluebird.

## FIX-FIN-03 — Reconcile POS Overview and Orders figures
- Surface/route: `/admin/pos-hub?c=150002` Overview → Orders.
- What feels wrong: Overview reports Paid orders 0 and Today’s sales £0.00, while Orders visibly lists three paid orders at £20.00 each.
- Axis: obvious / frictionless.
- Proposed fix: use one shared paid-order data definition and period label; add “View 3 paid orders” on the KPI and show the same period/filter context on Orders. If Overview is intentionally empty, explain why beside the metric.
- Before screenshots: `screenshots/before-pos-overview.webp` and `screenshots/before-pos-orders-paid.webp` (sources `screenshots/04-pos-overview.webp`, `screenshots/05-pos-orders-paid.webp`).
- Tip: `6486be87…`; seat: Admin2 Bluebird.

## FIX-FIN-04 — Make refund KPIs drillable or visibly static
- Surface/route: `/admin/refunds?c=150002`.
- What feels wrong: Total Requests, Refunded Amount, Pending, Completed, Rejected, and Failed look like KPI controls, but a click did not filter or navigate; the useful path is hidden in tabs and eye icons.
- Axis: frictionless.
- Proposed fix: make each KPI a filter link to the matching status tab/filter, with a selected-state and “Clear filter”; if static, use non-card styling and a nearby “Filter refunds” control.
- Before screenshot: `screenshots/before-refunds-overview.webp` (source `screenshots/10-refunds-overview.webp`).
- Tip: `6486be87…`; seat: Admin2 Bluebird.

## FIX-FIN-05 — Replace ambiguous BI empty/target states
- Surface/route: `/admin/business-insights?c=150002` KPI Results / Headline KPIs.
- What feels wrong: Scorecard statuses show red X icons and target em dashes for otherwise populated current metrics; Churn says it requires an earlier month, while headline cards expose internal-looking target keys such as `totalRevenue`. This reads as failure rather than “not enough history”.
- Axis: joyful / obvious.
- Proposed fix: distinguish “no baseline yet” from “missed target” with a neutral state, plain-language target labels, and one-line next-step copy (“Choose an earlier month with an active member”).
- Before screenshot: `screenshots/before-ai-bi-kpi-scorecard.webp` (source `screenshots/15-ai-bi-kpi-scorecard.webp`).
- Tip: `6486be87…`; seat: Admin2 Bluebird.

## FIX-FIN-06 — Bring daily money paths forward
- Surface/route: Finance navigation → `/admin/gift-cards` and `/admin/products`.
- What feels wrong: Gift Cards and Products are nested in the expanded Finance rail and are not first-class daily money actions; search finds AI BI, but common selling paths require knowing the navigation tree.
- Axis: frictionless / joyful.
- Proposed fix: add Gift Cards, Products, Refunds, and Invoicing to a compact “Money actions” group or Finance hub action row, with warm empty/list copy and direct “Issue”, “New product”, or “View” labels.
- Before screenshots: `screenshots/before-gift-cards.webp` and `screenshots/before-products.webp` (sources `screenshots/12-gift-cards.webp`, `screenshots/13-products-pricing.webp`).
- Tip: `6486be87…`; seat: Admin2 Bluebird.
