# §1 Comms — RESULTS (fresh ac845589)

**Status:** COMPLETE  
**Tip:** `ac845589404b78c308cc30e5aee81eb9e648a220` (#1213 + #1337 lineage; hard-reload applied)  
**Seat:** Manager `helgoiq-bb-manager@agentmail.to` · Bluebird `c=150002`  
**Method:** Fresh computerUse walk — **not** drive9290  
**Proof inbox:** `helgoiq-comms-proof@agentmail.to`  
**Evidence:** `evidence/fresh-ac845589/`  
**Guards:** Bluebird only · Refrm read-only · no secrets · no mass Meta · Send Test / Agentmail seats only  

## Four-signal
URL `c=150002` · Bluebird Pilates — TEST DATA · Manager Agentmail · Admin shell · tip `ac845589…`

## Scorecard (×11 triggers)

| Bucket | n |
|---|---:|
| **PASS** | 2 |
| **PARTIAL** | 4 |
| **BLOCKED** | 4 |
| **N/A** | 1 |
| **FAIL** | 0 |

**Overall:** **PARTIAL**

| Item | Verdict | Notes |
|---|---|---|
| Comms triggers ×11 | **PARTIAL** | 2 full delivery proofs; several UI-only / unsafe-audience blocks |
| Ledger | **PARTIAL** | Booking confirmation row on Member B History; member cancel left no row |
| Agentmail delivery | **PARTIAL** | Booking → Member B; campaign Send Test → proof inbox; cancel/cover/form/segment/journey no product mail |
| Consent gating | **UNTESTED** | Session expired before prefs walk; no marketing-off exercise |
| Census §§3–7 | **PARTIAL** | See below; details also in `CENSUS-3-7.md` |

## Trigger matrix

| # | Trigger | Verdict | Sent? | Agentmail? | Comm tab? | Consent | Evidence |
|---:|---|---|---|---|---|---|---|
| 1 | booking confirmation | **PASS** | Yes | Yes — Member B `Booking Confirmed - Class at Bluebird Central on Wed 16 Sept` (2026-09-15T10:37Z) | Yes — History outbound booking row | Untested | `00`–`05` |
| 2 | class reminder | **N/A** | No | — | — | — | `10-reminder.png` — no manual fire; recipients 0/0 |
| 3 | waitlist promotion | **BLOCKED** | No | No | No | — | `11-waitlist.png` — no waitlist/promote control in add-client flow |
| 4 | cancellation (member) | **PARTIAL** | Roster removed | **No** new cancel mail (only prior booking confirm remains) | **No** cancel row (History still booking-only) | — | `12-cancel-member.png`, `13-cancel-comm.png` |
| 5 | class cancelled (studio) | **PARTIAL** | UI: Cancel Class & Notify on empty Wed 04:00 disposable | No recipients (0 attendees) | N/A | — | `14-class-cancel.png` |
| 6 | cover change | **PARTIAL** | Teacher swap → Covered | No notify control | N/A (0 attendees) | — | `15-cover.png`, `16-cover-result.png` |
| 7 | form notification | **PARTIAL** | Setting enabled; **no submit** (would notify `team@refrm.co.uk` — isolation smell) | No | No | — | `20-forms.png`, `21-form-submit-or-notify.png` |
| 8 | campaign send | **PASS** | Send Test | Yes — proof inbox `[TEST] CENSUS37-CAMP-Sep15` (2026-09-15T11:05Z); Unsubscribe footer present | Member History screenshot blocked (session expiry) | — | `22-campaigns.png`, `23-campaign-send-test.png` |
| 9 | newsletter | **BLOCKED** | No | No | No | — | `24-newsletters.png` — admin page unavailable on Manager |
| 10 | segment send | **BLOCKED** | No (aborted) | No | No | — | `26-segments.png`, `27-segment-send.png` — preview included unknown Gmails |
| 11 | journey step | **BLOCKED** | No | No | No | — | `28-journeys.png`, `29-journey-run.png` — test runner only offered unapproved admin-2 recipient |

### Agentmail receipts (this run)
| When (UTC) | Inbox | Subject |
|---|---|---|
| 10:37 | `helgoiq-bb-member-b@agentmail.to` | Booking Confirmed - Class at Bluebird Central on Wed 16 Sept |
| 11:05 | `helgoiq-comms-proof@agentmail.to` | [TEST] CENSUS37-CAMP-Sep15 |

(Pre-existing governed CI proofs in proof inbox from earlier tip runs are **not** counted as product-trigger passes.)

## Marketing census §§3–7

| § | Topic | Verdict | Summary |
|---|---|---|---|
| 3 | Tags & segments email | **BLOCKED / PARTIAL** | Segments live; Message aborted — unsafe Gmail in preview. Consent-off exclusion untested. |
| 4 | Newsletters | **BLOCKED** | `/admin/newsletters` unavailable on Manager seat. |
| 5 | Campaigns | **PASS** (Send Test) | Create/editor + Send Test to proof inbox delivered; broad send not used. Schedule locale en-GB observed prior. |
| 6 | Booking messages | **PARTIAL** | Confirmation E2E PASS; reminder N/A; waitlist BLOCKED; member cancel PARTIAL (no mail/ledger); studio cancel UI PARTIAL; cover swap without notify PARTIAL. |
| 7 | Comm tab ledger | **PARTIAL** | Booking confirmation logged. Member cancel did **not**. Campaign test ledger capture lost to session expiry. |

## Blockers / NEED_DECLAN
1. **Newsletter + Journeys admin** unavailable on Manager — confirm role/feature flag.
2. **Segment / journey audiences** still resolve non-Agentmail or unapproved seats — need Agentmail-only Send Test or proof-inbox-bound member.
3. **Form notify target** shows `team@refrm.co.uk` on Bluebird — isolation review.
4. **Member cancel** removes roster but does not email or ledger (vs booking confirm which does both).
5. **Cover change** has no notify affordance.
6. **Consent gating** still UNTESTED this run (session expired).

## Settings changes
- None logged for #1180.

## Artefacts left
- Disposable empty class cancelled (studio cancel test).
- Campaign draft/test `CENSUS37-CAMP-Sep15` (Send Test only).
- Member B booking was cancelled from roster after confirm test.
