# Coverage backfill summary — 17-coverage-programme

Recorded: 2026-09-12T09:02:58.985826Z (UTC). User zone Europe/London = BST (UTC+1) → **2026-09-12 09:02 UTC ≈ late morning BST**.

## BEFORE

| metric | count |
|---|---|
| total | 413 |
| not_tested | 395 |
| partially_tested | 0 |
| fully_tested | 0 |
| failed | 18 |
| blocked | 0 |
| tested_any | 18 (4.4%) |
| with_stamp | 16 |
| byLevel L0 / L1 / L2 / L3 | 413 / 0 / 0 / 0 |

## AFTER

| metric | count |
|---|---|
| total | 413 |
| not_tested | 288 |
| partially_tested | 89 |
| fully_tested | 0 |
| failed | 13 |
| blocked | 23 |
| tested_any | 125 (30.3%) |
| with_stamp | 97 |
| byLevel L0 / L1 / L2 / L3 | 311 / 55 / 47 / 0 |

## Deltas

- not_tested: 395 → 288 (-107)
- partially_tested: 0 → 89 (+89)
- failed: 18 → 13 (-5)
- blocked: 0 → 23 (+23)
- **L1:** 0 → 55 (**+55** — retirement walks are the bulk of new L1)
- **L2:** 0 → 47 (+47)
- **L3:** 0 → 0 (none claimed — no complete-strand evidence)

## Top programmes contributing (page touches)

| programme | pages touched |
|---|---|
| ai-85-census | 39 |
| menu-census-batch2 | 38 |
| owner-negative | 27 |
| iso29-complete | 19 |
| menu-census-batch1 | 7 |
| menu-census-gap3 | 6 |
| ambient-evidence | 4 |
| invite-e2e | 4 |
| forms-qr-matrix | 4 |
| owner-twin-bi | 2 |
| ai-85-overnight-rescore | 1 |
| cluster-a | 1 |

## Honesty rules applied

- Load-only Owner retirement walks (batch1/batch2/gap3) → **L1** only; stamp `88d622ea…` (walks also spanned a73ff70 / a3a0e207).
- ISO-29 isolation exercised → **L2** (PASS → partially_tested; FAIL noted; CC kept partial with Cluster A %).
- AI-85 function tests → L1/L2 from documented exercise; FAIL stays **failed** unless later tip PASS supersedes (Business Insights).
- Forms/QR matrix → Forms **L2** PASS; QR generator **L2** partial (~58% public kinds).
- Twin/BI Owner retest → **L2** PASS.
- Ambient → Pulse/Dispatch/Twin/Learning **L2**; Event Bus **blocked**.
- Cluster A → `/admin/command-centre` **L2** (23/24), not L3.
- Owner-negative denies → **blocked**; unexpected Owner loads → **L1**.
- No invented greens. No L3.

## Files written / updated

- `helgoiq-work-hub/coverage/admin-pages.json`
- `helgoiq-work-hub/coverage/meta.json` (`counts.byLevel`)
- `helgoiq-work-hub/coverage/sources/backfill-evidence.jsonl`
- `helgoiq-work-hub/assets/hub.js` + `index.html` (Level column)
- `17-coverage-programme/BEFORE.json`, `AFTER.json`, `BACKFILL-SUMMARY.md`, `LEVELS.md`

Git: files left ready; no push attempted from this subagent unless parent requests.
