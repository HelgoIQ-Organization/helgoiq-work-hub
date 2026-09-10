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

## What you get

- Chronological feed of **drops** (newest first)
- Search across title, plain English, summary, tags, paths
- Multi-select filter chips for **tags** and **types**
- In-page markdown viewer + raw file link
- Mobile-friendly empty states

## Data

### `dashboard.json`

`strands[]`, `health`, `actions[]`, `phases[]` — see the file for field shapes. Strand `projectWeightPercent` values sum to ~100; overall launch % is the weighted average.

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

`ambient` · `booking` · `payments` · `isolation` · `command-centre` · `dataset` · `smoke` · `ai-85` · `m1` · `census` · `findings` · `status` · `finance`

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
