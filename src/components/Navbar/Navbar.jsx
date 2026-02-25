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
import { NAV_LINKS, DROPDOWN_REGISTRY } from './NavbarData';


// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const scrolled = useScroll(10);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobOpen, setMobOpen] = useState(false);
  const hoverTimer = useRef(null);

  const handleEnter = useCallback((label) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveMenu(label);
  }, []);

  const handleLeave = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveMenu(null), 300);
  }, []);

  const closeMenuImmediate = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveMenu(null);
  }, []);

  const activeDropdown = activeMenu ? DROPDOWN_REGISTRY[activeMenu] : null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none px-4">
        <div className="pointer-events-auto">
          <AnnouncementBar />
        </div>

        <div className="w-full flex justify-center items-center relative pt-[12px] mb-[48px] pointer-events-auto">
          {/* MASTER MEGA PANEL CONTAINER */}
          <motion.div 
            initial={false}
            animate={{ 
              backgroundColor: activeDropdown || scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0)',
              backdropFilter: activeDropdown || scrolled ? 'blur(32px)' : 'blur(0px)',
              borderColor: activeDropdown || scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
            }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="w-full max-w-[1440px] rounded-[32px] border transition-all duration-300 overflow-hidden flex flex-col shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]"
          >
            {/* Top Bar: Logo — Links — CTAs */}
            <div className="w-full h-[60px] flex items-center justify-between relative px-4">
              
              {/* 1. Left Slot (Logo) - Animates Inward */}
              <motion.div 
                animate={{ paddingLeft: activeDropdown ? '7rem' : '1.5rem' }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="flex items-center z-20"
              >
                <Logo scrolled={scrolled} active={!!activeDropdown} />
              </motion.div>

              {/* 2. Center Pill Slot (ABSOLUTELY LOCKED) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <ul className="c-nav-pill-wrapper list-none m-0 p-0 flex items-center gap-1 px-6">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.label}
                      label={link.label}
                      href={link.href}
                      hasDropdown={link.dropdown}
                      isActive={activeMenu === link.label}
                      scrolled={scrolled}
                      onMouseEnter={() => {
                        if (link.dropdown) {
                          handleEnter(link.label);
                        } else {
                          closeMenuImmediate();
                        }
                      }}
                      onMouseLeave={() => {
                        if (link.dropdown) handleLeave();
                      }}
                    />
                  ))}
                </ul>
              </div>

              {/* 3. Right Slot (CTAs) - Animates Inward */}
              <motion.div 
                animate={{ paddingRight: activeDropdown ? '7rem' : '1.5rem' }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="hidden lg:flex items-center gap-5 whitespace-nowrap z-20"
              >
                <a
                  href="#"
                  className="flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.08em] text-white hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5"
                >
                  Sign In 
                </a>
                <a
                  href="#"
                  className="flex-shrink-0 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white bg-[#3448ff] hover:bg-[#2B3CD5] transition-all duration-200 rounded-full flex items-center gap-2 shadow-[0_8px_20px_-6px_rgba(52,72,255,0.4)]"
                >
                  Sign Up 
                </a>
              </motion.div>

              {/* Mobile Hamburger */}
              <div className="lg:hidden absolute right-6 z-40">
                <Hamburger
                  isOpen={mobOpen}
                  onClick={() => setMobOpen((v) => !v)}
                  scrolled={scrolled}
                />
              </div>
            </div>

            {/* Bottom Section: Expanded Dropdown Content */}
            <AnimatePresence mode="wait">
              {activeDropdown && (
                <motion.div
                  key={activeMenu}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto',
                    paddingLeft: activeDropdown ? '7rem' : '4px',
                    paddingRight: activeDropdown ? '7rem' : '4px',
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="w-full border-t border-white/5"
                  onMouseEnter={() => handleEnter(activeMenu)}
                  onMouseLeave={handleLeave}
                >
                  <div className="py-10 w-full overflow-hidden">
                    <Dropdown 
                      type={activeDropdown.type} 
                      items={activeDropdown.items} 
                      leftSide={activeDropdown.leftSide}
                      sidebar={activeDropdown.sidebar}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileMenu isOpen={mobOpen} onClose={() => setMobOpen(false)} items={NAV_LINKS} />
    </>
  );
}
