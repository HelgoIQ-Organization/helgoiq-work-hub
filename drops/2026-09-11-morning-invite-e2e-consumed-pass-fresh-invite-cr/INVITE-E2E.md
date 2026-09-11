# HelgoIQ Invitation E2E — 2026-09-11

- **Target:** Bluebird, `c=150002`
- **Tip check:** PASS — `/api/version` reported `releaseSha` beginning `a263c4ab`.
- **OTP:** None encountered for Admin2.

## A — Consumed invite (#1258)

**PASS.** Opening the consumed smoke-2 token redirected within Bluebird to a clear page titled **Invitation already accepted**, with the message that the member invitation had already been used. No crash, hang, wrong-tenant access, or silent failure observed.

Evidence: `evidence/A-consumed-invite.png`

## B — Fresh member invite + bind (#1247)

**FAIL / blocked at invite creation.** Admin2 signed in successfully and the Bluebird Admin > Members invite form accepted:

- Name: `BB Invite E2E Sep11`
- Email: `helgoiq-bb-invite-e2e@agentmail.to`

The Send invitation action closed the form, but after refresh the pending list remained **Awaiting response (2)** with only the two pre-existing invitations; the target email was not present in pending or searchable members/history. A second attempt had the same result. Therefore no accept URL/token was available, and signup/first-sign-in binding could not be tested.

Evidence: `evidence/B-invite-form-filled.png`, `evidence/B-pending-list-no-new-invite.png`

- **Invite URL/token captured:** None.
- **NEED_OTP_INVITE:** Not reached.

## C — Staff invite route (optional)

**PASS (screenshot-only route check).** Admin2 opened Staff > Invitations successfully. The page showed **0 pending · 11 historical** invitations and an Invite Staff control. No staff invitation was sent.

Evidence: `evidence/C-staff-invitations.png`
