# HelgoIQ UNTESTED surfaces — Declan priority ruling

**Built:** 2026-09-11 ~07:35 Europe/London · **list-only** (no surfaces tested this pass)  
**Tip:** `a263c4ab3e85e24d82f292268a2427907ae7eec4`  
**407 list:** `/workspace/helgoiq-iso-qa/_routes_from_bundle.txt` → **407** (409 lines minus `/404` and `/:unmatched*`)

## Counts

| | n |
|---|---:|
| Bundle 407-list | 407 |
| Prior-tested (any real verdict stamp) | 391 |
| **UNTESTED** | **16** |
| P0 week-one owner/member | 5 |
| P1 admin weekly | 11 |
| P2 rare/platform | 0 |

### Why the UNTESTED set is small

Full-census `INVENTORY.md` still shows **263 × UNTESTED**, but that status column is **stale**. Every one of those 263 inventory #s later has a **PASS/FAIL/PARTIAL/BLOCKED** (or isolation) verdict in `RESULTS-MATRIX.md`, `results/*.md`, and/or `*-census-report*.md` (programme tracker: done 263/263). Overnight smoke, AI-85, ISO-29, ambient, and Command Centre Cluster A add further stamps.

What remains UNTESTED on the **407 bundle denominator** is therefore mostly:

1. **Auth / help shells** not in the 402 census (`/sign-in`, `/sign-up`, `/sign-out`, `/help`, `/guides`)
2. **Dynamic / wildcard** bundle siblings (`:id`, `/*`, `:rest*`) with no exact-path stamp
3. **Forms + QR** — forced UNTESTED this week even if an older MKT stamp exists

## Standing rules

- Forms (`/admin/forms…`) and QR (`/admin/qr-generator…`) → **never tested this week** (forced).
- MATRIX rows are UNTESTED only; `ever_tested=no` on every row.
- Priority lens: **week-one studio owner/member** (P0) → admin weekly (P1) → rare/platform (P2).
- No live navigation in this pass.

## Top 15 week-one (P0 first, then P1)

1. `/guides` — Guides (member) · P0
2. `/help` — Help (member) · P0
3. `/sign-in` — Sign In (member) · P0
4. `/sign-out` — Sign Out (member) · P0
5. `/sign-up` — Sign Up (member) · P0
6. `/admin/academy/courses/:playbookId` — Courses (owner) · P1
7. `/admin/academy/courses/:playbookId/edit` — Edit (owner) · P1
8. `/admin/academy/quizzes/:quizId` — Quizzes (owner) · P1
9. `/admin/forms` — Forms (owner) · P1
10. `/admin/instructor-observations/:observationId` — Instructor Observations (owner) · P1
11. `/admin/qr-generator` — Qr Generator (owner) · P1
12. `/admin/qr-generator/new` — New (owner) · P1
13. `/admin/retreats/*` — Retreats (owner) · P1
14. `/sign-in/:rest*` — Sign In (member) · P1
15. `/sign-up/:rest*` — Sign Up (member) · P1

## P0 — week-one studio owner/member

| Priority | Route | Title | Audience | Notes |
|---|---|---|---|---|
| P0 | `/guides` | Guides | member | domain=Member app |
| P0 | `/help` | Help | member | domain=Member app |
| P0 | `/sign-in` | Sign In | member | domain=Member app |
| P0 | `/sign-out` | Sign Out | member | domain=Member app |
| P0 | `/sign-up` | Sign Up | member | domain=Member app |

## P1 — admin weekly

| Priority | Route | Title | Audience | Notes |
|---|---|---|---|---|
| P1 | `/admin/academy/courses/:playbookId` | Courses | owner | dynamic/wildcard bundle route — no exact-path stamp |
| P1 | `/admin/academy/courses/:playbookId/edit` | Edit | owner | dynamic/wildcard bundle route — no exact-path stamp |
| P1 | `/admin/academy/quizzes/:quizId` | Quizzes | owner | dynamic/wildcard bundle route — no exact-path stamp |
| P1 | `/admin/forms` | Forms | owner | Forms/QR explicitly NEVER tested this week (override any older stamp); domain=Website Builder & Channels |
| P1 | `/admin/instructor-observations/:observationId` | Instructor Observations | owner | dynamic/wildcard bundle route — no exact-path stamp |
| P1 | `/admin/qr-generator` | Qr Generator | owner | Forms/QR explicitly NEVER tested this week (override any older stamp); domain=Website Builder & Channels |
| P1 | `/admin/qr-generator/new` | New | owner | Forms/QR explicitly NEVER tested this week (override any older stamp); domain=Website Builder & Channels |
| P1 | `/admin/retreats/*` | Retreats | owner | dynamic/wildcard bundle route — no exact-path stamp |
| P1 | `/sign-in/:rest*` | Sign In | member | dynamic/wildcard bundle route — no exact-path stamp |
| P1 | `/sign-up/:rest*` | Sign Up | member | dynamic/wildcard bundle route — no exact-path stamp |
| P1 | `/teacher/class/:id` | Class | teacher | dynamic/wildcard bundle route — no exact-path stamp |

## P2 — rare / platform

_None remaining — platform admin routes were covered in full-census longtail reports._

## Files

- `UNTESTED.md` (this file)
- `MATRIX.csv`
- `SOURCES.md`
