# Rollback ban lifted — tip a263c4ab

**When:** 11 Sep 2026 ~08:18 Europe/London  
**Live tip (confirmed `/api/version`):** `a263c4ab3e85e24d82f292268a2427907ae7eec4`  
**Prior Measured tip:** `232659cf05d22e5de920ee547925b37581cfb6d4`  
**Headline:** **~65%** (overnight Measured held; findings-fix Estimate 87%; targeted retest pending)

## Live `/api/version`
```json
{"buildToken":"a263c4ab3e85e24d82f292268a2427907ae7eec4","releaseSha":"a263c4ab3e85e24d82f292268a2427907ae7eec4","commandCentreRuntimeIngress":"early-auth-response-finish-v1"}
```

## Six PRs live (+ CI)
- **#1250** demo seed (capacity-stack Bluebird)
- **#1252** signed-out booking return
- **#1254** Business Insights server KPIs
- **#1253** Twin overview
- **#1247** invite bind
- **#1258** smoke invite fix
- **(+ #1248)** full pnpm CI

## Declan action closed
- **`declan-clear-rollback-ban`** → **done**
- Title: **Rollback ban lifted — #1240 live on tip**
- Guardrail: prefer not to need rollback; if used, **company-scoped batchId only**

## Overnight Measured (held from 232659cf)
- Smoke 6/6 PASS — re-smoke pending on a263c4ab
- Cluster A 20/24 — same four fails
- ISO-29 COMPLETE 26 PASS / 4 FAIL / 2 NOT_RUN
- Ambient evidence (Pulse OK; Dispatch viewer FAIL)
- AI-85 48/5/23/8/1
- **Dataset canary still FAIL** — Missing companyId on `batchImport.upload` (403); 0 members → **Engineering**

## Sections kept
- **Your Moves** — Declan-only (ban card now Done; secrets / AI controls / B–F / Smoke pause remain)
- **Engineering queue** — companyId 403, ISO privacy fours, Dispatch viewer, Admin2 unfreeze, Cluster A final four, optional Weymouth/Luton

No credentials in this drop. Bluebird-only notes.
