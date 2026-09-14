FOUR-SIGNAL overnight 2026-09-13→14 (tip 3ad37824):

By strand (Measured — new overnight only):
- Merged-fix retests: PASS=14 FAIL=1 (#1290 dock) BLOCKED=1 (#1270 privacy preview)
- Smoke critical path: PASS=1 FAIL=1 SKIPPED=4 → overall FAIL 1/6 (step2 locator; not paused-Stripe)
- ISO focus (18/20/27/29): FAIL=4; Heat map + Overview PASS
- Stage 1B (#1266) Pulse Explain: PASS (Owner seat)
- Feel headline: 42 → 46; Website 65 → 72
- Cluster A / M2 30-slot: not re-run (tip stable); prior M2 B–F 4/30 still governs
- #1265 finding identity: BLOCKED (agents Paused / Not opted in)

Continuity (no new artefacts since 2026-09-07):
- Finance Steps 5–8: PASS=12 FAIL=5 PARTIAL=15 BLOCKED=2
- Dispatch1 #1165/#1167/#1170/#1172/#1160: unchanged

Worst findings:
1. Smoke still red — Bluebird 8 checkout Playwright locator (step 2); invite replay #1296 PASS
2. #1290 FINDING — LMS/rota still under admin dock (merged but broken); fix PR NEED_DECLAN Auto-review
3. ISO-18 / 20 / 27 / 29 isolation FAILs unchanged (Refrm↔Bluebird leakage)
4. #1265 / #1270 BLOCKED; open not-on-tip: #1292 #1293 #1272 #1268 #1274

#1175: MERGED 2026-09-05 (not HOLD). Continuity only this pack.

Finance figures (continuity; no new overnight finance-accuracy run): created-only ledger £385 vs platform receipts £390 (+£5 POS); Revenue Intelligence recognised £564.23 contaminated; forecast cumulative £9,723.29. Overnight money retests: #1273 PASS, #1294 PASS, #1270 BLOCKED.

Live tip at pack time: 3ad3782443d147934342e08a27d7151133369f74 (unchanged overnight).
Hub: https://helgoiq-organization.github.io/helgoiq-work-hub/
