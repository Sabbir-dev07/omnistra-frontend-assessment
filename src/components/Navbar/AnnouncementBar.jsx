import { motion } from 'framer-motion';

/**
 * Chargeflow-style announcement bar with scrolling marquee effect.
 */
export const AnnouncementBar = () => {
  const text = "Announcing our $35m series a funding To take down friendly fraud - read more →";
  
  return (
    <div className="bg-[#6D28D9] h-8 flex items-center overflow-hidden whitespace-nowrap select-none relative z-[60]">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-16 px-4"
      >
        <div className="flex gap-16">
          {[...Array(6)].map((_, i) => (
            <a
              key={i}
              href="#"
              className="text-[11px] font-bold text-white uppercase tracking-wider hover:underline"
            >
              {text}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
