import { motion } from 'framer-motion';
import { SonarButton } from './ui/SonarButton';

/**
 * 1:1 Dark Hero (Chargeflow Identity).
 * Reblocks the exact production look with absolute high-contrast typography.
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden pt-[124px]">
      
      {/* 1. Architectural Orbit Lines (SVG Background) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-125 lg:scale-100">
           <circle cx="720" cy="800" r="300" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
           <circle cx="720" cy="800" r="450" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
           <circle cx="720" cy="800" r="600" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
           <circle cx="720" cy="800" r="750" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
           <circle cx="720" cy="800" r="900" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
           
           {/* Blue Dots */}
           <motion.circle animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} cx="420" cy="600" r="6" fill="#3448ff" />
           <motion.circle animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} cx="1020" cy="350" r="6" fill="#3448ff" />
           <motion.circle animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} cx="150" cy="400" r="6" fill="#3448ff" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        
        {/* 2. Top Pill Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-full bg-[#141414] border border-white/10 text-white/90 text-[0.7rem] font-bold uppercase tracking-[0.1em] cursor-pointer hover:bg-[#1a1a1a] transition-colors"
        >
          <span className="text-blue-500">STARTUPS GET UP TO 70% OFF</span>
          <span className="opacity-40">-</span>
          <span>CHECK OUT OUR ACCELERATOR PROGRAM</span>
          <svg className="w-2.5 h-2.5 opacity-60" viewBox="0 0 13 14" fill="none">
             <path d="M1.8 12.5423L0.54 11.2823L10.188 1.7063L10.152 2.5523L5.886 2.5883H1.17V0.950296H12.132V11.9123H10.494V7.1783L10.53 2.7863L11.268 3.0023L1.8 12.5423Z" fill="currentColor"></path>
          </svg>
        </motion.div>

        {/* 3. Definitive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[60px] sm:text-[80px] lg:text-[120px] font-black tracking-[-0.03em] text-white leading-[0.9] uppercase"
        >
          THE AI <br />
          CHARGEBACK <br />
          PLATFORM.
        </motion.h1>

        {/* 4. Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-[1.1rem] sm:text-[1.25rem] text-white/60 max-w-[700px] leading-relaxed font-medium"
        >
          Reduce your dispute rate by 90% and <br className="hidden sm:block" /> maximize chargeback recovery, on autopilot.
        </motion.p>

        {/* 5. Mobile Search (Button Group) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
        >
          {/* Schedule a Demo Circle Button */}
          <div className="absolute bottom-10 right-10 z-20">
             <motion.div 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xl cursor-pointer"
             >
               <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
               </svg>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
