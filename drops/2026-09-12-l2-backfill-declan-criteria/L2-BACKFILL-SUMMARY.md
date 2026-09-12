# L2 BACKFILL SUMMARY — Declan criteria (backfill only)

Recorded: 2026-09-12T11:59:19.847671Z (UTC). Europe/London = BST (UTC+1).
Live tip checked (reference only): `6486be87…` via `/api/version`. Evidence rows stamped from **source tips**, not live tip.

## BEFORE

| metric | count |
|--------|------:|
| total | 413 |
| L0 | 48 |
| L1 | 316 |
| L2 | 49 |
| L3 | 0 |
| L2 labels | all `L2 works` (49) |
| partially_tested / failed / blocked / not_tested | 344 / 20 / 44 / 5 |

## AFTER

| metric | count |
|--------|------:|
| total | 413 |
| L0 | 48 |
| L1 | 314 |
| L2 | 51 |
| L3 | 0 |
| L2 works (PASS + FAIL-encoded labels) | 15 |
| L2 partial | 36 |
| L2 PASS verdicts | 3 |
| L2 PARTIAL verdicts | 36 |
| L2 FAIL verdicts | 12 |
| partially_tested / failed / blocked / not_tested | 338 / 26 / 44 / 5 |

**Delta L2:** 49 → 51 (+2)

## Newly awarded L2 (L1 → L2)

### PARTIAL (upgraded)
- `/admin/anomaly-alerts`
- `/admin/meta-hub`

### PASS / FAIL newly upgraded
- none (PASS/FAIL this pass were relabels of existing L2)

## Relabeled existing L2 under Declan criteria

### PASS (`L2 works`, state=partially_tested)
- `/admin/ai-feature-toggles`
- `/admin/forms`
- `/admin/forms/new`

### PARTIAL (`L2 partial`)
- `/admin`
- `/admin/action-effectiveness`
- `/admin/ai-management-hub`
- `/admin/appointments-hub`
- `/admin/blog-hub`
- `/admin/business-insights`
- `/admin/campaigns`
- `/admin/command-centre`
- `/admin/command-centre/reporting`
- `/admin/communications-hub`
- `/admin/community-hub`
- `/admin/inbox`
- `/admin/instructor-roi`
- `/admin/intelligence/executive-briefing`
- `/admin/learning-engine`
- `/admin/member-digital-twin`
- `/admin/member-health-score`
- `/admin/members`
- `/admin/monthly-review`
- `/admin/news`
- `/admin/newsletter-hub`
- `/admin/newsletter-hub?tab=create`
- `/admin/performance-intelligence`
- `/admin/personal-messages`
- `/admin/popups`
- `/admin/qr-generator`
- `/admin/qr-generator/new`
- `/admin/quarterly-review`
- `/admin/recordings`
- `/admin/segments`
- `/admin/studio-pulse`
- `/admin/studio-state`
- `/admin/team-comms-hub`
- `/admin/visual-intelligence-showcase`

### FAIL (level=2, state=failed)
- `/admin/audience-intelligence`
- `/admin/campaign-composer`
- `/admin/daily-focus`
- `/admin/decision-engine`
- `/admin/intelligence/cohorts`
- `/admin/morning-dispatch`
- `/admin/predictive-cash-flow`
- `/admin/screen-ai`
- `/admin/sentiment-analysis`
- `/admin/staff-availability`
- `/admin/tag-intelligence`
- `/admin/website`

## Sources used

- AI-85: `helgoiq-ai-census/RESULTS-MATRIX*.md`, drops `*ai85*` / overnight rescore
- Forms/QR: afternoon matrix + payment-QR/waiver drop (`a73ff70`)
- Owner Twin/BI: `2026-09-11-owner-twin-pass-bi-pass-tip-a73ff70…` (Admin2 twin-bi deny **not** used)
- ISO-29 complete: `232659cf` drop
- Ambient Pulse/Dispatch/Learning: `232659cf` ambient drop
- Cluster A: `a73ff70` 23/24 (+ prior a263)
- M1 Wave1 + smoke invite retest (`6486be87` invite path)
- Programme evidence: studio-state attendance drill / explain tabs

## Explicitly NOT upgraded (load-only / SKIP)

- All menu-census / Admin L1 census load-only routes (remaining L1=314)
- `/admin/growth-rewards` — load only, programme disabled
- `/admin/recommendation-tracker` — decoration empty
- `/admin/intelligence-impact` — decoration zeros
- `/admin/weekly-growth-brief` — AI Summary unverified
- `/admin/ai-credits` — Owner observe-only
- `/admin/intelligence-centre` — Seed Demo not run
- Admin2 Twin/BI access-denied drops
- `/admin/intelligence/mrr` — **crash fail preserved** (not greened)

## Top 10 newly L2 / notable L2 surfaces

1. `/admin/anomaly-alerts` — NEW L2 PARTIAL (Refresh)
2. `/admin/meta-hub` — NEW L2 PARTIAL (Campaign Builder walk)
3. `/admin/forms` — L2 PASS (builder E2E)
4. `/admin/forms/new` — L2 PASS
5. `/admin/ai-feature-toggles` — L2 PASS (toggle restore)
6. `/admin/business-insights` — L2 PARTIAL (Owner filter)
7. `/admin/member-digital-twin` — L2 PARTIAL (Owner overview)
8. `/admin/studio-pulse` — L2 PARTIAL (recompute)
9. `/admin/command-centre` — L2 PARTIAL (Cluster A 23/24)
10. `/admin/qr-generator` — L2 PARTIAL (11/19 public)

## Files

- `LEVELS.md` (Declan L2 criteria + PARTIAL + walk priority)
- `L2-CRITERIA.md`, `L2-BACKFILL-PLAN.md`, `L2-BACKFILL-SUMMARY.md`
- `results/l2-backfill.jsonl`, `results/L2-BEFORE.json`, `results/L2-AFTER.json`
- Hub: `coverage/admin-pages.json`, `coverage/meta.json` (`lastL2Backfill`), `coverage/sources/backfill-evidence.jsonl`, `dashboard.json` (L1% + L2% in coverageNote)

## Honesty

- Never invented greens. `max(level)` only. No L3.
- No Census bots dispatched. No live browser walks.
