import { motion } from 'framer-motion';

const AGENTS = [
  {
    name: 'Alex',
    initial: 'A',
    role: 'AI Model Governance & Risk Lead',
    tag: 'Architect',
    desc: 'Certify your AI before it meets a customer. Governance actions that prevent risk before deployment with audit-ready evidence for compliance oversight.',
    features: ['Hallucination Guardrails', 'Policy Stress-Testing', 'Audit-Ready Lineage', 'Fail-Safe Mapping'],
    color: '#4f46e5',
  },
  {
    name: 'Taylor',
    initial: 'T',
    role: 'AI Customer Service & Collections Lead',
    tag: 'Engagement',
    desc: 'A controlled, compliant engagement process in real time. Optimizes every interaction based on behavioral data and high-precision engagement science.',
    features: ['Behavioral Science', 'Sentiment Analysis', 'Dynamic Flow-Mapping', 'Context-Aware Responses'],
    color: '#818cf8',
  },
  {
    name: 'Jordan',
    initial: 'J',
    role: 'AI Compliance & Audit Lead',
    tag: 'Audit',
    desc: 'A transparent audit process, visible in real time. Delivers exam-ready evidence for risk review and maintains organizational integrity at scale.',
    features: ['Regulatory Alignment', 'Automated Audits', 'Exam-Ready Reports', 'Risk Oversight'],
    color: '#6366f1',
  },
];

import { variants } from '../utils/motion';

export default function Agents() {
  return (
    <section id="agents" className="section bg-transparent py-24 lg:py-32">
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
            Meet the Agents
          </motion.div>

          <motion.h2
            variants={variants.fadeUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-h max-w-[850px]"
          >
            Powering your mission control{' '}
            <span className="dim">with precision.</span>
          </motion.h2>
        </div>

        {/* ── Agent Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              variants={variants.cardHover}
              className="group card rounded-[32px] flex flex-col overflow-hidden p-0 cursor-pointer bg-[#080808] border-white/[0.05] hover:border-white/20 transition-all duration-500 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_32px_64px_rgba(0,0,0,0.6)]"
            >
              {/* Avatar zone */}
              <div className="relative flex justify-center pt-12 pb-10 bg-[#0a0a0a] border-b border-white/[0.05]">
                {/* Top color accent bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: agent.color }}
                />

                {/* Avatar */}
                <motion.div
                  className="relative w-28 h-28 rounded-full border border-white/[0.1] flex items-center justify-center text-[48px] font-black select-none transition-transform duration-700"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${agent.color}20, transparent 75%)`,
                    color: `${agent.color}50`,
                    boxShadow: `inset 0 0 32px ${agent.color}10`,
                  }}
                >
                  {agent.initial}
                </motion.div>

                {/* Tag pill */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#111] border border-white/[0.15] text-white text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-xl">
                  {agent.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-1">
                <div className="mb-6 text-center md:text-left">
                  <h3 className="text-[26px] font-bold text-white tracking-tight leading-none mb-2.5 group-hover:text-white transition-colors">{agent.name}</h3>
                  <p className="text-[12px] font-black uppercase tracking-[0.18em] leading-snug" style={{ color: agent.color }}>
                    {agent.role}
                  </p>
                </div>

                <p className="text-[14px] text-white/60 leading-[1.8] mb-8 font-normal flex-1 group-hover:text-white/80 transition-colors text-center md:text-left">{agent.desc}</p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                  {agent.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <div
                        className="w-[4px] h-[4px] rounded-full shrink-0"
                        style={{ backgroundColor: agent.color }}
                      />
                      <span className="text-[12px] text-white/50 font-medium leading-tight group-hover:text-white/80 transition-colors">{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA row */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-white/50 text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-3 group/btn hover:text-white transition-colors mt-auto"
                >
                  View Profile
                  <motion.div 
                    className="w-7 h-7 rounded-full border border-white/[0.1] flex items-center justify-center text-xs group-hover/btn:bg-white group-hover/btn:text-black group-hover/btn:border-white transition-all duration-400"
                  >
                    →
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-10 border-t border-white/[0.05] flex items-center justify-center gap-8"
        >
          <div className="w-12 h-px bg-white/[0.08]" />
          <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.4em] text-center">
            Powered by Omnistra Proprietary Model Governance
          </p>
          <div className="w-12 h-px bg-white/[0.08]" />
        </motion.div>

      </div>
    </section>
  );
}
