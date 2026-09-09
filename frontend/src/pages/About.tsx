import { Reveal, RevealLine, ParallaxLayer } from "@/components/motion";
import { MeshCanvas } from "@/components/MeshCanvas";
import { HexMark } from "@/components/HexMark";
import FinalCta from "@/components/FinalCta";
import { TradeFlowWheel } from "@/components/mockups";

const VALUES = [
  { n: "01", title: "Built for FX", text: "Make complex structured FX products simpler to build, sell and execute." },
  { n: "02", title: "Focused on People", text: "Give teams the tools and visibility to spend more time with clients and less time on administration." },
  { n: "03", title: "Designed for Efficiency", text: "Scale structured FX with greater productivity, control and operational efficiency — without unnecessary complexity." },
  { n: "04", title: "Simple for Clients", text: "Make complex FX solutions easier to understand, approve and transact — creating a clearer path from opportunity to execution." },
];

/* Brand-tinted image block — swap src for final photography (data-placeholder marks it). */
function BrandImage({
  src,
  alt,
  placeholder,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  placeholder: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      data-placeholder={placeholder}
      className={`group relative overflow-hidden rounded-2xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-navy-900/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
      {caption ? (
        <p className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.28em] text-slateblue-200">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

function SectionRail({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.3em] text-slateblue-500">{n}</p>
      <p className="eyebrow mt-2.5 text-slateblue-500">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section data-testid="about-header" className="bg-hero-dark relative overflow-hidden pb-16 pt-36 lg:pb-20 lg:pt-44">
        <ParallaxLayer className="absolute -inset-y-20 inset-x-0" distance={80}>
          <MeshCanvas className="h-full w-full" />
        </ParallaxLayer>
        <div className="noise" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-slateblue-500">About Foundry</p>
          </Reveal>
          <h1 className="font-display mt-5 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            <RevealLine delay={0.15} className="text-white">One workbench.</RevealLine>
            <RevealLine delay={0.3} className="text-slateblue-400">Scale the opportunity.</RevealLine>
          </h1>
          <Reveal delay={0.45}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slateblue-400">
              FOUNDRY transforms the economics of FX Structured sales, enabling teams to
              develop and distribute more solutions, manage a larger deal pipeline and
              generate more revenue without increasing operational complexity.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slateblue-400">
              By simplifying the client experience and streamlining the journey from
              structure to execution, FOUNDRY allows sales teams to spend less time
              managing process and more time creating opportunities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 01 THE PROBLEM ============ */}
      <section data-testid="about-problem" className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.5fr_1.15fr_1fr] lg:gap-14 lg:px-8">
          <Reveal>
            <SectionRail n="01" label="The problem" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl tracking-tight text-navy-900 sm:text-4xl">
              FX structured products are still fragmented and stakeholder intensive.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-navy-900/60">
              A single structured FX trade can pass through spreadsheets, pricing
              systems, chat, email and booking platforms — involving sales, traders,
              structurers, risk and operations just to turn an idea into a solution a
              client can understand and buy.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-900/60">
              The same trade is re-keyed, re-priced and re-checked at every hand-off.
              Pricing, terms, approvals and execution sit across multiple systems and
              multiple people, while the audit trail is pieced together after the fact.
            </p>
            <p className="font-display mt-6 border-l-2 border-royal-600 pl-5 text-lg leading-relaxed text-navy-900">
              More systems. More hand-offs. More manual processes. More room for error.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-900/60">
              Foundry brings the process together in one workbench — from structure and
              pricing through to client-ready terms and execution, with a single, sealed
              record of the trade end to end.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <BrandImage
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
              alt="FX market data on trading screens"
              placeholder="photo: fx-trading-screens"
              caption="FX market data — live desk screens"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ 02 THE WORKBENCH ============ */}
      <section data-testid="about-workbench" className="border-t border-slateblue-100 bg-mist-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.5fr_1fr_1.15fr] lg:gap-14 lg:px-8">
          <Reveal>
            <SectionRail n="02" label="The workbench" />
          </Reveal>
          <Reveal delay={0.15}>
            <BrandImage
              src="https://images.unsplash.com/photo-1707761918029-1295034aa31e?auto=format&fit=crop&w=1200&q=80"
              alt="Trading application interface on screen"
              placeholder="photo: workbench-ui"
              caption="Workbench — swap for product photography"
              className="aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl tracking-tight text-navy-900 sm:text-4xl">
              One screen from structure to execution.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-navy-900/60">
              Foundry replaces the fragmented chain with a single workbench. Structure
              the deal, price it, generate branded, compliant, client ready trade sheet,
              manage approvals and execute, without leaving the trade.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-900/60">
              Every step stays connected, creating a single, sealed record from initial
              structure through to execution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section data-testid="about-mission" className="bg-strip-dark relative overflow-hidden py-20 lg:py-24">
        <HexMark className="pointer-events-none absolute -left-10 top-8 h-48 w-48 text-white/5" strokeWidth={1} />
        <div className="noise" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.5fr_2.15fr] lg:gap-14 lg:px-8">
          <Reveal>
            <p className="eyebrow text-slateblue-500">Mission</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display max-w-3xl text-2xl leading-[1.25] tracking-tight text-white sm:text-3xl lg:text-4xl">
              Scale structured FX sales. Increase revenue.
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slateblue-400">
              Foundry gives organistaions the infrastructure to develop more solutions,
              serve more clients and turn more opportunities into revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 03 THE RECORD ============ */}
      <section data-testid="about-record" className="bg-strip-dark relative overflow-hidden border-t border-white/10 py-16 lg:py-20">
        <div className="noise" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-[0.5fr_2.15fr] lg:gap-14">
            <Reveal>
              <SectionRail n="03" label="The record" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Every step, sealed.
              </h2>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.5fr_2.15fr] lg:gap-14">
            <div className="hidden lg:block" />
            <Reveal delay={0.15}>
              <p className="max-w-xl text-[15px] leading-relaxed text-slateblue-400">
                Every material action is recorded and cryptographically linked, creating
                a permanent, evident record across the trade lifecycle.
              </p>
              <div className="mt-10">
                <TradeFlowWheel />
              </div>
              <p className="mt-16 max-w-xl text-[15px] leading-relaxed text-slateblue-400">
                Nothing gets lost between systems, people or processes, and the complete
                history of the trade remains verifiable from start to finish.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section data-testid="about-values" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[0.5fr_2.15fr] lg:gap-14">
            <Reveal>
              <p className="eyebrow text-slateblue-500">Values</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-3xl tracking-tight text-navy-900 sm:text-4xl">
                Built from experience, for the industry.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slateblue-300/40 bg-slateblue-300/40 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v) => (
                <div
                  key={v.n}
                  data-testid={`value-${v.title.toLowerCase()}`}
                  className="group bg-white p-6 transition-colors duration-500 hover:bg-mist-50"
                >
                  <p className="font-mono text-[10px] tracking-[0.3em] text-slateblue-500">{v.n}</p>
                  <h3 className="font-display mt-3.5 text-lg text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-900/60">{v.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ BUILT FOR ============ */}
      <section data-testid="about-built-for" className="border-t border-slateblue-100 bg-mist-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[0.5fr_2.15fr] lg:gap-14">
            <Reveal>
              <p className="eyebrow text-slateblue-500">Built for</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-3xl tracking-tight text-navy-900 sm:text-4xl">
                Market Participants
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="mt-6 grid gap-10 lg:grid-cols-[0.5fr_2.15fr] lg:gap-14">
              <div className="hidden lg:block" />
              <p className="max-w-2xl text-[15px] leading-relaxed text-navy-900/60">
                Foundry enhances the FX Sales process of many market participants,
                adaptable to different business models, organisational structures, team
                sizes and technology environments, from established institutions to lean
                specialist firms.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 grid gap-10 lg:grid-cols-[0.5fr_2.15fr] lg:gap-14">
              <div className="hidden lg:block" />
              <div className="flex flex-wrap gap-3">
                {["Banks", "Non-Bank Brokers", "FX Boutiques", "Advisory Firms", "Payment & Treasury Providers", "Corporate FX Teams"].map((p) => (
                  <span
                    key={p}
                    data-testid={`participant-${p.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-full border border-slateblue-300/50 bg-white px-4 py-2 text-xs font-medium text-navy-900 transition-colors duration-300 hover:border-royal-600/60"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
