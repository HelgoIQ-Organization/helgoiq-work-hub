# Launch Hub tip move — 59f2f8aa

**When:** 16 Sep 2026 midday (Europe/Athens)
**Live tip:** `59f2f8aa` ← was `2c5f6a88`
**Headline:** held **69%** (no invent)

## What landed on tip
- **#1349** — settle Clerk session before join-pay purchase redirect (now ON tip)

## Merged but not on live tip yet
- **#1309** — bind Refrm surfaces to selected tenant (ISO-18/20/27/29). Staging HEAD `443d54e3` is 1 commit ahead of lobster `/api/version`.

## Wake
GitHub `pr-merged` for #1309 fired this refresh; DO had already moved tip for #1349.

## Holds / rules
- Cluster A / AI-85 / B–F / ISO stay **Estimated** until re-walk on this tip
- NEVER `import.rollbackBatch` (#1240 gate)
- Bluebird-only testing notes; no credentials
