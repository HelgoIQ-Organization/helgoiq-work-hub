# Client hub L2 — overnight-pack 2026-09-15 (Census Core)

- **Tip (live / primary stamp):** `ac845589404b78c308cc30e5aee81eb9e648a220` — confirmed via `/api/version` at walk start and again at report time (buildToken + releaseSha). JSONL `stamp` = this tip.
- **Dispatch tip (programme note):** `e3ba86e851ff268ad439041a193feb3f742c03ed` — recorded as `dispatchTip` on every JSONL row; Teacher L2 earlier stamped this tip before live drift.
- **Seat:** Member B (`helgoiq-bb-member-b@agentmail.to`) · Agentmail password seat · tenant `c=150002` Bluebird only · **never** `declaneryan71+bbteacher`
- **Hub:** client (**21** routes) · teacher not re-walked
- **Evidence:** `coverage/evidence/client/*.webp` (122 shots)
- **JSONL:** `coverage/results/client-l2.jsonl`
- **Method:** Playwright `connect_over_cdp` :9262 + CDP `Page.captureScreenshot` · observe-first; Stripe/checkout cancelled; writes withheld

## Counts

| Verdict | n |
|---|---|
| L2_PASS | 0 |
| L2_PARTIAL | 21 |
| L2_FAIL | 0 |
| BLOCKED | 0 |
| **Total** | **21** |

## Per-route

| Route | Title | Verdict | Notes |
|---|---|---|---|
| `/?view=client` | Client Home | **L2_PARTIAL** | I080 PASS Welcome to Bluebird (not REFRM); CREDITS REMAINING=**8**; membership **Bluebird 8**; Book/Buy/Profile/Help + Timetable/Wallet links exercised; Buy checkout opened+cancelled; TOP UP / Find a Timeslot / Share Feedback left |
| `/profile` | Profile | **L2_PARTIAL** | PREMIUM MEMBER BB Member B; Calendar / Payment Methods (checkout cancelled) / Related Contacts / Credits Wallet / Contact Studio exercised; Edit/Settings labels not found; Sign Out skipped |
| `/profile/calendar` | Calendar | **L2_PARTIAL** | Waitlist link exercised; Today/Week/Month/List named controls not found; empty-ish calendar chrome |
| `/recovery` | Recovery | **L2_PARTIAL** | Recovery Services / Book a Session surface; few primary tabs exercised; empty upcoming sessions |
| `/related-contacts` | Related Contacts | **L2_PARTIAL** | Honest empty: No related contacts; How it works copy; Invite/save withheld |
| `/payments` | Payments | **L2_PARTIAL** | History/methods partial; Pay now / add card withheld — charge |
| `/purchase` | Purchase | **L2_PARTIAL** | Catalog: No membership tiers / No class packs configured yet; Recovery & Private + Wallet Top-up sections present; Checkout/Buy withheld |
| `/wallet?tab=credits` | Wallet Credits | **L2_PARTIAL** | I083: CREDIT BALANCE **8** (= home); Credits/History tabs; pack prices £20/£80/£150 observe-only (no drill); Buy credits withheld |
| `/bookings` | Bookings | **L2_PARTIAL** | I082: Upcoming (0) / Past (0) honest empty; tabs exercised; Book/cancel confirm withheld |
| `/my-appointments` | My Appointments | **L2_PARTIAL** | Upcoming/Past/Book controls exercised; book confirm withheld |
| `/waitlist` | Waitlist | **L2_PARTIAL** | Active/History partial; join/leave withheld |
| `/schedule` | Schedule | **L2_PARTIAL** | I081: Member Schedule week nav (Previous/Next week) + CLASSES; Bluebird studio feed; Book confirm withheld |
| `/timetable` | Timetable | **L2_PARTIAL** | I081: same week nav pattern as schedule; Waitlist link; Book confirm withheld |
| `/training` | Training | **L2_PARTIAL** | Sparse primary controls; courses/modules not fully exercised |
| `/my-retreats` | My Retreats | **L2_PARTIAL** | Empty/upcoming sparse; Book retreat withheld |
| `/lifetime` | Lifetime | **L2_PARTIAL** | Overview/history sparse exercise |
| `/local-perks` | Local Perks | **L2_PARTIAL** | Empty/available filters partial; Redeem withheld |
| `/milestones` | Milestones | **L2_PARTIAL** | 0 CLASS CLUB next milestone context from home; filters sparse |
| `/referrals` | Referrals | **L2_PARTIAL** | Share/History partial; Send invite withheld |
| `/access-pass` | Access Pass | **L2_PARTIAL** | Show pass / Refresh sparse |
| `/insights` | Insights | **L2_PARTIAL** | Overview/Attendance/Progress labels attempted; often overlays home chrome; incomplete figure drill |

