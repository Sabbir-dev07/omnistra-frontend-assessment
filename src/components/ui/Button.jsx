import { motion } from 'framer-motion';

/**
 * Reusable Button component matching the Chargeflow design system.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'primary' | 'ghost' | 'outline' | 'secondary'} props.variant
 * @param {string} props.className
 * @param {Object} props.motionProps - Additional Framer Motion props
 */
export const Button = ({ children, variant = 'primary', className = '', motionProps = {}, ...props }) => {
  const baseStyles = 'px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-[#0066ff] text-white hover:bg-[#0055dd] shadow-lg shadow-blue-600/10',
    secondary: 'bg-white text-gray-950 border border-gray-200 hover:border-blue-400 shadow-sm',
    ghost: 'bg-transparent text-gray-700 hover:text-gray-950 px-4',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};
