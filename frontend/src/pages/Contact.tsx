import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal, ParallaxLayer } from "@/components/motion";
import { NetworkMesh } from "@/components/NetworkMesh";
import { HexMark } from "@/components/HexMark";

function Field({
  id, label, type = "text", textarea = false, value, onChange, required = true,
}: {
  id: string; label: string; type?: string; textarea?: boolean;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  const shared =
    "peer w-full rounded-lg border border-slateblue-500/30 bg-white/[0.04] px-4 pt-6 pb-2 text-sm text-white placeholder-transparent outline-none transition-colors duration-300 focus:border-royal-500 focus:bg-white/[0.06]";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          data-testid={`contact-input-${id}`}
          rows={5}
          placeholder={label}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          id={id}
          data-testid={`contact-input-${id}`}
          type={type}
          placeholder={label}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slateblue-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slateblue-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-slateblue-300"
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section data-testid="contact-page" className="bg-foundry-dark relative min-h-screen overflow-hidden pb-24 pt-40 lg:pt-48">
      <ParallaxLayer className="absolute inset-0 text-slateblue-500/25" distance={70}>
        <NetworkMesh className="h-full w-full" />
      </ParallaxLayer>
      <div className="pointer-events-none absolute -right-32 top-40 text-white/[0.05]">
        <HexMark className="h-[420px] w-[420px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-slateblue-400">
            <span className="h-px w-10 bg-slateblue-500/60" />
            Contact
          </p>
          <h1 className="font-display mt-6 max-w-2xl text-4xl font-light leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Start the conversation
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* ---- Form ---- */}
          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  data-testid="contact-success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="grain relative flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-slateblue-500/30 bg-navy-950/60 p-10 text-center backdrop-blur"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-slateblue-400/50 bg-royal-600/20">
                    <CheckCircle2 className="h-8 w-8 text-slateblue-300" />
                  </span>
                  <h2 className="font-display mt-7 text-3xl font-light text-white">Received.</h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-slateblue-300">
                    Thank you, {form.name.split(" ")[0] || "there"}. Your enquiry has been logged
                    under reference <span className="font-mono text-slateblue-200">SY-2026-{(Math.floor(Math.random() * 9000) + 1000)}</span> —
                    the team will come back within one business day.
                  </p>
                  <button
                    data-testid="contact-send-another"
                    onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", message: "" }); }}
                    className="btn-sheen mt-8 rounded-full border border-slateblue-400/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:border-white hover:bg-white/5"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  data-testid="contact-form"
                  onSubmit={submit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -14 }}
                  className="space-y-4 rounded-2xl border border-slateblue-500/25 bg-navy-950/50 p-6 backdrop-blur sm:p-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="name" label="Name" value={form.name} onChange={set("name")} />
                    <Field id="company" label="Company" value={form.company} onChange={set("company")} />
                  </div>
                  <Field id="email" label="Work email" type="email" value={form.email} onChange={set("email")} />
                  <Field id="message" label="Message" textarea value={form.message} onChange={set("message")} />
                  <button
                    type="submit"
                    data-testid="contact-submit-button"
                    className="btn-sheen inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-900 hover:bg-slateblue-100 sm:w-auto"
                  >
                    Submit enquiry <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* ---- Details ---- */}
          <Reveal delay={0.2}>
            <div className="space-y-10 lg:pt-2">
              <div>
                <p className="eyebrow text-slateblue-400">Direct</p>
                <a
                  href="mailto:sales@foundryfx.org"
                  data-testid="contact-email-link"
                  className="group mt-4 flex items-center gap-3 text-lg text-white"
                >
                  <Mail className="h-5 w-5 text-slateblue-400 transition-colors group-hover:text-white" />
                  sales@foundryfx.org
                </a>
              </div>
              <div>
                <p className="eyebrow text-slateblue-400">Desks</p>
                {/* PLACEHOLDER: office addresses — swap with real locations */}
                <div data-placeholder="office-locations" className="mt-5 space-y-4">
                  {[
                    ["London", "FX & Rates — EMEA coverage"],
                    ["Singapore", "APAC coverage"],
                    ["New York", "Americas coverage"],
                  ].map(([city, note]) => (
                    <div key={city} className="flex items-start gap-3 border-l border-slateblue-500/30 pl-4">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slateblue-400" />
                      <div>
                        <p className="text-sm font-semibold text-white">{city}</p>
                        <p className="mt-0.5 text-xs text-slateblue-400">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow text-slateblue-400">Response</p>
                <div className="mt-4 flex items-start gap-3 border-l border-slateblue-500/30 pl-4">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slateblue-400" />
                  <p className="text-sm leading-relaxed text-slateblue-300">
                    Demo and onboarding enquiries are answered within one business
                    day, in your desk's timezone.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-slateblue-500/25 bg-white/[0.03] p-6">
                <HexMark className="h-7 w-7 text-slateblue-400" />
                <p className="mt-4 text-sm leading-relaxed text-slateblue-300">
                  Already a client? The platform lives at{" "}
                  <a href="https://foundryfx.org/syfx/portal/" data-testid="contact-portal-link" className="text-white underline decoration-slateblue-500 underline-offset-4 hover:decoration-white">
                    foundryfx.org/syfx/portal
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
