# Overnight six-step smoke — ALL PASS on tip 232659cf

**When:** 10 Sep 2026 ~22:45 Europe/London  
**Live tip:** `232659cf05d22e5de920ee547925b37581cfb6d4` (start and end)  
**Tenant:** Bluebird `c=150002` · Stripe TEST · no Refrm writes  
**Headline impact:** Launch Hub **68%** (was 64% estimate on this tip before smoke; morning 52%)

## Result — Measured 6/6 PASS

| Step | Verdict | Notes |
|---|---|---|
| 1 Invite + tenant denial | PASS | Authenticated Bluebird member; account-not-found **gone**; Refrm denied |
| 2 Discounted checkout | PASS | Bluebird 8 + HELGOBIRD Stripe TEST; single 8-credit grant |
| 3 Booking | PASS | Reformer Flow booked; UI confirmation |
| 4 Booking cancel + credit | PASS | Within policy; single credit return; lists agree |
| 5 Membership cancel + reverse | PASS | **Cancelling→Active** with Auto-renew On — **first proven reverse this programme** |
| 6 Evidence + cleanup | PASS | Tip rechecked; evidence captured; tenant left tidy |

## Hard rules (unchanged)

- **#1240 is LIVE** on `/api/version`, but **Declan has NOT cleared the rollback ban**.
- Never instruct `import.rollbackBatch` / never roll back until Declan clears.
- Cluster A / M1 / ISO / ambient / AI-85 **not re-run tonight** — stay Estimate on the Launch Hub.

## Evidence location (box)

`/workspace/helgoiq-overnight-2026-09-10-11/01-smoke/` (SMOKE-SUMMARY.md, STEPS-2-5.md, evidence/)

No credentials in this drop.
