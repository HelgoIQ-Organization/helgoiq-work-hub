FOUR-SIGNAL overnight 2026-09-10→11 (tip 232659cf):

By strand (Measured):
- Smoke: PASS=6 FAIL=0
- Cluster A: PASS=20 FAIL=4
- M1 Wave1: PASS=2 (freeze; cancel+reverse) FAIL=1 (unfreeze) BLOCKED=several (upgrade/downgrade/client/waitlist/no-show)
- ISO-29: PASS=26 FAIL=4 NOT_RUN=2
- Ambient: PASS≈2 (Pulse, Twin) FAIL=1 (Dispatch viewer) PARTIAL=1 (LE 0 lessons) BLOCKED=1 (Event Bus)
- AI-85: PASS=48 FAIL=5 UNCERTAIN=23 UNREACHABLE=8 SKIPPED=1 (unchanged)
- Dataset canary: FAIL=1 (Missing companyId upload 403; 0 created)

Worst findings:
1. Cluster A still MEM-X01 / ACS-F01 / TAG-C01 / TAG-A01
2. ISO-18 / ISO-20 / ISO-27 / ISO-29 isolation fails unchanged
3. Dispatch viewer still “Something went wrong”
4. M1 unfreeze fails at payment provider; upgrade/downgrade BLOCKED (no tiers)
5. CSV import canary FAIL — Missing companyId on batchImport.upload

#1175: MERGED 2026-09-05 (no longer HOLD). Overnight smoke membership reverse PASS on 232659cf.

Finance figures (continuity; no new overnight finance run): created-only ledger £385 vs platform receipts £390 (+£5 POS variance); Revenue Intelligence recognised £564.23 contaminated; forecast cumulative £9,723.29. Prior FOUR-SIGNAL PASS=12 FAIL=5 PARTIAL=15 BLOCKED=2.

Live tip at pack time: a263c4ab… (overnight evidence stamped 232659cf…).
Hub: https://helgoiq-organization.github.io/helgoiq-work-hub/
