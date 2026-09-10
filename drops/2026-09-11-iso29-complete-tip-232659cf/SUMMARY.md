# HelgoIQ ISO-29 tenancy isolation retest

- **Environment:** staging `https://lobster-app-662c7.ondigitalocean.app`
- **Tip at start:** `232659cf05d22e5de920ee547925b37581cfb6d4` (from `/api/version`)
- **Tip at finish:** `232659cf05d22e5de920ee547925b37581cfb6d4` (no change)
- **Tenants:** Bluebird `c=150002` (write/check permitted); Refrm `c=150001` (read-only)
- **Guardrails:** report-only; no Stripe, publish, Meta create, mass send, checkout, upload, Seed Demo, or mutation. No Feature Controls toggles or CSV import/rollback.

## Counts (32 rows)

- **PASS:** 26 (ISO-01–17, ISO-19, ISO-21–26, ISO-28, and FC-016)
- **FAIL:** 4 (ISO-18, ISO-20, ISO-27, ISO-29)
- **NOT_RUN:** 2 (Weymouth-1245 and Luton-1242 extra checks)

ISO-01 through ISO-14 were walked live on this tip with paired Bluebird/Refrm screenshots. No Teacher 2 OTP was requested; teacher routes loaded directly. Refrm remained read-only and no mutations were performed.

## ISO-01–14 verdicts

- **ISO-01 — PASS:** Team Communications showed no channels for either tenant.
- **ISO-02 — PASS:** Personal Messages showed no messages for either tenant.
- **ISO-03 — PASS:** Teacher Inbox showed no notifications for either tenant.
- **ISO-04 — PASS:** Pop-ups showed zero totals for both tenants.
- **ISO-05 — PASS:** Community showed zero partners for both tenants.
- **ISO-06 — PASS:** Bluebird had 3 campaigns; Refrm had 0; no Bluebird campaign data leaked.
- **ISO-07 — PASS:** Bluebird showed Bluebird Central; Refrm showed generic Contact Studio.
- **ISO-08 — PASS:** Titles were tenant-specific (`Bluebird Pilates — TEST DATA (fabricated)` vs `HelgoIQ`); notifications were safe.
- **ISO-09 — PASS:** Bluebird bookings showed Past 3; Refrm showed Past 0; no cross-tenant bookings.
- **ISO-10 — PASS:** Calendar sync had no upcoming bookings/export data for either tenant.
- **ISO-11 — PASS:** Bluebird showed Bluebird Central; Refrm had no tenant location/classes.
- **ISO-12 — PASS:** Bluebird showed Reformer Flow/Slow Flow chips; Refrm showed no class chips.
- **ISO-13 — PASS:** Bluebird had no appointment types; Refrm rendered no types and no Bluebird types.
- **ISO-14 — PASS:** Daily Focus showed Nothing to focus on yet for both tenants.

## Existing fails retained

- **ISO-18 — FAIL:** Bluebird client home loaded tenant activity; Refrm route showed Helgo account chooser exposing Bluebird Pilates in Business access and Memberships.
- **ISO-20 — FAIL:** Bluebird and Refrm both rendered the same cohort metrics/periods, indicating Bluebird intelligence on Refrm.
- **ISO-27 — FAIL:** Refrm Staff Availability listed the Bluebird roster.
- **ISO-29 — FAIL:** Bluebird Command Centre loaded Aster with Bluebird recent chats; Refrm retained `c=` but rendered Choose a studio first with only Bluebird Pilates.

## Extra checks

- **Weymouth #1245:** `NOT_RUN`; no dedicated fixture/route was identified.
- **Luton #1242:** `NOT_RUN`; no dedicated fixture/route was identified.

## Evidence

Paired current-tip screenshots are under `evidence/ISO-01/` through `evidence/ISO-14/`, plus the previously retained evidence for ISO-18, ISO-20, ISO-27, ISO-29, FC-016, Weymouth, and Luton. Full row-level detail is in `MATRIX.csv`.
