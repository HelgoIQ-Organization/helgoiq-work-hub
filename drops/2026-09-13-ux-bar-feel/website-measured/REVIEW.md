# Website / CMS — Feel measured review

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13 · **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`  
**Seat:** Admin 2 (`helgoiq-bb-admin-2@agentmail.to`) · Bluebird `c=150002`  
**Path:** `/admin/website-hub` (+ Pages, Health, Approval, Blog, Signage)  
**Method:** Observe-only. Drafts opened; one Health check (non-publishing). No live publish, Feature Controls, Styles save, or Refrm writes.  
**Viewports:** Desktop ~1280 · Phone ~390×844  

**Scores:** joyful **64%** · obvious **72%** · frictionless **60%** · overall **65%**

## Plain English

Website/CMS on Bluebird has **excellent draft/live governance language** (“Nothing goes live until you say so”, Approval Hub “Nothing publishes itself”) and named desktop paths that mostly land where they promise — stronger than Team chat, and better than the provisional 52. Joy comes from warm serif headings and clear start cards (Bring my site / blank / pages). It still loses points on **phone chrome** (tab row clips to a lone “I”; Blog “New Pos”), a **broken Health failure state** (banner says could not check while body still says not checked yet), and an **Unsaved badge that lies after Save Draft**. Not WhatsApp-smooth on phone, but desktop is already a credible studio CMS entry.

## Surfaces walked

| Surface | J | O | F | Notes |
|---|---:|---:|---:|---|
| Identity panel | 58 | 60 | 75 | Email correct; display name “Unknown” |
| Website Hub desktop | 74 | 88 | 80 | Warm start cards; readiness below fold |
| Readiness checklist | 68 | 78 | 70 | Actionable but backlog-feeling |
| Pages empty | 65 | 72 | 76 | Strong CTAs; 1 editing / 0 live counters |
| Website Health | 58 | 48 | 60 | Contradictory failure copy |
| Approval Hub | 71 | 85 | 83 | Best governance surface |
| Blog Hub | 68 | 86 | 84 | Draft badges + unpublished copy |
| Blog editor | 57 | 78 | 72 | Unsaved after Save Draft; Publish loud |
| Signage Hub | 61 | 83 | 78 | Clear but cooler tone |
| Website Hub phone | 68 | 61 | 55 | Tab clip → lone “I” |
| Blog Hub phone | 62 | 56 | 50 | “New Pos”; title truncation |

## Strengths

- Draft vs live language is consistently reassuring — best-in-hub for trust
- Desktop tabs and start cards are named and land correctly
- Warm typography + restrained green palette; inviting primary CTAs
- Sticky phone dock (Members / Inbox / Timetable) stays usable
- Approval Hub empty state is calm and well labelled

## Findings

### W-F001 — Health failure contradicts itself
- **Axis:** obvious · **Severity:** broken
- **Detail:** After Check my site, yellow banner “We could not check this site.” sits above body “We have not checked this site yet.” No score, timestamp, or next step.
- **Evidence:** `screenshots/05-health-fail.png`
- **Suggestion:** Single honest failure state with time + reason + Retry; never claim “not checked yet” after a failed attempt.

### W-F002 — Phone Website Hub tabs clip to “I”
- **Axis:** frictionless · **Severity:** broken
- **Detail:** At ~390px the horizontal tab row shows Home / Website Health / Pages then a lone **I** (likely Import / Insights clipped). Looks broken or mysterious.
- **Evidence:** `screenshots/10-website-hub-phone.png` · fix-candidates/before-phone-tabs-clip.png
- **Suggestion:** Scroll-snap tabs with peeks, wrap, or a “More” overflow — never orphan a single letter.

### W-F003 — Phone Blog Hub clips primary CTA (“New Pos”)
- **Axis:** frictionless · **Severity:** confusing
- **Detail:** New Post truncates to “New Pos”; titles clip heavily; search collapses to icon-only.
- **Evidence:** `screenshots/11-blog-hub-phone.png` · fix-candidates/before-blog-new-pos-clip.png
- **Suggestion:** Full-width primary button under filters; allow title wrap; keep search label or clear aria-label.

### W-F004 — Profile shows “Unknown” for Admin 2
- **Axis:** obvious · **Severity:** confusing
- **Detail:** Identity panel shows correct email but display name “Unknown”.
- **Evidence:** `screenshots/01-identity.png` · fix-candidates/before-identity-unknown.png
- **Suggestion:** Fall back to email local-part or Agentmail display name when name missing.

### W-F005 — Unsaved badge after Save Draft
- **Axis:** obvious · **Severity:** confusing
- **Detail:** Blog editor keeps orange Unsaved after Save Draft + reload while Status: Draft and fields persist; Publish sits loudly beside Save Draft.
- **Evidence:** `screenshots/08-blog-editor-draft.png` · fix-candidates/before-unsaved-badge.png
- **Suggestion:** Clear Unsaved on successful draft save; demote Publish visually when status is Draft.

### W-F006 — Branded splash on in-app route changes
- **Axis:** frictionless · **Severity:** polish
- **Detail:** Full HelgoIQ splash noticed between Website routes — Slack/WhatsApp don’t leave the shell for in-app moves.
- **Suggestion:** In-place skeleton inside Website chrome; never full-page splash for hub tab hops.

## Suggestions (priority)

1. Fix Health failure copy (W-F001) — same defect as Coverage L2 FAIL
2. Fix phone tab/CTA clipping (W-F002, W-F003) — clearest visual offs → see `FIX_CANDIDATE.md`
3. Clear Unsaved after draft save; soften Publish when Draft (W-F005)
4. Resolve Unknown display name (W-F004)
5. Celebrate empty site with a guided first-page win, not only a 0/13 backlog checklist
6. Keep draft/live labels — they’re already a strength

## Screenshots

All under `feel-measured/website/screenshots/` (01–11).

## Side effects

- One Website Health check attempted (failed; no publish)
- Existing blog draft viewed/left unpublished
- No live site publish · no Feature Controls · no Styles save
