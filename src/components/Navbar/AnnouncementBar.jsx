import { motion } from 'framer-motion';

/**
 * 1:1 Chargeflow Announcement Bar (from definitive styles).
 * Exact 40px height, black background, and neon-lime text (#C3F967).
 */
export const AnnouncementBar = () => {
  const text = "ANNOUNCING OUR $35M SERIES A FUNDING TO TAKE DOWN FRIENDLY FRAUD - READ MORE →";
  
  return (
    <div className="bg-black h-[40px] flex items-center overflow-hidden whitespace-nowrap select-none relative z-[60] border-b border-white/5 font-['Montserrat']">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30, // Slightly slower for better readability
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-16"
      >
        <div className="flex gap-16 items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-[#C3F967] text-[15px]">⚡</span>
              <a
                href="#"
                className="text-[11px] font-[900] text-[#C3F967] uppercase tracking-[0.05em] hover:opacity-80 transition-opacity"
              >
                {text}
              </a>
              <span className="text-[#C3F967] text-[15px]">⚡</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
