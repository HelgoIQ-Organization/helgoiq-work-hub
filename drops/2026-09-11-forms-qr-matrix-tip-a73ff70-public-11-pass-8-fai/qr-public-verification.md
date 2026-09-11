# QR public verification evidence

Date: 2026-09-11 (UTC+1)
Studio: Bluebird Pilates (`c=150002`)
Release prefix: `a73ff70` confirmed via `/api/version`.

All 19 listed Bluebird QR records were opened at their `/q/...` public URL. The app redirected each to its rendered `/qr/...` page. Verdicts are based on rendered public content; no physical scan was performed (`NEED_DECLAN`).

| Name/type | Public `/q/...` URL | Verdict | Observation |
|---|---|---|---|
| Website | https://lobster-app-662c7.ondigitalocean.app/q/H4nRgXV | PASS | Public page showed E2E-QR-Website-Sep11 and Continue to https://example.com. |
| Form | https://lobster-app-662c7.ondigitalocean.app/q/mMGaM5j | FAIL | Public page showed title only; blank form content. |
| PDF | https://lobster-app-662c7.ondigitalocean.app/q/vYmDX63 | FAIL | Public page showed title and empty PDF-document placeholder. |
| Social Media | https://lobster-app-662c7.ondigitalocean.app/q/6XfKmYk | FAIL | Public page showed title only; blank content. |
| Instagram | https://lobster-app-662c7.ondigitalocean.app/q/qTGrB2F | PASS | Public page showed Continue to https://instagram.com/bluebirdpilates. |
| Images | https://lobster-app-662c7.ondigitalocean.app/q/rCB44Gh | FAIL | Public page showed title and blank image tile. |
| App | https://lobster-app-662c7.ondigitalocean.app/q/QmVHC3A | PASS | Public page showed E2E-App-Sep11 and Continue to configured app URL. |
| Business Page | https://lobster-app-662c7.ondigitalocean.app/q/FkQKHzL | FAIL | Public page showed garbled phone text; wrong content. |
| Video | https://lobster-app-662c7.ondigitalocean.app/q/WqkpZTS | PASS | Public page showed video player and Continue link. |
| Event | https://lobster-app-662c7.ondigitalocean.app/q/anThNgt | PASS | Public page showed studio, 2026-09-20T10:00, description, and Continue link. |
| MP3 | https://lobster-app-662c7.ondigitalocean.app/q/U38J66C | PASS | Public page showed audio player and Continue link. |
| Coupons | https://lobster-app-662c7.ondigitalocean.app/q/BbdEBrs | PASS | Public page showed code E2ESEP11 and 10% off offer. |
| Feedback | https://lobster-app-662c7.ondigitalocean.app/q/xkwjaRC | PASS | Public page showed feedback prompt and five rating buttons. |
| Rating | https://lobster-app-662c7.ondigitalocean.app/q/am6koSV | PASS | Public page showed rating prompt and five rating buttons. |
| vCard Plus | https://lobster-app-662c7.ondigitalocean.app/q/qseiC9b | PASS | Public page showed phone, email, and web details. |
| Facebook | https://lobster-app-662c7.ondigitalocean.app/q/CEmD3qJ | PASS | Public page showed Continue to configured Facebook URL. |
| 2D Barcode | https://lobster-app-662c7.ondigitalocean.app/q/TYECpQr | FAIL | Public page showed title only; blank content. |
| Static URL / Text | https://lobster-app-662c7.ondigitalocean.app/q/pTKTySr | FAIL | Public page showed title only; blank content. |
| Bluebird E2E Contact QR (existing record) | https://lobster-app-662c7.ondigitalocean.app/q/iBcNdZv | FAIL | Public page showed title only; blank content. |

Totals: 19 opened, 11 PASS, 8 FAIL. Payment form was not created or opened (SKIPPED — avoid payment).
