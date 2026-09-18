# HelgoIQ progress brief for Claude — 18 Sep 2026 (afternoon)

**Audience:** Claude (shared by Declan)  
**Author:** Bot Commander (Grok)  
**Live staging tip:** `205d5bb897fa84c76f2af92b2cad16b568f1cca2` (`205d5bb8`)  
**Tenant for all Measured work today:** Bluebird `c=150002` only — never Reformer writes  
**Launch Hub headline now:** **70%** (was **76%** earlier today after Dataset Confirm; was ~73% at tip open)

---

## Why the dashboard score dropped (76% → 70%)

This was **not** a product regression and **not** a tip rollback. The tip stayed on `205d5bb8`. The headline moved because one strand was **re-measured honestly**.

| | Before AI-24 re-score | After AI-24 re-score |
|---|---|---|
| **AI strand (`ai-85`)** | **68%** (held / stale relative to empty AI opportunity surfaces) | **25% Measured** |
| **Headline** | **76%** | **70%** |

### Exact math (Hub formula)

Headline = weighted average of strand percents by `projectWeightPercent`, rounded half-up.

**After AI-24 (current):**

```
round((80×12 + 87×10 + 86×10 + 25×15 + 95×9 + 73×10 + 55×6 + 74×8 + 100×10 + 42×10) / 100)
= round(69.92) = 70%
```

**If AI had stayed at 68% (everything else identical):**

```
round((… + 68×15 + …) / 100) = round(76.37) = 76%
```

So the **entire 6-point headline drop** is the AI strand move **68 → 25** at **15% project weight** (heaviest single strand weight alongside findings-fix).  
Δ AI = −43 points × 0.15 ≈ **−6.45** headline points → 76 → 70.

### What the AI-24 re-score actually measured

Against **live twelve-month Bluebird data** (177 members / 165 with `SEED:12M-2026-09` / Member A present):

| Verdict | Count |
|---|---:|
| PASS | **3** |
| FAIL | **0** |
| BLOCKED | **17** |
| SKIP | **4** |
| **Total** | **24** |

- **PASS:** AI-014 Command Centre Agents; AI-039 Studio Intelligence (honest Pulse **30/100 Critical**); AI-044 Monthly Intelligence Review (“Ready to review”, executive summary explicitly unavailable — not invented).
- **BLOCKED (17):** Opportunity / task / recommendation / voice / impact / audience surfaces loaded but had **no tenant work to exercise** — scored BLOCKED, not FAIL, and **not** converted into PASS from empty states.
- **SKIP (4):** Routes missing / not exposed (class recommender, progress reports, pre-class briefings; Dispatch viewer comparison parked).

**Disagreement ledger:** 6 Measured rows (LED-01..06) for Command Centre vs Pulse / Dispatch / Twin — non-comparable units, omissions, and honest empties. Supersedes the prior 5-row ledger. Stale prior tip figures (e.g. Pulse 53) were **not** reused.

**Policy:** Do not invent PASS. Empty opportunity ≠ FAIL. That honesty is why `ai-85` fell hard and the headline followed.

---

## What improved today (same tip `205d5bb8`)

These gains are real; they just do not outweigh the AI re-score in the weighted headline.

