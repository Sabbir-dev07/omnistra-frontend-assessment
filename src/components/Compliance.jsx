import { motion } from 'framer-motion';

const INSIGHTS = [
  {
    id: '01',
    title: 'Simulating real-world customer behavior at scale',
    desc: 'Detect inappropriate legal language and threats that violate regulations in real-time. Our system automatically flags these compliance violations to provide immediate oversight.'
  },
  {
    id: '02',
    title: 'Measuring policy alignment in real time',
    desc: 'Measure every conversation against your internal policies and brand guidelines automatically. Ensure every AI interaction adheres to your organizational risk parameters.'
  },
  {
    id: '03',
    title: 'Detecting deviations before they become violations',
    desc: 'Proactively identify subtle shifts in model behavior that could lead to regulatory risks, allowing for immediate corrective action before they escalate.'
  },
  {
    id: '04',
    title: 'Stress-testing compliance under extreme conditions',
    desc: 'Battle-test your AI agents against edge-case scenarios and high-pressure situations to guarantee zero-fail performance in any regulatory environment.'
  }
];

export default function Compliance() {
  return (
    <section id="compliance" className="bg-black py-24 lg:py-48 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          {/* Left: Sticky Branding (1:1 Layout) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-40 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-[#3448ff] animate-pulse" />
              <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">Built on Trust & Compliance</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[48px] md:text-[64px] font-bold text-white tracking-tighter leading-[1] mb-12"
            >
              Certified. <br />
              Secured. <br />
              <span className="text-white/40">Compliant.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[18px] text-gray-500 max-w-[500px] leading-relaxed mb-16"
            >
              Mitigate human compliance risk with rigorous model governance. Trusted by leading financial institutions to unify Voice, Email, and SMS across the entire customer lifecycle.
            </motion.p>

            {/* Compliance Badges (1:1 Detail) */}
            <div className="grid grid-cols-2 gap-4 max-w-[420px]">
              {[
                { name: 'SOC 2 Type II Compliant', text: 'Fully compliant for proven, ongoing operational security.' },
                { name: 'CFPB Compliant', text: 'We maintain controls to protect consumers from abusive practices.' },
                { name: 'TCPA Compliant', text: 'Ensuring communications meet regulatory standards for consent.' },
                { name: 'PCI Compliant', text: 'Security for sensitive payment information.' }
              ].map((badge, i) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  className="p-6 rounded-[24px] bg-[#080808] border border-white/5 flex flex-col items-start group hover:border-[#3448ff]/30 transition-all duration-500"
                >
                  <div className="text-[11px] font-black text-white mb-2 group-hover:text-[#3448ff] transition-colors">{badge.name}</div>
                  <div className="text-[10px] text-gray-600 font-medium leading-tight">{badge.text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Scrolling Insights cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {INSIGHTS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-12 rounded-[40px] bg-[#080808] border border-white/5 hover:border-[#3448ff]/20 transition-all duration-700 overflow-hidden"
              >
                {/* Numbered background accent */}
                <div className="absolute top-8 right-12 text-[80px] font-black text-white/[0.02] select-none group-hover:text-[#3448ff]/[0.05] transition-colors">
                    {item.id}
                </div>

                <div className="relative z-10">
                    <div className="text-[12px] font-black text-[#3448ff] mb-10 tracking-widest">{item.id}</div>
                    <h3 className="text-[26px] font-bold text-white mb-6 leading-tight group-hover:text-[#3448ff] transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-[16px] text-gray-500 leading-relaxed max-w-[480px]">
                        {item.desc}
                    </p>
                </div>
                
                {/* Subtle Glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3448ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
