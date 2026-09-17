# HelgoIQ overnight close-out — 2026-09-17

Morning pack for Declan (Europe/Athens weekday). Primary new content is the **2026-09-16→17 overnight programme** under `overnight-2026-09-16/` (tip `5b1def5c0951b33ec030289655ab057738226020`). Also includes `PROGRESS-2026-09-17.md` and the overnight `.tar.gz`.

## What's new vs 2026-09-16 pack
- Overnight on tip `5b1def5c`: Cluster A **19/24**, smoke **FAIL #1375**, dataset canary **FAIL**, Pulse **53 STEADY**, Dispatch generating, Twin Cancelling PARTIAL, Comms PARTIAL (Send Test PASS), Feel signed-out measured, Astra/ISO parked pending merges.
- Dispatch1 / Finance accuracy / GDPR / repair-retest: **continuity only** — no new artefacts since 2026-09-07.

## Tip
Overnight stamp + live tip at pack time: `5b1def5c0951b33ec030289655ab057738226020` (curl `/api/version` re-confirmed at pack).

## Status of this ZIP
**PARTIAL close-out** — overnight strands finished what they could; merge train + several seats/paths still NEED_DECLAN / parked. Finance + Dispatch1 programmes mid-flight historically and still have zero new artefacts.

## Exclusions
OTP / secrets / README-SEATS / passwords / `.secrets` / node_modules / `__pycache__` / GDPR `gdpr-evidence.zip` / nested prior closeout zips / full Command Centre evidence trees beyond tip stamp + matrix.
