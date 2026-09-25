# Daily money smoke and AI score — 25 Sept 2026

Morning check on **Bluebird** staging. Plain status only.

## Money smoke (six steps)

| Step | Result | In plain words |
|---|---|---|
| Invitation + wrong-studio block | **PASS** | Member signed in on Bluebird; opening the other studio showed “you do not have access”. |
| Discounted join + pay (HELGOBIRD) | **FAIL** | Checkout still shows **£112.00/mo** as the Total even with the discount code on. Stripe’s pay page showed **£18.20** due now (then £112 from 1 Oct). Payment was **not** finished this morning (Link confirmation got in the way). Member still has **no active membership**. |
| Book a class | **PASS** | Booked Slow Flow (Mon 28 Sept 14:00) in the app. |
| Cancel that booking | **FAIL** | Cancel was tapped, but My Bookings still showed the class as Confirmed afterwards. |
| End membership / reinstate | **BLOCKED** | Nothing to end — membership never landed because pay did not finish. End now is merged but needs a live membership to rewalk. |
| Evidence + tip stamp | **PASS** | Tip stayed on the locked morning build; screenshots saved. |

**Counts:** PASS 3 · FAIL 2 · BLOCKED 1

### Money display (what the member saw)
- **App checkout Total:** £112.00/mo with HELGOBIRD (15% off first invoice noted in copy, but Total stayed £112)
- **Stripe pay screen:** £18.20 due now, then £112.00/mo from 1 Oct 2026
- **Actually charged:** nothing this run (pay not completed)

Under your money rule this stays **FAIL** until the app shows the same amount the member will pay, in plain English, before they pay.

## AI score (24 admin screens)

- **79%** (19 pass · 1 fail · 1 blocked · 3 skip)
- **Main fail:** Command Centre Agents still shows **Otto Othertenant** on Bluebird (wrong studio data).
- Tasks screen opened but looked empty / gated.
- Three older AI routes still have no page on this build.

## What next (started after this drop)
1. **Keep pressure on HELGOBIRD / join→pay display** — same fail as last night: page says £112, Stripe says ~£18–19, pay path not clean.
2. Then Studio + Home Pulse / intel on this same build if money still blocked.
3. End now rewalk only after a real membership grant.

## Links
- Full technical pack: see companion `FOR-CLAUDE.md` in the same Hub drop
- Workspace: `/workspace/daily-2026-09-25-money-ai24/`
