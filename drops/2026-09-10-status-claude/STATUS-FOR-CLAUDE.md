# HelgoIQ status for Claude — 10 Sep 2026 (morning → mid-morning BST)

**Author:** Bot Commander (Grok)  
**Audience:** Claude (handoff / architecture)  
**Staging:** `https://lobster-app-662c7.ondigitalocean.app`  
**Live tip:** `ba88839d7121bfc00adcaaec358e92f40fa3fa0f`  
**Tenant:** Bluebird only `c=150002` (TEST DATA). No Refrm writes.  
**Running list:** HelgoIQ-Organization/HelgoIQ-Platform **#1180**

---

## 1. Executive snapshot

| Stream | State |
|---|---|
| AI-85 walk | Closed earlier (47 PASS / 5 FAIL / 8 UNREACHABLE / 24 UNCERTAIN; skip AI-002). Feature Controls UI still **0/21** + Platform Admin gate — A/B/C pre-enable scores still in doubt |
| Smoke (6-step) | **FAIL step 1** — real finding, not fixture churn |
| Cluster A | **20/24** on `ba88839d` — B–F locked |
| Cluster B–F | **One-page proposal posted** on #1180 — banks not authored for score |
| 12-month dataset | Shape posted; **0 rows** created — blocked on import bug |
| Import fix | **PR #1229** open → staging (companyId stamp). CI mostly green; **smoke gate + exact-head reviewer** red |
| Ambient intelligence | Pack delivered (`helgoiq-ambient-2026-09-10.zip`) |
| M1 Owner | Done (prior). Reinstate/join-pay/waitlist re-walk when fixes land |
| M1 Admin 2 | Batch 1 done; batch 2 (reinstate→Active→freeze) **in flight** |
| M1 client / ISO-29 | Not started |

---

## 2. Studio Pulse & ambient intelligence

Full write-ups: `/workspace/helgoiq-ambient-2026-09-09/` + zip `helgoiq-ambient-2026-09-10.zip`.

### Studio Pulse
- **Explainability:** PASS at UI level (weighted composite modal).
- **Movement:** **FAIL.** Marked a real roster no-show on Friday Reformer Flow, clicked Recompute — score stayed **50/100**, components unchanged (Occupancy still 40 / fill 0%). Owner would see a stuck health score.

### Morning Dispatch
- **Generate Now:** PASS — Owner view Ready on admin page.
- **Viewer:** **FAIL** — `/dispatch` (and later `/admin/dispatch`) error / unavailable. Owner cannot read the briefing.
- **Truth / at-risk surfacing:** UNCERTAIN — blocked by viewer.

### Member Digital Twin (existing members only — no 12m seed)
| Persona | Member | Verdict |
|---|---|---|
| At-risk / cancelling | Member A | **PASS** with caveat — directory Cancelling; Twin shows Improving bookings; churn/retention “Insufficient data” |
| Improving | Declaneryan71 Tester | **PASS** |
| Steady | Unnamed (Admin 2 email seat) | **UNCERTAIN** — only 2 bookings + 50% no-show |

**Product disagreement:** cancelling tile vs Twin “Improving” for Member A.

### Learning Engine / What We've Learned
- Both **UNCERTAIN**. LE: ~20 signals, many `Source: event_bus`, 0 actions/lessons. What We've Learned: 0 lessons / 0 outcomes.

### Event Bus
- **UNREACHABLE** — Platform Admin gate (`/admin/event-bus`). **NEED_DECLAN** for platform-admin seat.
- Flow: UNCERTAIN (no stream UI). Learning Engine dependency claim: **PASS** (signals cite `event_bus`). Pulse/Dispatch dependency: UNCERTAIN.

### Command Centre ↔ ambient agreement
| Comparison | Verdict |
|---|---|
| CC vs Pulse score / why | **PASS** — both 50/100 Steady |
| Biggest drag | **PASS** — Referrals |
| Weekly action | **PASS** — Launch Referral Campaign |
| CC vs Dispatch content | **UNCERTAIN** — viewer dead; some CC probes stalled Investigating |

**Strongest ambient defects for Claude:** Pulse non-reactive recompute; Dispatch generate≠viewer; Event Bus gated while LE attributes to it; Twin vs membership status mismatch; CC/Pulse semantic agreement (good).

---

## 3. Command Centre (Cluster A)

**Tip:** `ba88839d` · **Pass: 20/24** · **B–F locked**

- Admin 2: **18/22** live.
- Teacher 2 MGR-10 + ACS-X01: **PASS** teacher_refuse (live OTP) — nothing changed.

### FAILs (verbatim on #1180)
1. **MEM-X01** — transfer plan ask returned member search only (Central), no plan.
2. **ACS-F01** — malformed roster (`Teacher 2160660` / duplicated `BB Teacher`); Teacher 2 not clearly named.
3. **TAG-C01** — `cohort_tag_not_found` for “Top Tier Bluebird 8”.
4. **TAG-A01** — dumped tag catalog; did not propose Central-active segment definition.

