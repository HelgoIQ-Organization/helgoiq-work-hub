# HelgoIQ M1 Lifecycle Wave 1 — Bluebird (c=150002)

Date: 2026-09-10 UTC+1. Environment: staging, Stripe TEST. Tip at start: `232659cf05d22e5de920ee547925b37581cfb6d4`.

## Admin2 — freeze/unfreeze (BB Smoke Sep8)
- Freeze: **PASS**. Admin2 opened BB Smoke Sep8 (active Bluebird 8), submitted the pause for the displayed 20-day period, and the admin membership record/list showed `Paused · bills 30 Sept 2026`. Evidence: `evidence/admin2-smoke-freeze-modal.png`, `evidence/admin2-smoke-paused.png`.
- Unfreeze/resume: **FAIL**. Admin2 pressed `Resume`; UI returned `We couldn't resume billing with the payment provider. Your membership is still paused. Please try again or contact the studio.` The member remained paused. No card was saved, so no payment-provider success could be claimed. Evidence: `evidence/admin2-smoke-resume-failed.png`.
- money_ok: freeze itself made no charge; resume money path failed at provider. lists_agree: admin detail/list agree on paused state; wallet showed 0 credits for this paused smoke member. audit/member effects: pause event visible in member activity; resume did not change state.

## Admin2 — cancel and reverse (BB Member B)
- Cancellation: **PASS**. Admin2 scheduled cancellation of Member B's active Bluebird 8; record showed cancelling / end date 01 Oct 2026. Evidence: `evidence/admin2-memberb-cancelling.png`.
- Reverse cancellation: **PASS**. Admin2 used the reversal/Keep path; record returned to Active with 8 credits and activity showed `Membership Reinstated`. Evidence: `evidence/admin2-memberb-reinstated.png`.
- money_ok: no new charge/refund was triggered; membership billing remained healthy as displayed. lists_agree: member record showed Active Bluebird 8 and 8 credits after reversal. audit/member effects: cancellation scheduled then reinstatement events visible.

## Admin2 — upgrade/downgrade
- Upgrade: **BLOCKED**. Upgrade modal opened for active Member B, but the custom tier picker exposed no selectable higher tier; Confirm remained disabled. No billing mutation attempted.
- Downgrade: **BLOCKED**. Downgrade modal opened, but no lower tier was available; Confirm remained disabled. No billing mutation attempted.
- money_ok/lists_agree/audit/member effects: N/A because neither action could be submitted.

## Member B client seat
- **BLOCKED / not scored as client PASS**. Admin2's View as Member preview confirmed Member B has Active Membership, 8 credits, and bookable timetable rows, but this is an admin preview, not the Member B authenticated seat. No client join/payment or client booking/cancellation was claimed.

## Inventory/other paths
- Waitlist/promotion: **BLOCKED — no full class inventory**. Preview displayed bookable classes at 0/10; no full class to exercise promotion.
- No-show: **BLOCKED — no roster/upcoming class available** in the reachable admin/member records.
- Transfer/gift/pack/credit expiry/family/GDPR: **BLOCKED — not safely reachable in this wave; no destructive GDPR target used.**
- Owner seat: **BLOCKED/not attempted** after Admin2 resume payment-provider failure; no OTP/sudo/settings escalation attempted.

## End check
Tip at end: `232659cf05d22e5de920ee547925b37581cfb6d4` (same build token/release SHA as start).
