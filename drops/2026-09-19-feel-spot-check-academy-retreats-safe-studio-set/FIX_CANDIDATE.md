# FIX_CANDIDATE — dock clips lower content (cross-hub)

- **Title:** Fixed bottom dock obscures lower page content (Academy / Retreats / Security / Camio / Setup)
- **Routes:** `/admin/academy`, `/admin/academy/courses`, `/admin/academy/teachers`, `/admin/retreats/2`, `/admin/retreat-financials`, `/admin/security-hub`, `/admin/camio-live`, `/admin/setup-hub` (+ `?c=150002`)
- **Axis:** frictionless
- **Severity:** High (blocks reading/acting on lower cards without scroll gymnastics; recurring #1290 family)
- **Tip:** `b87f71f3ca13261731b4e6237195d5cee655db06`
- **Before screenshots:**
  - `FIX_CANDIDATE_before/dock-clip-academy-overview.png`
  - `FIX_CANDIDATE_before/dock-clip-academy-teachers.png`
  - `FIX_CANDIDATE_before/dock-clip-retreats-2.png`
  - `FIX_CANDIDATE_before/dock-clip-retreat-financials.png`
  - `FIX_CANDIDATE_before/dock-clip-security-hub.png`
  - `FIX_CANDIDATE_before/dock-clip-camio-live.png`
  - `FIX_CANDIDATE_before/dock-clip-setup-hub.png`
- **What to fix:** Translucent fixed dock overlaps the last row of cards / Quick Actions / Recent Alerts / Camio connection copy so labels and CTAs are clipped.
- **Suggested fix:** Add bottom padding to main scroll regions equal to dock height, or raise content above the dock; confirm on 1280×800 and laptop heights used in Feel walks.

---

# NOTE (not a FIX_CANDIDATE — seat gate)

- **Feature Management** returns “Platform Admin Access Required” for Admin 2 on tip `b87f71f3`. Refrm Academy leak on Bluebird Feature Management **not re-verified** this walk. See `settings/screenshots/feature-management.png`.
