# HelgoIQ morning smoke 2026-09-11

- **Preflight:** Entered newest Clerk OTP (redacted); verification succeeded and Bluebird invite opened. Confirmed `/api/version` JSON only; `releaseSha` starts with `a263c4ab`.
- **2 — Join:** Joined **Bluebird 8** for Bluebird Central using Stripe TEST card `4242…4242`, expiry `12/34`, CVC `123`. Membership became Active. Core join: **PASS**. *(The checkout completed at the displayed standard price; `HELGOBIRD` was not entered.)*
- **3 — Book:** Booked Bluebird Central **Reformer Flow**, Fri 11 Sep at 02:00. Confirmation shown; one credit was consumed. **PASS**.
- **4 — Cancel booking:** Cancelled via the late-cancellation confirmation. The immediate client view briefly showed 8, but a fresh Home reload showed 7; the late-cancellation warning stated the credit would not be returned. Credit-return-once: **FAIL**.
- **5a — Cancel membership:** Completed the full cancellation flow (reason: Too expensive). “Cancellation confirmed” shown; evidence captured. **PASS**.
- **5b — Reverse:** Used Restart/Reverse cancellation, then confirmed Manage Membership showed **Active** again. Evidence captured. Reverse proven: **YES**.

No Feature Controls, Refrm writes, or CSV import used.
