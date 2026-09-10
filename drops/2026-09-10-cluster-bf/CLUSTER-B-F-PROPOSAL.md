# Proposal: Clusters B–F acceptance banks (#1180)

**Gate:** Cluster A is the fixed 24-question bank. B–F stay **locked until A is 24/24**. Tip `ba88839d`: Admin **18/22** fails `MEM-X01`, `ACS-F01`, `TAG-C01`, `TAG-A01`; Teacher 2 pending. **Do not run B–F for score** until A clears and scope is approved.

**Ask:** Declan — approve purposes, counts, and launch-critical vs post-launch **before** banks are authored. Then: one fixed bank per cluster (wording + ground truth + `launch_critical`), same loop as A.

## Shared rules

| Rule | Detail |
|---|---|
| **Ground truth** | Bluebird `c=150002` only (`ground-truth/FACTS.md` + four-signal). No Refrm facts/figures/roster as answers. Refrm prompts = refuse / isolation check. |
| **Ladder** | **fact → comparison → diagnosis → advice → action (confirm-only) → block** (injection / Declan / cross-tenant refuse). |
| **Seats** | **Admin 2** primary. **Teacher 2** only for role-limit / `teacher_refuse`. Declan multi-tenant **BLOCKED**. No Seed Demo. |
| **Launch-critical** | Must pass for CC launch: isolation, refuse-on-leak, draft-before-send, confirm-before-mutate, no invent on empty/known FAIL. |
| **Post-launch** | Depth / nice-to-have (CMS empties, long-tail forms, non-blocking typos) — not launch blockers. |

## Cluster briefs (DISPATCH filter)

| Cluster | Purpose | Rough target |
|---|---|---|
| **B — Comms & growth** | Inbox, journeys, campaigns, newsletters, forms, Meta. Draft-before-send; Meta blocked; send-test honesty; Refrm channel refuse. + MGR-04, INJ/CAM/NEW/MET typos. | **~20–24** (~14 launch-critical) |
| **C — Schedule & pay** | Timetable, cover, payroll, bookings/waitlists. North 0-classes; rates £28/£35; teacher pay/subs bugs; waitlist blockers. + MGR-05, AMB, TYP-02, TIM-U01, BKG-T01. | **~18–22** (~12 launch-critical) |
| **D — Money & products** | Finance; memberships/packs/credits. Ledger vs contaminated RI; POS/cash gates; gift `REFRM-` code cosmetic; packs. + MGR-01/03/09, FIN-U01, INJ-02. | **~16–20** (~12 launch-critical) |
| **E — Digital & facilities** | Screens, landing, CMS, Safe Studio, Academy, retreats, facilities. Honest empties; no Refrm CMS writes; Safe Studio not via Declan platform view. + WEB/ACA/RET refuse, FAC caution. | **~18–22** (~10 launch-critical) |
| **F — Intelligence & settings** | Reports/Intelligence; Settings/FC. FC-016 leak awareness; real Monthly/Quarterly/Visual routes; no Seed Demo; injection refuse. + MGR-01/03/06/08, ISO-01, REP/SET, BLK-02. | **~18–22** (~14 launch-critical) |

**Source:** filter `questions/BANK.csv` by DISPATCH areas + listed extras; freeze text like `ACCEPTANCE-CLUSTER-A-FIXED.json`.

**Next after approve:** author JSON banks (ground truth + `launch_critical` Y/N) → post #1180 → run only when A is 24/24.
