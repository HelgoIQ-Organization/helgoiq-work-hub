# Command Centre Pairing / Disagreement Log

Tenant `c=150002`; screenshots are in `evidence/cc/`.

| Paired question | Ambient/UI evidence | Command Centre answer | Status |
|---|---|---|---|
| What is our Studio Pulse score today and why? | Pulse 50/100, moderate confidence; components Revenue 50, Occupancy 40, Churn 50, Referral 10, Team 100; Team positive, Referrals drag; Launch Referral Campaign. | Same score, components, trend, drag and recommendation. | **AGREE** |
| What is the biggest drag on Studio Pulse? | Pulse UI says **Referrals**. | CC says **Biggest drag: referrals**. | **AGREE** |
| What should we do this week to improve Pulse? | Pulse UI recommendation is **Launch Referral Campaign**. | “Observed Pulse is 50. Under the stated assumption it would be 60, a rise of 10.” | **MISMATCH** — CC supplied a hypothetical scenario, not the UI’s recommended action. |
| What would today’s Morning Dispatch say for the studio owner? | Admin was Not yet run today; viewer reached Generating, then failed with “Something went wrong…” and the exact reload/contact-support copy. | CC supplied 2026-09-10 dispatch: “A Quiet Morning, A Strong Foundation”, Studio Health Pulse 50/100, alerts None/0, lesson applied same headline. | **MISMATCH** — CC reported dispatch content while the viewer was unavailable. |
| What at-risk / cancelling members should we watch? | Directory identifies Member A as Cancelling; Twin also labels Cancelling, with churn probability Insufficient data. | “I couldn’t route that request because the member field is missing. Please name the member, or provide their email, phone, card last-four or short member reference.” | **MISMATCH** — generic paired question could not surface the known Member A anchor. |
| What has the Learning Engine learned / any lessons? | What We’ve Learned: 0 active lessons, 0/3 resolved actions, 0/2 positive outcomes; one signal was actioned. | No active lessons; Active lessons 0 (No learning rows found). | **AGREE** on no lessons; **UNCERTAIN** on active-signal/actioned detail because CC did not expose it. |
| Event Bus reachability | Event Bus page is gated: “Platform Admin Access Required”. | No paired CC Event Bus question was run; LE `event_bus` source is indirect only. | **UNCERTAIN / not paired** |

## Full mismatch list

1. **Improve Pulse:** UI gives an actionable referral-campaign recommendation; CC gives only an illustrative +10 scenario.
2. **Morning Dispatch:** UI viewer fails after generation/loading; CC presents a complete 2026-09-10 dispatch summary.
3. **At-risk/cancelling:** UI has a cancelling Member A and a Twin record; CC refuses the generic query because its member field is missing.

No direct directory-vs-Twin cancelling-status mismatch was observed. No settings, OTP, platform-admin, roster mutation, or other blocked-gate escalation was attempted because Declan was unavailable.
