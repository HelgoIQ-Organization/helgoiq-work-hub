# HelgoIQ evening progress — 17 Sep 2026

**Live tip (what members actually run):** `f13a6dc2`  
**Launch Hub headline:** **73%** (held — tip has not moved since afternoon)  
**Staging has newer merges waiting on DigitalOcean:** `#1382` `#1383` `#1385` `#1379` (HEAD `cace7a56`) — Feel cookie chrome, warm 404, Safe Studio tile drill, intelligence concern registry. Not on live tip yet.

## In plain English

We spent the afternoon and evening unlocking Launch Hub lanes that do **not** need Declan on the bike. The live product tip is unchanged, so the Hub score stayed at **73%**. Several useful Feel/CMS/embeds findings are now on #1180. A small evening merge pack is **merged but not deployed** — once DigitalOcean flips the tip, Feel retests can pick those up.

## What moved today (evidence on #1180)

### Command Centre
- **Cluster A:** 24/24 PASS on live tip
- **Cluster B–F:** 22/30 (8 still FAIL) — primary engineering fix pack still open
- Tip watches for MEM-F01 / ISO-18/29 fixes: **not live yet** (#1377 dirty/conflicting; #1376 open)

### Feel (Teacher / client / owner) — scored on live tip
- **Teacher 3:** Joy 3 / Obvious 3 / Frictionless 3 — empty/zero states, Submit still live on closed past class, cancelled attendee in follow-up
- **Client (member-b):** ~3.3 — coherent shell; membership/credit ambiguity; slow progress report
- **Owner:** ~6.7/10 PASS with material friction — Pulse “critical” on thin/stale data; timetable first glance sparse; setup overwhelm

### Embeds
- Blank-page JS render: **no Bluebird→Refrm leak** (cross-tenant PASS)
- Tenant-specific branding **not** proven (generic demo shells for both)
- Buy / retreat / root embed: FAIL or empty

### CMS gaps (Admin 2)
- **PASS:** media upload+use; site health score surface (60 / Grade C)
- **FAIL:** publish E2E (marked Live in admin, **public URL 404**) — also blocks SEO + public menu proof
- **BLOCKED:** multi-location page isolation (no targeting control in Page Settings)

### Astra / restricted Manager Pulse
- Still **NOT VERIFIED**
- Existing Manager location edit blocked (“instructors only”) → **#1396 GATED**
- Dedicated restricted invite parked on **Cloudflare Turnstile** (NEED_DECLAN when at a laptop)

### #1328 cash-sale refuse
- Merged PR was **Command Centre injected** cash refuse (Measured PASS on that surface)
- Teacher **POS cash Confirm Payment** UX retest: **FAIL** — no clear refuse copy; CTA stayed enabled; credits did not move (follow-up, not a claim the CC fix regressed)

## What Declan still uniquely unblocks
1. Turnstile on restricted Manager signup (or merge/deploy #1396)
2. Staging smoke / Stripe Connect fixtures (NEED_DECLAN pack)
3. Stage 4B read-only Bluebird DB
4. Dataset Confirm product bug **#1388** (no Platform Admin workaround)

## What we can keep doing without Declan
- Await DO tip move → retest Feel cookie/404/Safe Studio PRs
- Engineer B–F 8 FAIL pack + CMS publish-404 + POS cash refuse UX (CloudAgent pool was exhausted earlier — retry)
- Keep tip watches armed for MEM-F01 / ISO chooser

## Bottom line
**73% Hub, tip frozen on `f13a6dc2`.** Four parallel lanes now have tip evidence. Biggest remaining Hub lifts: deploy evening pack, fix B–F failures, clear restricted Pulse, clear smoke/Dataset Confirm Declan gates, fix CMS publish→public 404.
