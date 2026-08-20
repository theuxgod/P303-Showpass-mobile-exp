# ShowPass — P303 Mobile Experience

A polished mobile web app for accessing a digital festival credential and essential event information. Built as a focused two-page experience for festival attendees arriving at an event.

## Core goal

> **Can I get in, and what do I need to know when I arrive?**

The target user is a festival attendee arriving at an event who needs fast access to their entry credential and important venue information.

## The two screens

| Screen | Role |
|---|---|
| **Pass** | The expressive hero — digital credential with attendee info, entry gate, QR code |
| **Event Details** | The calm utility companion — arrival essentials, venue, policies |

Primary flow: **Pass → Event Details → Pass**

## Design intent

> Apple Wallet × airline boarding pass × festival credential × high-end music technology

- Warm off-white backgrounds, deep graphite credential surfaces, cool gray secondary text
- One restrained electric blue accent
- DIN-style typography (Barlow / Barlow Condensed), DM Mono for credential metadata
- Thin dividers, minimal shadows, strong controlled hierarchy
- Light and dark mode — supports both daytime and night-time use in a festival environment
- Avoid neon colors, gradients, overly futuristic styling, and generic patterns

## Stack

- **Vue 3** with `<script setup>` and TypeScript
- **Vite** — build tool and dev server
- **Vue Router 4** — client-side routing between Pass and Event Details
- **Vuetify 3** — component framework (MDI icons)
- **chart.js / vue-chartjs** — installed, available for data visualisations
- **Barlow / Barlow Condensed / DM Mono** — via Google Fonts

## Project structure

```
src/
  composables/
    useTheme.ts        # Light/dark mode toggle with localStorage persistence
  data/
    event.json         # Single source of truth for all event content
  plugins/
    vuetify.ts         # Vuetify configuration (light theme locked)
  router/
    index.ts           # Two routes: / (Pass) and /details (Event Details)
  views/
    Home.vue           # Pass screen — credential card, QR overlay
    EventDetails.vue   # Event details — arrival info, accordions
  style.css            # Global design system (tokens, layout, dark mode)
  main.ts
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build
```

## Event data

All content is loaded from `src/data/event.json`. To change the event, edit that file — no component changes needed.

| Field | Description |
|---|---|
| `festival` | Festival name |
| `edition` | Year / edition |
| `attendee.name` | Attendee display name |
| `attendee.ticketId` | Ticket reference number |
| `passType` | Pass tier (e.g. Weekend Pass) |
| `dates` | Short, long range, and opening day strings |
| `venue` / `city` | Venue name and city |
| `entryGate` | Gate name and location |
| `gateTime` / `showTime` | Gate open and first show times |
| `qrValue` | QR code payload |
| `parkingAndRideshare` | Accordion copy |
| `bagPolicy` | Accordion copy |
| `reentry` | Accordion copy |
| `accessibility` | Accordion copy |

## Design system

Design tokens in `src/style.css`:

| Token | Light | Dark |
|---|---|---|
| `--ink` | `#1c1c1e` | `#edeae4` |
| `--paper` | `#f5f2ec` | `#1c1c1e` |
| `--graphite` | `#242424` | `#2e2e2e` |
| `--muted` | `#5c6170` | `#929799` |
| `--blue` | `#3d7ee8` | — |
| `--blue-lo` | `#1656b0` | `#6199f0` |
| `--blue-hi` | `#6199f0` | — |
| `--on-dark` | `#f0ede7` | `#f0ede7` (constant) |

Dark mode is toggled via the sun/moon button in both topbars, persisted to `localStorage` (`sp-theme`), and falls back to `prefers-color-scheme` on first visit.

## Responsive behaviour

- **Mobile** — fills the full browser viewport naturally
- **Desktop / tablet** — centered phone-sized frame (max 520 × 900 px) against the page background; no promotional or explanatory content outside the app

## Interactions

