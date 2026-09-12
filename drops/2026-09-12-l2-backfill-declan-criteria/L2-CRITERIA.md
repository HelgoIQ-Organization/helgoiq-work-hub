# L2 criteria (Declan) — 17-coverage-programme

Encoded 2026-09-12. Backfill-first: map existing strand evidence before any new browser walks.

## PASS (all five)

1. Every primary control does what it says (buttons, forms, filters, tabs, exports, toggles). Record controls that exist and which were exercised.
2. Every figure opens its underlying data; one tap returns to the exact view. Generic list / nothing = FAIL.
3. No disagreement with another page showing the same fact. If two numbers for one thing, record both pages, values, and tip stamp.
4. Bluebird seat cannot see or touch Refrm from this page (URL or control).
5. Empty state renders sensibly (no crash, no blank).

## PARTIAL

- Some primary controls exercised but **not all**, **or**
- Incomplete figure drill-down.

Encode: `level=2`, `levelLabel=L2 partial`, `state=partially_tested`, `percentPassed` if known.

## FAIL

- Exercised and failed any PASS criterion.

Encode: `level=2`, `state=failed`, `reason=defect` (keep crash fails such as `/admin/intelligence/mrr`).

## SKIP (do not raise)

- Load-only menu census / L1 retirement walks / observe-only.
- Admin2 Twin/BI access-denied (not Owner exercise).
- Cluster A Q&A that never touched that admin route's controls.

## Merge rules

- Never invent greens.
- `max(level)` on merge; never downgrade a higher honest level.
- Keep `failed` unless a later tip supersedes with clear PASS.
- Stamp from **evidence tip**, not live tip for old walks.
