# Website / CMS — Feel measured review

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-15 · **Tip:** `e3ba86e851ff268ad439041a193feb3f742c03ed`  
**Seat:** Admin 2 (`helgoiq-bb-admin-2@agentmail.to`) · Bluebird `c=150002`  
**Path:** `/admin/website-hub` (+ Pages, Health, Approval, Blog, Signage)  
**Method:** Observe-only. Health check ×1 · Save Draft ×1 on existing draft. No live publish, Feature Controls, Styles save, or Refrm writes. UI update prompt left unapplied.  
**Viewports:** Desktop ~1280 · Phone ~390×844  

**Scores:** joyful **70%** · obvious **80%** · frictionless **75%** · overall **75%**

Prior overnight rescore on `3ad37824…` was 66 / 79 / 71 / **72**. This walk is a fresh measure on tip `e3ba86e8`.

## Plain English

Website/CMS still leads with **excellent draft/live governance** (“Nothing goes live until you say so”, Approval Hub “Nothing publishes itself”) and clear named CTAs. Phone chrome from the Feel PR batch holds (Home selector / full New Post). Identity shows **Helgoiq Bb Admin 2**, not Unknown; Save Draft reports “Post saved” without a lingering Unsaved lie.

The remaining trust gap is **Website Health**: check runs, fails honestly with timestamp + Retry, but never produces a score or drillable results — so the surface feels like a dead end after a sincere attempt. Readiness is useful but dense; Blog phone titles still truncate. Overall **75** — a small step up from 72 on cleaner identity/editor/phone, still capped by Health and polish.

## Surfaces walked

| Surface | J | O | F | Notes |
|---|---:|---:|---:|---|
| Identity | 82 | 88 | 85 | Admin 2 · Bluebird · TEST DATA clear |
| Website Hub desktop | 76 | 84 | 80 | Warm CTAs; readiness dense |
| Readiness | 70 | 82 | 76 | 0/13 must-haves; below fold |
| Pages | 74 | 84 | 78 | 1 draft / 0 live; strong safety copy |
| Website Health | 45 | 61 | 53 | Honest fail + time; no score/results |
| Approval Hub | 72 | 82 | 79 | Best governance; empty sparse |
| Blog Hub | 76 | 86 | 80 | Draft badges clear |
| Blog editor | 68 | 79 | 73 | Save Draft OK; empty body/slug odd |
| Screens Hub | 64 | 72 | 66 | Clear setup; instruction-heavy |
| Website Hub phone | 74 | 80 | 73 | Cards + sticky nav; readiness below fold |
| Blog Hub phone | 68 | 77 | 69 | Titles truncate; tight icons |

## Strengths

- Draft vs live safety language remains best-in-hub
- Consistent primary CTAs and navigation
- Phone sticky dock usable; #1280 tab/CTA fixes holding
- Identity named; Unsaved no longer lying after Save Draft (#1283 holding)
- Health failure copy honest with timestamp + Retry (#1281 holding)

## Findings

### W-F001 — Health check still produces no score or results
- **Axis:** obvious / frictionless · **Severity:** broken (capability)
- **Detail:** After Check my site: “We could not check this site.” + timestamp + Retry. No score, no drillable Fixed/Waiting/Looking-good content, Prepare a fix disabled.
- **Evidence:** `screenshots/05-health.png` · coverage `website-health/health-after-check.png`
- **Suggestion:** Either return a real audit (even empty-with-reasons) or explain *why* the check cannot run (missing live URL / DNS) with a single next step.

### W-F002 — Readiness feels like a backlog
- **Axis:** joyful · **Severity:** confusing
- **Detail:** 0/13 must-haves + dense list; primary start cards compete with checklist gravity.
- **Evidence:** `screenshots/03-readiness.png`
- **Suggestion:** Guided first-page win above the checklist.

### W-F003 — Blog editor empty body / slug
- **Axis:** obvious · **Severity:** confusing
- **Detail:** Draft status clear after save; empty content area and slug still slightly mysterious.
- **Evidence:** `screenshots/08-blog-editor.png`

### W-F004 — Blog phone title truncation
- **Axis:** frictionless · **Severity:** polish
- **Detail:** Draft titles/excerpts truncate; icon actions tight (CTA itself readable).
- **Evidence:** `screenshots/11-blog-hub-phone.png`

### W-F005 — Update prompt / splash polish
- **Axis:** frictionless · **Severity:** polish
- **Detail:** Repeated update prompt noticed; left unapplied per tip discipline.

## Suggestions (priority)

1. Make Health check produce score **or** a clear “why we cannot check” with one fix path (W-F001)
2. First-win empty above readiness backlog (W-F002)
3. Soften Publish while Status is Draft; clarify empty editor body
4. Allow blog phone titles to wrap

## Screenshots

All under `feel/website/screenshots/` (01–11).

## Side effects

- Health check ×1 (failed; no publish)
- Save Draft ×1 on existing unpublished blog draft
- No live publish · no Feature Controls · no Styles · no Refrm
