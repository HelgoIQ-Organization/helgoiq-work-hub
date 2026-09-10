# ISO29-NOTES

**COUNT:** 29 / expected 29 — exact list taken from `/workspace/helgoiq-overnight-2026-09-05/isolation/CHECKLIST.md` (ISO-01…ISO-29 = 16 gate + C013 + I080 + 9×#1172 + segments + CC ?c=).

**Matrix file:** `ISO29-MATRIX.csv`

**Tenants:** Bluebird `c=150002` (bluebird_check) vs Refrm `c=150001` (refrm_check, read-only — no checkout/send/upload).

**Prior run:** overnight Admin2 2026-09-05 tip `48a6a98d…` — PASS 23 · FAIL 2 (C020, FC-016) · PARTIAL 1 (I080) · BLOCKED 3 (FC-012, FC-022, CC). Full-status 2026-09-07 and retest-d4da6001 were **not** a complete 29/29 re-prove.

**Gap vs expected 29:** none for row count. Evidence column holds prior-run pointers only; new sweep should fill bluebird_check/refrm_check/verdict/evidence.

**Guards:** report-only · no Stripe · no live publish · no Meta create · no mass send · Seed Demo never · executed-deny = open mutating UI then Cancel/Deny.



## Batch 1 2026-09-10

**Scope:** ISO-01..ISO-04, report-only comparison of Bluebird `c=150002` vs Refrm `c=150001`. Admin 2 could reach both tenants by switching the URL query parameter; no Declan/OTP handoff was needed. No posts, creates, publishes, sends, or other mutating actions were performed.

- **ISO-01 Team Comms / Instructor Circle — PASS.** Bluebird Admin Team Communications and Teacher Chat both showed `Instructor Circle` with **No channels yet**. Admin tabs showed **No polls yet**, September 2026 Team Calendar **No events this month**, and Groups **No active groups**. Refrm showed the same empty state on Admin Team Communications and Teacher Chat. No tenant-specific channel/message/poll/event/group names leaked in either direction.
- **ISO-02 Admin Personal Messages — PASS.** Bluebird and Refrm each showed **No messages yet** across the Personal Messages categories. No Refrm announcement appeared under Bluebird; no Bluebird content appeared under Refrm.
- **ISO-03 Teacher Inbox — PASS.** Admin-reachable Teacher View for each tenant showed **No notifications yet**. No member-feedback or other cross-tenant inbox item was present.
- **ISO-04 Admin Popups — PASS.** Bluebird and Refrm each showed totals of **0 pop-ups, 0 active, 0 impressions, 0 conversions**. No Autumn Promotion or other cross-tenant popup content was present.

**Evidence:** `iso29/batch1/` contains paired Bluebird/Refrm screenshots for all four surfaces (and Admin + Teacher views for ISO-01).


## Batch 2 2026-09-10

**Scope:** ISO-05..ISO-12, report-only comparison of Bluebird `c=150002` vs Refrm `c=150001`. No sends, publishes, saves, checkouts, or calendar downloads were performed.

- **ISO-05 — PASS.** Community Hub showed Total Partners 0 for both tenants; no Fairlands/Refrm partner appeared under Bluebird.
- **ISO-06 — PASS.** Bluebird Campaigns showed three Bluebird-only campaigns; Refrm showed zero. Critical C020 retest passed: `/admin/campaigns/new?c=150002` rendered New Campaign with `?c=150002` retained in the route. No campaign was saved, sent, or published.
- **ISO-07 — PASS.** `/contact` showed Bluebird Central / Contact Studio with no client conversations in either tenant.
- **ISO-08 — PASS.** Bluebird `/notifications` retained document title `Bluebird Pilates — TEST DATA (fabricated)`; Refrm rendered `HelgoIQ`. No REFRM Dynamic Pilates title or notification content leaked.
- **ISO-09 — PASS.** Bluebird had zero upcoming bookings and three past bookings all at Bluebird Central, with no Stevenage. Refrm had zero upcoming and past bookings.
- **ISO-10 — PASS.** Calendar Sync showed no upcoming bookings to sync for either tenant; no export/download was activated.
- **ISO-11 — PASS.** Bluebird schedule location selector listed Bluebird Central and Bluebird North only; Refrm rendered no locations/classes.
- **ISO-12 — PASS.** Bluebird schedule class chips were All, Reformer Flow, and Slow Flow only; Refrm rendered no class chips/classes.

**Evidence:** `iso29/batch2/` contains paired Bluebird/Refrm screenshots for ISO-05..ISO-12 plus the ISO-06 create-route persistence capture.

## Batch 3 2026-09-10

**Scope:** ISO-13..ISO-20, report-only comparison of Bluebird `c=150002` vs Refrm `c=150001` on staging tip `ba88839d`. No appointment type, Seed Demo, refresh/calculation, publish, purchase, checkout, plan selection, add, booking, or other mutating action was performed. Browser address-bar navigation was used for several surfaces after managed browser snapshots timed out; the owned Admin2 session was preserved.

- **ISO-13 — PASS.** Bluebird Types showed **No appointment types yet**. Refrm showed no appointment types; its Types content remained in a Loading state. No tenant-specific appointment type appeared.
- **ISO-14 — PASS.** Bluebird and Refrm Daily Focus both showed **Nothing to focus on yet**. No Stevenage/£960 item and no Seed Demo/priority calculation was used.
- **ISO-15 — PASS.** Bluebird Credits showed 16 credits remaining, 0 recovery credits, and Bluebird expiry/top-up data. Refrm showed a Digital Membership Pass/member surface rather than Bluebird wallet data. No purchase.
- **ISO-16 — PASS.** Bluebird catalogue showed Bluebird Central, Bluebird 8 at £112/month, Single Class £20, and 5 Class Pack £80. Refrm showed Refrm Stevenage catalogue content (3 Credits £30 initial offer and Refrm 4 £60/month), with no Bluebird packs. No checkout or purchase.
- **ISO-17 — PASS.** Bluebird News showed one article, **CENSUS TEST DRAFT - Sept 2026 Studio News**. Refrm showed 0 articles / No articles yet. No publish or create/edit action.
- **ISO-18 — FAIL.** Bluebird client home showed Bluebird activity (16 credits, 0 classes until milestone, Quick Book Next Reformer, feedback, Notifications 10). Refrm `/?view=client&c=150001` instead showed the Helgo account chooser with **Bluebird Pilates — TEST DATA (fabricated)** in Business access and Memberships. **Owner/member impact:** Bluebird studio/member identity is exposed on the Refrm client route for the Admin2 session; Refrm branding/client home is not isolated.
- **ISO-19 — PASS.** Bluebird and Refrm Action Effectiveness both honestly showed **No action effectiveness data yet**. No Win-back/£1.8k data and no Seed Demo action.
- **ISO-20 — FAIL.** Bluebird Cohorts showed 0% M1/M3/M6/M12 retention, best cohort 2025-10, weakest cohort 2026-08, and empty sizes/LTV. Refrm showed the same cohort periods and metrics. **Owner/admin impact:** Refrm admin intelligence repeats the Bluebird cohort surface/data.

**Evidence:** `iso29/batch3/` contains paired WebP screenshots for ISO-13..ISO-20. Matrix rows 13–20 are filled with checks, verdicts, notes, and evidence paths.


## Batch 4 2026-09-10

**Scope:** ISO-21..ISO-29, report-only comparison of Bluebird `c=150002` vs Refrm `c=150001` on the staging app. `/api/version` reported buildToken/releaseSha `6cb5d8d955c0cf4e4d651161c0dfb4471fe56961` and commandCentreRuntimeIngress `early-auth-response-finish-v1`. No sends, generates, acknowledges, archives, creates, saves, bookings, or other mutations were performed. The Add Availability Slot and segment Message flows were opened only to verify controls and then Cancelled; Command Centre used harmless `q=hello` only and no command was executed.

- **ISO-21 — PASS.** Bluebird Monthly Intelligence Review showed the September 2026 Monthly Business Review, generated 21 ago, low confidence, with executive summary temporarily unavailable. Refrm stayed on the route with scheduled/latest briefing checks still loading/checking; no 303-member/£1.55M Refrm brief and no silent bounce to Executive Briefing.
- **ISO-22 — PASS.** Bluebird Overview showed Bluebird Pilates with only Bluebird Central/North locations. Refrm Admin Portal showed No company and no Bluebird company or seven-brand list.
- **ISO-23 — PASS.** Bluebird Quarterly Business Review showed no scheduled executive brief / awaiting first brief. Refrm remained honest-empty/checking with no Bluebird figures.
- **ISO-24 — PASS.** Recordings said screen recording is not switched on for this studio in both tenants.
- **ISO-25 — PASS.** Visual Intelligence was explicitly a shared, fixture-labelled sample gallery in both tenants (72 occupancy, 43 morning mix, +2pp peer badge), not live tenant performance.
- **ISO-26 — PASS.** Instructor ROI showed No instructor data found in both tenants; no Ella Matthews/£111k or Bluebird instructor revenue appeared.
- **ISO-27 — FAIL.** Bluebird availability listed BB Teacher and helgoiq bb teacher 2/3, all with 0 slots; the Add Availability Slot dialog was cancelled without saving. Refrm showed the same Bluebird roster, not a Refrm-local roster. **Owner/admin impact:** Refrm owner/admin can see Bluebird staff identities and availability/scheduling surface.
- **ISO-28 — PASS.** Bluebird had two CENSUS MKT segments, both 0 members; Message Segment was opened then Cancelled. Refrm showed No segments yet, with no Bluebird segment names/members.
- **ISO-29 — FAIL.** Bluebird `/admin/command-centre?c=150002&q=hello` retained `c=` and loaded Aster with Bluebird recent chats. Refrm `/admin/command-centre?c=150001&q=hello` retained `c=` but showed **Choose a studio first** with only **Bluebird Pilates — TEST DATA (fabricated)**. **Owner/admin impact:** Refrm admin is exposed to the Bluebird studio chooser/account branding. No studio was selected and no command executed.

**Evidence:** `iso29/batch4/` contains paired screenshots for ISO-21..ISO-29, including the cancelled Add Slot and Message dialogs' post-cancel states and the ISO-29 retained-query/chooser result.
