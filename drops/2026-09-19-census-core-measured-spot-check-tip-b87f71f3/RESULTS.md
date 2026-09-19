# RESULTS — Census Core measured spot-check

- **tip:** `b87f71f3ca13261731b4e6237195d5cee655db06` (confirmed `/api/version` at start **and** end; tip did **not** move)
- **seat:** Admin 2 `helgoiq-bb-admin-2@agentmail.to`
- **tenant:** Bluebird `c=150002` only · Refrm read-only · no Feature Control · no Stripe charges · no import/rollback · observe-first
- **env:** https://lobster-app-662c7.ondigitalocean.app
- **when:** 2026-09-19 ~19:08–19:20 Europe/Athens (UTC+3)
- **evidence root:** `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/census-core/`

## Surface table

| surface | verdict | why | evidence |
|---|---|---|---|
| `/admin/members` | **PASS** | Invitations compact/secondary (`1 pending · 13 historical` + Show). Member list primary first paint; **177 total members** with table rows. Bluebird only; no Refrm. | `evidence/admin-members.webp` |
| `/admin/directory` | **PASS** | Opens real member/people list (177 rows), not unavailable. | `evidence/admin-directory.webp` |
| `/admin/crm-hub` | **PASS** | Tabs work. **AI Performance Intelligence** KPIs Total/New/Actioned/Critical = 10/10/0/3 agree with insight list + filters. | `evidence/admin-crm-hub.webp` |
| `/admin/crm` | **PASS** | Pipeline search + opened lead **Bluebird Member A** (`/admin/crm/lead/8`). | `evidence/admin-crm.webp` |
| `/admin/member-feedback` | **PASS** | Loads; filters present; honest empty/config messaging. | `evidence/admin-member-feedback.webp` |
| Overview ↔ members | **PASS** | Overview **177 Members** matches `/admin/members` **177 total members**. | `evidence/overview-members-crosscheck.webp` |
| `/admin/timetable` | **PASS** | List/Calendar views; occupancy **0/10 = 0%** matches Avg Fill Rate **0%**. Cover honest: **Open Cover Requests 2 / TBC** (not false “all covered”). Drill+return OK. Extra: `evidence/admin-timetable-cover.webp` | `evidence/admin-timetable.webp` |
| `/admin/appointments-hub` | **PASS** | Primary tabs (Calendar/Types/Staff Availability/Policies/Insights); search/filter; honest empty “No appointment types yet”. | `evidence/admin-appointments-hub.webp` |
| `/admin/staff-hub` | **PARTIAL** | Team list self-consistent (**181 of 181**); onboarding banners agree (1 pending / 3 expired / 7 incomplete). Roster mixes instructors with seeded **member**-role people, so Team ≠ clean employment headcount. | `evidence/admin-staff-hub.webp` |
| `/admin/staff/substitutions` | **PASS** | Cover Requests loads; Refresh + Filters; KPIs 1/0/1/0; cover row visible. | `evidence/admin-staff-substitutions.webp` |

## Counts

- **PASS:** 9
- **PARTIAL:** 1
- **FAIL:** 0

## Notes

- No creates/sends committed; observe-first.
- No Refrm tenant leak observed on these surfaces.
- Timetable cover UX in this tip shows **TBC / Open Cover Requests** rather than the historical “all covered” vs “Assign instructor” contradiction.
