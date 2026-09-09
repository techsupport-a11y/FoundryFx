import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";
import { MeshCanvas } from "./MeshCanvas";
import { GlobeMark } from "./GlobeMark";
import { PORTAL_URL } from "./Nav";

/* Shared closing section — dark radial, mesh, globe, walkthrough CTA. */
export default function FinalCta() {
  return (
    <section data-testid="final-cta" className="bg-cta-dark relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 opacity-60">
        <MeshCanvas className="h-full w-full" />
      </div>
      <div className="noise" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-8 lg:py-36">
        <div>
          <Reveal>
            <p className="eyebrow text-slateblue-500">Next step</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
              See Foundry in action.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slateblue-400">
              We give every salesperson a genuine reason to reach out, built from
              real client behaviour and market moves, not a calendar reminder.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link to="/contact" data-testid="final-cta-request-demo" className="btn-primary-light">
                Request a walkthrough <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={PORTAL_URL}
                data-testid="final-cta-portal-link"
                className="group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em] text-slateblue-400 transition-colors duration-300 hover:text-white"
              >
                Access the client portal
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="hidden lg:block" delay={0.2}>
          <GlobeMark className="mx-auto w-full max-w-md" />
        </Reveal>
      </div>
    </section>
  );
}
