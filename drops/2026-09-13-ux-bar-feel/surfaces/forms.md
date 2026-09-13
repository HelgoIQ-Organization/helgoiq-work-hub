# Forms / QR / waivers

**Basis:** `provisional_from_evidence` · **Confidence:** medium · **Scored:** 2026-09-13 · **Tip:** `6486be87a688…`  
**Path hint:** `/admin/forms`

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **42%** | **38%** | **35%** | **38%** |

## Plain English

Provisional from Forms+QR E2E: contact builder PASS; QR generation PASS; public QR destination FAIL (Loading payment… then blank). Waiver type not present. Physical phone scan blocked. Destination mismatch tanks obvious+frictionless.

**Evidence note:** forms-pass-qr-dest-fail tip a263c4ab; later matrices on a73ff70 still show QR kind / public fails. Tip at score uses hub live tip for board currency; evidence spans a263c4ab–a73ff70.

## Strengths

- Admin create/edit/preview/submit contact form PASS
- QR create under Bluebird PASS

## Suggestions

- Fix public /q/… destination — must open the linked form, not payment loader
- Offer waiver form type in builder
- Empty forms list: start from template (contact / waiver / intake)
- After QR create, show scan preview that matches public URL
- Phone: form fill without chrome covering submit

---
*Provisional — not a dedicated UX lab pass. Re-score when L2 defects clear.*
