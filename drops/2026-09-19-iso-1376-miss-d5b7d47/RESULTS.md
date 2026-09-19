# ISO-1376 miss evidence — tip d5b7d47

- **Staging:** https://lobster-app-662c7.ondigitalocean.app
- **Tip check:** `/api/version` `releaseSha` starts with `d5b7d47` (confirmed).
- **Seat:** `helgoiq-bb-admin-2@agentmail.to`
- **Tenant under test:** Reformer (`c=150001`, i.e. c != Bluebird `150002`).
- **Writes:** None. No Reformer writes and no `import.rollbackBatch`.

## ISO-18 — FAIL

- **Exact page:** `https://lobster-app-662c7.ondigitalocean.app/?view=client&c=150001`
- **Click/navigation sequence:** From the signed-in Admin2 session, navigate to the exact URL above (no chooser option was clicked; the page itself rendered the account chooser). Inspect the `Business access` section and then the `Memberships` section.
- **Observed evidence:** The Reformer-scoped URL rendered `Welcome, there` with `Business access` listing **“Bluebird Pilates — TEST DATA (fabricated)”** (Admin) and `Memberships` also listing **“Bluebird Pilates — TEST DATA (fabricated)”** (Member experience).
- **Screenshot:** `/workspace/helgoiq-full-programme-2026-09-17/iso-1376-miss-d5b7d47/iso-18-reformer-client-chooser.png`

## ISO-29 — FAIL

- **Exact page:** `https://lobster-app-662c7.ondigitalocean.app/admin/command-centre?c=150001`
- **Click/navigation sequence:** From the same signed-in Admin2 session, navigate to the exact Reformer Command Centre URL above. The page rendered `Choose a studio first`; the only available studio button was **“Bluebird Pilates — TEST DATA (fabricated)”**. The Bluebird button was not clicked, preserving the chooser evidence.
- **Observed evidence:** Reformer Command Centre chooser offers only Bluebird, proving the membership-only Bluebird tenant remains exposed under Reformer.
- **Screenshot:** `/workspace/helgoiq-full-programme-2026-09-17/iso-1376-miss-d5b7d47/iso-29-reformer-command-centre-chooser.png`

**Verdict:** ISO-18 FAIL / ISO-29 FAIL. Do not mark PASS.
