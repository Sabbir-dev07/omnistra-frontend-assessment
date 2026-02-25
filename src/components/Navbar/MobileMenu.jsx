import { motion, AnimatePresence } from 'framer-motion';

const drawerVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.4, ease: [0.77, 0, 0.18, 1] } },
  exit:   { x: '100%', transition: { duration: 0.35, ease: [0.77, 0, 0.18, 1] } },
};

/**
 * MobileMenu — full-screen slide drawer from right.
 * Contains all nav links + Sign In / Sign Up / Schedule a Demo CTAs.
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
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 z-[60] w-[320px] max-w-[90vw] bg-white flex flex-col shadow-2xl lg:hidden"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-[13px] font-black uppercase tracking-widest text-gray-900">
                Menu
              </span>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto py-2">
              {items.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href || '#'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.04, duration: 0.3 }}
                  className="flex items-center justify-between px-6 py-4 text-[15px] font-[800] text-gray-900 uppercase tracking-wider border-b border-gray-50 hover:text-[#3448ff] hover:bg-blue-50/30 transition-colors group"
                  onClick={onClose}
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-4 h-4 text-gray-300 group-hover:text-[#3448ff] transition-colors"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="px-6 py-6 flex flex-col gap-3 border-t border-gray-100">
              <a
                href="#"
                className="w-full text-center py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] text-gray-900 border border-gray-200 rounded-full hover:border-[#3448ff] hover:text-[#3448ff] transition-all duration-200"
              >
                Sign In
              </a>
              <a
                href="#"
                className="w-full text-center py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] text-white bg-[#3448ff] rounded-full hover:bg-[#2B3CD5] transition-colors duration-200"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="w-full text-center py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] text-gray-700 hover:text-[#3448ff] transition-colors duration-200"
              >
                Schedule a Demo
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
