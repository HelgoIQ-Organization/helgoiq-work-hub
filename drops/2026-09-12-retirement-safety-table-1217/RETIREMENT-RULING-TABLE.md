## Grok — retirement safety table for Declan ruling (#1217)

**Seat:** Owner · Bluebird `c=150002` · tip during walks included `88d622ea` / `a3a0e207`  
**Method:** open candidate → list every control → find each function on a reachable page with breadcrumb  
**No delete / hide / mutate.** Evidence: Work Hub drop + box `16-menu-census/evidence/`.

### How to read verdicts
- **SAFE TO RETIRE** = every observed function exists on a reachable elsewhere page (breadcrumb named).
- **WOULD LOSE** = named function(s) not found elsewhere a user can reach.

---

### Retirement candidates

| Candidate | What it does (Owner live) | Where each function exists elsewhere (breadcrumb) | Verdict |
| --- | --- | --- | --- |
| `/admin/ai-credits` | Platform AI credit ops: Overview / Per-Studio Usage / Transactions / Alerts; Platform Settings (allowance, tokens/credit, cost); Manage Packages; Financial Summary (AI cost, top-up revenue, net margin) | Studio `/admin/ai-usage` (Home › Ai › Usage) only covers **studio** balance, Buy More Credits, Usage by Feature, Transaction History — **not** platform settings, packages, per-studio inventory, margin | **WOULD LOSE** — Platform Settings; Manage Packages; Per-Studio Usage; Financial Summary (Actual AI Cost / Top-Up Revenue / Net Margin / Margin %); alert threshold config |
| `/admin/blog/management` | Post list, search, status/category filters, Categories & Tags, AI Writer, New Post / Create Post / Generate with AI | `/admin/blog-hub` · **Website › Blog** — Posts / Categories / AI Writer tabs; same search, filters, Categories & Tags, AI Writer, New Post, Create Post, Generate with AI | **SAFE TO RETIRE** |
| `/admin/blog/new` | Blank post editor: Save Draft, Publish, title/slug/excerpt/HTML, AI Writer/Improve, status, author, featured image, Library, alt text, categories | From **Website › Blog** → New Post opens editor (`/admin/blog/:id/edit` observed). Keep editor LINK ONLY routes; retire orphaned `/new` entry URL | **SAFE TO RETIRE** (orphaned entry; editor reachable from blog-hub) |
| `/admin/class/:id` | Class detail: Mark Completed, Message Class, **Cancel Class**, summary cards, attendee search, Booked / Waitlist / Cancelled tabs, per-attendee Remove | `/admin/timetable` · **Today’s Studio › Timetable** — drawer + bookings modal: Mark Completed, Message, Add Client, Booked/Waitlist/Cancelled (+ Attended/No-show/Activity), Bulk Change, Swap, Make One-Off, Save Changes. URL stays on timetable. **Cancel Class not shown** in drawer on checked class; Remove not exposed (0 bookings) | **WOULD LOSE** — **Cancel Class** (not found on timetable drawer). Remove-attendee parity unproven when class has bookings |
| `/admin/crm/automations` | Pipeline Automations: Seed Defaults, New Automation, metrics, Trial stage, Automations + Activity Log tabs | `/admin/crm-hub?tab=automations` · **Members › CRM › Pipeline** (Automations tab) — same controls | **SAFE TO RETIRE** |
| `/admin/executive-briefing` | Executive Intelligence Briefing (daily/weekly/monthly/quarterly cards; Read / Discuss / History; links to Dispatch, Org Intelligence, My Actions, Manager Intelligence) | Twin `/admin/intelligence/executive-briefing` · intelligence path — same content/controls (chrome differs only) | **SAFE TO RETIRE** (keep intelligence path) |
| `/admin/security-dashboard` | Security Score, Pending Alerts, Active Cameras, Escalated, Recent Alerts, Camio Settings, Door Access, **Recent Member Warnings** | `/admin/security-hub` · **Facilities › Security › Hub** — score/alerts/cameras/escalated/Recent Alerts/Camio/Door Access. **Member Warnings not on hub** | **WOULD LOSE** — **Recent Member Warnings** panel |
| `/admin/platform/stripe-connect` | Owner: **Platform Admin Access Required** only | Studio `/admin/stripe-connect` · **Finance › Stripe Connect** — Connected/ready, Open Stripe, Disconnect. Platform orphan URL has no Owner-reachable function | **SAFE TO RETIRE** (Owner-unreachable; studio Stripe Connect remains) |
| `/admin/dashboard` | Second “Home”: Studio Pulse summary, Recompute pulse, Take Snapshot, date range, KPI grid (show-up, no-shows, cover, classes, members, revenue, visits, retention), Actions needed today | `/admin` Home is **different** (ops landing: dispatch, classes, milestones, week, tasks). Pulse pieces link to `/admin/studio-pulse`, but this page’s Customize / Recompute / Snapshot / KPI grid / Actions-needed pack is this surface | **WOULD LOSE** — Dashboard Customize; Recompute pulse; Take Snapshot; KPI analytics grid; Actions needed today cards (unless Declan accepts Studio Pulse + other pages as enough — not proven 1:1) |
| `/admin/payroll` | Payroll: Run Payroll / History / Pay Rates / Expenses; Generate Invoices; Approve Payrun; Export Payroll | Twin `/admin/invoicing` · Search › Invoicing (same AdminInvoicing page) | **SAFE TO RETIRE** (keep `/admin/invoicing`) |
| `/admin/my-actions` | My Actions empty state / assigned recommendations | Twin `/admin/intelligence/my-actions` · Search › My Actions | **SAFE TO RETIRE** (keep intelligence path) |
| `/teacher/schedule` | Manage Schedule (week nav, filters, sessions, ADD SESSION) | Twin `/teacher/calendar` · **Teacher › Schedule** (canonical nav target) | **SAFE TO RETIRE** |
| `/admin/reports` | Legacy report directory (finance, membership, activity, customer, lead, engagement, staff, door-access links) | `/admin/reports-hub` → **Reports** tab · **Home › Reports › Hub** — all directory reports present (plus Alert Management; Class Attendance listed twice) | **SAFE TO RETIRE** (keep `/admin/reports/:reportId` detail routes + hub) |
| `/admin/reporting` | Standalone KPI analytics: Export, Monthly Revenue, members, occupancy, retention, Top Classes, Top Instructors | `/admin/reports-hub` **Overview** tab — same KPI/Export/Top Classes/Top Instructors surface | **SAFE TO RETIRE** |

