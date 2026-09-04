import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, ParallaxLayer } from "@/components/motion";
import { NetworkMesh } from "@/components/NetworkMesh";
import { HexMark } from "@/components/HexMark";

/* ---- Pillar 1 mockup: dynamic field builder (browser frame) ---- */
function StructuringMockup() {
  return (
    <div
      data-testid="mockup-structuring"
      data-placeholder="product-screenshot: dynamic-field-builder"
      className="overflow-hidden rounded-xl border border-white/15 bg-navy-950/90 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-navy-900/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-royal-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slateblue-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-slateblue-300/60" />
        <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[10px] tracking-wider text-slateblue-400">
          Trade Builder — New Structure
        </div>
      </div>
      <div className="grid gap-3 p-5 sm:grid-cols-2">
        <div className="sm:col-span-2 rounded-lg border border-royal-600/50 bg-royal-600/15 px-4 py-3">
          <p className="text-[9px] uppercase tracking-[0.2em] text-slateblue-400">Structure</p>
          <p className="mt-1 text-sm font-semibold text-white">Seagull — EUR/USD</p>
          <p className="mt-0.5 text-[10px] text-slateblue-400">3 of 71 · fields adapt to selection</p>
        </div>
        {[
          ["Currency Pair", "EUR/USD"],
          ["Notional", "EUR 10,000,000"],
          ["Tenor", "6 Months"],
          ["Fixing Schedule", "Monthly"],
          ["Put Strike (Floor)", "1.0520"],
          ["Call Strike (Cap)", "1.0980"],
          ["Wing Strike", "1.1150"],
          ["Premium", "Zero Cost"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
            <p className="text-[9px] uppercase tracking-[0.2em] text-slateblue-500">{k}</p>
            <p className="mt-1 text-xs font-semibold text-white">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Pillar 2 mockup: live pricing panel (gradient block) ---- */
function PricingMockup() {
  return (
    <div
      data-testid="mockup-pricing"
      data-placeholder="product-screenshot: live-pricing-risk"
      className="grain relative overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-navy-800 via-navy-900 to-royal-700 p-6 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slateblue-300">
          Live Repricing · GBP/USD TARF
        </p>
        <span className="flex items-center gap-1.5 rounded-full border border-slateblue-400/40 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-slateblue-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slateblue-300" />
          Streaming
        </span>
      </div>
      <svg viewBox="0 0 400 170" className="mt-4 w-full" fill="none" aria-hidden="true">
        {[35, 75, 115, 155].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#7288AE" strokeOpacity="0.16" strokeDasharray="3 5" />
        ))}
        <path d="M10 140 L90 140 L90 120 L170 120 L170 100 L250 100 L250 78 L330 78 L330 58 L390 58" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 140 L90 140 L90 120 L170 120 L170 100 L250 100 L250 78 L330 78 L330 58 L390 58 L390 170 L10 170 Z" fill="#4B5694" fillOpacity="0.22" />
        <circle cx="250" cy="78" r="4" fill="#FFFFFF" />
        <text x="258" y="72" fill="#AEBDD4" fontSize="9" letterSpacing="1">TARGET 96,000</text>
        <text x="14" y="132" fill="#AEBDD4" fontSize="8" letterSpacing="0.5">ACCRUED 41,000</text>
      </svg>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-900">
          LP Premium
        </span>
        <span className="rounded-full border border-slateblue-400/50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slateblue-300">
          Margin View
        </span>
      </div>
    </div>
  );
}

/* ---- Pillar 3 mockup: execution ticket stack ---- */
function ExecutionMockup() {
  const items = [
    ["Termsheet emailed", "client@corporate.com · PDF attached"],
    ["Client approval", "Secure link · signed 14:02:11 GMT"],
    ["Ticket booked", "FDR-2026-04821 · 14:02:13 GMT"],
    ["Journal sealed", "hash #c4d2…98aa · chain verified"],
  ];
  return (
    <div
      data-testid="mockup-execution"
      data-placeholder="product-screenshot: execution-ticket-journal"
      className="rounded-xl border border-slateblue-200 bg-white p-6 shadow-[0_30px_70px_-30px_rgba(17,24,68,0.35)]"
    >
      <div className="flex items-center justify-between border-b border-slateblue-100 pb-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slateblue-500">
          Execution Journal
        </p>
        <HexMark className="h-5 w-5 text-royal-600" />
      </div>
      <div className="mt-5 space-y-3">
        {items.map(([t, d], i) => (
          <div key={t} className="card-glow flex items-center gap-4 rounded-lg border border-slateblue-200 bg-mist-50 px-4 py-3">
            <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[11px] text-white">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-navy-900">{t}</p>
              <p className="truncate text-[11px] text-slateblue-500">{d}</p>
            </div>
            <Check className="ml-auto h-4 w-4 shrink-0 text-royal-600" />
          </div>
        ))}
      </div>
    </div>
  );
}

const PILLARS = [
  {
    id: "deal-structuring",
    eyebrow: "01 · Deal Structuring",
    title: "The structure picks the fields. Not the other way round.",
    body: "Seventy-one structures in the catalogue — vanillas, barriers, accumulators, hybrids. Select one and the builder renders exactly the legs, strikes, schedules and barrier terms that structure takes. Nothing more on screen, nothing missed off the ticket.",
    bullets: [
      "71-structure catalogue, searchable by family and payoff",
      "Dynamic field builder renders only required terms",
      "Client-ready structure summary on every ticket",
    ],
    mockup: <StructuringMockup />,
    dark: false,
  },
  {
    id: "live-pricing",
    eyebrow: "02 · Live Pricing & Risk",
    title: "Every price is live until the moment you deal.",
    body: "Indicative levels reprice continuously against connected providers. Toggle between LP premium and your margin view on the same ticket, and stress the trade across spot, vol and time before the client asks the question.",
    bullets: [
      "Continuous repricing across 14 connected providers",
      "LP premium vs margin toggle on a single ticket",
      "Scenario and sensitivity grids — spot, vol, time decay",
    ],
    mockup: <PricingMockup />,
    dark: true,
  },
  {
    id: "execution-audit",
    eyebrow: "03 · Execution & Audit Trail",
    title: "From termsheet to booked ticket, with the record sealed.",
    body: "Send the termsheet by email, collect client approval through a secure link, and execute against a ticket-numbered instruction. The trade journal logs itself — every event hash-sealed into the FX Engine's tamper-evident chain.",
    bullets: [
      "Termsheet email generated from the ticket, no re-keying",
      "Secure client approval link with full rate seal",
      "Ticket-numbered execution, auto-logged trade journal",
    ],
    mockup: <ExecutionMockup />,
    dark: false,
  },
];

const FAMILIES = [
  "Forwards & Swaps", "Collars & Corridors", "Seagulls", "Knock-In Barriers",
  "Knock-Out Barriers", "TARFs", "Accumulators", "Faders", "Digitals",
  "Range Accruals", "Pivot Structures", "Hybrids",
];

export default function Services() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section data-testid="services-header" className="bg-foundry-dark relative overflow-hidden pb-20 pt-40 lg:pb-28 lg:pt-52">
        <ParallaxLayer className="absolute inset-0 text-slateblue-500/25" distance={80}>
          <NetworkMesh className="h-full w-full" />
        </ParallaxLayer>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-slateblue-400">
              <span className="h-px w-10 bg-slateblue-500/60" />
              Services
            </p>
            <h1 className="font-display mt-6 max-w-3xl text-4xl font-light leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Three disciplines.
              <span className="italic text-slateblue-300"> One workbench.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-slateblue-300/90">
              Structuring, pricing and execution are one continuous workflow in
              Foundry — because on a desk, they already are.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      {PILLARS.map((p, i) => (
        <section
          key={p.id}
          data-testid={`pillar-${p.id}`}
          className={`relative overflow-hidden py-24 lg:py-32 ${p.dark ? "bg-foundry-dark-soft" : "bg-white"}`}
        >
          {p.dark ? (
            <div className="pointer-events-none absolute -right-28 -top-28 text-white/[0.05]">
              <HexMark className="h-[400px] w-[400px]" />
            </div>
          ) : null}
          <div
            className={`relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <p className={`eyebrow ${p.dark ? "text-slateblue-400" : "text-royal-600"}`}>{p.eyebrow}</p>
              <h2 className={`font-display mt-5 text-3xl font-light leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
                p.dark ? "text-white" : "text-navy-900"
              }`}>
                {p.title}
              </h2>
              <p className={`mt-6 max-w-lg text-sm leading-relaxed sm:text-base ${
                p.dark ? "text-slateblue-300" : "text-slateblue-500"
              }`}>
                {p.body}
              </p>
              <ul className="mt-8 space-y-3.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      p.dark ? "bg-royal-600/40" : "bg-royal-600/10"
                    }`}>
                      <Check className={`h-3 w-3 ${p.dark ? "text-slateblue-300" : "text-royal-600"}`} />
                    </span>
                    <span className={`text-sm ${p.dark ? "text-slateblue-300" : "text-slateblue-500"}`}>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15} y={40}>
              {p.mockup}
            </Reveal>
          </div>
        </section>
      ))}

      {/* ============ CATALOGUE FAMILIES ============ */}
      <section data-testid="services-catalogue" className="bg-mist-50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-royal-600">Full catalogue</p>
              <h2 className="font-display mt-4 max-w-lg text-4xl font-light leading-[1.08] tracking-tight text-navy-900 sm:text-5xl">
                Structure families in the builder
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slateblue-500">
              Seventy-one structures across twelve families. If the desk prices it,
              it's in the catalogue — or it's being added.
            </p>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {FAMILIES.map((f, i) => (
              <Reveal key={f} delay={0.04 * i}>
                <span
                  data-testid={`family-chip-${f.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="card-glow inline-block cursor-default rounded-full border border-slateblue-200 bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-900"
                >
                  {f}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section data-testid="services-cta" className="bg-foundry-dark relative overflow-hidden py-24 lg:py-32">
        <ParallaxLayer className="absolute inset-0 text-slateblue-500/25" distance={70}>
          <NetworkMesh className="h-full w-full" />
        </ParallaxLayer>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl">
              Run your book through it
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-slateblue-300">
              Bring a live trade to a working session and structure, price and
              execute it in Foundry.
            </p>
            <Link
              to="/contact"
              data-testid="services-cta-button"
              className="btn-sheen mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-900 hover:bg-slateblue-100"
            >
              Book a session <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
