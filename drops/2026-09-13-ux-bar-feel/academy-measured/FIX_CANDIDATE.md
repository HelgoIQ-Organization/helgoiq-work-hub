# Fix candidate: Academy named URLs open the wrong job

- **Title:** Land class-tags, terms, news, invites, and teachers on their named surfaces
- **Route:** `/admin/academy/class-tags?c=150002` (also `/terms`, `/news`, `/invites`, `/teachers`)
- **Axis:** obvious
- **Severity:** High
- **Before screenshot:** `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/academy/academy-class-tags.png`
- **What to fix:** `/class-tags` and `/terms` render LMS settings / LMS roles. `/news` renders Content libraries. `/invites` and `/teachers` render Teacher tools with only a 0 Reflections tile. The URL and nav label promise a different job.
- **Suggested fix:** Route each path to the named list/editor (tags, terms, news items, invite list, teacher roster). If a surface is not built yet, show that named empty state — not a different hub.

# Fix candidate: LMS dock covers lower cards

- **Title:** Keep Academy overview/library cards above the bottom dock
- **Route:** `/admin/academy?c=150002`
- **Axis:** frictionless
- **Severity:** Medium
- **Before screenshot:** `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/academy/academy-overview.png`
- **What to fix:** The fixed Members/Inbox/Timetable dock overlaps the lower metric/empty-state cards on overview and libraries.
- **Suggested fix:** Add bottom padding equal to dock height, or collapse the dock on LMS scroll.
