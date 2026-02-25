import { motion } from 'framer-motion';

/**
 * SonarButton — pill CTA button used in the Navbar right actions.
 * Matches Chargeflow's production Sign Up button exactly.
 */
export const SonarButton = ({ children, color = 'blue', href = '#', className = '' }) => {
  const styles = {
    blue: {
      background: '#3448ff',
      color: '#fff',
      hoverBg: '#2B3CD5',
    },
    white: {
      background: '#fff',
      color: '#111827',
      border: '1px solid rgba(0,0,0,0.08)',
    },
    black: {
      background: '#000',
      color: '#fff',
    },
  };

  const s = styles[color] || styles.blue;

  return (
    <motion.a
      href={href}
      className={`c-sonar-button group inline-flex items-center gap-2 select-none ${className}`}
      style={{ background: s.background, color: s.color, border: s.border }}
      whileHover={{ scale: 1.05, background: s.hoverBg || s.background }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18 }}
    >
      <span className="whitespace-nowrap">{children}</span>
      {/* Arrow icon */}
      <svg
        className="w-[11px] h-[11px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.8 12.5423L0.54 11.2823L10.188 1.7063L10.152 2.5523L5.886 2.5883H1.17V0.950296H12.132V11.9123H10.494V7.1783L10.53 2.7863L11.268 3.0023L1.8 12.5423Z"
          fill="currentColor"
        />
      </svg>
    </motion.a>
  );
};
