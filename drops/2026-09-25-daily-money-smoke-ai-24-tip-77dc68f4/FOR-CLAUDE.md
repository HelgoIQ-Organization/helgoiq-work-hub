# FAIL-first pack — Daily money smoke + AI-24 — 2026-09-25

**Tenant:** Bluebird `c=150002` only  
**Staging:** https://lobster-app-662c7.ondigitalocean.app  
**Tip locked:** `77dc68f47e98aed2d0890efe51bed3dd1909f036` (#1615 QR payment StudioErrorBanner)  
**Tip before money = after money = at AI-24:** same SHA (no drift)

## FAIL / BLOCKED first

### Money
1. **discounted-checkout-and-single-grant — FAIL**
   - page-said: Order Summary **Total £112.00/mo**; HELGOBIRD applied — 15% off; Off your first invoice; copy says Stripe shows exact amount
   - Pay-button-said: app **Complete Purchase** → Stripe **Subscribe to Bluebird 8 £18.20** then £112.00/mo from 1 Oct 2026; control clicked **Pay without Link**
   - Stripe-took: **n/a** (Link OTP / card form; pay not completed; admin still **No active membership**)
   - session: `cs_test_a1bGA5F4hlgSbt62IohDI7iPYRUN23KCC0N3i7XSKHSgrjX1270HpRdHHB`
   - shots: `smoke/shots/jp-checkout-scrolled.png`, `jp-stripe-before-pay.png`, `jp-stripe-after-pay.png`, `jp-admin-membership.png`
2. **booking-cancellation-and-single-refund — FAIL**
   - Cancel clicked on My Bookings; after-shot still **Upcoming (1) Slow Flow Confirmed**
   - shots: `smoke/shots/jp-cancel-after.png`
3. **membership-cancellation-and-reversal — BLOCKED**
   - End now (#1565 merged) not applicable — no active membership after incomplete pay
   - shot: `smoke/shots/jp-admin-membership.png`

### AI-24
4. **AI-014 Command Centre Agents — FAIL** — Otto Othertenant in Bluebird Agents queue (wrong-tenant)
   - shots: `ai24/evidence/AI-014.png`, `AI-014-detail.png`
5. **AI-015 Command Centre Tasks — BLOCKED** — empty/data-gated
6. **AI-071 / 072 / 074 — SKIP** — no route

## PASS
- invitation-and-tenant-denial (Refrm denial modal)
- booking-and-confirmation-email (Slow Flow Mon 28 Sept 14:00)
- evidence-and-cleanup (32 smoke shots; tip stable)
- AI-24: 19/24 PASS → **79%**

## Six-step counts
PASS 3 · FAIL 2 · BLOCKED 1 · SKIP 0

## Paths
- `/workspace/daily-2026-09-25-money-ai24/smoke/RESULT.md`
- `/workspace/daily-2026-09-25-money-ai24/ai24/RESULTS-AI24.md`
- `/workspace/daily-2026-09-25-money-ai24/smoke/state.json`
- `/workspace/daily-2026-09-25-money-ai24/ai24/walk-results.json`

## Next walk (standing)
HELGOBIRD/display + join→pay still FAIL → continue that path on tip `77dc68f4` (complete Stripe card pay past Link OTP; re-check triad; then End now+Reinstate if grant lands). Else O5 Studio+Home Pulse.
