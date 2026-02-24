import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import { SonarButton } from '../ui/SonarButton';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { Hamburger } from './Hamburger';
import { AnnouncementBar } from './AnnouncementBar';
import { Dropdown } from './Dropdown';
import { MobileMenu } from './MobileMenu';

// ─── Data (Definitive) ────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Product',     dropdown: true },
  { label: 'Customers',    dropdown: true },
  { label: 'Pricing',      href: '#' },
  { label: 'Integrations', dropdown: true },
  { label: 'Resources',    dropdown: true },
  { label: 'Company',      dropdown: true },
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-colors duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        {/* Definitive 40px Announcement Bar */}
        <AnnouncementBar />

        {/* Primary Navigation Shell */}
        <nav className="w-full h-[84px] flex justify-center items-center relative px-10">
          <div className="c-nav-container w-full flex items-center justify-between">
            
            {/* 1. Logo (Left) */}
            <div className="flex-1 flex justify-start">
               <Logo scrolled={scrolled} />
            </div>

            {/* 2. Centered Pill Navigation (Center) */}
            <div className="hidden lg:flex items-center">
              <div className="c-nav-pill-wrapper flex items-center gap-[1.5em] h-[48px]">
                {NAV_LINKS.map((link) => (
                  <NavLink 
                    key={link.label}
                    label={link.label}
                    hasDropdown={link.dropdown}
                    isActive={activeMenu === link.label}
                    scrolled={scrolled}
                    onEnter={() => link.dropdown && handleEnter(link.label)}
                    onLeave={() => link.dropdown && handleLeave()}
                  />
                ))}
              </div>
            </div>

            {/* 3. Action Buttons (Right) */}
            <div className="flex-1 flex justify-end items-center gap-[2.5em]">
               {/* Sign In Link */}
               <a
                 href="#"
                 className={`hidden lg:flex items-center gap-1 text-[0.825rem] font-bold uppercase tracking-[0.05em] hover:text-blue-500 transition-colors group ${
                   scrolled ? 'text-gray-950' : 'text-white'
                 }`}
               >
                 SIGN IN 
                 <svg className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 13 14" fill="none">
                    <path d="M1.8 12.5423L0.54 11.2823L10.188 1.7063L10.152 2.5523L5.886 2.5883H1.17V0.950296H12.132V11.9123H10.494V7.1783L10.53 2.7863L11.268 3.0023L1.8 12.5423Z" fill="currentColor"></path>
                 </svg>
               </a>

               {/* Sign Up Button */}
               <SonarButton color="blue" href="#">SIGN UP</SonarButton>

               {/* Mobile Toggle */}
               <div className="lg:hidden flex items-center">
                 <Hamburger isOpen={mobOpen} onClick={() => setMobOpen(!mobOpen)} />
               </div>
            </div>
          </div>
        </nav>

        {/* Mega-Dropdown System */}
        <AnimatePresence>
          {activeMenu && activeMenu !== 'Pricing' && (
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[124px] left-0 right-0 flex justify-center pointer-events-auto"
              onMouseEnter={() => handleEnter(activeMenu)}
              onMouseLeave={() => handleLeave()}
            >
              <Dropdown items={PRODUCTS_ITEMS} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu 
        isOpen={mobOpen} 
        onClose={() => setMobOpen(false)} 
        items={NAV_LINKS} 
      />
    </>
  );
}
