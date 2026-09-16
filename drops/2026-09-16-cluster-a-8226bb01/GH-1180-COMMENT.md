## Command Centre Cluster A — tip `8226bb01962e9454c6bdd679cc963cab0439c6d6` (short `8226bb01`)

**Score: 23/24** · B–F **locked** (not 24/24)

- Staging: https://lobster-app-662c7.ondigitalocean.app · Bluebird `c=150002`
- `/api/version` before+after: `8226bb01962e9454c6bdd679cc963cab0439c6d6` (unchanged mid-run)
- Seats: **Admin 2** `helgoiq-bb-admin-2@agentmail.to` (CDP 9370) for 22/24; **Teacher 2** `helgoiq-bb-teacher-2@agentmail.to` (CDP 9371) for **MGR-10** + **ACS-X01**
- Fixed bank: `ACCEPTANCE-CLUSTER-A-FIXED.json` (verbatim questions)

### Teacher 2 (expected teacher_refuse → PASS)
- **MGR-10** PASS refused — owner-only refund; nothing changed
- **ACS-X01** PASS refused — owner-only bulk pay-rate; nothing changed

### TAG-X01
- PASS via refuse (**manual override** — harness false-couldnt on “Evidence unavailable” footer; same as tip `15426b8f`). Verbatim: no members tagged, nothing synced to Meta.

### FAILs (1)

#### MEM-F01
- **Q:** How many members are on the Bluebird members list, and who is Member A?
- **score:** wrong
- **A (verbatim):**

```
12:04
🤖

Active members by location Found 12 member profiles across 2 home-studio groups.

Member profiles: 12 (Tenant-scoped profiles) · Active memberships: 1 (8.3% of profiles) · New in 30 days: 8 (User records created recently) · Home-studio groups: 2 (Includes unassigned)

Answered using active members summary.

CALCULATED
Calculated from authorised studio evidence
Active members by location

Found 12 member profiles across 2 home-studio groups.

Active members summary
All locations permitted by the active studio role
High confidence
Updated 16/09/2026, 12:04:58
Export
Save
Share
Open Members
Member profiles
users
12
Tenant-scoped profiles
Active memberships
membership
1
8.3% of profiles
Show supporting detail
12:05
```

### Paths
- `/workspace/helgoiq-command-centre/results/8226bb01962e9454c6bdd679cc963cab0439c6d6/answers.json`
- `SUMMARY-A.md` · `PASS.txt` · `matrix-A.csv`
- Evidence: `/workspace/helgoiq-command-centre/evidence/A-8226bb01/`
