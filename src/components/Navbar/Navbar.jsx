import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import { Button } from '../ui/Button';
import { Logo } from './Logo';
import { Dropdown } from './Dropdown';
import { MobileMenu } from './MobileMenu';
import { AnnouncementBar } from './AnnouncementBar';

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Products',     dropdown: true },
  { label: 'Customers',    href: '#' },
  { label: 'Pricing',      href: '#' },
  { label: 'Integrations', href: '#' },
  { label: 'Resources',    href: '#' },
  { label: 'Company',      href: '#' },
];

const PRODUCTS_ITEMS = [
  { title: 'Prevent',    badge: 'NEW',  desc: 'Stop friendly fraud & prevent the next chargeback.', icon: '🛡️' },
  { title: 'Automation', badge: null,   desc: 'Fully automated recovery with a 4× ROI guarantee.',    icon: '⚡' },
  { title: 'Alerts',     badge: null,   desc: 'Cut 90% of chargebacks before they happen.',           icon: '🔔' },
  { title: 'Insights',   badge: 'FREE', desc: 'Bird’s-eye view into your payments & chargebacks.',    icon: '📊' },
  { title: 'Connect',    badge: 'NEW',  desc: 'Integrate via Embedding, Whitelabel or API.',         icon: '🔗' },
];

export default function Navbar() {
  const scrolled = useScroll(10);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobOpen, setMobOpen] = useState(false);
  const hoverTimer = useRef(null);

  const handleEnter = useCallback((label) => {
    clearTimeout(hoverTimer.current);
    setActiveMenu(label);
  }, []);

  const handleLeave = useCallback(() => {
    hoverTimer.current = setTimeout(() => setActiveMenu(null), 100);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Exact Marquee Bar */}
        <AnnouncementBar />

        {/* Global Nav */}
        <nav
          className={`transition-all duration-300 ${
            scrolled 
              ? 'bg-white/85 backdrop-blur-[20px] border-b border-gray-100 py-3 shadow-sm' 
              : 'bg-transparent py-5'
          }`}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
            
            {/* Logo */}
            <Logo scrolled={scrolled} />

            {/* Links */}
            <ul className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && handleEnter(link.label)}
                  onMouseLeave={() => link.dropdown && handleLeave()}
                >
                  <a
                    href={link.href || '#'}
                    className={`group relative flex items-center gap-1.5 text-[15px] font-semibold transition-colors py-2 ${
                      scrolled ? 'text-gray-800' : 'text-gray-900'
                    } hover:text-[#0066ff]`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <motion.svg
                        animate={{ rotate: activeMenu === link.label ? 180 : 0 }}
                        className="w-3.5 h-3.5 text-gray-400 opacity-60"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    )}
                    {/* Subtle Brand Underline */}
                    <motion.span 
                      className="absolute bottom-1 left-0 h-[2px] bg-[#0066ff]"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2 }}
                    />
                  </a>

                  {link.dropdown && (
                    <Dropdown isOpen={activeMenu === link.label} items={PRODUCTS_ITEMS} />
                  )}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" className="px-3">Sign in</Button>
              <Button variant="secondary" className="hidden xl:flex px-6">Sign up</Button>
              <Button className="px-6 py-3">
                Schedule a demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>

            {/* Mobile Burger */}
            <button 
              onClick={() => setMobOpen(true)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <span className="w-6 h-[2px] bg-gray-950 rounded-full" />
              <span className="w-6 h-[2px] bg-gray-950 rounded-full" />
              <span className="w-6 h-[2px] bg-gray-950 rounded-full" />
            </button>
          </div>
        </nav>
      </div>

      <MobileMenu 
        isOpen={mobOpen} 
        onClose={() => setMobOpen(false)} 
        items={NAV_LINKS} 
      />
    </>
  );
}
