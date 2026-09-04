import { Link } from "react-router-dom";
import { HexMark } from "./HexMark";
import { PORTAL_URL } from "./Nav";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute -right-24 -top-24 text-white/[0.04]"
        aria-hidden="true"
      >
        <HexMark className="h-[380px] w-[380px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <HexMark className="h-9 w-9 text-white" />
              <span className="leading-none">
                <span className="block font-display text-lg font-semibold tracking-[0.18em] text-white">
                  FOUNDRY
                </span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.32em] text-slateblue-400">
                  FX Structure Platform
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-slateblue-400">
              The structured FX trade builder for institutional sales desks. Built by
              SwitchYard Capital.
            </p>
          </div>
          <div>
            <p className="eyebrow text-slateblue-500">Platform</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link data-testid="footer-link-services" to="/services" className="text-slateblue-300 transition-colors hover:text-white">Services</Link></li>
              <li><Link data-testid="footer-link-about" to="/about" className="text-slateblue-300 transition-colors hover:text-white">About</Link></li>
              <li><a data-testid="footer-link-login" href={PORTAL_URL} className="text-slateblue-300 transition-colors hover:text-white">Login</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-slateblue-500">Company</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link data-testid="footer-link-contact" to="/contact" className="text-slateblue-300 transition-colors hover:text-white">Contact</Link></li>
              <li><span className="text-slateblue-300">SwitchYard Capital</span></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-slateblue-500">Desks</p>
            <ul className="mt-5 space-y-3 text-sm text-slateblue-300">
              <li>London</li>
              <li>Singapore</li>
              <li>New York</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs tracking-wide text-slateblue-500">
            © 2026 SwitchYard Capital. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.2em] text-slateblue-500 uppercase">
            foundryfx.org
          </p>
        </div>
      </div>
    </footer>
  );
}
