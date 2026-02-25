import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const CASES = [
  {
    company: 'Top 5 U.S. Fintech',
    metric: '30% fewer complaints per 100 calls',
    desc: 'By deploying our AI agent for voice calls and text, we scaled compliant inbound and outbound interactions, reducing complaints per 100 calls.',
  },
  {
    company: 'SBS Insurance',
    metric: '3% Lift in Liquidation',
    desc: 'SBS Insurance improved liquidation rates by 3% within the first two months by triggering calls after customers opened an email or clicked a link.',
  },
  {
    company: 'BNP Paribas',
    metric: 'Right-party contacts up 40%',
    desc: 'BNP Paribas increased its collections capacity, increasing right-party contacts by 40% with our intelligent AI agent platform.',
  },
];

import { variants } from '../utils/motion';

export default function ClientCases() {
  return (
    <section id="cases" className="section bg-transparent py-24 lg:py-32">
      <div className="container relative z-10">

        {/* ── Header ── */}
        <div className="mb-14 lg:mb-20">
          <motion.div
            variants={variants.fadeUp(0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="eyebrow"
          >
            <span className="eyebrow-dot" />
            Proven Success
          </motion.div>

          <motion.h2
            variants={variants.fadeUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-h max-w-[850px]"
          >
            Hear from those already{' '}
            <span className="dim">succeeding</span>
          </motion.h2>

          <motion.p
            variants={variants.fadeUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-sub mt-6 max-w-[600px]"
          >
            Real-world financial leaders already scaling their end-to-end servicing with Omnistra.
          </motion.p>
        </div>

        {/* ── Cases Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              variants={variants.cardHover}
              className="group card rounded-[32px] p-10 flex flex-col relative overflow-hidden cursor-pointer bg-[#080808] border-white/[0.05] hover:border-[#4f46e5]/30 transition-all duration-500 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_40px_rgba(255,255,255,0.03)]"
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#4f46e5]/[0.08] blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              <p className="text-[11px] font-black text-[#4f46e5] uppercase tracking-[0.25em] mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                {c.company}
              </p>

              <h3 className="text-[28px] font-bold text-white leading-tight tracking-tight mb-8 group-hover:text-white transition-colors">
                {c.metric}
              </h3>

              <div className="h-px bg-white/[0.08] group-hover:bg-[#4f46e5]/30 transition-colors duration-700 mb-8" />

              <p className="text-[15px] text-white/40 leading-relaxed flex-1 group-hover:text-white/60 transition-colors font-normal">
                {c.desc}
              </p>

              <motion.button 
                whileHover={{ x: 5 }}
                className="mt-10 text-white/30 text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-3 group/btn hover:text-white transition-colors"
              >
                View Story
                <div className="w-7 h-7 rounded-full border border-white/[0.1] flex items-center justify-center text-xs group-hover/btn:bg-white group-hover/btn:text-black group-hover/btn:border-white transition-all duration-400">
                  →
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* ── Final CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 lg:mt-32 relative rounded-[56px] bg-white text-black overflow-hidden px-12 py-24 flex flex-col items-center text-center shadow-[0_80px_160px_rgba(0,0,0,0.6)]"
        >

          <h2 className="text-[40px] md:text-[64px] font-bold text-black tracking-tighter leading-[1.02] mb-8 relative z-10">
            Ready to scale your servicing?
          </h2>

          <p className="text-[17px] text-black/50 max-w-[500px] leading-relaxed mb-12 relative z-10 font-normal">
            Join the fastest-growing AI-native financial platform. Start your pilot in days, not months.
          </p>

          <div className="relative z-10">
            <Button variant="primary" size="lg" href="#" icon="→" className="group rounded-full shadow-2xl">
              Start your Pilot
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
