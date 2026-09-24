# End now then join-and-pay walk — 24 Sept evening

**Studio:** Bluebird (test) only.  
**When:** Thu 24 Sep 2026, about 23:30–23:50 Europe/London.

## What we checked

1. **End membership today (“End now”)** on the live Membership & packs panel.
2. **Member join and pay with a card** after that — does the member see the exact amount before paying?

## Results (plain)

| Check | Result | In one line |
|-------|--------|-------------|
| End now | **PASS** | Member B was already ended (no active membership). Earlier tonight we had already proved End now sits beside Reinstate on Cancelling, with no refund, and the membership ended. That fix is live. |
| Member join→pay | **FAIL** | Checkout still showed **£112 a month** with HELGOBIRD 15% off. It did **not** show the exact first charge (**£19.21**) in plain English before pay. Stripe Checkout did show **£19.21**, but the card form stopped on an incomplete ZIP — we did **not** finish the charge. Home still shows 5 credits and no new membership. |

## What this means

- The old End now problem (only Reinstate on the panel admins use) is **fixed**. Quiet watch for End now can stop.
- Join→pay is **not** blocked by End now anymore. It fails for the display reason you already know: the member must be shown the exact first amount before they pay.
- Staging tip moved a few times this evening (unrelated merges). The End now fix stayed included.

## Evidence

Screenshots are in this drop’s `evidence/` folder (ended membership panel; checkout with £112 + HELGOBIRD; Stripe showing £19.21; home still on 5 credits).

No passwords or seat secrets in this report.
