# Marketing / campaigns — Feel measured review

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13 · **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`  
**Seat:** Admin 2 · Bluebird `c=150002` · observe-only  
**Path hint:** `/admin/marketing` (+ Campaigns, Inbox, Newsletter, Audience, Social, Banners)

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **68%** | **72%** | **58%** | **66%** |

Previous provisional: 48 / 50 / 45 → **48**. Measured **lightens** warmth and orientation; friction stays the drag.

## Plain English

A dedicated Admin 2 walk on tip `6486be87` finds Marketing materially warmer and clearer than the L2-derived provisional. Newsletter and Banners empty states feel inviting; Campaigns and Audience show real data and next steps. Friction comes from Inbox density (clipped rails, Browser ON vs “setup needed”, absurd **1850%** Active Members), route-loading splash, and locale-mismatched schedule date hint — not from missing Meta/send secrets (those read as honest blocked polish).

## Surfaces walked

| Route | Feel snapshot |
|---|---|
| `/admin` | Warm greeting, Quiet floor, honest insufficient-data |
| `/admin/marketing` | Clear Acquisition naming, metrics, New Landing Page |
| `/admin/campaigns` | Templates + New Campaign; SMS limitation explicit |
| `/admin/campaigns/new` | Approachable composer; Save Draft visible; `mm/dd/yyyy` vs en-GB |
| `/admin/inbox` | Useful ops data; crowded three-pane + clipped rails |
| `/admin/newsletter-hub` | Strongest joy — 10-minute journey copy + AI CTA |
| `/admin/audience-hub` | Segments with Preview/Message; practical |
| `/admin/social-hub` | Honest Google connection empty state |
| `/admin/banners` | Warm “Announce what matters” empty state |

Screenshots: `feel-measured/marketing/screenshots/`  
Fix candidates: `feel-measured/marketing/FIX_CANDIDATE.md`

## Strengths

1. Consistent verdant palette and editorial typography
2. Clear hub naming, tabs, and next-step CTAs
3. Honest, actionable empty states (Newsletter, Banners, Social)
4. Newsletter journey is motivating and concrete
5. Campaigns / Audience expose real counts and actions

## Findings (measured)

### MKT-FEEL-01 — Inbox rails clip; Browser status contradicts
- **Axis:** frictionless / obvious · **Severity:** medium
- **Detail:** Call-team and reporting strips scroll off-canvas; “Browser ON” sits above “Browser setup needed.”
- **Evidence:** `screenshots/inbox.webp` · FIX_CANDIDATE.md

### MKT-FEEL-02 — % Active Members = 1850%
- **Axis:** obvious · **Severity:** medium
- **Detail:** Inbox Reporting Last 30 days shows an impossible percentage.
- **Evidence:** `screenshots/inbox.webp`

### MKT-FEEL-03 — Schedule date hint ignores en-GB
- **Axis:** obvious / frictionless · **Severity:** low
- **Detail:** Campaign new schedule placeholder `mm/dd/yyyy` while document locale is en-GB.
- **Evidence:** `screenshots/campaign-new.webp`

### MKT-FEEL-04 — Loading splash on in-app moves
- **Axis:** frictionless · **Severity:** low–medium
- **Detail:** Full-page loading splash when hopping Marketing routes.

## Suggestions

1. Make Inbox reporting/call-team rails wrap or show a clear scroll affordance
2. Fix % Active Members math/label
3. Locale-aware schedule date (`dd/mm/yyyy` for en-GB)
4. Keep admin shell; skeleton instead of full splash for in-app nav
5. One calm pattern for disconnected channels (why blocked / what next)

## Guards

No mass sends · no Meta create/publish · no Feature Control toggles · no Platform edits · Bluebird only.

---
*Measured lab pass 2026-09-13 — replaces provisional_from_evidence for this surface.*
