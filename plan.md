# BloodConnect implementation plan

## Scope

Build a polished, responsive front-end prototype for the Blood Donation Management System brief. The prototype will make the main role-specific workflows tangible: dashboard overview, request tracking, donor matching, blood inventory, notifications, reports, and a secure-access framing. The UI will use demo data with clear labels so it does not imply that real notification providers, medical compatibility, or production authentication are configured.

The requested production architecture remains documented in the interface and README: HTML/CSS/JavaScript frontend connected to Java Spring Boot REST APIs, MySQL via Spring Data JPA/Hibernate, Maven, embedded Tomcat, SMTP email, SMS provider integration, secure password hashing, role-based authorization, validation, audit logs, and transactional stock deductions.

## Implementation approach

- Use a dependency-light Node static server for the managed Preview so the interface can run immediately in the Sandbox.
- Keep the UI in `public/` with semantic HTML, CSS variables, and a small stateful JavaScript controller.
- Use local demo state for requests, inventory, notifications, and role switching. The UI will make API boundaries visible through “Demo data” labels and architecture notes rather than pretending to persist data.
- Expose a route manifest at `/manus-routes.json` before starting the server.
- Use progressive enhancement: the page renders useful content without JavaScript, while JavaScript powers dashboard filters, role switching, navigation, request creation, notifications, and stock actions.

## Information architecture

- `/` — BloodConnect command center / overview
- `/dashboard` — role-aware dashboard view
- `/requests` — request tracking and matching queue
- `/inventory` — blood-bank inventory management
- `/notifications` — notification delivery monitor
- `/reports` — operational reports and audit snapshot
- `/architecture` — beginner-friendly production architecture and local implementation guidance

## Design direction

### Alternatives considered

- **Clinical editorial / quiet trust** — 0.07: high whitespace, fine rules, restrained red accents, document-like information hierarchy.
- **Emergency operations console** — 0.05: dark chrome, vivid red alerts, dense control-room modules, rapid triage emphasis.
- **Human-centered civic utility** — 0.08: warm neutral canvas, bold red identity, calm cards, clear status language, and visible human impact.

### Chosen: Human-centered civic utility

- **Design Movement:** contemporary civic-tech utility with the warmth of a public-service dashboard.
- **Core Principles:** scan before click; urgency is color-coded but never alarming by default; every metric has an operational meaning; safety caveats stay close to actions.
- **Color Philosophy:** deep ink and warm paper create dependable clinical calm; BloodConnect red is reserved for life-critical actions and the brand mark; mint and amber communicate safe progress and review states.
- **Layout Paradigm:** a fixed utility rail paired with an offset content canvas. The right edge carries a “today” pulse strip, while the main canvas alternates between wide overview rows and focused operational cards instead of a centered generic grid.
- **Signature Elements:** a heartbeat-style activity sparkline; pill-shaped request state tags; red “pulse” dots that appear only beside live operational signals.
- **Interaction Philosophy:** actions reveal context in place; filters and role changes update the same workspace without losing orientation; destructive or medically sensitive actions are framed with a confirmation note.
- **Animation:** short 160–240ms fades and horizontal lifts for view changes; a subtle pulse on live status dots; no looping motion in the main reading area.
- **Typography System:** `Manrope` for headings and navigation, `DM Sans` for body and data labels; uppercase eyebrow labels with generous tracking; large numeric metrics with tabular figures.
- **Brand Essence:** a calmer way to move blood where it matters — practical, accountable, human. Personality: clear, prepared, compassionate.
- **Brand Voice:** direct, warm, operational. Example lines: “Route the next unit with confidence.” / “Every request deserves a visible next step.”
- **Wordmark & Logo:** a compact outlined droplet intersected by an ECG notch, followed by the wordmark “bloodconnect” in lowercase; the mark doubles as the sidebar home button.
- **Signature Brand Color:** BloodConnect Red `#e14b4d`.

## Project structure

```text
bloodconnect/
├── plan.md
├── TODO.md
├── package.json
├── server.js
├── app.config.ts
└── public/
    ├── index.html
    ├── styles.css
    ├── app.js
    └── manus-routes.json
```

## Build workflow

1. Create the static shell, route manifest, and data model.
2. Add dashboard, role switching, requests, inventory, notifications, reports, and architecture views.
3. Register host-managed HTML/CSS/JavaScript diagnostics.
4. Start the server on the configured port and verify the home page plus route manifest with HTTP requests.
5. Capture desktop and mobile screenshots for visual inspection, resolve any defects, then checkpoint the files to the managed repository.
6. Deliver the Preview URL unless publication is explicitly requested and successfully confirmed.
