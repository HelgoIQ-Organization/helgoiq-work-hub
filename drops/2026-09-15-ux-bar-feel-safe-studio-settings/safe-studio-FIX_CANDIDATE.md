# Fix candidate: Safe Studio overview tiles do not open the named record

- **Title:** Drill Open faults / Open incidents from overview into Operations
- **Route:** `/admin/safe-studio?c=150002`
- **Axis:** obvious / frictionless
- **Severity:** Medium
- **Before screenshot:** `/workspace/helgoiq-overnight-pack-2026-09-15/feel/safe-studio/screenshots/safe-studio-overview.png`
- **What to fix:** Overview shows Open faults **1** / Open incidents **1**, but clicking did not open the named Operations row. Records only appear after choosing a location on Faults & incidents.
- **Suggested fix:** Tile click selects the location that owns the open item and opens that Faults/Incidents row (or a modal with the same record).
