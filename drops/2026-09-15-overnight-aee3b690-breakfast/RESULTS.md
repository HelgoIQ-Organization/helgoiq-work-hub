# ISO-29 isolation sweep results

- **Staging:** https://lobster-app-662c7.ondigitalocean.app
- **Tip:** `aee3b690b2f895393adf2b636dfc0c202d5d43fc`; `/api/version` starts with `aee3b690` (no drift).
- **Tenant rules:** Bluebird `c=150002`; Refrm `c=150001` read-only. No sends, publishes, purchases, exports, or committed mutations.

## Counts

- **PASS:** 25
- **FAIL:** 0
- **EXPECTED_FAIL:** 4
- **BLOCKED:** 0

## Expected failures / #1309

All four known #1309 leaks still reproduced and remain **EXPECTED_FAIL** (not regressions):

- **ISO-18:** Refrm client route exposes Bluebird Pilates in Business access / Memberships.
- **ISO-20:** Refrm Cohorts renders the same cohort metrics/periods as Bluebird.
- **ISO-27:** Refrm Staff Availability lists the Bluebird roster.
- **ISO-29:** Refrm Command Centre retains `c=150001` but offers a chooser containing only Bluebird Pilates.

The other 25 surfaces scored PASS. Admin2 lacks company access for several Refrm admin surfaces; those cells are explicitly marked read-only generic/no-company in `MATRIX.csv`, while client Refrm controls were viewed without mutation.

Evidence screenshots are in `evidence/ISO-01/` through `evidence/ISO-29/`; current-tip paired evidence is strongest for the four expected-fail rows and the exercised representative controls.
