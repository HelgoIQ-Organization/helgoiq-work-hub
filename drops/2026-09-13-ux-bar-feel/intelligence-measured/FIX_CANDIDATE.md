# Fix candidates — Intelligence & Reports (Feel measured)

**Tip:** `6486be87` · **Seat:** Admin 2 · Bluebird `c=150002` · observe-only  
**Source:** `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/intelligence/REVIEW.md`  
**Rule:** Do **not** edit HelgoIQ-Platform from Census AI — Cloud agent PRs with before/after.

---

## FC-INTEL-01 — Strip Refrm studios from Bluebird Geographic Heat Map filters (P0 visual/trust)

| | |
|---|---|
| **Page** | `/admin/reports-hub?c=150002` → Geographic Heat Map |
| **Breadcrumb** | Reports Hub › Geographic Heat Map |
| **Repro** | 1) Sign in Admin 2 · Bluebird `c=150002`. 2) Open Reports Hub. 3) Open Geographic Heat Map / location filter list. |
| **Expected** | Filter checkboxes list only Bluebird locations/studios. |
| **Actual** | Visible checked/listed **Refrm Stevenage, Refrm Luton, Refrm Weymouth, Refrm Letchworth** (and related Refrm location set) under Bluebird. |
| **Before screenshot** | `screenshots/01-reports-geographic-heatmap.png` |
| **Suggested outcome** | Scope heat-map studio/location options by active `companyId` (150002). Never render other-tenant studio names in Bluebird filters. After fix: Bluebird-only list; screenshot after. |
| **Axis** | obvious / trust |

---

## FC-INTEL-02 — Hide Refrm tab on Bluebird Studio Overview (P0 visual/trust)

| | |
|---|---|
| **Page** | `/admin/overview?c=150002` |
| **Repro** | Open Multi-Company Overview on Bluebird Admin 2. |
| **Expected** | Tabs/companies are Bluebird-only (or All Companies within Bluebird brand). |
| **Actual** | A **Refrm** tab/badge is visible alongside All Companies. |
| **Before screenshot** | `screenshots/02-overview-refrm.png` |
| **Suggested outcome** | Overview company tabs filtered by tenant; no cross-tenant tab chrome. |
| **Axis** | obvious / trust |

---

## FC-INTEL-03 — MRR Intelligence error boundary → honest empty (P0 crash)

| | |
|---|---|
| **Page** | `/admin/intelligence/mrr?c=150002` |
| **Repro** | Navigate once to MRR Intelligence. |
| **Expected** | Chart or honest empty (“No MRR history yet”). |
| **Actual** | “This page couldn’t load” — `Cannot read properties of undefined (reading 'length')`. |
| **Before screenshot** | `screenshots/03-mrr-crash.png` |
| **Suggested outcome** | Null-safe series access; empty state copy; no error boundary for empty data. |
| **Axis** | frictionless |

---

## FC-INTEL-04 — In-shell loading instead of full-page HelgoIQ splash (P1 feel)

| | |
|---|---|
| **Pages** | Any move between Reports Hub ↔ Overview ↔ Intelligence Centre ↔ Studio Intelligence ↔ Reporting |
| **Repro** | Click between those admin routes while already in admin chrome. |
| **Expected** | Chrome stays; content area skeletons (WhatsApp/Slack bar). |
| **Actual** | Full-page HelgoIQ splash between in-hub moves. |
| **Before screenshot** | (process) — content screenshots in `screenshots/04`–`09`; splash observed on every navigation during Feel walk. Capture splash frame in PR if reproducible. |
| **Suggested outcome** | Keep admin shell mounted; skeleton only the main pane. |
| **Axis** | frictionless |

---

## FC-INTEL-05 — Warm empty + hide Seed Demo on day-to-day intel empties (P2)

| | |
|---|---|
| **Pages** | `/admin/intelligence-centre`, `/admin/intelligence-impact` (contrast `/admin/daily-focus`) |
| **Repro** | Open Centre / Impact with sparse Bluebird data. |
| **Expected** | Empty explains why + next step (Daily Focus pattern). No Seed Demo as primary CTA for studio admins. |
| **Actual** | Centre/Impact cold/zero; **Seed Demo** visible. Daily Focus already models the better empty. |
| **Before screenshots** | `screenshots/04-intelligence-centre-empty.png`, `08-intelligence-impact.png`, `09-daily-focus-empty.png` (good pattern) |
| **Suggested outcome** | Reuse Daily Focus empty copy pattern; demote/hide Seed Demo unless owner/debug flag. |
| **Axis** | joyful / frictionless |

---

## Priority for Cloud agent

1. FC-INTEL-01 (heat map Refrm)  
2. FC-INTEL-02 (Overview Refrm tab)  
3. FC-INTEL-03 (MRR crash)  
4. FC-INTEL-04 (splash)  
5. FC-INTEL-05 (empty / Seed Demo)

PR each with before/after screenshots; do not mutate from Census AI.
