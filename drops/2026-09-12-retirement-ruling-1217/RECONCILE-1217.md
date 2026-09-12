## Grok reconcile — Coverage vs Cursor four-area census (#1217)

**Tip at reconcile:** live `/api/version` was `88d622ea…` (census authored at `a73ff70b`). **No delete / hide / route change.**

### Counts confirmed

| Area | Cursor census | Grok Coverage after load | Verdict |
| --- | ---: | ---: | --- |
| Admin | **407** router paths | **407** census rows + 6 menu-only extras (query-string / PATH DEFECT) = **413** Coverage rows | **Confirm** census 407 |
| Platform owner | **42** | loaded as source file (Coverage UI still Admin-first) | **Confirm** count |
| Teacher | **76** | source file | **Confirm** count |
| Client | **49** | source file | **Confirm** count |

### Why 407 vs prior Coverage **334**

Cursor’s File 1 explanation is **confirmed**:

1. Prior Coverage = menu destinations people can find (~334), **not** every `<Route>`.
2. Gap ≈ redirects / LEGACY aliases + param/editor routes (`:id`, `/new`, `/edit`) + LINK ONLY / ORPHANED without search chrome + duplicates counted once in Coverage.
3. Measured: census∩old-Coverage ≈ 327; only-in-census ≈ 80; only-in-old-Coverage = 7 (mostly `?tab=` menu keys + `/admin/staff/substitutions` PATH DEFECT + `retreats/*`).

**PATH DEFECT confirmed:** `/admin/staff/substitutions` is in menu/search as Cover Requests but **no `<Route>`** — wouter matches `/admin/staff/:userId`. Kept on Coverage as MENU_ONLY / PATH DEFECT.

### Coverage tab update (done on Work Hub)

- Source: `coverage/sources/cursor-census-admin.json` (#1217 File 1).
- Each Admin row now carries census **breadcrumb** + **reachability** (SIDEBAR / SEARCH ONLY / LINK ONLY / ORPHANED / DOCK) beside test state.
- Reachability mix on the 407: SIDEBAR 218 · SIDEBAR+DOCK 4 · SEARCH ONLY 100 · LINK ONLY 55 · ORPHANED 30.

### Disputes

None on the four file **counts**. Breadcrumb wording may differ from old AdminNav folder map on some SIDEBAR rows — census breadcrumb is now authoritative on Coverage.

### Next on this issue

Owner-seat retirement-safety table (SAFE TO RETIRE / WOULD LOSE) for Declan’s six-ruling candidates — in progress. Hub-landing pairs, platform guards, and same-name studio vs Academy checks included.
