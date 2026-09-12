# Dataset import canary retest — RESULTS

- **When:** 2026-09-12 ~14:30 Europe/London
- **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`
- **Tenant:** Bluebird Pilates `c=150002` only · Admin2
- **CSV:** `/workspace/helgoiq-bluebird-12m-dataset-2026-09-10/csv/members-canary3-clean.csv` (3 rows, SEED:12M-2026-09)
- **Path:** Admin → Data Migration → Members / Clients → Generic CSV (manual mapping) → Upload CSV → Upload
- **URL:** https://lobster-app-662c7.ondigitalocean.app/admin/data-migration?c=150002

## Verdict — **FAIL** (same class as tip `232659cf`)

UI reached Members/Clients → Generic CSV → upload step; CSV attached; Upload clicked.

**Exact API error body:**

```json
{"error":{"json":{"message":"Missing companyId in request input for adminCompanyProcedure","code":-32003,"data":{"code":"FORBIDDEN","httpStatus":403,"path":"batchImport.upload"}}}}
```

- HTTP **403** / FORBIDDEN
- Path: `batchImport.upload`
- Message: `Missing companyId in request input for adminCompanyProcedure`
- Import Batches: **No Import Batches Yet** / empty
- Members created: **0**
- Full 12m CSV **not** attempted

### Safety
- **`import.rollbackBatch` NOT used** (#1240 live — prefer not to need it; ban preference respected).
- Stopped at upload failure. No approve/activate.

### Evidence
`evidence/cdp-*.png|txt`, `c02c-members.*`, `c05c-after-steps.*` (upload step UI), `api-hits-batchImport.json`, `api-version.json`.

### SCORE note
No Measured improvement vs prior canary FAIL — dataset strand hold suggestion in combined `SCORE-UPDATE.json`.
