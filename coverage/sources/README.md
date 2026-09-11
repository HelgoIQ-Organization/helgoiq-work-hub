# Coverage sources (Admin)

Bot Commander (or a parent agent) can drop refreshed inventories here. `scripts/build-coverage-admin.mjs` regenerates `coverage/admin-pages.json` and `coverage/meta.json`.

## Recognised files (any present are used)

| File | Role |
|---|---|
| `admin-menu.json` | Sidebar map: `{ key, label, path }[]` from `ADMIN_MENU_CATALOG` / `adminMenuItems` |
| `folders.json` | `{ name, keys }[]` for breadcrumb `Home › folder › title` |
| `workspaces.json` | `{ id, label, navKeys }[]` for `Home › workspace › …` |
| `_routes_from_bundle.txt` | **407-route orphan audit** (one path per line). Admin subset = lines starting `/admin`. |
| `routes-407.json` | Same list as JSON `{ "routes": ["/admin/…"] }` or a string array |
| `routes-407.csv` | CSV with a `route` / `path` column |
| `admin-router-paths.json` | `{ "routes": ["/admin/…"] }` from `AdminRoutes*.tsx` `path=` |
| `router-extras.json` | Extra router-only paths when a full AdminRoutes dump is unavailable |
| `SURFACES.md` | Optional census notes (not required to build) |

If the **407 bundle file is missing**, the script uses the AdminRoutes snapshot + extras as the router side of the intersection, and the completeness statement says so. Do **not** invent PASS rates — leave pages `not_tested` unless `coverage.json` or a drop maps a real verdict.
