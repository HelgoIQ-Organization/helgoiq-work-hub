# Safe Studio — Feel measured review

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-15 · **Tip:** `e3ba86e851ff268ad439041a193feb3f742c03ed`  
**Seat:** Admin 2 · Bluebird `c=150002` · observe-only  
**Path hint:** `/admin/safe-studio`

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **58%** | **48%** | **52%** | **53%** |

Previous provisional: 40 / 35 / 42 → **39**. Measured **lifts** warmth and honest empties; overview→record drill and dense door UI still drag friction.

## Plain English

A dedicated Admin 2 walk on tip `e3ba86e8` finds Safe Studio warmer than the L2 provisional. Purple hero, location accountability, and Camio/CCTV honest empties feel like a real safety desk versus a blank admin form. Friction: you must pick a location before records; Open faults/incidents on overview still do not open the named card; Door Access is dense. Versus WhatsApp/Slack, next steps are visible but multi-hop.

## Surfaces walked

| Route | Feel snapshot |
|---|---|
| `/admin/safe-studio` | Warm purple overview; 1 fault / 1 incident tiles; location cards |
| `/admin/safe-studio/operations` | Fault `QA TEST - ignore - loose mat corner` + Add follow-up; overview tile click did not drill |
| `/admin/security-hub` | Honest “no recent alerts” |
| `/admin/security-dashboard` | Score 100 / zeros zero — calm |
| `/admin/door-access` | Dense config; switches below fold |
| `/admin/door-access/report` | Honest empty analytics |
| `/admin/cctv-hub` | Honest no viewing rights |
| `/admin/camio-live` | Warm Camio empty + settings link |

Screenshots: `feel/safe-studio/screenshots/`  
Fix candidates: `feel/safe-studio/FIX_CANDIDATE.md`

## Strengths

1. Branded purple Safe Studio shell and clear hero
2. Location Accountability with Attention/Clear badges
3. Camio / CCTV honest empty copy
4. Named QA fault/incident visible once on Operations
5. No Refrm on these pages

## Findings (measured)

### SS-FEEL-01 — Overview fault/incident tiles do not drill
- **Axis:** obvious / frictionless · **Severity:** medium
- **Detail:** Open faults 1 / Open incidents 1 on overview; clicking did not open the record. Operations shows the named fault once location is set.
- **Evidence:** `safe-studio-overview.png`, `safe-studio-operations.png`

### SS-FEEL-02 — Location gate before records
- **Axis:** frictionless · **Severity:** low–medium
- **Detail:** Must choose a location before operational records. Correct for safety, but adds a hop versus Slack.
- **Evidence:** `safe-studio-overview.png`

### SS-FEEL-03 — Door Access is dense
- **Axis:** frictionless · **Severity:** low
- **Detail:** Configuration fields run below the fold; easy to miss.
- **Evidence:** `door-access.png`

## Suggestions

1. Make overview Open faults/incidents tiles open the named Operations row
2. Keep location gate; preview which location holds the open items on the tile
3. Soften Door Access into sections with sticky save
4. CCTV empty: one CTA to assign viewing rights
5. Re-score after tile drill lands

## Guards

No door unlock · no Feature Control · no CCTV settings save · no Refrm · Bluebird only.

---
*Measured lab pass 2026-09-15 — replaces provisional_from_evidence for this surface.*
