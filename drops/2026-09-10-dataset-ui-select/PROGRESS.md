# PROGRESS — Bluebird 12m dataset

- Path: Admin CSV Import (`import.*`) + `rollbackBatch` wipe — see CREATE-PLAN.md
- Seed Demo / bulkRemove / capacity-stack: not used
- Create started: blocked in UI before batch creation (Admin2 auth succeeded).

- 2026-09-10: Investigated platform seed/import APIs; chose CSV Import + rollbackBatch.
- Generated `csv/members-12m.csv` (165) with marker SEED:12M-2026-09.
- Admin 2 login OK on CDP :9335; Bearer token required for adminProcedure.
- createBatch OK (batchIds 1,2,3). members dryRun 10/10 OK (tier Bluebird 8 → id 40).
- members **commit 500** — createUserForImport missing companyId → profile insert fails.
- **Create stopped at 0 rows.** See BLOCKED.md.

- 2026-09-10 14:17 UTC+1: Confirmed `/api/version` tip `6cb5d8d955c0cf4e4d651161c0dfb4471fe56961` (releaseSha/buildToken).
- Admin2 signed in; Bluebird `c=150002` only. No Refrm, Feature Controls, Seed Demo, bulkRemove, or standing-seat edits used.
- UI canary3 upload blocked before mapping/batch creation; page error: `A <Select.Item /> must have a value prop that is not an empty string.` Retried once after page reload; same error.
- Import Batches showed “No Import Batches Yet”; no batchId, no commit, no rollback control/result. Members search for `SEED:12M-2026-09` showed “No members match your search” (0 canary members present).
- Full `members-12m.csv` import not attempted because the canary UI workflow failed before mapping/commit. Imported: 0; skipped: 0.
- Evidence: `evidence/canary-upload-error-select-item-2026-09-10.webp`, `evidence/members-search-no-canary-2026-09-10.webp`.

- 2026-09-10 ~14:47 UTC+1: Retried with `members-canary3-clean.csv` (no empty cells; only name/email/phone/dob/joinDate/membershipTier/status). **Same Select.Item empty-value crash** before mapping. Evidence: `evidence/blocked-ui-select-members-canary3-clean.webp`. Still **0 rows**. Dataset create remains BLOCKED pending Data Migration UI fix or recoverable Admin2 Bearer for tRPC runner.