| Action | Result |
|---|---|
| Tap **Show QR code** (Present pass) | Full-screen credential scan view |
| Tap **Done** | Returns to Pass |
| Tap **Event details** | Navigates to Event Details |
| Tap **View pass** | Returns to Pass |
| Tap any **Good to know** row | Expands / collapses accordion |
| Tap sun/moon icon | Toggles light / dark mode |

Do not add favourites, schedules, filters, maps, wallet integrations, or other features outside this core flow.

## Scope

Local, static, client-side-only. No accounts, APIs, payments, real ticket validation, GPS, notifications, backend services, or persistent user state beyond the theme preference.

## Success

> A first-time user should immediately understand that ShowPass is their festival credential, find the information needed to enter the event, open Event Details, and return to their pass without explanation.


## Overview

ShowPass gives attendees fast access to:
- Their digital entry credential with QR code
- Key arrival information — venue, gate, times, and policies

## Stack

- **Vue 3** with `<script setup>` and TypeScript
- **Vite** — build tool and dev server
- **Vue Router 4** — client-side routing between Pass and Event Details
- **Vuetify 3** — component framework (MDI icons)
- **chart.js / vue-chartjs** — installed, available for data visualisations
- **Barlow / Barlow Condensed / DM Mono** — via Google Fonts

## Project structure

```
src/
  composables/
    useTheme.ts        # Light/dark mode toggle with localStorage persistence
  data/
    event.json         # Single source of truth for all event content
  plugins/
    vuetify.ts         # Vuetify configuration (light theme locked)
  router/
    index.ts           # Two routes: / (Pass) and /details (Event Details)
  views/
    Home.vue           # Pass screen — credential card, QR overlay
    EventDetails.vue   # Event details — arrival info, accordions
  style.css            # Global design system (tokens, layout, dark mode)
  main.ts
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build
```

## Event data

All content is loaded from `src/data/event.json`. To change the event, edit that file — no component changes needed. Fields:

| Field | Description |
|---|---|
| `festival` | Festival name |
| `edition` | Year / edition |
| `attendee.name` | Attendee display name |
| `attendee.ticketId` | Ticket reference number |
| `passType` | Pass tier (e.g. Weekend Pass) |
| `dates` | Short, long range, and opening day strings |
| `venue` / `city` | Venue name and city |
| `entryGate` | Gate name and location |
| `gateTime` / `showTime` | Gate open and first show times |
| `qrValue` | QR code payload |
| `parkingAndRideshare` | Accordion copy |
| `bagPolicy` | Accordion copy |
| `reentry` | Accordion copy |
| `accessibility` | Accordion copy |

## Design system

Design tokens live in `src/style.css` as CSS custom properties:

| Token | Light | Dark |
|---|---|---|
| `--ink` | `#1c1c1e` | `#edeae4` |
| `--paper` | `#f5f2ec` | `#1c1c1e` |
| `--graphite` | `#242424` | `#2e2e2e` |
| `--muted` | `#5c6170` | `#929799` |
| `--blue` | `#3d7ee8` | — |
| `--blue-lo` | `#1656b0` | `#6199f0` |
| `--blue-hi` | `#6199f0` | — |
| `--on-dark` | `#f0ede7` | `#f0ede7` (constant) |

Dark mode is toggled via a sun/moon button in both topbars. The preference is persisted to `localStorage` under the key `sp-theme` and falls back to `prefers-color-scheme` on first visit.

## Responsive behaviour

- **Mobile** — fills the full browser viewport naturally
- **Desktop / tablet** — centered phone-sized frame (max 520 × 900 px) against the page background

## Interactions

| Action | Result |
|---|---|
| Tap **Show QR code** | Full-screen credential scan view |
| Tap **Done** | Returns to Pass |
| Tap **Event details** | Navigates to Event Details |
| Tap **View pass** | Returns to Pass |
| Tap any **Good to know** row | Expands / collapses accordion |
| Tap sun/moon icon | Toggles light / dark mode |

## Scope

This is a local, static, client-side-only app. There are no accounts, APIs, payments, backend services, or persistent user state beyond the theme preference.

