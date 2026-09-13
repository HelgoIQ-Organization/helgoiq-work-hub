# Members & CRM — Feel MEASURED

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-13 (Europe/Athens morning)  
**Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`  
**Seat:** Admin 2 `helgoiq-bb-admin-2@agentmail.to` · Tenant `?c=150002` Bluebird · CDP 9234  
**Paths:** `/admin/crm-hub?c=150002`, `/admin/crm?c=150002`, `/admin/member-feedback?c=150002`, `/admin/members?c=150002`, `/admin/crm/lead/14?c=150002`, `/admin/directory?c=150002`

## Scores

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **48%** | **36%** | **40%** | **41%** |

`overall = round((48+36+40)/3) = 41`

Phone (~390×844): **not measured** this pass.

## Plain English

Stronger than Home. CRM Pipeline shows **10 leads** as human cards (avatar, source, email, date) with a loud **+ Add Lead** and working **Search leads…**. Members (`/admin/members`) shows **11 total**, invitations with Copy/Resend, statusful rows, and **+ Add Member**. Lead `/admin/crm/lead/14` is a usable workspace (Convert, timeline, back). Trust still cracks: sidebar **Directory** lands on **This admin page is unavailable** (dead end with duplicate Home CTAs); Overview still says Members **—** while this surface says 11; CRM tab strip clips (**Insight…**); invitations chrome eats the first viewport so the member list feels buried. Known L2 “crm-hub KPI vs empty Insights”: on this tip **AI Performance Intelligence** showed Total/New **10** with a **non-empty** insight list (not empty-list FAIL today) — still ESTIMATED / trust-awkward copy. Better bones than chat/home, not WhatsApp-member-finder yet.

## Strengths

- Pipeline lead cards feel human (avatar + source chip + timestamp); count “10 leads in pipeline” matches visible Trial column
- **+ Add Lead** / **+ Add Member** are high-contrast, not buried on primary hubs
- Lead detail: Convert to Member, Quick Actions, Activity Timeline, back control
- Members invitations: pending + history with Copy link / Resend / Revoke
- Member rows show status (active / paused / cancelling) and home studio
- Search leads input present and accepts input (observe-only)

## Findings

### M-F001 — Sidebar Directory → unavailable page
- **Axis:** frictionless · **Severity:** broken
- **Detail:** Members → **Directory** (and `/admin/directory?c=150002`) shows “This admin page is unavailable” with redundant **Open Home** / **Go to Home**. Link name promises a member directory; it dead-ends.
- **Suggestion:** Point Directory at `/admin/members` (or ship the page); remove pin if route missing.

### M-F002 — Cross-surface member count lie (Overview — vs Members 11)
- **Axis:** obvious · **Severity:** broken
- **Detail:** Same seat/tenant/tip: Overview **Members (aggregated) = —**; Members header **11 total members** / KPI **9** active. You cannot trust the Home number when hunting people.
- **Suggestion:** One source of truth for member counts across Overview and Members; drill from Overview tile here.

### M-F003 — Invitations + KPI stack bury the people list
- **Axis:** joyful · **Severity:** confusing
- **Detail:** First paint of Members is invitations + four KPI cards; All Members / Duplicates / Insights and human rows sit below the fold. List does not “sell conversation” up front — cold priority vs WhatsApp-like people finder.
- **Suggestion:** People list first (avatar + last activity); collapse invitations to a compact banner; KPIs secondary.

### M-F004 — AI Performance Intelligence trust / L2 note
- **Axis:** obvious · **Severity:** confusing
- **Detail:** Live check: tab shows KPIs Total **10** / New **10** / Critical **3** and a populated card (“Zero Class Attendance…”, ESTIMATED). **Empty-list vs KPI FAIL did not reproduce** on this walk. Remaining issue: ESTIMATED critical insights can still feel like lying KPIs relative to studio reality; CRM **Insights** tab is training video, not performance numbers — naming collision.
- **Suggestion:** Keep KPI↔list invariant in tests; rename Insights vs AI Performance; soften ESTIMATED until validated.

### M-F005 — CRM tab strip clips; Funnel click flaky
- **Axis:** frictionless · **Severity:** polish
- **Detail:** Hub tabs overflow (`Insight…` clipped). Programmatic Funnel/Acquisition tab click did not always switch content (stayed on Pipeline).
- **Suggestion:** Scrollable tablist with visible overflow affordance; reliable tab activation.

### M-F006 — Member Feedback thin / loading
- **Axis:** joyful · **Severity:** polish
- **Detail:** `/admin/member-feedback` showed Total **0** / New **0** and “Loading feedback…” — empty without inviting CTA to collect feedback.
- **Suggestion:** Inviting empty state + link to request feedback / forms.

## Suggestions

1. Fix Directory route or retarget to Members (M-F001) — highest friction dead end
2. Align Overview member aggregate with Members counts (M-F002)
3. Promote human member rows above invitations chrome (M-F003)
4. Keep AI Performance KPI↔list contract; clarify Insights naming (M-F004)
5. One-path Add Member from every Members entry (already good on `/admin/members` and CRM Add Lead)

## Evidence

- `screenshots/01-crm-hub.png` + text/signals — Pipeline 10 leads, Add Lead, search
- `screenshots/05-lead-14.png` / `16-lead-14-full.png` — lead workspace
- `screenshots/08-insights.png` — CRM Insights = training walkthrough
- `screenshots/12-ai-perf-intel.png` / `19-ai-perf-retry.png` + text — Performance KPIs + list
- `screenshots/14-members-directory.png` + text — Members 11, invitations, KPIs
- `screenshots/24-directory-unavailable.png` + `.txt` — Directory dead end
- `screenshots/07-search-typed.png` — lead search observe
- Deep notes: `deep-notes.json` · walk: `../walk-notes.json`
