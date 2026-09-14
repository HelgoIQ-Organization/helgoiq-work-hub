# AI-85 provisional rescore — Feature Controls 21/21 settled

**When:** 2026-09-14 13:54 EEST (Europe/Athens)
**Tenant:** Bluebird `c=150002` · **Refrm:** read-only / untouched
**Seat:** Admin2 (`helgoiq-bb-admin-2@agentmail.to`) — no passwords in this report
**Tip (walk):** `40da6535c03b3f1bc8e1dd28b181143da0268f69`
**Flag settlement:** Platform Admin confirmed Feature Controls **21/21** (Enable All). Admin2 Feature Controls catalogue still rendered **0/21** with Enable All visible — treated as display/role gate mismatch, not a re-toggle. Surfaces below are scored as **flags ON**.
**Guards:** no Seed Demo, no Refrm writes, no mass send, no Feature Control toggles by Admin2.

## Before → after (provisional / flag-blocked set)

| ID | Before | After | Notes |
|---|---|---|---|
| **AI-007** | UNCERTAIN | UNCERTAIN | Flags no longer blocker (PA 21/21). Page healthy; 0 approvals/activity — needs governance events / seed. |
| **AI-008** | UNCERTAIN | UNREACHABLE | Admin2 still blocked by Platform Admin Access Required (not a Feature Controls issue). |
| **AI-009** | UNCERTAIN | UNREACHABLE | Admin2 still blocked by Platform Admin Access Required (not a Feature Controls issue). |
| **AI-011** | UNCERTAIN | UNCERTAIN | Surface loads with Generate UI under flags-ON tip; Total Generated 0 / no calibrated voice examples yet. |
| **AI-014** | UNCERTAIN | UNCERTAIN | Agentic Operations UI healthy with flags ON; operational queue empty (0 approvals/findings/tasks). |
| **AI-015** | UNCERTAIN | UNCERTAIN | Tasks UI healthy; 0 pending/in-progress tasks — needs a non-destructive task or seed. |
| **AI-019** | UNCERTAIN | UNCERTAIN | SKIP retest — Dispatch viewer still on broken-list (Generate known PASS). |
| **AI-022** | UNCERTAIN | UNCERTAIN | Page healthy; 0 active lessons — needs measured action outcomes (dataset). |
| **AI-026** | UNCERTAIN | UNCERTAIN | Reachable with flags ON; 0 open opportunities — needs seed/#1229 (no longer scored_pre_enable). |
| **AI-027** | UNCERTAIN | UNCERTAIN | Reachable with flags ON; all impact metrics £0/0 — needs impact events/seed. |
| **AI-028** | UNCERTAIN | UNCERTAIN | Reachable with flags ON; no priority scores — needs intelligence objects + recalculate/seed. |
| **AI-030** | UNCERTAIN | UNCERTAIN | Reachable with flags ON; no managers in hierarchy — needs manager seed. |
| **AI-031** | UNCERTAIN | UNCERTAIN | Reachable with flags ON; no assigned actions — needs intelligence cycle assignments. |
| **AI-032** | UNCERTAIN | UNCERTAIN | Reachable with flags ON; no recommendations tracked — needs generated recommendations. |
| **AI-033** | UNCERTAIN | UNCERTAIN | Reachable with flags ON; no action-effectiveness data — needs recorded outcomes. |
| **AI-039** | UNCERTAIN | UNCERTAIN | Studio Intelligence hub healthy; Pulse insufficient data / no active items / 0 lessons (do not retest Pulse movement). |
| **AI-040** | UNCERTAIN | UNCERTAIN | Org Intelligence loads; contribution intelligence still building (2–4 weeks) — thin data. |
| **AI-041** | UNCERTAIN | UNCERTAIN | Workforce Intelligence loads; needs staff select + ≥2 weeks data for a review. |
| **AI-044** | UNCERTAIN | UNCERTAIN | September 2026 brief Ready to review; Executive summary still temporarily unavailable. |
| **AI-046** | UNCERTAIN | UNCERTAIN | Daily Focus healthy; nothing to focus on after Calculate Priorities — needs active intelligence objects. |
| **AI-051** | UNCERTAIN | UNCERTAIN | Audience Intelligence UI works with flags ON; Total/AI-Generated segments still 0 after Suggest. |
| **AI-055** | UNCERTAIN | UNCERTAIN | Comms Hub Inbox tools load with AI-suggested replies card; no independent AI draft verified; no send. |
| **AI-071** | UNREACHABLE | UNREACHABLE | Claimed /admin/class-recommender hung/unavailable; global search 0 results for Class Recommender with flags ON. |
| **AI-072** | UNREACHABLE | UNREACHABLE | /admin/progress-reports → This admin page is unavailable; no Progress Reports / Month in Movement surface. |
| **AI-074** | UNREACHABLE | UNREACHABLE | /admin/pre-class-briefings → This admin page is unavailable; no Pre-Class Briefing surface. |
| **AI-076** | UNCERTAIN | UNCERTAIN | Recovery Hub calendar/reporting reachable; Recovery Orchestrator identity still not found as a distinct surface. |
| **AI-078** | UNREACHABLE | UNREACHABLE | /admin/smart-class-filler → This admin page is unavailable; Smart Class Filler still missing. |

## What cleared vs what remains

- **Cleared:** “Feature Controls unknown / 0/21 / scored_pre_enable” is no longer the settler for the Intel + catalogue provisional set. PA tip state is **21/21**.
- **Still empty-data UNCERTAIN:** AI-007, 011, 014, 015, 022, 026–033, 039–041, 044, 046, 051, 055 — pages open; Bluebird still lacks useful seed / voice calibration / summary path.
- **PA seat gate (not flags):** AI-008, AI-009 → **UNREACHABLE** for Admin2 (`Platform Admin Access Required`).
- **Still missing product surfaces:** AI-071, 072, 074, 078 → **UNREACHABLE** (admin page unavailable and/or 0 search hits).
- **Identity:** AI-076 Recovery Hub ≠ Recovery Orchestrator → **UNCERTAIN**.
- **Skipped:** AI-019 Dispatch viewer (broken-list).

## Counts

- Full MASTER: PASS 48 · FAIL 5 · UNCERTAIN 21 · UNREACHABLE 10 · SKIPPED_CC_BANK 1
- Δ from pre-rescore MASTER: UNCERTAIN -2, UNREACHABLE +2

## Evidence

Screenshots under `evidence/` (Admin2 walks). Companion: `COUNTS.md`, `MASTER.csv`, `walk-results.jsonl`.

## Hub / #1180

Post summary on HelgoIQ-Platform #1180 and Work Hub drop (no seat secrets).
