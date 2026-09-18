# Connections / Connect flows — Bluebird (`c=150002`)

**Environment:** staging `https://lobster-app-662c7.ondigitalocean.app`  
**Tip check:** `/api/version` build/release starts with `205d5bb8` (confirmed).  
**Seat:** Bluebird Admin2 test seat from `README-SEATS.md`; no password or secret is recorded here.  
**Safety:** OAuth walks stopped at the provider account chooser/sign-in screen. No provider account was selected, no consent was submitted, and no secret/API key was entered.

## Executive result

The owner-facing entry points exist and use provider sign-in language rather than asking for keys. The vault is a credential/link catalogue, not a complete Connect centre. Google Reviews and Google Ads reach Google sign-in; Stripe and Gmail show connected green states; Instagram is shown as connected through Meta. Meta Facebook handoff and both tested Disconnect controls are dead ends. GTM is owner-hostile (requires a technical Container ID) and its modal displays a `refm.co.uk` verification URL while this walk is Bluebird-only; this is logged as P1.

Mailchimp, Zoom, Xero and QuickBooks have no Connect surface in the owner search/navigation. Xero search exposed only Bookkeeping Inbox; the other three returned no feature. These are recorded as not exposed/not tested rather than assumed to work.

## Provider matrix

Result vocabulary: `pass`, `dead_end`, `asks_for_something_owner_would_not_have`. A flow can pass its provider handoff while its disconnect sub-step is separately dead-ended.

| Provider / flow | Route | Connect / existing state | Return / green state | Disconnect | Owner result | Coverage state |
|---|---|---|---|---|---|---|
| Connections vault | `/admin/connections` | Vault cards/links; no Connect buttons | Not applicable; cards show “No live probe” or linked status | Not exercised; vault actions are reveal/edit, not OAuth disconnect | `pass` for discoverability; not a Connect flow | `partially_tested` |
| Google Business Profile / Reviews | `/admin/social/integrations` | “Continue with Google” reached Google account chooser | Not tested beyond chooser; stopped safely | Not applicable while unconnected | `pass` (handoff) | `partially_tested` |
| Instagram | `/admin/social/integrations` | Page says “Instagram is connected through Meta”; “Open Meta connection” | Green/connected wording present; no direct Instagram OAuth | No direct Instagram Disconnect shown | `pass` (existing connected state) | `partially_tested` |
| Meta / Facebook | `/admin/meta-hub?tab=connection` | “Continue with Facebook” stayed on page/spinner; no provider handoff | No return or green tick | Not available | `dead_end` | `partially_tested` |
| Meta Ads tab | `/admin/social/integrations` | Routes owner to Meta Hub Connection; no independent OAuth | Inherits Meta dead end | Not available | `dead_end` | `partially_tested` |
| Google Ads | `/admin/social/google-ads` | “Connect Google Ads” reached Google account chooser | Stopped at chooser; no return/green tick | Not reached | `pass` (handoff) | `partially_tested` |
| Gmail | `/admin/social/integrations` | Existing connected/syncing state shown with green Connected badge | Connected account state visible | “Disconnect Gmail” click had no visible change; reload still showed connected | `pass` existing state; disconnect `dead_end` | `partially_tested` |
| Stripe | `/admin/stripe-connect` | Existing “Connected and ready”, “Safe Studio sandbox” | Green connected state visible | “Disconnect” click had no visible change; reload still showed connected | `pass` existing state; disconnect `dead_end` | `partially_tested` |
| Google Tag Manager | `/admin/social/gtm` | “Connect container” opens modal | Blocked before submit; no provider sign-in | Not connected | `asks_for_something_owner_would_not_have` (technical Container ID); modal also shows `refm.co.uk` verification URL | `blocked` |
| Phone & SMS | `/admin/social/integrations` | Reconnect phone service action; status indicated SMS not ready | No provider sign-in/green return observed | Not available | `dead_end` | `partially_tested` |
| Mailchimp | owner search/navigation | No feature or Connect surface found | Not applicable | Not applicable | `dead_end` (not exposed) | `not_tested` |
| Zoom | owner search/navigation | No feature or Connect surface found | Not applicable | Not applicable | `dead_end` (not exposed) | `not_tested` |
| Xero | owner search/navigation | Search exposed Bookkeeping Inbox only; no Xero Connect | Not applicable | Not applicable | `dead_end` (not exposed) | `not_tested` |
| QuickBooks | owner search/navigation | No feature or Connect surface found | Not applicable | Not applicable | `dead_end` (not exposed) | `not_tested` |

### Keys / tokens / APIs check

No raw API key, token, client secret, or technical credential was requested in the tested OAuth flows. The Connections vault has “Reveal secrets” controls and username/password metadata by design, but secrets were never revealed. GTM is the exception in owner experience: it requires a technical Container ID rather than a provider sign-in.

## Feel scores

Subjective 1–5 scores for this Bluebird walk; WhatsApp/Slack are reference bars, not product claims.

| Surface | Joyful | Obvious | Frictionless | WhatsApp bar | Slack bar | Why |
|---|---:|---:|---:|---:|---:|---|
| Connections vault | 2 | 4 | 3 | 4 | 4 | Clear catalogue and tenant context, but it is not a unified Connect flow and exposes secret-management language. |
| Integrations tabs | 3 | 4 | 3 | 4 | 4 | Good provider naming and sign-in copy; several flows are split across hubs. |
| Google OAuth entry | 3 | 4 | 3 | 4 | 4 | Clear handoff; safe to stop at chooser, but return state was not exercised. |
| Stripe / Gmail connected state | 4 | 4 | 2 | 4 | 4 | Green status is excellent; Disconnect did not change state. |
| Meta Facebook entry | 2 | 4 | 1 | 4 | 4 | Clear CTA but no handoff or error recovery. |
| GTM | 1 | 3 | 1 | 4 | 4 | Requires Container ID and shows a cross-tenant verification URL. |

## Proposed Coverage tab entries (parent merge; not merged here)

The checked-in registry exists at `/workspace/helgoiq-work-hub/coverage/` and currently has these areas as stale/partial relative to this tip. Proposed entries for parent merge:

| Route | Proposed state | Evidence |
|---|---|---|
| `/admin/connections?c=150002` | `partially_tested` | `evidence/connections-vault.png` |
| `/admin/social/integrations?c=150002` | `partially_tested` | `evidence/integrations-google-reviews.png` |
| `/admin/stripe-connect?c=150002` | `partially_tested` | `evidence/stripe-connected.png`; Disconnect regression |
| `/admin/meta-hub?c=150002&tab=connection` | `partially_tested` | `evidence/meta-connect-dead-end.png` |
| `/admin/social/google-ads?c=150002` | `partially_tested` | `evidence/google-ads-provider-signin.png` |
| `/admin/social/gtm?c=150002` | `blocked` | `evidence/gtm-container-modal.png` |
| Google Reviews Connect flow | `partially_tested` | provider chooser evidence; safe stop before consent |
| Gmail Disconnect flow | `failed` | connected state persisted after click + reload |
| Stripe Disconnect flow | `failed` | connected state persisted after click + reload |
| Meta/Facebook Connect flow | `failed` | no provider handoff |
| Mailchimp / Zoom / Xero / QuickBooks | `not_tested` | no owner-facing Connect surface found |

No Hub percentage is claimed.
