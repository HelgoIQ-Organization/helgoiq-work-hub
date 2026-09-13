# Claude dispatch — Izaak onboarding forever-live HTML

**Date:** 13 Sep 2026  
**Owner:** Declan / Claude (content) · Bot Commander (hosting already done)  
**Live URL (share with Izaak):** https://onboarding.helgoiq.com  
**Repo:** https://github.com/HelgoIQ-Organization/helgoiq-onboarding  

---

## What is set up (do not redo)

- Cloudflare Pages project **`helgoiq-onboarding`** is connected to GitHub repo **`HelgoIQ-Organization/helgoiq-onboarding`**.
- Production branch: **`main`**.
- Root file: **`index.html`** at the **repo root** (not nested).
- Custom domain **`onboarding.helgoiq.com`** is Active and serves that deploy.
- Every push to **`main`** auto-deploys. No Cloudflare upload. No Bot Commander “replace the file” step unless hosting breaks.

---

## How Claude updates content for Izaak

1. Edit **`index.html`** in `HelgoIQ-Organization/helgoiq-onboarding` on **`main`** (direct commit to `main` is fine for this static page, or PR → merge to `main`).
2. Push. Wait ~30–90 seconds.
3. Hard-refresh https://onboarding.helgoiq.com and confirm the change.
4. Tell Declan the forever URL is updated (same link — Izaak does not get a new URL).

### Rules

- Keep the filename **`index.html`** at repo root. Renaming or nesting breaks the site.
- Do not recreate the Cloudflare project or change DNS for `onboarding.helgoiq.com`.
- Do not put secrets, passwords, invite tokens, or personal credentials in the HTML or README.
- Assets (images/CSS/JS): add them in-repo and reference relative paths; push with the HTML.

### Quick check after a change

```bash
curl -sL https://onboarding.helgoiq.com/ | head -c 200
# expect title: HelgoIQ Onboarding — Izaak (or your updated title)
```

---

## Declan one-liner to Claude

> Edit `index.html` in https://github.com/HelgoIQ-Organization/helgoiq-onboarding on `main` and push — it auto-deploys to https://onboarding.helgoiq.com for Izaak. Same forever URL every time.

---

## If something fails

- Deploy failed in Cloudflare Pages → check the latest deployment log on project `helgoiq-onboarding`.
- Domain 404 but `*.pages.dev` works → custom domain / DNS issue; ask Bot Commander (do not invent DNS).
- Need hosting help → Bot Commander; content-only edits stay with Claude in that repo.
