# Safe Studio hub — Coverage L2 summary

- Stamp: `6486be87a68821e383d36d5246f9da08a802ee59`
- Seat: Admin 2 · Bluebird `c=150002`
- Routes: **26 unique** · **L2_PASS 2 · L2_PARTIAL 19 · L2_FAIL 5 · BLOCKED 0**
- Results: `results/census-longtail-l2.jsonl` (staff 27 + safe-studio 26 = 53)
- Evidence: `evidence/census-longtail-l2/`
- Tenant: Bluebird TEST DATA only; no Refrm; no CCTV/door/kiosk/settings saves; no unlock/lockdown

## Unique defects

1. **Safe Studio overview tiles do not drill** — `/admin/safe-studio`  
   Checks 0 / Equipment 0 / Open faults **1** / Open incidents **1** are not clickable.  
   **Agreement holds:** `/admin/safe-studio/operations` drills to named records — fault `QA TEST - ignore - loose mat corner`, incident `QA Bluebird Tester`.

2. **Security Hub / Dashboard KPI cards do not drill** — `/admin/security-hub`, `/admin/security-dashboard`  
   Score 100 / Pending 0 / Active Cameras 0 / Escalated 0. Cameras 0 agrees with Camio unconfigured.

3. **Door Access log KPIs do not drill** — `/admin/door-access`  
   Total Today / Granted / Denied all 0.

4. **Door Access Analytics KPIs do not drill** — `/admin/door-access/report`  
   Scans/Granted/Denied/Unique members all 0; chart honest empty.

## PASS

- `/admin/cctv-hub` — all six tabs; honest “No camera viewing rights assigned.”
- `/admin/camio-live` — all five tabs + filters; honest “Camio is not configured.”

## Notes

- Most PARTIALs are write-guarded (scan, new rule, kiosk create, Camio integration switch, Safe Studio writes) or honest empties.
- `/admin/cctv` is a thinner twin of cctv-hub Viewer.
- `/admin/security-dashboard` is an orphan twin of security-hub Dashboard.
- Team activity “8 permitted team” at Central vs Staff hub 14 company-wide is location-scoped.
