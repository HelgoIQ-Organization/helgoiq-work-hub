# HelgoIQ Owner Negative-Half — Platform Route Probe

- **Timestamp:** Friday, Sep 11, 2026, 8:02 PM (UTC+1)
- **Tenant:** Bluebird (`c=150002`)
- **Session:** Owner (`helgoiq-bb-owner@agentmail.to`)
- **Tip stamp / releaseSha:** `a73ff70b266057f226bb02c5f3112f72a92ad53d`
- **API observation:** Denied pages exposed no platform API XHR (only auth/tenant resolution, analytics, and version requests). The Feature Management page exposed one read-only batched tRPC resource (HTTP `207`) containing `companies.list`, `featureGating.getTenantAccessMap`, and `featureFlags.listForCompany`. Direct browser-fetch checks of those three known read-only procedures returned HTTP `401` each; no bearer was visible and no workaround was attempted. No guessed or mutating API calls were made.
- **Safety:** No Feature Controls toggles or seed actions were used. Refrm was not opened.

| route | URL verdict | API note | evidence |
|---|---|---|---|
| `/admin/stripe-connect` | **FAIL** — Stripe payments page loaded with Open Stripe / Disconnect controls | No platform API XHR observed | `evidence/fail-stripe-connect.png` |
| `/admin/platform/safe-studio` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform/safe-studio/tenants` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform/safe-studio/users` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform-training-hub` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform-devices` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/implementation-checklist` | **PASS** — Admin access required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/ai-decision-audit` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform-dashboard` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/visual-intelligence-showcase` | **FAIL** — Visual Intelligence gallery/content loaded | No platform API XHR observed | `evidence/fail-visual-intelligence.png` |
| `/admin/breach-process` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/changelog` | **FAIL** — Platform Updates ship-log loaded | No platform API XHR observed | `evidence/fail-changelog.png` |
| `/admin/event-bus` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/feature-flags` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/feature-management` | **FAIL** — Feature Management loaded with feature controls/toggles visible (not operated) | Batched tRPC resource HTTP 207; direct safe reads `companies.list`, `featureGating.getTenantAccessMap`, `featureFlags.listForCompany` each HTTP 401 | `evidence/fail-feature-management.png` |
| `/admin/platform-connections` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform-issues` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform-knowledge` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform-plans` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform-scaling` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/platform-videos` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/roadmap` | **FAIL** — Product Roadmap loaded with feature cards and Submit Feature Request | No platform API XHR observed | `evidence/fail-roadmap.png` |
| `/admin/seed-data` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/sentry` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/system-blueprint` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/system-health` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |
| `/admin/tenant-management` | **PASS** — Platform Admin Access Required | No platform API XHR observed | `evidence/first-deny-safe-studio.png` |

## Summary

- **PASS:** 23
- **FAIL:** 4
- **Total probed:** 27

Owner was able to load four listed routes: Stripe Connect, Visual Intelligence Showcase, Changelog, and Feature Management; the remaining 23 routes were denied.
