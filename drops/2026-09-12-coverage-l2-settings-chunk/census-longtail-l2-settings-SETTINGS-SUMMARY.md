# Settings chunk — Coverage L2 summary

- Stamp: `6486be87a68821e383d36d5246f9da08a802ee59`
- Seat: Admin 2 · Bluebird `c=150002`
- Routes: **18** · **3 PASS · 13 PARTIAL · 1 FAIL · 1 BLOCKED**
- Results: `results/census-longtail-l2-settings.jsonl`
- Evidence: `evidence/census-longtail-l2-settings/`

## Defects

1. **Feature Management shows a Refrm-named feature on Bluebird** — `/admin/feature-management`  
   Search `Refrm` → 1 of 241: **Refrm Academy — Learning** (`academy.learning`, Core, Active). Session stayed `c=150002`. Toggle not flipped.  
   Evidence: `feature-management-refrm-search.png`.

## BLOCKED

- `/admin/platform-sales` — Platform Admin Access Required (not FAIL).

## Notes

- Academy import / import-content / import-students are the same surface (Courses 1/13, Enrollments 0/21, content-not-fully-loaded banner).
- Observe-only throughout: no Feature Control toggles, no GDPR export/delete, no migration/import/wizard complete, no Meta connect.
