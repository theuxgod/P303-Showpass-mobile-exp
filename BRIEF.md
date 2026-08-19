# SHOWPASS — Project Brief - P303 mobile interaction

## Summary

ShowPass is a polished mobile web app for accessing a digital music festival credential and essential event information.

## User

A festival attendee arriving at an event who needs fast access to their entry credential and important venue information.

## Core Goal

Help the user quickly answer:

**Can I get in, and what do I need to know when I arrive?**

## Core Experience

The app includes two pages:

Pass
- digital festival credential with attendee, access, entry, event, and QR information

Event Details
- essential arrival and venue information

Primary flow:

**Pass to Event Details to Pass**

## Data

Use one local JSON file:
`src/data/event.json`

Generate realistic data for:

- Festival
- Attendee
- Pass type
- Dates
- Venue
- Entry gate
- Gate time
- Show time
- QR value
- Parking and rideshare
- Bag policy
- Re-entry
- Accessibility

Both pages should read from this JSON file rather than hardcoding content in components.

## Design

The experience should feel like:

**Apple Wallet × airline boarding pass × festival credential × high-end music technology**

ShowPass should feel premium, energetic, highly polished, and easy to scan.

Use:

- Bold typography
- High-quality festival imagery
- Strong visual hierarchy
- Refined spacing
- Purposeful color
- Clear credential information
- Large touch targets
- Subtle motion and interaction
- Realistic event content
- warm off white backgrounds
- deep graphite credential surfaces
- cool gray secondary text
- one restrained electric blue accent
- DIN style typography
- Thin dividers and subtle borders
- Minimal shadows
- Strong controlled hierarchy

Avoid neon colors, gradients, overly futuristic styling, and generic ai generated patterns

The pass should be the expressive hero. Event details should feel lighter, calmers, and utility focused while using the same visual system.

The pass should feel like a designed digital credential, not a standard webpage card.

## Interactions

Keep interactions simple and reliable

- View event details opens the event details  page from the pass
- Preset pass - expands the QR code into a focused full screen credential view
- Done / View Pass - returns the user to the main pass.
- Even info accordions - Parking & Rideshare, Bag policy, Re-entry, and accessibility can expand and collapse

Do not add favorites, schedules, filters, maps, wallet integrations, or other interactions outside of the core flow.

## Responsive

ShowPass is a mobile-first web app.
Render the app directly in the browser. Do not place it inside a phone mockup, marketing page, or product showcase.
On mobile, fill the available viewport naturally.
On larger screens, center the mobile app against a simple background. Do not add promotional or explanatory content outside the app.

## Tech

Build showpass as a simple mobile first web app

- Use local json dta from src/data/event.json
- Keep components small and reusable
- Use simple client side routing between pass and event details


## Scope

Build only the two-page experience described above.
Use local JSON data.
Do not build accounts, APIs, payments, real ticket validation, GPS, notifications, backend services, or persistent user state.
Keep interactions simple and reliable. Prioritize visual polish over additional features.

## Success

A first-time user should immediately understand that ShowPass is their festival credential, find the information needed to enter the event, open Event Details, and return to their pass without explanation.