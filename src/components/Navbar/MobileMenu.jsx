import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

/**
 * Mobile Menu drawer with definitive brand styling.
 */
export const MobileMenu = ({ isOpen, onClose, items = [] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[45] bg-gray-950/20 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.18, 1] }}
            className="fixed inset-0 z-[50] bg-white/95 backdrop-blur-xl flex flex-col p-8 pt-24 lg:hidden w-[320px] shadow-2xl font-['Montserrat']"
          >
            {/* Nav list */}
            <div className="flex flex-col gap-1">
              {items.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href || '#'}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="group py-4 text-[18px] font-[800] text-gray-900 border-b border-gray-100 flex justify-between items-center uppercase tracking-wider"
                  onClick={onClose}
                >
                  <span className="group-hover:text-[#0066ff] transition-colors">
                    {item.label}
                  </span>
                  <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Actions */}
            <div className="mt-auto flex flex-col gap-4">
              <Button variant="ghost" className="w-full py-5 text-[15px]">
                SIGN IN
              </Button>
              <Button variant="gradient" className="w-full py-5 text-[15px]">
                SIGN UP
              </Button>
              <Button className="w-full py-5 bg-[#0066ff] text-[15px]">
                SCHEDULE A DEMO
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
