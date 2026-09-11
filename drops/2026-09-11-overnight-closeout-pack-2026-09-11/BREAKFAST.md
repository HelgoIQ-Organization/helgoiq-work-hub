# HelgoIQ overnight pack — 10→11 Sep 2026 (posted as-is)

**Overnight tip (every section below):** `232659cf05d22e5de920ee547925b37581cfb6d4`  
**Morning was stuck:** `6cb5d8d9` / paper ~52% → overnight Hub ~**65%** measured  
**Live tip at post time (not overnight):** check `/api/version` — may already have moved to the six-PR pack  
**Hub:** https://helgoiq-organization.github.io/helgoiq-work-hub/

---

## 1. What works now that did not yesterday

| Area | Stamp | Result |
|---|---|---|
| **Smoke** | `232659cf…` | **6/6 PASS** — membership cancel→reverse **first proven** |
| **Account-not-found** | `232659cf…` | Gone (#1244 lineage) |
| **M1 Admin2 freeze** | `232659cf…` | **PASS** |
| **M1 Admin2 cancel + reverse** | `232659cf…` | **PASS** (prior reverse fail fixed) |
| **Pulse explainability** | `232659cf…` | OK |
| **Digital Twin (member view)** | `232659cf…` | Cancelling **agrees** with directory |
| **Learning Engine one-tap** | `232659cf…` | Actioned OK (0 lessons yet) |

---

## 2. What still does not work

| Area | Stamp | Result |
|---|---|---|
| **Cluster A** | `232659cf…` | **20/24** — same fails MEM-X01, ACS-F01, TAG-C01, TAG-A01 |
| **M1 unfreeze** | `232659cf…` | **FAIL** — payment provider; BB Smoke still paused |
| **M1 upgrade/downgrade** | `232659cf…` | **BLOCKED** — no selectable tiers |
| **ISO-29** | `232659cf…` | **26 PASS / 4 FAIL** — same ISO-18, 20, 27, 29 |
| **Dispatch viewer** | `232659cf…` | Still **FAIL** (“Something went wrong”) |
| **AI-85** | `232659cf…` | **48/5/23/8/1** — no movement on rescore |
| **CSV import canary** | `232659cf…` | **FAIL** — `Missing companyId` on `batchImport.upload` (403). 0 created |

---

## 3. What you could not test and why

- **Member B authenticated client / waitlist / no-show** — BLOCKED (admin preview only; no full-class inventory / safe roster) — stamp `232659cf…`
- **Weymouth #1245 / Luton #1242 extras** — NOT_RUN (no dedicated fixture/route) — stamp `232659cf…`
- **Event Bus** — Platform Admin gate (Declan cycling; no PA escalation) — stamp `232659cf…`
- **Owner seat after resume fail** — not attempted (no sudo/settings) — stamp `232659cf…`
- **Forms / QR inventory** — missed all week; queued as separate morning dispatch (not overnight)

---

## 4. Single most important thing

**Smoke is green and membership reverse is proven on `232659cf…` — but Cluster A’s fours, ISO’s fours, Dispatch viewer, AI-85, unfreeze-at-provider, and CSV import `companyId` upload did not move.**

---

*No credentials. No invented metrics. Overnight sections all ran on tip `232659cf05d22e5de920ee547925b37581cfb6d4`.*
