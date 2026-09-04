import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, ParallaxLayer } from "@/components/motion";
import { MeshCanvas } from "@/components/MeshCanvas";
import { HexMark } from "@/components/HexMark";
import { PORTAL_URL } from "@/components/Nav";

const REGIONS = [
  ["London", "EMEA"],
  ["New York", "AMER"],
  ["Singapore", "APAC"],
];

function Field({
  id, label, type = "text", textarea = false, value, onChange,
}: {
  id: string; label: string; type?: string; textarea?: boolean;
  value: string; onChange: (v: string) => void;
}) {
  const inputClass =
    "w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slateblue-500/60 focus:border-slateblue-400";
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] font-medium uppercase tracking-[0.25em] text-slateblue-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          data-testid={`contact-input-${id}`}
          rows={4}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          data-testid={`contact-input-${id}`}
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      )}
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
    <section data-testid="contact-page" className="bg-hero-dark relative min-h-screen overflow-hidden pb-24 pt-40 lg:pt-48">
      <ParallaxLayer className="absolute -inset-y-20 inset-x-0" distance={70}>
        <MeshCanvas className="h-full w-full" />
      </ParallaxLayer>
      <div className="noise" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ---- Form ---- */}
          <div>
            <Reveal>
              <p className="eyebrow text-slateblue-500">Contact</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-5 text-4xl tracking-tight text-white sm:text-5xl">
                Talk to the team.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slateblue-400">
                Platform onboarding, LP integrations or a walkthrough of your book —
                the desk reads every message.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    data-testid="contact-success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="grain relative mt-10 flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center"
                  >
                    <HexMark className="h-12 w-12 text-slateblue-400" strokeWidth={1.6} />
                    <h2 className="font-display mt-6 text-2xl text-white">Message transmitted.</h2>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-slateblue-400">
                      The desk reads every message. Expect a reply within one
                      business day.
                    </p>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-slateblue-500">
                      Ref SY-26-{Math.floor(Math.random() * 9000) + 1000}
                    </p>
                    <button
                      data-testid="contact-send-another"
                      onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", message: "" }); }}
                      className="btn-ghost-dark mt-8 !px-6 !py-3"
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
                    className="mt-10 space-y-7 rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                  >
                    <div className="grid gap-7 sm:grid-cols-2">
                      <Field id="name" label="Name" value={form.name} onChange={set("name")} />
                      <Field id="company" label="Company" value={form.company} onChange={set("company")} />
                    </div>
                    <Field id="email" label="Email" type="email" value={form.email} onChange={set("email")} />
                    <Field id="message" label="Message" textarea value={form.message} onChange={set("message")} />
                    <button type="submit" data-testid="contact-submit-button" className="btn-primary-light">
                      Transmit message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </Reveal>
          </div>

          {/* ---- Details ---- */}
          <div className="space-y-12 lg:pt-24">
            <Reveal delay={0.2}>
              <p className="eyebrow text-slateblue-500">General</p>
              <a
                href="mailto:desk@foundryfx.org"
                data-testid="contact-email-link"
                className="font-display mt-4 inline-block text-2xl text-white transition-colors duration-300 hover:text-slateblue-300"
              >
                desk@foundryfx.org
              </a>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <p className="eyebrow text-slateblue-500">Client portal</p>
                <p className="mt-4 text-sm leading-relaxed text-slateblue-400">
                  Existing clients access the trade builder directly.
                </p>
                <a
                  href={PORTAL_URL}
                  data-testid="contact-portal-link"
                  className="group mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:text-slateblue-300"
                >
                  foundryfx.org/syfx/portal
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="eyebrow text-slateblue-500">Regions</p>
              {/* PLACEHOLDER: office/regions — swap with real coverage details */}
              <div data-placeholder="office-regions" className="mt-5">
                {REGIONS.map(([city, region]) => (
                  <div key={city} className="flex items-baseline justify-between border-b border-dashed border-white/15 py-3.5">
                    <span className="text-sm text-white">{city}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slateblue-500">{region}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.44}>
              <p className="text-xs leading-relaxed text-slateblue-500">
                Messages route to the desk. Expect a reply within one business day.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
