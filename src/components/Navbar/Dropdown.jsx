import { motion, AnimatePresence } from 'framer-motion';

/**
 * Mega-dropdown component for Navbar.
 * Features a 2-column grid for product items and a featured footer.
 */
export const Dropdown = ({ isOpen, items = [] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[580px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-6 flex flex-col gap-6 z-50 overflow-hidden"
        >
          {/* Header/Label */}
          <div className="px-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">
              Our Products
            </span>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {items.map((item, idx) => (
              <a
                key={item.title}
                href="#"
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:bg-blue-100">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold text-gray-950 group-hover:text-[#0066ff] transition-colors leading-none">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100/50 text-[#0066ff] uppercase tracking-wide">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-gray-500 leading-snug font-medium">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
          
          {/* Featured Footer */}
          <div className="mx-2 p-4 rounded-2xl bg-[#f8faff] border border-blue-50/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-gray-600">
                Join 15,000+ brands winning with Chargeflow
              </span>
            </div>
            <a href="#" className="text-xs font-bold text-[#0066ff] flex items-center gap-1 group">
              Explore all
              <motion.span 
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
