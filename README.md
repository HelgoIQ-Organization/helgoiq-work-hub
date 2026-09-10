# HelgoIQ Work Hub

Plain-English **launch dashboard** for Declan, plus a searchable catalogue of Bot Commander / Grok work drops.

Live (GitHub Pages): [helgoiq-organization.github.io/helgoiq-work-hub](https://helgoiq-organization.github.io/helgoiq-work-hub/)

Open `index.html` locally (or via Pages). No build step — vanilla HTML/CSS/JS + [marked.js](https://cdn.jsdelivr.net/npm/marked/) from CDN.

## For Declan (non-technical)

The top of the site is a **visual dashboard**:

- Big **launch %** ring and a plain readiness label
- **Work strand** cards (click for blockers and linked notes)
- **Your moves** — actions only you can unblock, with how much each one moves the project / phase forward
- **Phases** strip — share of the whole launch programme
- **Work drops** feed underneath — each card leads with friendly English; technical detail is secondary

Deep links: `#strand-dataset`, `#action-merge-1232`, `#drop-<id>`.

Dashboard numbers live in [`dashboard.json`](./dashboard.json) (weighted from current testing state). Catalogue entries live in [`index.json`](./index.json).

### Progress today + freshness

- **Progress today** (above strands): morning vs now headline and per-strand deltas, plus a plain-English day note. Morning board for 10 Sep 2026 is kept at [`history/2026-09-10-morning.json`](./history/2026-09-10-morning.json); after each rebuild we also write [`history/latest.json`](./history/latest.json). Previous calendar day snapshots are kept for compare.
- Hero always shows **Data as of {local Europe/London time} · build {shortSha}** beside readiness. **Never look confident when stale** — if the tip has not moved, merged PRs may still be waiting on the test studio.
- Strand cards show a **Measured** vs **Estimate** badge (`basis` on each strand).

### Refresh mechanism (chosen)

1. **Primary** — regenerate the dashboard when the **live staging tip** changes (`GET /api/version` on DigitalOcean staging).
2. **Backup** — weekday every **30 minutes** during daytime Europe/London.

**Data sources:** live `/api/version`, `gh` merged/open PRs, `MASTER.csv`, Cluster A FINAL, #1180 themes.

```bash
# Stamp meta from live tip (does not invent strand scores)
node scripts/refresh-dashboard.mjs
# then Bot Commander fills strands / progressToday / health, commit + push
```

Hard rule: **never recommend rollback**; SAFE rollback (#1240) must land before dataset import. No secrets in this repo.

## What you get

- Chronological feed of **drops** (newest first)
- Search across title, plain English, summary, tags, paths
- Multi-select filter chips for **tags** and **types**
- In-page markdown viewer + raw file link
- Mobile-friendly empty states

## Data

### `dashboard.json`

`meta` (`dataAsOf`, `buildStamp`, `headlineFormula`, `refreshMechanism`), `progressToday`, `strands[]` (incl. `basis`, `comms`), `health`, `actions[]`, `phases[]` — see the file for field shapes. Strand `projectWeightPercent` values sum to ~100; overall launch % is the weighted average stated in `health.headlineFormula` / `meta.headlineFormula`.

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
