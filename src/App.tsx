import { motion, AnimatePresence } from "motion/react";
import { Coffee, Instagram, Facebook, Phone, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

// --- Nav Components ---


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and update scroll state on route change
  useEffect(() => {
    setScrolled(window.scrollY > 50);
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Menu", href: "/menu", isRoute: true },
    { label: "About Us", href: "/#about", isRoute: false },
    { label: "Location", href: "/#locations", isRoute: false },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}>
        <div className="flex justify-center px-6 py-4 md:py-8">
          <div className={`flex items-center gap-7 bg-primary rounded-full px-10 py-2.5 transition-all duration-500 ${scrolled ? "shadow-2xl scale-95" : "shadow-lg"}`}>

            {/* Desktop links left */}
            <Link to="/menu" className="hidden md:block text-accent font-accent font-bold uppercase tracking-widest text-[11px] hover:opacity-100 opacity-80 transition-all hover:scale-105">Menu</Link>

            {/* Center Logo */}
            <Link to="/" className="flex items-center justify-center bg-accent rounded-full w-9 h-9 hover:rotate-12 transition-all duration-500 shadow-xl group">
              <Coffee size={18} className="text-primary group-hover:scale-110 transition-transform" />
            </Link>

            {/* Desktop links right */}
            <a href="/#about" className="hidden md:block text-accent font-accent font-bold uppercase tracking-widest text-[11px] hover:opacity-100 opacity-80 transition-all hover:scale-105">About Us</a>
            <a href="/#locations" className="hidden md:block text-accent font-accent font-bold uppercase tracking-widest text-[11px] hover:opacity-100 opacity-80 transition-all hover:scale-105">Location</a>

            {/* Hamburger – mobile only */}
            <button
              className="md:hidden text-accent transition-transform"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-24 left-0 w-full z-40 flex justify-center px-6"
            style={{ transformOrigin: "top" }}
          >
            <div className="bg-primary rounded-2xl px-8 py-6 shadow-2xl flex flex-col gap-5 w-full max-w-xs">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-accent font-accent font-bold uppercase tracking-widest text-sm hover:opacity-100 opacity-80 transition-all"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-accent font-accent font-bold uppercase tracking-widest text-sm hover:opacity-100 opacity-80 transition-all"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-white/90">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <div className="bg-white rounded-full p-3 w-16 h-16 flex flex-col items-center justify-center shadow-sm">
                <span className="text-[10px] font-bold text-black leading-none">THE</span>
                <span className="text-[12px] font-display text-black leading-none">Bakery's</span>
                <span className="text-[10px] font-bold text-black leading-none">COFFEE</span>
              </div>
              <span className="font-display text-3xl text-white">The Bakery's Coffee</span>
            </div>
            <p className="text-white/70 text-xl font-accent">THE ONE THING THAT NEVER LETS ME DOWN: COFFEE</p>
            <div className="flex flex-col gap-5">
              <a href="tel:040326474" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <Phone size={20} className="opacity-50 group-hover:opacity-100" />
                <span className="font-accent font-bold text-lg">040326474</span>
              </a>
              <a href="https://www.instagram.com/thebakeryscoffee/?hl=de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <Instagram size={20} className="opacity-50 group-hover:opacity-100" />
                <span className="font-accent font-bold text-lg">@thebakeryscoffee</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="flex flex-col gap-8">
              <h4 className="font-accent font-bold uppercase tracking-widest text-white text-sm opacity-50">Main</h4>
              <div className="flex flex-col gap-4">
                {[
                  { name: "Menu", href: "/menu" },
                  { name: "About Us", href: "/#about" },
                  { name: "Location", href: "/#locations" }
                ].map((link) => (
                  <a key={link.name} href={link.href} className="text-white/70 hover:text-white transition-colors font-accent text-xl">{link.name}</a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="font-accent font-bold uppercase tracking-widest text-white text-sm opacity-50">Categories</h4>
              <div className="flex flex-col gap-4">
                {["HOT", "COLD", "NON COFFEE", "FRESH JUICES"].map((link) => (
                  <a key={link} href="/menu" className="text-white/70 hover:text-white transition-colors font-accent text-xl">{link}</a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="font-accent font-bold uppercase tracking-widest text-white text-sm opacity-50">Follow Us</h4>
              <div className="flex gap-5">
                <a
                  href="https://www.instagram.com/thebakeryscoffee/?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/TheBakerysCoffeeHH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/50">
          <p className="font-accent text-lg">{new Date().getFullYear()} © The Bakery's Coffee</p>
          <a href="#hero" className="hover:text-white transition-colors font-accent flex items-center gap-3 text-lg group">
            Back to Top <ChevronRight size={20} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Scroll To Top Handler ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Main App ---

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-accent selection:text-primary">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </main>
        <Footer />

        {/* Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.015] mix-blend-overlay">
          <div className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] animate-[marquee_20s_linear_infinite]" />
        </div>
      </div>
    </BrowserRouter>
  );
}
