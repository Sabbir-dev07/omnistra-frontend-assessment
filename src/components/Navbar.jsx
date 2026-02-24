import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Constants & Data ────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Products',     dropdown: true },
  { label: 'Customers',    href: '#' },
  { label: 'Pricing',      href: '#' },
  { label: 'Integrations', href: '#' },
  { label: 'Resources',    href: '#' },
  { label: 'Company',      href: '#' },
];

const PRODUCTS_GRID = [
  {
    title: 'Prevent',
    desc: 'Block digital shoplifters before the next chargeback.',
    badge: 'NEW',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Automation',
    desc: 'Fully automated recovery with a 4× ROI guarantee.',
    badge: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Alerts',
    desc: 'Cut 90% of chargebacks before they happen.',
    badge: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: 'Insights',
    desc: 'Bird’s-eye view of your payment health.',
    badge: 'FREE',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
  {
    title: 'Connect',
    desc: 'Integrate via Embedding, Whitelabel, or API.',
    badge: 'FOR PLATFORMS',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

/**
 * Dropdown menu for "Products" — 2-column grid
 */
function ProductsDropdown({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[580px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-6 flex flex-col gap-6 z-50 overflow-hidden"
        >
          <div className="grid grid-cols-2 gap-4">
            {PRODUCTS_GRID.map((p) => (
              <a
                key={p.title}
                href="#"
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  {p.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {p.title}
                    </span>
                    {p.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 uppercase tracking-wide">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="px-4 py-4 rounded-2xl bg-blue-50 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-600">Explore the platform</span>
            <a href="#" className="text-xs font-bold text-blue-600 flex items-center gap-1 group">
              View all products
              <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>→</motion.span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Animated Hamburger Icon — 3 lines to X
 */
function Hamburger({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-50 group"
      aria-label="Toggle Menu"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.4, ease: [0.77, 0, 0.18, 1] }}
        className="w-6 h-0.5 bg-gray-900 block rounded-full"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-gray-900 block rounded-full"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.4, ease: [0.77, 0, 0.18, 1] }}
        className="w-6 h-0.5 bg-gray-900 block rounded-full"
      />
    </button>
  );
}

// ─── Global Navbar ──────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(timerRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-[15px] shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-300">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group select-none relative z-50">
            <div className="w-8 h-8 rounded-lg bg-[#0066ff] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-950">
              Charge<span className="text-[#0066ff]">flow</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-11">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <a
                  href={item.href || '#'}
                  className="group relative text-[15px] font-semibold text-gray-800 hover:text-[#0066ff] transition-colors flex items-center gap-1 py-2"
                >
                  {item.label}
                  {item.dropdown && (
                    <motion.svg
                      animate={{ rotate: activeMenu === item.label ? 180 : 0 }}
                      className="w-4 h-4 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  )}
                  {/* Underline expansion */}
                  <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#0066ff] transition-all duration-300 group-hover:w-full" />
                </a>

                {item.dropdown && (
                  <ProductsDropdown isOpen={activeMenu === item.label} />
                )}
              </li>
            ))}
          </ul>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-6 relative z-50">
            <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-950 transition-colors">
              Sign in
            </a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,102,255,0.25)' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066ff] text-white text-[14px] font-bold transition-colors hover:bg-[#0055dd]"
            >
              Schedule a demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
          </div>

          {/* Mobile hamburger toggle */}
          <Hamburger isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />

        </div>
      </nav>

      {/* ── Mobile Sidebar Drawer ─────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.18, 1] }}
            className="fixed inset-0 z-[45] bg-white/95 backdrop-blur-xl flex flex-col p-8 pt-24 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 flex justify-between items-center group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-[#0066ff] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-auto flex flex-col gap-4">
              <a href="#" className="w-full py-4 text-center font-bold text-gray-900 border border-gray-200 rounded-2xl">
                Sign in
              </a>
              <a href="#" className="w-full py-4 text-center font-bold text-white bg-[#0066ff] rounded-2xl">
                Schedule a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
