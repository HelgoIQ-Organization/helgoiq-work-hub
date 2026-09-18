# ADDENDUM — Overnight close-out Re-test column 2026-09-18

Companion to `helgoiq-test-ledger.html` (untouched HTML). Prefer this addendum for overnight / Dispatch1 / Finance / smoke / GDPR / Feel / CC re-test rows after the **2026-09-17 full programme + tip flip to `cace7a56`**.

**Live tip at morning pack time (2026-09-18 ~07:13 Europe/Athens):** `cace7a56b6912c3ddfc95cda8749d4a71ef20ee5` (curl `/api/version` confirmed)  
**Banked CC tip (Measured):** `f13a6dc229f42ff318d6ab746da645e2522dd9aa` (Cluster A 24/24 + B–F 22/30)

## Re-test rows (new programme + continuity)

| ID / programme | Prior (09-17 pack) | Re-test | Notes |
|---|---|---|---|
| #1175 membership SoT + CC `?c=` | MERGED | **MERGED** (closed 2026-09-05) | **NOT HOLD** — reconfirmed GitHub |
| CC Cluster A | 19/24 on `5b1def5c` | **24/24 PASS** on `f13a6dc2` | Re-bank on `cace7a56` **INCOMPLETE** (stalls mid-run at pack) |
| Milestone 2 B–F | NOT RUN | **22/30 PASS** (8 FAIL) on `f13a6dc2` | Fails: B-HOW, C-XAGR, D-RI, D-CASH, E-FAC, F-ISO, F-INJ, F-HOW |
| Feel tip pack (#1382/#1383/#1385/#1379) | — | **On live tip** | Merged then DO tip flip ~22:50 Athens 17 Sep |
| Feel remeasure signed-out | Measured prior tip | **71** overall on `cace7a56` | Warm 404 #1383 PASS; cookie #1382 not observed |
| Feel Admin Home | — | **27** overall / P0 | `/admin/home` unavailable → **PR #1400 OPEN** |
| Feel Members/CRM | — | **74** | Directory 177 |
| Feel Timetable | — | **71** | Sparse first viewport |
| Feel Safe Studio | — | **85** | Tile drill #1385 PASS |
| CMS publish E2E | — | **FAIL** | Approval Live → public slug 404 |
| CMS media | — | **PASS** | |
| CMS SEO public HTML | — | **FAIL** | Blocked by publish 404 |
| CMS menu/nav public | — | **FAIL** | |
| CMS site health score | — | **PASS** | 60 / Grade C |
| CMS multi-location | — | **BLOCKED** | No location targeting control |
| Embeds cross-tenant | — | **PASS** (no Bluebird leak on Refrm) | Tenant-specific render not proven |
| Embeds routes (BB) | — | FAIL=3 PARTIAL=4 | `/embed` empty; buy no companyId; retreat needs slug |
| Astra restricted Manager Pulse | Parked | **BLOCKED / NEED_DECLAN** | Turnstile on invite; #1396 GATED |
| #1328 cash refuse | — | **SPLIT** | CC injected refuse PASS; Teacher POS UX FAIL on `f13a6dc2` |
| Smoke critical-path | FAIL #1375 | **unchanged this pack** (no new smoke artefacts) | Continuity |
| Dataset Confirm | FAIL Platform admin | **unchanged this pack** | Continuity |
| ISO-18 / ISO-29 | Parked | **Parked** | #1376 OPEN — ancestry note vs `cace7a56` in programme |
| MEM-F01 watch | — | **#1377 OPEN** historically | Re-check vs tip |
| Finance accuracy Steps 5–8 | P12/F5/P15/B2 | **no new artefacts since 2026-09-07** | Continuity only |
| Dispatch1 #1165/#1167/#1170/#1172/#1160 | continuity | **no new Dispatch1 artefacts** | Continuity; BUILD.md only |
| GDPR #1148 | prior | **unchanged this pack** | three markdown reports |
| Hub headline | ~73% | **~73%** | Meta still lagging live tip — regen owed on `cace7a56` |

Sources: `helgoiq-full-programme-2026-09-17/`, CC results `f13a6dc2` / incomplete `cace7a56`, CLAUDE-PROGRESS-BRIEF-2026-09-18.md, finance SUMMARY.md, GitHub #1175.
