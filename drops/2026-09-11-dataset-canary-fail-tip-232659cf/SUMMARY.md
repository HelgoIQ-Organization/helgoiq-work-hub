# Dataset canary FAIL — tip 232659cf

**When:** 11 Sep 2026 ~01:25 Europe/London  
**Live tip:** `232659cf05d22e5de920ee547925b37581cfb6d4`  
**Tenant:** Bluebird Pilates `c=150002`

## Verdict — FAIL (upload)

- UI parsed canary (3 rows) and showed preview/mapping.
- Upload mutation failed: **`Missing companyId` on `batchImport.upload`** — HTTP **403** / FORBIDDEN.
- Import Batches: empty. Members created: **0**. Full 12m not attempted.
- **No rollback** — `import.rollbackBatch` was **not** used. Rollback ban remains **ACTIVE**.

Evidence under overnight `07-dataset/`. Details in `IMPORT.md`.

No credentials in this drop.
