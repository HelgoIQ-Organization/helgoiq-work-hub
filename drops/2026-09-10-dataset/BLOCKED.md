# BLOCKED — Bluebird 12m create

**Tenant:** Bluebird `c=150002` only (Refrm untouched).  
**Create started:** attempted (dry-run OK; commit failed).  
**Counts created:** **0** members / 0 bookings / 0 payments (no seed rows written).

## Path chosen (still the correct reversible path)

Admin **CSV Import** tRPC (`server/routers/import.ts`):

- `import.createBatch` → stamp `importBatchId`
- `import.members` / `import.bookings` / `import.payments` / `import.credits`
- Wipe: `import.rollbackBatch({ companyId: 150002, batchId })` (company-scoped)

Marker in CSV names: `SEED:12M-2026-09`. Emails: `helgoiq-bb-12m-NNNN@example.com`.  
Standing seats not in CSV. Seed Demo / `seedDataManager.bulkRemove` / capacity-stack **not used**.

See `CREATE-PLAN.md`. Scaffold: `csv/members-12m.csv` (165), `scripts/generate-member-csv.mjs`, `scripts/trpc-import-runner.mjs`.

## Exact blocker

1. **Admin 2 auth works** (Clerk Bearer required; cookie-only → `NOT_ADMIN` 10002).
2. **`import.createBatch` succeeds** (batches 1–3 created as draft trackers on 150002).
3. **`import.members` dryRun succeeds** (10/10 valid; Bluebird 8 tier id **40** matched).
4. **`import.members` commit returns HTTP 500** even for a single minimal row (no membership).

Root cause in staging tip `ba88839d…`:

- `createUserForImport` inserts `users` **without `companyId`** (`openId` = `import_…` only).
- Commit then calls `upsertMemberProfile(userId, { homeLocationId, … })` **without `companyId`**.
- `upsertMemberProfile` throws: *Cannot create member profile for user …: no companyId could be resolved* (see `server/db.ts` comments on NOT NULL `member_profiles.companyId`).

So the platform CSV member import path is currently **non-writable** on this build.

## Alternatives checked (also blocked)

| Option | Why not |
|---|---|
| Seed Demo / Clear Demo | Explicitly banned |
| `seedDataManager.seed` members | No `members` case; falls through to “use batch seed” |
| `seedDataManager.bulkRemove` | `DEMO_REMOVABLE` empty — all removals refused |
| `seedData.seedCapacityStack` | Hardcoded **Refrm** location IDs |
| `memberInvitations.create` + accept | `accept` is `protectedProcedure` — invitee must be logged-in Clerk user; Agentmail inbox cap 10; cannot accept 165 `@example.com` seats |
| `scripts/seed-full-member-profile.ts` style | Needs **`DATABASE_URL`** + confirm flags — **not on box** |
| UI click 200× Add Member | Same invite/Clerk accept wall; not reversible via importBatchId |

## Unblock (any one)

1. **Platform fix:** `createUserForImport` / `import.members` must set `users.companyId` and/or call `upsertMemberProfileForCompany(userId, companyId, …)` then re-deploy staging; **or**
2. Provide staging **`DATABASE_URL`** so a Bluebird-only marked seeder (modelled on `seed-full-member-profile.ts`, companyId=150002, marker `SEED:12M-2026-09`, openId `seed:12m-…`, loginMethod `seed`) can write + wipe by marker; **or**
3. Temporary Admin/Owner API that creates members with companyId + importBatchId without Clerk accept.

## Safety notes

- Empty import batches 1–3 may remain as draft/cancelled trackers — no member rows attached (commit never succeeded). Safe to leave or cancel via UI/API later.
- No Feature Controls / Setup changes.
- No Refrm writes.
- No standing-seat password material in this file.
- Member A left as at-risk/cancelling anchor (not re-imported).
