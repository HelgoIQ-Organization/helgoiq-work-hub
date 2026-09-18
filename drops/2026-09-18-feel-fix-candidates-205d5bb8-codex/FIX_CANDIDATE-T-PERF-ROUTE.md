# FIX_CANDIDATE — T-PERF-ROUTE Teacher My Performance blank chrome

- **Surface:** Teacher My Performance
- **Routes:** broken `/teacher/my-performance?c=150002` · working `/teacher/performance?c=150002`
- **Tip:** `205d5bb897fa84c76f2af92b2cad16b568f1cca2`
- **Severity:** broken
- **Axis:** obvious / frictionless
- **Seat:** Teacher 3 · Bluebird `c=150002`
- **Env:** https://lobster-app-662c7.ondigitalocean.app

## Repro
1. Sign in as Teacher 3 on tip above (Bluebird only).
2. Open `https://lobster-app-662c7.ondigitalocean.app/teacher/my-performance?c=150002`.
3. Compare with `https://lobster-app-662c7.ondigitalocean.app/teacher/performance?c=150002`.

## Expected
Same honest empty / performance body as `/teacher/performance` (“Not enough data yet”, coaching empty copy, “No class performance data yet”), or a redirect to the canonical route.

## Actual
`/teacher/my-performance` shows only Teacher View chrome + bottom nav (Home / Schedule / My AI / Safety / Chat / More) with no performance body, empty-state copy, or error. Help “Got it!” overlay can sit on the empty shell.

## Before screenshot
`/workspace/helgoiq-full-programme-2026-09-17/feel-lane/remeasure-205d5bb8/teacher/my-performance-blank.png`  
Working contrast: `.../teacher/my-performance.png` (canonical `/teacher/performance`)

## Suggested outcome
- **Problem:** Natural “my-performance” URL looks broken; teacher must know the alternate path.
- **Success criteria:** `/teacher/my-performance` either renders the same content as `/teacher/performance` or 302/replace to it; no blank chrome shell; empty state remains honest when data is thin.
