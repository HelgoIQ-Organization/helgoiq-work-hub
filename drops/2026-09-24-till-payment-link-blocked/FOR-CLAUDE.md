# FAIL-first — till payment link C1 (#1559) Bluebird

**Verdict: BLOCKED / product bug** — not NOT READY (UI path exists on tip).

## Tip
- Live `releaseSha`: `ce802238857b2d6cc841cdbf6b3868b95d316c75` (#1631 tip; **#1559 merge `42a38b8b` is ancestor**, ahead_by 8).
- Walk wrongly self-blocked on tip-drift vs frozen SHA `6e26a2b8`; gate should be “#1559 ancestry”, not exact SHA.

## Reproduction
1. Studio Bluebird `c=150002`, staging DO app.
2. Seat: manager (`helgoiq-bb-manager@…`) — frontdesk gets Admin Access Required on till.
3. `/admin/pos-hub?c=150002&tab=till`
4. Add POS Test Basket £20 ×1, location Bluebird North, tender **Payment link**, member Nina Bell SEED:12M-2026-09, message `C1 till payment-link test`.
5. Create → **HTTP 500** `kioskOrders.createTillSale`. UI: “This request could not be completed.” No `/pay/…`.

## Code on tip (already has link tender)
`createTillSale` accepts `tender: z.enum(["card","cash","link"])` and link branch calls `insertPaymentLink` + `paymentLinkUrl`.

## Likely 500 causes (investigate in order)
1. `PAYMENT_LINK_TOKEN_KEYS` missing/invalid on staging → throw in `parsePaymentLinkTokenKeys`.
2. `ENV.publicAppOrigin` unset → `paymentLinkUrl` PRECONDITION_FAILED (“public app URL is not configured”) — confirm if mapped to 500.
3. Connect / shop seller “not ready” PRECONDITION_FAILED on link tender for Bluebird North.
4. DB: `payment_links` / settings table missing or till_sale insert constraint.
5. Unhandled `throw new Error("Till order committed without its payment link.")`.

## Evidence
`/workspace/drops/2026-09-24-till-payment-link-1559-bluebird/evidence/` — version.json, 01-before-create.png, 02-create-error.webp

## Done when
Staging create returns URL; phone-width pay records page-said / Pay-said / Stripe-took match; Hub dual report PASS.
