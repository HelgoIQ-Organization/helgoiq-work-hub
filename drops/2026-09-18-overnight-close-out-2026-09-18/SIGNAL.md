FOUR-SIGNAL morning close-out 2026-09-17→18 (live tip cace7a56; banked CC f13a6dc2):

By strand (Measured — do not invent; mid-flight called out):
- CC Cluster A: PASS=24 / FAIL=0 on tip f13a6dc2 (banked). Re-bank on cace7a56: **INCOMPLETE** (18 rows, mostly stalls) — not counted.
- CC Cluster B–F: PASS=22 FAIL=8 on tip f13a6dc2
- CMS gap walk: PASS=2 FAIL=3 BLOCKED=1
- Embeds BB routes: FAIL=3 PARTIAL=4 · Cross-tenant leak check: PASS=1
- Feel tip visibility: PASS=2 (#1383 warm 404, #1385 Safe Studio drill) · Admin Home P0 FAIL=1 · #1382 cookie NOT_OBSERVED
- #1328 cash refuse: PASS=1 (CC) FAIL=1 (Teacher POS UX)
- Astra restricted Manager Pulse: BLOCKED=1 (Turnstile NEED_DECLAN / #1396)
- Smoke / Dataset / ISO / Dispatch1 / Finance overnight runs: **no new artefacts this pack** (continuity)

Overall rollup — NEW discrete scored rows this pack (CC A24 + B–F30 + CMS6 + embeds BB7 + embeds iso1 + Feel tip3 + #1328×2 + Astra1 → 74):
**PASS=50 FAIL=16 PARTIAL=4 BLOCKED=2** · plus Feel numeric surface scores (not forced into P/F) and INCOMPLETE cace7a56 Cluster A excluded.

Continuity (no new artefacts since 2026-09-07):
- Finance Steps 5–8: PASS=12 FAIL=5 PARTIAL=15 BLOCKED=2
- Dispatch1 #1165/#1167/#1170/#1172/#1160: unchanged (BUILD.md only)

Worst findings:
1. **Admin Home P0** — `/admin/home?c=150002` unavailable (Feel 27) → **PR #1400 OPEN**
2. **Cluster B–F 8 FAIL** on f13a6dc2 — B-HOW, C-XAGR, D-RI, D-CASH, E-FAC, F-ISO, F-INJ, F-HOW
3. **CMS publish→404** — Approval Hub Live but public slug 404 (SEO/nav blocked)
4. **Hub ~73% stale meta** — live tip cace7a56; Hub regen still owed
5. **Astra restricted Pulse** — Turnstile NEED_DECLAN; do not treat unrelated merges as PASS

#1175: MERGED/closed 2026-09-05 (not HOLD). Continuity only this pack.

Finance figures (continuity; no new overnight finance-accuracy run): created-only ledger £385 vs platform receipts £390 (+£5 POS); Revenue Intelligence recognised £564.23 contaminated; forecast cumulative £9,723.29. Four-signal unchanged PASS=12 FAIL=5 PARTIAL=15 BLOCKED=2.

Live tip at pack time: cace7a56b6912c3ddfc95cda8749d4a71ef20ee5 (curl `/api/version`).
Banked CC: f13a6dc229f42ff318d6ab746da645e2522dd9aa.
Hub: https://helgoiq-organization.github.io/helgoiq-work-hub/
