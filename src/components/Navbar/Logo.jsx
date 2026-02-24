/**
 * Definitive Chargeflow Logo.
 * Matches the exact SVG path and Montserrat wordmark from the live site.
 */
export const Logo = ({ scrolled }) => {
  return (
    <a href="/" className="flex items-center gap-3 group select-none relative z-50">
      <div 
        className="w-[38px] h-[38px] rounded-xl bg-[#0066ff] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-[0_8px_25px_rgba(0,102,255,0.3)]"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 31 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M20.4591 23.996L16.4118 18.3721C16.4118 18.3721 24.1707 12.0345 28.1489 17.7054 10.7054 10.7632L14.0061 5.62295C20.724 0.983474 24.214 1.69848 25.26.22647C31.751 11.4726 26.029 19.6752 20.4587 23.996H20.4591ZM9.95881 -0.000976563L14.0061 5.62295 6.24723 11.9605 3.62693 17.8263 3.64561 17.846 12.7126 13.2319 12.7126 13.2319L16.4118 18.3721C9.69657 22.2965 4.64125 20.8297L0.278806 14.7685C-1.33764 12.5224 4.38893 9.95881 -0.000976563L9.95881 -0.000976563Z" 
            fill="white" 
          />
        </svg>
      </div>
      <div className="flex items-center">
        <span className="text-[24px] font-[800] tracking-[-0.03em] text-gray-950 font-['Montserrat']">
          Charge
        </span>
        <span className="text-[24px] font-[800] tracking-[-0.03em] text-[#0066ff] font-['Montserrat']">
          flow
        </span>
        <span className="text-[24px] font-[800] tracking-[-0.03em] text-gray-950 font-['Montserrat']">
          .
        </span>
      </div>
    </a>
  );
};
