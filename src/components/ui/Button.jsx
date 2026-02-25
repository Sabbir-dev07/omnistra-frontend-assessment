import { motion } from 'framer-motion';

/**
 * Button — design-system aware.
 * Variants: 'primary' | 'secondary' | 'outline' | 'ghost'
 * Sizes:    'sm' | 'md' (default) | 'lg'
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  icon,
  className = '',
  ...props
}) {
  const sizeClass = {
    sm: 'px-5 py-2.5 text-[11px]',
    md: 'px-7 py-3.5 text-[12px]',
    lg: 'px-10 py-4 text-[13px]',
  }[size];

  const variantClass = {
    primary:   'btn btn-primary',
    secondary: 'btn btn-secondary',
    outline:   'btn btn-outline',
    ghost:     'btn text-white/60 hover:text-white px-0 tracking-widest border-none shadow-none',
  }[variant];

  const Comp = href ? 'a' : Tag;

  return (
    <motion.button
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 0 20px rgba(79,70,229,0.2)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.1em] transition-colors ${variantClass} ${sizeClass} ${className}`}
      onClick={() => href && (window.location.href = href)}
      {...props}
    >
      {children}
      {icon && (
        <motion.span 
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
}

export default Button;
