/**
 * Extreme precision Chargeflow Logo.
 * Matches the exact proportions of the brand lightning bolt + wordmark.
 */
export const Logo = ({ scrolled }) => {
  return (
    <a href="/" className="flex items-center gap-3 group select-none relative z-50">
      <div 
        className="w-9 h-9 rounded-xl bg-[#0066ff] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_8px_20px_rgba(0,102,255,0.25)]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
            fill="white" 
            stroke="white" 
            strokeWidth="1.2" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className="text-[22px] font-bold tracking-[-0.03em] text-gray-950 font-inter">
          Charge
        </span>
        <span className="text-[22px] font-bold tracking-[-0.03em] text-[#0066ff] font-inter">
          flow.
        </span>
      </div>
    </a>
  );
};
