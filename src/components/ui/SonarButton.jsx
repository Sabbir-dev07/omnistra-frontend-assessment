import { motion } from 'framer-motion';

/**
 * 1:1 Sonar Button (Refactored to use DEFINITIVE production variables).
 */
export const SonarButton = ({ children, color = 'blue', href = '#', className = '' }) => {
  const colorMap = {
    blue: 'bg-[var(--button-bg-color)] text-[var(--button-text-color)] hover:bg-[var(--button-hover-bg-color)]',
    black: 'bg-black text-white hover:bg-gray-900',
    white: 'bg-white text-[var(--lightmode--onsurface)] border border-[var(--_apps---colors--border)] hover:border-[var(--blue-500)] shadow-sm',
    transparent: 'bg-transparent text-[var(--_apps---colors--foreground)] hover:text-[var(--blue-500)]'
  };

  const gradientStyle = color === 'gradient' ? {
    background: 'linear-gradient(135deg, var(--blue-500) 0%, var(--primary) 100%)',
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
        <p className="whitespace-nowrap">
          {children}
        </p>
      </div>
      
      {/* Precision Arrow (from styles) */}
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
