# Finance / payments UI

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13 · **Tip:** `6486be87a688…`  
**Path hint:** `/admin/finance-hub`  
**Scores:** joyful **58%** · obvious **47%** · frictionless **49%** · overall **51%**

## Plain English

Measured live on tip `6486be87` as Admin 2 Bluebird (observe-only). Calm visual system and strong Stripe Connect “Connected and ready / Safe Studio sandbox” language, but money ops still sit below a WhatsApp/Slack bar: numbers often do not lead to the next action. Invoicing URL lands on Payroll; POS Overview shows 0 paid orders while Orders lists three paid £20 sales; several KPI tiles look clickable but do not drill. Empty August payroll is clean but cold (£0.00 with no invite). Cashflow chart **does** show a readable y-axis live (prior missing-axis note not reproduced). Gift Cards and Products are usable once found but buried in the Finance rail.

Canonical review: `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/finance/REVIEW.md`  
Fix candidates (UI only): `…/FIX_CANDIDATE.md` · before shots under `…/screenshots/before-*.webp`

## Strengths

- Stripe Connect status language is reassuring (sandbox / connected)
- Billing cards open Stripe TEST hosted sessions (observe-only)
- Gift Cards and Products lists are populated and clear once reached
- Cashflow forecast y-axis readable (£4k–£16k labels)
- Refund row eye-icon detail is usable (closed without action)

## Findings (summary)

| ID | Axis | Severity | Issue |
|---|---|---|---|
| F-FIN-01 | frictionless / joyful | confusing | Payroll KPI tiles do not drill; empty August is cold zeros |
| F-FIN-02 | obvious | broken | `/admin/invoicing` renders Payroll |
| F-FIN-03 | obvious / frictionless | broken | POS Overview 0 paid vs Orders 3×£20 |
| F-FIN-04 | frictionless | confusing | Refund KPI cards do not filter/drill |
| F-FIN-05 | joyful / obvious | confusing | BI scorecard treats “not enough history” like failure |
| F-FIN-06 | frictionless / joyful | polish | Gift Cards / Products buried in Finance rail |

## Suggestions

- Wire every finance/POS/refund KPI to a labeled filter with return, or drop clickable styling
- Fix invoicing alias so URL and heading match
- One paid-order query + period label across POS Overview and Orders
- Neutral “not enough history” for BI targets (no red X / `totalRevenue` keys)
- Finance hub “Money actions” row: Gift Cards, Products, Refunds, Invoices
- Empty payroll month: “No run yet — Run Payroll” CTA

---
*Measured live 2026-09-13 · tip `6486be87…` · no Stripe charges · no Feature Control · no Refrm writes · no Platform edits (cloud agent owns PRs).*
