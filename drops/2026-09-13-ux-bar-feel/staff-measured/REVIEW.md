# Staff hub — Feel measured review

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13 · **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`  
**Seat:** Admin 2 · Bluebird `c=150002` · observe-only  
**Path hint:** `/admin/staff-hub`

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **48%** | **44%** | **36%** | **43%** |

Previous provisional: 30 / 25 / 35 → **30**. Measured **lifts** hub warmth and orientation; friction is chrome (Unknown name, clipped tabs, dock on rota).

## Plain English

Staff hub is more usable than the L2 FAIL list suggested. Team search, Invite staff, and the onboarding checklist (3 expired / 6 incomplete, 14 members) feel like a real desk. Then a known teacher opens as **Unknown**, profile tabs clip to “Ob”, and the rota grid sits under the bottom dock. Aliases (`/invite-staff`, `/roles`) dump you on hub tabs — fine if expected, confusing if you wanted a dedicated form. Denser than Slack; the next action is usually visible.

## Surfaces walked

| Route | Feel snapshot |
|---|---|
| `/admin/staff-hub` | Checklist + 14-member table; Invite staff obvious |
| `?tab=invitations` | 0 pending / 11 historical; Invite Staff CTA |
| `?tab=roles` | Dense role cards; Create role clear; dock clips |
| `?tab=rota` | Rota Builder + Add Shift; dock sits on the week grid |
| `/admin/invite-staff` | Alias → invitations tab |
| `/admin/roles` | Alias → roles tab |
| `/admin/staff/2160660` | **Unknown** + `helgoiq-bb-teacher-2`; tabs clip to “Ob” |

Screenshots: `feel-measured/staff/`  
Fix candidates: `drops/2026-09-13-ux-bar-feel/staff-measured/FIX_CANDIDATE.md`

## Strengths

1. Onboarding checklist names expired invites and incomplete setups
2. Invite Staff is obvious on Team and Invitations
3. 14-member table with search/role/status
4. Cover/substitutions path no longer missing
5. Role copy explains Owner/Admin/Manager without a blank page

## Findings (measured)

### STF-FEEL-01 — Known teacher shown as Unknown
- **Axis:** joyful / obvious · **Severity:** high
- **Detail:** `/admin/staff/2160660` heading is Unknown for `helgoiq-bb-teacher-2@agentmail.to` (instructor, active).
- **Evidence:** `staff-profile.png`

### STF-FEEL-02 — Profile tabs clip
- **Axis:** frictionless · **Severity:** medium
- **Detail:** Horizontal tab row ends on a cut “Ob” label; remaining tabs are off-canvas with no clear affordance.
- **Evidence:** `staff-profile.png`

### STF-FEEL-03 — Rota grid under the dock
- **Axis:** frictionless · **Severity:** medium
- **Detail:** Bottom Members/Inbox/Timetable dock covers the lower week grid. Add Shift is visible; the week body is cramped.
- **Evidence:** `staff-rota.png`

### STF-FEEL-04 — Invite/roles URLs are aliases
- **Axis:** obvious · **Severity:** low
- **Detail:** `/admin/invite-staff` and `/admin/roles` rewrite to staff-hub tabs. No dedicated invite form.
- **Evidence:** `invite-staff.png`, `roles.png`

## Suggestions

1. Resolve display name from email/roster so profiles never say Unknown
2. Wrap or scroll profile tabs so every label is readable
3. Lift rota content above the dock (or collapse the dock on this tab)
4. Keep aliases, but land `/invite-staff` on an invite composer
5. Re-score after Unknown + clip fixes

## Guards

No invite send · no role save/toggles · no Feature Control toggles · no Platform edits · Bluebird only.

---
*Measured lab pass 2026-09-13 — replaces provisional_from_evidence for this surface.*
