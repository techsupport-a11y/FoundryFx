import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowUpRight, Play, X, Sparkles, LineChart, Layers,
  ShieldCheck, Cloud, Workflow, Gauge, CheckCircle2,
  Globe, TrendingUp, Users,
} from "lucide-react";
import { Reveal, RevealLine, CountUp, ParallaxLayer } from "@/components/motion";

import { MeshCanvas } from "@/components/MeshCanvas";
import { CandleArt } from "@/components/CandleArt";
import { HexMark } from "@/components/HexMark";
import { Ticker } from "@/components/Ticker";
import FinalCta from "@/components/FinalCta";
import { BrowserFrame, TradeBuilderMock, ScenarioMock } from "@/components/mockups";

const HERO_DELAY = 2.0;

const STEPS = [
  {
    icon: Workflow,
    title: "Structure",
    text: "Choose from 71 structures. The field builder shows only the inputs each one needs.",
  },
  {
    icon: Gauge,
    title: "Price",
    text: "Price live across your LP's",
  },
  {
    icon: CheckCircle2,
    title: "Execute",
    text: "Send the termsheet, capture client approval and book a ticket-numbered trade. Every step sealed.",
  },
];

const FEATURES = [
  { icon: Sparkles, title: "Intuitive Trade Builder", text: "Create complex FX structures through a simple, guided workflow that shows only what's needed for each trade. Sales teams can build solutions quickly, while clients receive clear, structured outputs that make complex products easier to understand and buy." },
  { icon: LineChart, title: "Portfiolio & Pipeline Management", text: "One interface to manage your structured FX activity — from client analytics and pipeline visibility to distribution and execution. Understand client activity, prioritise opportunities and drive more revenue from a single view." },
  { icon: Layers, title: "Integrated Pricing", text: "LP premium connectivity for efficient margining" },
  { icon: ShieldCheck, title: "Governance & Control", text: "Role-based permissions, approval workflows and a sealed record of every decision." },
  { icon: Cloud, title: "Cloud Native SaaS", text: "No install, no version drift. The current build, on every desk, everywhere." },
];

const STRUCTURES = [
  { name: "Tracker", desc: "Outright protection that improves as markets advance", path: "M4 32 L60 10", guides: [] as string[] },
  { name: "Dynamic Forwards", desc: "Protection with impoved outcomes within a range", path: "M4 30 H20 L44 12 H60", guides: ["M20 4 V36", "M44 4 V36"] },
  { name: "Seagull", desc: "Three-leg structure for customised participation.", path: "M4 32 L20 24 L34 24 L46 14 L60 14", guides: ["M20 4 V36", "M46 4 V36"] },
  { name: "Knock-In Barriers", desc: "Activates only if the barrier trades.", path: "M4 30 H30 L60 8", guides: ["M30 4 V36"] },
  { name: "Knock-Out Barriers", desc: "Extinguishes if the barrier trades.", path: "M4 8 L30 30 H60", guides: ["M30 4 V36"] },
  { name: "TARF's", desc: "Target accruals variants for enhancement", path: "M4 32 H13 V27 H22 V22 H31 V17 H40 V13 H60", guides: ["M4 10 H60"] },
];

type Stat = {
  testId: string;
  label: string;
  value?: number;
  suffix?: string;
  symbol?: ReactNode;
};

const STATS: Stat[] = [
  { value: 71, suffix: "", label: "Structures Supported (Built on Demand)", testId: "stat-structures" },
  { symbol: <img src="/symbol.png" alt="" className="h-14 w-auto lg:h-20" />, label: "Customised Connectivity - Liquidity providers integrated", testId: "stat-providers" },
  { value: 100, suffix: "%", label: "Audit events hash-chained", testId: "stat-audit" },
  { value: 24, suffix: "/5", label: "Market coverage, globally", testId: "stat-coverage" },
];

const TRUST = [
  { icon: Globe, title: "Global Access", desc: "Access structured FX capabilities wherever your teams and clients operate, with a single, customisable platform designed for multi-region and jurisdiction-ready deployment." },
  { icon: Workflow, title: "Sales Streamlined", desc: "Simplify the journey from structure to client with guided education, streamlined sales workflows, pipeline visibility and execution in one connected platform." },
  { icon: TrendingUp, title: "Client Analytics", desc: "Turn client activity and portfolio data into actionable insights — identify engagement, opportunities and where to focus next." },
  { icon: ShieldCheck, title: "Security First", desc: "Secure every step of the client journey — from private delivery and secure document access to OTP verification, digital acceptance and approval." },
  { icon: Users, title: "Organisational Growth", desc: "Built to scale — supporting more clients, more opportunities and more structured FX activity without adding complexity" },
  { icon: Gauge, title: "Productivity", desc: "Reduce operational costs and manual processes while increasing productivity and structured FX capacity across the organisation." },
];

