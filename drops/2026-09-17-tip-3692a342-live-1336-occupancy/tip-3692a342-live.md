# Tip 3692a342 LIVE — #1336 occupancy reconcile

**When:** 2026-09-17 Europe/Athens midday  
**Live tip:** `3692a34261d5cd83ab4057dc491ad168776f26ff` (confirmed via `/api/version`)  
**Parent:** `b1a15f4884555ba94df200a514086230b1e16fbe`

## What changed
Staging advanced `b1a15f48` → `3692a342` with **#1336** Command Centre: reconcile live occupancy with visual samples.

Also folded since last hub stamp (dataAsOf was b1a15f48 @ 09:13Z):
- **#1333 / #1334** refuse — Measured **PASS** on tip b1a15f48 (Bluebird 150002)
- **Comms full re-census** on tip b1a15f48 — Manager newsletter **PASS**; Segment Send Test **PASS**; cancel/cover/consent PARTIAL; Journey BLOCKED
- **Cluster A** tip_moved mid-walk (11/24 correct incomplete) when tip moved to 3692a342 — **not** a new Measured score; hold **19/24** from 5b1def5c

## Scores
Headline **70%** (morning 52%). Comms strand **28% → 42%** Estimate from Measured re-census. Other strands held. Never invent PASS.

## Primary retests (Bluebird 150002 only)
1. Cluster A full re-walk on `3692a342` (hold 19/24)
2. #1336 occupancy vs visual samples
3. Dataset canary / smoke #1375 NEED_DECLAN
4. ISO-18/29 Bluebird↔Refrm
5. Feel wave + purchase catalogue signed-out

Never recommend CSV import.rollbackBatch.
