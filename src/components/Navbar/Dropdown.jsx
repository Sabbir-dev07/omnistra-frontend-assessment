import { motion } from 'framer-motion';

/**
 * Chargeflow Mega-Dropdown with exact site items and descriptions.
 */
export const Dropdown = ({ items = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-[600px] bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-7 z-50 overflow-hidden"
    >
      <div className="grid grid-cols-2 gap-x-2 gap-y-2">
        {items.map((item) => (
          <a
            key={item.title}
            href="#"
            className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-indigo-50/50 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:bg-blue-100">
              <span className="text-xl">{item.icon}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-bold text-gray-950 group-hover:text-[#0066ff] transition-colors">
                  {item.title}
                </span>
                {item.badge && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-[#0066ff] uppercase tracking-wide">
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

      {/* Footer Card */}
      <div className="mt-4 p-4 rounded-2xl bg-[#f5f8ff] border border-blue-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[11px] font-semibold text-gray-600 uppercase tracking-widest">
            Trusted by 15,000+ brands
          </span>
        </div>
        <a href="#" className="text-xs font-bold text-[#0066ff] group flex items-center gap-1">
          Learn more
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </motion.div>
  );
};
