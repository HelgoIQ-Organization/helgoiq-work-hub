# Staff hub — Coverage L2 summary

- Stamp: `6486be87a68821e383d36d5246f9da08a802ee59`
- Seat: Admin 2 · Bluebird `c=150002`
- Routes: **27** · **L2_PASS 0 · L2_PARTIAL 16 · L2_FAIL 11 · BLOCKED 0**
- Results: `results/census-longtail-l2.jsonl` (staff rows only so far)
- Evidence: `evidence/census-longtail-l2/`
- Tenant: Bluebird TEST DATA only; no Refrm; no invite/role/rota/payroll writes

## Unique defects (do not file aliases separately)

1. **Staff onboarding tiles do not match underlying data** — `/admin/staff-hub` Team  
   Review expired invitees (3) opens Invitations History (11), not a filtered expired list. Fix incomplete setups (6) opens a modal with 0 records. Invitations tab itself shows 0 pending / 11 historical (1 expired visible).  
   Aliases inheriting FAIL: `/admin/team`, `/admin/staff`, `/admin/staff-team-report`, `/admin/team-legacy`.

2. **Rota Reporting KPI cards do not drill** — `/admin/staff-hub?tab=rota` + `/admin/rota-reporting`  
   All 7 cards clicked (0h / £0 / 0 overtime / 0 uncovered / 0 avg / Holiday Risk 4/4 / 0% utilisation). None open underlying rows. Holiday Risk 4/4 with 0 rostered is unexplained.  
   Aliases: `/admin/rota-reporting-legacy`.

3. **Staff profile display name Unknown** — `/admin/staff/2160660`  
   Roster shows helgoiq-bb-teacher-2 / `helgoiq-bb-teacher-2@agentmail.to`; profile heading is Unknown (same email).

4. **Staff Employment list empty vs 14 hub staff** — `/admin/staff-employment`  
   Left "Staff Members" picker blank; hub Team shows 14 of 14.

5. **Instructor AI Agents conversation counts disagree** — `/admin/instructor-ai-agents`  
   Header 536 supported conversations vs Aster card 4940 conversations. Tiles also non-drillable.

## Notes

- `/admin/staff/substitutions` **loads** Cover Requests (L1 PATH DEFECT gone). Total 1 / Accepted 1 matches one Reformer Flow row. Filters not fully exercised → PARTIAL.
- Most PARTIALs are write-guarded (invite send, role edits, rota publish, Generate Invoices, Create Poll/Channel, Add holiday).
- Team Calendar/Chat/Polls canonicalize to `/admin/team-comms-hub` (Team Communications), not Staff hub.
