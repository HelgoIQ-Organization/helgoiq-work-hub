# Coverage levels (for bots)

Encode on every `coverage/admin-pages.json` row:

| level | levelLabel | Meaning | Typical `state` for hub.js |
|------:|------------|---------|----------------------------|
| **0** | `untested` | No honest evidence this page was opened or exercised. | `not_tested` (or `blocked` if role/gate unreachable) |
| **1** | `L1 reachable` | Page **loaded** for a real seat (Owner/Admin/Teacher as scoped). Read-only inspection / retirement walk / twin-confirm-identical counts as L1. **No** claim that features work. | `partially_tested` (no percent, or omit). Prefer **not** inventing a new `level_1` state unless hub.js is updated to filter it. |
| **2** | `L2 works` / `L2 partial` | Page was **exercised** against Declan's L2 criteria (below). PASS → `L2 works`; incomplete exercise → `L2 partial`. FAIL of any criterion after exercise → `state=failed` (still level 2). | `partially_tested` or `failed` |
| **3** | `L3 complete` | Strand/page testing **complete** against the agreed checklist (not merely one happy path). Do **not** award L3 without clear complete evidence. | `fully_tested` |

## Level 2 — Declan's criteria (ALL required for PASS)

A page is **L2 PASS** (`levelLabel=L2 works`) only when **ALL** of:

1. **Every primary control does what it says** (buttons, forms, filters, tabs, exports, toggles). Record which controls exist and which were exercised; if a control could not be exercised → **L2 PARTIAL** not pass.
2. **Every figure opens its underlying data** and one tap returns to the exact view; generic list or nothing = **FAIL**.
3. **Nothing disagrees with another page** showing the same fact; if two numbers for one thing, record both pages / values / stamp.
4. **Bluebird seat cannot see/touch Refrm** from this page (URL or control).
5. **Empty state renders sensibly** (no crash/blank).

### L2 PARTIAL / FAIL / SKIP

- **L2 PARTIAL** (`levelLabel=L2 partial`, `state=partially_tested`): some primary controls exercised but not all, **or** incomplete figure drill-down. Optionally set `percentPassed` when known.
- **L2 FAIL** (`level=2`, `state=failed`): exercised and failed any of the five criteria above.
- **SKIP**: load-only / menu-census / L1 walks — do **not** raise to L2.

### Priority order for **new** L2 walks (after backfill)

1. Daily hubs first (Home / Daily Focus / Studio Pulse / Morning Dispatch / Command Centre).
2. Money & members (Members, Forms, QR, memberships, bookings).
3. Intelligence surfaces with Generate/filter controls.
4. Long-tail / orphan routes last.

## Rules

1. **Never invent greens.** Prefer `not_tested` / L0 over a guessed PASS.
2. **Load-only = L1.** Menu-census / retirement walks that only open a page stay L1 even if many controls were *observed*.
3. **max(level)** on merge: `level = max(existing, backfill)`. Never upgrade to L2/L3 without clear exercise evidence in a drop/matrix.
4. **`failed` stays `failed`** when the exercise itself failed (ISO leak, AI silent no-op, crash), unless a **later** tip has clear PASS evidence that supersedes the defect for that surface. Never clear a crash fail (e.g. `/admin/intelligence/mrr`) to green.
5. **Blocked / unreachable** (Platform Admin Access Required, page unavailable for the probing seat): `state=blocked`, usually `level=0` unless another seat exercised it higher.
6. **Twins:** confirming two routes render identical content → L1 on **both** routes (still load-only). Admin2 access-denied on Twin/BI is **not** L2.
7. **Stamps:** copy the tip/releaseSha from the evidence notes. Do not stamp live tip unless that tip was the one under test.
8. **Evidence:** append drop/path refs; write one JSONL line per mapping to `coverage/sources/backfill-evidence.jsonl` and programme `results/l2-backfill.jsonl`.

## State ↔ level cheat sheet

- L0 → `not_tested` (or `blocked`)
- L1 → `partially_tested` (label shows **L1**)
- L2 PASS → `partially_tested` + `L2 works`
- L2 PARTIAL → `partially_tested` + `L2 partial` (+ optional percent)
- L2 FAIL → `failed` (level still 2)
- L3 → `fully_tested`

Hub Coverage table should show the level badge (L1/L2/L3) beside state.
