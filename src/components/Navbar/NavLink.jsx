import { motion } from 'framer-motion';

/**
 * 1:1 Nav Link (Dark Theme Refactor).
 */
export const NavLink = ({ label, hasDropdown = false, isActive = false, scrolled = false, onEnter, onLeave }) => {
  return (
    <li 
      className="relative flex items-center group"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="c-nav_link flex items-center gap-[0.5em] cursor-pointer relative py-2">
        {/* Link Text - Precise white typography */}
        <span
          className={`c-text-4 text-[0.825rem] font-bold uppercase tracking-[0.05em] transition-colors group-hover:text-blue-500 leading-[1.2] ${
            scrolled ? 'text-gray-950' : 'text-white'
          }`}
        >
          {label}
        </span>

        {/* Vertical Arrow SVG */}
        {hasDropdown && (
          <div
            className={`c-nav-link_arrow w-[0.6em] h-[0.6em] flex items-center justify-center shrink-0 group-hover:text-blue-500 ${
              scrolled ? 'text-gray-400' : 'text-white/40'
            }`}
          >
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.76308 0.167969V7.19697L4.44408 6.78997L6.34708 5.32697L8.16208 3.95197V5.21697L4.24608 8.17597L0.330078 5.21697V3.95197L2.14508 5.32697L4.04808 6.78997L3.72908 7.19697V0.167969H4.76308Z" fill="currentColor"></path>
              </svg>
            </motion.div>
          </div>
        )}
      </div>
    </li>
  );
};
