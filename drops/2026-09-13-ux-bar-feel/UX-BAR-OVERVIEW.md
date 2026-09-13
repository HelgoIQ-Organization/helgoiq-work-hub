# Joyful · Obvious · Frictionless — UX Feel bar

**Updated:** 2026-09-13T05:10:17Z · **Tip at board:** `6486be87a688…`  
**Bar:** joyful / obvious / frictionless vs WhatsApp & Slack

## How to read this board

Three axes, each 0–100 against a WhatsApp / Slack bar — not against “does the page load”.

| Axis | Meaning |
|---|---|
| **Joyful** | Warm, human, celebrates progress; list sells conversation not filenames; empty states inviting (0–100 vs WhatsApp/Slack). |
| **Obvious** | Know where you are, who's here, what to do next; labels not mystery icons; links land where names promise — no misroutes (0–100). |
| **Frictionless** | No full-page splash for in-app moves; phone works; one path to common actions; no dead ends (0–100). |
| **Overall** | round((joyful + obvious + frictionless) / 3) |

### Honesty labels (`basis`)

- **`measured`** — only **Team chat** (Instructor Circle), from `/workspace/helgoiq-chat-qa/` Sep 1 report + usability notes.
- **`provisional_from_evidence`** — derived from Coverage L2 fails/misroutes, finance KPI review, known P0 defects. Plain English on each surface card.
- Prefer a low-confidence provisional over blank if L2 touched the hub.

### Headline (equal weight across scored surfaces)

| Joyful | Obvious | Frictionless | Overall |
|---:|---:|---:|---:|
| **39%** | **36%** | **39%** | **38%** |

Equal-weight average across all scored surfaces (measured + provisional). Not launch readiness %.

This is **not** the launch readiness % on the Dashboard tab.

## Surfaces

| Surface | Basis | Joyful | Obvious | Frictionless | Overall |
|---|---|---:|---:|---:|---:|
| [Team chat](surfaces/team-chat.md) | `measured` | 28 | 32 | 18 | **26** |
| [Admin Home / overview](surfaces/home.md) | `provisional_from_evidence` | 35 | 30 | 45 | **37** |
| [Members & CRM](surfaces/members-crm.md) | `provisional_from_evidence` | 40 | 38 | 42 | **40** |
| [Timetable & bookings](surfaces/timetable.md) | `provisional_from_evidence` | 45 | 48 | 42 | **45** |
| [Finance / payments UI](surfaces/finance.md) | `provisional_from_evidence` | 32 | 28 | 35 | **32** |
| [Staff hub](surfaces/staff.md) | `provisional_from_evidence` | 30 | 25 | 35 | **30** |
| [Marketing / campaigns](surfaces/marketing.md) | `provisional_from_evidence` | 48 | 50 | 45 | **48** |
| [Website / CMS](surfaces/website.md) | `provisional_from_evidence` | 52 | 55 | 50 | **52** |
| [Academy / LMS](surfaces/academy.md) | `provisional_from_evidence` | 35 | 18 | 30 | **28** |
| [Safe Studio](surfaces/safe-studio.md) | `provisional_from_evidence` | 40 | 35 | 42 | **39** |
| [Settings / setup / feature mgmt](surfaces/settings.md) | `provisional_from_evidence` | 38 | 28 | 40 | **35** |
| [Intelligence & reports](surfaces/intelligence.md) | `measured` | 44 | 47 | 27 | **39** |
| [Forms / QR / waivers](surfaces/forms.md) | `provisional_from_evidence` | 42 | 38 | 35 | **38** |
| [Studio Pulse / Morning Dispatch / Twin](surfaces/ambient.md) | `provisional_from_evidence` | 55 | 58 | 52 | **55** |
| [Command Centre chat UX](surfaces/command-centre.md) | `provisional_from_evidence` | 35 | 28 | 40 | **34** |

## Work Hub UI

Open the **Feel** tab on the Launch Hub (`#feel`). Click a surface card for the detail panel. Deep link: `#feel/<id>`.

Machine JSON: [`ux-bar.json`](../../ux-bar.json) at repo root.
