import { motion } from 'framer-motion';

/**
 * 1:1 Sonar Button (from outerHTML).
 * Replicates the exact DOM structure and SVG arrow from Chargeflow.io.
 */
export const SonarButton = ({ children, color = 'blue', href = '#', className = '' }) => {
  const colorMap = {
    blue: 'bg-[#0066ff] text-white',
    black: 'bg-black text-white hover:bg-gray-900',
    white: 'bg-white text-gray-900 border border-gray-100',
    transparent: 'bg-transparent text-gray-950 hover:text-[#0066ff]'
  };

  const gradientStyle = color === 'gradient' ? {
    background: 'linear-gradient(135deg, #0066ff 0%, #7c3aed 100%)',
  } : {};

  return (
    <motion.a 
      href={href}
      className={`c-sonar-button w-inline-block flex items-center gap-[12px] px-[24px] py-[12px] rounded-full transition-all duration-300 group select-none font-['Montserrat'] ${colorMap[color] || ''} ${className}`}
      style={gradientStyle}
      whileHover={{ scale: 1.05 }}
    >
      <div className="c-text-wr">
        <p className="text-[13px] font-[800] tracking-[0.06em] uppercase whitespace-nowrap">
          {children}
        </p>
      </div>
      <div className="c-button-arrow w-[13px] h-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <div className="c-button-embed w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.8 12.5423L0.54 11.2823L10.188 1.7063L10.152 2.5523L5.886 2.5883H1.17V0.950296H12.132V11.9123H10.494V7.1783L10.53 2.7863L11.268 3.0023L1.8 12.5423Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </motion.a>
  );
};
