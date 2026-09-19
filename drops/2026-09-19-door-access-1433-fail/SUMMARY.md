# Measured Feel retest — door-access #1433

- **Environment:** HelgoIQ staging, Bluebird only (`c=150002`)
- **tipSha:** `93a48b176a31d22d90b9701cf3d4d9026541dd11`
- **Seat:** `helgoiq-bb-owner@agentmail.to` (Agentmail email OTP)
- **Verdict:** **FAIL**

## Steps

1. Verified `/api/version`; `releaseSha` matched `93a48b176a31d22d90b9701cf3d4d9026541dd11`.
2. Signed in as the Bluebird owner using Agentmail OTP; did not use or mutate Refrm (`c=150001`).
3. In Admin, searched “door access” and walked Door Access Control (`/admin/door-access?c=150002`) across **Status**, **Readers**, and **Policies**.
4. Walked related read-only surfaces: Door Access Analytics (`/admin/door-access/report?c=150002`), Door Alert Management (`/admin/door-access/alerts?c=150002`, including Alert Rules, Security Contacts, Alert History), and Linked Devices (`/admin/devices?c=150002`).
5. Did not add devices, rules, contacts, or change policies.

## Contract / empty-state findings

The stable Door Access **Status** empty dataset is misleading: it shows `0` access/granted/denied counts, but also a green **QR CHECK-IN — Enabled** chip and green **LOCKDOWN — Normal** chip, with **READERS ONLINE — 0 / 0** and Door Relay — Disabled. The page gives no “unavailable/no telemetry” distinction. This is exactly the kind of reassuring default #1433 should remove: an operator could read “Normal” as confirmed safe despite no readers or relay data.

The Analytics empty period says “No data for selected period” but still presents zero cards (including green Granted 0). Readers, alert rules/history, security contacts, and linked devices have clearer explicit empty copy (for example, “No relay devices configured yet”, “No alerts triggered yet”, and “No Devices Yet”). No explicit error state appeared during this walk; therefore no error screenshot was available.

## Feel notes

Finding the surface via admin search and the Status/Readers/Policies tabs is fairly obvious and low-friction. The empty cards and actionable empty copy on Readers/Alerts/Devices are calmer and clearer than a WhatsApp/Slack-style “nothing here yet” experience. However, the green **Normal/Enabled** status treatment is a high-severity trust/feel regression: it is not joyful or confidence-building because it makes the operator do forensic interpretation to learn that the system has no connected hardware. A Slack/WhatsApp bar would be clearer by explicitly saying “No readers connected / status unavailable” rather than claiming Normal.

## Evidence

- `status-empty-defaults.png` — Door Access Status with empty counts and reassuring green defaults.
- `readers-empty.png` — Readers empty state: no relay devices configured.
- `report-empty.png` — Analytics empty period with “No data for selected period”.
- `linked-devices-empty.png` — Linked Devices empty state.
