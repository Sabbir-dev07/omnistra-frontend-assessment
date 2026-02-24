import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Navigation data (exact order from chargeflow.io) ──────────────────────
const PRODUCTS_MENU = [
  {
    label: 'Prevent',
    badge: 'NEW',
    desc: 'Stop friendly fraud & block digital shoplifters before the next chargeback.',
    icon: '🛡️',
  },
  {
    label: 'Automation',
    badge: null,
    desc: 'Fully automated chargeback recovery with a 4× ROI guarantee.',
    icon: '⚡',
  },
  {
    label: 'Alerts',
    badge: null,
    desc: 'Cut 90% of chargebacks before they happen, powered by Visa & Mastercard.',
    icon: '🔔',
  },
  {
    label: 'Insights',
    badge: 'FREE',
    desc: "Bird's-eye view of your payments & chargebacks in one powerful dashboard.",
    icon: '📊',
  },
  {
    label: 'Connect',
    badge: 'FOR PLATFORMS',
    desc: 'Integrate Chargeflow via Embedding, Whitelabel, or API.',
    icon: '🔗',
  },
];

const NAV_ITEMS = [
  { label: 'Products', dropdown: true },
  { label: 'Customers', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Blog', href: '#' },
];

// ─── Framer Motion variants ──────────────────────────────────────────────────
const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: { duration: 0.13, ease: 'easeIn' },
  },
};

const drawerVariants = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { type: 'tween', duration: 0.28, ease: 'easeOut' } },
  exit:    { x: '-100%', transition: { type: 'tween', duration: 0.22, ease: 'easeIn' } },
};

// ─── Logo ────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 select-none shrink-0" aria-label="Chargeflow home">
      {/* Lightning bolt mark */}
      <div
        className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shadow-sm"
        style={{ background: 'linear-gradient(135deg, #0066ff 0%, #0044cc 100%)' }}
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <path d="M10 1L3.5 9H8.5L6 15L12.5 7H7.5L10 1Z" fill="white" />
        </svg>
      </div>
      <span className="text-[18px] font-bold tracking-tight text-gray-900">
        Charge<span style={{ color: '#0066ff' }}>flow</span>
      </span>
    </a>
  );
}

// ─── Products Dropdown ───────────────────────────────────────────────────────
function ProductsDropdown({ onMouseEnter, onMouseLeave }) {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[440px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50"
    >
      <div className="px-4 pt-4 pb-1">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Products</p>
      </div>

      <div className="p-2 space-y-0.5">
        {PRODUCTS_MENU.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 group transition-colors duration-150"
          >
            <span className="text-base mt-0.5 shrink-0">{item.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 uppercase tracking-wide">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mx-2 mb-2 px-3 py-2.5 rounded-xl bg-blue-50 flex items-center justify-between">
        <span className="text-[11px] text-gray-500">Trusted by 15,000+ brands</span>
        <a href="#" className="text-[11px] font-semibold text-blue-600 hover:underline">
          View all →
        </a>
      </div>
    </motion.div>
  );
}

// ─── Hamburger Button ────────────────────────────────────────────────────────
function Hamburger({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg hover:bg-gray-100 transition-colors shrink-0"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22 }}
        className="w-5 h-[1.5px] bg-gray-800 rounded-full block origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.15 }}
        className="w-5 h-[1.5px] bg-gray-800 rounded-full block"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22 }}
        className="w-5 h-[1.5px] bg-gray-800 rounded-full block origin-center"
      />
    </button>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const leaveTimer = useRef(null);

  /* Scroll → transparent ↔ white */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Lock body scroll while drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openMenu  = (label) => { clearTimeout(leaveTimer.current); setOpenDropdown(label); };
  const closeMenu = ()      => { leaveTimer.current = setTimeout(() => setOpenDropdown(null), 100); };

  return (
    <>
      {/* ── Fixed Navbar ─────────────────────────────────────────────────── */}
      <motion.nav
        aria-label="Main navigation"
        initial={false}
        animate={{
          backgroundColor: scrolled ? '#ffffff' : 'rgba(255,255,255,0)',
          boxShadow: scrolled
            ? '0 1px 0 rgba(0,0,0,0.06), 0 2px 16px rgba(0,0,0,0.07)'
            : '0 0 0 transparent',
        }}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Logo />

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && openMenu(item.label)}
                onMouseLeave={() => item.dropdown && closeMenu()}
              >
                <a
                  href={item.href || '#'}
                  className="relative flex items-center gap-[5px] px-3 py-2 text-[14px] font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-blue-50 group"
                >
                  {item.label}
                  {item.dropdown && (
                    <motion.svg
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.18 }}
                      width="11" height="11" viewBox="0 0 12 12" fill="none"
                      className="text-gray-400 group-hover:text-blue-500"
                    >
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  )}
                </a>

                {/* Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <ProductsDropdown
                        onMouseEnter={() => openMenu(item.label)}
                        onMouseLeave={closeMenu}
                      />
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop right CTAs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href="#"
              className="px-4 py-2 text-[14px] font-medium text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Sign in
            </a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03, boxShadow: '0 4px 18px rgba(0,102,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="px-5 py-2 text-[14px] font-semibold text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #0066ff 0%, #0044cc 100%)' }}
            >
              Schedule a demo
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <Hamburger open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer — slides from LEFT */}
            <motion.aside
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl lg:hidden overflow-y-auto flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-[68px] border-b border-gray-100 shrink-0">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Nav list */}
              <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href || '#'}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-[14px] font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-gray-400">
                        <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    )}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="px-4 pb-6 pt-2 space-y-2.5 border-t border-gray-100">
                <a
                  href="#"
                  className="block text-center w-full py-3 rounded-xl text-[14px] font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="block text-center w-full py-3 rounded-xl text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #0066ff 0%, #0044cc 100%)' }}
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
