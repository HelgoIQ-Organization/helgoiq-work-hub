# HelgoIQ M1 blocked-steps retest

- Date: 2026-09-11
- Scope: Bluebird, company `150002`, Stripe TEST only
- Tip start/end: `/api/version` confirmed `releaseSha` starts `a263c4ab` (see `evidence/tip-start.png`, `evidence/tip-end.png`).
- No passwords recorded. No Refrm writes, CSV, settings toggles, or Feature Controls used.

## Verdicts

1. **Active member prep (smoke-2): PASS.** Active membership and credit wallet were visible; timetable opened with bookable Bluebird Central classes (10 spots shown). Evidence: `active-membership.png`, `timetable-bookable.png`.

2. **Signed-out booker return (#1252): PASS.** Signed-out deep link `/timetable?c=150002&classId=1` was opened from the public timetable booking flow. Login wall was reached; after smoke-2 sign-in, the browser returned to the same class URL and class listing, not home. Evidence: `1252-before-login.png`, `1252-after-login.png`.

3. **Waitlist: BLOCKED — no full inventory.** Live Bluebird Central timetable dates checked (Sep 7–13); no class showed 0 spots, so no waitlist join was attempted.

4. **Unfreeze/recheck (BB Smoke Sep8): FAIL / payment-provider block.** Admin2 opened the paused Bluebird 8 membership and attempted Resume once. UI error: “We couldn't resume billing with the payment provider. Your membership is still paused.” Evidence: `unfreeze-before.png`, `unfreeze-after.png`.

5. **Upgrade/downgrade recheck (active Member B): BLOCKED — no selectable tiers.** Both Upgrade and Downgrade modals opened; tier selectors had no options and confirmation buttons were disabled. No billing action was confirmed. Evidence: `upgrade-modal.png`, `downgrade-modal.png`.
