# Long-tail chunk 1 — Academy + AI (30)

- Stamp: `6486be87a68821e383d36d5246f9da08a802ee59`
- Seat: Admin 2 · Bluebird `c=150002`
- Routes: **30** · **6 PASS · 16 PARTIAL · 8 FAIL · 0 BLOCKED**
- File: `results/census-longtail-l2-settings.jsonl` (48 total with Settings 18)
- Evidence: `evidence/census-longtail-l2-settings/`

## FAIL misroutes

| Route | Lands on |
|---|---|
| `/admin/academy/class-tags` | LMS settings |
| `/admin/academy/terms` | LMS settings |
| `/admin/academy/news` | Content libraries |
| `/admin/academy/invites` | Teacher tools (not an invite list) |
| `/admin/academy/certificate-design` | Certificates hub (no design editor) |
| `/admin/academy/course-groups` | LMS Overview |
| `/admin/academy/course-recordings` | Content libraries |
| `/admin/academy/exercises` | Content libraries |

`/admin/academy/teachers` now lands Teacher tools (Teachers tab). L1 overview misroute not repeated — PARTIAL.

## PASS

`/admin/academy/courses` (Preview QA Overnight Course + return), financials, pricing, reflections, `/admin/ai-governance`, `/admin/ai-usage`.

## Notes

Observe-only: no publish, invite send, Stripe, Feature Control. No Refrm on these pages.
