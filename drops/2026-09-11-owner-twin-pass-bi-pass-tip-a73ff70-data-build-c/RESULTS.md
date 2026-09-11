# Owner-seat retest + test-data build

- Studio scope: Bluebird (`c=150002`) only. Refrm was not opened or modified.
- Live version confirmed at `/api/version`: `releaseSha=a73ff70b266057f226bb02c5f3112f72a92ad53d` (starts `a73ff70`). `commandCentreRuntimeIngress=early-auth-response-finish-v1`.
- Owner authentication succeeded with the supplied Owner seat (no OTP prompt). Subsequent Owner write attempts were blocked by the app/auth flow: after opening Add Class and submitting, the session returned to sign-in; repeated sign-in showed “Update operations are not allowed on older sign ins.” No write was completed.

## A — Digital Twin overview (#1253): PASS (with evidence)
Overview loaded server data: Members with Twins 8, Total Signals 130, Signal Types 20. Trend distribution showed Stable 94, Declining 18, Improving 18; cancellation_behavior was present in Signal Distribution. No cancelling member row was exposed in the overview/member lookup UI, so no individual cancelling-member screenshot was possible. Evidence: `evidence/A-digital-twin-overview.png`.

## B — Business Insights (#1254): PASS
KPIs loaded with server-driven values. Changed date filter from Month to Quarter; Quarter remained selected and values recomputed (e.g. Total Revenue £1,189, Net Profit £1,189, Capacity Utilization 1%, First Visits 4). Evidence: `evidence/B-business-insights-quarter.png`.

## C — Build test data: BLOCKED
- Full waitlist class: not created. Add Class form was reached and configured for Reformer Flow, 2026-09-11 09:00, capacity 1, but submission forced Owner sign-in and no class was saved.
- Paid membership tiers: not changed; no live charge attempted.
- Teacher availability: not changed.

## D — Quick re-check
- Waitlist join: BLOCKED — no new full class was saved.
- Upgrade modal: BLOCKED — no data-build write session available.
- ACS-F01: remains a separate Command Centre retest item; staff availability was not populated.

No Feature Controls toggles, CSV import, rollback, or Refrm writes were used.
