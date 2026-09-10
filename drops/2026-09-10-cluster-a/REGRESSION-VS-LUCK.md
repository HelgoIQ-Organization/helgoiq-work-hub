# Regression vs luck — ba88839d four fails

Scope: **MEM-X01, ACS-F01, TAG-C01, TAG-A01** only. Compare live answers on `ba88839d7121bfc00adcaaec358e92f40fa3fa0f` (`FINAL.json` FAIL) to older tips under `results/`.

Method: same `answer_verbatim` shape ⇒ **lucky prior pass** (lenient auto-score). Different better answer historically ⇒ **behavioral regression**. Recorded `correct` without GT-quality answer is treated as luck, not a real unlock.

---

## MEM-X01 — Open Member A; prepare Central→North transfer plan; do not submit

- **ba88839d FAIL reason:** Member search only (“Found Member A… Bluebird Central”); no transfer plan, no action_confirm draft (OPEN-03 / RI historic-payment contract).
- **Same answer shape on high-score tips:** `ae2ead82` (22/24), `99617d70` (21/24), `d4da6001` (20/24), `b5b451e4`, `9893d7b7`, … all returned member search; matrices marked **`correct`** with notes `plan only` despite no plan text.
- **Alternate fail mode:** `8fd389a`, `c0e44262`, `a40c9e68` — “can’t run this check separately for Central and North” / evidence unavailable (still no plan).
- **Ever a true GT PASS?** **No.** No tip’s verbatim shows a Central→North transfer plan + confirm gate. Prior `correct` = **lucky / lenient scoring**.
- **Conclusion:** **LUCKY PRIOR PASS**, not a new product regression vs recent tips. Stricter FINAL judgement on ba88839d correctly fails the same behavior.

## ACS-F01 — Which teachers appear on Bluebird staff availability?

- **ba88839d FAIL reason:** `Teacher 2160660 and Teacher 2160664 and BB TeacherBB Teacher and BB TeacherBB Teacher` — opaque IDs, duplicated label; GT wants **BB Teacher + helgoiq bb teacher 2 only**.
- **Identical verbatim on tips scored correct:** `ae2ead82`, `99617d70`, `d4da6001`, `b5b451e4`, `9893d7b7`, `fbf3abd5` (unscored answers same text).
- **Older wrong/partial:** location-teachers path with `null — 0 classes` (`01ff17ab`, `1226f3d2`, `8fd389a`, `d325dce2`, …).
- **Ever a true GT PASS?** **No** tip names `helgoiq bb teacher 2` / Teacher 2 clearly with BB Teacher only. Recorded `correct` = **lucky / lenient** (runner historically accepted “BB Teacher” presence as partial/correct without Teacher 2 name).
- **Conclusion:** **LUCKY PRIOR PASS**. Same roster bug on ba88839d as on 22/24 tip; not a new tip regression.

## TAG-C01 — Cohort Top Tier Bluebird 8 vs marketing VIP claim

- **ba88839d FAIL reason:** `query_tag_segment_claim_truth failed (cohort_tag_not_found): no tag named “Top Tier Bluebird 8”` — no FC-012 Bluebird 8 (100%) size 2 answer.
- **Chronic across tips:** member-field-missing routing (`ae2ead82`, `d4da6001`, `b5b451e4`, `9893d7b7`), stall/fault (`01ff17ab`, `1226f3d2`, `229372f0`), or same `cohort_tag_not_found` (`99617d70`, `fbf3abd5`).
- **Recorded correct despite broken answers:** `99617d70` (fault + cohort_tag_not_found still `correct`), `8fd389a` (tool-parameter error still `correct`) — clear **mis-scores**.
- **Ever a true GT PASS?** **No** disk evidence of size-2 / Bluebird 8 100% cohort truth. Prior `correct` = **luck/mis-score**.
- **Conclusion:** **LUCKY PRIOR PASS / chronic gap**, not a new regression from a real pass. ba88839d FAIL is consistent with product tool gap.

## TAG-A01 — Propose a Central-active segment definition

- **ba88839d FAIL reason:** Returned member **tag catalog** (7 tags + CENSUS MKT segments); did not propose Home Studio Central–active segment definition.
- **Lucky recent “correct” with same catalog answer:** `ae2ead82`, `99617d70`, `d4da6001`, `b5b451e4` — catalog text scored `correct`.
- **Earlier genuine proposal-quality answers (recorded correct):**
  - `01ff17ab8e3ede299875755e6f00194b68c0726e` — segment definition (Central Studio, attendance 30d)
  - `1226f3d2e4ba03ff10cb5b9a172b60bcdd031bda` — Central-active definition + matching members
  - `229372f04965c6ec5670f1d1173296f2cc921218` — “I’ve created a segment definition for Central-active…”
  - `c0e44262911be95a4022396199e64a4cec8ad1c9` — explicit Central-active cohort definition (0 matches)
- **Conclusion (split):** vs **recent high-score tips** → **LUCKY PRIOR PASS** (same catalog failure previously marked correct). vs **early tips** → **behavioral REGRESSION** (stopped proposing Central-active; falls back to tag catalog). For re-score narrative on ba88839d re-run: treat as **not a brand-new fail** relative to ae2ead82/99617d70 luck, but **do not credit** those tips as real unlocks.

---

## Roll-up

| q_id | ba88839d | vs recent “PASS” tips (ae2ead82 / 99617d70 / d4da6001) | Ever true GT PASS? |
|---|---|---|---|
| MEM-X01 | FAIL | Same search-only answer → **lucky prior** | **No** |
| ACS-F01 | FAIL | Same opaque roster → **lucky prior** | **No** |
| TAG-C01 | FAIL | Same tool/routing miss → **lucky/chronic** | **No** |
| TAG-A01 | FAIL | Same catalog as recent “correct” → **lucky prior**; better answers on early tips → **soft regression** | **Yes (behavioral)** on `01ff17ab…`, `1226f3d2…`, `229372f0…`, `c0e44262…` |

**Headline for re-score:** If ba88839d re-run still fails these four with the same verbatim shapes, they are **not new regressions vs lucky prior passes** on the 20–22/24 tips; TAG-A01 alone also shows **quality regression vs early September tips**.