| Strand | Move | Evidence |
|---|---|---|
| **Dataset** | **52 → 80** Measured | #1388 LIVE. Company Admin2 Confirm/Approve canary **PASS** on draft `members-canary3-clean.csv` (3 Valid → Approved). No Platform Admin. Import/Activate **not** run (still unproven as company admin). 12m seed already live: **177** members, **165** `SEED:12M-2026-09`, Member A present. |
| **Command Centre** | bank **A 24/24 · B–F 23/30** → strand **87%** Measured | Rebank on tip. **E-FAC-01 / E-FU-01** now PASS (#1403). **C-XAGR-01** PASS. Still FAIL: B-HOW-01, D-RI-01, D-CASH-01, F-ISO-01, F-SEED-01, F-INJ-01, F-HOW-01. |
| **Comms** | **42% HOLD** Measured | Full re-census: **1 PASS / 5 PARTIAL**. Consent PASS (Member B prefs). Cancel / cover / journey / segment Send Test / Manager newsletter: UI ran; **history/inbox rows missing** — no invented raise. |
| **Feel** | Overall **84/100** remeasure | Tip move remeasure; no Feel-named PRs in the tip pack. New defect **DEF-T-PERF-ROUTE** (`/teacher/my-performance` blank chrome vs `/teacher/performance`). |
| **Connections (Feel)** | First-class walk filed | Google Reviews/Ads handoff PASS (stopped at chooser). Stripe/Gmail green connected; **Disconnect no-op (P1)**. Meta Facebook CTA dead end (P1). GTM asks Container ID + shows **Reformer** `refm.co.uk` URL (P1). Mailchimp/Zoom/Xero/QuickBooks not exposed. |

**Headline path today (same tip after deploy):** tip open ~73% → Dataset Confirm lift → **76%** → AI-24 honest re-score → **70%**.

---

## Current strand board (tip `205d5bb8`)

| Strand | % | Basis | Weight | Note |
|---|---:|---|---:|---|
| Dataset | 80 | Measured | 12 | Confirm PASS; Import/Activate company-admin still unproven |
| Command Centre | 87 | Measured | 10 | A 24/24 · B–F 23/30 |
| Isolation | 86 | Estimate | 10 | #1376 / #1377 still OPEN — not on tip |
| **AI-85** | **25** | **Measured** | **15** | **3/24 PASS — driver of headline drop** |
| Ambient / embeds | 95 | Estimate | 9 | #1409 on tip; hold |
| M1 | 73 | Estimate | 10 | Hold |
| Smoke | 55 | Measured FAIL | 6 | #1375 class / NEED_DECLAN Turnstile on fresh smoke-3 signup |
| Payments | 74 | Estimate | 8 | Hold |
| Findings-fix | 100 | Estimate | 10 | Shipping tracked fixes |
| Comms | 42 | Measured | 10 | Consent PASS; five PARTIAL |

---

## Parked / NEED_DECLAN (do not invent progress)

1. **Smoke fresh member** — invite for `helgoiq-bb-smoke-3@…` present; Clerk `/sign-up` blocked on **Cloudflare Turnstile**. `GROK_SMOKE_FIXTURES` must change **YES** after accept.  
2. **Restricted Manager Pulse** — #1396 still GATED; prior Turnstile on restricted seat.  
3. **ISO-18 / ISO-29** — #1376 OPEN / blocked / not on tip. Leave Isolation at 86 until sweep.  
4. **MEM-F01 → Cluster A** — #1377 OPEN / not on tip.  
5. **Stage 4B RO DB** — still need Declan read-only DB if that lane resumes.  
6. **Never** `import.rollbackBatch` without batchId + company scope. Prefer not to need it.

---

## What Claude should treat as true

- Headline **70%** is **correct and intentional** after Measured AI-24 — not a tip failure.  
- Raising headline again means **filling AI opportunity surfaces** (or narrowing the AI-24 gate to runnable checks), **not** reverting the AI strand to 68.  
- Largest remaining Measured unlocks still parked on Declan/gates: smoke Turnstile, #1376 ISO, #1377 MEM-F01, company-admin Import/Activate, B–F seven FAILs, Connections P1s.  
- Bluebird-only testing; no Reformer contamination in today’s packs.

---

## Evidence pointers (Work Hub / #1180)

- Dataset Confirm canary PASS + Hub Dataset 52→80 (earlier today; headline was then 76%).  
- CC rebank A24 / BF23/30 → CC 87%.  
- Comms re-census PARTIAL hold 42%.  
- AI-24 drop: `drops/2026-09-18-ai24-rescore-tip-205d5bb8/` · #1180 comment on AI strand 68→25.  
- Connections Feel: `drops/2026-09-18-connections-feel-walk-tip-205d5bb8/`.  
- Local packs: `/workspace/helgoiq-full-programme-2026-09-17/` (`dataset/`, `cc/205d5bb8/`, `comms/`, `ai24/205d5bb8/`, `feel-lane/connections-205d5bb8/`).

---

*End of brief — tip `205d5bb8` · headline 70% · AI Measured 25% is the drop explanation.*
