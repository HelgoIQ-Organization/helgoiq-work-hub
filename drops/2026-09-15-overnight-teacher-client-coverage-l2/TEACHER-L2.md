# Teacher hub L2 — overnight-pack 2026-09-15 (Census Core)

- **Tip (programme / stamp):** `e3ba86e851ff268ad439041a193feb3f742c03ed` — confirmed via `/api/version` at walk start (buildToken + releaseSha).
- **Tip drift note:** After the walk completed, live `/api/version` returned `ac845589404b78c308cc30e5aee81eb9e648a220` and the UI showed “HelgoIQ update ready”. Results remain stamped to the programme tip `e3ba86e8…` confirmed at start.
- **Seat:** Teacher2 (`helgoiq-bb-teacher-2@agentmail.to`) · OTP via Agentmail · tenant `c=150002` Bluebird only
- **Hub:** teacher (13 routes) · **client not walked**
- **Evidence:** `coverage/evidence/teacher/*.webp`
- **JSONL:** `coverage/results/teacher-l2.jsonl`
- **Method:** Playwright connect_over_cdp :9280 + CDP `Page.captureScreenshot` · observe-first; writes cancelled/withheld

## Counts

| Verdict | n |
|---|---|
| L2_PASS | 1 |
| L2_PARTIAL | 10 |
| L2_FAIL | 2 |
| BLOCKED | 0 |
| **Total** | **13** |

## Per-route

| Route | Title | Verdict | Notes |
|---|---|---|---|
| `/teacher` | Teacher | **L2_FAIL** | home KPI earned=£0 hours=1.7 avg=0.5 members=1; weekly_attendance=0 classes · 0h · £0; honest empty upcoming classes; KP |
| `/teacher/profile` | Profile | **L2_FAIL** | profile ACTIVE_CLASSES=12 WEEKLY_HOURS=34; KPI tiles click stay on profile (no drill); AGREE FAIL vs /teacher home HOURS |
| `/teacher/calendar` | Calendar | **L2_PARTIAL** | empty Tue 15 Sep; prev/next week exercised; Today/Week/Month/Day/List labels not found as named controls |
| `/teacher/bookkeeping` | Bookkeeping | **L2_PARTIAL** | Receipt control exercised; Submit receipt withheld — write; Receipt control exercised; Submit receipt withheld |
| `/teacher/pay` | Pay | **L2_PARTIAL** | Current Month + History tabs open+cancel; Expenses/Billing Setup/Documents not fully exercised |
| `/teacher/pos` | Pos | **L2_PARTIAL** | POS Bluebird Central; Available Packs=0; Active Clients=11; 'No packs for this studio'; New Sale + Single Class exercise |
| `/teacher/performance` | Performance | **L2_PARTIAL** | Peer Benchmarks tab exercised; 7d/30d/90d + GENERATE AI REPORT not fully exercised / generate withheld; performance scor |
| `/teacher/resources` | Resources | **L2_PARTIAL** | All filter exercised; search field not found as button; empty/resources list state observed |
| `/teacher/subs` | Subs | **L2_PARTIAL** | no primary cover/request controls exercised; Refresh/Help chrome residual |
| `/teacher/academy` | Academy | **L2_PARTIAL** | Pricing tile → /teacher/academy/pricing; many academy tiles left unexercised |
| `/teacher/training` | Training | **L2_PASS** | Training workspace is not enabled — honest empty/disabled beta for this studio; Back to teacher dashboard → /teacher wor |
| `/teacher/safe-studio` | Safe Studio | **L2_PARTIAL** | Bluebird North selected; Alerts/Checks/Check history/Incidents navigated; Documents/Overview not found as labels |
| `/staff/cctv` | Cctv | **L2_PARTIAL** | honest empty/permission: No camera viewing rights assigned; All locations filter exercised |

## Top defects

1. **Figures disagreement — Profile vs Home (highest-value)**  
   `/teacher/profile` ACTIVE CLASSES=**12** / WEEKLY HOURS=**34** vs `/teacher` HOURS=**1.7** this month and Weekly Attendance **0 classes · 0h · £0** (EARNED £0 / AVG CLASS 0.5 / MEMBERS 1). Same Teacher2 seat / `c=150002` / programme tip stamp.  
   Evidence: `evidence/teacher/teacher-profile-01-load.webp`, `evidence/teacher/teacher-home-01-load.webp`.

2. **Home KPI tiles do not drill**  
   HOURS / AVG CLASS / MEMBERS click stays on `/teacher?c=150002` (no underlying data view).  
   Evidence: `evidence/teacher/teacher-home-fig-hours-nodrill.webp` (+ avg-class / members).

3. **Profile KPI tiles do not drill**  
   ACTIVE CLASSES / WEEKLY HOURS click stays on profile.  
   Evidence: `evidence/teacher/teacher-profile-fig-active-classes.webp`, `teacher-profile-fig-weekly-hours.webp`.

## Isolation

- No Refrm URL or Refrm control from this Bluebird Teacher2 seat on any walked teacher route.
- Visible tenant chrome is Bluebird (Bluebird Pilates / Bluebird Central / Bluebird North).
- Shared `localStorage` key names `refrm_cookie_consent` and `refrm_teacher_help_tooltip_seen` persist — **key-name leftover only**, not a visible tenant leak. Recorded as `isolationNote` on every row.

## Guards kept

- Bluebird `c=150002` only
- No Feature Control / settings toggles
- POS charges / bookkeeping submit / destructive writes cancelled or withheld
- No passwords in notes/jsonl
- Client hub not walked
- No GitHub post

_Generated 2026-09-15T08:55:34Z UTC (Europe/Athens +3)._
