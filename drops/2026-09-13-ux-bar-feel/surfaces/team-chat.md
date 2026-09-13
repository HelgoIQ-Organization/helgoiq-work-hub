# Team chat — Instructor Circle

**Basis:** `measured` · **Confidence:** high · **Scored:** 2026-09-01  
**Path:** `/admin/team-comms-hub`  
**Scores:** joyful **28%** · obvious **32%** · frictionless **18%** · overall **26%**

## Plain English

Measured Sep 1 Instructor Circle QA vs WhatsApp/Slack. Good bones (channel groups, warm reactions, Catch me up idea) but Refrm leak under Bluebird, phone thread unusable, no DMs/@mentions, and full-page splash on every open. Not yet a joyful or frictionless team chat.

## Source report (canonical)

Full QA: `/workspace/helgoiq-chat-qa/report/CHAT-QA-REPORT.md`  
Usability notes: `/workspace/helgoiq-chat-qa/usability-notes.md`  
Findings F001–F009: `/workspace/helgoiq-chat-qa/findings/`

### Executive summary (from CHAT-QA-REPORT)

The team is right: this is not yet WhatsApp/Slack. Three trust-breakers sit above polish.

1. **Critical — chat is not company-scoped (F001).** Bluebird only re-skins the admin shell. Instructor Circle still shows Refrm channels, staff names, polls and files.
2. **Phone thread view is unusable (F009).** At 390×844 the message column is ~2440px tall with overflow hidden — frozen mid-thread.
3. **No DMs and no working @mention.** People search returns a blank panel — private talk stays on WhatsApp.

Also broken: padlocked channel fully writable; Polls tab empty while a live poll sits in-channel; phone channel list clips timestamps/unread.

Good bones: GENERAL / LOCATIONS / ROLES, warm reactions, poll results without voting, in-chat search, Catch me up concept (unlabeled sparkle).

## Strengths

- GENERAL / LOCATIONS / ROLES grouping matches how studios think
- Warm reaction strip; poll results visible without voting
- In-chat search is instant and correctly scoped
- Catch me up concept is delightful — just unlabeled

## Findings (F001–F009)

### F001 — Tenant isolation — Refrm chat under Bluebird
- **Axis:** obvious · **Severity:** broken
- **Detail:** Bluebird shell still shows Refrm channels, staff names, polls and files. Teacher/client ignore ?c= for chat.
- **Suggestion:** Scope channel/message/poll/file queries by company id server-side; reject unauthorized ?c=; fix document title/branding.

### F002 — Who's here / Catch me up hidden
- **Axis:** obvious · **Severity:** confusing
- **Detail:** No avatar stack or member count in header; sparkle icon unlabeled so Catch me up looks like decoration.
- **Suggestion:** Avatar stack + count in header; label Catch me up as a real button.

### F003 — No @mention, no composer emoji, no link previews
- **Axis:** frictionless · **Severity:** confusing
- **Detail:** Typing @ does nothing; emoji only as reactions; Mentions-only notifications are dead.
- **Suggestion:** Add @mention picker, composer emoji, and basic link previews.

### F004 — Locked channel writable; Groups empty
- **Axis:** obvious · **Severity:** broken
- **Detail:** Padlock icon on a channel that still accepts typing; Groups shows skeletons then zero with no create affordance.
- **Suggestion:** Enforce lock or drop the icon; empty Groups state with next action.

### F005 — Polls tab empty while live poll exists
- **Axis:** obvious · **Severity:** broken
- **Detail:** Named Polls home shows No polls yet while a live poll sits in-channel.
- **Suggestion:** Aggregate channel polls into the Polls tab.

### F006 — People search blank; no DMs
- **Axis:** frictionless · **Severity:** confusing
- **Detail:** Search channels or people returns blank for people; no 1:1 path — private talk stays on WhatsApp.
- **Suggestion:** People results + DM / New message path.

### F007 — Unread / presence / Priority unclear
- **Axis:** obvious · **Severity:** confusing
- **Detail:** Priority only undefined; presence has no visible payoff; unread counts disagree across surfaces.
- **Suggestion:** Define Priority; show presence dots; reconcile unread badges.

### F008 — Full-screen splash; filter chips sticky
- **Axis:** frictionless · **Severity:** confusing
- **Detail:** HelgoIQ splash + Loading messages for in-app channel opens; filter chips can both look active.
- **Suggestion:** In-place skeleton; never leave chat shell; reliable chip state.

### F009 — Phone thread unscrolled; list clipped; no studio switcher
- **Axis:** frictionless · **Severity:** broken
- **Detail:** At 390×844 message column ~2440px with overflow hidden — composer off-screen. Timestamps/unread clipped. No company switcher on phone.
- **Suggestion:** min-h-0 + overflow-y:auto on scroller; mobile-first list; studio switcher in phone chrome.

## Suggestions

- Make channel list WhatsApp-like: avatar + last message + bold unread
- Header answers who's here (avatar stack + count)
- Kill full-page splash for in-chat moves — skeleton in place
- Ship DMs and a working @mention picker
- Fix phone thread scroll (min-h-0) before any polish
- Close F001 tenant scope before any write testing
