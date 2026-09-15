# Fix candidate: Feature Management shows a Refrm-named feature on Bluebird

- **Title:** Hide or scope Refrm Academy — Learning off Bluebird Feature Management
- **Route:** `/admin/feature-management?c=150002`
- **Axis:** obvious / joyful
- **Severity:** High
- **Before screenshot:** `/workspace/helgoiq-overnight-pack-2026-09-15/feel/settings/screenshots/feature-management-refrm.png`
- **What to fix:** Search `Refrm` returns **Refrm Academy — Learning** (`academy.learning`) while the seat is Bluebird `c=150002`. Cross-brand naming breaks tenant trust.
- **Suggested fix:** Filter feature catalogue by tenant/brand; never surface another studio’s product name in Bluebird Feature Management.

# Fix candidate: Command Centre agent queue shows Otto Othertenant on Bluebird

- **Title:** Scope agent work queue to the active company
- **Route:** `/admin/command-centre/agents?c=150002`
- **Axis:** obvious (tenant isolation)
- **Severity:** High
- **Before screenshot:** `/workspace/helgoiq-overnight-pack-2026-09-15/feel/settings/screenshots/command-centre-agents-1313.png`
- **What to fix:** Bluebird Studio support queue lists “Review retention plan for **Otto Othertenant**” — name implies another tenant.
- **Suggested fix:** Bind agent findings to `c=150002` / active company; drop or never enqueue other-tenant members.
