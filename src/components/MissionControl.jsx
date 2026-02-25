import { motion } from 'framer-motion';

/**
 * Mission Control Section: Your Mission Control for End-To-End Servicing
 * Matches domu.ai's centralized command center visual.
 */
export default function MissionControl() {
  return (
    <section className="bg-black py-24 lg:py-40 border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Grid or Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#3448ff]/10 blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 px-4 py-1.5 rounded-full bg-[#111] border border-white/10"
          >
            <span className="text-[10px] font-black text-[#3448ff] uppercase tracking-[0.2em]">Dashboard Control</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Your Mission Control for <br />
            <span className="text-white/40">End-To-End Servicing.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-gray-400 max-w-[720px] leading-relaxed mb-16"
          >
            A centralized command center for high-stakes recovery. Track performance and agent activity in real-time with a continuous data stream designed for rapid, informed decision-making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-[1100px] aspect-[16/9] rounded-[40px] border border-white/10 bg-[#080808] relative overflow-hidden group shadow-2xl"
          >
            {/* Mock Dashboard UI Elements */}
            <div className="absolute inset-0 p-8 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="px-4 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                  Live Stream: Active
                </div>
              </div>

              <div className="flex-1 grid grid-cols-3 gap-6">
                <div className="col-span-2 rounded-2xl bg-white/5 border border-white/5 p-6 relative overflow-hidden">
                   <div className="h-full w-full bg-gradient-to-t from-[#3448ff]/20 to-transparent absolute bottom-0 left-0" />
                   <div className="relative text-left">
                      <div className="text-[12px] font-bold text-white/40 uppercase mb-2">Performance Yield</div>
                      <div className="text-[48px] font-black text-white">$4.2M</div>
                   </div>
                </div>
                <div className="flex flex-col gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex-1 rounded-2xl bg-white/5 border border-white/5 p-4 flex flex-col justify-center items-start">
                        <div className="text-[10px] font-bold text-white/30 uppercase">Agent {i} Status</div>
                        <div className="text-[16px] font-bold text-green-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Active
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Hover Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3448ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-col items-center gap-6"
          >
            <button className="px-10 py-4 rounded-full bg-white text-black text-[14px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Start a Pilot
            </button>
            <div className="flex gap-12 grayscale opacity-40">
                {['Y Combinator', 'AWS', 'Microsoft'].map(name => (
                  <span key={name} className="text-[12px] font-bold text-white uppercase tracking-widest">{name}</span>
                ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
