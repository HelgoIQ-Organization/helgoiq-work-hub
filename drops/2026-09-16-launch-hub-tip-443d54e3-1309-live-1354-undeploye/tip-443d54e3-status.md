# Launch Hub tip move — 443d54e3

**When:** 16 Sep 2026 midday (Europe/Athens)
**Live tip:** `443d54e3` ← was `59f2f8aa`
**Headline:** held **69%** (no invent)

## What landed on tip
- **#1309** — bind Refrm surfaces to selected tenant (ISO-18/20/27/29). Now ON tip.
- Still on tip from earlier: **#1349** Clerk settle before join-pay, plus prior Feel/batchImport pack.

## Merged but not on live tip yet
- **#1354** — enforce current scope across executive reports. Staging HEAD `15426b8f` is 1 commit ahead of lobster `/api/version`.

## Wake
GitHub `pr-merged` for #1354 fired this refresh; DO had already moved tip for #1309.

## Holds / rules
- Isolation / Cluster A / AI-85 / B–F stay **Estimated** until re-walk on this tip
- PRIMARY next: Bluebird (150002) ↔ Refrm (150001) ISO re-walk for #1309
- NEVER `import.rollbackBatch` (#1240 gate)
- Bluebird-only testing notes; no credentials
