# Ambient intelligence — plain English (10 Sep 2026)

Bluebird `150002`, tip `ba88839d`. Twelve-month dataset **not created** (CSV import commit 500; fix in #1229 awaiting merge). Scores below use existing thin data.

## Counts

| Component | Verdict |
|---|---|
| Studio Pulse (explain + move) | **FAIL** — score explainable; no-show + recompute did not move score |
| Morning Dispatch generate | **PASS** (admin Ready) |
| Morning Dispatch viewer | **FAIL** — `/dispatch` error page |
| Dispatch truth / at-risk | **UNCERTAIN** — viewer blocked |
| Member Digital Twin (3) | **PASS / PASS / UNCERTAIN** — A + Tester OK; no clear steady persona |
| Learning Engine | **UNCERTAIN** — 20 signals, 0 lessons |
| What We've Learned | **UNCERTAIN** — 0 lessons / 0 outcomes |
| Event Bus UI | **UNREACHABLE** — Platform Admin (**NEED_DECLAN**) |
| Event flow | **UNCERTAIN** — LE cites `Source: event_bus` |
| CC vs Pulse | **PASS** — score, drag (Referrals), weekly action agree |
| CC vs Dispatch | **UNCERTAIN** — no readable dispatch content |

## What a studio owner would notice

1. **Pulse does not react** when attendance is marked no-show — the “health score” looks stuck.
2. **Morning Dispatch generates but will not open** — the daily briefing is a dead end.
3. **Twin can disagree with membership status** — Member A is “cancelling” in the directory while Twin shows Improving bookings and no churn score.
4. **Learning has no lessons yet** — signals exist, outcomes do not.
5. **Event Bus is locked** to platform admins while Learning Engine still claims it as the source.
6. **Command Centre and Pulse sing from the same hymn sheet** on score/drag/referral action; Dispatch cannot be cross-checked.

## Blocked next steps

- Merge + deploy **#1229** (import `companyId`), then seed `SEED:12M-2026-09` and re-run Pulse move, Dispatch at-risk, Twin steady, Learning lessons, and the 24 UNCERTAIN AI-85 rows.
