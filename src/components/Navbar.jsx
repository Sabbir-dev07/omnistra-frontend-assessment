import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Nav data ──────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    label: 'Prevent',
    badge: 'NEW',
    desc: 'Stop friendly fraud & block digital shoplifters before the chargeback happens.',
    href: '#',
  },
  {
    label: 'Automation',
    badge: null,
    desc: 'Fully automated chargeback recovery with 4x ROI guarantee.',
    href: '#',
  },
  {
    label: 'Alerts',
    badge: null,
    desc: 'Prevent 90% of chargebacks before they happen, powered by Visa & Mastercard.',
    href: '#',
  },
  {
    label: 'Insights',
    badge: 'FREE',
    desc: "Bird's-eye view into your payments and chargebacks, all in one dashboard.",
    href: '#',
  },
  {
    label: 'Connect',
    badge: 'FOR PLATFORMS',
    desc: 'Integrate Chargeflow via Embedding, Whitelabel or API.',
    href: '#',
  },
];

const NAV_LINKS = [
  { label: 'Products', hasDropdown: true },
  { label: 'Customers', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Integrations', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Company', href: '#' },
];

// ─── Animation variants ─────────────────────────────────────────────────────
const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
};

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { type: 'tween', duration: 0.25, ease: 'easeIn' },
  },
};

// ─── Products Dropdown ──────────────────────────────────────────────────────
function ProductsDropdown() {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Products</p>
      </div>
      <div className="px-3 pb-4 space-y-1">
        {PRODUCTS.map((p) => (
          <motion.a
            key={p.label}
            href={p.href}
            whileHover={{ backgroundColor: '#f8f7ff', x: 2 }}
            className="flex items-start gap-3 rounded-xl px-3 py-3 group transition-colors"
          >
            {/* Icon placeholder */}
            <div className="mt-0.5 w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
              <div className="w-3 h-3 rounded-sm bg-violet-500" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900 group-hover:text-violet-700 transition-colors">
                  {p.label}
                </span>
                {p.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-violet-100 text-violet-700 uppercase tracking-wide">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed line-clamp-2">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
      {/* Footer CTA */}
      <div className="border-t border-gray-100 px-5 py-3 flex items-center justify-between bg-gray-50">
        <span className="text-xs text-gray-500">Trusted by 15,000+ brands worldwide</span>
        <a href="#" className="text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors">
          View all products →
        </a>
      </div>
    </motion.div>
  );
}

// ─── Chargeflow Logo SVG ────────────────────────────────────────────────────
function ChargeflowLogo() {
  return (
    <a href="#" className="flex items-center gap-2 select-none">
      {/* Lightning bolt icon */}
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-sm">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.5 1L3 9H8L6.5 15L13 7H8L9.5 1Z"
            fill="white"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span
        className="text-xl font-bold tracking-tight"
        style={{ color: '#1a1a2e', fontFamily: 'Inter, sans-serif' }}
      >
        charge<span style={{ color: '#7c3aed' }}>flow</span>
      </span>
    </a>
  );
}

// ─── Hamburger icon ─────────────────────────────────────────────────────────
function Hamburger({ open, onClick }) {
  return (
    <button
      aria-label="Toggle menu"
      onClick={onClick}
      className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 lg:hidden"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="block w-6 h-0.5 bg-gray-700 rounded-full origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block w-6 h-0.5 bg-gray-700 rounded-full"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="block w-6 h-0.5 bg-gray-700 rounded-full origin-center"
      />
    </button>
  );
}

// ─── Main Navbar ────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Scroll listener — transparent → solid white on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      {/* ─── Announcement Bar ─── */}
      <div className="w-full bg-violet-700 text-white text-xs font-medium text-center py-2 px-4 overflow-hidden">
        <a
          href="#"
          className="hover:underline inline-flex items-center gap-1 whitespace-nowrap"
        >
          🎉 Announcing our $35M Series A funding to take down friendly fraud — read more →
        </a>
      </div>

      {/* ─── Navbar ─── */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? '#ffffff' : 'rgba(255,255,255,0)',
          boxShadow: scrolled
            ? '0 1px 0 0 rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.06)'
            : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-8 left-0 right-0 z-40 w-full"
        style={{ borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none' }}
      >
        <nav className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
          {/* Left: Logo */}
          <ChargeflowLogo />

          {/* Center: Nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                ref={item.hasDropdown ? dropdownRef : null}
              >
                <a
                  href={item.href || '#'}
                  className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md group"
                  style={{ color: scrolled ? '#1a1a2e' : '#1a1a2e' }}
                >
                  <span className="relative">
                    {item.label}
                    {/* Animated underline */}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-violet-600"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      style={{ originX: 0 }}
                    />
                  </span>
                  {item.hasDropdown && (
                    <motion.svg
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-gray-500"
                    >
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  )}
                </a>
                {/* Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && <ProductsDropdown />}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Right: CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-violet-700 transition-colors duration-200 px-3 py-2"
            >
              Sign in
            </a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(124,58,237,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="px-5 py-2 text-sm font-semibold text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)' }}
            >
              Schedule a demo
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <Hamburger open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
        </nav>
      </motion.header>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in drawer */}
            <motion.aside
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <ChargeflowLogo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2L14 14M14 2L2 14" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href || '#'}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-gray-800 hover:bg-violet-50 hover:text-violet-700 transition-colors"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-400">
                        <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="mx-4 border-t border-gray-100 my-2" />

              {/* Mobile CTAs */}
              <div className="px-4 py-4 space-y-3">
                <a
                  href="#"
                  className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)' }}
                >
                  Schedule a demo
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