function PayoffGlyph({ path, guides }: { path: string; guides: string[] }) {
  return (
    <svg viewBox="0 0 64 40" fill="none" className="h-10 w-16 text-royal-600 transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      {guides.map((g) => (
        <path key={g} d={g} stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 3" strokeOpacity="0.45" />
      ))}
    </svg>
  );
}

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const mockY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <>
      {/* ============ HERO ============ */}
      <section ref={heroRef} data-testid="hero-section" className="bg-hero-dark relative overflow-hidden">
        <motion.div style={{ y: meshY }} className="absolute -inset-y-20 inset-x-0">
          <MeshCanvas className="h-full w-full" />
        </motion.div>
        <div className="absolute -bottom-10 -right-24 hidden w-[720px] text-slateblue-500/20 lg:block">
          <CandleArt className="h-full w-full" />
        </div>
        <HexMark className="pointer-events-none absolute -left-16 top-24 h-64 w-64 text-white/[0.04]" strokeWidth={1} />
        <div className="noise" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pb-28 pt-36 lg:grid-cols-12 lg:px-8 lg:pb-36 lg:pt-48">
          <div className="lg:col-span-6">
            <Reveal delay={HERO_DELAY} testId="hero-eyebrow">
              <p className="eyebrow text-slateblue-500">Introducing</p>
            </Reveal>
            <h1 className="font-display mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
              <RevealLine delay={HERO_DELAY + 0.15}>FOUNDRY</RevealLine>
            </h1>
            <p className="font-display mt-3 text-2xl leading-tight text-slateblue-400 sm:text-3xl">
              <RevealLine delay={HERO_DELAY + 0.3}>Discover. Create. Capture. Execute</RevealLine>
            </p>
            <Reveal delay={HERO_DELAY + 0.45}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-slateblue-400">
                Scale FX Structured Product Sales. Build more solutions, progress more opportunities and 
                convert more clients from a single workbench — with 71 client-ready structures, integrated 
                pricing connectivity and a complete end-to-end workflow.
              </p>
            </Reveal>
            <Reveal delay={HERO_DELAY + 0.6}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/services" data-testid="hero-cta-explore" className="btn-primary-light">
                  Explore Foundry <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => setVideoOpen(true)}
                  data-testid="hero-cta-video"
                  className="btn-ghost-dark"
                >
                  <Play className="h-3.5 w-3.5 fill-current" /> Watch Video
                </button>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <motion.div style={{ y: mockY }} className="relative">
              <div className="absolute -inset-10 rounded-full bg-royal-600/40 blur-[110px]" aria-hidden="true" />
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1.1, delay: HERO_DELAY + 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div style={{ transform: "perspective(1600px) rotateY(-9deg) rotateX(5deg)" }}>
                  <BrowserFrame url="foundryfx.org/syfx/portal/" comment="placeholder: hero trade-builder mockup — swap for production screenshot">
                    <TradeBuilderMock />
                  </BrowserFrame>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ STRUCTURE TICKER ============ */}
      <Ticker />

      {/* ============ HOW IT WORKS ============ */}
      <section data-testid="how-it-works" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-slateblue-500">How it works</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-navy-900 sm:text-4xl">
              Structure to ticket in three moves.
            </h2>
          </Reveal>
          <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-slateblue-200 md:block" aria-hidden="true">
              <ArrowRight className="absolute -right-1 -top-[7px] h-3.5 w-3.5 text-slateblue-300" />
            </div>
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={0.09 * i} testId={`step-${s.title.toLowerCase()}`}>
                <div className="relative">
                  <div className="flex items-center">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slateblue-200 bg-white">
                      <s.icon className="h-4 w-4 text-royal-600" />
                    </span>
                  </div>
                  <p className="font-mono mt-4 text-[11px] font-semibold tracking-[0.3em] text-slateblue-500">
                    0{i + 1}
                  </p>
                  <h3 className="font-display mt-5 text-xl text-navy-900">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy-900/60">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section data-testid="features-section" className="border-t border-slateblue-100 bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <p className="eyebrow text-slateblue-500">Desk workbench</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-3xl tracking-tight text-navy-900 sm:text-4xl">
                Everything you need to scale.
              </h2>
            </Reveal>
            <div className="mt-12 space-y-8">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={0.06 * i} testId={`feature-${f.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                  <div className="group flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slateblue-200 transition-colors duration-300 group-hover:border-royal-600/50">
                      <f.icon className="h-4 w-4 text-royal-600" />
                    </span>
                    <div>
                      <h3 className="text-sm font-medium text-navy-900">{f.title}</h3>
                      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-navy-900/60">{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} y={44}>
            <ScenarioMock />
          </Reveal>
        </div>
      </section>

      {/* ============ CATALOGUE ============ */}
      <section data-testid="catalogue-section" className="border-t border-slateblue-100 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow text-slateblue-500">Structure library</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-4 text-3xl tracking-tight text-navy-900 sm:text-4xl">
                  Seventy-one structures, one builder.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <Link
                to="/services"
                data-testid="catalogue-see-pricing-link"
                className="group inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-slateblue-500 transition-colors duration-300 hover:text-navy-900"
              >
                See how they price
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STRUCTURES.map((s, i) => (
              <Reveal key={s.name} delay={0.06 * i}>
                <div
                  data-testid={`catalogue-card-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group h-full rounded-2xl border border-navy-900/10 bg-white p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-royal-600/50 hover:shadow-[0_24px_60px_-24px_rgba(17,24,68,0.35)]"
                >
                  <PayoffGlyph path={s.path} guides={s.guides} />
                  <h3 className="font-display mt-5 text-xl text-navy-900">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.06 * STRUCTURES.length}>
              <Link
                to="/services"
                data-testid="catalogue-more-tile"
                className="group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl bg-navy-900 p-7 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(17,24,68,0.6)]"
              >
                <HexMark className="absolute -bottom-8 -right-8 h-32 w-32 text-white/5 transition-transform duration-700 group-hover:rotate-[30deg]" strokeWidth={1} />
                <span className="font-display text-4xl text-white">+65</span>
                <div className="relative flex items-end justify-between gap-4">
                  <span className="text-sm leading-relaxed text-white/70">
                    more structures in the full catalogue — accumulators, Dynamic
                    Improvers, pivots, ratio forwards
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section data-testid="stats-strip" className="bg-strip-dark relative overflow-hidden">
        <div className="noise" />
        <HexMark className="pointer-events-none absolute -right-8 top-1/2 h-72 w-72 -translate-y-1/2 text-white/5" strokeWidth={1} />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-6 py-16 lg:grid-cols-4 lg:px-8 lg:py-20">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.08 * i}>
              <div data-testid={s.testId} className="border-l border-white/15 pl-6">
                <div className="font-display text-5xl text-white lg:text-6xl">
                  {s.symbol ? s.symbol : <CountUp to={s.value ?? 0} suffix={s.suffix ?? ""} />}
                </div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-slateblue-400">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ TRUST ============ */}
      <section data-testid="trust-strip" className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <p className="eyebrow text-slateblue-500">From Boutique to Bank</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-4 max-w-2xl text-3xl tracking-tight text-navy-900 sm:text-4xl">
              Built for Growth
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slateblue-300/40 bg-slateblue-300/40 sm:grid-cols-2 lg:grid-cols-6">
              {TRUST.map((t) => (
                <div
                  key={t.title}
                  data-testid={`trust-${t.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-white p-7 transition-colors duration-500 hover:bg-mist-50"
                >
                  <t.icon className="h-5 w-5 text-royal-600 transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.5} />
                  <h3 className="mt-5 text-sm font-medium text-navy-900">{t.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-900/60">{t.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ DESK BAND ============ */}
      <section data-testid="desk-band" className="relative h-[340px] overflow-hidden lg:h-[420px]">
        <ParallaxLayer className="absolute -inset-y-16 inset-x-0" distance={50}>
          <img
            src="https://images.unsplash.com/photo-1707761918029-1295034aa31e?auto=format&fit=crop&w=2000&q=80"
            alt="Trading desk with live market charts"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="noise" />
        {/* PLACEHOLDER: desk photography — swap for real Foundry desk shots */}
        <div data-placeholder="photo: desk-in-action" className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-slateblue-300">In the wild</p>
            <p className="font-display mt-4 max-w-lg text-3xl leading-snug tracking-tight text-white sm:text-4xl">
              The desk's structuring sales day, in one solution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SCALE THE OPPORTUNITY ============ */}
      <section data-testid="scale-the-opportunity" className="border-t border-slateblue-100 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal delay={0.08}>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-navy-900 sm:text-4xl">
              Scale the opportunity
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-navy-900/60">
              FOUNDRY transforms the economics of FX Structured sales, enabling teams to develop and distribute more solutions, manage a larger deal pipeline and generate more revenue without increasing operational complexity.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-900/60">
              By simplifying the client experience and streamlining the journey from structure to execution, FOUNDRY allows sales teams to spend less time managing process and more time creating opportunities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <FinalCta />

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
              {/* PLACEHOLDER: stand-in market footage — swap src for the Foundry product film */}
              <div
                data-placeholder="video: foundry-product-walkthrough"
                className="relative aspect-video overflow-hidden rounded-2xl border border-white/15 bg-navy-950"
              >
                <video
                  data-testid="video-player"
                  className="h-full w-full object-cover"
                  src="https://videos.pexels.com/video-files/8480232/8480232-hd_1280_720_25fps.mp4"
                  poster="https://images.pexels.com/videos/8480232/pexels-photo-8480232.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.28em] text-slateblue-500">
                Stand-in footage — swap for the Foundry product film
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
