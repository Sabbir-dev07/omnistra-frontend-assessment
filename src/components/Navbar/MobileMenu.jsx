import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const drawerVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
      delayChildren: 0.1
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
 * MobileMenu — Premium Glassmorphic Drawer (NO SCROLL).
 * Designed to fit all content within the viewport without scrolling.
 */
export const MobileMenu = ({ isOpen, onClose, items = [] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Premium Dark Drawer */}
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 z-[60] w-[320px] max-w-[85vw] bg-[#080808]/95 backdrop-blur-3xl flex flex-col border-l border-white/[0.08] lg:hidden shadow-[-20px_0_40px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/[0.05] shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] shadow-[0_0_8px_rgba(79,70,229,0.8)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                  Menu
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] transition-all"
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links - Static container, no scroll */}
            <div className="flex-1 py-4 flex flex-col justify-center">
              <div className="flex flex-col">
                {items.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href || '#'}
                    variants={itemVariants}
                    className="flex items-center justify-between px-6 py-3.5 group transition-all duration-300"
                    onClick={onClose}
                  >
                    <span className="text-[16px] font-bold text-white/80 group-hover:text-[#4f46e5] group-hover:translate-x-1 transition-all duration-300 tracking-tight">
                      {item.label}
                    </span>
                    <svg className="w-3.5 h-3.5 text-white/30 group-hover:text-[#4f46e5] group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Premium CTA Footer */}
            <div className="px-6 py-8 flex flex-col gap-4 border-t border-white/[0.05] bg-white/[0.01] shrink-0 mt-auto">
              <Button variant="secondary" size="lg" className="w-full justify-center py-5 rounded-xl shadow-[0_15px_30px_-10px_rgba(79,70,229,0.3)]">
                Get Started
              </Button>
              <div className="flex flex-col items-center gap-2">
                <a href="#" className="text-[11px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-[0.15em] py-2">
                  Sign In
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
