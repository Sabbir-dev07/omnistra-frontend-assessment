import { motion } from 'framer-motion';

const ANNOUNCEMENT_TEXT = 'ANNOUNCING OUR $35M SERIES A FUNDING TO TAKE DOWN FRIENDLY FRAUD — READ MORE ->';


export const AnnouncementBar = () => {
  // Repeat text enough times to fill 200% width
  const items = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="bg-black select-none border-b border-white/5" style={{ height: '24px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <motion.div
        className="flex items-center gap-0"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      >
        {/* Render 2 full sets so the -50% loop is seamless */}
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center">
            {items.map((i) => (
              <div key={i} className="flex items-center gap-0 whitespace-nowrap">
                <span className="text-[#C3F967] text-[13px] px-5 leading-none">⚡</span>
                <a
                  href="#"
                  className="text-white text-[9px] font-[900] uppercase tracking-[0.06em] hover:text-[#C3F967] transition-colors duration-150"
                >
                  {ANNOUNCEMENT_TEXT}
                </a>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
