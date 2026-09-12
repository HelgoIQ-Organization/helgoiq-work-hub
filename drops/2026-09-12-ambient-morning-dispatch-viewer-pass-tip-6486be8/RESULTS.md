# Ambient — Morning Dispatch viewer retest — RESULTS

- **When:** 2026-09-12 ~14:30 Europe/London
- **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59` (confirmed `/api/version`)
- **Tenant:** Bluebird Pilates `c=150002` · Admin2 · Stripe TEST · no Feature Controls · no Refrm · no Seed Demo
- **URLs:**
  - Admin: https://lobster-app-662c7.ondigitalocean.app/admin/morning-dispatch?c=150002
  - Viewer: https://lobster-app-662c7.ondigitalocean.app/dispatch?c=150002

## Verdict — **PASS** (Measured change vs prior FAIL)

Prior on tip `232659cf`: viewer reached Generating then crashed with **Something went wrong** / unexpected error.

**This tip:** viewer loads without crash. Honest empty state:

> Dispatch not ready yet — Nothing has been written for this role yet. The nightly job stays off until Declan enables email; an admin can generate this role's briefing now.

Role tabs present (Owner / Manager / Marketing / Sales) plus **Generate owner briefing**. No “Something went wrong” screen.

### Admin `/admin/morning-dispatch`
- Loads for Admin2. DISPATCH HEALTH shows **Not yet run today** (2026-09-12 · scheduled 00:30 UTC).
- Last successful dispatch: 2026-09-10 (owner) 23:37 UTC.
- Controls present: Enable Morning Dispatch, Generate Now (Studio Owner / Manager / Marketing / Sales), Preview Dispatch, Backfill, Seed Demo (not used).
- No crash; honest empty metrics (0 views).

### Pulse (quick)
- Navigated `/admin/studio-pulse?c=150002` after viewer; evidence `05-pulse.png` (page shell captured; not a full explainability re-score).

### Safety
- No Seed Demo / Seed Ambient / Feature Controls / Refrm writes.
- No credentials in notes.

### Evidence
`evidence/` under this folder (`01-admin-morning-dispatch.*`, `03-viewer_dispatch_c_150002.*`, `05-pulse.*`, `api-version.json`).

### SCORE note
Clear Measured change: Dispatch viewer FAIL → PASS (honest not-ready). Ambient strand suggestion in combined `SCORE-UPDATE.json`.
