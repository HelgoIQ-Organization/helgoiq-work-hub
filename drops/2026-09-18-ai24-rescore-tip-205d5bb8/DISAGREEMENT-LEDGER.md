# Command Centre vs Pulse / Dispatch / Twin — disagreement ledger

**Tip:** `205d5bb897fa84c76f2af92b2cad16b568f1cca2` · **Tenant:** Bluebird `c=150002` · **Observed:** 2026-09-18 UTC+3

Only measured values are recorded. “Not comparable” and “unavailable” are preserved as observed states, not converted into agreement or a made-up number.

| ID | Surface A vs B | Observed values | Severity | Finding |
|---|---|---|---|---|
| LED-01 | Command Centre vs Studio Pulse — overall health | CC did not expose a comparable overall Pulse score in the cross-surface result; Pulse shows **30/100 Critical**, biggest drag **Attendance**, recommended **Review No-Shows**. | Medium | **Non-comparable / CC omission**, not a numeric agreement. |
| LED-02 | Command Centre vs Studio Pulse — occupancy | CC: **0%**, **0/10 booked today** for Bluebird Central. Pulse: **9/100 occupancy component score** (weekly fill-rate input 9%), not a same-day percentage. | Medium | **Unit/scope disagreement**; CC correctly did not call these equal. |
| LED-03 | Command Centre vs Studio Pulse — revenue | CC: **£793.04** Central, 2026-09, 16 succeeded GBP payments. Pulse Revenue: **unavailable** (company-wide component); no Central-month £ comparator. | Medium | **Scope/unit disagreement**; no revenue agreement can be claimed. |
| LED-04 | Command Centre vs Morning Dispatch — outbound | CC: **0 outbound messages today**. Dispatch: **Not yet run today**, no outbound count; last successful owner dispatch 2026-09-17. | Low | **Honest empty-state agreement only**: both provide no positive outbound delivery count; Dispatch does not confirm CC’s 0. |
| LED-05 | Command Centre vs Member Digital Twin — money signal | CC: explicitly says Twin does not expose a comparable location-month recognised-revenue amount. Twin: overview exposes **8 Members with Twins**, **136 Total Signals**, but no location-month revenue amount. | Low | **Agree on missing comparator**; no Twin revenue value invented. |
| LED-06 | Command Centre vs Member Digital Twin — cancelling member | CC cross-surface run did not produce a member-level cancellation status. Twin member **2160676**: **Cancelling — access until 10 Oct 2026** and “cannot be shown as improving.” | Medium | **CC omission / unverified comparison**; not treated as agreement or disagreement on status. |

## Ledger interpretation

- There are **3 substantive non-comparable/omission rows** (LED-01–03), **1 Dispatch empty-state row** (LED-04), **1 Twin empty-state row** (LED-05), and **1 member-status omission row** (LED-06).
- No row claims Command Centre, Pulse, Dispatch, and Twin agree when one surface is missing a value.
- The prior five-row ledger is superseded by these tip-specific observations; stale prior-tip values such as Pulse 53 were not reused.
