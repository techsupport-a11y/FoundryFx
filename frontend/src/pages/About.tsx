import { Link } from "react-router-dom";
import { ArrowRight, Crosshair, FileCheck2, Hammer } from "lucide-react";
import { Reveal, ParallaxLayer } from "@/components/motion";
import { NetworkMesh } from "@/components/NetworkMesh";
import { HexMark } from "@/components/HexMark";

const VALUES = [
  { icon: Crosshair, title: "Precision", text: "Every number on screen is one you would put your name to on a call." },
  { icon: FileCheck2, title: "Accountability", text: "Every structure, price and approval is sealed to a record that cannot be quietly rewritten." },
  { icon: Hammer, title: "Craft", text: "Tools built by people who have run the process, for people who run it daily." },
];

const TEAM = [
  { initials: "SC", role: "Founding Partner" },
  { initials: "FX", role: "Head of Platform" },
  { initials: "QR", role: "Head of Engineering" },
  { initials: "MD", role: "Client Coverage" },
];

const CHAIN = [
  { step: "Structure", hash: "9f2c…a41e" },
  { step: "Price", hash: "77b0…d3c9" },
  { step: "Approve", hash: "e518…0f6b" },
  { step: "Execute", hash: "c4d2…98aa" },
];

export default function About() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section data-testid="about-header" className="bg-foundry-dark relative overflow-hidden pb-20 pt-40 lg:pb-28 lg:pt-52">
        <ParallaxLayer className="absolute inset-0 text-slateblue-500/25" distance={80}>
          <NetworkMesh className="h-full w-full" />
        </ParallaxLayer>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-slateblue-400">
              <span className="h-px w-10 bg-slateblue-500/60" />
              About Foundry
            </p>
            <h1 className="font-display mt-6 max-w-3xl text-4xl font-light leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Spreadsheets price trades.
              <span className="italic text-slateblue-300"> They don't run a desk.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section data-testid="about-story" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <Reveal>
            <p className="eyebrow text-royal-600">The story</p>
            <h2 className="font-display mt-4 text-3xl font-light leading-[1.12] tracking-tight text-navy-900 sm:text-4xl">
              Built inside SwitchYard Capital, for the desks we work with
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="space-y-6 text-base leading-relaxed text-slateblue-500">
              <p>
                Structured FX trades still live in a chain of spreadsheets, pricing
                calls and email threads. Terms get re-keyed, versions drift, and the
                record of who agreed to what sits in an inbox.
              </p>
              <p>
                SwitchYard Capital built Foundry to replace that chain with a single
                workbench: a trade builder that knows seventy-one structures, prices
                them live against connected providers, and carries each trade from
                first indicative to booked ticket — with the full history sealed
                behind it.
              </p>
              <p>
                The platform runs the FX Engine's hash-chained audit trail under the
                hood, so the desk's record of every rate, approval and execution is
                tamper-evident by construction, not by policy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section data-testid="about-mission" className="bg-foundry-dark-soft relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-28 -top-28 text-white/[0.05]">
          <HexMark className="h-[380px] w-[380px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <p className="eyebrow text-slateblue-400">Mission</p>
            <p className="font-display mt-8 text-3xl font-light leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
              "Give every FX sales desk the structuring power of an exotics
              quant library, the pricing speed of a market maker, and an audit
              record that answers questions
              <span className="italic text-slateblue-300"> before they're asked."</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ VALUES + TEAM ============ */}
      <section data-testid="about-values" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-royal-600">How we work</p>
            <h2 className="font-display mt-4 max-w-lg text-4xl font-light leading-[1.08] tracking-tight text-navy-900 sm:text-5xl">
              Three values, held tightly
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i} testId={`value-${v.title.toLowerCase()}`}>
                <div className="card-glow h-full rounded-2xl border border-slateblue-200 bg-white p-8">
                  <v.icon className="h-6 w-6 text-royal-600" />
                  <h3 className="font-display mt-6 text-2xl font-normal text-navy-900">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slateblue-500">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {TEAM.map((t, i) => (
              <Reveal key={t.initials} delay={0.06 * i} testId={`team-${t.initials.toLowerCase()}`}>
                {/* PLACEHOLDER: team headshot — swap with photography */}
                <div data-placeholder="team-headshot" className="group">
                  <div className="grain relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-royal-600">
                    <span className="font-display text-4xl font-light text-white/70">{t.initials}</span>
                    <div className="absolute inset-0 border border-white/10 rounded-2xl transition-colors duration-300 group-hover:border-slateblue-400/50" />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-900">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AUDIT TRAIL ============ */}
      <section data-testid="audit-trail-section" className="bg-foundry-dark relative overflow-hidden py-24 lg:py-32">
        <ParallaxLayer className="absolute inset-0 text-slateblue-500/15" distance={60}>
          <NetworkMesh className="h-full w-full" />
        </ParallaxLayer>
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow text-slateblue-400">The FX Engine</p>
            <h2 className="font-display mt-4 text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl">
              An audit trail that cannot be quietly rewritten
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-slateblue-300">
              <p>
                Every event in a trade's life — the structure as built, each rate
                shown, the client's approval, the executed ticket — is sealed into a
                hash-chained record. Each entry carries the fingerprint of the one
                before it.
              </p>
              <p>
                Rates are sealed at the moment they're quoted. Change any historical
                entry and every link downstream of it breaks — so compliance,
                clients and counterparties can verify the record independently
                instead of taking it on trust.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            {/* PLACEHOLDER: audit-trail diagram — swap with motion graphic */}
            <div data-placeholder="diagram: hash-chain" className="rounded-2xl border border-white/10 bg-navy-950/60 p-8 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slateblue-400">
                Trade lifecycle · hash-chained
              </p>
              <div className="mt-8 space-y-0">
                {CHAIN.map((c, i) => (
                  <div key={c.step} className="relative flex items-center gap-5 pb-8 last:pb-0">
                    {i < CHAIN.length - 1 ? (
                      <div className="absolute left-6 top-14 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-slateblue-400/60 to-slateblue-500/20" aria-hidden="true" />
                    ) : null}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slateblue-500/40 bg-navy-900 text-slateblue-300">
                      <HexMark className="h-6 w-6" />
                    </div>
                    <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">{c.step}</p>
                        <p className="font-mono text-[10px] tracking-wider text-slateblue-400">#{c.hash}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-slateblue-500">
                Each block embeds the hash of its predecessor. One altered rate
                invalidates the chain — visible to anyone who checks.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PHOTO BLOCK + CTA ============ */}
      <section data-testid="about-photo-cta" className="relative">
        {/* PLACEHOLDER: full-bleed photography — swap with desk/office imagery */}
        <div data-placeholder="photo: trading-desk" className="grain relative h-[380px] overflow-hidden lg:h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1519748174344-16e5d53bda7a?auto=format&fit=crop&w=2000&q=80"
            alt="Financial district architecture"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-navy-900/55" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <Reveal className="text-center">
              <p className="eyebrow text-slateblue-300">SwitchYard Capital</p>
              <p className="font-display mx-auto mt-4 max-w-2xl text-3xl font-light leading-snug text-white sm:text-4xl">
                The desk that builds its own tools
              </p>
              <Link
                to="/contact"
                data-testid="about-cta-button"
                className="btn-sheen mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-900 hover:bg-slateblue-100"
              >
                Talk to us <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
