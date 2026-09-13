# Drop: Feel before / after gallery

Paired screenshots for **merged Feel fixes** so Declan can see each improvement on the Hub Feel tab.

- Hub machine file: [`catalog.json`](./catalog.json)
- Feel tab: [helgoiq-organization.github.io/helgoiq-work-hub/#feel](https://helgoiq-organization.github.io/helgoiq-work-hub/#feel)
- Live tip stamped on this drop: `3ad37824` (evening Feel pack)

**Tags:** status, findings · **Type:** pack · **Id:** `2026-09-13-feel-before-after`

## Schema

Each `catalog.json` item:

| Field | Meaning |
|---|---|
| `id` | Feel finding id (`W-F002`, `M-F001`, …) |
| `pr` | Merged HelgoIQ-Platform PR number |
| `surface` | Feel board surface id (`website`, `members-crm`, `home`, …) — used to filter the surface detail panel |
| `title` | Plain-English pair title |
| `route` | Admin route walked (Bluebird `c=150002`) |
| `before_path` | Relative path from hub root (GitHub Pages) |
| `after_path` | Relative path from hub root |
| `before_ready` | `true` when the before PNG is committed at `before_path` |
| `after_ready` | `true` **only** when the after PNG exists at `after_path` |
| `status` | `awaiting_after` until the after file is in the repo; then `paired` |

The Hub UI accepts either a top-level `{ "items": [ … ] }` object or a raw array.

## How after shots get filled

1. Walk the `route` on the **live tip** (Admin 2 · Bluebird) after the PR is on `/api/version`.
2. Save the PNG at the exact `after_path` (create the surface folder if needed).
3. Set `after_ready: true` and `status: "paired"` on that item.
4. Leave `after_ready: false` (and `status: "awaiting_after"`) until the file exists — **do not invent or placeholder-draw an after**.
5. Commit the PNG + catalog flag together. The Feel tab then swaps “After pending” for the real shot.

If a flagged-ready image 404s, the Hub shows a muted **After pending** (or **Before pending**) tile — never a broken-image icon.

## Before shots

Census / Feel walks already captured befores. Copy them into this drop using the `before_path` names, then keep `before_ready: true`. If a before file is missing, the UI degrades the same way.

Suggested source trees (workspace, not this repo):

- Website: `helgoiq-afternoon-2026-09-13/feel-measured/website/`
- Members: `helgoiq-afternoon-2026-09-13/feel-measured/members-crm/screenshots/`
- Staff / Academy / Marketing / Finance / Intelligence: matching `feel-measured/<surface>/` folders
