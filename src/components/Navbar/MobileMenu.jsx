import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

/**
 * Full-screen mobile menu drawer with backdrop blur and slide-in from LEFT.
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
            className="fixed inset-0 z-[50] bg-white/95 backdrop-blur-xl flex flex-col p-8 pt-24 lg:hidden w-[300px] shadow-2xl"
          >
            {/* Nav list */}
            <div className="flex flex-col gap-2">
              {items.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href || '#'}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="group py-4 text-[20px] font-bold text-gray-900 border-b border-gray-100 flex justify-between items-center"
                  onClick={onClose}
                >
                  <span className="group-hover:text-[#0066ff] transition-colors">
                    {item.label}
                  </span>
                  {item.dropdown && (
                    <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Actions */}
            <div className="mt-auto flex flex-col gap-3">
              <Button variant="ghost" className="w-full py-4 text-gray-900">
                Sign in
              </Button>
              <Button variant="secondary" className="w-full py-4">
                Sign up
              </Button>
              <Button className="w-full py-4">
                Schedule a demo
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
