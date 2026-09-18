# Bluebird Command Centre rebank — tip `205d5bb897fa84c76f2af92b2cad16b568f1cca2`

- API `/api/version` confirmed live: `releaseSha` / `buildToken` = `205d5bb897fa84c76f2af92b2cad16b568f1cca2` (prefix `205d5bb8`). Tip did not move during the bank.
- Company scope: Bluebird only (`c=150002`); chrome title **Bluebird Pilates — TEST DATA (fabricated)**. No Refrm writes, no `import.rollbackBatch`, no Seed Demo execution.
- Seats (email only): Admin **helgoiq-bb-admin-2@agentmail.to** (Clusters A admin slots + B–F); Teacher **helgoiq-bb-teacher-2@agentmail.to** (MGR-10, ACS-X01). No Declan +bbteacher Gmail.
- Cluster A: **24/24 PASS**; fails: none.
  - TAG-X01: live answer was Meta consent-aware refuse; harness false-positive on “Evidence unavailable” banner → `manual_override` to refused (same pattern as tip `0507113f`). Measured refuse text retained in `cluster-a/answers.json` / `FINAL-A.json`.
  - Teacher refuse PASS for MGR-10 and ACS-X01.
- Cluster B–F: **23/30 PASS**; fails: **B-HOW-01, D-RI-01, D-CASH-01, F-ISO-01, F-SEED-01, F-INJ-01, F-HOW-01**.
  - Soft-recover: **F-SEED-01** re-asked once after initial stall; still `stall`/`couldnt` — kept stall taxonomy (did not invent PASS). Answer body shows honest empty-state narration under STALL prefix but scorer correctly treats STALL as FAIL.
  - Notable vs tip `0507113f` (22/30): **E-FAC-01** and **E-FU-01** now PASS (shared-brand refuse LIVE); **C-XAGR-01** PASS. New FAIL **D-RI-01** (no_contamination_flag). B-HOW / D-CASH / F-ISO / F-INJ / F-HOW remain FAIL.
- Artifacts: `FINAL-A.json`, `FINAL-BF.json`, `cluster-a/` (answers, evidence, matrix, logs), `cluster-bf/` (answers, evidence, cross-surface, matrix, logs), `api-version.json`.
