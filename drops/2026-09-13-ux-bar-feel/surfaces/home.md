# Admin Home / overview

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13  
**Tip:** `6486be87a68821e383d36d5246f9da08a802ee59` · Seat Admin2 · `?c=150002`  
**Paths:** `/admin/overview`, `/admin` (Studio Pulse / home stack)

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **40%** | **22%** | **38%** | **33%** |

## Plain English

Measured Admin2 Bluebird walk tip `6486be87…` vs WhatsApp/Slack bar. `/admin` Home has real warmth (date greeting, honest Studio Pulse empty, Timetable CTA). `/admin/overview` is the trust breaker: **Refrm** tab + badge still under Bluebird; Members (aggregated) shows **—** while Members lists **11**; in-app moves flash a full-page Helgo **FITNESS BUSINESS PLATFORM** splash. Reachable and partly human — not yet obvious or trustworthy.

## Source

Canonical: `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/home/REVIEW.md`  
FIX candidates: `FIX_CANDIDATE-H-F001-refrm-leak.md`, `H-F002-fullpage-splash.md`, `H-F003-members-aggregate-dash.md`

## Strengths

- `/admin` greets with weekday date + honest Studio Pulse “INSUFFICIENT DATA”
- Empty “Today’s classes” points to Timetable; location pills clear
- Bluebird + TEST DATA badges make staging context obvious
- Customise Home affordance present

## Findings

### H-F001 — Refrm tab + badge on Bluebird Overview
- **Axis:** obvious · **Severity:** broken
- **Detail:** Overview shows All Companies | Refrm and a Refrm pill on the Bluebird card.
- **Suggestion:** Never render other-tenant tabs/badges when company is Bluebird; scope server-side.

### H-F002 — Full-page splash for in-app Home moves
- **Axis:** frictionless · **Severity:** confusing
- **Detail:** Nav and KPI clicks leave the shell for a full-page FITNESS BUSINESS PLATFORM splash.
- **Suggestion:** In-shell skeleton only.

### H-F003 — Members (aggregated) “—” vs Members 11
- **Axis:** obvious · **Severity:** broken
- **Detail:** Overview dash vs `/admin/members` 11 total / 9 active.
- **Suggestion:** Same query or hide tile; drill to Members.

## Suggestions

1. Kill Refrm tab/badge under Bluebird (H-F001)
2. Replace full-page splash with in-shell skeleton (H-F002)
3. Fix or hide Members (aggregated) (H-F003)
4. One clear next action; fix “Good morning, there”
5. KPI tiles drill + return
