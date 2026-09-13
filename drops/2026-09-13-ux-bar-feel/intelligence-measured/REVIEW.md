# Intelligence & Reports — Feel measured review

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13 · **Tip:** `6486be87`  
**Seat:** Admin 2 · Bluebird `c=150002` · observe-only  
**Path hint:** `/admin/reports-hub`  
**Screenshots:** `feel-measured/intelligence/screenshots/`

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **44%** | **47%** | **27%** | **39%** |

Overall = round((44 + 47 + 27) / 3). Bar = WhatsApp / Slack, not “does the page load”.

## Plain English

Measured hub pass on tip `6486be87`. Cards and titles are clearer than the provisional score suggested, and Daily Focus / Performance Intelligence show real craft. The hub still fails the WhatsApp/Slack bar on **flow and trust**: every in-hub move flashes a full HelgoIQ splash, MRR still crashes once, and Refrm studio names still appear on Bluebird Heat Map filters and Overview. Intelligence feels like many polished rooms with no single front door.

## Strengths

- Page titles, subtitles, and labelled tabs usually orient within ~10 seconds
- Studio Intelligence frames an executive layer well (Pulse / Decision Engine / Dispatch)
- Performance Intelligence insight cards are detailed with honest ESTIMATED / driving-signal labels
- Daily Focus empty state is the warmest in the set (why empty + Calculate Priorities)
- Geographic Heat Map controls are labelled (Map / Catchment / Analytics / Clusters / Insights)

## Findings

### F1 — MRR Intelligence hard crash
- **Axis:** frictionless · **Severity:** broken
- **Detail:** `/admin/intelligence/mrr` → “This page couldn’t load” with `Cannot read properties of undefined (reading 'length')`. Confirmed once; no thrash.
- **Evidence:** `screenshots/03-mrr-crash.png`
- **Suggestion:** Guard empty series before `.length`; honest empty state instead of error boundary.

### F2 — Refrm leak on Bluebird Heat Map + Overview
- **Axis:** obvious · **Severity:** broken
- **Detail:** Reports Hub Geographic Heat Map filter lists Refrm Stevenage / Luton / Weymouth / Letchworth under `c=150002`. Overview still shows a Refrm tab.
- **Evidence:** `screenshots/01-reports-geographic-heatmap.png`, `02-overview-refrm.png`
- **Suggestion:** Scope filter options and Overview tabs by active company; never list other tenants’ studios on Bluebird.

### F3 — Full-page splash on every hub move
- **Axis:** frictionless · **Severity:** confusing
- **Detail:** Direct navigations between Reports Hub, Overview, Intelligence Centre, Studio Intelligence, etc. show HelgoIQ loading splash before content — feels like leaving the app.
- **Suggestion:** In-shell skeletons; keep chrome mounted for in-admin route changes.

### F4 — Fragmented information architecture
- **Axis:** obvious · **Severity:** confusing
- **Detail:** Reports Hub, Reporting, Studio Intelligence, Intelligence Centre, Performance Intelligence, Daily Focus, and Impact overlap without one obvious “start here”.
- **Suggestion:** One Intelligence home with clear next steps; demote or nest satellite pages.

### F5 — KPI drill missing; cold empty / Seed Demo on observe surfaces
- **Axis:** frictionless · **Severity:** confusing
- **Detail:** Reporting KPI grid has info buttons but no obvious drill-through; Back to Dashboard observed without `c=150002`. Intelligence Centre / Impact empty states push Seed Demo; Impact is all zeros.
- **Evidence:** `screenshots/07-reporting.png`, `04-intelligence-centre-empty.png`, `08-intelligence-impact.png`, `09-daily-focus-empty.png`
- **Suggestion:** Every KPI opens underlying data and returns; warm empty copy like Daily Focus; hide Seed Demo from day-to-day admin unless Declan enables it.

## Suggestions (priority)

1. Fix MRR crash (F1)
2. Strip Refrm from Bluebird Heat Map filters and Overview tabs (F2)
3. Kill full-page splash for in-admin Intelligence/Reports moves (F3)
4. One Intelligence home + KPI drill on Reporting tiles (F4/F5)
5. Replace Seed Demo empty prompts with “why empty / how to enable” (F5)

## Surfaces walked

Reports Hub (Heat Map), Overview, MRR, Intelligence Centre, Studio Intelligence, Performance Intelligence, Reporting, Intelligence Impact, Daily Focus. Phone not assessed.

---
*Measured Feel pass — Census AI · 2026-09-13 · tip 6486be87*
