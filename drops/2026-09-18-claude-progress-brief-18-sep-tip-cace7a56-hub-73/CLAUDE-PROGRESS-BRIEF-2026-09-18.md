# HelgoIQ progress brief for Claude — 18 Sep 2026 (~06:20 Europe/Athens)

**Audience:** Claude (engineering / launch coordination)  
**Author:** Bot Commander (Grok) via Declan’s request  
**Tracker:** [HelgoIQ-Organization/HelgoIQ-Platform#1180](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/issues/1180)  
**Work Hub:** https://helgoiq-organization.github.io/helgoiq-work-hub/  
**Tenant under test:** Bluebird `c=150002` only (Refrm read-only / no writes)

---

## 1. Executive snapshot

| Item | State |
|---|---|
| **Live staging tip** | `cace7a56b6912c3ddfc95cda8749d4a71ef20ee5` (`cace7a56`) — confirmed via `/api/version` morning 18 Sep |
| **Launch Hub headline** | **~73%** (last Hub regen still stamped on prior tip `f13a6dc2` at `dataAsOf` 2026-09-17T19:38Z — Hub meta lagging live tip; needs regen on `cace7a56`) |
| **Command Centre Cluster A** | **24/24 PASS** (measured on `f13a6dc2`; not yet re-banked on `cace7a56`) |
| **Command Centre Cluster B–F** | **22/30** (8 FAIL) on `f13a6dc2` — primary unlock pack still open |
| **Feel evening pack** | **On tip** — #1382 cookie, #1383 warm 404, #1385 Safe Studio drill, #1379 concern registry |
| **Feel remeasure (`cace7a56`)** | Done — signed-out 71 · Admin Home **27** · Members 74 · Timetable 71 · Safe Studio **85** |
| **Admin Home P0** | Root-caused; fix **PR #1400 OPEN** (alias `/admin/home` → `/admin`) |
| **80% Hub target** | **Not met** — tip moved but Hub score not regenerated; B–F / smoke / restricted Pulse / Dataset Confirm still drag |

**Bottom line for Claude:** Live tip advanced to `cace7a56` overnight. Feel pack is live and partially remeasured. Biggest new product bug is Admin Home dead route (PR ready). Hub still reports 73% on stale meta — regenerate Hub against `cace7a56`, then drive B–F fixes + Declan-gated items for further Hub lift.

---

## 2. Tip / deploy timeline (17–18 Sep)

1. Afternoon tip held at `f13a6dc2` while four parallel lanes ran (Feel / Embeds / CMS / Astra).
2. Evening merges landed on staging HEAD `cace7a56` but DO tip lagged for hours:
   - **#1382** Feel compact non-blocking cookie chrome (F-SO-03) — MERGED
   - **#1383** Feel warm 404 with studio next steps (F-SO-04) — MERGED
   - **#1385** Safe Studio overview tile → scoped ops records (F-AD-03) — MERGED
   - **#1379** Intelligence forward-only concern registry foundation — MERGED
3. Tip flip observed ~22:50 Europe/Athens 17 Sep → live `cace7a56`.
4. Feel tip-watch routine armed (`feel-tip-remeasure`, weekdays */15 08:00–21:45 Europe/Athens).
5. Immediate Feel remeasure completed on `cace7a56` (evidence under programme tree + #1180 + Work Hub drop).

---

## 3. Four parallel lanes (Declan order) — status

### 3.1 Feel

**Pre-tip-flip walks on `f13a6dc2` (seats):**
- Teacher 3: Joy/Obvious/Frictionless **3/3/3** — Submit still live on closed past class; cancelled attendee in follow-up; bank warning + zeros on home
- Signed-in client (member-b, no membership): **~3.3** — membership/credit ambiguity; slow Month-in-Movement; weak empty CTAs
- Owner: **~6.7/10** PASS with material friction — Pulse “critical” on thin/stale inputs; timetable first-glance sparse; setup overwhelm

**Post-tip-flip measured surfaces on `cace7a56` (J/O/F → overall):**

| Surface | J | O | F | Overall | Notes |
|---|---:|---:|---:|---:|---|
| Signed-out client | 70 | 78 | 66 | **71** | Warm 404 PASS; cookie chrome #1382 **not observed** (fresh profile still needed) |
| Admin Home | 35 | 26 | 20 | **27** | `/admin/home?c=150002` → “unavailable” for Admin 2 |
| Members & CRM | 65 | 84 | 72 | **74** | Directory + pipeline usable |
| Timetable | 64 | 78 | 72 | **71** | Banner + sparse first viewport |
| Safe Studio | 80 | 88 | 86 | **85** | Tile drill #1385 PASS |

**Evidence paths:**
- `/workspace/helgoiq-full-programme-2026-09-17/feel-lane/remeasure-cace7a56/{SCORES.md,DEFECTS.md,screenshots/}`
- #1180 comments (Teacher / client / owner / remeasure)
- Work Hub drop: `2026-09-17-feel-remeasure-tip-cace7a56-home-27-safe-studio-`

**Path to Feel “fully tested” (agreed with Declan):**
1. Tip on Feel merges ✅
2. Measure 15 Feel board surfaces on live tip (partial ✅ — priority five done)
3. File FIX_CANDIDATEs + presentation PRs
4. Re-score after each fix lands
5. Promote `basis: measured` + tip SHA in `ux-bar.json` / Feel tab (Hub regen still owed)

Standing rule: every Feel pass includes **signed-out client** walk.

### 3.2 Embeds

- Blank HTML harness + JS render on Bluebird vs Refrm
- **Cross-tenant leak: PASS** (no Bluebird names/data on Refrm `c=150001`)
- Tenant-specific render **not proven** (same generic demo shells)
- FAIL: `/embed` empty; buy missing `companyId`; retreat needs slug
- Evidence + #1180 comment posted

### 3.3 CMS (gap-only; no green Health/Save Draft re-walk)

| Gap | Verdict |
|---|---|
| Publish E2E | **FAIL** — Approval Hub Live, public slug **404** |
| Media upload + use | **PASS** |
| SEO in public HTML | **FAIL** (blocked by publish 404) |
| Menu/nav public confirm | **FAIL** |
| Site health score | **PASS** — Live SEO Score 60 / Grade C |
| Multi-location isolation | **BLOCKED** — no page location targeting |

CloudAgent for publish-404 was **pool-exhausted** earlier; still a high-value Claude/Cursor target.

### 3.4 Astra / restricted Manager Pulse

- Matrix earlier: Morning Dispatch PASS · Twin PASS · Exec PARTIAL · Restricted Manager Pulse **NOT_VERIFIED**
- Existing Manager location edit blocked (“instructors only”) → **#1396 GATED OPEN**
- Dedicated restricted Manager invite: **Cloudflare Turnstile NEED_DECLAN**
- Do **not** treat merge of unrelated PRs as Pulse PASS

---

## 4. Command Centre / isolation / AI

| Track | State | Notes |
|---|---|---|
| Cluster A | 24/24 on `f13a6dc2` | Re-bank on `cace7a56` if tip-sensitive |
| Cluster B–F | 22/30 · 8 FAIL | B-HOW, C-XAGR, D-RI, D-CASH, E-FAC, F-ISO, F-INJ, F-HOW (names from earlier bank) |
| ISO-18/29 | Parked ~27/29 | Fix **#1376 OPEN** / not previously on tip — **re-check ancestry vs `cace7a56`** |
| MEM-F01 | Watch armed | **#1377 OPEN** dirty/CONFLICTING historically — re-check vs tip |
| AI-24 ledger | 11 PASS / 13 BLOCKED | Older tip; not the Hub unlock this morning |
| #1328 cash refuse | Split story | **CC injected** refuse MERGED Measured PASS; **Teacher POS cash Confirm UX FAIL** on `f13a6dc2` (no refuse copy; CTA enabled; credits unchanged) — follow-up, not CC regression |

---

## 5. Open PRs Claude should care about

| PR | State | Why it matters |
|---|---|---|
| **#1400** | **OPEN** | Admin Home alias `/admin/home` → `/admin` — unblocks Feel Home score |
| **#1396** | OPEN GATED | Manager location grant editing — unlocks restricted Pulse path without Turnstile seat |
| **#1388** | OPEN GATED | Dataset Confirm — company Admin Approve (no Platform Admin workaround) |
| **#1376** | OPEN | ISO-18/29 tenant chooser leaks |
| **#1377** | OPEN (was dirty) | MEM-F01 compound member routing |
| #1382/#1383/#1385/#1379 | MERGED | On live tip `cace7a56` |

---

## 6. Declan-gated (parked — do not idle the queue on these)

1. Cloudflare Turnstile on restricted Manager signup  
2. Staging smoke / Stripe Connect fixtures (`#1375` class)  
3. Stage 4B read-only Bluebird DB  
4. Dataset Confirm product path until **#1388** ships (no PA workaround per standing rule)  
5. GitHub sudo / Gmail OTP seats (prefer Agentmail)

---

## 7. Standing rules (do not violate)

- Never write HelgoIQ secrets / seat passwords / invite tokens into #1180, chat, or reports  
- Bluebird `c=150002` writes only; Refrm read-only  
- Feel = continuous parallel lane (never queue behind retests)  
- Dataset Confirm = product bug (no Platform Admin grant workaround)  
- Smoke is informational for Hub narrative; RO DB for Stage 4B is Declan’s  
- Astra: merge ≠ pass; attach served stamp + grants  
- Never `import.rollbackBatch` / never invent PASS  

---

## 8. Recommended Claude next actions (priority)

1. **Review + merge #1400** (or request changes) — Admin Home alias; tiny diff; 21 route tests green per agent report.  
2. **Regenerate Launch Hub** against live tip `cace7a56` so headline/strands match reality (still shows 73% on `f13a6dc2` meta).  
3. **Confirm whether #1376 / #1377 are ancestors of `cace7a56`**; if yes, trigger ISO-18/29 + MEM-F01 → Cluster A watch payloads; if no, keep parking.  
4. **B–F 8 FAIL pack** — highest Hub leverage after tip hygiene.  
5. **CMS publish → public 404** — root-cause PR (Approval Live but public slug 404).  
6. **Teacher POS cash refuse UX** follow-up (distinct from merged #1328 CC injection).  
7. **Feel board catch-up** — promote `cace7a56` measured rows into `ux-bar.json` / Feel tab; continue remaining surfaces (Finance, Staff, Marketing, Academy, Settings, Intelligence, Forms, Ambient, CC chat, Team chat).  
8. **Fresh-profile verify #1382** cookie chrome.  
9. After #1400 on tip → Bot Commander Feel tip-watch will re-score Admin Home (was 27).

---

## 9. Artefact index

| Artefact | Location |
|---|---|
| This brief | `/workspace/helgoiq-full-programme-2026-09-17/pack-1180/CLAUDE-PROGRESS-BRIEF-2026-09-18.md` |
| Evening EOD draft | `.../pack-1180/DRAFT-2026-09-17-EOD.md` |
| Feel remeasure | `.../feel-lane/remeasure-cace7a56/` |
| CMS gaps | `.../cms-lane/GAP-WALK-RESULTS.md` |
| Embeds blank render | `.../embeds-lane/RESULTS-BLANK-RENDER.md` |
| #1328 POS retest | `.../retests/1328-cash-refuse/` |
| #1180 rollup | comment `5717177130` (+ Feel/CMS/Home follow-ups) |
| Work Hub Feel drop | `helgoiq-work-hub/drops/2026-09-17-feel-remeasure-tip-cace7a56-home-27-safe-studio-/` |

---

## 10. One-sentence ask of Claude

**Merge or iterate #1400, refresh Hub on `cace7a56`, then attack B–F failures + CMS publish-404 + Feel FIX_CANDIDATEs — leave Declan-gated Turnstile/smoke/RO-DB parked.**
