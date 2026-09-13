# FIX_CANDIDATE — Website Feel (clear visual offs)

**Tip:** `6486be87a688…` · **Seat:** Admin 2 · Bluebird `c=150002`  
**Rule:** No Platform edits from this bot. Before shots only. Drafts OK; no publish / Feature Control.

## Candidates (visual / copy offs a designer can fix without product debate)

### 1. Phone Website Hub — tab row clips to lone “I” (W-F002)
- **Severity:** broken (visual)
- **Where:** `/admin/website-hub` @ ~390×844, horizontal tabs under “Website”
- **Before:** `fix-candidates/before-phone-tabs-clip.png` (from `screenshots/10-website-hub-phone.png`)
- **Off:** After Pages, only the letter **I** remains — looks like a broken mystery control
- **Proposed fix:** Overflow “More”, horizontal scroll with peek of next label, or wrap — never orphan one glyph

### 2. Phone Blog Hub — “New Pos” CTA clip (W-F003)
- **Severity:** confusing (visual)
- **Where:** `/admin/blog-hub` phone
- **Before:** `fix-candidates/before-blog-new-pos-clip.png`
- **Off:** Primary New Post button truncates mid-word
- **Proposed fix:** Stack full-width primary button; don’t shrink label below readable width

### 3. Website Health — contradictory status (W-F001)
- **Severity:** broken (copy/visual)
- **Where:** `/admin/website/health` after failed Check my site
- **Before:** `fix-candidates/before-health-contradictory-status.png`
- **Off:** Banner “We could not check this site.” + body “We have not checked this site yet.”
- **Proposed fix:** One failure state with timestamp + Retry; remove “not checked yet” after an attempt

### 4. Identity “Unknown” (W-F004)
- **Severity:** confusing
- **Where:** Account panel
- **Before:** `fix-candidates/before-identity-unknown.png`
- **Off:** Display name Unknown while email is correct Admin 2
- **Proposed fix:** Fallback display name from email when profile name empty

### 5. Blog editor Unsaved after Save Draft (W-F005)
- **Severity:** confusing
- **Where:** `/admin/blog/:id/edit`
- **Before:** `fix-candidates/before-unsaved-badge.png`
- **Off:** Orange Unsaved persists after successful draft save/reload
- **Proposed fix:** Clear dirty flag on save success; keep Publish secondary while Draft
