# Fix candidate: Staff profile heading shows Unknown

- **Title:** Show the roster name on staff profile
- **Route:** `/admin/staff/2160660?c=150002`
- **Axis:** joyful / obvious
- **Severity:** High
- **Before screenshot:** `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/staff/staff-profile.png`
- **What to fix:** Known Bluebird instructor `helgoiq-bb-teacher-2@agentmail.to` renders heading **Unknown**.
- **Suggested fix:** Resolve display name from the staff record / email local-part; never leave Unknown when email and role are present.

# Fix candidate: Staff profile tabs clip to “Ob”

- **Title:** Make staff profile tabs fully readable
- **Route:** `/admin/staff/2160660?c=150002`
- **Axis:** frictionless
- **Severity:** Medium
- **Before screenshot:** `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/staff/staff-profile.png`
- **What to fix:** The horizontal tab row is cut mid-label (“Ob”). Remaining tabs are off-canvas with no obvious scroll control.
- **Suggested fix:** Wrap tabs, or a visible overflow scroll with all labels intact.

# Fix candidate: Rota week grid sits under the bottom dock

- **Title:** Lift Rota Builder above the dock
- **Route:** `/admin/staff-hub?tab=rota&c=150002`
- **Axis:** frictionless
- **Severity:** Medium
- **Before screenshot:** `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/staff/staff-rota.png`
- **What to fix:** The fixed bottom dock covers the lower week grid. Add Shift is visible; the calendar body is cramped.
- **Suggested fix:** Pad the rota canvas above the dock, or hide the dock on Rota Builder.
