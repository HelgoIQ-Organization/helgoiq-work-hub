# Launch Hub tip move — a263c4ab live (morning merge pack)

**When:** 11 Sep 2026 ~07:10 Europe/London  
**Trigger:** staging CI passed; live `/api/version` left `232659cf`  
**Live tip:** `a263c4ab3e85e24d82f292268a2427907ae7eec4` (was `232659cf05d22e5de920ee547925b37581cfb6d4`)  
**Headline:** **~65%** (overnight Measured held; findings-fix Estimate 87% for the pack; morning board was 52%)

## What newly landed on DigitalOcean
- **#1250** capacity-stack demo seed restricted to Bluebird
- **#1252** booking keeps signed-out bookers on the class after login
- **#1253** Digital Twin overview — cancelling members cannot count as improving
- **#1254** Business Insights — server resolves KPI facts (ignores the browser)
- **#1247** member invites bind on first Clerk sign-in
- **#1258** smoke: authenticate consumed member invitation
- **#1248** CI: run full pnpm build before merge

## What we did *not* invent
Overnight Measured board from tip `232659cf` is **held** until retest on `a263c4ab`:
- Smoke 6/6 PASS (re-smoke pending)
- Cluster A 20/24 (same four fails)
- ISO-29 COMPLETE 26 PASS / 4 FAIL / 2 NOT_RUN
- Ambient evidence (Pulse OK; Dispatch viewer FAIL)
- AI-85 48/5/23/8/1
- Dataset canary FAIL — Missing companyId on `batchImport.upload` (403); 0 members

## Hard rules (unchanged standing)
- **#1240 is LIVE** on `/api/version`, but **Declan has NOT cleared the rollback ban**.
- Never instruct `import.rollbackBatch` / never roll back until Declan clears.
- Comms strand still blocked on five Resend/Agentmail secrets.

## Your Moves (top)
1. Say yes to safe rollback (ban still on) — only if you mean it
2. Add five Resend/Agentmail secrets for #1213
3. Platform Admin: Feature Controls + Event Bus (ask before toggles)
4. Approve or reject Clusters B–F banks
5. Decide: leave BB Smoke Sep8 paused, fix card, or retry after payment fix

No credentials in this drop. Bluebird-only notes.
