# AI-85 rescore counts — tip 40da6535

**When:** 2026-09-14 13:54 EEST  
**Tenant:** Bluebird `c=150002`  
**Seat:** Admin2  
**Settled flags:** Platform Admin Feature Controls **21/21** (Admin2 catalogue UI still displayed **0/21** — display/role gate mismatch; surfaces scored as flags-ON per PA settlement).  
**Live tip at walk start:** `40da6535c03b3f1bc8e1dd28b181143da0268f69`  
**Note:** `/api/version` later moved to `1fa31d14…` during write-up; evidence captured on 40da6535 session.

## Full MASTER (85)

| Verdict | Before | After | Δ |
|---|---:|---:|---:|
| PASS | 48 | 48 | +0 |
| FAIL | 5 | 5 | +0 |
| UNCERTAIN | 23 | 21 | -2 |
| UNREACHABLE | 8 | 10 | +2 |
| SKIPPED_CC_BANK | 1 | 1 | +0 |

## Provisional / flag-blocked set (27)

| Bucket | N |
|---|---:|
| Rescored live | 26 |
| Skipped broken-list (AI-019) | 1 |
| Verdict upgrades to PASS | 0 |
| UNCERTAIN → UNREACHABLE | 2 (AI-008, AI-009) |
| Remain UNCERTAIN (flags cleared as blocker) | 19 |
| Remain UNREACHABLE (missing surfaces) | 4 (AI-071,072,074,078) |
| Remain UNCERTAIN (Recovery identity) | 1 (AI-076) |
