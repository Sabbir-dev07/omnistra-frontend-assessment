import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import { SonarButton } from '../ui/SonarButton';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { Hamburger } from './Hamburger';
import { AnnouncementBar } from './AnnouncementBar';
import { Dropdown } from './Dropdown';

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Product',     dropdown: true },
  { label: 'Customers',    dropdown: true }, // Customers also has a dropdown on live site
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
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col font-['Montserrat']">
        {/* Exact 40px Marquee Bar */}
        <AnnouncementBar />

        {/* Brand Navigation */}
        <nav
          className={`transition-all duration-300 w-full flex justify-center ${
            scrolled 
              ? 'bg-white/90 backdrop-blur-[25px] border-b border-gray-100 py-3' 
              : 'bg-transparent py-5'
          }`}
        >
          {/* 1:1 .c-nav-container (90em / 1440px) with 18px padding */}
          <div className="c-nav-container w-full max-w-[90em] px-[18px] flex items-center justify-between">
            
            {/* Logo Group */}
            <Logo scrolled={scrolled} />

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-[40px]">
              {NAV_LINKS.map((link) => (
                <NavLink 
                  key={link.label}
                  label={link.label}
                  hasDropdown={link.dropdown}
                  isActive={activeMenu === link.label}
                  onEnter={() => link.dropdown && handleEnter(link.label)}
                  onLeave={() => link.dropdown && handleLeave()}
                />
              ))}
            </ul>

            {/* Action Buttons Section (.c-nav-right_wrapper) */}
            <div className="hidden lg:flex items-center gap-[12px] shrink-0">
               <div className="c-nav_buttons-wrapper cc-nav flex items-center gap-[12px]">
                  <SonarButton color="transparent">sign in</SonarButton>
                  <SonarButton color="white">sign up</SonarButton>
                  <SonarButton color="blue">schedule a demo</SonarButton>
               </div>
            </div>

            {/* Mobile Hamburger SVG (Definitive structural match) */}
            <div className="lg:hidden flex items-center">
              <Hamburger isOpen={mobOpen} onClick={() => setMobOpen(!mobOpen)} />
            </div>
          </div>
        </nav>

        {/* Dropdown Portal */}
        <AnimatePresence>
          {activeMenu === 'Product' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-[calc(100%-10px)] left-0 right-0 flex justify-center pt-2"
              onMouseEnter={() => handleEnter('Product')}
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

// Internal Mobile Menu (Simplified but font-consistent)
const MobileMenu = ({ isOpen, onClose, items }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 z-[60] lg:hidden" 
          onClick={onClose} 
        />
        <motion.div
          initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
          transition={{ duration: 0.5, ease: [0.77, 0, 0.18, 1] }}
          className="fixed left-0 top-0 bottom-0 bg-white z-[70] w-[320px] shadow-2xl p-8 flex flex-col font-['Montserrat'] lg:hidden"
        >
          <div className="mt-20 flex flex-col gap-2">
            {items.map(item => (
              <a key={item.label} href="#" className="py-4 text-[18px] font-[800] uppercase tracking-wider border-b border-gray-100 flex justify-between items-center text-gray-900 overflow-hidden">
                {item.label}
                <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4">
              <SonarButton color="transparent" className="w-full">sign in</SonarButton>
              <SonarButton color="white" className="w-full">sign up</SonarButton>
              <SonarButton color="blue" className="w-full">schedule a demo</SonarButton>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
