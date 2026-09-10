# HelgoIQ Work Hub

Static, searchable, tag-filterable repository of **Bot Commander / Grok** work artefacts for HelgoIQ.

Open `index.html` locally (or via GitHub Pages). No build step — vanilla HTML/CSS/JS + [marked.js](https://cdn.jsdelivr.net/npm/marked/) from CDN.

## What you get

- Chronological feed of **drops** (newest first)
- Search across title, summary, tags, paths
- Multi-select filter chips for **tags** and **types**
- In-page markdown viewer + raw file link
- Mobile-friendly empty states

## Data

All catalogue entries live in [`index.json`](./index.json):

```json
{
  "updatedAt": "ISO-8601",
  "drops": [{
    "id": "2026-09-10-ambient",
    "title": "…",
    "date": "2026-09-10",
    "summary": "one line",
    "tags": ["ambient", "ai"],
    "type": "report",
    "project": "helgoiq-platform",
    "tip": "optional sha",
    "paths": ["drops/…/file.md"],
    "githubIssue": "optional url"
  }]
}
```

Markdown (and other artefacts) live under `drops/YYYY-MM-DD-slug/`.

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
  [--date=2026-09-10] \
  [--project=helgoiq-platform] \
  [--tip=abc123] \
  [--summary="one line"] \
  [--id=2026-09-10-my-finding]
```

Copies the file into `drops/…`, updates `index.json`, never stores credentials.

## Bot Commander auto-post

See [`CONTRIBUTING-BOT.md`](./CONTRIBUTING-BOT.md). After a meaningful Bot Commander / Grok work pack lands on the box, the agent should add a drop (no passwords, no `README-SEATS.md`).

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

Or open `index.html` directly (some browsers restrict `fetch` of `index.json` from `file://` — use a tiny static server if needed).

## Pages

GitHub Pages serves from `main` (root). Live URL (when enabled):

`https://helgoiq-organization.github.io/helgoiq-work-hub/`

(or user fork: `https://declaneryan71.github.io/helgoiq-work-hub/`)
