# Work Hub Tracker schema (v2)

`tracker/items.json` is the durable, reviewable source of truth for the Work Hub Tracker tab (`#tracker`) and for multi-agent coordination. The Platform owner board remains the Live Issue Tracker at `/admin/platform-issues`; the live pull is mirrored here for filtering and coordination, not for launch-dashboard progress. GitHub Projects is not the owner board and is never invented here.

## Top-level shape

| Field | Meaning |
| --- | --- |
| `schemaVersion` | Integer schema version. This proposal is **2**. |
| `updatedAt` | ISO-8601 timestamp for the file's last update. |
| `source` | `platform-live-pull-2026-09-24`, `seed-example`, `export`, `github-issues`, or `agent-pr` (or another documented Hub source). |
| `live` | `true` for the reviewed Platform mirror and real export/agent rows; `false` for a seed-only board. |
| `banner` | Short honest status shown above the Tracker tab. It must say when the board is a live Platform mirror and must not describe launch-dashboard progress. |
| `blocked` | Optional legacy import-blocker details. Do not treat it as a card or add credentials. |
| `itemsNote` | Plain-English provenance note, including whether rows are examples, historical, or live. |
| `items` | Array of tracker cards. |

The embedded `schema.itemFields` object in `items.json` is a compact consumer hint; this document is the durable contract.

## Item fields

Required on every item:

| Field | Meaning / allowed values |
| --- | --- |
| `id` | Stable string (`trk-*`, `issue-*`, `HIQ-*`, or `HIQ-ISO-*` when mirroring a Platform issue). |
| `title` | Short board title. |
| `state` | `open` \| `in-progress` \| `blocked` \| `done` \| `wontfix`; derived from the Platform status map below for live rows. |
| `area` | Existing Hub area such as `isolation`, `dataset`, `command-centre`, `smoke`, `m1`, `payments`, `ai-85`, `ambient`, `comms`, `ops`, or `findings-fix`. Extend only with a Hub change. |
| `builder` | One owner: `claude` \| `codex` \| `cursor` \| `grok` \| `bot-commander` \| `declan` \| `engineering` \| `external` \| `unassigned`. Platform owner mapping is Codex→`codex`, Claude Code→`claude`, Cursor→`cursor`, Grok→`grok`, Declan→`declan`, External→`external`, Unassigned/missing→`unassigned`. The UI displays `No agent` for `unassigned` or a missing owner. |
| `openedAt` | ISO-8601 time first seen or filed. |
| `updatedAt` | ISO-8601 time of the last movement; bump it on every update. |
| `summary` | One plain-English line for Declan. |

Required on every live Platform item:

- `platformStatus` is first-class and preserves the exact Platform string: `Not started` \| `In progress` \| `Partially complete` \| `Fixed — awaiting confirmation` \| `Verified by agent` (plus `Confirmed complete` or `Wont fix` if present). Tracker filters use this field; never collapse the three mid statuses (`In progress`, `Partially complete`, and `Fixed — awaiting confirmation`) into one status.
- `launchBlocking` is the Platform boolean. The Tracker may show a launch-blocking badge, but this field **never** feeds Dashboard launch readiness, `dashboard.json`, or the hero percentage.
- `waitingOn` from Platform may be represented in `agentNotes`; `evidenceUrl` and `evidenceNote` may be represented in `evidence` entries.

Optional item fields:

- `seed`: `true` only for an example or historical seed; real work must use `seed: false` or omit it. The seven existing seed rows stay `seed: true`; live rows are `seed: false`.
- `githubIssue`: Issue or PR URL when relevant.
- `evidence`: an array of `{ "label": "…", "url": "…", "kind": "drop" | "github" | "staging" | "note" }`; note entries may use `note` instead of `url`. Prefer a Hub `#drop-*` anchor or a GitHub URL.
- `claimedBy`: the claiming builder, using the same builder enum.
- `claimedAt`: ISO-8601 time of the claim.
- `agentNotes`: short coordination note, especially a blocker, severity, or hand-off.

## Platform → Hub state map

Hub state remains derived from the existing Platform→Hub map; `platformStatus` remains first-class for filters and display:

| Platform status | Hub state | Notes |
| --- | --- | --- |
| Not started | `open` | |
| In progress | `in-progress` | Keep distinct in the Platform filter. |
| Partially complete | `in-progress` | Summary must say it is partial; keep distinct in the Platform filter. |
| Fixed — awaiting confirmation | `in-progress` or `blocked` | Use `blocked` when waiting on a named verifier; keep the exact Platform status. |
| Verified by agent | `in-progress` | Summary says it is awaiting Declan; keep the exact Platform status. |
| Confirmed complete | `done` | |
| Wont fix | `wontfix` | |

## Provenance and import boundaries

- The reviewed 24 September live pull uses `source: "platform-live-pull-2026-09-24"` and `live: true`. Preserve the seven existing seed rows with `seed: true`; all imported Platform rows use `seed: false`.
- Do **not** invent GitHub Projects cards. `seed: true` means example only; it is not a live Projects card.
- Do not import the historical 84/30 issue exports as live. A one-time historical import is optional only if Declan approves it, and those rows remain `seed: true` with a summary that says they are historical. Historical material belongs under `exports/`.
- A future Platform pull may be reviewed and imported with `node scripts/sync-tracker.mjs --platform-pull=/path/to/pull-latest.json`; tokens stay in DigitalOcean/runtime secrets and never enter this repo. GitHub Projects import is also optional and remains blocked until Declan grants `read:project`.
- `live: true` is reserved for real export/agent rows. The seven seed rows are intentionally retained alongside the live mirror.

## Codex dedupe placeholder

After the Codex outstanding-started pack lands, Bot Commander must compare its pack IDs with `tracker/items.json`, mark duplicate cards, and update the banner/items note. Counts are not final until that pack lands; do not treat the current 270-row count as the final deduped count.

## Claims and conflicts

There is one `builder` per card. Before claiming, check `builder`, `claimedBy`, and the latest `updatedAt`. If two agents claim the same card, do not silently overwrite either claim: set the card to `blocked` and add an `agentNotes` entry naming both builders and the hand-off needed. The primary write path is an upsert in `tracker/items.json`.

An optional future merge path may add per-agent files at `tracker/agents/<name>.json`, but those files are not the source of truth; a reviewed merge must still upsert `items.json`.
