# HelgoIQ progress for Claude — 16 September 2026 (Europe/Athens afternoon)

**Audience:** Claude (builder / fix agent)  
**From:** Bot Commander (Declan’s staging QA / Launch Hub gate)  
**Staging:** https://lobster-app-662c7.ondigitalocean.app  
**Live tip (at write):** `8226bb01962e9454c6bdd679cc963cab0439c6d6` (`8226bb01`)  
**Launch Hub headline:** **~69%** (held; many strands still Estimated until re-Measured on this tip)  
**Tenant rule:** Bluebird `c=150002` for mutations / settings. Refrm `c=150001` read-only. **Never** `import.rollbackBatch`. **Never** write seat passwords / invite tokens / API secrets into reports or #1180.

Work Hub: https://helgoiq-organization.github.io/helgoiq-work-hub/  
Tracker: HelgoIQ-Organization/HelgoIQ-Platform#1180

---

## 1. What improved today (Measured)

### Tip / deploys that landed on lobster
Significant staging tip movement through the day (not exhaustive): Feel chrome **#1364**, batchImport company-admin **#1355**, Clerk join-pay settle **#1349**, isolation **#1309**, executive scope **#1354**, D-PAYFAIL **#1319**, gift-card diagnosis **#1324**, plus comms follow-ups **#1358–#1362**, waitlist **#1342**, coverage **#1356**, form gate **#1352**, inactive-grant test **#1372**.

Live tip at report time: **`8226bb01`** — includes **#1324** (cash gift-card policy diagnosis), with **#1319** / **#1372** on the same ancestry.

### Isolation (#1309)
Full **29-surface** re-walk after #1309 deploy:

| Metric | Overnight (`aee3b690`) | After #1309 (`15426b8f` evidence pack) |
|---|---|---|
| PASS | 25 | **27** |
| FAIL | 0 | 0 |
| EXPECTED_FAIL | **4** (ISO-18/20/27/29) | **2** (ISO-18, ISO-29 only) |

- **ISO-20 CLEARED** — Refrm Cohorts no longer repeats Bluebird periods.  
- **ISO-27 CLEARED** — Refrm Staff Availability no longer lists Bluebird roster.  
- **ISO-18 still dirty** — Refrm client / account chooser still surfaces **Bluebird Pilates** under Memberships.  
- **ISO-29 still dirty** — Refrm Command Centre “Choose a studio first” still offers only **Bluebird Pilates**.

Evidence: `/workspace/helgoiq-overnight-pack-2026-09-15/tip-443d54e3/isolation/` (RESULTS.md + MATRIX + screenshots).

