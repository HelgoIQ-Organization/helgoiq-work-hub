# HelgoIQ Forms + QR Matrix

- Studio: Bluebird Pilates (c=150002)
- Stamp: 2026-09-11 (UTC+1)
- Release check: `/api/version` `releaseSha` starts `a73ff70` (confirmed).
- Physical phone scan: **BLOCKED — NEED_DECLAN**.
- No credentials or passwords are recorded here.

## Inventory matrix

| surface | type | verdict | public URL | stamp | notes |
|---|---|---|---|---|---|
| Forms | Custom / Contact Us | PASS | — | 2026-09-11 | Existing active forms observed: E2E-Contact-Sep11 and E2E-Contact Test; builder supports custom field types. |
| Forms | Waiver (custom-named) | PASS | — | 2026-09-11 | Created and opened builder as E2E-Waiver-Sep11; empty custom form builder; preview available. |
| Forms | Templates offered | PASS | — | 2026-09-11 | New Form screen exposes name/slug/status/description only; no separate template picker was visible. |
| QR | Website | PASS | https://lobster-app-662c7.ondigitalocean.app/q/H4nRgXV | 2026-09-11 | Public page showed E2E-QR-Website-Sep11 and Continue to https://example.com. |
| QR | Form | FAIL | https://lobster-app-662c7.ondigitalocean.app/q/mMGaM5j | 2026-09-11 | Public page showed title only; blank form content. |
| QR | PDF | FAIL | https://lobster-app-662c7.ondigitalocean.app/q/vYmDX63 | 2026-09-11 | Public page showed title and empty PDF-document placeholder. |
| QR | Social Media | FAIL | https://lobster-app-662c7.ondigitalocean.app/q/6XfKmYk | 2026-09-11 | Public page showed title only; blank content. |
| QR | Instagram | PASS | https://lobster-app-662c7.ondigitalocean.app/q/qTGrB2F | 2026-09-11 | Public page showed Continue to https://instagram.com/bluebirdpilates. |
| QR | Images | FAIL | https://lobster-app-662c7.ondigitalocean.app/q/rCB44Gh | 2026-09-11 | Public page showed title and blank image tile. |
| QR | App | PASS | https://lobster-app-662c7.ondigitalocean.app/q/QmVHC3A | 2026-09-11 | Public page showed E2E-App-Sep11 and Continue to configured app URL. |
| QR | Business Page | FAIL | https://lobster-app-662c7.ondigitalocean.app/q/FkQKHzL | 2026-09-11 | Public page showed garbled phone text; wrong content. |
| QR | Video | PASS | https://lobster-app-662c7.ondigitalocean.app/q/WqkpZTS | 2026-09-11 | Public page showed video player and Continue link. |
| QR | Event | PASS | https://lobster-app-662c7.ondigitalocean.app/q/anThNgt | 2026-09-11 | Public page showed studio, 2026-09-20T10:00, description, and Continue link. |
| QR | MP3 | PASS | https://lobster-app-662c7.ondigitalocean.app/q/U38J66C | 2026-09-11 | Public page showed audio player and Continue link. |
| QR | Coupons | PASS | https://lobster-app-662c7.ondigitalocean.app/q/BbdEBrs | 2026-09-11 | Public page showed code E2ESEP11 and 10% off offer. |
| QR | Feedback | PASS | https://lobster-app-662c7.ondigitalocean.app/q/xkwjaRC | 2026-09-11 | Public page showed feedback prompt and five rating buttons. |
| QR | Rating | PASS | https://lobster-app-662c7.ondigitalocean.app/q/am6koSV | 2026-09-11 | Public page showed rating prompt and five rating buttons. |
| QR | vCard Plus | PASS | https://lobster-app-662c7.ondigitalocean.app/q/qseiC9b | 2026-09-11 | Public page showed phone, email, and web details. |
| QR | Facebook | PASS | https://lobster-app-662c7.ondigitalocean.app/q/CEmD3qJ | 2026-09-11 | Public page showed Continue to configured Facebook URL. |
| QR | 2D Barcode | FAIL | https://lobster-app-662c7.ondigitalocean.app/q/TYECpQr | 2026-09-11 | Public page showed title only; blank content. |
| QR | Static URL / Text | FAIL | https://lobster-app-662c7.ondigitalocean.app/q/pTKTySr | 2026-09-11 | Public page showed title only; blank content. |
| QR | Bluebird E2E Contact QR (existing record) | FAIL | https://lobster-app-662c7.ondigitalocean.app/q/iBcNdZv | 2026-09-11 | Public page showed title only; blank content. |
| QR | Payment form | FAIL | https://lobster-app-662c7.ondigitalocean.app/qr-pay/8XT6fsc | 2026-09-11 | Public £1 TEST payment page PASS; Buy now stayed on Preparing checkout and did not reach Stripe/card form. |

## QR UI inventory

The New QR screen visibly offered: Website, Payment form, Form, PDF, Social Media, Instagram, Images, App, Business Page, Video, Event, MP3, Coupons, Feedback, Rating, vCard Plus, Facebook, 2D Barcode, and Static URL / Text.

## Summary

- Forms observed: 2 existing contact-style forms + 1 newly created custom-named waiver form; 1 builder screenshot captured in-session.
- QR destination kinds offered: **19 including Payment form**.
- QR records in Bluebird list: **19** (9 prior records + 10 requested remaining types).
- Requested remaining QR records created/editor-opened: **10/10** (Video, Event, MP3, Coupons, Feedback, Rating, vCard Plus, Facebook, 2D Barcode, Static URL / Text).
- Public `/q/...` verification: **19/19 opened; 11 PASS, 8 FAIL** based on rendered content.
- Payment form: **SKIPPED** to avoid payment.
- Physical phone scan remains **BLOCKED — NEED_DECLAN**.
