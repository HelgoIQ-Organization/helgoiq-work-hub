FOUR-SIGNAL overnight 2026-09-15→16 (tip aee3b690):

By strand (Measured — overnight-aee3b690 FINAL breakfast; do not invent):
- CC Cluster A: PASS=24 (24/24)
- Milestone 2 B–F (30 slots): PASS=15 FAIL=15
- ISO-29: PASS=25 EXPECTED_FAIL=4 FAIL=0
- Coverage Teacher+Client L2 (34 routes): PASS=0 PARTIAL=32 FAIL=2
- Dataset canary→12m: BLOCKED=1 (getById 403 Platform admin)
- Six-step smoke: BLOCKED=1 (NEED_DECLAN Stripe Connect cancel)
- Feel re-walk: 9 surfaces up / CC Feel −7 (50→43) — scored, not folded into P/F
- Astra Pass A: PASS=4 PARTIAL=1 BLOCKED=7 EXPECTED_GAP=1
- LIMITED probes: thin observations done; FULL year AI/Pulse/Dispatch/Twin/CC-matrix BLOCKED (no 12m)

Overall rollup (discrete scored rows = CC A 24 + B–F 30 + ISO 29 + Coverage 34 + Dataset 1 + Smoke 1 + Astra 13 → 132):
**PASS=68 FAIL=17 PARTIAL=33 BLOCKED=9** · plus **EXPECTED_FAIL=4** (ISO) · **EXPECTED_GAP=1** (Astra)
(Feel deltas and Comms PARTIAL / consent UNTESTED not double-counted in the 132.)

Continuity (no new artefacts since 2026-09-07):
- Finance Steps 5–8: PASS=12 FAIL=5 PARTIAL=15 BLOCKED=2
- Dispatch1 #1165/#1167/#1170/#1172/#1160: unchanged (BUILD.md only this pack)

Worst findings:
1. Dataset Confirm blocked — company Admin can list/upload (canary batch id 10, 3/3 Valid) but `batchImport.getById` returns **403 Platform admin**; UI "Batch not found"; 12m + year-backed AI/Pulse/Dispatch/Twin/CC disagreement gated
2. Six-step smoke **NEED_DECLAN** — member still Cancelling; Stripe TEST immediate cancel of Connect sub required (prior handoff declined)
3. Milestone 2 B–F **15 FAIL / 30** on tip `aee3b690`
4. Feel Command Centre **−7** (50→43) — Aster stalls / weak Obvious+Frictionless
5. ISO-18 / 20 / 27 / 29 still **EXPECTED_FAIL** (#1309 Refrm↔Bluebird leakage)

#1175: MERGED 2026-09-05 (not HOLD). Continuity only this pack.

Finance figures (continuity; no new overnight finance-accuracy run): created-only ledger £385 vs platform receipts £390 (+£5 POS); Revenue Intelligence recognised £564.23 contaminated; forecast cumulative £9,723.29. Four-signal unchanged PASS=12 FAIL=5 PARTIAL=15 BLOCKED=2.

Live tip at pack time: aee3b690b2f895393adf2b636dfc0c202d5d43fc (re-confirmed curl /api/version; matches overnight FINAL breakfast stamp).
Hub: https://helgoiq-organization.github.io/helgoiq-work-hub/
