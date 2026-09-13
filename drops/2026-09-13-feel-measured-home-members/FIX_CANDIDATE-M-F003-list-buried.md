# FIX_CANDIDATE — M-F003 People list buried under invitations + KPIs

- **Surface:** Members `/admin/members`
- **Tip:** `6486be87a68821e383d36d5246f9da08a802ee59`
- **Severity:** confusing
- **Axis:** joyful
- **Seat:** Admin 2 · Bluebird

## Repro
1. Open `/admin/members?c=150002` at desktop ~1440×900.
2. Without scrolling, note what dominates first paint.

## Expected
Human rows (avatar / name / last activity / status) sell “who’s here” immediately — WhatsApp/Slack people vibe.

## Actual
First viewport dominated by Member invitations card + KPI row; All Members table and Insights tabs require scroll. Feels like admin chrome, not a people list.

## Before screenshot
`/workspace/helgoiq-afternoon-2026-09-13/feel-measured/members-crm/screenshots/14-members-directory.png`  
(scroll attempt: `21-members-insights-tab.png`)

## Suggested outcome
- **Problem:** List joy and find-a-member friction — people are below the fold.
- **Success criteria:** Default first paint shows ≥5 member rows + search; invitations condensed to one-line banner (“2 pending”) expandable; KPIs collapse or sit beside list.
