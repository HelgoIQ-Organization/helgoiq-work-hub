# HelgoIQ Forms + QR E2E Results

- **Date:** 2026-09-11
- **Scope:** Bluebird Pilates test tenant only (`c=150002`)
- **Authenticated role:** Admin2
- **Tip check:** PASS — `/api/version` reported `releaseSha` `a263c4ab3e85e24d82f292268a2427907ae7eec4`, which starts with `a263c4ab`.
- **Tenant isolation:** Tested only in Bluebird (`c=150002`); no Refrm navigation or data access performed.

## Forms (`/admin/forms`)

### Inventory

The list contained one active form: **E2E Contact Test** (`/e2e-contact-test`), with one submission. The builder is a generic form builder with a default Contact Us template and configurable fields. No separate waiver or custom form type was present in the Bluebird list, and the New Form screen did not expose a separate type selector.

| Form type / availability | Verdict | Evidence / notes |
|---|---|---|
| Contact / generic builder (available) | **PASS** | Created safely, renamed to E2E Contact Test, set slug/description, added a Text field labelled “Your name”, saved, opened editor, previewed as member, and submitted test data. |
| Waiver (not present) | **N/A — NOT PRESENT** | No waiver form existed and no waiver type was offered by the builder. |
| Separate custom form type (not present) | **N/A — NOT PRESENT** | No separate custom type was listed; the available builder itself supports custom fields. |

### Notifications

The form Notifications tab exposed Owner Notification (enabled) and an Auto-Response Email toggle (disabled). No notification was sent or modified. If an automated email attempt later fails because provider secrets are absent, classify that result as **BLOCKED (#1213)**, not FAIL.

## QR generator (`/admin/qr-generator`)

- **Generation:** **PASS** — created **Bluebird E2E Contact QR**, a Form QR linked to `e2e-contact-test`; code/list evidence captured.
- **Company scoping:** QR was created and viewed under Bluebird `c=150002`; no Refrm tenant was opened.
- **Public web resolution:** **FAIL / needs investigation** — opening `/q/iBcNdZv` rendered a `Loading payment...` state and then a mostly blank page with the QR title instead of the intended form. The direct form route also showed the same loading-payment behavior during the final check, despite the earlier admin preview/submission passing.
- **Physical phone scan:** **BLOCKED / NEED_DECLAN** — no real phone was available. Generation remains PASS; physical scan was not claimed.

## Evidence

Screenshots are in `evidence/`:

- `version.png`
- `forms-list.png`, `forms-list-initial.png`
- `forms-edit.png`
- `forms-notifications.png`, `forms-notifications-initial.png`
- `qr-list.png`, `qr-list-initial.png`, `qr-list-created.png`
- `qr-code.png`
- `qr-public-destination.png`, `qr-public-destination-initial.png`

## Overall

Forms contact/generic-builder E2E: **PASS** for admin creation/editing and member preview/submission. Waiver and separate custom types: **not present**. QR creation: **PASS**. QR destination rendering: **FAIL / investigation required**. Real-device scan: **BLOCKED / NEED_DECLAN**.
