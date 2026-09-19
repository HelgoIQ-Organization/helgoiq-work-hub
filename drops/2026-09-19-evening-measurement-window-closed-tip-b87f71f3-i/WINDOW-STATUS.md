# WINDOW-STATUS — evening measurement banks

- **Written:** 2026-09-19 19:57:19 EEST
- **Tip (live):** `b87f71f3ca13261731b4e6237195d5cee655db06` (#1425)
- **api/version:** `{"buildToken":"b87f71f3ca13261731b4e6237195d5cee655db06","releaseSha":"b87f71f3ca13261731b4e6237195d5cee655db06","commandCentreRuntimeIngress":"early-auth-response-finish-v1"}`
- **Seat:** Admin2 `helgoiq-bb-admin-2@agentmail.to` · Bluebird only `c=150002`
- **Freeze:** open until ~20:05 Europe/Athens — banks finished before close
- **Ready for #1180:** yes (rates below; parent posts GH)

## Bank rates (do not invent PASS)

| Bank | Rate | Notes | Status |
|------|------|-------|--------|
| Cluster A | **8/24** | timeout epidemic | **finished** |
| B–F 30 | **11/30** | resume on CDP=9388 after OOM/browser-closed; 30/30 recorded | **finished** |
| Unseen-30 | **0/30** | themes: `stalled_or_timeout`×30; tip stable; LAST tip updated | **finished** |
| ISO-18 (#1425) | **PASS** | refused `?c=150001` — no other-studio chooser leak | **finished** |
| ISO-29 (#1425) | **PASS** | refused foreign CC `?c=` — no Bluebird option in chooser | **finished** |
| GTM (#1428 CONN-GTM-REFRM) | **PASS** | no `refm.co.uk`/Refrm on Bluebird GTM | **finished** |

## ISO/GTM overall

- **Overall clean:** **yes**
- Isolation lever for Hub 80%: ISO-18 + ISO-29 held on tip `b87f71f3`

## Still-running

- none (A, B–F, unseen, ISO+GTM all closed)

## Artifact paths

- A: `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/PASS.txt`, `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/SUMMARY-A.md`, `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/logs/cluster-a.log`
- B–F: `/workspace/helgoiq-full-programme-2026-09-19/cc/b87f71f3/cluster-bf/PASS.txt`, `SUMMARY-BF.md`, `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/logs/cluster-bf.log`
- Unseen: `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/SUMMARY-UNSEEN.md`, `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/unseen-themes.json`, `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/logs/unseen-30.log`
- LAST tip: `/workspace/helgoiq-command-centre/LAST-TESTED-TIP.txt` (+ `LAST-TESTED-TIP-NOTE.txt`, `LAST-UNSEEN-TIP.txt`)
- ISO+GTM: `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/iso-gtm-window/SUMMARY.md`, `results.json`, `evidence/{ISO-18,ISO-29,GTM}/`
- This file: `/workspace/helgoiq-command-centre/results/b87f71f3ca13261731b4e6237195d5cee655db06/WINDOW-STATUS.md`
- Progress: `/workspace/helgoiq-command-centre/progress.txt`

## Tip moves

- none mid-run after banks claimed tip `b87f71f3` (verified repeatedly via `/api/version`)

## Ops notes

- No `import.rollbackBatch` used
- No new Chrome spawned after OOM cull (reused CDP 9388)
- PA Refrm REFRM_MISSING not blocking (per steering)
