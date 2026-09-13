# Fix candidate: Inbox desktop rails visibly clip at the viewport

- **Title:** Make Inbox reporting/team rails visibly responsive or scrollable
- **Route:** `/admin/inbox?c=150002`
- **Axis:** obvious / frictionless
- **Severity:** Medium
- **Before screenshot:** `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/marketing/screenshots/inbox.webp`
- **What to fix:** At the captured desktop width, the call-team strip and reporting row run past the right edge: the top-team panel is visibly truncated and the horizontal rail leaves partial cards/content at the viewport edge. This makes it unclear whether content is missing or merely off-canvas.
- **Suggested fix:** Use a responsive grid/wrap at desktop widths, or add a persistent, clearly labeled horizontal-scroll affordance and keep card headers/values fully readable; reserve enough width for the conversation pane and contact context.

# Fix candidate: Schedule field uses a locale-mismatched date hint

- **Title:** Match campaign schedule date format to the app locale
- **Route:** `/admin/campaigns/new?c=150002`
- **Axis:** obvious / frictionless
- **Severity:** Low
- **Before screenshot:** `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/marketing/screenshots/campaign-new.webp`
- **What to fix:** The app document is `en-GB`, while the visible schedule placeholder reads `mm/dd/yyyy`; this creates avoidable ambiguity before scheduling.
- **Suggested fix:** Use a locale-aware date picker/input and show `dd/mm/yyyy` for the current locale, or label the accepted format explicitly.


# Fix candidate: Inbox Reporting shows impossible % Active Members

- **Title:** Fix Inbox Reporting “% Active Members” display
- **Route:** `/admin/inbox?c=150002`
- **Axis:** obvious
- **Severity:** Medium
- **Before screenshot:** `/workspace/helgoiq-afternoon-2026-09-13/feel-measured/marketing/screenshots/inbox.webp`
- **What to fix:** Reporting card shows **1850%** Active Members for Last 30 days — not a believable percentage and undermines trust in the metrics strip.
- **Suggested fix:** Cap/validate percentage math (members active / eligible), or change the metric to a count/ratio with an honest label; never render multi-thousand %.
