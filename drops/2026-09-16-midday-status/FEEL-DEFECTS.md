# Cursor handoff — numbered UX defects

All observations are from Admin2, Bluebird TEST DATA `c=150002`, live tip `aee3b690b2f895393adf2b636dfc0c202d5d43fc`. No writes were made.

1. **Surface: Settings / cross-surface navigation**
   - **What user sees:** Setup Hub actions navigate to URLs such as `/admin/setup` and `/admin/feature-management` without `c=150002`; Safe Studio “Review compliance” / “Open records” links do the same.
   - **Expected:** Every admin link preserves the current company context and selected location.
   - **Tip:** Fix the shared admin route/link builder to merge the active `c` (and location when applicable) into every internal href; add a navigation regression test.

2. **Surface: Finance / invoicing**
   - **What user sees:** `/admin/invoicing?c=150002` resolves to Finance & Payments but the visible work area is `Run Payroll` with `Approve Payrun` and payroll tabs.
   - **Expected:** An invoicing URL opens invoicing content with Invoicing active; payroll chrome is absent unless payroll was requested.
   - **Tip:** Make the invoicing alias set the finance tab and child route explicitly, rather than falling through to the default payroll tab.

3. **Surface: Settings / Data Migration, phone**
   - **What user sees:** At ~390px the six-step workflow strip collides into `Review ApproveImport PreviewActivate`.
   - **Expected:** Each step remains separated, readable, and operable on phone.
   - **Tip:** Add a responsive vertical/scrollable stepper, minimum step width, and accessible labels; test at 390×844.

4. **Surface: Timetable, phone**
   - **What user sees:** The weekly day controls clip after Thu and rely on a faint horizontal scrollbar.
   - **Expected:** The full week is discoverable without guessing that the row scrolls.
   - **Tip:** Use a clear scroll container with gradient/chevron affordance or wrap the day controls; keep the selected day visible.

5. **Surface: Command Centre**
   - **What user sees:** The landing page contains a red `5` failure card stating investigations could not complete and “please retry once,” but no item-level reason or obvious retry action.
   - **Expected:** Failures explain what failed and provide a direct, safe retry/recovery action.
   - **Tip:** Render failed investigations with status, error summary, retry button, and link to the governed queue; keep the empty composer state independent.

6. **Surface: Command Centre agents, phone**
   - **What user sees:** The queue filter row shows `All · 5`, `Approvals · 0`, `Agent work · 5`, then a truncated next tab.
   - **Expected:** Filters are fully readable and clearly scrollable/responsive.
   - **Tip:** Replace the clipped inline row with a responsive segmented control or add explicit horizontal-scroll affordance and focus handling.

7. **Surface: Settings / Feature Management isolation**
   - **What user sees:** Feature search/list still contains **Refrm Academy — Learning** for Bluebird.
   - **Expected:** Bluebird’s feature catalogue contains only Bluebird features, or clearly labels an intentional shared feature.
   - **Tip:** Remove the Refrm row from Bluebird seed/catalogue data and add a tenant-isolation assertion for Feature Management.

8. **Surface: Safe Studio overview**
   - **What user sees:** The all-locations overview has useful “Review compliance” and “Open records” actions, but their hrefs drop the Bluebird query context.
   - **Expected:** Drilling into a location keeps the company and selected location in scope.
   - **Tip:** Pass the current tenant/location through the Safe Studio card link helper; cover both permitted-location cards in a route test.
