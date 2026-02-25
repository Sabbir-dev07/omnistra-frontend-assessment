import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const INTEGRATIONS = [
  { name: 'Salesforce', color: '#00A1E0', icon: 'S' },
  { name: 'Twilio',     color: '#F22F46', icon: 'T' },
  { name: 'AWS',        color: '#FF9900', icon: 'A' },
  { name: 'Snowflake',  color: '#29B6F6', icon: 'S' },
  { name: 'HubSpot',   color: '#FF7A59', icon: 'H' },
  { name: 'Zendesk',   color: '#37B5A3', icon: 'Z' },
  { name: 'Microsoft', color: '#00A4EF', icon: 'M' },
  { name: 'GCP',       color: '#4285F4', icon: 'G' },
  { name: 'Stripe',    color: '#635BFF', icon: 'S' },
  { name: 'Slack',     color: '#E01E5A', icon: 'S' },
];

const FEATURES = [
  {
    id: '01',
    title: 'A/B Testing at Scale',
    desc: '100+ adaptive agent personalities that optimize accent, language, and tone to drive higher engagement and conversion.',
  },
  {
    id: '02',
    title: 'Maximize Right-Party Contacts',
    desc: 'Execute high-precision inbound and outbound campaigns during peak windows to reach the right person at the right time.',
  },
  {
    id: '03',
    title: 'Omni-Channel Communications',
    desc: 'Reduce complaints per 100 calls with compliant, self-service engagements that deliver consistent oversight at scale.',
  },
];

import { variants } from '../utils/motion';
import ScrollReveal from './ui/ScrollReveal';

function IntegrationCard({ item }) {
  return (
    <motion.div
      variants={variants.cardHover}
      whileHover="hover"
      className="shrink-0 group/card flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/[0.08] bg-[#080808] hover:border-[#4f46e5]/30 transition-all duration-500 cursor-pointer select-none shadow-lg"
    >
      {/* Icon */}
      <motion.div
        className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors"
        style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, color: item.color }}
      >
        {item.icon}
      </motion.div>
      {/* Labels */}
      <div>
        <p className="text-[14px] font-bold text-white/90 group-hover/card:text-white transition-colors duration-300 leading-none mb-1.5">
          {item.name}
        </p>
        <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">Partner</p>
      </div>
    </motion.div>
  );
}

export default function Integrations() {
  return (
    <section id="integrations" className="section bg-transparent py-24 lg:py-32">
      <div className="container relative z-10">

        {/* ── Header ── */}
        <div className="mb-12 lg:mb-20">
          <motion.div
            variants={variants.fadeUp(0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="eyebrow"
          >
            <span className="eyebrow-dot" />
            Integrations & Features
          </motion.div>

          <motion.h2
            variants={variants.fadeUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-h max-w-[850px]"
          >
            A trusted AI partner for{' '}
            <span className="dim">financial services.</span>
          </motion.h2>
        </div>

        {/* ── Feature Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/[0.03] rounded-[32px] overflow-hidden mb-24 lg:mb-32 p-1 border border-white/[0.05]">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#060606] hover:bg-[#080808] transition-all duration-500 p-10 lg:p-14 flex flex-col gap-6 cursor-pointer relative"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4f46e5]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="text-[12px] font-black text-[#4f46e5] tracking-[0.2em]">{f.id}</span>
              <h3 className="text-[20px] lg:text-[22px] font-bold text-white tracking-tight group-hover:text-[#4f46e5] transition-colors">
                {f.title}
              </h3>
              <p className="text-[15px] text-white/40 leading-relaxed font-normal group-hover:text-white/60 transition-colors">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Integrations Bar ── */}
        <div className="pt-20 border-t border-white/[0.05]">
          {/* Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-16">
            <motion.div
              variants={variants.fadeUp(0)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold text-white tracking-tighter leading-none">
                One platform,{' '}
                <span className="text-white/20 font-medium">unlimited integrations.</span>
              </h3>
            </motion.div>
            <Button variant="secondary" size="md" href="#" icon="→" className="group shrink-0">
              View All Partners
            </Button>
          </div>

          {/* Scroll track */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#040404] py-10 shadow-2xl"
          >
            <motion.div
              className="flex gap-6 px-8"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              style={{ width: 'max-content', willChange: 'transform' }}
            >
              {[...INTEGRATIONS, ...INTEGRATIONS].map((item, i) => (
                <IntegrationCard key={i} item={item} />
              ))}
            </motion.div>
            {/* fade masks */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#040404] via-[#040404]/80 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#040404] via-[#040404]/80 to-transparent pointer-events-none z-10" />
          </motion.div>

          {/* Mobile grid (hidden on lg) */}
          <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INTEGRATIONS.map((item, i) => (
              <IntegrationCard key={i} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
