# Push-to-80 — Meta/GTM honest empty-state audit

**Status:** COMPLETE  
**Tip:** `b87f71f3ca13261731b4e6237195d5cee655db06`  
**Seat:** Admin 2 · Bluebird `c=150002` · TEST DATA  
**Evidence:** `evidence/` (`00`–`07`)  
**Guards:** observe-only · no Meta connect/create · no mass sends · no `import.rollbackBatch` · no Refrm writes  

## Four-signal
URL `c=150002` · Bluebird Pilates — TEST DATA · Admin 2 · tip `b87f71f3…`

## Overall: **PARTIAL**

| Surface | Route / nav | Verdict | Notes |
|---|---|---|---|
| Meta Hub Connection | Meta Hub → Connection | **PASS** | Clear “Facebook sign-in is not switched on” / “Nothing was connected”. |
| Meta campaigns (legacy) | `/admin/meta-campaigns` | **BLOCKED** | Explicit “This admin page is unavailable.” |
| Meta Ads Reports | Meta Hub Ads & Reports | **PARTIAL** | No published campaigns / insufficient data, but Sync/Create/Insights look active; “2 leads” vs zero Meta leads inconsistency. |
| Social Hub | `/admin/social` (or hub) | **FAIL** | Meta Ads cards show £0 / 0 / 0.00% with no disconnected/empty explanation; conversion area separately shows 2 leads. |
| Tag Manager (GTM) | Social → GTM / Tag Manager | **PASS** | Clear setup state; says platform keeps working when GTM not connected. |
| Integrations → Meta Ads | Integrations | **PASS** | Directs to Meta Hub Connection; no false connected state. |
| Marketing / Acquisition Hub | Marketing hub | **PARTIAL** | Metrics labeled/populated; “Generate Meta pack” still active while Meta disconnected. |

**Counts:** PASS=3 · PARTIAL=2 · FAIL=1 · BLOCKED=1 · N/A=0

## Top defects (for Claude / #1180)
1. **Social Hub Meta Ads cards** — zero metrics without honest disconnected empty state (**FAIL**).  
2. **Marketing hub “Generate Meta pack”** — active while Meta disconnected (**PARTIAL**).  
3. **Meta Ads Reports** — active Sync/Create/Insights + lead-count inconsistency while disconnected (**PARTIAL**).  
4. **`/admin/meta-campaigns`** — unavailable dead route (**BLOCKED** surface).

## Brand / isolation
- No Refrm/REFRM leak observed on these surfaces this tip.  
- HelgoIQ chrome expected on staging admin.

## Journey / cancel / cover PARTIALs
Not re-run this pass (Commander: support if asked; otherwise Meta/GTM). Still parked from tip `aee3b690` retest unless reopened.

## Settings
- None changed.
