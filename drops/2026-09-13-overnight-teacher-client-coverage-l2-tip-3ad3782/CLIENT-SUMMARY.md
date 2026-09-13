# Client hub L2 — overnight leftover 2026-09-13 / finish 2026-09-14

- **Tip:** `3ad3782443d147934342e08a27d7151133369f74` (confirmed `/api/version` buildToken + releaseSha)
- **Seat:** Member B (`helgoiq-bb-member-b@agentmail.to`) · tenant `c=150002` Bluebird only
- **Hub:** client (21 routes) · Teacher already 1P/10Part/2F
- **Evidence:** `coverage/evidence/client-*.webp`
- **JSONL:** `coverage/results/client-l2.jsonl`
- **CDP:** Member B session on :9247 (no Feature Control, no Refrm writes)

## Counts

| Verdict | n |
|---|---|
| L2_PASS | 0 |
| L2_PARTIAL | 21 |
| L2_FAIL | 0 |
| BLOCKED | 0 |
| **Total** | **21** |

## Per-route

| Route | Title | Verdict | Notes |
|---|---|---|---|
| `/?view=client` | Client Home | **L2_PARTIAL** | ex=7/21 · empty_state_hint=True · primary_seen=40 |
| `/profile` | Profile | **L2_PARTIAL** | ex=10/24 · empty_state_hint=False · primary_seen=53 |
| `/profile/calendar` | Calendar | **L2_PARTIAL** | ex=1/15 · empty_state_hint=True · primary_seen=30 |
| `/recovery` | Recovery | **L2_PARTIAL** | ex=2/16 · empty_state_hint=True · primary_seen=28 |
| `/related-contacts` | Related Contacts | **L2_PARTIAL** | ex=3/17 · empty_state_hint=False · primary_seen=28 |
| `/payments` | Payments | **L2_PARTIAL** | ex=4/18 · empty_state_hint=True · primary_seen=30 |
| `/purchase` | Purchase | **L2_PARTIAL** | ex=1/15 · empty_state_hint=False · primary_seen=37 |
| `/wallet?tab=credits` | Wallet Credits | **L2_PARTIAL** | ex=7/21 · figure-like '£20.00' no navigation (non-drill or same-page) · figure-like '£80.00' no navigation (non-drill or same-page) · figure-like '… |
| `/bookings` | Bookings | **L2_PARTIAL** | ex=7/21 · empty_state_hint=True · primary_seen=33 |
| `/my-appointments` | My Appointments | **L2_PARTIAL** | ex=6/20 · empty_state_hint=True · primary_seen=34 |
| `/waitlist` | Waitlist | **L2_PARTIAL** | ex=3/17 · empty_state_hint=False · primary_seen=29 |
| `/schedule` | Schedule | **L2_PARTIAL** | ex=4/18 · empty_state_hint=True · primary_seen=45 |
| `/timetable` | Timetable | **L2_PARTIAL** | ex=4/18 · empty_state_hint=False · primary_seen=43 |
| `/training` | Training | **L2_PARTIAL** | ex=1/15 · empty_state_hint=True · primary_seen=33 |
| `/my-retreats` | My Retreats | **L2_PARTIAL** | ex=1/15 · empty_state_hint=False · primary_seen=27 |
| `/lifetime` | Lifetime | **L2_PARTIAL** | ex=3/17 · empty_state_hint=True · primary_seen=39 |
| `/local-perks` | Local Perks | **L2_PARTIAL** | ex=2/16 · empty_state_hint=True · primary_seen=30 |
| `/milestones` | Milestones | **L2_PARTIAL** | ex=1/15 · empty_state_hint=False · primary_seen=34 |
| `/referrals` | Referrals | **L2_PARTIAL** | ex=4/18 · empty_state_hint=True · primary_seen=30 |
| `/access-pass` | Access Pass | **L2_PARTIAL** | ex=1/15 · empty_state_hint=False · primary_seen=30 |
| `/insights` | Insights | **L2_PARTIAL** | ex=3/17 · empty_state_hint=True · primary_seen=33 |

## Top observations

1. **All 21 Client routes L2_PARTIAL** — primary controls partially exercised; write/charge/book confirms withheld; leftover primary labels remain.
2. **Honest empties / dependency states** observed across recovery, waitlist, retreats, perks, milestones where applicable (no blank crashes).
3. **Figures** — credit/class KPI tiles mostly observe-only (same-page); no FAIL-class disagreement recorded this walk.
4. **Isolation** — no visible Refrm branding/URL/control from Member B; shared `refrm_*` localStorage key names only (same leftover pattern as Teacher).

## Isolation

- No Refrm URL or control from this Bluebird Member B seat.
- Shared `localStorage` key names `refrm_*` persist from earlier sessions — **key-name leftover only**, not a visible tenant leak.

## Guards kept

- Bluebird `c=150002` only
- No Feature Control / settings writes
- Book/Buy/checkout/charge/invite confirms withheld or cancelled
- No passwords in notes/jsonl

