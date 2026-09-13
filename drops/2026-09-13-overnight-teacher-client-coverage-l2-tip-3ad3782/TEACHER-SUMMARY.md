# Teacher hub L2 — overnight 2026-09-13

- **Tip:** `3ad3782443d147934342e08a27d7151133369f74` (confirmed `/api/version` buildToken + releaseSha)
- **Seat:** Teacher3 (`helgoiq-bb-teacher-3@agentmail.to`) · tenant `c=150002` Bluebird only
- **Hub:** teacher (13 routes) · client not walked
- **Evidence:** `coverage/evidence/teacher-*.webp`
- **JSONL:** `coverage/results/teacher-l2.jsonl`
- **CDP:** reused Teacher3 session on :9246 (no Feature Control, no Refrm writes, no GitHub post)

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
| `/teacher/profile` | Profile | **L2_FAIL** | 12/34 KPIs vs home 0; no drill |
| `/teacher/bookkeeping` | Bookkeeping | **L2_PARTIAL** | capture not assigned; submit withheld |
| `/teacher/pay` | Pay | **L2_PARTIAL** | honest empty invoice; tabs unconfirmed |
| `/teacher/pos` | Pos | **L2_PARTIAL** | 3 packs; Single Class picker; no charge |
| `/teacher/calendar` | Calendar | **L2_PARTIAL** | empty Sun 13 Sep; day-strip only |
| `/teacher/performance` | Performance | **L2_PARTIAL** | Vitality 85; Peer tab unconfirmed; AI withheld |
| `/teacher/resources` | Resources | **L2_PARTIAL** | honest empty; search filled |
| `/teacher/subs` | Subs | **L2_PARTIAL** | no cover / no upcoming classes |
| `/teacher` | Teacher | **L2_FAIL** | zeros agree internally; KPI chevrons dead; vs profile 12/34 |
| `/teacher/academy` | Academy | **L2_PARTIAL** | 14 tiles; courses=0; Pricing empty |
| `/teacher/training` | Training | **L2_PASS** | workspace not enabled; Back works |
| `/teacher/safe-studio` | Safe Studio | **L2_PARTIAL** | North selected; 0/0/0; tabs unconfirmed |
| `/staff/cctv` | Cctv | **L2_PARTIAL** | no camera viewing rights |

## Top defects

1. **Figures disagreement — Profile vs Home (highest-value)**  
   `/teacher/profile` ACTIVE CLASSES=12 / WEEKLY HOURS=34 vs `/teacher` HOURS=0.0 this month and Weekly Attendance **0 classes · 0h · £0**. Same seat/tip/tenant.  
   Evidence: `teacher-profile-01-load.webp`, `teacher-home-01-load.webp`.

2. **Home KPI tiles do not drill**  
   EARNED / HOURS / AVG CLASS / MEMBERS show chevrons; click stays on `/teacher?c=150002`.  
   Evidence: `teacher-home-fig-earned-drill.webp`.

3. **Profile KPI tiles do not drill**  
   ACTIVE CLASSES / WEEKLY HOURS click stays on profile.  
   Evidence: `teacher-profile-fig-active-classes.webp`.

## Isolation

- No Refrm URL or control from this Bluebird Teacher3 seat.
- No Refrm branding or Refrm data on any walked teacher page (Bluebird Central / Bluebird North only on Safe Studio and Calendar).
- Shared `localStorage` key names `refrm_cookie_consent` and `refrm_teacher_help_tooltip_seen` persist from earlier sessions — **key-name leftover only**, not a visible tenant leak. Recorded as `isolationNote` on every row.

## Guards kept

- Bluebird `c=150002` only
- No Feature Control / settings writes
- POS/bookkeeping/calendar creates cancelled or withheld
- No passwords in notes/jsonl
- Client hub not walked
- No GitHub post
