# Bluebird 12-month dataset — CREATE PLAN

**Tenant:** Bluebird only `companyId=150002`. Never Refrm `150001`.  
**Marker (visible):** `SEED:12M-2026-09` in member **name** (and payment descriptions / booking notes where fields exist).  
**Marker (wipe key):** CSV Import `importBatchId` stamped on users / bookings / payments / credits / schedules.  
**Standing seats (DO NOT TOUCH):** Admin 2, Owner, Teacher 2/3, Member A/B, smoke — none of these are import-stamped.  
**Feature Controls / Setup:** do not change.  
**Seed Demo / Clear Demo / seedDataManager.bulkRemove / capacity-stack:** **FORBIDDEN** (banned / unsafe / Refrm-hardcoded).

## Path chosen (safe + reversible)

**Admin CSV Import tRPC router** (`server/routers/import.ts`), company-scoped:

| Step | Procedure | Purpose |
|---|---|---|
| 1 | `import.createBatch` type=`members` | Create tracked batch for c=150002 |
| 2 | `import.members` dryRun→commit | 150–200 members + optional Bluebird 8 / packs via tier name |
| 3 | `import.createBatch` type=`bookings` | Tracked bookings batch |
| 4 | `import.bookings` | Attendance / no-shows / cancels against **existing** Bluebird timetable (no new schedules unless needed) |
| 5 | `import.createBatch` type=`payments` | Ledger events only (not live Stripe charges) |
| 6 | `import.payments` / `import.credits` | Renewals, declines→recover, pack buys, refunds as history rows |
| 7 | Spot-check + post #1180 | Counts vs SHAPE |

Auth: Admin 2 (`helgoiq-bb-admin-2@agentmail.to`) session cookie → `/api/trpc` mutations. Prefer scripted tRPC over UI clicking 200 rows.

Emails: `helgoiq-bb-12m-{NNNN}@example.com` (not Agentmail — inbox cap 10). Names: `{Given} {Family} SEED:12M-2026-09`.

Anchor: keep Member A `helgoiq-bb-member-a@agentmail.to` as at-risk/cancelling persona (already Cancelling Bluebird 8) — **do not re-import / overwrite**.

## Wipe path (confirm before create)

Primary (preferred):

```
import.rollbackBatch({ companyId: 150002, batchId: <id> })
```

Deletes only rows with that `importBatchId` in: `users`, `member_credits`, `class_schedules`, `bookings`, `payments`. Verifies batch.companyId === 150002. Marks batch `cancelled`.

Secondary filters (if orphans remain — memberships / profiles / timeline are **not** all stamped today):

- `users.openId LIKE 'import_%'` **and** email `LIKE 'helgoiq-bb-12m-%@example.com'` **and** company 150002
- name contains `SEED:12M-2026-09`
- Never delete standing-seat emails

**Known wipe gap:** `createMembership` during member import does **not** stamp `importBatchId` on `memberships`. User delete via rollback may leave orphan membership rows or require a follow-up scoped delete by userId list from the batch. Seeder must log every created `userId` + `batchId` to `logs/created-ids.json` for a precise secondary wipe.

Do **not** use:

- Seed Data Manager `bulkRemove` (DEMO_REMOVABLE empty — refuses all)
- Seed Demo / Clear Demo buttons
- `seedData.seedCapacityStack` (hardcoded Refrm locations 150001–150004)
- `DATABASE_URL` scripts without Declan-provided staging URL + confirm flags
- Feature flag / Setup toggles

## Shape mapping (Sep 2025 → Sep 2026)

- ~165 members split Central / North  
- ~55% active membership (Bluebird 8), ~20% class packs, ~15% lapsed, ~10% never-converted  
- Join/leave spread by `joinDate` + membership status + booking density  
- Cohorts: ≥5 at-risk (incl. Member A), ≥5 improving, ≥5 steady; ≥8 birthdays this week via DOB  
- Payments: ledger only, Stripe TEST tenant already; no live charges  

## Create order (implementation)

1. Write this plan + wipe notes ✅  
2. Scaffold CSV generators + tRPC runner under `scripts/`  
3. Auth Admin 2 on c=150002; resolve location IDs + tier names  
4. Dry-run `import.members` (10 rows) → inspect errors  
5. Commit members batch → record batchId  
6. Bookings + payments batches against real classes  
7. PROGRESS.md counts; stop on any Refrm / standing-seat collision  

## Auth / credential policy

Seat passwords live only in existing seat docs / process env for the runner — **never** copied into CREATE-PLAN, PROGRESS, BLOCKED, or #1180 posts.

## Investigation addendum (2026-09-10)

- Auth: Admin 2 Clerk **Bearer** token required for `adminProcedure` (cookie alone → 10002).
- `import.members` **dryRun works**; **commit currently 500** on staging because `createUserForImport` omits `companyId` and `upsertMemberProfile` cannot resolve tenant — see BLOCKED.md.
- Until platform fix or DATABASE_URL seeder, do not mass-create empty batches.
- Location hint from live timetable URL: Bluebird locationId **150005** (confirm Central vs North before booking seed).
- Membership tier name **Bluebird 8** resolves to tier id **40** on 150002.
