import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import { Button } from '../ui/Button';
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
  const scrolled = useScroll(20);
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
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none px-4 lg:px-6 pt-4 lg:pt-6">
        <div className="pointer-events-auto max-w-[1440px] mx-auto w-full mb-4">
          <AnnouncementBar />
        </div>

        <div className="w-full flex justify-center items-center relative pointer-events-auto">
          {/* MASTER MEGA PANEL CONTAINER */}
          <motion.div 
            initial={false}
            animate={{ 
              backgroundColor: activeDropdown || scrolled ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0)',
              backdropFilter: activeDropdown || scrolled ? 'blur(24px)' : 'blur(0px)',
              borderColor: activeDropdown || scrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0)',
              y: scrolled ? 0 : 0,
              scale: scrolled ? 1 : 1.01,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[1440px] rounded-[32px] border overflow-hidden flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
          >
            {/* Top Bar: Logo — Links — CTAs */}
            <div className="w-full h-16 flex items-center justify-between relative px-6 lg:px-8">
              
              {/* 1. Left Slot (Logo) */}
              <motion.div 
                animate={{ x: activeDropdown ? 20 : 0 }}
                className="flex items-center z-20"
              >
                <Logo scrolled={scrolled} active={!!activeDropdown} />
              </motion.div>

              {/* 2. Center Pill Slot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:block">
                <ul className="list-none m-0 p-0 flex items-center gap-1">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.label}
                      label={link.label}
                      href={link.href}
                      hasDropdown={link.dropdown}
                      isActive={activeMenu === link.label}
                      scrolled={scrolled}
                      onMouseEnter={() => link.dropdown ? handleEnter(link.label) : closeMenuImmediate()}
                      onMouseLeave={() => link.dropdown && handleLeave()}
                    />
                  ))}
                </ul>
              </div>

              {/* 3. Right Slot (CTAs) */}
              <motion.div 
                animate={{ x: activeDropdown ? -20 : 0 }}
                className="hidden lg:flex items-center gap-4 z-20"
              >
                <motion.a
                  href="#"
                  whileHover={{ opacity: 0.7 }}
                  className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors"
                >
                  Sign In 
                </motion.a>
                <Button variant="secondary" size="sm" className="rounded-full px-8">
                  Get Started
                </Button>
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
            <AnimatePresence>
              {activeDropdown && (
                <motion.div
                  key={activeMenu}
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full border-t border-white/5 bg-black/40"
                  onMouseEnter={() => handleEnter(activeMenu)}
                  onMouseLeave={handleLeave}
                >
                  <div className="py-12 px-10 lg:px-20">
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
      <AnimatePresence>
        {mobOpen && (
          <MobileMenu isOpen={mobOpen} onClose={() => setMobOpen(false)} items={NAV_LINKS} />
        )}
      </AnimatePresence>
    </>
  );
}
