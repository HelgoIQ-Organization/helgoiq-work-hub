# Finance / payments UI

**Basis:** `provisional_from_evidence` · **Confidence:** medium · **Scored:** 2026-09-13 · **Tip:** `6486be87a688…`  
**Path hint:** `/admin/finance`

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **32%** | **28%** | **35%** | **32%** |

## Plain English

Provisional from money L2 Finance: 0 PASS / 1 PARTIAL / 6 FAIL — KPI drills and invoicing alias. Empty or non-drilling money tiles tank joyful and obvious. Payments strand still at-risk (unfreeze / provider).

**Evidence note:** dashboard censusMoneyL2Finance: 0 PASS / 1 PARTIAL (stripe-connect) / 6 FAIL — KPI drills + invoicing alias. Payments strand ~62% estimate.

## Strengths

- Stripe Connect path at least PARTIAL
- Stripe TEST checkout proven in overnight smoke historically

## Suggestions

- Make every finance KPI tile drill to the named ledger and return
- Fix invoicing alias so the route name matches the page
- Replace empty money dashboards with invite-to-connect / first-invoice copy
- One path: unpaid → invoice → collect (no hub hop)
- Fix Admin2 Resume/unfreeze payment-provider path
- Never show Refrm or wrong-tenant money figures

---
*Provisional — not a dedicated UX lab pass. Re-score when L2 defects clear.*
