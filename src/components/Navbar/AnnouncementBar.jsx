import { motion } from 'framer-motion';

/**
 * 1:1 Chargeflow Announcement Bar.
 * Exact 40px height, black background, and Montserrat typography.
 */
export const AnnouncementBar = () => {
  const text = "ANNOUNCING OUR $35M SERIES A FUNDING TO TAKE DOWN FRIENDLY FRAUD - READ MORE →";
  
  return (
    <div className="bg-black h-[40px] flex items-center overflow-hidden whitespace-nowrap select-none relative z-[60] border-b border-white/5 font-['Montserrat']">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-12"
      >
        <div className="flex gap-12 items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-[#bef264] text-[14px]">⚡</span>
              <a
                href="#"
                className="text-[11px] font-[900] text-[#bef264] uppercase tracking-[0.05em] hover:opacity-80 transition-opacity"
              >
                {text}
              </a>
              <span className="text-[#bef264] text-[14px]">⚡</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
