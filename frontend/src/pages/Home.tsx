import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  ArrowRight, Play, X, Layers, Gauge, CheckCircle2, SlidersHorizontal,
  LineChart, Users2, ShieldCheck, Globe2, Radio, Lightbulb,
} from "lucide-react";
import { Reveal, ParallaxLayer, CountUp } from "@/components/motion";
import { NetworkMesh, CandlestickArt } from "@/components/NetworkMesh";
import TradeBuilderMockup from "@/components/TradeBuilderMockup";
import { HexMark } from "@/components/HexMark";

const STEPS = [
  { icon: Layers, title: "Structure", text: "Pick from 71 structures. Foundry renders only the fields that structure needs." },
  { icon: Gauge, title: "Price", text: "Live indicative pricing across connected providers, with scenario and sensitivity analysis." },
  { icon: CheckCircle2, title: "Execute", text: "Termsheet out, client approval in, ticket booked — every event sealed to the audit trail." },
];

const FEATURES = [
  { icon: SlidersHorizontal, title: "Intuitive Trade Builder", text: "A dynamic field builder shaped by the structure, not a 40-column spreadsheet." },
  { icon: LineChart, title: "Scenario & Sensitivity Analysis", text: "Reprice across spot, vol and time grids before the client ever asks." },
  { icon: Users2, title: "Multi-Provider Pricing", text: "Compare LP premium and margin side by side, on the same ticket." },
  { icon: ShieldCheck, title: "Governance & Control", text: "Ticket-numbered execution with a hash-chained, tamper-evident audit trail." },
  { icon: Globe2, title: "Cloud Native SaaS", text: "No install, no terminal lease. The desk workbench, delivered as a service." },
];

const STRUCTURES = [
  { name: "Forward", family: "Vanilla", path: "M6 44 L74 14" },
  { name: "Collar", family: "Vanilla", path: "M6 40 L26 40 L54 18 L74 18" },
  { name: "Seagull", family: "Vanilla", path: "M6 42 L24 42 L48 20 L60 20 L74 30" },
  { name: "Knock-In Barrier", family: "Barrier", path: "M6 44 L40 44 L40 30 L74 12", barrier: 40 },
  { name: "Knock-Out Barrier", family: "Barrier", path: "M6 44 L44 20 M44 20 L44 8", barrier: 44 },
  { name: "TARF", family: "Accumulator", path: "M6 44 L22 44 L22 36 L38 36 L38 28 L54 28 L54 20 L74 20" },
];

const STATS = [
  { value: 71, suffix: "", label: "Structures supported" },
  { value: 14, suffix: "", label: "Providers integrated" },
  { value: 100, suffix: "%", label: "Trade events hash-sealed" },
  { value: 40, suffix: "+", label: "Currency pairs" },
];

