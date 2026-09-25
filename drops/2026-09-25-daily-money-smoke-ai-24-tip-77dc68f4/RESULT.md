# Daily six-step money smoke — 2026-09-25

**Tenant:** Bluebird only `c=150002` (Refrm denial-only)  
**Staging:** https://lobster-app-662c7.ondigitalocean.app  
**Viewport:** ~390×844 phone for member flows  
**Tooling:** Playwright persistent Chrome (`channel: 'chrome'`) via overnight playwright-core. Verdicts measured only.

## Tip stamps

| When | buildToken / releaseSha |
|---|---|
| Before money smoke | `77dc68f47e98aed2d0890efe51bed3dd1909f036` |
| After money smoke (step 6) | `77dc68f47e98aed2d0890efe51bed3dd1909f036` |
| Tip message | #1615 QR payment StudioErrorBanner |

## Six-step table

| # | Step | Verdict | Reason |
|---|---|---|---|
| 1 | invitation-and-tenant-denial | **PASS** | Signed in as member-b on Bluebird; Refrm c=150001 showed denial/no Bluebird snapshot leak (url=https://lobster-app-662c7.ondigitalocean.app/?c=150002&c=150002) |
| 2 | discounted-checkout-and-single-grant | **FAIL** | page-said=Order Summary Total £112.00/mo with HELGOBIRD 15% off (exact first-invoice not as Total); Pay-button-said=Stripe showed £18.20 (Subscribe Bluebird 8) / Pay without Link; Stripe-took=n/a (pay not completed; sess |
| 3 | booking-and-confirmation-email | **PASS** | UI booking confirmation observed |
| 4 | booking-cancellation-and-single-refund | **FAIL** | Cancel control clicked on My Bookings but after-shot still shows Upcoming (1) Slow Flow Confirmed with Cancel still present — cancel confirm not completed |
| 5 | membership-cancellation-and-reversal | **BLOCKED** | Member-b shows No active membership — End now/Reinstate not applicable until join→pay grants membership (LOADED membership workspace only) |
| 6 | evidence-and-cleanup | **PASS** | tipAfter=77dc68f47e98aed2d0890efe51bed3dd1909f036; shots=32; payments=cs_test_…HHB (opened, not completed) |

### Headline counts (six steps)
- PASS: 3
- FAIL: 2
- BLOCKED: 1
- SKIP: 0

## Money triad (page-said / Pay-button-said / Stripe-took)

| Step | page-said | Pay-button-said | Stripe-took | session |
|---|---|---|---|---|
| discounted-checkout (HELGOBIRD) | Order Summary Total £112.00/mo; HELGOBIRD applied — 15% off; Off your first invoice; explanatory copy says first invoice is less and Stripe shows exact amount | Complete Purchase (app) → Stripe Subscribe to Bluebird 8 shows £18.20 then £112.00/mo from 1 Oct 2026; UI control clicked: Pay without Link | n/a (payment not completed — stuck on Link OTP / card form; no membership grant; admin still No active membership) | `cs_test_a1bGA5F4hlgSbt62IohDI7iPYRUN23KCC0N3i7XSKHSgrjX1270HpRdHHB` |

**Money PASS rule:** FAIL on display mismatch even when arithmetic would be correct. App Total stayed **£112.00/mo** while Stripe Checkout displayed **£18.20** due now (then £112.00 from 1 Oct 2026). Payment was **not** completed (Link OTP / card form); admin still **No active membership**.

## Seat / admin notes
- Member seat: `helgoiq-bb-member-b@agentmail.to` (password from box secrets — not written here)
- Admin2: `helgoiq-bb-admin-2@agentmail.to` — memberId `2160670`
- Booking: Slow Flow Mon 28 Sept 14:00 confirmed (UI) — PASS
- Cancel: after-shot still Upcoming (1) Confirmed — FAIL
- End now (#1565 merged): not exercised — no active membership to end (join→pay incomplete)
- Credits remaining on home after incomplete pay: 5 (then 4 after book attempt path)

## Key shots (under `smoke/shots/`)
- `01-back-bluebird.png`
- `01-bluebird-home.png`
- `01-refrm-denial.png`
- `02-buy-clean.png`
- `02-buy-route-_memberships_c_150002.png`
- `02-checkout-scrolled.png`
- `02-checkout.png`
- `02-helgobird-applied.png`
- `03-timetable.png`
- `04-bookings-pre.png`
- `05-admin-members.png`
- `05-admin-memberships-route.png`
- `05-member-detail.png`
- `05-member-search.png`
- `05-membership-direct.png`
- `05-membership-workspace.png`
- `jp-admin-membership.png`
- `jp-after-complete.png`
- `jp-book-after.png`
- `jp-book-modal.png`
- `jp-bookings.png`
- `jp-buy.png`
- `jp-cancel-after.png`
- `jp-cancel-modal.png`
- `jp-checkout-scrolled.png`
- `jp-checkout.png`
- `jp-home-after.png`
- `jp-overview-after.png`
- `jp-schedule.png`
- `jp-stripe-after-pay.png`
- `jp-stripe-before-pay.png`
- `jp-stripe-loaded.png`

## Blockers
1. Step 2 display mismatch (known HELGOBIRD / pro-rata Total £112 vs Stripe £18.20)
2. Stripe pay not completed this run (Link OTP / Pay without Link card form incomplete)
3. Step 5 End now/Reinstate blocked until membership grant exists
4. Step 4 cancel confirm did not clear booking
