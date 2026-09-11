# ACS-F01 Recheck Results

- Date: 2026-09-11
- Studio: Bluebird Pilates (`c=150002`)
- Tip: `a73ff70`
- `/api/version` releaseSha: `a73ff70b266057f226bb02c5f3112f72a92ad53d` (starts with `a73ff70`)
- Query: `ACS-F01: staff availability / teachers available — Cluster A`
- Verdict: **PASS**

## Q+A evidence

Command Centre returned **“Staff availability teachers”**, stating:

> BB Teacher and helgoiq bb teacher 2 and helgoiq bb teacher 3 appear on staff availability for the selected company.
>
> Answered using staff availability roster.

The response was marked **CALCULATED**, **High confidence**, and sourced from the staff availability roster. The supporting detail states that active `staff_appointment_availability` rows supply the slot count. Teacher 2 is explicitly present, so this is not an empty or wrong-source result.

Screenshot: `evidence/acs-f01-command-centre-qa.png`
API evidence: `evidence/api-version.json`