---

### Hub landing changes (named hub vs first child)

| Hub | Proposed landing | Exists & loads? | Offers what a landing needs? | Gap vs current first-child |
| --- | --- | --- | --- | --- |
| Access | `/admin/door-access` Door Access | Yes · Studio › Access › Door access | Full hub: Settings, Doors & Rules, Relays, Lockdown, Schedules, Wallet & NFC, Logs, Messages, Setup, Reports; Analytics + Alert Management | Named page is the real Access product surface |
| POS | `/admin/pos-hub` POS Kiosk Hub | Yes · Studio › POS & kiosks › POS | Till, Overview, Products, Bundles, Stock, Orders, Reports, Devices, Settings, Insights; New till sale | Named hub is complete POS landing |
| Reports | `/admin/reports-hub` | Yes · Home › Reports › Hub | Overview + Reports directory + Geographic / Website Analytics / Instructor ROI / Export Templates / Smart Folder / Insights | Prefer hub over LINK ONLY `/admin/reports` or `/admin/reporting` |
| Website | `/admin/website-hub` | Yes · Website › Hub | Home/Health/Pages/Import/AI Builder/Styles/Navigation/SEO/Insights | Named hub exists; Blog is sibling **Website › Blog** (`blog-hub`) |
| On-site | `/admin/popups` | Yes · Marketing › On-site › Pop-ups | New Pop-up, metrics, empty-state create | Named Pop-ups page loads as On-site product |
| Journeys | `/admin/journey-orchestrator` | Yes · Members › Journeys › Orchestrator | Lifecycle funnel, channels, profiles, orchestration rules, insights | Distinct from `/admin/automation` (Automation Journeys) — orchestrator ≠ journey list |
| Loyalty | `/admin/milestones-hub` | Yes · Experiences › Loyalty › Milestones | Milestones hub landing with milestone/challenge/community controls | Named hub loads |
| Connections | Cursor said “Connections” | **Ambiguous** | `/admin/connections` (Settings › Connections › Vault) **and** `/admin/social/integrations` (Settings › Connections › Integrations) both load as “Connections”-family landings; platform `/admin/platform-connections` is PA | **Declan must pick** which href the Connections hub should open; they are not the same page |

---

### Platform pages to guard (Owner reachability)

| Page | Owner can open? | Studio-owner-needed? | Note |
| --- | --- | --- | --- |
| Feature Management | **Yes** — full tier/feature table, switches, Re-seed | **No** (platform product config) | Owner-reachable today; guard recommended so studio seats cannot re-seed/reassign tiers |
| Stripe Connect (platform `/admin/platform/stripe-connect`) | **No** — Platform Admin Access Required | N/A for Owner | Studio Stripe remains at `/admin/stripe-connect` |
| Changelog | **Yes** | **No** | Platform updates browsing only |
| Roadmap | **Yes** | **No** | Product roadmap only |
| Implementation Checklist | **No** — Admin Access Required | No | |
| Visual Intelligence Showcase | **No** — Admin Access Required | No | |
| Platform Sales / demos / Live Support | **No** — “This admin page is unavailable” | No | |
| Command Centre Agents | **Yes** — agents, Pause, Run review, prepared work | **Yes (studio ops)** | Do **not** treat as platform-only; studio Owner legitimately uses it. Separate from “guard platform pages” list |

---

### Same name, different pages

| Name | Studio | Academy | Different? |
| --- | --- | --- | --- |
| News | `/admin/news` — News Management; studio article “CENSUS TEST DRAFT…” | `/admin/academy/news` — LMS Content libraries; empty library search | **Yes** |
| Community | `/admin/community-hub` — Events/Partners/Reporting | `/admin/academy/community` — LMS Community channels | **Yes** |
| Discount Codes | `/admin/discount-codes` — studio codes (e.g. Bluebird 15%) | `/admin/academy/discount-codes` — Academy imported discounts; empty “not applied to this tenant” | **Yes** |
| Resources | `/admin/resources` — Resources & Links; empty studio resources | `/admin/academy/resources` — LMS Content libraries | **Yes** |

---

### Coverage reconcile (already posted)

Admin **407** census loaded into Coverage with breadcrumb + reachability (prior **334** was destinations-only). Hub: https://helgoiq-organization.github.io/helgoiq-work-hub/#coverage-admin

**Ask:** Declan — rule each **WOULD LOSE** row (retire anyway / keep / move Member Warnings & Cancel Class first). No Grok deletions until you say.
