import { motion } from 'framer-motion';

const AGENTS = [
  {
    name: 'Alex',
    role: 'AI Model Governance & Risk Lead',
    tag: 'THE ARCHITECT',
    desc: 'Certify your AI before it meets a customer. Governance actions that prevent risk before deployment with audit-ready evidence for compliance oversight.',
    features: ['Hallucination Guardrails', 'Policy Stress-Testing', 'Audit-Ready Lineage', 'Fail-Safe Mapping'],
    color: '#3448ff'
  },
  {
    name: 'Taylor',
    role: 'AI Customer Service & Collections Lead',
    tag: 'THE ENGAGEMENT SPECIALIST',
    desc: 'A controlled, compliant engagement process in real time. Optimizes every interaction based on behavioral data and high-precision engagement science.',
    features: ['Behavioral Science', 'Sentiment Analysis', 'Dynamic Flow-Mapping', 'Context-Aware Responses'],
    color: '#a78bfa'
  },
  {
    name: 'Jordan',
    role: 'AI Compliance & Audit Lead',
    tag: 'THE AUDIT SPECIALIST',
    desc: 'A transparent audit process, visible in real time. Delivers exam-ready evidence for risk review and maintains organizational integrity at scale.',
    features: ['Regulatory Alignment', 'Automated Audits', 'Exam-Ready Reports', 'Risk Oversight'],
    color: '#60a5fa'
  }
];

export default function Agents() {
  return (
    <section id="agents" className="bg-black py-24 lg:py-48 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header: Exact 1:1 Alignment */}
        <div className="flex flex-col mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#3448ff]" />
            <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">Meet the agents</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[64px] font-bold text-white tracking-tighter leading-[1] max-w-[800px]"
          >
            Powering your mission control <br />
            <span className="text-white/40 font-medium">with precision.</span>
          </motion.h2>
        </div>

        {/* Agent Cards: Premium 1:1 Textual density */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12 }}
              className="group relative h-[700px] rounded-[48px] overflow-hidden bg-[#080808] border border-white/5 flex flex-col pt-16 transition-all duration-500"
            >
              {/* Profile Background Glow */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] blur-[100px] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none"
                style={{ background: agent.color }}
              />

              {/* Character Visual Area */}
              <div className="relative flex justify-center mb-12 h-[220px]">
                <div className="w-44 h-44 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent flex items-center justify-center overflow-hidden relative">
                    <span className="text-[72px] font-black text-white/[0.03] select-none group-hover:text-white/[0.06] transition-colors">{agent.name[0]}</span>
                    {/* Interior Scanline Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
                </div>
                {/* Floating Tag */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-xl scale-95 group-hover:scale-100 transition-transform">
                   {agent.tag}
                </div>
              </div>

              {/* Content Area */}
              <div className="relative flex-1 bg-[#0c0c0c] p-12 mt-auto border-t border-white/5 flex flex-col">
                <div className="mb-8">
                   <h3 className="text-white text-[32px] font-bold mb-2 leading-none">{agent.name}</h3>
                   <p className="text-[#3448ff] text-[12px] font-black uppercase tracking-[0.15em] mb-6">{agent.role}</p>
                   <div className="h-0.5 w-12 bg-[#3448ff]/20" />
                </div>

                <p className="text-gray-500 text-[15px] leading-relaxed mb-10 flex-1">
                  {agent.desc}
                </p>

                {/* Feature Tags: 1:1 Alignment */}
                <div className="grid grid-cols-2 gap-3 mb-12">
                  {agent.features.map(f => (
                    <div 
                      key={f} 
                      className="flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-[#3448ff]" />
                      <span className="text-[10px] text-white/50 font-bold uppercase tracking-tight whitespace-nowrap">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                    <button className="text-white text-[13px] font-black uppercase tracking-[0.2em] flex items-center gap-3 group/btn">
                        View Profile 
                        <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                            <span className="text-[14px]">→</span>
                        </div>
                    </button>
                </div>
              </div>

              {/* Bottom Decorative Bar */}
              <div 
                className="h-1.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"
                style={{ background: agent.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Proprietary Tag */}
        <div className="mt-32 pt-12 border-t border-white/5">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] text-gray-700 font-bold uppercase tracking-[0.4em] flex flex-col md:flex-row items-center justify-center gap-4 text-center"
            >
                <span className="hidden md:block w-12 h-[1px] bg-white/5" />
                Powered by Domu’s Proprietary Model Governance Engine
                <span className="hidden md:block w-12 h-[1px] bg-white/5" />
            </motion.p>
        </div>

      </div>
    </section>
  );
}
