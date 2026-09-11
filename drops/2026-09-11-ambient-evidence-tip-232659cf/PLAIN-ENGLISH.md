# Ambient intelligence — plain English (tip 232659cf)

**Tenant:** Bluebird Pilates (`c=150002`) · **Seat:** Admin2 · **Tip:** `232659cf…` (confirmed live on `/api/version` start and end)

This is **evidence only** — not a scored acceptance bank. No Feature Controls, seed/import/rollback, or settings changes.

## What we checked

| Area | Result |
|---|---|
| **Studio Pulse** | **OK** — score 50/100 with working explainability (why-score modal: Team 100 … Referrals 10). Recommendation: Launch Referral Campaign. Empty-studio honesty looks right. |
| **Morning Dispatch** | **Viewer still FAIL** — admin “Not yet run today”; viewer reached Generating then **Something went wrong** (same class of failure as earlier tips). |
| **Digital Twin** | **Cancelling agrees with directory** — Member A is Cancelling in directory and Twin banner; no status reversal. Churn/comms still “Insufficient data”. |
| **Learning Engine** | **One-tap works; 0 lessons** — Record Action moved a Churn Risk signal to Actioned. What We’ve Learned still shows **0 active lessons**. |
| **Event Bus** | **Platform-Admin gated** — “Platform Admin Access Required”. Declan unavailable; no OTP/escalation. |

## Command Centre pairing (summary)

- Pulse score/drag: **AGREE**
- Improve Pulse: **MISMATCH** (CC gave a +10 scenario, not the UI referral-campaign action)
- Morning Dispatch: **MISMATCH** (CC narrated a dispatch while the viewer was broken)
- At-risk/cancelling: **MISMATCH** (CC asked for a named member field)
- Learning lessons: **AGREE** on zero lessons
- Event Bus: not paired (gated)

Full matrix: `CC-DISAGREE.md`. Full capture notes: `EVIDENCE.md`. Screenshots under overnight pack `05-ambient/evidence/`.

## Unchanged programme facts (kept)

- Smoke **6/6** Measured
- Cluster A **20/24** Measured
- ISO-29 **26 PASS / 4 FAIL** Measured (same leaks 18/20/27/29; Weymouth/Luton NOT_RUN)
- M1 Wave1 **partial** Measured
- **Rollback ban ACTIVE** — never `import.rollbackBatch`
