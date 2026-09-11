# HelgoIQ morning retest — Twin + Business Insights + Demo seed

- Date: 2026-09-11
- Company: Bluebird (`c=150002`)
- Tip: **PASS** — `/api/version` returned `releaseSha` `a263c4ab3e85e24d82f292268a2427907ae7eec4`, which starts with `a263c4ab`.
- Session: Admin2 sign-in completed; no OTP was requested.

## Verdicts

1. **Digital Twin overview (#1253): UNCERTAIN / UNREACHABLE**
   - Direct overview route `/admin/member-digital-twin?c=150002` returned **Admin Access Required**.
   - Therefore no overview KPIs, directory, Cancelling sample, or Improving comparison could be verified.
   - No claim made about Cancelling exclusion.

2. **Business Insights (#1254): UNCERTAIN / UNREACHABLE**
   - Direct route `/admin/business-insights?c=150002` returned **Admin Access Required**.
   - KPIs did not load, so server-driven resolution and safe filter refresh/tamper observation could not be tested.

3. **Demo seed gate (#1250): UNREACHABLE — NEED_DECLAN for PA seat**
   - Direct `/admin/seed-data?c=150002` returned **Admin Access Required** for Admin2.
   - No seed control, tooltip, or confirmation dialog was exposed; no seed was run.
   - This is consistent with the platform-owner-only Seed Data entry; a Platform Admin seat is needed to inspect the Bluebird gate. No Feature Controls toggles or Refrm writes were used.

## Evidence

- `evidence/00-version.png` — version endpoint.
- `evidence/01-digital-twin-access-denied.png` — Twin route and access result.
- `evidence/02-business-insights-access-denied.png` — Business Insights route and access result.
- `evidence/03-seed-data-access-denied.png` — Seed Data route and access result.

No CSV created. No passwords stored in this report.
