# M1 Lifecycle Wave 1 — partial Measured on tip 232659cf

**When:** 10 Sep 2026 ~23:30 Europe/London  
**Live tip:** `232659cf05d22e5de920ee547925b37581cfb6d4` (start and end)  
**Tenant:** Bluebird `c=150002` · Stripe TEST · Admin2 seat  
**Headline impact:** Launch Hub **~65%** (was 66% after Cluster A; morning 52%) — M1 strand moves Estimate → partial Measured

## Smoke + Cluster A (unchanged tonight)

| Bank | Result | Basis |
|---|---|---|
| Six-step smoke | **6/6 PASS** | Measured |
| Cluster A | **20/24 PASS** (same 4 fails: MEM-X01 ACS-F01 TAG-C01 TAG-A01) | Measured |

## Admin2 results — Wave 1

| Path | Verdict | Notes |
|---|---|---|
| Freeze (BB Smoke Sep8) | **PASS** | Paused · bills 30 Sept 2026; detail/list agree |
| Unfreeze / Resume | **FAIL** | Payment provider: “We couldn't resume billing… membership is still paused.” **Smoke still paused** |
| Cancel membership (Member B) | **PASS** | Cancelling / end 01 Oct 2026 |
| Reverse cancel (Member B) | **PASS** | Returned Active + 8 credits + “Membership Reinstated” — **fixed vs prior** (Keep left Cancelling) |
| Upgrade | **BLOCKED** | No selectable higher tier; Confirm disabled |
| Downgrade | **BLOCKED** | No lower tier; Confirm disabled |
| Member B client seat | **BLOCKED** | Admin preview ≠ authenticated client; no client join/book/cancel claimed |
| Waitlist / promotion | **BLOCKED** | No full class inventory (preview 0/10) |
| Owner seat | **BLOCKED** | Not attempted after resume payment-provider failure (no OTP/sudo) |

## Still not done tonight

- ISO-29 privacy retest
- Ambient Pulse / Dispatch / Twin evidence
- AI-85 re-sample
- Remaining M1 matrix rows (Owner, MemberB client, no-show, transfer, packs, GDPR, …)

## Hard rules (unchanged)

- **#1240 is LIVE** on `/api/version`, but **Declan has NOT cleared the rollback ban**.
- Never instruct `import.rollbackBatch` / never roll back until Declan clears.
- TRY dataset import only if Select/import works — still no rollback.

## Evidence location (box)

`/workspace/helgoiq-overnight-2026-09-10-11/03-m1/` (`WAVE1.md`, `evidence/`, `version-start.json`, `version-end.json`)  
Matrix: `/workspace/helgoiq-overnight-2026-09-10-11/M1-LIFECYCLE-MATRIX.csv`

No credentials in this drop.
