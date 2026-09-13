# Members & CRM

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13  
**Tip:** `6486be87a68821e383d36d5246f9da08a802ee59` · Seat Admin2 · `?c=150002`  
**Paths:** `/admin/crm-hub`, `/admin/crm`, `/admin/members`, `/admin/crm/lead/14`, `/admin/directory`

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **48%** | **36%** | **40%** | **41%** |

## Plain English

Measured Admin2 Bluebird walk. CRM Pipeline shows **10** human lead cards with loud **+ Add Lead** and search; Members shows **11** with invitations and **+ Add Member**; lead detail is usable. Trust cracks: sidebar **Directory** dead-ends “unavailable”; Overview **—** vs Members **11**; people list buried under invitations/KPIs. Stronger bones than Home — not WhatsApp-member-finder yet. L2 KPI-vs-empty Insights **did not reproduce** (list populated).

## Source

Canonical: `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/members-crm/REVIEW.md`  
FIX candidates: `FIX_CANDIDATE-M-F001-directory-unavailable.md`, `M-F002-count-disagree.md`, `M-F003-list-buried.md`

## Strengths

- Pipeline lead cards feel human (avatar + source + timestamp)
- + Add Lead / + Add Member high-contrast on primary hubs
- Lead detail Convert + timeline + back works
- Member rows show status and home studio

## Findings

### M-F001 — Directory → unavailable
- **Axis:** frictionless · **Severity:** broken
- **Detail:** `/admin/directory` is “This admin page is unavailable”.
- **Suggestion:** Retarget to `/admin/members` or remove pin.

### M-F002 — Overview — vs Members 11
- **Axis:** obvious · **Severity:** broken
- **Detail:** Cross-surface member count disagree.
- **Suggestion:** One source of truth; Overview tile drills here.

### M-F003 — People list buried
- **Axis:** joyful · **Severity:** confusing
- **Detail:** Invitations + KPI stack eat first viewport.
- **Suggestion:** People list first (avatar + last activity).

## Suggestions

1. Fix Directory route (M-F001)
2. Align Overview aggregate with Members (M-F002)
3. Promote human rows above invitations (M-F003)
4. Keep AI Performance KPI↔list contract; clarify Insights naming
5. One-path Add Member from every entry
