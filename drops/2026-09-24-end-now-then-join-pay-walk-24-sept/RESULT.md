# RESULT — End now (#1565) then #1533 join→pay — 24 Sep 2026 (quiet watch)

**Studio:** Bluebird `c=150002` · https://lobster-app-662c7.ondigitalocean.app  
**Seats (email only):** Admin2 `helgoiq-bb-admin-2@agentmail.to` · Member B `helgoiq-bb-member-b@agentmail.to`  
**Stripe:** TEST only · **Refrm:** read-only  
**Recorded:** 2026-09-24 ~23:30–23:50 Europe/London  
**Browser:** Playwright + isolated Chrome profiles (Task/computerUse unavailable on executor; same pattern as L1 clean)

## Tip gate
| When | SHA | Notes |
|------|-----|-------|
| Brief expected | `dc20442b0b9b2af3c84bb55aa7b7cdae57ee73a9` | #1606 card-payments message; includes #1565 |
| Walk A/B actual | `009d31f9f4e27baebb1bd63325c5387d8c5ca2f8` | #1662 retention; tip drifted mid-evening |
| Tip-after | see `evidence/tip-after.json` | |
| #1565 ancestor? | YES | compare 8558a9cc… → tip ahead |

## Verdicts
| Walk | Verdict | One-line |
|------|---------|----------|
| End now | **PASS** | Member B already **No active membership** (prior End now same evening on tip `2b928217` with **End now beside Reinstate**, no refund). This tip cannot re-show beside Reinstate without Cancelling. #1565 still served (ancestor). |
| End now visible beside Reinstate (this pass) | **No** | Panel: No active membership + Add membership (A02/A06). Prior proven beside=true. |
| #1533 join→pay | **FAIL** | App Order Summary **Total £112.00/mo** + HELGOBIRD 15%; Pay-button **Complete Purchase** (no amount); Stripe Checkout **displayed £19.21** Total due today but **ZIP incomplete — charge not completed**; home still 5 credits. |

## Triad (verbatim)
- **page-said:** Bluebird 8 £112/month; Order Summary Total **£112.00/mo**; HELGOBIRD applied — 15% off; First invoice only; copy says Stripe shows exact amount — **no plain £19.21 on app**
- **Pay-button-said:** Complete Purchase (no amount)
- **Stripe-took:** n/a (not completed). Stripe **displayed** £19.21. session `cs_test_a1Btcdn9PS3WIsh5Ipnm0TZdniVSaRsec6XoFQqewt1SBPg2FL2lGKfcYX`

## Isolation
Admin End now / panel check first; admin signed out / profile closed; then separate member-b profile for join→pay. No shared sessions.

## Evidence
`/workspace/endnow-1533-2026-09-24/evidence/` — A02/A06 already-ended; B-02b checkout HELGOBIRD; B-05 Stripe £19.21 + ZIP error; B-07 home still 5 credits

## Routine recommendation
`quiet-watch-end-now-ui-fix-tip-then-1533`: **recommend DELETE for End-now half** (UI fix proven served; member already ended). **Keep / do not treat #1533 as closed** — display FAIL is the known HELGOBIRD first-invoice issue (not End-now blocked). Executor does not delete the routine.
