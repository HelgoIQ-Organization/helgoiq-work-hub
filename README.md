# HelgoIQ Work Hub

Plain-English **launch dashboard** for Declan, plus a searchable catalogue of Bot Commander / Grok work drops.

Live (GitHub Pages): [helgoiq-organization.github.io/helgoiq-work-hub](https://helgoiq-organization.github.io/helgoiq-work-hub/)

Open `index.html` locally (or via Pages). No build step — vanilla HTML/CSS/JS + [marked.js](https://cdn.jsdelivr.net/npm/marked/) from CDN.

## For Declan (non-technical)

The top of the site is a **visual dashboard** (plus Coverage, Tracker, and Drops):

- Big **launch %** ring and a plain readiness label
- **Work strand** cards (click for blockers and linked notes) — each card shows the **SHA it was last tested on**
- **Page coverage stamps** — surfaces scanned from drops, marked **Stale vs live tip** when the last evidence SHA is not today’s staging tip
- **Your moves** — actions only you can unblock, with how much each one moves the project / phase forward
- **Phases** strip — share of the whole launch programme
- **Coverage** tab — Admin inventory of every sidebar menu path, reconciled against the router / 407-route orphan audit. Platform owner / Teacher / Client are labelled placeholders (“coming as protocol/testing runs”).
- **Tracker** tab — findings grouped by state / area / builder / age; expand a row for evidence. Live GitHub Projects sync is **blocked** until `read:project` + the findings-agent token rotate (outstanding since 3 Sep)
- **Work drops** feed — each card leads with friendly English; technical detail is secondary

Deep links: `#dashboard`, `#coverage`, `#coverage-admin`, `#tracker`, `#drops`, `#strand-dataset`, `#action-merge-1232`, `#drop-<id>`.

Dashboard numbers live in [`dashboard.json`](./dashboard.json) (weighted from current testing state). Catalogue entries live in [`index.json`](./index.json).

### Progress today + freshness

- **Progress today** (above strands): morning vs now headline and per-strand deltas, plus a plain-English day note. Morning board for 10 Sep 2026 is kept at [`history/2026-09-10-morning.json`](./history/2026-09-10-morning.json); after each rebuild we also write [`history/latest.json`](./history/latest.json). Previous calendar day snapshots are kept for compare.
- Hero always shows **Data as of {local Europe/London time} · build {shortSha}** beside readiness. **Never look confident when stale** — if the tip has not moved, merged PRs may still be waiting on the test studio.
- Strand cards show a **Measured** vs **Estimate** badge (`basis` on each strand).

### Refresh mechanism (chosen)

| Signal | Lag |
|---|---|
| **Tip change** (`GET /api/version`) | Near-real-time via `scripts/refresh-dashboard.mjs` |
| **Coverage stamps** (`coverage.json` lastTestedStamp vs live tip) | **≤15 minutes** when the 15-minute routine is wired |
| **Dashboard backup** (strands / headline if tip is unchanged) | Weekday every **30 minutes** daytime Europe/London |

**Data sources:** live `/api/version`, `gh` merged/open PRs, drop `SUMMARY.md` + `index.json`, `MASTER.csv`, Cluster A FINAL, #1180 themes.

```bash
# Stamp meta from live tip (does not invent strand scores)
node scripts/refresh-dashboard.mjs
# Coverage stamps (SHA last tested vs live tip)
node scripts/sync-coverage.mjs --dry-run
node scripts/sync-coverage.mjs
# Tracker board (prefers TRACKER_EXPORT.json; does not invent Projects cards)
node scripts/sync-tracker.mjs --dry-run
# Admin Coverage inventory (sidebar ∩ 407/router)
node scripts/build-coverage-admin.mjs --dry-run
node scripts/build-coverage-admin.mjs
# then Bot Commander fills strands / progressToday / health, commit + push
```

`refresh-dashboard.mjs` is the tip-meta hook — it copies `lastTestedStamp` from `coverage.json` onto strand cards when that file exists. Pass `--with-coverage` to run both in one go.

Hard rule: **never recommend rollback**; SAFE rollback (#1240) must land before dataset import. No secrets in this repo.

### Wire the 15-minute routine later

When Bot Commander / cron can write this repo:

1. **Every tip change** (and as a weekday 15-minute daytime job, Europe/London):

```bash
node scripts/refresh-dashboard.mjs --with-coverage
node scripts/sync-tracker.mjs          # no-op seed until export/gh is available
git add dashboard.json coverage.json coverage/ tracker/items.json history/
git commit -m "hub: refresh tip + coverage stamps" && git push origin main
```

2. **Optional live tracker** (do not invent credentials):
   - Grant the findings-agent token `read:project` (rotate outstanding since 3 Sep — Declan).
   - Either drop a local `TRACKER_EXPORT.json` at the repo root (gitignored), **or**
   - Run `node scripts/sync-tracker.mjs --from-github` once `gh` can list issues labelled `tracker` / `findings`.
3. Keep the **30-minute** dashboard backup as the honesty net if the 15-minute job misses.

## What you get

- Chronological feed of **drops** (newest first)
- Search across title, plain English, summary, tags, paths
- Multi-select filter chips for **tags** and **types**
- In-page markdown viewer + raw file link
- Mobile-friendly empty states

## Data

### `dashboard.json`

`meta` (`dataAsOf`, `buildStamp`, `headlineFormula`, `refreshMechanism`), `progressToday`, `strands[]` (incl. `basis`, `lastTestedStamp`, `coverageFreshness`), `health`, `actions[]`, `phases[]` — see the file for field shapes. Strand `projectWeightPercent` values sum to ~100; overall launch % is the weighted average stated in `health.headlineFormula` / `meta.headlineFormula`.

### `coverage.json`

Generated by `scripts/sync-coverage.mjs`. Every strand and scanned page has `lastTestedStamp` (SHA) plus `freshness`: `current` | `stale` | `untested`. Stale means the last evidence SHA is not the live staging tip.

### `tracker/items.json`

Schema is documented on the file itself (`schema.itemFields`). Seed/example rows are marked `seed: true`. Live Projects data is **not** invented; the Tracker tab shows the blocked banner until an export or labelled-issue sync is wired.

Optional local import (preferred over inventing API secrets):

```json
{ "items": [{ "id": "…", "title": "…", "state": "open", "area": "isolation", "builder": "engineering", "openedAt": "2026-09-11T00:00:00.000Z", "summary": "…", "evidence": [{ "label": "drop", "url": "#drop-…", "kind": "drop" }] }] }
```

Save as `TRACKER_EXPORT.json` (gitignored) and run `node scripts/sync-tracker.mjs`.

### Admin Coverage (`coverage/`)

- [`coverage/admin-pages.json`](./coverage/admin-pages.json) — one row per Admin menu path (plus orphaned router/407 routes). Fields: `route`, `breadcrumb` or `ORPHANED`, `state` (`not_tested` | `partially_tested` | `blocked` | `failed` | `fully_tested`), `lastTestedStamp`, `stale`, evidence links.
- [`coverage/meta.json`](./coverage/meta.json) — `liveTip`, `generatedAt`, completeness statement, matched / hub-only / orphaned counts.
- Sources live in [`coverage/sources/`](./coverage/sources/). Drop the Cursor **407-route** list as `_routes_from_bundle.txt` (or `routes-407.json` / `.csv`) and rerun:

```bash
node scripts/build-coverage-admin.mjs
```

Do **not** invent PASS rates. Default is `not_tested`. Platform owner / Teacher / Client sub-tabs are placeholders.

### `index.json`

```json
{
  "updatedAt": "ISO-8601",
  "drops": [{
    "id": "2026-09-10-ambient",
    "title": "…",
    "date": "2026-09-10",
    "plainEnglish": "2–4 sentences a studio owner understands",
    "summary": "short technical line",
    "tags": ["ambient", "ai"],
    "type": "report",
    "project": "helgoiq-platform",
    "tip": "optional sha",
    "paths": ["drops/…/file.md"],
    "githubIssue": "optional url"
  }]
}
```

Markdown artefacts live under `drops/YYYY-MM-DD-slug/`.

### Tag vocabulary

`ambient` · `booking` · `payments` · `isolation` · `command-centre` · `dataset` · `smoke` · `ai-85` · `m1` · `census` · `findings` · `status` · `finance` · `comms`

### Types

`report` · `checklist` · `matrix` · `status` · `proposal` · `evidence` · `finding` · `pack`

## Add a drop (CLI)

```bash
node scripts/add-drop.mjs \
  --title="My finding" \
  --tags=findings,command-centre \
  --type=finding \
  --file=/path/to/notes.md \
  --plain="Friendly 2–4 sentences for Declan…" \
  [--date=2026-09-10] \
  [--project=helgoiq-platform] \
  [--tip=abc123] \
  [--summary="one technical line"] \
  [--id=2026-09-10-my-finding]
```

`--plain=` sets `plainEnglish`. If omitted, it defaults to `--summary` (or the title).

Copies the file into `drops/…`, updates `index.json`, never stores credentials.

## Bot Commander auto-post

See [`CONTRIBUTING-BOT.md`](./CONTRIBUTING-BOT.md). After a meaningful Bot Commander / Grok work pack lands on the box, the agent should add a drop with `--plain=` (no passwords, no `README-SEATS.md`).

Where the dashboard asks Declan to “tell Bot Commander”, use the **Copy prompt** buttons and paste into this chat.

## Safety

- Never commit seat passwords, invite tokens, OTP codes, or Clerk secrets.
- Prefer summaries over large CSVs with PII.
- Strip credential lines before copying.

## Local preview

```bash
cd helgoiq-work-hub
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

Or open `index.html` directly (some browsers restrict `fetch` of JSON from `file://` — use a tiny static server if needed).

## Pages

GitHub Pages serves from `main` (root). Live URL:

`https://helgoiq-organization.github.io/helgoiq-work-hub/`