**Wins after Member A seed / #1225:** MEM-T01 + TYP-01 **PASS** (email identity).

**B–F proposal:** posted on #1180 (comms/schedule/money/digital/intelligence briefs + launch-critical vs post-launch). Do not score B–F until Declan approves scope and A is 24/24.

---

## 4. Bookings & payments (smoke + M1)

### Six-step critical-path smoke
- Seat path **option B:** `helgoiq-bb-smoke@agentmail.to`, pending invite resent, fixtures secret updated (no `memberName`).
- Run `34443965698` **failed step 1** `invitation-and-tenant-denial`.
- Spec expected accept phrases: `member invitation accepted|already accepted|…`
- **Actual landing:** `/sign-in` with **“Couldn't find your account.”** — password step never shown. No Bluebird chrome.
- **Verdict:** invite-flow / Clerk account-fixture mismatch (not display-name). **No second invite.** Steps 2–6 including **step 5 membership reversal (#1228 server exists)** never ran.
- Smoke gate also blocks **#1229** merge queue (“Current staging smoke failed; Grok must diagnose and record it” — diagnosed).

### M1 Admin 2 batch 1 (tip `ba88839d`)
| Step | Verdict |
|---|---|
| Reverse cancellation control present | PASS (not clicked in batch 1) |
| Join-and-pay path to test checkout | PASS (stopped before Complete Purchase) |
| Waitlist | BLOCKED — class had space; no waitlist UI |
| book_class | **PASS** — booked + wallet −1 |
| cancel_within_policy | **PASS** — credit returned +1 |
| Active member for freeze/upgrade | Was missing — **reinstate→Active batch 2 in flight** |

Note: wallet history showed prior `admin_added` for same class while timetable still offered BOOK — cross-screen discrepancy for follow-up.

### Payments / Stripe
- Smoke never reached discounted checkout / grant / refund / reverse.
- M1 Admin 2 join-pay path proves Stripe test checkout UI; no charge completed in batch 1.
- Dataset payment seeding not started (0 import rows).

---

## 5. Twelve-month Bluebird dataset

- Shape approved via programme order; posted on #1180.
- Path: Admin CSV Import + `rollbackBatch` wipe; marker `SEED:12M-2026-09`; 165-row CSV ready.
- **Commit HTTP 500:** `createUserForImport` omitted `companyId` → `upsertMemberProfile` cannot resolve tenant.
- **PR #1229** fixes stamp + profile-for-company + rollback wipe. Local import tests 19/19. Awaiting merge + staging deploy, then re-run commit.
- Until then: ambient UNCERTAIN re-score of 24 AI-85 empties **parked**.

---

## 6. AI Feature Controls (still open)

- Catalogue at `/admin/ai-feature-toggles`: UI **0/21 OFF**.
- Enable All toast “already enabled” vs switch “Platform admin required”.
- Admin 2 cannot settle true ON state. **NEED_DECLAN** platform admin / Owner.
- Scores taken while flags looked off (esp. A/B and C AI-026–043) remain provisional.

---

## 7. What Claude should treat as actionable defects

1. Pulse recompute ignores real attendance change.
2. Morning Dispatch Ready but viewer/admin route broken.
3. Event Bus Platform-Admin-only while LE depends on `event_bus`.
4. Twin vs Cancelling membership disagreement (Member A).
5. CSV `import.members` commit 500 without companyId (**fix in #1229**).
6. Smoke seat Clerk: invite accept → “Couldn't find your account.”
7. Cluster A: MEM-X01 plan gap; ACS-F01 roster naming; TAG-C01 missing cohort tag; TAG-A01 advice gap.
8. Waitlist untestable without a full class.
9. Feature Controls UI/API mismatch (0/21 vs “already enabled”).

---

## 8. Artefacts (on Bot Commander box)

- Ambient: `/workspace/helgoiq-ambient-2026-09-09/` · zip `/workspace/helgoiq-ambient-2026-09-10.zip`
- Cluster A: `/workspace/helgoiq-command-centre/results/ba88839d7121bfc00adcaaec358e92f40fa3fa0f/`
- B–F proposal: `/workspace/helgoiq-command-centre/CLUSTER-B-F-PROPOSAL.md`
- Dataset: `/workspace/helgoiq-bluebird-12m-dataset-2026-09-10/` (`BLOCKED.md`, CSV, scripts)
- M1: `/workspace/helgoiq-m1-lifecycle-2026-09-09/`
- AI-85: `/workspace/helgoiq-ai85-2026-09-09/`
- PR: https://github.com/HelgoIQ-Organization/HelgoIQ-Platform/pull/1229

**No seat passwords / invite tokens in this note.**
