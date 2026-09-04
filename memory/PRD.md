# Foundry — FX Structured Product Trade Builder (Marketing Site)

## Original problem statement
Premium marketing website for Foundry (foundryfx.org), an FX structured product trade builder for institutional sales desks, by SwitchYard Capital. Marketing/content site only — links out to the real app at foundryfx.org/syfx/portal/ via Login. Strict palette (#111844 / #4B5694 / #7288AE / black / white), Fraunces + Inter, motion/depth/imagery-driven, precise no-hype tone, 4 pages (Home, About, Services, Contact), placeholders clearly marked for asset swaps.

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
- Nav with hexagon mark + FOUNDRY + "FX Structure Platform", About/Services/Contact, ghost Login → https://foundryfx.org/syfx/portal/
- Alternating dark/light sections, scroll-triggered reveals, parallax mesh, staggered grids, count-up stats, micro-interactions
- Responsive with mobile hamburger; Login/Dashboard NOT built here

## Implemented (2026-09-04)
- Home: hero (INTRODUCING / FOUNDRY / Build. Refine. Execute., dual CTAs, tilted AUD/USD collar trade-builder mockup, mesh + candlestick parallax), How-it-works 3-step strip, features two-column + stacked panels, catalogue grid (6 structures + "+65 more" tile), dark stats strip with count-up (71/14/100%/40+), enterprise trust strip, final CTA, video placeholder modal
- About: header, SwitchYard story, large-serif mission, values grid, team placeholder headshots, hash-chained audit trail section with hexagon chain diagram, full-bleed photo CTA block
- Services: 3 alternating pillars (Deal Structuring / Live Pricing & Risk / Execution & Audit Trail) each with bespoke mockup + bullets, structure family chips, CTA
- Contact: split layout, floating-label form with success state + reference number, desk/region details, portal link
- Favicon = hexagon-cube mark; page title/meta set

## Backlog / next tasks
- P0: Swap placeholder imagery (product screenshots, team headshots, office photo, product film video) — all marked with data-placeholder
- P1: Wire Watch Video modal to real product film embed
- P1: Point domain foundryfx.org at deployment; confirm Login URL routing to /syfx/portal/
- P2: Optional backend endpoint to persist contact enquiries + email notification (Resend)
- P2: Full 71-structure catalogue page if desired
- P2: SEO extras (OG tags, sitemap, structured data)
