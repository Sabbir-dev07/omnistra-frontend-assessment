import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import { Button } from '../ui/Button';
import { Logo } from './Logo';
import { Dropdown } from './Dropdown';
import { MobileMenu } from './MobileMenu';

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
  { title: 'Prevent',    badge: 'NEW',  desc: 'Block digital shoplifters before chargebacks happen.', icon: '🛡️' },
  { title: 'Automation', badge: null,   desc: 'Fully automated recovery with a 4× ROI guarantee.',    icon: '⚡' },
  { title: 'Alerts',     badge: null,   desc: 'Cut 90% of chargebacks before they happen.',           icon: '🔔' },
  { title: 'Insights',   badge: 'FREE', desc: 'Bird’s-eye view of your payment health.',              icon: '📊' },
  { title: 'Connect',    badge: 'NEW',  desc: 'Integrate via Embedding, Whitelabel, or API.',         icon: '🔗' },
];

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Navbar() {
  const scrolled = useScroll(20);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobOpen, setMobOpen] = useState(false);
  const hoverTimer = useRef(null);

  const handleEnter = useCallback((label) => {
    clearTimeout(hoverTimer.current);
    setActiveMenu(label);
  }, []);

  const handleLeave = useCallback(() => {
    hoverTimer.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-[15px] border-b border-gray-100 py-3 block shadow-sm' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
          
          {/* Brand */}
          <Logo scrolled={scrolled} />

          {/* Nav Links (Desktop) */}
          <ul className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li 
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleLeave()}
              >
                <a
                  href={link.href || '#'}
                  className="group relative flex items-center gap-1.5 text-[15px] font-semibold text-gray-800 hover:text-[#0066ff] transition-colors py-2"
                >
                  {link.label}
                  {link.dropdown && (
                    <motion.svg
                      animate={{ rotate: activeMenu === link.label ? 180 : 0 }}
                      className="w-4 h-4 text-gray-400 group-hover:text-blue-500"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  )}
                  {/* Subtle Underline */}
                  <motion.span 
                    className="absolute bottom-1 left-0 h-[2px] bg-[#0066ff]"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.25 }}
                  />
                </a>

                {link.dropdown && (
                  <Dropdown isOpen={activeMenu === link.label} items={PRODUCTS_ITEMS} />
                )}
              </li>
            ))}
          </ul>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button variant="ghost">Sign in</Button>
            <Button variant="secondary" className="hidden xl:flex">Sign up</Button>
            <Button>
              Schedule a demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <span className="w-5 h-0.5 bg-gray-950 rounded-full" />
            <span className="w-4 h-0.5 bg-gray-900 rounded-full" />
            <span className="w-6 h-0.5 bg-gray-800 rounded-full" />
          </button>
        </div>
      </nav>

      <MobileMenu 
        isOpen={mobOpen} 
        onClose={() => setMobOpen(false)} 
        items={NAV_LINKS} 
      />
    </>
  );
}
