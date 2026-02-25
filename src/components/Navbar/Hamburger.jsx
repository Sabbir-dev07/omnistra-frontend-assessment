/**
 * Hamburger — animated 3-line → X icon.
 * Accepts scrolled prop to invert colors when navbar is white.
 */
export const Hamburger = ({ isOpen, onClick, scrolled = false }) => {
  const lineColor = scrolled ? '#111827' : '#ffffff';

  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg transition-colors duration-200 hover:bg-white/10 focus:outline-none"
    >
      {/* Top bar */}
      <span
        className="block w-[20px] h-[2px] rounded-full transition-all duration-300 origin-center"
        style={{
          backgroundColor: lineColor,
          transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
        }}
      />
      {/* Mid bar */}
      <span
        className="block w-[20px] h-[2px] rounded-full transition-all duration-300"
        style={{
          backgroundColor: lineColor,
          opacity: isOpen ? 0 : 1,
          transform: isOpen ? 'scaleX(0)' : 'none',
        }}
      />
      {/* Bottom bar */}
      <span
        className="block w-[20px] h-[2px] rounded-full transition-all duration-300 origin-center"
        style={{
          backgroundColor: lineColor,
          transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
        }}
      />
    </button>
  );
};
