# Settings / setup / feature mgmt — Feel measured review

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-15 · **Tip:** `e3ba86e851ff268ad439041a193feb3f742c03ed`  
**Seat:** Admin 2 · Bluebird `c=150002` · observe-only  
**Path hint:** `/admin/feature-management` (+ setup, integrations, GDPR, migration)

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **50%** | **34%** | **52%** | **45%** |

Previous provisional: 38 / 28 / 40 → **35**. Measured **lifts** setup/import warmth; Refrm-named feature on Bluebird still crushes obvious/trust.

## Plain English

Setup Hub, Integrations, Meta connection, and Data Migration feel clearer than the L2 provisional. Platform Sales correctly blocks without PA. The trust hole remains: Feature Management search `Refrm` on Bluebird still returns **Refrm Academy — Learning** (`academy.learning`). A studio owner should never see another brand’s feature name here. Toggle table is dense and risky — we did not flip anything.

## Surfaces walked

| Route | Feel snapshot |
|---|---|
| `/admin/setup-hub` | Warm card grid; dense inventory |
| `/admin/integrations` | Clear Google connect path |
| `/admin/feature-management` | Tier cards + toggle table |
| search `Refrm` | **Refrm Academy — Learning** still listed on Bluebird |
| `/admin/meta-connection` → meta-hub connection | Clean Facebook connect |
| `/admin/gdpr` | Existing export/deletion records; actions untouched |
| `/admin/platform-sales` | PA Access Required — correct block |
| `/admin/data-migration` | Clear New Import workflow; wizard not started |

Screenshots: `feel/settings/screenshots/`  
Fix candidates: `feel/settings/FIX_CANDIDATE.md`

## Strengths

1. Setup Hub category cards are approachable
2. Platform Sales PA gate is honest (BLOCKED, not a crash)
3. Data Migration step list is readable
4. Meta connection empty state is clear
5. Observe-only Feature Management search works without forcing a toggle

## Findings (measured)

### SET-FEEL-01 — Refrm-named feature on Bluebird
- **Axis:** obvious / joyful · **Severity:** high
- **Detail:** Search `Refrm` → 1 of 241 features: **Refrm Academy — Learning** (`academy.learning`, Core). Session stayed `c=150002`. Toggle not flipped.
- **Evidence:** `feature-management-refrm.png`

### SET-FEEL-02 — Feature Control density
- **Axis:** frictionless · **Severity:** medium
- **Detail:** Large toggle-heavy table; easy to flip the wrong flag. No confirm framing on first glance.
- **Evidence:** `feature-management.png`

## Suggestions

1. Scope or hide Refrm-named features from Bluebird Feature Management
2. Confirm dialog + plain risk copy before any Feature Control toggle
3. Group settings by job-to-be-done, not internal module names
4. Keep PA gate pattern for platform-only pages
5. Re-score obvious after Refrm leak clears

## Guards

No Feature Control toggles · no GDPR export/delete · no migration complete · no Meta create · no Refrm writes · Bluebird only.

---
*Measured lab pass 2026-09-15 — replaces provisional_from_evidence for this surface.*
