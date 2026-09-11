# HelgoIQ overnight breakfast — 10→11 Sep 2026

**Tip:** `232659c` (#1240 safe-rollback LIVE) · Staging matches tip · Hub ~**65%** measured  
**Morning was stuck:** `6cb5d8d9` / paper ~52%  
**Hub:** https://helgoiq-organization.github.io/helgoiq-work-hub/

---

## 1. What works now that did not yesterday

| Area | Result |
|---|---|
| **Smoke** | **6/6 PASS** — including membership cancel → reverse (**first proven**) |
| **Account-not-found** | Gone (#1244) |
| **M1 freeze** | Admin2 freeze **PASS** |
| **M1 cancel + reverse** | Admin2 cancel + reverse **PASS** (prior reverse fail fixed) |
| **Pulse** | Explainability OK |
| **Digital Twin** | Cancelling status **agrees** with directory |
| **Learning Engine** | One-tap Record Action **OK** (0 lessons yet — outcomes needed) |
| **Tip / staging** | Moved `99e17af` → `232659c`; staging identical to tip |

---

## 2. What still does not work

| Area | Result |
|---|---|
| **Cluster A** | **20/24** — same 4 fails: MEM-X01, ACS-F01, TAG-C01, TAG-A01 (**no improvement**) |
| **M1 unfreeze** | **FAIL** — payment provider; Smoke seat still paused |
| **M1 upgrade / downgrade** | **BLOCKED** (no selectable tiers) |
| **ISO-29** | **26 PASS / 4 FAIL** — same ISO-18, 20, 27, 29 |
| **Dispatch viewer** | Still broken |
| **AI-85** | Still **48 / 5 / 23 / 8 / 1** — rescore **no movement**; PA / voice / summary blockers |
| **CSV import (canary)** | **FAIL** — `Missing companyId` on upload (403). 0 created. No rollback. |
| **Rollback ban** | #1240 live, but Declan has **not** cleared — still **no** `import.rollbackBatch` |

---

## 3. What you could not test and why

- **Member B client seat / waitlist / no-show** — BLOCKED (admin preview only; no full-class inventory / safe roster)
- **Weymouth #1245 / Luton #1242** — NOT_RUN (no dedicated fixture/route)
- **Event Bus** — Platform-Admin gated (Declan asleep; no OTP escalation)
- **Dataset import** — canary **FAIL** at upload: `Missing companyId` on `batchImport.upload` (HTTP 403). 0 members created. Full 12m not attempted. **Rollback not used.**
- **Owner seat after resume fail** — not attempted (no sudo/settings escalation)

---

## 4. The single most important thing

**Smoke is green and membership reverse is proven for the first time — but Cluster A’s fours, ISO’s fours, Dispatch viewer, and AI-85 did not move. Unfreeze still fails at the payment provider, CSV import still cannot upload (`companyId` missing), and rollback remains banned until you clear it.**

---

*Facts only from overnight on tip `232659cf05d22e5de920ee547925b37581cfb6d4`. No credentials. No invented metrics.*
