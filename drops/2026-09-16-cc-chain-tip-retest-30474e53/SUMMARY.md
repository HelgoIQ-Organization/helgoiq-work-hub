## Command Centre ordered retest pack — FINAL (tip `30474e53…`)

**Live tip SHA:** `30474e531a285ff5c8bf90025f50f3acbef1b8b7`  
(`/api/version` buildToken + releaseSha match; #1309 / #1354 / #1372 / #1319 on tip. **#1351 still OPEN — not on tip.**)

### ISO-29 (prior, tip `15426b8f`)
- **27 PASS / 2 EXPECTED_FAIL**
- Still EF: **ISO-18**, **ISO-29**
- Cleared: **ISO-20**, **ISO-27**
- Evidence: `/workspace/helgoiq-overnight-pack-2026-09-15/tip-443d54e3/isolation/` (rollup already on this issue)

### Bank B–F
- Prior full bank on `15426b8f`: **14/30 PASS** (below ≫15)
- **D-PAYFAIL-01 recheck on live tip `30474e53…` (#1319):** **PASS** — named reason `no_payment_found` (was FAIL / `no_named_processor_reason`)
- Cheap rescore: **implied 15/30** if only this slot flips; full 30 not re-run
- Evidence: `/workspace/helgoiq-overnight-pack-2026-09-15/cc/30474e53/` (`PASS.txt`, `D-PAYFAIL-NOTE.md`, `evidence/D-PAYFAIL-01.png`)

### Cluster A
- **24/24 PASS** on `15426b8f` (unchanged; not re-run on this tip)

### Astra Pass A — CC rows (Bluebird `c=150002` only)

| ID | Result | Note |
|---|---|---|
| **PA-CC-1326-OWNER** | **BLOCKED** | Pulse 53/100 visible; no Occupancy-vs-Pulse comparison UI; CC ask returned Pulse summary only |
| **PA-GRANTS** | **PASS** | Staff Hub: Manager `helgoiq-bb-manager@…` = Manager (+ Instructor + Clock-in), location grant **All locations** |
| **PA-EXEC-OWNER** | **SKIP_PRIOR_PASS** | Optional smoke skipped; prior PASS retained |
| **PA-PULSE-MGR** | **PARKED** | Awaiting **#1351** (not on tip `30474e53…`). Do not claim PASS. Manager grant evidence attached via PA-GRANTS |

Evidence: `/workspace/helgoiq-overnight-pack-2026-09-15/astra-pass-a/tip-30474e53/` (`RESULTS.md`, `matrix.json`, `evidence/`)

### OUTSTANDING
1. **#1351** merge → unpark **PA-PULSE-MGR**
2. **PA-CC-1326-OWNER** still needs Occupancy-vs-Pulse comparison path (product/UI or clearer dual-surface cite)
3. ISO-18 / ISO-29 remain EXPECTED_FAIL (known)

### Pack status
Ordered pack **DONE** for executable steps on this tip; Astra partial only for parked/blocked rows above. Routine may be deleted after this comment.

No secrets in this comment. Report-only; no code fixes.
