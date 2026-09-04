import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { HexMark } from "./HexMark";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export const PORTAL_URL = "https://foundryfx.org/syfx/portal/";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 32));

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-slateblue-500/20 bg-navy-900/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" data-testid="nav-logo" className="group flex items-center gap-3">
          <HexMark className="h-9 w-9 text-white transition-transform duration-500 group-hover:rotate-[30deg]" />
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-[0.18em] text-white">
              FOUNDRY
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.32em] text-slateblue-400">
              FX Structure Platform
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-[11px] font-semibold uppercase tracking-[0.26em] transition-colors duration-300 ${
                  isActive ? "text-white" : "text-slateblue-400 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={PORTAL_URL}
            data-testid="nav-login-button"
            className="btn-sheen rounded-full border border-slateblue-400/50 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:border-white hover:bg-white/10"
          >
            Login
          </a>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slateblue-400/40 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-slateblue-500/20 bg-navy-900/95 backdrop-blur-md md:hidden"
            aria-label="Mobile"
          >
            <div className="space-y-1 px-6 py-6">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                    className="flex items-center justify-between py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slateblue-300 hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </NavLink>
                </motion.div>
              ))}
              <a
                href={PORTAL_URL}
                data-testid="nav-mobile-login-button"
                className="mt-4 flex items-center justify-center gap-2 rounded-full border border-slateblue-400/50 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white"
              >
                Login
                <HexMark className="h-4 w-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
