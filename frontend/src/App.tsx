import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";

let lenisInstance: Lenis | null = null;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    lenisInstance = lenis;
    document.documentElement.classList.add("lenis");
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-navy-900 antialiased">
      <AnimatePresence>{loading ? <Preloader key="preloader" /> : null}</AnimatePresence>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