const TRUST = [
  { icon: Globe2, title: "Global Reach", text: "Desks across London, Singapore and New York on one shared book of work." },
  { icon: Radio, title: "Real-Time Data", text: "Live rates and vol surfaces feed every price the builder shows." },
  { icon: Lightbulb, title: "Intelligent Insights", text: "Scenario analytics surface the trade-offs before you quote." },
  { icon: ShieldCheck, title: "Security First", text: "Hash-chained audit trail and role-based access as standard." },
  { icon: Users2, title: "Built for Teams", text: "Sales, trading and middle office work the same ticket, end to end." },
];

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <>
      {/* ============ HERO ============ */}
      <section ref={heroRef} data-testid="hero-section" className="bg-foundry-dark relative overflow-hidden">
        <motion.div style={{ y: meshY }} className="absolute inset-0 text-slateblue-500/30">
          <NetworkMesh className="h-full w-full" />
        </motion.div>
        <ParallaxLayer className="absolute bottom-0 left-0 w-2/3 text-white/[0.06]" distance={60}>
          <CandlestickArt className="h-64 w-full" />
        </ParallaxLayer>
        <div className="pointer-events-none absolute -left-40 top-24 text-white/[0.05]">
          <HexMark className="h-[420px] w-[420px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-40 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-48">
          <div>
            <Reveal testId="hero-eyebrow">
              <p className="eyebrow flex items-center gap-3 text-slateblue-400">
                <span className="h-px w-10 bg-slateblue-500/60" />
                Introducing
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-6xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[6.5rem]">
                FOUNDRY
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="font-display mt-5 text-2xl font-light italic text-slateblue-300 sm:text-3xl">
                Build. Refine. Execute.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-slateblue-300/90">
                The structured FX trade builder for institutional sales desks.
                Seventy-one structures, live multi-provider pricing and a
                hash-chained audit trail — one workbench, from first indicative
                to booked ticket.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  data-testid="hero-explore-button"
                  className="btn-sheen inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-900 hover:bg-slateblue-100"
                >
                  Explore Foundry
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => setVideoOpen(true)}
                  data-testid="hero-watch-video-button"
                  className="btn-sheen inline-flex items-center gap-3 rounded-full border border-slateblue-400/50 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white hover:border-white hover:bg-white/5"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Watch Video
                </button>
              </div>
            </Reveal>
          </div>

          <motion.div
            style={{ y: mockupY, rotate: -3 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0 }}
            className="relative"
          >
            <TradeBuilderMockup />
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-royal-600/25 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section data-testid="how-it-works" className="relative bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-royal-600">How it works</p>
            <h2 className="font-display mt-4 max-w-xl text-4xl font-light leading-[1.08] tracking-tight text-navy-900 sm:text-5xl">
              From idea to executed ticket in three moves
            </h2>
          </Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="absolute left-0 right-0 top-8 hidden border-t border-dashed border-slateblue-300 md:block" aria-hidden="true" />
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={0.09 * i} testId={`step-${s.title.toLowerCase()}`}>
                <div className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-slateblue-200 bg-white shadow-sm">
                    <s.icon className="h-6 w-6 text-royal-600" />
                    <span className="font-display absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-[11px] font-semibold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-normal text-navy-900">{s.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-slateblue-500">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section data-testid="features-section" className="bg-foundry-dark-soft relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute -bottom-32 -right-32 text-white/[0.05]">
          <HexMark className="h-[460px] w-[460px]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <p className="eyebrow text-slateblue-400">Capabilities</p>
              <h2 className="font-display mt-4 text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl">
                Everything you need to build better trades
              </h2>
            </Reveal>
            <div className="mt-12 space-y-8">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={0.07 * i} testId={`feature-${f.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                  <div className="group flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slateblue-500/30 bg-white/[0.04] transition-colors duration-300 group-hover:border-slateblue-400/70">
                      <f.icon className="h-5 w-5 text-slateblue-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{f.title}</h3>
                      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-slateblue-400">{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} y={40}>
            {/* PLACEHOLDER: stacked product panels — swap with real screenshots */}
            <div className="relative" data-placeholder="product-panels: scenario-provider-summary">
              <TradeBuilderMockup compact />
              <div className="absolute -bottom-8 -left-8 hidden w-64 rotate-[2deg] rounded-xl border border-white/15 bg-navy-950/95 p-4 shadow-2xl lg:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slateblue-400">Sensitivity · Δ Spot +2%</p>
                <div className="mt-3 space-y-2">
                  {[["Cap value", "+0.34%"], ["Floor value", "0.00%"], ["Vega", "− USD 41k"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-[11px]">
                      <span className="text-slateblue-400">{k}</span>
                      <span className="font-semibold text-white">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CATALOGUE ============ */}
      <section data-testid="catalogue-section" className="bg-mist-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-royal-600">Product catalogue</p>
              <h2 className="font-display mt-4 max-w-lg text-4xl font-light leading-[1.08] tracking-tight text-navy-900 sm:text-5xl">
                Seventy-one structures, field-ready
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slateblue-500">
              Vanillas, barriers, accumulators and hybrids — each with a builder that
              shows only the fields that structure needs.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {STRUCTURES.map((s, i) => (
              <Reveal key={s.name} delay={0.06 * i} testId={`structure-card-${s.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="card-glow group rounded-2xl border border-slateblue-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <svg viewBox="0 0 80 56" className="h-12 w-16 text-royal-600" fill="none" aria-hidden="true">
                      <path d={s.path} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      {s.barrier ? (
                        <line x1={s.barrier} y1="4" x2={s.barrier} y2="52" stroke="#7288AE" strokeWidth="1.2" strokeDasharray="3 4" />
                      ) : null}
                    </svg>
                    <span className="rounded-full border border-slateblue-200 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slateblue-500">
                      {s.family}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl font-normal text-navy-900">{s.name}</h3>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.06 * STRUCTURES.length}>
              <Link
                to="/services"
                data-testid="catalogue-more-tile"
                className="card-glow group flex h-full min-h-[168px] flex-col items-start justify-between rounded-2xl border border-dashed border-royal-600/50 bg-royal-600/[0.06] p-6"
              >
                <HexMark className="h-8 w-8 text-royal-600 transition-transform duration-500 group-hover:rotate-[30deg]" />
                <span>
                  <span className="font-display block text-2xl font-normal text-navy-900">+65 more structures</span>
                  <span className="mt-2 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-royal-600">
                    Full catalogue <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section data-testid="stats-strip" className="bg-foundry-dark relative overflow-hidden py-20 lg:py-24">
        <ParallaxLayer className="absolute inset-0 text-slateblue-500/20" distance={70}>
          <NetworkMesh className="h-full w-full" />
        </ParallaxLayer>
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.08 * i} testId={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="border-l border-slateblue-500/30 pl-6">
                <p className="font-display text-5xl font-light text-white lg:text-6xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slateblue-400">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ TRUST ============ */}
      <section data-testid="trust-strip" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-royal-600">Enterprise grade</p>
            <h2 className="font-display mt-4 max-w-xl text-4xl font-light leading-[1.08] tracking-tight text-navy-900 sm:text-5xl">
              Built for the desk, held to the desk's standard
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {TRUST.map((t, i) => (
              <Reveal key={t.title} delay={0.07 * i} testId={`trust-${t.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="card-glow h-full rounded-2xl border border-slateblue-200 bg-white p-6">
                  <t.icon className="h-6 w-6 text-royal-600" />
                  <h3 className="mt-5 text-sm font-semibold text-navy-900">{t.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slateblue-500">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section data-testid="final-cta" className="bg-foundry-dark relative overflow-hidden py-28 lg:py-36">
        <ParallaxLayer className="absolute inset-0 text-slateblue-500/25" distance={80}>
          <NetworkMesh className="h-full w-full" />
        </ParallaxLayer>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <HexMark className="mx-auto h-12 w-12 text-slateblue-400" />
            <h2 className="font-display mt-8 text-4xl font-light leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
              See Foundry in action
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-slateblue-300">
              A working session with your pairs, your providers and your book —
              live in under an hour.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                data-testid="cta-request-button"
                className="btn-sheen inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-900 hover:bg-slateblue-100"
              >
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ VIDEO MODAL (placeholder) ============ */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            data-testid="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                data-testid="video-modal-close"
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
              {/* PLACEHOLDER: product walkthrough video embed */}
              <div
                data-placeholder="video: foundry-product-walkthrough"
                className="grain relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-foundry-dark"
              >
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/40 text-white">
                    <Play className="h-6 w-6 fill-current" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-slateblue-400">
                    Product film — coming soon
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
