# ActiveBoost — Product Demo Video Script
Runtime target: ~3 minutes. Tone: confident, fast-paced SaaS demo (think Linear/Stripe launch videos).

---

## SCENE 1 — Hook (0:00–0:10)
**Visual:** Black screen → dumbbell logo pulses in (orange→violet gradient) → wordmark "ActiveBoost" snaps in.
**VO:** "Running a gym means juggling members, payments, trainers, and inventory — across five different tools. ActiveBoost replaces all of them with one."

## SCENE 2 — Problem (0:10–0:20)
**Visual:** Split screen — messy spreadsheet, WhatsApp chat, paper attendance register, separate payment app — all flashing red X's.
**VO:** "Spreadsheets for members. WhatsApp for support. Cash registers for payments. None of it talks to each other."

## SCENE 3 — Architecture overview (0:20–0:40)
**Visual:** Clean animated diagram, left to right:
`Browser (Next.js)` → `REST API (NestJS)` → `PostgreSQL`
with a branch down to `Razorpay` and `Socket.io (live chat)`.
**VO:** "ActiveBoost is one platform: a Next.js dashboard talking to a NestJS backend, Postgres underneath, real payments through Razorpay, and live chat built in. Five roles, one source of truth."

## SCENE 4 — Role tour (0:40–1:20), ~8 sec per role, dashboard screen-recordings
1. **Super Admin** — platform-wide gym list, revenue, subscription plans. *"Platform owners see every gym, every dollar, from one screen."*
2. **Gym Admin** — members grid, payments table, supplement inventory. *"Gym owners run the whole business — members, staff, trainers, stock — without leaving the dashboard."*
3. **Trainer** — assigned members, PT session calendar, performance ring. *"Trainers see their schedule and their numbers, not someone else's spreadsheet."*
4. **Staff** — check-in flow, leave requests. *"Staff clock in, request leave, done."*
5. **Member** — supplement store, membership card, chat with gym. *"Members shop, pay, and message the gym — all in the app they already opened to check their plan."*

## SCENE 5 — The payment flow, in detail (1:20–2:00)
**Visual:** Step-by-step animated sequence, screen-recording cut with diagram overlays:
1. Member taps "Buy" on a supplement.
2. Backend computes the real price server-side (overlay text: *"price never trusted from the browser"*).
3. Razorpay checkout opens — real payment, test mode shown.
4. Payment completes → signature verified server-side.
5. Order auto-confirms, stock decrements, admin's order list updates live.
**VO:** "Every payment is priced and verified on the server — never the browser. The moment Razorpay confirms it, the order is created, stock is deducted, and the gym admin sees it instantly. No manual reconciliation."

## SCENE 6 — Live chat (2:00–2:15)
**Visual:** Two windows side by side — member sends a message, admin's screen updates in real time with no refresh.
**VO:** "Built-in chat means support tickets, schedule changes, and quick questions never leave the platform."

## SCENE 7 — Under the hood, for technical viewers (2:15–2:35)
**Visual:** Code editor flash — Prisma schema, a controller file, the event-emitter listener pattern.
**VO:** "Role-based access on every endpoint. Event-driven side effects — one payment event can trigger order fulfillment, commission calculation, and notifications, independently. Migrations tracked, typed end to end."

## SCENE 8 — Close (2:35–3:00)
**Visual:** Quick montage of all 5 dashboards cutting fast, then back to logo.
**VO:** "One login. Every role. Real payments. Real time. ActiveBoost — run your gym like a pro."
**End card:** Logo + tagline + URL.

---

## Shot list / asset checklist
- [ ] Screen recordings: super-admin dashboard, admin members/payments/supplements, trainer dashboard, staff check-in, member supplements+membership+chat
- [ ] Architecture diagram animation (can reuse the Mermaid-style boxes from the generation prompt given earlier)
- [ ] Payment flow animated sequence (5 steps above)
- [ ] Two-window live chat side-by-side recording
- [ ] Code editor close-ups (schema.prisma, payment-events.handler.ts)
- [ ] Logo animation (intro + outro)

## Voiceover full text (for TTS or recording, ~95 sec read at normal pace)
> Running a gym means juggling members, payments, trainers, and inventory — across five different tools. ActiveBoost replaces all of them with one.
> Spreadsheets for members. WhatsApp for support. Cash registers for payments. None of it talks to each other.
> ActiveBoost is one platform: a Next.js dashboard talking to a NestJS backend, Postgres underneath, real payments through Razorpay, and live chat built in. Five roles, one source of truth.
> Platform owners see every gym, every dollar, from one screen. Gym owners run the whole business — members, staff, trainers, stock — without leaving the dashboard. Trainers see their schedule and their numbers, not someone else's spreadsheet. Staff clock in, request leave, done. Members shop, pay, and message the gym — all in the app they already opened to check their plan.
> Every payment is priced and verified on the server — never the browser. The moment Razorpay confirms it, the order is created, stock is deducted, and the gym admin sees it instantly. No manual reconciliation.
> Built-in chat means support tickets, schedule changes, and quick questions never leave the platform.
> Role-based access on every endpoint. Event-driven side effects — one payment event can trigger order fulfillment, commission calculation, and notifications, independently. Migrations tracked, typed end to end.
> One login. Every role. Real payments. Real time. ActiveBoost — run your gym like a pro.
