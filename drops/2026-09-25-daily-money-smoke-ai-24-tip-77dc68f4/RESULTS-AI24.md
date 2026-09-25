# AI-24 admin score — 2026-09-25

**Tenant:** Bluebird `c=150002`  
**Tip (before=after):** `77dc68f47e98aed2d0890efe51bed3dd1909f036` (#1615)  
**Tip-preflight:** PASS (no drift)

## Rollup
- PASS: 19
- FAIL: 1
- BLOCKED: 1
- SKIP: 3
- **Rate: 79%** (PASS / 24)

## Notable
- **AI-014 Command Centre Agents — FAIL:** Otto Othertenant visible in Bluebird Agents queue (wrong-tenant data). Evidence: `ai24/evidence/AI-014.png`, `AI-014-detail.png`
- **AI-015 Command Centre Tasks — BLOCKED:** reachable but empty/data-gated
- **AI-071 / AI-072 / AI-074 — SKIP:** no route on this tip

## Table
| ID | Name | Verdict | Reason |
|---|---|---|---|
| AI-007 | AI Governance Centre | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-011 | Customer Voice Synthesis | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-014 | Command Centre Agents | **FAIL** | Otto Othertenant visible in Bluebird Agents queue (wrong-tenant data) |
| AI-015 | Command Centre Tasks | **BLOCKED** | Reachable but empty/data-gated/honest insufficient |
| AI-019 | Morning Dispatch | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-022 | What We've Learned | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-026 | Intelligence Centre | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-027 | Intelligence Impact | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-028 | Decision Engine | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-030 | Manager Intelligence | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-031 | My Actions | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-032 | Recommendation Tracker | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-033 | Action Effectiveness | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-039 | Studio Intelligence | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-040 | Org Intelligence | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-041 | Workforce Intelligence | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-044 | Monthly Intelligence Review | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-046 | Daily Focus | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-051 | AI Audience Intelligence | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-055 | Communications Hub | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
| AI-071 | AI Class Recommender | **SKIP** | no route / page unavailable as prior |
| AI-072 | AI Progress Reports | **SKIP** | no route / page unavailable as prior |
| AI-074 | Pre-Class Briefings | **SKIP** | no route / page unavailable as prior |
| AI-076 | AI Recovery Orchestrator | **PASS** | Loads with Bluebird-scoped content; no wrong-tenant markers |
