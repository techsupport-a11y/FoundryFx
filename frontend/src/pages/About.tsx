import { Reveal, RevealLine, ParallaxLayer } from "@/components/motion";
import { MeshCanvas } from "@/components/MeshCanvas";
import { HexMark } from "@/components/HexMark";
import FinalCta from "@/components/FinalCta";
import { AuditChain } from "@/components/mockups";

const VALUES = [
  { n: "01", title: "Precision", text: "Every number traces to a rate and a timestamp." },
  { n: "02", title: "Control", text: "Approvals, limits and roles are enforced, not suggested." },
  { n: "03", title: "Craft", text: "Built by people who have run the desk it serves." },
  { n: "04", title: "Candour", text: "No hype. The specifics speak." },
];

function SectionRail({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.3em] text-slateblue-500">{n}</p>
      <p className="eyebrow mt-3 text-slateblue-500">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section data-testid="about-header" className="bg-hero-dark relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-52">
        <ParallaxLayer className="absolute -inset-y-20 inset-x-0" distance={80}>
          <MeshCanvas className="h-full w-full" />
        </ParallaxLayer>
        <div className="noise" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-slateblue-500">About Foundry</p>
          </Reveal>
          <h1 className="font-display mt-6 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            <RevealLine delay={0.15} className="text-white">One workbench.</RevealLine>
            <RevealLine delay={0.3} className="text-slateblue-400">No spreadsheets.</RevealLine>
          </h1>
          <Reveal delay={0.45}>
            <p className="mt-7 max-w-md text-base leading-relaxed text-slateblue-400">
              Foundry is built by SwitchYard Capital for the desks that structure,
              price and execute FX products every day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 01 THE PROBLEM ============ */}
      <section data-testid="about-problem" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-8">
          <Reveal>
            <SectionRail n="01" label="The problem" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl tracking-tight text-navy-900 sm:text-4xl">
              Structured products still run on email.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-900/60">
              A collar gets priced in a spreadsheet, quoted in a chat window,
              termsheeted over email and booked by hand. The record of who priced
              what, when, and at which rate lives in someone's inbox.
            </p>
            <p className="font-display mt-8 max-w-xl border-l-2 border-royal-600 pl-5 text-lg leading-relaxed text-navy-900">
              Every hand-off re-keys the same numbers. Every re-key is a chance to
              get them wrong.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 02 THE WORKBENCH ============ */}
      <section data-testid="about-workbench" className="border-t border-slateblue-100 bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-8">
          <Reveal>
            <SectionRail n="02" label="The workbench" />
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl tracking-tight text-navy-900 sm:text-4xl">
                One screen from structure to execution.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-900/60">
                Foundry replaces the chain with a single workbench. Structure the
                deal, watch it reprice across providers, send the termsheet and
                capture approval — without leaving the trade. It is built by
                SwitchYard Capital, a firm that runs on the same infrastructure it
                ships.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              {/* PLACEHOLDER: workbench visual — swap for product photography/screenshot */}
              <div
                data-placeholder="workbench-visual"
                className="grain bg-hero-dark relative mt-12 flex h-64 items-center justify-center overflow-hidden rounded-2xl lg:h-80"
              >
                <HexMark className="h-14 w-14 text-white/40" strokeWidth={1.4} />
                <p className="absolute bottom-5 left-6 font-mono text-[9px] uppercase tracking-[0.3em] text-slateblue-400">
                  Workbench — placeholder visual
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section data-testid="about-mission" className="bg-strip-dark relative overflow-hidden py-24 lg:py-32">
        <HexMark className="pointer-events-none absolute -left-10 top-10 h-52 w-52 text-white/5" strokeWidth={1} />
        <div className="noise" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-slateblue-500">Mission</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display mt-8 max-w-3xl text-3xl leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
              Give every FX sales desk the structuring, pricing and audit
              infrastructure of a top-tier institution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 03 THE RECORD ============ */}
      <section data-testid="about-record" className="bg-strip-dark relative overflow-hidden border-t border-white/10 py-24 lg:py-32">
        <div className="noise" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-8">
          <Reveal>
            <SectionRail n="03" label="The record" />
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Every event, sealed.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-slateblue-400">
                The FX Engine writes each rate, quote, edit and approval into a
                hash-chained audit trail. Each record seals the one before it;
                alter any event and the chain breaks. Tampering isn't just logged —
                it's evident.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-12">
              <AuditChain />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section data-testid="about-values" className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-slateblue-500">Values</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-navy-900 sm:text-4xl">
              What the desk can hold us to.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slateblue-300/40 bg-slateblue-300/40 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v) => (
                <div
                  key={v.n}
                  data-testid={`value-${v.title.toLowerCase()}`}
                  className="group bg-white p-7 transition-colors duration-500 hover:bg-mist-50"
                >
                  <p className="font-mono text-[10px] tracking-[0.3em] text-slateblue-500">{v.n}</p>
                  <h3 className="font-display mt-4 text-lg text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-900/60">{v.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
