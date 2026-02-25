import { motion } from 'framer-motion';

const INSIGHTS = [
  {
    id: '01',
    title: 'Simulating real-world customer behavior at scale',
    desc: 'Detect inappropriate language and threats in real-time. Our system automatically flags compliance violations to provide immediate oversight.',
  },
  {
    id: '02',
    title: 'Measuring policy alignment in real time',
    desc: 'Measure every conversation against your internal policies and brand guidelines. Ensure every AI interaction adheres to your organizational risk parameters.',
  },
  {
    id: '03',
    title: 'Detecting deviations before they become violations',
    desc: 'Proactively identify subtle shifts in model behavior that could lead to regulatory risks, enabling immediate corrective action before they escalate.',
  },
];

const BADGES = [
  { name: 'SOC 2 Type II',  text: 'Proven, ongoing operational security.' },
  { name: 'CFPB Compliant', text: 'Controls protecting consumers from abusive practices.' },
  { name: 'TCPA Compliant', text: 'Communications meeting regulatory consent standards.' },
  { name: 'PCI Compliant',  text: 'Certified security for payment card information.' },
];

import { variants } from '../utils/motion';

export default function Compliance() {
  return (
    <section id="compliance" className="section bg-transparent py-24 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">

          {/* ── Left: Sticky ── */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-40">
            <motion.div
              variants={variants.fadeUp(0)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="eyebrow"
            >
              <span className="eyebrow-dot" />
              Built on Trust & Compliance
            </motion.div>

            <motion.h2
              variants={variants.fadeUp(0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="section-h mb-8 leading-[1.1]"
            >
              Certified.{' '}
              <br />
              Secured.{' '}
              <br />
              <span className="dim">Compliant.</span>
            </motion.h2>

            <motion.p
              variants={variants.fadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="section-sub mb-12 max-w-[480px]"
            >
              Mitigate human compliance risk with rigorous model governance. Trusted by leading financial institutions to unify Voice, Email, and SMS across the entire customer lifecycle.
            </motion.p>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BADGES.map((b, i) => (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                  whileHover="hover"
                  variants={variants.cardHover}
                  className="card !p-6 rounded-[24px] flex flex-col gap-3 cursor-pointer bg-[#080808] border-white/[0.05] hover:border-[#4f46e5]/40 transition-all shadow-xl"
                >
                  <p className="text-[12px] font-black text-white/80 uppercase tracking-[0.15em] group-hover:text-[#4f46e5] transition-colors leading-snug">
                    {b.name}
                  </p>
                  <p className="text-[13px] text-white/50 font-normal leading-snug">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Insight Cards ── */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            {INSIGHTS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.1 * i, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                whileHover="hover"
                variants={variants.cardHover}
                className="group card p-10 lg:p-12 rounded-[40px] relative overflow-hidden cursor-pointer bg-[#080808] border-white/[0.05] hover:border-[#4f46e5]/30 transition-all duration-500 shadow-2xl"
              >
                {/* Ghost number animation */}
                <motion.span 
                  whileHover={{ scale: 1.1, opacity: 0.1 }}
                  className="absolute top-8 right-10 text-[100px] font-black text-[#4f46e5]/[0.025] select-none pointer-events-none transition-all duration-700 leading-none"
                >
                  {item.id}
                </motion.span>

                <div className="relative z-10">
                  <p className="text-[11px] font-black text-[#4f46e5] mb-6 tracking-[0.3em]">{item.id}</p>
                  <h3 className="text-[22px] md:text-[28px] font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-white transition-colors max-w-[420px]">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-white/40 leading-relaxed font-normal group-hover:text-white/60 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Corner glow */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#4f46e5]/[0.08] blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
