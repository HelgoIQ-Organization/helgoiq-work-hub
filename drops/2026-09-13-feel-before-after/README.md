# Feel before / after

Paired screenshots for merged Feel improvements on tip `3ad37824`.

- `catalog.json` — list of improvements (PR, surface, routes, paths)
- `before-*` — measured-walk evidence (pre-fix)
- `after-*` — live tip re-shots after the fix PRs landed

Hub Feel tab (`#feel`) reads this catalog for the Improvements Before | After gallery. Surface detail panels filter by `surface` (`members` → Members/CRM, `inbox` → Marketing).

**Tags:** status, findings · **Type:** pack · **Id:** `2026-09-13-feel-before-after`

## How after shots get filled

1. Walk the item `route` on the **live tip** (Admin 2 · Bluebird `c=150002`) after the PR is on `/api/version`.
2. Save the PNG/WebP at the exact `after_path` (create the surface folder if needed).
3. Set `after_ready: true` when that file exists, and `status: "captured"` (or `"paired"`).
4. Leave `after_ready: false` and `status: "awaiting_after"` until the file is in the repo — **do not invent an after**.
5. Commit the image + catalog flag together. The Feel tab then swaps “After pending” for the real shot.

If a flagged-ready image 404s, the Hub shows a muted **After pending** (or **Before pending**) tile — never a broken-image icon.

Catalog `surface` values used here: `website`, `members`, `inbox`, `staff`, `academy`, `intelligence`, `finance`.
