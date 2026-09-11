# HelgoIQ Bluebird CSV member import canary

- **Verdict:** FAIL (stopped at upload; no batch created)
- **Tip/API version:** `232659cf05d22e5de920ee547925b37581cfb6d4`
- **Tenant:** Bluebird Pilates, `c=150002`
- **Import UI:** Admin → Data Migration → Members / Clients → Generic CSV (manual mapping)
- **CSV:** `/workspace/helgoiq-bluebird-12m-dataset-2026-09-10/csv/members-canary3-clean.csv`
- **Input rows:** 3 (Ava Hart, Mia Hart, Noah Hart; all names contain `SEED:12M-2026-09`)
- **Mapping:** Auto-mapped `name,email,phone,dob,joinDate,membershipTier,status`; required `name` and `email` were present.

## Result

The UI parsed the canary and displayed the three-row preview, but the upload mutation failed. Exact captured response:

`{"error":{"json":{"message":"Missing companyId in request input for adminCompanyProcedure","code":-32003,"data":{"code":"FORBIDDEN","httpStatus":403,"path":"batchImport.upload"}}}}`

The UI returned to the mapping screen. Import Batches showed **No Import Batches Yet**. No dry-run result or commit occurred. Members created: **0**. No full 165-row file was attempted.

## Safety

Stopped immediately on the companyId error. No approval, import, activation, or rollback was performed. Explicitly: **import.rollbackBatch and all CSV rollback operations were NOT used.** Existing data was left untouched.

## Evidence

- `evidence/api-version.png`
- `evidence/data-migration-mapping.png`
- `evidence/canary-upload-mapping.webp`

- `evidence/import-batches-empty.png`
