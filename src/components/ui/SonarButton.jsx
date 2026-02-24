import { motion } from 'framer-motion';

/**
 * 1:1 Sonar Button (Refactored for Safety & Visibility).
 * Consumes production variables with safe fallbacks.
 */
export const SonarButton = ({ children, color = 'blue', href = '#', className = '' }) => {
  const colorMap = {
    blue: 'bg-[#3448ff] text-white hover:bg-[#2B3CD5]',
    black: 'bg-black text-white hover:bg-gray-900',
    white: 'bg-white text-gray-900 border border-gray-100 hover:border-[#3448ff] shadow-sm',
    transparent: 'bg-transparent text-gray-950 hover:text-[#3448ff]'
  };

  const gradientStyle = color === 'gradient' ? {
    background: 'linear-gradient(135deg, #3448ff 0%, #7443ff 100%)',
  } : {};

  return (
    <motion.a 
      href={href}
      className={`c-sonar-button flex items-center justify-center gap-[0.75em] transition-all duration-250 ease-in-out group select-none ${colorMap[color] || ''} ${className}`}
      style={gradientStyle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="c-text-wr">
        <p className="whitespace-nowrap font-medium uppercase tracking-[0.01em] text-[1rem]">
          {children}
        </p>
      </div>
      
      {/* Precision Arrow (from production styles) */}
      <div className="c-button-arrow w-[13px] h-[14px] flex items-center justify-center shrink-0 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <div className="c-button-embed w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.8 12.5423L0.54 11.2823L10.188 1.7063L10.152 2.5523L5.886 2.5883H1.17V0.950296H12.132V11.9123H10.494V7.1783L10.53 2.7863L11.268 3.0023L1.8 12.5423Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </motion.a>
  );
};
