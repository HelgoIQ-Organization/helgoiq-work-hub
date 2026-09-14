# Launch Hub tip 40da6535

**When:** Mon 14 Sep 2026 ~08:25 Europe/Athens  
**Tip move:** `af7e6009` → `40da6535`  
**Wake:** PR #1300 — fix(command-centre): route campaign send guidance

## Now on tip
- **#1304** Fix Cluster C North timetable count
- **#1300** fix(command-centre): route campaign send guidance
- **#1268** fix(payments): unblock public QR checkout
- **#1298** fix(smoke): select exact membership product (tip SHA)

## Headline
Estimate **~63% → ~65%** (modest bumps only — Bluebird Measured retests not run on 40da6535).

Strand estimate bumps: command-centre 48→55, smoke 66→72, payments 62→68, findings-fix 91→93.

## Still needed
- Retest the +4 on tip 40da6535
- Smoke six-step step2 — #1298 is on tip now
- Overview/Intel retest for prior pack #1286/#1274/#1279
- #1290 dock fix NEED_DECLAN

Never instruct `import.rollbackBatch`.
