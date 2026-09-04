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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,padding] duration-500 ${
        scrolled
          ? "border-b border-slateblue-500/30 bg-navy-950 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.65)]"
          : "border-b border-white/10 bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-navy-950/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" data-testid="nav-logo" className="group flex items-center gap-2.5">
          <HexMark className="h-7 w-7 text-white transition-transform duration-500 group-hover:rotate-[30deg]" strokeWidth={2} />
          <span className="leading-none">
            <span className="font-display block text-[15px] font-semibold tracking-[0.18em] text-white">
              FOUNDRY
            </span>
            <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.34em] text-slateblue-500">
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
                `text-[11px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 ${
                  isActive ? "text-white" : "text-slateblue-300 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            data-testid="nav-login-button"
            className="rounded-full border border-white/30 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-white/70 hover:bg-white/10"
          >
            Login
          </Link>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white md:hidden"
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
            className="overflow-hidden border-b border-white/10 bg-navy-950/95 backdrop-blur-md md:hidden"
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
                    className="flex items-center justify-between py-3 text-sm font-medium uppercase tracking-[0.26em] text-slateblue-300 hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                data-testid="nav-mobile-login-button"
                className="mt-4 flex items-center justify-center gap-2 rounded-full border border-white/30 py-3 text-sm font-medium uppercase tracking-[0.24em] text-white"
              >
                Login
                <HexMark className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
