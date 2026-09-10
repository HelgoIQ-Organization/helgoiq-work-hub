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
