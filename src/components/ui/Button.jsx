import { motion } from 'framer-motion';

/**
 * Reusable Button component for the definitive Chargeflow clone.
 * Variants: primary (solid blue), gradient (blue-to-purple), ghost (text), secondary (white outline).
 */
export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-[24px] py-[12px] rounded-full text-[13px] font-[800] tracking-[0.06em] uppercase font-['Montserrat'] transition-all duration-300 flex items-center justify-center gap-2 select-none";
  
  const variants = {
    primary: 'bg-[#0066ff] text-white hover:bg-[#0052cc] shadow-[0_8px_20px_rgba(0,102,255,0.2)]',
    gradient: 'text-white shadow-[0_8px_20px_rgba(99,102,241,0.3)]', // Gradient applied in style prop for accuracy
    secondary: 'bg-white text-gray-900 border border-gray-200 hover:border-[#0066ff] shadow-sm',
    ghost: 'bg-transparent text-gray-950 hover:text-[#0066ff] px-4',
    outline: 'bg-transparent border-2 border-[#0066ff] text-[#0066ff] hover:bg-[#0066ff] hover:text-white',
  };

  const gradientStyle = variant === 'gradient' ? {
    background: 'linear-gradient(135deg, #0066ff 0%, #7c3aed 100%)',
  } : {};

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={gradientStyle}
      {...props}
    >
      {children}
    </motion.button>
  );
};
