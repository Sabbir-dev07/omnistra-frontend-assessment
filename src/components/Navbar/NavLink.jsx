import { motion } from 'framer-motion';

/**
 * NavLink — single nav item in the pill bar.
 * Shows label + optional chevron; animates chevron rotation when active.
 */
export const NavLink = ({
  label,
  href = '#',
  hasDropdown = false,
  isActive = false,
  scrolled = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  const textColor = 'text-white/90 group-hover:text-white';
  const arrowColor = 'text-white/40';

  return (
    <li
      className="relative list-none"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={href}
        className="relative flex items-center gap-1 px-1.5 py-2 text-[13px] font-[800] uppercase tracking-[0.05em] transition-colors duration-300 select-none text-white hover:text-white/80"
      >
        {/* Label */}
        <span
          className={`font-bold text-[10px] uppercase tracking-[0.08em] leading-none transition-colors duration-200 ${textColor} ${
            isActive ? '!text-white' : ''
          }`}
        >
          {label}
        </span>

      </a>
    </li>
  );
};
