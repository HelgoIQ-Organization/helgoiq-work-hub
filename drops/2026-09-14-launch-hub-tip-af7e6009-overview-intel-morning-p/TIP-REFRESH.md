# Launch Hub tip refresh — af7e6009

**When:** Monday 14 Sep 2026 ~08:10 Europe/Athens  
**Live tip:** `af7e6009e076850b1e85daab312e40ce16199e44` (was `3ad37824`)  
**Wake:** staging CI success on HelgoIQ-Platform; tip SHA is merge of [#1279](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1279).

## On tip now (new vs prior)
- [#1286](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1286) Overview Members count matches directory (H-F003 / M-F002)
- [#1274](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1274) Paired admin figures read one source of truth
- [#1279](https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1279) FC-INTEL-04 keep admin chrome while route chunks load

## Overnight fold (prior tip 3ad37824)
- Feel merged-fix **PASS=14** FAIL=1 (#1290 dock) BLOCKED=1 (#1270)
- Smoke: #1296 step1 **PASS**; six-step **FAIL 1/6** (step2 locator)
- #1266 Pulse Explain **PASS** (Owner)
- Feel headline 42→46 / Website 65→72

## Headline
~**63%** — ambient 92→93, m1 72→73, smoke 67→66, findings-fix estimate 90→91. New tip Feel/Intel items await Bluebird retest.

## Your Moves
1. Retest #1286 / #1274 / #1279 on tip `af7e6009`
2. Fix smoke step2 Playwright locator (Bluebird 8 checkout)
3. Approve #1290 dock fix Auto-review

Never instruct `import.rollbackBatch`.
