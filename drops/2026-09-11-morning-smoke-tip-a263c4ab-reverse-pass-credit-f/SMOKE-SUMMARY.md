# Smoke summary — Bluebird c=150002 Stripe TEST

**Run:** 2026-09-11 (UTC+1 context)  
**Release gate:** PASS — `/api/version` JSON `releaseSha` starts `a263c4ab`.  
**OTP:** PASS — newest code (redacted) accepted; no resend used.  

| Step | Verdict | Evidence / result |
|---|---|---|
| 2. Join Bluebird 8 + HELGOBIRD | PARTIAL | Bluebird 8 became Active and Stripe TEST checkout succeeded; 8 credits initially visible. `HELGOBIRD` was not entered; checkout used displayed standard price. |
| 3. Book Bluebird Central | PASS | Reformer Flow booking confirmation shown. |
| 4. Cancel booking; credit returns once | FAIL | Cancellation completed, but late-cancellation warning said no refund and a fresh Home reload showed 7 credits (not 8). |
| 5. Cancel membership then reverse to Active | PASS | Cancellation confirmed, then Manage Membership showed Active. Reverse proven **YES**. |

Evidence files:
- `evidence/03-booking-confirmed.png`
- `evidence/04-post-cancel-credits-7.png`
- `evidence/05-membership-cancel-confirm.png`
- `evidence/06-cancellation-confirmed.png`
- `evidence/07-reverse-active.png`

No Feature Controls, Refrm writes, or CSV import used.
