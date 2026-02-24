/**
 * 1:1 Hamburger Menu Icon (from outerHTML).
 * Reblocks the exact SVG paths and internal CSS transitions for the Chargeflow menu.
 */
export const Hamburger = ({ isOpen, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`c-nav_menu-btn w-nav-button h-12 w-12 flex items-center justify-center transition-colors hover:bg-gray-50 rounded-xl relative z-[70] ${isOpen ? 'w--open' : ''}`}
      aria-label="menu"
      role="button"
    >
      <div className="c-nav_menu-burger-icon w-[18px] h-[14px]">
        <svg 
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 18 14" 
          shapeRendering="geometricPrecision" 
          textRendering="geometricPrecision"
        >
          <style>
            {`
            .c-nav_menu-btn g { transition: transform .8s cubic-bezier(0.77, 0, 0.18, 1); }
            
            /* Top Line */
            #line-top-to { transform: translate(16.5px, 1px); }
            .w--open #line-top-to { transform: translate(14.303301px, 1.696699px); }
            #line-top-tr { transform: rotate(0deg); transition: transform .8s cubic-bezier(0.77, 0, 0.18, 1); }
            .w--open #line-top-tr { transform: rotate(-45deg); }

            /* Middle Line */
            #line-mid-tr { transform: translate(9px, 7px) rotate(0deg); }
            .w--open #line-mid-tr { transform: translate(9px, 7px) rotate(45deg); }

            /* Bottom Line */
            #line-bot-to { transform: translate(16.50054px, 13px); }
            .w--open #line-bot-to { transform: translate(14.303683px, 12.303683px); }
            #line-bot-tr { transform: rotate(0deg); transition: transform .8s cubic-bezier(0.77, 0, 0.18, 1); }
            .w--open #line-bot-tr { transform: rotate(45deg); }
            `}
          </style>
          
          {/* Top Line */}
          <g id="line-top-to" transform="translate(16.5, 1)">
            <g id="line-top-tr" transform="rotate(0)">
              <path d="M1.5,1h15" transform="translate(-16.5,-1)" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>

          {/* Middle Line */}
          <g id="line-mid-tr" transform="translate(9,7) rotate(0)">
            <path d="M1.5,7h15" transform="translate(-9,-7)" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Bottom Line */}
          <g id="line-bot-to" transform="translate(16.50054, 13)">
            <g id="line-bot-tr" transform="rotate(0)">
              <path d="M1.5,13h15" transform="translate(-16.50054,-13)" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      </div>
    </button>
  );
};