### Command Centre
| Surface | Result | Tip |
|---|---|---|
| Ordered CC tip-retest pack | Closed on `30474e53` (#1309/#1354/#1372/#1319 wave) | #1180 comment 5697014695 |
| Cluster A | **24/24** on `15426b8f` and earlier tips | — |
| Cluster A | **23/24** on live `8226bb01` — only **MEM-F01** FAIL | B–F **locked** |
| Milestone 2 B–F | Peaked **~15/30** after **#1319** flipped **D-PAYFAIL** (`no_payment_found`) | Was 14/30 on `15426b8f`; bank still far from green |
| Teacher 2 MGR-10 / ACS-X01 | teacher_refuse **PASS** (stable) | — |
| Astra PA-GRANTS | **PASS** — Manager “All locations” on Staff Hub | tip `30474e53` pack |
| Astra PA-EXEC-OWNER | SKIP prior PASS | — |
| Astra PA-CC-1326-OWNER | **BLOCKED** — no Occupancy-vs-Pulse compare surface | — |
| Astra PA-PULSE-MGR | **PARKED** — **#1351** still OPEN | Restricted manager Pulse not re-accepted |

### Product / Feel
- **#1364 MERGED + on tip** — Safe Studio overview drills + Finance alias/invoicing chrome (Feel wave start).  
- Standing rule locked: every Feel finding → Cursor fix PR; Feel re-walk is **visual** and must include **signed-out client journey** (#1363 lesson).  
- Comms follow-ups merged (#1358–#1362, related): journey gate, cancel path, cover-swap feedback, member prefs save — strand still **~25% Measured** until full proof re-census.

### Dataset path (code landed; Confirm not re-Measured green yet)
- **#1355 MERGED** — `batchImport.getById` for company Admin own-studio batches. This was the overnight **breakfast primary blocker** (403 Platform admin → “Batch not found”).  
- **Still needs a live Confirm canary retest** on current tip before claiming dataset unlock / 12-month load.

---

## 2. What is still blocked

### P0 — launch gates
1. **Dataset Confirm → 12-month load**  
   - Code: #1355 on tip.  
   - Evidence still open: last Measured canary on `aee3b690` failed getById 403 before #1355.  
   - **Action:** re-run canary upload → Confirm → then 12m. Until Confirm PASSes, year-backed Pulse / Dispatch / Twin / AI disagreement stay gated.

2. **Six-step smoke**  
   - Fresh smoke-3 seat hit **Cloudflare** human check; old path needed Stripe Connect cancel / fixture secret.  
   - Strand smoke still FAIL/estimate ~72%.  
   - **NEED_DECLAN** only if Cloudflare/secret genuinely required after Agentmail workaround fails.

3. **Isolation leftovers**  
   - **ISO-18** + **ISO-29** still leak Bluebird into Refrm chooser / CC studio picker. #1309 fixed 2/4; need a follow-up PR.

4. **Restricted Manager Pulse (Astra)**  
   - **#1351 OPEN** — “Fix Pulse access across both stored location grants.”  
   - Prior FAIL on tip with #1339 only was explained (missing #1351).  
   - After merge+deploy: re-run PA-PULSE-MGR; attach **manager grants + served stamp**.

5. **Astra Stage 2 Occupancy / Retention scans**  
   - Observe-pilot opt-in **BLOCKED** even under Platform Admin on tip `2c5f6a88`: Agents UI is Studio support only (#1313 framing); no Start Observe / named Occupancy|Retention cards.  
   - Evidence: `astra-pass-a/evidence/2c5f6a88-observe/OBSERVE-OPTIN.md`.  
   - PA-SCAN-1/2 cannot produce run/work IDs until product restores PA-visible Observe rollout (or Astra updates Stage 2 path).

6. **Command Centre MEM-F01** (new on `8226bb01`)  
   - Q: member count **and** who is Member A.  
   - Model answered aggregates (12 profiles / groups) and **never named** `helgoiq-bb-member-a@agentmail.to`.  
   - Cluster A **23/24** → B–F locked on this tip.

7. **B–F bank** still ~**15/30** — many HOW / refuse / ISO / facility / academy / web / seed stalls remain (see #1180 B–F comments). Not launch-green.

8. **Comms strand ~25%** — booking confirm previously PASS; cancel / cover / journey / newsletter / consent / segment still need Measured proofs on current tip.

9. **Feel leftovers OPEN (not all on tip):**  
   - #1365 NOTE-1313 tenant-scoped catalogue labels  
   - #1366 CC recoverable failure UX (Feel CC −7)  
   - #1367 preserve `?c=` Setup Hub / Safe Studio  
   - #1368 phone UX (migration / timetable / CC agents)  
   - #1363 purchase catalogue when tenant resolves (**must** include signed-out client visual before treating as done)

10. **Other open CC / Pulse-adjacent PRs** (examples): #1371 withhold denied Pulse + retain company scope; #1353 withhold recommendations before restricted reads; #1350 Morning Dispatch location access; #1357 30s reader deadline; various refuse/guide PRs #1328–#1336, #1333.

11. **Declan laptop leftovers (parked):** DO `COMMAND_CENTRE_PROTECTED_PERSON_NAME` (previously set 2026-09-15; UI Aw Snap on re-open); smoke secret only if Cloudflare forces it; Platform Admin Observe path product-blocked as above.

---

## 3. What agents need to do **today** to unblock

### Cursor (primary code agent)
| Priority | Do this | Unlocks |
|---|---|---|
| **P0** | Fix **ISO-18** + **ISO-29** Refrm chooser / CC studio picker so Bluebird never appears under Refrm `c=150001` (follow-up to #1309) | Isolation strand → clean 29/29; close remaining #1309 family |
| **P0** | Land / finish **#1351** (Manager Pulse both location grants) + ensure deploy | Astra PA-PULSE-MGR acceptance |
| **P0** | Restore **Platform Admin–visible Observe-pilot** for Occupancy + Retention (or document new Stage 2 surface). Studio support framing must not hide PA governance | PA-SCAN-1/2 run/work IDs |
| **P0** | **MEM-F01**: when asked for Member A, answer with the named seat/email (not only aggregate counts) | Cluster A 24/24 → unlock B–F on `8226bb01+` |
| **P1** | Merge + ship Feel **#1365–#1368**; keep **#1363** signed-out client checkout in visual bar | Feel scores; client purchase empty-state |
| **P1** | After #1355: if Confirm still fails on tip, fix remaining batchImport UI/procedure gaps | 12-month dataset + year-backed AI |
| **P1** | Cheapest B–F fails that are product bugs (not invented HOW paths): D-RI, D-CASH, D-INJ, F-ISO, E-FAC/ACA/WEB as listed on #1180 | Bank ≫15/30 |
| **P2** | #1371 / #1353 / #1350 Pulse & Dispatch scope withholdals | Restricted-role Astra Pass A |

### Codex (config / staging ops)
| Priority | Do this | Unlocks |
|---|---|---|
| **P1** | Confirm staging env still has `COMMAND_CENTRE_PROTECTED_PERSON_NAME` per config (value already set historically to Declan Ryan — verify after any redeploy) | Protected-person CC behaviour |
| **P2** | Assist DO/App Platform if tip lag or env drift blocks #1351 / Feel deploys | Tip freshness |

### Astra (acceptance)
| Priority | Do this | Unlocks |
|---|---|---|
| **P0** | After #1351 live: accept **PA-PULSE-MGR** only with **grants screenshot + served stamp** | Stage Pulse gate |
| **P0** | Clarify Stage 2 path if Observe cards are intentionally gone under PA | Stops spinning on missing UI |
| **P1** | Re-open PA-CC-1326 when Occupancy-vs-Pulse compare exists | Pass A completeness |

### Bot Commander / Grok (this seat — staging QA)
| Priority | Do this | Unlocks |
|---|---|---|
| **P0** | **Dataset Confirm canary** on live tip after #1355 — upload → getById → Confirm; then start 12m if green | Dataset strand; post-dataset AI pack |
| **P0** | On next tip with **#1351**: PA-PULSE-MGR + grants + stamp → #1180 | Astra Pulse |
| **P0** | If Observe surface returns: opt-in Occupancy+Retention → SCAN-1 then SCAN-2 +1h → post IDs | Stage 2 |
| **P1** | Re-run ISO-18/29 only after Cursor fix lands | Close isolation |
| **P1** | Cluster A retest after MEM-F01 fix; then B–F | Bank progress |
| **P1** | Comms Measured re-census on current tip (cancel/cover/journey/newsletter/consent) | Comms strand ≫25% |
| **P2** | Feel visual re-walk (incl. **signed-out client**) after #1365–#1368/#1363 merge | Feel bar |
| **Standing** | Log Bluebird `150002` settings changes on #1180; never touch Refrm; never secrets in chat |

### Declan (human — only what bots cannot)
| Priority | Do this | Unlocks |
|---|---|---|
| **P0** | Merge/approve **#1351** when green (or unblock review) | Manager Pulse Astra |
| **P1** | Cloudflare / `GROK_SMOKE_FIXTURES` secret **only if** Bot Commander cannot complete smoke seat | Six-step smoke gate |
| **P1** | Brief Platform Admin Google / Observe confirm **if** product restores a Declan-only consent step | Scans |
| **P2** | DO env value paste if Codex/Bot cannot verify protected-person var after crash | CC protected person |

---

## 4. Suggested build order for Claude today (single thread)

1. **ISO-18 + ISO-29** chooser leak PR (finish #1309 family).  
2. **#1351** merge-ready + ship.  
3. **MEM-F01** named-member answer (Cluster A).  
4. **Observe-pilot PA surface** (or written Stage 2 alternative).  
5. Feel **#1365–#1368** + **#1363** with signed-out client check.  
6. B–F product fails that are not HOW hallucinations.  
7. Support Bot Commander Confirm canary if #1355 incomplete in UI.

---

## 5. Evidence pointers (no secrets)

| Item | Path / link |
|---|---|
| Isolation RESULTS | `helgoiq-overnight-pack-2026-09-15/tip-443d54e3/isolation/RESULTS.md` |
| Observe BLOCKED | `helgoiq-overnight-pack-2026-09-15/astra-pass-a/evidence/2c5f6a88-observe/` |
| Cluster A `8226bb01` | `helgoiq-command-centre/results/8226bb01962e9454c6bdd679cc963cab0439c6d6/` |
| CC pack closeout | Work Hub drop `2026-09-16-cc-chain-tip-retest-30474e53` · #1180 5697014695 |
| Overnight breakfast | `overnight-aee3b690/breakfast/BREAKFAST.md` |
| Midday status | Work Hub drop `2026-09-16-midday-status` |
| Launch Hub | https://helgoiq-organization.github.io/helgoiq-work-hub/ |

---

## 6. One-line truth

**Today:** isolation 4→2 expected fails, D-PAYFAIL fixed, Feel #1364 + dataset getById code (#1355) landed, CC pack closed with Cluster A strong until MEM-F01 regression on `8226bb01`.  
**Still blocked:** Confirm canary retest, smoke Cloudflare/secret, ISO-18/29, #1351 Manager Pulse, Observe Stage 2 UI, Feel leftovers, B–F ~half-red, comms ~25%.  
**Claude’s highest leverage today:** ISO-18/29 + #1351 + MEM-F01 + Observe PA surface.

