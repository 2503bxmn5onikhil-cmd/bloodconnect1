# BloodConnect delivery checklist

## 1. Responsive command center and role-aware navigation

- [ ] Provide a professional responsive red, white, and light-neutral medical interface with a clear homepage, navigation rail, footer, accessible labels, keyboard-friendly controls, loading states, success/error messaging, and mobile layout behavior.
- [ ] Provide distinct role contexts for Donor, Recipient, Hospital, Blood Bank, and Admin; show only the actions relevant to the selected role in the workspace.
- [ ] Keep a visible demo-data label and safety note that recorded blood group is not medical compatibility or eligibility and hospital/blood-bank staff must confirm testing and crossmatching.

## 2. Donor and recipient workflows

- [ ] Show donor profile, availability, matching blood requirements, request response history, donation history, and reminders in the donor context.
- [ ] Show recipient search by blood group and location, requirement submission, urgency, hospital, request tracking, and authorized-contact framing in the recipient context.
- [ ] Prevent the interface from exposing donor phone numbers or private patient details broadly.

## 3. Hospital and blood-bank operations

- [ ] Show hospital request intake, stock visibility, pending/approved/rejected/issued/completed request states, and request history.
- [ ] Show blood inventory by group with unit quantities, status, expiry, low-stock alerts, auditable stock updates, approval/rejection actions, and stock validation messaging.
- [ ] Make it explicit that production approval and stock deduction must be transactional, authorized, non-negative, and duplicate-safe.

## 4. Notifications, reports, and auditability

- [ ] Show matching notifications, delivery status, demo-vs-real provider labeling, accept/decline response state, duplicate-notification prevention, and request history.
- [ ] Show reports for registered donors, donations, stock by group, low stock, requests by status, approved/rejected requests, issued units, and notification status.
- [ ] Show audit-log framing for important administrative changes.

## 5. Production handoff guidance

- [ ] Document the intended Java Spring Boot REST API, MySQL/JPA/Hibernate schema direction, Maven/Tomcat runtime, SMTP/SMS integration points, password hashing, server-side validation, role-based authorization, safe queries, CORS, pagination, configuration, demo data, testing checklist, and local run guidance.
- [ ] Expose `/manus-routes.json` with the complete page route set before the dev server starts.

## 6. Validation evidence

- [ ] Host diagnostics registered for HTML, CSS, and JavaScript.
- [ ] Dev server listens on `0.0.0.0:3000` and serves HTTP 200 for `/` and `/manus-routes.json`.
- [ ] Desktop and mobile render checks completed; actionable errors fixed before checkpoint.
