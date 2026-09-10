import { Check } from "lucide-react";
import { Reveal, RevealLine, ParallaxLayer } from "@/components/motion";
import { MeshCanvas } from "@/components/MeshCanvas";
import FinalCta from "@/components/FinalCta";
import { FieldBuilderMock, SensitivityMock, ExecutionMock, ReportingMock } from "@/components/mockups";

const PILLARS = [
  {
    n: "01",
    id: "deal-structuring",
    eyebrow: "Deal Structuring",
    title: "Seventy-one structures. Zero clutter.",
    body: "The catalogue covers the structures a desk actually trades — forwards, participation, barriers, TARFs, accumulators etc. A dynamic field builder renders only the inputs each structure needs.",
    bullets: [
      "71-structure catalogue, forwards to TARFs",
      "Dynamic field builder — only relevant inputs",
      "Payoff preview redraws as you type",
    ],
    mockup: <FieldBuilderMock />,
    flip: false,
  },
  {
    n: "02",
    id: "live-pricing",
    eyebrow: "Live Pricing & Risk",
    title: "Refined on every keystroke.",
    body: "LP Connected to price the structure live. Engineer your desired LP premium or notional margin %, then review the workings of your trades risk before you commit.",
    bullets: [
      "Refinement on every input change",
      "LP premium vs margin toggle",
      "Trade Dynamics with sensitivity ladder across spot outcomes",
    ],
    mockup: <SensitivityMock />,
    flip: true,
  },
  {
    n: "03",
    id: "execution-audit",
    eyebrow: "Execution & Audit Trail",
    title: "From approval to ticket, logged.",
    body: "The termsheet goes out from the trade itself. The client approves through a secure link, execution gets a ticket number, and every event lands in a hash-chained journal.",
    bullets: [
      "Termsheet email generated from the trade",
      "Secure client approval link",
      "Ticket-numbered execution",
      "Auto-logged, hash-chained trade journal",
    ],
    mockup: <ExecutionMock />,
    flip: false,
  },
  {
    n: "04",
    id: "managing-reporting",
    eyebrow: "Managing & Reporting",
    title: "From activity to actionable insights.",
    body: "Track the full lifecycle of your book in real time. Monitor opportunities, stay on top of open deals, and manage outcomes and performance across clients, currencies and products — turning every data point into a clear action and measurable return.",
    bullets: [
      "Live opportunity and pipeline tracking",
      "Follow-up on open opportunities",
      "Expiry and deal performance monitoring",
      "Client, product and currency-level analytics",
      "Revenue and ROI insights across your book",
    ],
    mockup: <ReportingMock />,
    flip: true,
  },
];

export default function Services() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section data-testid="services-header" className="bg-hero-dark relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-52">
        <ParallaxLayer className="absolute -inset-y-20 inset-x-0" distance={80}>
          <MeshCanvas className="h-full w-full" />
        </ParallaxLayer>
        <div className="noise" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-slateblue-500">Services</p>
          </Reveal>
          <h1 className="font-display mt-6 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            <RevealLine delay={0.15} className="text-white">Four Foundations.</RevealLine>
            <RevealLine delay={0.3} className="text-slateblue-400">One Platform.</RevealLine>
          </h1>
          <Reveal delay={0.45}>
            <p className="mt-7 max-w-md text-base leading-relaxed text-slateblue-400">
              Foundry covers the full life of a structured trade — from first
              sketch to sealed record.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      {PILLARS.map((p, i) => (
        <section
          key={p.id}
          data-testid={`pillar-${p.id}`}
          className={`bg-white py-16 lg:py-24 ${i > 0 ? "border-t border-slateblue-100" : ""}`}
        >
          <div
            className={`mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8 ${
              p.flip ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal delay={0.15} y={44}>
              {p.mockup}
            </Reveal>
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-slateblue-500">{p.n}</span>
                <p className="eyebrow text-slateblue-500">{p.eyebrow}</p>
              </div>
              <h2 className="font-display mt-5 text-3xl tracking-tight text-navy-900 sm:text-4xl">
                {p.title}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-900/60">
                {p.body}
              </p>
              <ul className="mt-8 space-y-3.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-royal-600" strokeWidth={2} />
                    <span className="text-sm text-navy-900/80">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ============ DESK BAND ============ */}
      <section data-testid="services-desk-band" className="bg-white pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            {/* PLACEHOLDER: desk photography — swap for real Foundry desk shots */}
            <div data-placeholder="photo: pricing-desk" className="group relative aspect-[21/9] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?auto=format&fit=crop&w=2000&q=80"
                alt="Live market charts on a pricing desk"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 font-mono text-[9px] uppercase tracking-[0.28em] text-slateblue-200">
                Live pricing — provider by provider
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
