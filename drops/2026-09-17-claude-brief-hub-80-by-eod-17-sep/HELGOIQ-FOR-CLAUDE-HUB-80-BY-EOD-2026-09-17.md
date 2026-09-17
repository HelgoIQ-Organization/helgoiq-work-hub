# Claude brief — get Launch Hub from 68% → 80% by EOD 17 Sep 2026

**Owner ask (Declan):** Hub must be **80% by end of today**. Live tip still `5b1def5c` (#1329). Headline is a **weighted strand average** (not Coverage %).

## Formula (what moves the number)

```
68% ≈ round((
  dataset 52×12 + command-centre 60×10 + isolation 86×10 + ai-85 65×15 +
  ambient 95×9 + m1 73×10 + smoke 55×6 + payments 72×8 +
  findings-fix 99×10 + comms 28×10
) / 100)
```

Biggest upside (weight × room to 90):

| Strand | Now | Weight | Why stuck |
|--------|-----|--------|-----------|
| **comms** | 28% | 10 | Manager newsletter BLOCKED; cancel/cover/segment/consent mostly UNTESTED |
| **dataset** | 52% | 12 | Confirm/Approve canary FAIL — company Admin hit `Platform admin access required` (regression vs #1355 PASS on `8226bb01`) |
| **ai-85** | 65% | 15 | #1351 not on tip → PA-PULSE-MGR parked; AI24 uncertain re-score UNTESTED; CC vs Pulse/Dispatch/Twin ledger empty |
| **command-centre** | 60% | 10 | Cluster A **19/24** (MEM-F01 + stalls); B–F locked |
| **smoke** | 55% | 6 | **#1375** fixture Cancelling ≠ terminal → checkout **409** — **blocks entire merge train** |

A realistic combo path (smoke green + Approve fixed + Cluster A 24 + #1351 retest + comms lift + ISO if #1373 lands) lands ~**85%**. Single-strand fixes alone only add ~2–4 pts — **you need the parallel stack**.

---

## Critical path today (order matters)

### P0 — Unblock merge train (Declan + Grok fixture / optional waiver)
1. **#1375** — put Grok critical-path smoke seat in a **true terminal** membership state (not Cancelling), **or** Declan waives staging critical-path smoke gate for this tip.
2. Re-run **Staging critical-path smoke** → gate green.
3. Merge overnight batch already green except smoke, especially:
   - **#1351** Fix Pulse access across both stored location grants *(PA-PULSE-MGR)*
   - **#1350** Morning Dispatch location containment
   - **#1373** compound member questions + tenant chooser leaks *(MEM-F01 / ISO-18/29)*
   - **#1371 / #1374 / #1353** Pulse/Home withhold siblings as ready

Without #1375, tip will not move and Hub stays mid-60s on remasure alone.

### P0 — Product fix Claude/Cursor should ship today
4. **Dataset Approve regression** — company Admin must Approve own-studio batches again (overnight canary on `5b1def5c`: Draft 3/0/0 then `Platform admin access required`). Treat as #1355 family follow-up; ship + deploy; Grok re-runs Confirm canary then can refresh dataset strand.
5. **MEM-F01 / chooser** — land **#1373** (or equivalent) so Cluster A can return toward **24/24** and ISO-18/29 can leave 27/29.

### P1 — Retests that convert merges into Hub points (Grok Bot Commander after tip moves)
6. After tip advances: Dataset Confirm canary → if PASS, note 12m already LIVE (177 / SEED:12M).
7. Cluster A full 24; if 24/24 unlock B–F as far as time allows.
8. **PA-PULSE-MGR** Astra retest with manager grants + served tip (#1351).
9. ISO-18 + ISO-29 only if chooser fix is on tip.
10. Comms: Manager newsletter + cancel/cover/segment/consent with Agentmail proof (strand is 28% — largest soft upside).
11. AI24 uncertain re-score on 12m SEED + CC vs Pulse/Dispatch/Twin disagreement ledger (ai-85 weight 15).

### Declan-only (do not block Claude on these, but Hub feels them)
- Smoke fixture terminal / gate waiver (#1375)
- Cloudflare new-seat smoke after fixture clean
- Any Platform Admin Feature Management / Event Bus seats if required

---

## Do NOT chase for today’s 80%
- Ambient is already 95; findings-fix 99 — low leverage
- Full Coverage L1/L2 ≠ headline % (different unit)
- import.rollbackBatch — banned
- Refrm writes — Bluebird only

## Success criteria EOD
- Launch Hub **headline ≥ 80%** on Work Hub / Launch Hub after refresh
- Tip newer than `5b1def5c` with #1351 (and ideally #1373 + Approve fix) live
- #1180 has tip map: which strands retested on which SHA

## Evidence / context
- Progress: `/workspace/HELGOIQ-PROGRESS-2026-09-17.md`
- Overnight pack: `/workspace/helgoiq-overnight-pack-2026-09-16/`
- Closeout ZIP: `/workspace/helgoiq-overnight-closeout-2026-09-17.zip`
- Tracker: #1180 · smoke #1375 · Pulse #1351 · chooser/MEM #1373

*Bot Commander · 17 Sep 2026 morning · Bluebird staging only*
