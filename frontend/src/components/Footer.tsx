import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { HexMark } from "./HexMark";
import { PORTAL_URL } from "./Nav";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Deal Structuring", to: "/services" },
      { label: "Live Pricing & Risk", to: "/services" },
      { label: "Execution & Audit", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <HexMark className="h-7 w-7 text-navy-900" strokeWidth={2} />
              <span className="leading-none">
                <span className="font-display block text-[15px] font-semibold tracking-[0.18em] text-navy-900">
                  FOUNDRY
                </span>
                <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.34em] text-slateblue-500">
                  FX Structure Platform
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-900/60">
              Foundry is the FX structured product workbench for sales desks, bringing structuring, pricing and execution together in one sealed, end-to-end platform.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-slateblue-500">{col.title}</p>
              <ul className="mt-6 space-y-3.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      className="text-navy-900/70 transition-colors duration-300 hover:text-navy-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="eyebrow text-slateblue-500">Access</p>
            <ul className="mt-6 space-y-3.5 text-sm">
              <li>
                <a
                  href={PORTAL_URL}
                  data-testid="footer-link-client-portal"
                  className="group inline-flex items-center gap-1 text-navy-900/70 transition-colors duration-300 hover:text-navy-900"
                >
                  Client Portal
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  data-testid="footer-link-walkthrough"
                  className="text-navy-900/70 transition-colors duration-300 hover:text-navy-900"
                >
                  Request a Walkthrough
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant outlined wordmark */}
        <div className="pointer-events-none mt-16 select-none overflow-hidden" aria-hidden="true">
          <p className="text-outline-light font-display text-center text-[18vw] font-light! tracking-normal! leading-none lg:text-[15rem]">
            FOUNDRY
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-slateblue-100 py-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slateblue-500">
            © 2026 SwitchYard Capital
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slateblue-500">
            foundryfx.org
          </p>
        </div>
      </div>
    </footer>
  );
}
