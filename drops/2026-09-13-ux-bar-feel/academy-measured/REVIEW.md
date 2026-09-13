# Academy / LMS — Feel measured review

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13 · **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`  
**Seat:** Admin 2 · Bluebird `c=150002` · observe-only  
**Path hint:** `/admin/academy`

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **42%** | **22%** | **34%** | **33%** |

Previous provisional: 35 / 18 / 30 → **28**. Measured **lifts** the overview warmth a little; obviousness stays crushed by misroutes.

## Plain English

A dedicated Admin 2 walk on tip `6486be87` finds Academy prettier than the L2 provisional implied — green hero, Create a course, clean library empty state — and still not trustworthy. Named URLs do not land on those jobs: class-tags and terms open LMS roles; news opens Content libraries; invites and teachers open Teacher tools with only a 0 Reflections card. Versus WhatsApp or Slack, the next action is often “guess again.”

## Surfaces walked

| Route | Feel snapshot |
|---|---|
| `/admin/academy` | Warm “Build learning people enjoy completing”; Create a course obvious; dock clips lower cards |
| `/admin/academy/courses` | Same overview hero — list action not obvious |
| `/admin/academy/class-tags` | LMS settings / LMS roles — no tag UI |
| `/admin/academy/terms` | Same LMS roles screen |
| `/admin/academy/news` | Content libraries — Add library item, not news |
| `/admin/academy/invites` | Teacher tools / 0 Reflections — no invite list |
| `/admin/academy/teachers` | Same Teacher tools empty |
| `/admin/academy/certificate-design` | Certificates hub; Create certificate clear (not a design editor) |
| `/admin/academy/learners` | Course selector + search; assign flow understandable |
| `/admin/academy/libraries` | Honest empty + Add library item; dock nips the footer |

Screenshots: `feel-measured/academy/`  
Fix candidates: `drops/2026-09-13-ux-bar-feel/academy-measured/FIX_CANDIDATE.md`

## Strengths

1. Editorial green hero and Create a course / Create with AI on overview
2. Libraries empty state is calm and actionable
3. Learners search/assign is readable
4. Certificates cards feel finished
5. No Refrm on these pages

## Findings (measured)

### ACD-FEEL-01 — Named Academy URLs misroute
- **Axis:** obvious · **Severity:** high
- **Detail:** `/class-tags` and `/terms` land LMS roles; `/news` lands Content libraries; `/invites` and `/teachers` land Teacher tools (0 Reflections). Labels lie.
- **Evidence:** `academy-class-tags.png`, `academy-terms.png`, `academy-news.png`, `academy-invites.png`, `academy-teachers.png`

### ACD-FEEL-02 — Bottom dock clips LMS cards
- **Axis:** frictionless · **Severity:** medium
- **Detail:** Fixed Members/Inbox/Timetable dock covers the lower overview/library cards.
- **Evidence:** `academy-overview.png`, `academy-libraries.png`

### ACD-FEEL-03 — Invites/teachers empty of the job
- **Axis:** obvious / joyful · **Severity:** high
- **Detail:** Teacher tools shows a single 0 Reflections tile. No invite list, no roster.
- **Evidence:** `academy-invites.png`, `academy-teachers.png`

## Suggestions

1. Route each Academy URL to the named job (tags, terms, news, invites, teachers)
2. Put an invite list on `/invites` and a roster on `/teachers`
3. Open a design editor on `/certificate-design`, not only the certificates hub
4. Keep the admin shell; lift content above the dock
5. After misroutes clear, re-score obvious upward

## Guards

No course publish · no invite send · no Feature Control toggles · no Platform edits · Bluebird only.

---
*Measured lab pass 2026-09-13 — replaces provisional_from_evidence for this surface.*
