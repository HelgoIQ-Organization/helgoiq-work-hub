# Astra Pass A — RESULTS

**Programme tip / stamp:** `ac845589404b78c308cc30e5aee81eb9e648a220`
**Before `/api/version`:** `ac845589404b78c308cc30e5aee81eb9e648a220` @ 2026-09-15T09:24:14Z
**After `/api/version`:** `ac845589404b78c308cc30e5aee81eb9e648a220` @ 2026-09-15T09:26:04Z (2026-09-15 12:26 EEST)
**Continue `/api/version`:** `ac845589404b78c308cc30e5aee81eb9e648a220` @ 2026-09-15T09:34:57Z (2026-09-15 12:34 EEST) via `https://lobster-app-662c7.ondigitalocean.app/api/version`
**Tip drift (Pass A start):** **NO** — proceed gate OK (#1337, #1302, #1321 on tip at start).

**PA-SCAN-2 `/api/version`:** `51015ca21e960a2b79faa20647ec284c03588a7c` @ 2026-09-15T10:33:09Z (2026-09-15 13:33 EEST) via `https://lobster-app-662c7.ondigitalocean.app/api/version`
**Tip drift at SCAN-2:** **YES** — expected `ac845589…`, live `51015ca21e960a2b79faa20647ec284c03588a7c` (noted; scan still attempted on authorised product path).
**Tenant:** Bluebird `c=150002` only. No Feature Control toggles. No Refrm.

## Gate status

| Check | Result |
|---|---|
| Tip = ac845589… | **PASS** (lobster buildToken + releaseSha @ 2026-09-15 12:34 EEST) |
| Merges #1337 / #1302 / #1321 | **YES** |
| UI matrix executable by this agent | **PASS** (browserUse completed PA-DISPATCH-REFERRAL) |
| Agentmail OTP path | **READY** (Admin2 / Manager / Owner inboxes listed) |

## Blocker (hard)

This delegated row was completed with the available browserUse session. Owner OTP was requested; Admin2 fallback authentication succeeded. Other unrelated Pass A rows remain pending.

No blocker remains for **PA-DISPATCH-REFERRAL**. Do not infer PASS for other rows from this result.

## Matrix

| test ID | stamp | seat + grant | source IDs | result | evidence |
|---|---|---|---|---|---|
| `PA-PULSE-OWNER` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Admin2 helgoiq-bb-admin-2@agentmail.to (Owner path; Owner session not present) / Admin / Owner-path surface | score 52 Steady; date Mon 14 Sept; snapshotId NOT visible in Saved Pulse UI | **PARTIAL** | `evidence/PA-PULSE-OWNER-landing.png; evidence/PA-PULSE-OWNER-auth-blocked.png` |
| `PA-DISPATCH-REFERRAL` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Admin2 `helgoiq-bb-admin-2@agentmail.to` / Owner view | dispatchId 7; generated 2026-09-10T23:37:30Z; date 2026-09-10; scrollY 0 restored | **PASS** | `evidence/PA-DISPATCH-REFERRAL-01-dispatch.png; evidence/PA-DISPATCH-REFERRAL-02-referral-hub.png` |
| `PA-EXEC-OWNER` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Admin2 `helgoiq-bb-admin-2@agentmail.to` / Owner path | reportId 499; pulse snapshotId 470; history showed 15 Sep + 9 Sep entries (IDs not rendered) | **PASS** | `evidence/PA-EXEC-OWNER-history.png; evidence/PA-EXEC-OWNER-report-after-back.png; evidence/PA-EXEC-OWNER-saved-pulse-top.png; evidence/PA-EXEC-OWNER-insufficient-components.png` |
| `PA-EXEC-MGR` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Manager helgoiq-bb-manager@agentmail.to / Manager pack (restricted) | n/a | **BLOCKED** | `evidence/ (none)` |
| `PA-TWIN` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Owner / Admin2 / Owner | memberId 2160676 candidate — not opened this continue | **BLOCKED** | `evidence/ (none)` |
| `PA-SUPPORT-OWNER` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Owner / Admin2 / Owner | n/a | **BLOCKED** | `evidence/ (none)` |
| `PA-SUPPORT-PA` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Platform Admin / Declan Gmail / platform_admin if available | n/a | **BLOCKED** | `evidence/ (none)` |
| `PA-CC-1326-OWNER` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Owner / Admin2 / Owner | location + snapshotId not captured | **BLOCKED** | `evidence/ (none)` |
| `PA-CC-1326-MGR` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Manager / restricted Manager locations | n/a | **BLOCKED** | `evidence/ (none)` |
| `PA-GRANTS` | `ac845589404b78c308cc30e5aee81eb9e648a220` | Admin2 inspect grants / Manager / Teacher 3 / Front Desk actual grants | grant evidence not captured | **BLOCKED** | `evidence/ (none)` |
| `PA-SCAN-1` | `51015ca21e960a2b79faa20647ec284c03588a7c` (live at SCAN-2; start stamp was ac845589…) | Owner or Admin2 / authorised Stage 2 product scans | none — never started before SCAN-2 wake | **BLOCKED** | `evidence/ (none)` |
| `PA-SCAN-2` | `51015ca21e960a2b79faa20647ec284c03588a7c` | Admin2 `helgoiq-bb-admin-2@agentmail.to` / Owner-path Agents | run_ids=[]; finding_ids=[]; producer_ran=false; queue New findings 3 (no IDs) | **BLOCKED** | `evidence/PA-SCAN-2.json; evidence/PA-SCAN-2-version.png; evidence/PA-SCAN-2-agents-before.png; evidence/PA-SCAN-2-agents-after.png` |

## Notes per row

- **PA-PULSE-OWNER:** Prior computerUse (8d3a1c6b): Pulse 52/100 Steady on /admin/studio-pulse?c=150002; Opened Saved Pulse (52/100 + insufficient-input indicators); Back restore NOT verified; Clerk session expired mid-flow. This executor cannot re-login (no Task/computerUse). Agentmail inbox Admin2 resolved for OTP when computerUse is re-dispatched.
- **PA-DISPATCH-REFERRAL:** Owner OTP was requested but not received during the wait window; Admin2 fallback session succeeded. Owner view rendered dispatch issue 7 (“A Quiet Morning, A Strong Foundation”), generated `2026-09-10T23:37:30Z`, with `Brainstorm Referral Ideas`. Referral hub opened and `Back to Morning Dispatch` restored the same date, Owner role, issue context, and `scrollY=0`. `/api/version` matched tip `ac845589…`.
- **PA-EXEC-OWNER:** **PASS** — `/admin/executive-briefing?c=150002` opened live as Admin2/Owner path. Existing Daily Executive Brief history listed 15 Sep 2026 and 9 Sep 2026, but did not render IDs. Generated a fresh Daily Executive Brief via the normal path: reportId `499`. One-tap `Open saved Pulse data` showed snapshotId `470`, saved snapshot date 15 September 2026, score 52/100, and explicit insufficient statuses (Revenue, Referrals, Task Completion, Recovery) without fake Critical/numeric placeholders. Back to report restored the report view with the Pulse opener focused and inner scroll at 0. `/api/version` matched tip.
- **PA-EXEC-MGR:** EXPECTED_GAP likely if Pulse leaks; do NOT invent PASS — needs live UI
- **PA-TWIN:** Twin Back restore for cancelling member — needs computerUse
- **PA-SUPPORT-OWNER:** #1313 Studio support framing — needs computerUse
- **PA-SUPPORT-PA:** May NEED_AUTH / NEED_DECLAN — record NEED_DECLAN when computerUse hits it; do not idle
- **PA-CC-1326-OWNER:** Occupancy vs Pulse comparison — needs computerUse
- **PA-CC-1326-MGR:** EXPECTED_GAP ok if company Pulse leaks; needs computerUse
- **PA-GRANTS:** Need actual grant UI evidence not role labels — needs computerUse
- **PA-SCAN-1:** Still **BLOCKED** — never started before the SCAN-2 routine wake; hour-apart Stage 2 pair incomplete; no invented IDs.
- **PA-SCAN-2:** **BLOCKED** (producer did not run). Tip **DRIFTED** to `51015ca21e960a2b79faa20647ec284c03588a7c`. Admin2 on `/admin/command-centre/agents?c=150002` saw only Studio support shell; Occupancy/Retention cards and Run review controls absent. Queue showed New findings 3 / Agent work 3 with **no** runId/findingId visible. No Feature Controls changed. See `evidence/PA-SCAN-2.json`.

## PA-PULSE-OWNER detail (prior computerUse + this continue)

- **Prior computerUse:** `sand-subagent-8d3a1c6b-277e-43fe-826f-2037741f8077`
- **Seat observed:** Admin2 on Bluebird TEST DATA (`c=150002`)
- **Seen:** Studio Pulse **52 / 100**, trend **Steady** (−8 this week), date **Mon 14 Sept**; Saved Pulse opened (52/100 + insufficient-input indicators)
- **Missing:** `snapshotId` not visible in panel; **Back** restore not verified
- **Blocker mid-flow:** Clerk session expired → sign-in (`PA-PULSE-OWNER-auth-blocked.png`); OTP not completed in that run
- **This continue:** tip reconfirmed; Agentmail Admin2 inbox resolved; **cannot** drive browser without Task
- **Verdict:** **PARTIAL** (surface exercised) — not PASS

## EXPECTED_GAP / FAIL watchlist (when UI runs)

1. **PA-EXEC-MGR** / **PA-CC-1326-MGR** — restricted Manager Pulse reader gap: RECORD as EXPECTED_GAP until Astra fix; **do not sign off Pulse as PASS**.
2. **PA-SUPPORT-PA** — may be NEED_AUTH / NEED_DECLAN, not FAIL.
3. **PA-TWIN** — cancelling banner must win over improving claims for member 2160676 if Twin opens.

## Scans / hour-2 wake

- **PA-SCAN-1:** **BLOCKED** — never started; no run/finding IDs. Hour-apart precondition for a paired Stage 2 scan was not met.
- **PA-SCAN-2:** Executed 2026-09-15T10:33:09Z UTC (2026-09-15 13:33 EEST) on tip `51015ca21e960a2b79faa20647ec284c03588a7c` (**drifted** from ac845589…). Seat Admin2. **producer_ran=false**. Occupancy/Retention agent cards absent (Studio support shell only). Real IDs: none. Evidence under `evidence/PA-SCAN-2*`. Finite routine deleted after notify.

## Counts

| PASS | FAIL | PARTIAL | BLOCKED | EXPECTED_GAP | SCHEDULED |
|---:|---:|---:|---:|---:|---:|
| 2 | 0 | 1 | 9 | 0 | 0 |

## Artifacts

- `STAMP.md` — tip reconfirm (incl. continue)
- `VERSION-RECONFIRM.json` — continue lobster `/api/version` body
- `RESULTS.md` — this file
- `matrix.json` — machine-readable rows
- `1180-DRAFT.md` — draft for #1180
- `evidence/PA-PULSE-OWNER-landing.png` — Pulse 52 Steady
- `evidence/PA-PULSE-OWNER-auth-blocked.png` — Clerk sign-in after expiry
- `evidence/PA-DISPATCH-REFERRAL-01-dispatch.png` — Owner-view dispatch issue 7 with referral action
- `evidence/PA-DISPATCH-REFERRAL-02-referral-hub.png` — Referral Programme hub with Back to Morning Dispatch
- `evidence/PA-EXEC-OWNER-history.png` — Daily brief history list (15 Sep and 9 Sep; IDs not rendered)
- `evidence/PA-EXEC-OWNER-report-after-back.png` — report view after Saved Pulse Back
- `evidence/PA-EXEC-OWNER-saved-pulse-top.png` — Saved Pulse data with snapshot reference 470
- `evidence/PA-EXEC-OWNER-insufficient-components.png` — insufficient/scored component statuses

**Recorded:** 2026-09-15T10:34:27Z (SCAN-2 append; Athens ~2026-09-15 13:33 EEST)
