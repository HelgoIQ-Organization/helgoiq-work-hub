# HelgoIQ progress update — 17 Sep 2026

**Live tip:** `5b1def5c` (#1329 refund how-to) — **unchanged overnight**  
**Tenant:** Bluebird only (`c=150002`)  
**Pack:** `/workspace/helgoiq-overnight-pack-2026-09-16/` · archive `helgoiq-overnight-pack-2026-09-16.tar.gz`

---

## One thing that matters

**#1375 — staging critical-path smoke is red.** The Grok smoke fixture is **Cancelling** (period end 30 Sep), not terminal. Checkout still returns **409** (*membership remains active until end of billing period*). That gate is blocking the overnight merge train (**#1351** Pulse grants + ~9 siblings). Until the fixture is fully terminal or the gate is waived, **none of those PRs can land**.

---

## Scoreboard (tip `5b1def5c`)

| Strand | Result | Notes |
|--------|--------|-------|
| Smoke critical-path | **FAIL / NEED_DECLAN** | #1375 — Cancelling ≠ terminal |
| Dataset Confirm canary | **FAIL** | Draft 3/0/0 then Approve: `Platform admin access required` — stopped (no retry). #1355 company-Admin Approve looks regressed vs earlier PASS on `8226bb01` |
| 12-month SEED data | **LIVE** | 177 members / `SEED:12M` still present from earlier load — year-history surfaces usable |
| Cluster A | **19/24** | B–F locked. Weaker than 23/24 on `8226bb01` (MEM-F01 still bad + extra couldnts) |
| Comms re-census | **PARTIAL** | Campaign Send Test **PASS** (proof inbox). Journey PARTIAL. Manager newsletter **BLOCKED** (Admin2-only this run). Cancel / cover / segment / consent **UNTESTED** |
| Studio Pulse | **PARTIAL** | **53/100 STEADY** (+1 day / −3 week). Attendance is biggest drag; recommend Review No-Shows. No-show mutation not fully proven |
| Morning Dispatch | **PARTIAL** | Moved from “00:30 UTC” to **generating** — full Owner/Manager/Teacher figure audit not finished |
| Member Twin | **PARTIAL** | Cancelling member twin opened (signals mixed; churn/comms thin). Extra SEED personas incomplete |
| CC vs Pulse/Dispatch/Twin | **UNTESTED** | Disagreement ledger empty |
| AI 24 uncertain re-score | **UNTESTED** | Needs dedicated pass on 12m |
| Feel signed-out client | **Measured** | Joy **70** / Obvious **72** / Friction **68** — no crashes, no Refrm leak |
| Feel admin | **Measured** | Safe Studio ~**53** (unchanged). Feature Management: **Platform Admin Access Required** for Admin2 — NOTE-1313 Refrm Academy unverified |
| Astra PA-PULSE-MGR | **Parked** | Needs #1351 on tip |
| ISO-18 / ISO-29 | **Parked** | Leave **27/29** until chooser fix (#1373) merges |
| Cloudflare new-seat smoke | **NEED_DECLAN** | After fixture is clean |

---

## What improved

- Pulse returns a real studio score on year-ish SEED data (53 STEADY).
- Campaign Send Test still reaches the proof inbox on this tip.
- Twin opens for Cancelling members with calculated signals.
- Signed-out client journey is walkable without Refrm leakage.

---

## What is still broken or blocked

1. Smoke fixture not terminal → merge train stuck (#1375).
2. Dataset Approve as company Admin demands Platform admin again on this tip.
3. Cluster A at 19/24 (MEM-F01 + more).
4. Manager newsletter path not proven (Admin2-only session this run).
5. Feature Management locked behind Platform Admin for Admin2.
6. CC compare / AI24 not run.

---

## Declan actions (when awake)

1. **#1375** — force smoke fixture to a true terminal state (or waive staging critical-path smoke) so #1351+ can merge.
2. Optional: confirm whether company-Admin Dataset Approve regression on `5b1def5c` is expected (vs #1355 intent).
3. After merge stamp: re-run Dataset canary → Cluster A → PA-PULSE-MGR → ISO-18/29 if chooser landed.

---

## Evidence pointers

- Breakfast: `helgoiq-overnight-pack-2026-09-16/breakfast/BREAKFAST.md`
- Dataset canary: `…/dataset/evidence/5b1def5c-canary/CANARY.md`
- Comms: `…/comms/5b1def5c-recensus/RESULTS.md`
- AI year: `…/ai-year/RESULTS.md` · `CC-COMPARE.md`
- Feel: `…/feel/signed-out-5b1def5c/SCORES.md` · `feel/ADMIN-FEEL.md`
- Smoke fixture: `…/smoke/FIXTURE-RESET-ATTEMPT.md` · tracker **#1375**
- Tracker log: GitHub **#1180** overnight comments

*Generated from overnight programme 16→17 Sep 2026 (Declan unavailable; NEED_DECLAN items parked).*
