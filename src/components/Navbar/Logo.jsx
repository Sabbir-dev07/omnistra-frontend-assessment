/**
 * Chargeflow wordmark with lightning bolt icon.
 */
export const Logo = ({ scrolled }) => {
  return (
    <a href="/" className="flex items-center gap-2 group select-none relative z-50">
      <div 
        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
          scrolled ? 'bg-[#0066ff]' : 'bg-[#0066ff]'
        } group-hover:scale-110 shadow-lg shadow-blue-600/20`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight text-gray-950">
        Charge<span className="text-[#0066ff]">flow</span>
      </span>
    </a>
  );
};
