import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { MeshCanvas } from "@/components/MeshCanvas";
import { HexMark } from "@/components/HexMark";
import { BrowserFrame, TradeBuilderMock } from "@/components/mockups";
import { PORTAL_URL } from "@/components/Nav";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Login placeholder — real authentication lives on the client portal.
   This screen only hands off to foundryfx.org/syfx/portal/. */
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = PORTAL_URL;
  };

  return (
    <div data-testid="login-page" className="grid min-h-screen lg:grid-cols-[1.25fr_1fr]">
      {/* ---- Left: floating dashboard showcase ---- */}
      <section className="bg-hero-dark relative hidden overflow-hidden lg:block">
        <MeshCanvas className="absolute inset-0 h-full w-full" />
        <div className="noise" />
        <HexMark className="pointer-events-none absolute -left-16 bottom-16 h-64 w-64 text-white/[0.05]" strokeWidth={1} />
        <div className="absolute -inset-x-10 top-1/2 -translate-y-1/2 bg-royal-600/30 blur-[130px]" style={{ height: "55%" }} aria-hidden="true" />

        <div className="relative z-10 flex h-full flex-col px-12 py-10 xl:px-16">
          <Link to="/" data-testid="login-logo" className="flex items-center gap-2.5">
            <HexMark className="h-7 w-7 text-white" strokeWidth={2} />
            <span className="leading-none">
              <span className="font-display block text-[15px] font-semibold tracking-[0.18em] text-white">
                FOUNDRY
              </span>
              <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.34em] text-slateblue-500">
                FX Structure Platform
              </span>
            </span>
          </Link>

          <div className="flex flex-1 items-center">
            <motion.div
              initial={{ opacity: 0, y: 48, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
              className="relative w-full max-w-2xl"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "perspective(1600px) rotateY(-8deg) rotateX(4deg)" }}
              >
                <BrowserFrame url="foundryfx.org/syfx/portal/" comment="placeholder: login showcase panel — swap for production screenshot">
                  <TradeBuilderMock />
                </BrowserFrame>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative z-10 flex items-center gap-8">
            {[
              ["71", "Structures"],
              ["15", "Providers"],
              ["100%", "Events sealed"],
            ].map(([v, l]) => (
              <div key={l} className="border-l border-white/15 pl-4">
                <p className="font-display text-2xl text-white">{v}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-slateblue-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Right: login placeholder ---- */}
      <section className="relative flex min-h-screen items-center justify-center bg-white px-6 py-16">
        <Link
          to="/"
          data-testid="login-back-link"
          className="absolute left-6 top-6 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-slateblue-500 transition-colors hover:text-navy-900 lg:left-10 lg:top-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to site
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="w-full max-w-sm"
        >
          <HexMark className="h-10 w-10 text-navy-900" strokeWidth={2} />
          <p className="eyebrow mt-8 text-slateblue-500">Client portal</p>
          <h1 className="font-display mt-3 text-3xl tracking-tight text-navy-900 sm:text-4xl">
            Sign in to Foundry.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-navy-900/60">
            Authentication runs on the trade-builder portal. This screen hands
            you off to it.
          </p>

          {/* PLACEHOLDER: visual only — no credentials are processed here */}
          <form data-testid="login-form" onSubmit={submit} className="mt-10 space-y-7" data-placeholder="login-form-placeholder">
            <div>
              <label htmlFor="login-email" className="block text-[10px] font-medium uppercase tracking-[0.25em] text-slateblue-500">
                Email
              </label>
              <input
                id="login-email"
                data-testid="login-input-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@bank.com"
                className="mt-1 w-full border-b border-navy-900/20 bg-transparent py-2.5 text-sm text-navy-900 outline-none transition-colors duration-300 placeholder:text-slateblue-400/70 focus:border-royal-600"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-[10px] font-medium uppercase tracking-[0.25em] text-slateblue-500">
                Password
              </label>
              <input
                id="login-password"
                data-testid="login-input-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1 w-full border-b border-navy-900/20 bg-transparent py-2.5 text-sm text-navy-900 outline-none transition-colors duration-300 placeholder:text-slateblue-400/70 focus:border-royal-600"
              />
            </div>
            <button type="submit" data-testid="login-submit-button" className="btn-primary-dark w-full justify-center">
              Continue to portal <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-8 flex items-start gap-2.5 rounded-lg border border-slateblue-200 bg-mist-50 px-4 py-3.5">
            <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-royal-600" />
            <p className="text-xs leading-relaxed text-navy-900/60">
              Need access?{" "}
              <Link to="/contact" data-testid="login-contact-link" className="font-medium text-navy-900 underline decoration-slateblue-300 underline-offset-4 hover:decoration-navy-900">
                Talk to the team
              </Link>{" "}
              — accounts are provisioned per desk.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