## Top defects / findings

1. **Purchase catalog empty for memberships/packs (studio config)**  
   `/purchase` shows **No membership tiers configured yet** and **No class packs configured yet** while wallet still offers Single/5/10 Class Pack prices (£20 / £80 / £150). Same Member B / `c=150002` / tip `ac845589`. Agreement worth watching (shop vs wallet).  
   Evidence: `evidence/client/client-purchase-01-load.webp`, `evidence/client/client-wallet-01-load.webp`.

2. **Wallet pack price tiles do not drill**  
   £20.00 / £80.00 / £150.00 clicks stay on wallet (observe-only; no underlying data view). Contributes to L2_PARTIAL on figures criterion.  
   Evidence: `evidence/client/client-wallet-fig-*.webp` (if present) + load shot.

3. **Calendar named view controls missing**  
   `/profile/calendar` Today/Week/Month/List labels not found as primary controls — only Waitlist navigation exercised.  
   Evidence: `evidence/client/client-calendar-01-load.webp`.

4. **No L2_FAIL criteria hits this tip**  
   No blank crash pages; no Refrm visible tenant leak; checkouts cancelled without charge.

## Isolation (I080–I083 re-score under Bluebird)

| ID | Surface | Result |
|---|---|---|
| **I080** | Client Home | **PASS** — `Welcome to Bluebird Pilates — TEST DATA (fabricated)`; membership **Bluebird 8**; CREDITS REMAINING **8**. Not Welcome to REFRM. Reformer = apparatus class-type, not Refrm tenant. |
| **I081** | Schedule / Timetable | **PASS** — Member Schedule under Bluebird; no Refrm Letchworth/Stevenage / Refrm studio chrome. |
| **I082** | Bookings | **PASS** — My Bookings Upcoming(0)/Past(0) for Member B; no Refrm activity feed. |
| **I083** | Wallet | **PASS** — Credits balance **8** under Bluebird; pack labels are Single/5/10 Class Pack (not Refrm Subscriber Top-Up / QA Test Pack / 3 Class Pack / 20 Class Pack). |

- No Refrm URL or Refrm control from this Bluebird Member B seat on any walked client route → **no isolation FAIL**.
- Shared `localStorage` key names `refrm_cookie_consent`, `refrm_member_help_tooltip_seen`, `refrm_member_walkthrough_completed` persist — **key-name leftover only**, not visible tenant data. Recorded as `isolationNote` on every row.

## Agreement (credits)

| Page | Fact | Value |
|---|---|---|
| `/?view=client` | CREDITS REMAINING | **8** |
| `/wallet?tab=credits` | CREDIT BALANCE | **8** |
| Membership chrome | CURRENT MEMBERSHIP | **Bluebird 8** |

Home ↔ wallet credits **agree** on tip `ac845589`.

## Guards kept

- Bluebird `c=150002` only · Refrm observe-only (no Refrm UI exercised)
- No Feature Control / settings toggles
- Stripe checkout opened only to cancel (Buy / Payment Methods)
- No passwords in notes/jsonl/CLIENT-L2.md
- Teacher hub not re-walked
- No GitHub post

_Generated 2026-09-15T09:03:00Z UTC (Europe/Athens EEST +3 → 12:03)._
