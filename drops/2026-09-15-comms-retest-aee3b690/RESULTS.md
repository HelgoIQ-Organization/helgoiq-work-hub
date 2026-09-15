# Comms retest — tip `aee3b690`

**Status:** COMPLETE  
**Tip:** `aee3b690b2f895393adf2b636dfc0c202d5d43fc`  
**Seat:** Manager `helgoiq-bb-manager@agentmail.to` · Bluebird `c=150002`  
**Proof inbox:** `helgoiq-comms-proof@agentmail.to`  
**Evidence:** `evidence/` (`00`–`05`, `10`–`18`)  
**Guards:** no secrets · no mass Meta · no Refrm writes · journey not run (unapproved recipient)

## Scorecard (Commander items)

| # | Item | Verdict | Notes |
|---|---|---|---|
| 1 | #1213 delivery ledger proofs | **PARTIAL** | Booking confirm **PASS** (Agentmail + History Sent). Member cancel **PARTIAL** (cancel works; **no notify** in dialog; **no** cancel History row; **no** cancel mail). Reminder **N/A**. Newsletter **BLOCKED** (admin unavailable). |
| 2 | #1343 cover-swap → proof mail + History | **PARTIAL** | Cover/swap UI observed; **no new notify control** (only substitution/pay-rate). Swap **canceled** — no class change, no mail to proof inbox. |
| 3 | #1344 journey via proof inbox | **BLOCKED** | Test runner only offered `helgoiq-bb-admin-2@agentmail.to` — not approved; journey **not run**. |
| 4 | Consent gating (marketing-off) | **UNTESTED** | Prefs UI observed (push/email controls; Save disabled). No toggle exercised / restored. |

**Overall:** **PARTIAL**

## #1213 detail

| Path | Verdict | Agentmail | Comm History | Evidence |
|---|---|---|---|---|
| Booking confirmation | **PASS** | Yes — Member A `Booking Confirmed - Class at Bluebird Central on Wed 16 Sept` @ 2026-09-15T17:09Z | Yes — status Sent | `01`–`03` |
| Member cancel | **PARTIAL** | No cancel mail (only prior booking confirm remains) | No cancel row | `04`–`05` |
| Reminder | **N/A** | — | — | `18-reminder.png` |
| Newsletter | **BLOCKED** | — | — | `17-newsletters.png` — page unavailable |

## Agentmail receipts (this retest)
| When (UTC) | Inbox | Subject |
|---|---|---|
| 17:09 | `helgoiq-bb-member-a@agentmail.to` | Booking Confirmed - Class at Bluebird Central on Wed 16 Sept |

Proof inbox (`helgoiq-comms-proof@agentmail.to`): **no new product mail** this retest (cover not notified; journey not run).

## Still open vs prior Claude dispatch
- Member cancel notify + ledger (unchanged PARTIAL)
- Cover notify (#1343 not visibly landed / not exercised to send)
- Journey proof-inbox recipient (#1344 still admin-2 only)
- Newsletters Manager availability
- Consent walk needs a live Saveable prefs session

## Settings
- None changed.
