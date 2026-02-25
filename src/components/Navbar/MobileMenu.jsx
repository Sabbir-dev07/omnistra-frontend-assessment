import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const drawerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1
    } 
  },
  exit: { 
    opacity: 0,
    y: 20,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Full-Screen MobileMenu — Premium Vertically Centered Layout.
 * Ensures all content fits elegantly on any screen size.
 */
export const MobileMenu = ({ isOpen, onClose, items = [] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black isolate overflow-y-auto"
        >
          {/* Noise/Glow Background Mix */}
          <div className="absolute inset-0 bg-[#050505] pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60vh] bg-gradient-to-b from-[#4f46e5]/10 to-transparent blur-3xl opacity-50" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
          </div>

          <div className="relative min-h-screen flex flex-col p-8 sm:p-12">
            
            {/* Header */}
            <div className="flex items-center justify-between w-full mb-12">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4f46e5] shadow-[0_0_12px_rgba(79,70,229,1)]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/30">
                  Mission Control
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] active:scale-95 transition-all duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Main Links Area - Vertically Centered */}
            <motion.div 
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-1 flex flex-col justify-center items-center gap-2 max-w-md mx-auto w-full"
            >
              {items.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href || '#'}
                  variants={itemVariants}
                  onClick={onClose}
                  className="group py-3 w-full text-center"
                >
                  <span className="text-[32px] sm:text-[42px] font-bold text-white/90 group-hover:text-white transition-all duration-500 tracking-tighter block relative overflow-hidden">
                    <motion.span 
                      whileHover={{ y: -5 }} 
                      className="block"
                    >
                      {item.label}
                    </motion.span>
                  </span>
                  <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#4f46e5]/50 to-transparent transition-all duration-700 mx-auto mt-2" />
                </motion.a>
              ))}
            </motion.div>

            {/* Footer CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 w-full max-w-md mx-auto flex flex-col gap-4"
            >
              <Button variant="secondary" size="lg" className="w-full justify-center py-7 rounded-[24px] text-[16px] shadow-[0_24px_48px_-12px_rgba(79,70,229,0.4)]">
                Get Started
              </Button>
              <div className="flex items-center justify-center gap-8 py-4">
                <a href="#" className="text-[14px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                  Sign In
                </a>
                <span className="w-1 h-1 rounded-full bg-white/10" />
                <a href="#" className="text-[14px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                  Pricing
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
