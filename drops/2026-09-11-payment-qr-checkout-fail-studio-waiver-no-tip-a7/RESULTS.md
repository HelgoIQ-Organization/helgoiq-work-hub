# Payment QR + Studio Waiver E2E

- Studio: Bluebird Pilates (c=150002)
- Date: 2026-09-11 (UTC+1)
- Release check: `/api/version` confirmed `releaseSha` starts `a73ff70`.
- No credentials or passwords recorded.

## 1. Payment form QR (Stripe TEST)

- QR name: `E2E-Payment-QR-Sep11`
- Amount: £1.00 TEST
- Public URL: https://lobster-app-662c7.ondigitalocean.app/qr-pay/8XT6fsc
- Public page: PASS — title, TEST description, £1.00 amount, name/email fields and Buy now rendered.
- Stripe TEST payment: **FAIL** — clicking Buy now showed “Preparing checkout…” and returned to the same QR page; no Stripe card form or confirmation appeared, so 4242/12/34/123 could not be entered. Exact transient toast text was not retained in the page DOM; observed failure was checkout setup not advancing.
- Screenshots: `/tmp/.sand-browser/shot-call_T6zjxMr2jqxa4ctkUyKcMQfRfc_05b0e48612964dbf.png` (public QR); `/tmp/.sand-browser/shot-call_lhS2G5rf1aIISsQfP50lKnm8fc_0bf12439bd1d8238.png` (post-click state/toast).

## 2. Real studio waiver E2E

- Form: `E2E-Studio-Waiver-Sep11`
- Builder field types observed/used: Text, Email, Phone, Text area, Checkbox, Select, Radio, Date, and Number. No dedicated signature/drawn-signature field was available.
- Built form with a required consent/acknowledgement Checkbox and a required Text field labelled for typed legal-name signature/acknowledgement.
- Plain verdict: **NO — a true studio waiver cannot be built with the current builder; it is a generic form with waiver labelling and a required consent checkbox plus typed-text signature substitute, not a dedicated signature control.**
- Assignment/requirement: **BLOCKED** — no direct assign/require control was exposed in the available Forms UI. The form was completed through its public member-facing URL using the smoke-2 test path, rather than a confirmed admin assignment.
- Admin record: **PASS** — `/admin/forms/7/submissions` shows 1 submission for BB Smoke Sep8-2, form E2E-Studio-Waiver-Sep11, timestamped 11 Sep 2026 13:04.
- Export: **PASS** — Export CSV was available and initiated from the submissions page; no PDF option was offered.
- Screenshot: `/tmp/.sand-browser/shot-call_Km1uyfCDMCr7qlIl7HXq9GZ9fc_05b0e48612964dbf.png`.

## Coverage

QR generator coverage: **partial 11/19 public PASS**, plus the Payment form row above (public page PASS; Stripe checkout FAIL).

## Per-step status

| Step | Status |
|---|---|
| Confirm release tip | PASS |
| Create Payment form QR and capture URL | PASS |
| Open public Payment QR | PASS |
| Complete Stripe TEST card payment | FAIL — checkout did not reach Stripe |
| Build waiver-labelled form | PASS |
| Required consent checkbox | PASS |
| Signature control | FAIL — no dedicated signature field; required text substitute used |
| Assign/require for member | BLOCKED — no direct assignment control found; public member-facing URL used |
| Complete as client | PASS — public member-facing flow completed with smoke-2 test identity |
| Submission on admin record | PASS |
| Export CSV/PDF | PASS CSV; PDF not offered |
