# Members & CRM

**Basis:** `provisional_from_evidence` · **Confidence:** medium · **Scored:** 2026-09-13 · **Tip:** `6486be87a688…`  
**Path hint:** `/admin/crm-hub`

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **40%** | **38%** | **42%** | **40%** |

## Plain English

Provisional from core L2 Members: 3 PASS / 1 PARTIAL / 1 FAIL. crm-hub KPI vs empty Insights disagreement — you cannot trust the number you see. Dataset canary still 0 members on import, so empty states dominate.

**Evidence note:** dashboard censusCoreL2Members: 3 PASS / 1 PARTIAL / 1 FAIL (crm-hub KPI vs empty Insights). Dataset canary 0 members.

## Strengths

- Several member paths L2 PASS
- Member preview/forms path works in Forms E2E

## Suggestions

- Fix CRM Insights empty vs hub KPI disagreement
- Empty Insights: invite copy + link to import / add member
- Align member counts across hub tiles and list
- One path to Add member from every Members entry point
- Don't show money/CRM KPIs that don't drill

---
*Provisional — not a dedicated UX lab pass. Re-score when L2 defects clear.*
