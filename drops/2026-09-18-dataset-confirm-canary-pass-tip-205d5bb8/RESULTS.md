# HelgoIQ Bluebird dataset Confirm canary

- Tip SHA: `205d5bb897fa84c76f2af92b2cad16b568f1cca2` (releaseSha and buildToken both start with `205d5bb8`)
- Tenant: Bluebird `c=150002` only
- Seat used: `helgoiq-bb-admin-2@agentmail.to`
- Result: **PASS**

## Procedure/result

Opened `/admin/data-migration?c=150002` in the Bluebird company Admin view (sidebar showed Bluebird Pilates TEST DATA and ADMIN; account showed Helgoiq Bb Admin 2). Existing draft `members-canary3-clean.csv` (Members / Clients, 3 rows, created 17 Sept 2026 01:20, 3 valid / 0 duplicates / 0 errors) was selected. Company Admin clicked **Approve**. UI changed immediately to **Approved** with an **Import** button; Import/activation was not started.

No 403, “Platform admin required”, missing companyId, disabled Confirm/Approve, crash, or API/network error was observed.

## Post-PASS member check

Members directory showed `177 total members`. Searching `SEED:12M-2026-09` returned 165 rows, all matching the marker. Searching `helgoiq-bb-member-a@agentmail.to` showed Member A present as the anchor.

## Evidence

- `evidence/01-api-version.png`
- `evidence/02-company-admin-data-migration.png`
- `evidence/03-approved-detail.png`
- `evidence/04-approved-list.png`
- `evidence/05-seed-marker-search.png`
- `evidence/06-member-a-anchor.png`

## Evidence path (workspace)

`/workspace/helgoiq-full-programme-2026-09-17/dataset/canary-205d5bb8/`

Screenshots under `evidence/` (01–06). Prefer not to need `import.rollbackBatch`.
