# HelgoIQ ISO-29 tenancy isolation retest

- **Environment:** staging `https://lobster-app-662c7.ondigitalocean.app`
- **Tip at start:** `232659cf05d22e5de920ee547925b37581cfb6d4` (from `/api/version`)
- **Tip at finish:** `232659cf05d22e5de920ee547925b37581cfb6d4` (no change)
- **Tenants:** Bluebird `c=150002` (write/check permitted); Refrm `c=150001` (read-only)
- **Guardrails:** report-only; no Stripe, publish, Meta create, mass send, checkout, upload, Seed Demo, or mutation. Command Centre used harmless `q=hello`; no command executed. No Feature Controls toggles or CSV import/rollback.

## Counts (32 rows)

- **PASS:** 12 (ISO-15, ISO-16, ISO-17, ISO-19, ISO-21, ISO-22, ISO-23, ISO-24, ISO-25, ISO-26, ISO-28 / FC-016)
- **FAIL:** 4 (ISO-18, ISO-20, ISO-27, ISO-29)
- **NOT_RUN:** 16 (remaining ISO rows plus Weymouth/Luton extra checks)

The matrix deliberately marks un-walked rows `NOT_RUN`; prior sweep verdicts were not carried forward. The 12 PASS rows above were rechecked live on this tip; no writes were performed.

## Verbatim current fails

- **ISO-18 — FAIL:** “Bluebird client home loaded tenant activity; Refrm route showed Helgo account chooser exposing Bluebird Pilates in Business access and Memberships.”
- **ISO-20 — FAIL:** “Bluebird and Refrm both rendered the same cohort metrics/periods (0% retention; best 2025-10; weakest 2026-08), indicating Bluebird intelligence on Refrm.”
- **ISO-27 — FAIL:** “Refrm Staff Availability listed the Bluebird roster (BB Teacher, helgoiq bb teacher 2, helgoiq bb teacher 3), each with 0 slots.”
- **ISO-29 — FAIL:** “Bluebird Command Centre loaded Aster with Bluebird recent chats; Refrm retained c= but rendered Choose a studio first with only Bluebird Pilates.”

## PASS detail

- **ISO-22 / FC-016:** Bluebird Overview showed Bluebird Pilates with Bluebird Central/North only; Refrm Admin Portal showed “No company” and no Bluebird/seven-brand list.

## Extra checks

- **Weymouth #1245:** `NOT_RUN`. The supplied deployment notes say #1245 is on this tip, but no dedicated Weymouth fixture/route was provided or discoverable in the supplied notes. A Command Centre spot-check is retained as evidence but was not used to invent a verdict.
- **Luton #1242:** `NOT_RUN`. The supplied deployment notes say #1242 is on this tip, but no dedicated Luton screen route/fixture was provided or discoverable. A Command Centre spot-check is retained as evidence but was not used to invent a verdict.

## Evidence

Paired current-tip screenshots for all scored surfaces are under `evidence/`:

- `evidence/ISO-18/`
- `evidence/ISO-20/`
- `evidence/ISO-27/`
- `evidence/ISO-29/`
- `evidence/FC-016/`
- `evidence/WEYMOUTH-1245/` and `evidence/LUTON-1242/` (spot-check only)

Full row-level detail is in `MATRIX.csv`.
