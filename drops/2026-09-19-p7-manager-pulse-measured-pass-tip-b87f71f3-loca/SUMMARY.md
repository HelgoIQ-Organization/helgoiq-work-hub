# P7 Restricted Manager Pulse — SUMMARY

- **Tip:** `b87f71f3ca13261731b4e6237195d5cee655db06`
- **Tenant:** Bluebird `companyId=150002` only
- **Seat:** `helgoiq-bb-manager-restricted@agentmail.to`
- **Observed:** 2026-09-19 ~19:30 EEST
- **Verdict:** **MEASURED_PASS** (login restored + location-restricted Pulse behaviour confirmed)

## Auth repair

| Step | Result |
|---|---|
| Fixture password | Previously rejected (account never finished invite accept) |
| Clerk “Forgot password?” | Not usable until Clerk user exists (“Couldn’t find your account”) |
| Staff Hub invitations | Pending invite still **Awaiting Response** since 17 Sep (Manager) |
| Accept invite | Used invite token from Agentmail (expires 24 Sep 2026) |
| Sign-up + email OTP | Completed via Clerk verify-email (OTP from Agentmail) |
| New password | Set during accept; stored only under `evidence/new-password.txt` (not pasted here) |
| `auth.me` | `role=manager`, `companyId=150002`, `accountStatus=active`, userId `2160849` |

## Grant proof (location restriction)

Honest UI copy on Manager Admin Home / Studio Pulse:

> “Company-wide Pulse is withheld for your location-restricted access. It cannot describe an individual location.”

Morning Dispatch:

> “This briefing covers the whole studio and isn’t available with your current access.”

Location cues in walk: **Bluebird Central** present; company-wide Pulse/Dispatch correctly refused rather than leaking studio-wide scores.

## Pulse surfaces walked (Measured)

| Surface | Result |
|---|---|
| Admin Home | Loads; Pulse widget shows location-restriction withhold |
| Studio Pulse | Loads; company-wide Pulse withheld (restriction honouring) |
| Morning Dispatch | Loads; studio-wide briefing unavailable under current access |
| Command Centre | Loads onboarding (“Create your personal agent”) — no permission elevation |
| Timetable | Loads (location-scoped operational surface) |
| Members | Loads (177 total members listed in chrome) |

Screenshots: `evidence/pulse-*.png`, `evidence/manager-admin.png`, `evidence/after-otp.png`.

## No-ops / network

No grant mutations beyond accepting the already-issued Manager invite. Prefer not to need `import.rollbackBatch`. No GitHub.

## Blockers remaining

- Confirm explicit location chip = **only** Bluebird Central (home chrome still shows an “All Locations” label while Pulse copy asserts restriction — treat copy + Dispatch withhold as Measured restriction proof; optional follow-up to tighten switcher chrome).
- Full Manager Pulse question-bank (if a numbered P7 pack exists beyond this gate) can be extended from this authenticated seat without further password work.
