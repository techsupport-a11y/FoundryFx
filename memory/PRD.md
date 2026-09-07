# Foundry — FX Structured Product Trade Builder (Marketing Site)

## Original problem statement
Premium marketing website for Foundry (foundryfx.org), an FX structured product trade builder for institutional sales desks, by SwitchYard Capital. Marketing/content site only — links out to the real app at portal.foundryfx.org/syfx/portal/ via Login. Strict palette (#111844 / #4B5694 / #7288AE / black / white), Fraunces + Inter, motion/depth/imagery-driven, precise no-hype tone, 4 pages (Home, About, Services, Contact), placeholders clearly marked for asset swaps.

## Architecture
- Vite + React 19 + TypeScript + Tailwind v4, `motion` (Framer Motion successor) for scroll reveals/parallax/count-ups
- No backend usage; contact form is UI-state only (per brief)
- Files: `src/App.tsx` (router + ScrollToTop), `src/components/Nav.tsx`, `Footer.tsx`, `HexMark.tsx`, `NetworkMesh.tsx`, `TradeBuilderMockup.tsx`, `motion.tsx` (Reveal/ParallaxLayer/CountUp), `src/pages/{Home,About,Services,Contact}.tsx`
- Brand tokens in `src/index.css` @theme (navy-*, royal-*, slateblue-*, mist-50; .bg-foundry-dark, .grain, .card-glow, .btn-sheen, .eyebrow, .font-display)
- All placeholder imagery tagged with `data-placeholder="..."` attributes + `{/* PLACEHOLDER: */}` comments

## User personas
- Institutional FX sales desk head / salesperson (knows TARF, collar, seagull, knock-in jargon)
- Compliance/COO evaluating governance (audit trail differentiator)
- Prospective client requesting a demo via Contact

## Core requirements (static)
- Nav with hexagon mark + FOUNDRY + "FX Structure Platform", About/Services/Contact, ghost Login → https://portal.foundryfx.org/syfx/portal/
- Alternating dark/light sections, scroll-triggered reveals, parallax mesh, staggered grids, count-up stats, micro-interactions
- Responsive with mobile hamburger; Login/Dashboard NOT built here

## Implemented (2026-09-04, v2 redesign)
- Full redesign to mirror the reference showcase design (structure-showcase-9) in the Foundry navy palette (#111844/#4B5694/#7288AE), fonts Fraunces (display) + Inter (body) + JetBrains Mono (mock data)
- Boot preloader (hex mark + tracked wordmark + progress line, lifts away), canvas particle MeshCanvas with parallax, procedural CandleArt, noise grain overlays
- Home: hero with masked-line reveal + perspective-tilted BrowserFrame trade-builder mock (scenario chart, trade summary, provider comparison w/ Meridian FX best row), scrolling structure ticker, How-it-works 3 steps with connecting line, Desk Workbench features + floating scenario-analysis mock, catalogue grid with payoff glyphs + dark +65 tile, stats strip (71 / 15 / 100% / 24-5) with count-up, gap-px enterprise trust grid, Final CTA with spinning GlobeMark
- About: "One workbench. No spreadsheets." header, numbered rails (01 The problem / 02 The workbench + placeholder visual / 03 The record with audit-chain cards), serif mission statement, values grid (Precision/Control/Craft/Candour)
- Services: "Three pillars. One platform." header; pillars alternate mockup-left/right — field builder mock (chips + dynamic fields + "Not used by Collar"), sensitivity ladder mock (LP premium/margin toggle, greeks), termsheet + trade journal mock (light card)
- Contact: "Talk to the team." dark page, underline-style form in glass card, "Transmit message" → success state with mono ref; right rail: desk@foundryfx.org, client portal card, regions list
- Footer: white, link columns (Platform/Company/Access), giant outlined FOUNDRY wordmark, mono legal bar

- About: denser image-led layout (FX chart + trading desk photography, brand-tinted, alternating rails); Home and Services tightened to match, with full-bleed parallax desk bands before the CTA
- Watch Video modal plays real stand-in market footage (Pexels HD, captioned for swap)
- Lenis smooth inertial scrolling site-wide; footer wordmark = Fraunces light outline matching reference

## Backlog / next tasks
- P0: Swap remaining tagged stand-ins (product screenshots, desk photography, product film) for real Foundry assets
- P1: Point domain foundryfx.org at deployment; confirm Login URL routing to https://portal.foundryfx.org/syfx/portal/
- P2: Optional backend endpoint to persist contact enquiries + email notification (Resend)
- P2: Full 71-structure catalogue page if desired
- P2: SEO extras (OG tags, sitemap, structured data)
