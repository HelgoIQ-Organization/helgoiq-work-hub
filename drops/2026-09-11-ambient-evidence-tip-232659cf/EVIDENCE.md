# HelgoIQ Ambient Intelligence Evidence

- Tenant: Bluebird Pilates (`c=150002`), Admin2 seat
- Review tip: `232659cf…`
- API version (start and end): `buildToken=232659cf05d22e5de920ee547925b37581cfb6d4`; `releaseSha=232659cf05d22e5de920ee547925b37581cfb6d4`; `commandCentreRuntimeIngress=early-auth-response-finish-v1`
- Capture mode: evidence only; no bank scoring; no Refrm writes, feature-control changes, seed/import/rollback, or settings changes.

## 1. Studio Pulse

Evidence: `evidence/pulse/01-pulse-overview.png`, `02-pulse-why-score.png`

- Studio Pulse: **50/100**, moderate confidence; flat today and this week.
- Biggest positive: Team. Biggest drag: Referrals.
- Recommendation: **Launch Referral Campaign**.
- Explainability modal components: Team 100; Task Completion 85; Revenue 50; Retention 50; Occupancy 40; Recovery 40; Referrals 10.
- Modal data notes include Occupancy fill rate 0%, Recovery utilisation N/A, Referrals new this month 0, Retention net growth 0, Revenue MTD growth N/A, and a limited-data confidence note.
- Empty-studio honesty: Access Operations shows 0 approved attempts, 0 denied attempts and 0 current access-control incidents; Pulse shows occupancy/fill 40/0% rather than inventing a busy studio. Seven-day forecast is Stable.
- No-show movement: **BLOCKED inventory** — no safe roster/no-show candidate was confirmed without risking real operations, so no roster mutation or recompute was performed.

## 2. Morning Dispatch

Evidence: `evidence/dispatch/01-dispatch-admin-before.png`, `02-dispatch-viewer-loading.png`, `03-dispatch-viewer-error-c-param.png`

- Admin page showed **Not yet run today**, scheduled for 00:30 UTC; last successful dispatch was 2026-09-09 for Owner at 10:45 UTC. Generate controls included Studio Owner and Studio Manager.
- Viewer initially showed `Generating your dispatch...` with Owner View selected.
- Viewer then failed with **Something went wrong**. Copy: “We're sorry — an unexpected error occurred. Our team has been notified automatically. Please try reloading the page, and if the problem persists, contact us and quote the reference below.” A reference code was displayed.
- Viewer content therefore remained unavailable; date/role could not be independently verified in the viewer.

## 3. Digital Twin — cancelling Member A

Evidence: `evidence/twin/01-twin-lookup-empty.png`, `02-directory-member-a-cancelling.png`, `03-twin-member-a.png`

- Directory anchor: Member A (`helgoiq-bb-member-a@agentmail.to`) has membership **Bluebird 8**, status **Cancelling**, billing until 30 Sep 2026.
- Twin lookup used member ID `2160663`.
- Twin banner labels the member **Cancelling** (account/member status through Oct 2026 in the displayed banner), so the primary status agrees with the directory.
- Twin signals: `cancellation_behaviour` = **0% late cancellation rate (0 of 15)**, trend **Declining**; `Churn Probability` = **Insufficient data**, trend Stable; `Class Preference` = **Reformer Flow**, trend Stable; `Comms Preference` = **Insufficient data**, trend Stable.
- Disagreement list: no direct directory-vs-Twin cancelling-status disagreement observed. The Twin has insufficient churn/comms data rather than an “improving” label; this is a data-coverage caveat, not a status reversal.

## 4. Learning Engine

Evidence: `evidence/learn/01-learning-before.png`, `02-learning-actioned.png`, `03-what-we-learned.png`

- Active Signals tab showed **20** signals, including Churn Risk signals and a Revenue Opportunity. Churn Risk cards carried `Source: event_bus` and suggested actions such as Contacted at-risk member, Offered retention discount, Scheduled check-in call, Offered membership pause, Something else, and Dismiss.
- One harmless one-tap Record Action was used. The selected Churn Risk signal moved to Actioned; screenshot shows the `actioned` badge.
- What We’ve Learned showed **0 active lessons**, **0/3 resolved actions**, and **0/2 positive outcomes**; no lesson has yet been reinverted/generated. The page explains that lessons require measured outcomes.

## 5. Event Bus

Evidence: `evidence/event-bus/01-event-bus-platform-admin-gate.png`

- Reachability: **BLOCKED by role gate**.
- Verbatim gate: **Platform Admin Access Required** — “This page is restricted to platform administrators and granted operators. If you believe you should have access, contact the platform owner.”
- Declan was unavailable, so no OTP/settings/platform-admin escalation was attempted. Learning Engine `Source: event_bus` is indirect evidence only and is not proof of live Event Bus reachability.

## 6. Command Centre

Evidence: `evidence/cc/01-cc-pulse.png` through `06-cc-learning.png`; detailed matrix in `CC-DISAGREE.md`.

Questions were asked after the ambient captures using the plan’s paired wording. CC returned:

- Pulse: 50/100, components Revenue 50 / Occupancy 40 / Churn 50 / Referral 10 / Team 100; biggest drag referrals; recommendation Launch Referral Campaign.
- Biggest drag: same Pulse summary, biggest drag referrals.
- Improve Pulse: “Observed Pulse is 50. Under the stated assumption it would be 60, a rise of 10.”
- Morning Dispatch: 2026-09-10; headline “A Quiet Morning, A Strong Foundation”; hero metric Studio Health Pulse 50/100; alerts 0; lesson applied “A Quiet Morning, A Strong Foundation”.
- At-risk/cancelling: “I couldn’t route that request because the member field is missing. Please name the member, or provide their email, phone, card last-four or short member reference.”
- Learning Engine: “No active lessons are available in the Learning Engine yet”; Active lessons 0 (No learning rows found); answered using location intelligence summary.

See `CC-DISAGREE.md` for every paired comparison and status.
