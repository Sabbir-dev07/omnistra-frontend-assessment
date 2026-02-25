import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const drawerVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.2
    } 
  },
  exit: { 
    x: '100%', 
    opacity: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  },
};

const itemVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

/**
 * Modern MobileMenu — High-end dark glassmorphic design.
 * Features staggered animations, neon accents, and premium typography.
 */
export const MobileMenu = ({ isOpen, onClose, items = [] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Enhanced Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-md lg:hidden"
          />

          {/* Premium Dark Drawer */}
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 z-[60] w-full sm:w-[380px] bg-[#050505]/95 backdrop-blur-3xl flex flex-col border-l border-white/[0.08] lg:hidden"
          >
            {/* Header with Glass Effect */}
            <div className="flex items-center justify-between px-8 py-8 border-b border-white/[0.05]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4f46e5] animate-pulse shadow-[0_0_10px_rgba(79,70,229,0.8)]" />
                <span className="text-[12px] font-black uppercase tracking-[0.25em] text-white/40">
                  Navigation
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Staggered Nav Links - No Scroll */}
            <div className="flex-1 py-4">
              <div className="flex flex-col">
                {items.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href || '#'}
                    variants={itemVariants}
                    className="flex items-center justify-between px-8 py-3.5 group transition-all duration-300"
                    onClick={onClose}
                  >
                    <div className="flex flex-col">
                      <span className="text-[18px] font-bold text-white/90 group-hover:text-[#4f46e5] group-hover:translate-x-1 transition-all duration-300 tracking-tight">
                        {item.label}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-[#4f46e5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Modernized CTA Footer */}
            <div className="px-8 py-10 flex flex-col gap-4 border-t border-white/[0.05] bg-white/[0.01]">
              <div className="flex flex-col gap-3">
                <Button variant="secondary" size="lg" className="w-full justify-center py-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)]">
                  Get Started
                </Button>
                <button className="w-full text-center py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-200">
                  Sign In
                </button>
              </div>
              
              <p className="text-center text-[10px] text-white/20 font-medium tracking-wide mt-4 uppercase">
                Institutional Grade AI Solutions
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
