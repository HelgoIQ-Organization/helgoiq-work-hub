# Bot Commander — auto-post rule

When a HelgoIQ work pack finishes (ambient sweep, AI-85 status, Cluster A score, isolation matrix, dataset progress, Claude handoff, proposal, etc.), **post a drop to this hub**.

## Do

1. Write or copy markdown into the workspace (no credentials).
2. Run:

```bash
node scripts/add-drop.mjs \
  --title="Short clear title" \
  --tags=findings,command-centre \
  --type=finding \
  --file=/workspace/path/to/artefact.md \
  --summary="One-line owner/agent summary" \
  --project=helgoiq-… \
  --tip=<releaseSha if known>
```

3. Commit and push `main` on this repo so Pages refreshes.
4. Optionally comment the drop id / Pages link on platform issue **#1180**.

## Tag / type

Use the vocab in `README.md`. Prefer existing tags; do not invent passwords-as-tags.

## Never

- Copy `README-SEATS.md` or any seat password / invite token / OTP.
- Commit `.env`, Clerk secrets, Bearer tokens, or API keys.
- Paste live Stripe keys or Meta tokens.
- Duplicate huge PII CSVs — write a short **note** that points at the workspace path instead.

## Multi-file packs

Pass `--file` once per call, or copy extra files into the new `drops/…/` folder and append paths in `index.json` (script supports multiple `--file=` flags).

## Id convention

`YYYY-MM-DD-short-slug` (UTC date of the work, Europe/London calendar day when Declan is the audience).


## Refresh mechanism (dashboard)

Chosen:

1. **Primary** — regenerate `dashboard.json` when the **live staging tip** changes (`/api/version`) — **near-real-time**.
2. **Coverage stamps** — `scripts/sync-coverage.mjs` writes `coverage.json` (`lastTestedStamp` vs live tip). Target lag **≤15 minutes** when wired.
3. **Backup** — weekday every **30 minutes** during daytime (Europe/London).

Sources to consult on each rebuild: live `/api/version`, `gh` merged/open PRs, drop `SUMMARY.md` + `index.json`, `MASTER.csv`, Cluster A FINAL, #1180 themes.

```bash
node scripts/refresh-dashboard.mjs   # updates meta dataAsOf + buildStamp + history/latest.json
node scripts/sync-coverage.mjs       # lastTestedStamp on strands/pages; stale vs live tip
node scripts/sync-tracker.mjs        # prefers TRACKER_EXPORT.json; else keeps seed + blocked banner
# Then Bot Commander rewrites strands / progressToday / health / actions honestly
git add dashboard.json coverage.json tracker/items.json history/ assets/ index.html README.md CONTRIBUTING-BOT.md scripts/
git commit -m "…" && git push origin main
```

`refresh-dashboard.mjs --with-coverage` is the clean hook: tip meta first, then coverage stamps. Do **not** invent GitHub Projects cards or API secrets. Tracker live sync needs `read:project` + the findings-agent token rotate (outstanding since 3 Sep — Declan).

### Snapshot history

- After adding or renaming `history/*.json`, rebuild the Progress today picker index:
  `node scripts/build-history-index.mjs` (writes `history/index.json`; skips `latest.json`).
- Keep `history/YYYY-MM-DD-morning.json` (or equivalent) when Declan saw a morning board.
- Always write `history/latest.json` after a rebuild.
- Keep the previous calendar day for compare.

### Honesty rules

- Show `dataAsOf` ISO + `buildStamp` next to readiness — **never look confident when stale**.
- Tag each strand `basis`: `measured` | `estimate`.
- **HARD WARNING:** never recommend rollback; SAFE rollback must land first before dataset import.
- Never commit secrets, seat passwords, Resend/Agentmail values, or Clerk tokens — only secret *names* if Declan asks what to add.
