import { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import { Button } from '../ui/Button';
import { Logo } from './Logo';
import { Dropdown } from './Dropdown';
import { MobileMenu } from './MobileMenu';
import { AnnouncementBar } from './AnnouncementBar';

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'PRODUCT',     dropdown: true },
  { label: 'CUSTOMERS',    href: '#' },
  { label: 'PRICING',      href: '#' },
  { label: 'INTEGRATIONS', href: '#' },
  { label: 'RESOURCES',    href: '#' },
  { label: 'COMPANY',      href: '#' },
];

const PRODUCTS_ITEMS = [
  { title: 'PREVENT',    badge: 'NEW',  desc: 'Stop friendly fraud & prevent the next chargeback.', icon: '🛡️' },
  { title: 'AUTOMATION', badge: null,   desc: 'Fully automated recovery with a 4× ROI guarantee.',    icon: '⚡' },
  { title: 'ALERTS',     badge: null,   desc: 'Cut 90% of chargebacks before they happen.',           icon: '🔔' },
  { title: 'INSIGHTS',   badge: 'FREE', desc: 'Bird’s-eye view into your payments & chargebacks.',    icon: '📊' },
  { title: 'CONNECT',    badge: 'NEW',  desc: 'Integrate via Embedding, Whitelabel or API.',         icon: '🔗' },
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
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col font-['Montserrat']">
        {/* Exact 40px Marquee Bar */}
        <AnnouncementBar />

        {/* Brand Navigation */}
        <nav
          className={`transition-all duration-300 w-full flex justify-center ${
            scrolled 
              ? 'bg-white/90 backdrop-blur-[25px] border-b border-gray-100 py-3 shadow-sm' 
              : 'bg-transparent py-5'
          }`}
        >
          {/* Exact 90em (1440px) Max-Width Container with 0 18px Padding */}
          <div className="w-full max-w-[90em] px-[18px] flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Logo scrolled={scrolled} />

            {/* Nav Links */}
            <ul className="hidden lg:flex items-center gap-[40px] mt-1">
              {NAV_LINKS.map((link) => (
                <li 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && handleEnter(link.label)}
                  onMouseLeave={() => link.dropdown && handleLeave()}
                >
                  <a
                    href={link.href || '#'}
                    className={`group relative flex items-center gap-1.5 text-[14px] font-[800] tracking-[0.05em] transition-colors py-2 ${
                      scrolled ? 'text-gray-900' : 'text-gray-900'
                    } hover:text-[#0066ff]`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <motion.svg
                        animate={{ rotate: activeMenu === link.label ? 180 : 0 }}
                        className="w-3.5 h-3.5 text-gray-400 opacity-80"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    )}
                    {/* Hover Indicator */}
                    <motion.span 
                      className="absolute bottom-0 left-0 h-[2.5px] bg-[#0066ff] rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  </a>

                  {link.dropdown && (
                    <Dropdown isOpen={activeMenu === link.label} items={PRODUCTS_ITEMS} />
                  )}
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <Button variant="ghost" className="text-gray-950 font-[800]">SIGN IN</Button>
              <Button variant="gradient" className="px-7 py-3 font-[900]">SIGN UP</Button>
              <Button className="px-7 py-3 font-[900] bg-[#0066ff] hover:bg-black group">
                SCHEDULE A DEMO
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>

            {/* Mobile Hamburger (3-tier) */}
            <button 
              onClick={() => setMobOpen(true)}
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 hover:bg-gray-50 rounded-2xl transition-colors"
            >
              <span className="w-6 h-[2.5px] bg-gray-950 rounded-full" />
              <span className="w-4 h-[2.5px] bg-gray-900 rounded-full self-start ml-3" />
              <span className="w-6 h-[2.5px] bg-gray-950 rounded-full" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu 
        isOpen={mobOpen} 
        onClose={() => setMobOpen(false)} 
        items={NAV_LINKS} 
      />
    </>
  );
}
