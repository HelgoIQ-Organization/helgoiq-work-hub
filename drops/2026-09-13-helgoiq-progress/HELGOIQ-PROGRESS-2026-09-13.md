# HelgoIQ progress — 13 Sep 2026 (~00:25 EEST)

**Live tip:** `6486be87` · Bluebird `c=150002` · Stripe TEST  
**Hub:** https://helgoiq-organization.github.io/helgoiq-work-hub/

---

## Headline (what matters for launch)

| | Morning | Now | Δ |
|---|---:|---:|---:|
| **Launch health** | 52% | **63%** | +11 |
| **Coverage L≥2** (controls exercised) | ~51% | **81%** (334/413) | +26 pts |
| **Coverage L≥1** (reachable) | ~90% | **91%** (376/413) | +1 |

Command Centre dropped this evening after Milestone 2 scoring — that is intentional honesty, not a tip regression.

---

## Strand board (measured)

| Strand | % | Notes |
|---|---:|---|
| Ambient | **92** | Dispatch viewer PASS |
| Findings-fix | **87** | |
| Isolation | **86** | 4 privacy FAILs still open (ISO-18/20/27/29) |
| M1 | **72** | |
| Smoke | **67** | Needs fresh fixtures / secrets for bigger climb |
| Payments | **62** | |
| AI-85 | **56** | Hold — Admin2 rescore only |
| Dataset | **52** | Import canary FAIL (`Missing companyId` 403) |
| **Command Centre** | **48** | A **24/24** · Milestone 2 B–F **4/30** |
| Comms | **15** | Needs Resend/Agentmail secrets (#1213) |

---

## Done today (12–13 Sep)

### Command Centre Milestone 2 (approved bank)
- Frozen **30-slot** B–F bank **APPROVED** and scored on `6486be87`
- Result: **4/30 PASS** · **26 FAIL** · 0 NOT_RUNNABLE
- PASSed: B-MSG-01 · C-TODAY-01 · E-FU-01 · F-FU-01
- Fail themes for Codex: invented how-do-I paths · missing named refuse reasons · XAGR numbers missing vs Pulse/Dispatch/Twin · investigation stalls · E-FAC-01 isolation scare
- Posted: [#1180](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180#issuecomment-5648302578)
- Dashboard: CC **80% → 48%** · headline **66% → 63%**
- Tip-change loop **armed** to re-run A + frozen B–F when tip moves

### Coverage L2 programme
| Wave | Result | Status |
|---|---|---|
| Daily hubs (Members/Timetable/Inbox/Finance/Home/Staff/Safe Studio) | merged | DONE |
| Website (Content) | 14P / 11Part / 1F | DONE |
| Marketing (Comms) | 10P / 14Part / 1F | DONE |
| Intel + Reports (AI) | 24P / 6Part / 7F | DONE |
| Settings (Longtail) | 3P / 13Part / 1F / 1B | DONE |
| Academy chunk 1 | 6P / 16Part / 8F (misroutes) | DONE |
| Long-tail chunk 2 (assets…resources) | 3P / 27Part / 0F | DONE |
| Long-tail chunk 3 (retreats…audit-trail) | 1P / 29Part / 0F | DONE |
| Next 15 (card-expiry…charts/new) | 4P / 9Part / 2F | MERGED (early from jsonl) |

**L≥2 path:** 212 → 229 → 259 → 289 → 319 → **334 (81%)**

### Notable product defects (still open)
1. **Dataset** `batchImport.upload` Missing companyId → 403  
2. **ISO** 18 / 20 / 27 / 29 still FAIL  
3. `/admin/reports-hub` Geographic Heat Map shows **Refrm** studios on Bluebird  
4. `/admin/overview` Refrm tab/badge on Bluebird  
5. `/admin/intelligence/mrr` crash (`undefined.length`)  
6. `/admin/feature-management` — “Refrm Academy — Learning” visible on Bluebird  
7. **Academy misroutes** (class-tags/terms → LMS settings; news/recordings/exercises → libraries; etc.)  
8. **Command Centre** Milestone 2 (26 FAIL) — see #1180 verbatim pack
9. `/admin/credit-liability` agreement fail (tiles vs detail)
10. Custom dashboard chart edit — tenant fail on preview/orders  

---

## Your moves (what unblocks the biggest score climbs)

| # | Action | Unlocks | Moves |
|---|---|---|---|
| 1 | Codex / eng fix Milestone 2 B–F fails (#1180 verbatim) | CC back toward 80%+ | **Large** (CC is 10% of headline) |
| 2 | Fix dataset `companyId` on upload | Dataset strand | Medium |
| 3 | Fresh `GROK_SMOKE_FIXTURES` + Comms secrets (#1213) | Smoke + Comms | Medium–Large |
| 4 | Platform Admin seat when you’re back | PA-gated surfaces (e.g. platform-sales) | Small–Medium |
| 5 | Isolation fixes for ISO-18/20/27/29 + Refrm leaks | Isolation → 100% path | Medium |

No action needed from you for Longtail L2 walking — observe-only, Agentmail seats.

---

## Still running / next

1. **Longtail L2** — finish remaining ~34 routes after next-15; merge each chunk as it lands  
2. Keep **tip-change** CC loop armed (A 24/24 → re-run frozen B–F 30)  
3. Park NEED_DECLAN items; no Feature Control toggles without asking  

---

*Pack path:* `/workspace/helgoiq-afternoon-2026-09-12/21-progress/HELGOIQ-PROGRESS-2026-09-13.md`  
*Prior Claude handoff:* search Work Hub for “Claude” / progress unblock  
