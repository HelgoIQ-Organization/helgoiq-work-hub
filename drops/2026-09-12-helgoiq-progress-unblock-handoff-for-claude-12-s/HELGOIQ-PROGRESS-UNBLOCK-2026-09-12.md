# HelgoIQ — Progress & Unblock Handoff for Claude

**Date:** 12 Sep 2026 (Europe/London)  
**Author:** Bot Commander (for Declan Ryan)  
**Audience:** Claude / engineering  
**Live staging tip:** `6486be87a68821e383d36d5246f9da08a802ee59`  
**Staging:** https://lobster-app-662c7.ondigitalocean.app  
**Write tenant:** Bluebird Pilates TEST DATA `c=150002` (Stripe TEST)  
**Read-only:** Refrm `c=150001` — never write  
**Tracking:** Platform [#1180](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180) · Menu census [#1217](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1217)  
**Launch Hub:** https://helgoiq-organization.github.io/helgoiq-work-hub/  
**Coverage tab:** https://helgoiq-organization.github.io/helgoiq-work-hub/#coverage-admin  

---

## 1. Executive summary

| Signal | Value |
|---|---|
| **Launch headline (weighted strands)** | **66%** (was ~64% morning; peaked path 52% → 64% → 65% → 66%) |
| **Admin Coverage L1+** | **~90%** of 413 pages have a test state (372 L≥1) |
| **Admin Coverage L2+** | **~51%** (212 pages at Level 2) |
| **Fully tested (L3)** | **0** — intentional; L3 not awarded yet |
| **Cluster A** | **24/24 PASS** on tip `6486be87` (ACS-F01 + ACS-C01 cleared) |
| **Biggest score levers still open** | Comms secrets · dataset `companyId` 403 · four ISO leaks · AI-85 FAILs · smoke fixtures |

**What moved the headline today (no Declan):** tip refresh to `6486be87`; Morning Dispatch viewer PASS (ambient 85→92); Cluster A 24/24 (command-centre 66→80). Dataset canary, AI-85, and ISO-29 retests **held** their percents.

**What Coverage work did today:** Admin L1 wave completed (~99% tested_any earlier in the day); L2 programme running (daily hubs → marketing/website → intelligence/reports → settings/long-tail in flight). Coverage UI: clickable summary cards merged (PR #4).

---

## 2. Launch Dashboard strands (66% headline)

Formula: weighted average of strand percents  
`dataset 12% · command-centre 10% · isolation 10% · ai-85 15% · ambient 9% · m1 10% · smoke 6% · payments 8% · findings-fix 10% · comms 10%`

| Strand | % | Status | Basis | Top blockers |
|---:|---|---|---|---|
| dataset | **52** | at-risk | measured | `batchImport.upload` **Missing companyId** HTTP 403; 0 members from canary |
| command-centre | **80** | on-track | Measured | Clusters B–F banks await Declan wording ruling |
| isolation | **86** | at-risk | measured | ISO-18, ISO-20, ISO-27, ISO-29 still FAIL on `6486be87` |
| ai-85 | **56** | at-risk | measured | 4 FAIL (MRR crash, Ask HelgoIQ, Predictive Cash Flow, What We’ve Learned); many UNCERTAIN; PA-gated |
| ambient | **92** | on-track | measured | Event Bus PA-gated; Learning Engine 0 active lessons |
| m1 | **72** | at-risk | measured | Unfreeze/payment provider; older invite notes stale vs #1267 PASS |
| smoke | **67** | at-risk | measured | Six-step smoke **BLOCKED** — fixtures seat consumed; prior credit/promo fails |
| payments | **62** | at-risk | estimate | Resume/unfreeze payment provider; broader Stripe recheck pending |
| findings-fix | **87** | at-risk | estimate | Same ISO fours + dataset 403 |
| comms | **15** | **blocked** | estimate | **Five Resend/Agentmail repo secrets** missing for #1213 |

### Rough path toward 80% headline

Need ~+14 points. Highest leverage:

1. **Comms secrets** (10% weight @ 15%) — if strand jumps to ~70–80 → ~+5–6 pts  
2. **Dataset companyId fix + successful canary** (12% @ 52%) — to ~80 → ~+3–4 pts  
3. **AI-85** clear FAILs / UNCERTAINs (15% @ 56%) — toward 75 → ~+3 pts  
4. **ISO fours fixed + re-sweep** (10% @ 86%) — toward 95 → ~+1 pt  
5. **Fresh smoke fixtures + six-step PASS** (6% @ 67%) — toward 90 → ~+1–2 pts  

Coverage L2 % does **not** directly move the 66% headline (different meter).

---

## 3. Coverage programme (Admin-first)

### Levels (Declan rules)

| Level | Meaning | Hub state |
|---:|---|---|
| L1 | Page loads, sane breadcrumb, role OK | Partial |
| L2 | Controls work; figures drill + return; no cross-page disagreement; no Refrm leak; honest empty. Unexercised primary control → **PARTIAL** not PASS | Partial / Failed |
| L3 | Full strand/page checklist complete | **Fully tested** |

### Admin inventory

- **413** page rows (Cursor #1217 census routes + extras)  
- Matched 227 · Hub-only 156 · Orphaned 30  
- Not tested **0** · Failed **59** · Blocked **44** · Partial **310** · Fully tested **0**  
- Stale vs tip (row field): **18** (meta card may lag; filter is truth)

### L1 wave — COMPLETE

| Bot | Scope | Result |
|---|---|---|
| Core | Members/CRM/Timetable | 80 PASS / 8 FAIL (mostly parametric) |
| Content | Website/Blog | 25/25 PASS |
| Comms | Marketing/Inbox | 23 PASS / 5 orphaned / 1 blocked |
| Money | Finance/Reports | 23/23 PASS |
| AI | Home/CC/AI | 90 PASS / 6 FAIL / 13 NEEDS-ID |
| Longtail | Team/Academy + Studio + Settings + Orphans | 124 PASS / 6 FAIL / 3 BLOCKED (133) |

### L2 wave — IN PROGRESS

| Wave | Hub(s) | PASS | PARTIAL | FAIL | Status |
|---|---|---:|---:|---:|---|
| Daily | Members, Timetable, Inbox, Finance, Home/CC, Staff, Safe Studio | mixed | mixed | mixed | **COMPLETE** |
| 2 | Website/Blog/Signage (Content) | 14 | 11 | 1 | **COMPLETE** |
| 2 | Marketing (Comms) | 10 | 14 | 1 | **COMPLETE** |
| 3 | Intelligence + Reports (AI) | 24 | 6 | 7 | **COMPLETE** |
| 4 | Settings + remaining long tail (Longtail) | — | — | — | **IN FLIGHT** (~157 routes; Settings first, observe-only) |

**L2 label mix (among L≥2):** ~69 L2 works · ~108 L2 partial · ~35 L2 fail  

**Hub UX:** Coverage cards/legend now filter the table ([work-hub PR #4](https://github.com/HelgoIQ-Organization/helgoiq-work-hub/pull/4) merged).

---

## 4. Highest-value product defects (for Claude)

### Isolation / tenancy (P0)

| ID / surface | Finding | Tip |
|---|---|---|
| **ISO-18** | Refrm `/?view=client` Helgo chooser exposes Bluebird in Business access + Memberships | `6486be87` |
| **ISO-20** | Refrm cohorts identical to Bluebird metrics | `6486be87` |
| **ISO-27** | Refrm Staff Availability lists Bluebird teachers; lands `appointments-hub?tab=availability` | `6486be87` |
| **ISO-29** | Refrm CC `?c=150001` → “Choose a studio” with only Bluebird | `6486be87` |
| **`/admin/overview`** | Refrm **tab/badge visible** on Bluebird Admin2 (L2 FAIL) | `6486be87` |
| **`/admin/reports-hub`** | Geographic Heat Map exposes **checked Refrm studio** checkboxes (Stevenage/Luton/Weymouth/Letchworth) under Bluebird | `6486be87` |

Evidence packs: `18-score-push/iso29/` · Coverage L2 AI intel · #1180 comments.

### Crashes / hard fails (P0–P1)

| Surface | Finding |
|---|---|
| `/admin/intelligence/mrr` | Error boundary: `Cannot read properties of undefined (reading 'length')` |
| `/admin/newsletter-analytics-legacy` | Dynamic module import error |
| `/admin/website/health` | Health check: “We couldn’t check this site” |

### KPI / agreement fails (high value for product)

| Surface | Finding |
|---|---|
| `/admin/crm-hub` | KPIs 10/10/3 vs Insights “No insights yet”; cards not drillable |
| `/admin/timetable` | Avg Fill Rate = mean of per-class % not bookings÷capacity; Cover filter doesn’t move Weekly Programme Cost; “All covered” vs TBC |
| Finance family | billing / finance-hub / pos-hub / refunds / post-class-intelligence — KPIs largely **non-drillable**; POS order/stock disagree; `/admin/invoicing` is **Payroll alias** |
| Staff | Onboarding tile counts ≠ modals; Rota Reporting KPIs no drill; staff detail “Unknown” vs roster; employment list empty vs hub staff; instructor AI 536 vs 4940 |
| Safe Studio / security / door-access | Overview/KPI tiles no drill |
| Comms | intelligence NaN credits; learning-registry 0 recs vs visible cards |

### Routing / misroute

| Surface | Finding |
|---|---|
| Academy `class-tags` / `cohort-tags` / `terms` | → LMS settings |
| Academy `news` | → Content libraries |
| Academy `invites` / `teachers` / `reports` | → LMS overview |
| `/admin/staff/substitutions` | Now loads (old L1 path defect cleared) |

### Platform Admin gates (expected on Admin2; need PA seat later)

`ai-operations/health`, launcher/meta/navigation previews, `platform-sales/demos`, `live-support`, `platform/stripe-connect`, `google-hub-preview`, `home-cards-preview`, Event Bus, etc.

---

## 5. Score-push retests completed today (tip `6486be87`)

| Stream | Result | Strand impact |
|---|---|---|
| Tip refresh | Live tip on Hub | — |
| Morning Dispatch viewer | **PASS** (honest empty; no crash) | ambient **85→92** |
| Dataset canary | **FAIL** same `Missing companyId` 403 | hold **52** |
| AI-85 Admin2 subset (25) | Only AI-018 FAIL→PARTIAL | hold **56** |
| Cluster A full 24 | **24/24** | CC **66→80** |
| ISO-29 re-sweep | Same 4 FAILs | hold **86** |

Headline **64→66**. Artefacts under `/workspace/helgoiq-afternoon-2026-09-12/18-score-push/`.

---

## 6. What Claude / engineering can unblock (actionable)

### A. Engineering fixes that unlock Measured score

1. **`batchImport.upload` Missing companyId (403)** — blocks dataset strand + 12-month seed. Reproduce: Data Migration → Members CSV canary on Bluebird. Error body on #1180 / `18-score-push/dataset-canary/`.  
2. **ISO-18 / 20 / 27 / 29** — Refrm must not see Bluebird identity/data/chooser options. Re-sweep pack in `18-score-push/iso29/`.  
3. **`/admin/reports-hub` Geographic Heat Map** — strip/hide Refrm studios for Bluebird-scoped Admin.  
4. **`/admin/overview` Refrm tab/badge** — must not appear on Bluebird seat.  
5. **`/admin/intelligence/mrr` crash** — `undefined.length`.  
6. **Figure drill-through platform rule** — Finance/Staff/Safe Studio/CRM KPIs that don’t open underlying data.  
7. **Academy route misroutes** — tags/terms/news/invites/teachers/reports.  
8. **`/admin/invoicing` → Payroll alias** — wrong destination.  
9. **Timetable fill-rate / cover cost / cover copy** disagreements.  
10. **`newsletter-analytics-legacy` dynamic import** failure.

### B. Needs Declan (not Claude alone)

| Need | Why |
|---|---|
| **5 Resend/Agentmail GitHub Actions secrets** for #1213 | Unblocks **comms** strand (15% → large headline jump) |
| **Fresh `GROK_SMOKE_FIXTURES` seat** | Six-step smoke blocked (fixtures consumed) |
| **Platform Admin Agentmail seat** | Event Bus, PA previews, PA AI surfaces, seed gate |
| **Clusters B–F 30-slot wording ruling** | Frozen bank on #1180; no scoring until approved |
| **BB Smoke Sep8 paused membership / payment decision** | Unfreeze path |
| **Feature Control toggles** | Standing rule: ask Declan before any Setup flag change |

### C. Bot Commander continuing (no Declan)

- Finish Coverage L2 Settings + long-tail merge as Longtail lands  
- Keep Coverage/Dashboard in sync; #1180 defect posts by hub  
- After L2 Admin wave: Teacher + Client L1 (inventories exist under menu-census); Platform waits on PA seat  
- Sense-check / rationalisation pass after walks  
- Do **not** invent L3 / Fully tested greens

---

## 7. Standing rules (do not violate)

- Bluebird writes only; **Refrm read-only**  
- Stripe **TEST** only; no live charges  
- **No Feature Control / Setup toggles** without Declan ask  
- No seat passwords / invite tokens in markdown, #1180, or Hub drops  
- CSV rollback allowed when #1240 live — prefer not to need; company-scoped `batchId` only  
- Prefer Agentmail seats so Declan is not in OTP path  

---

## 8. Key links

| Resource | URL |
|---|---|
| Launch Hub | https://helgoiq-organization.github.io/helgoiq-work-hub/ |
| Coverage Admin | https://helgoiq-organization.github.io/helgoiq-work-hub/#coverage-admin |
| #1180 running list | https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180 |
| #1217 menu census | https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1217 |
| Work Hub repo | https://github.com/HelgoIQ-Organization/helgoiq-work-hub |
| Cluster A 24/24 | https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180#issuecomment-5646241611 |
| ISO-29 re-sweep | https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180#issuecomment-5646251388 |
| Intel L2 + reports-hub Refrm | https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180#issuecomment-5647544001 |
| Score-push kickoff | https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180#issuecomment-5645950689 |

---

## 9. Suggested Claude starting order

1. Fix **dataset `companyId` 403** on `batchImport.upload` (unblocks canary + seed).  
2. Fix **isolation quartet ISO-18/20/27/29** + **reports-hub heat map** + **overview Refrm chrome**.  
3. Fix **`/admin/intelligence/mrr`** crash.  
4. Platform rule: **KPI cards must drill** (Finance/Staff/CRM/Safe Studio).  
5. Academy **misroute** family.  
6. Coordinate with Declan on **Comms secrets** + **smoke fixtures** for headline ≥80%.

---

*Generated by Bot Commander · tip `6486be87` · no credentials in this document.*
