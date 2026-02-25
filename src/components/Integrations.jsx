import { motion } from 'framer-motion';

const INTEGRATIONS = [
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'Twilio', color: '#F22F46' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Snowflake', color: '#29B6F6' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Zendesk', color: '#03363D' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'GCP', color: '#4285F4' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'Slack', color: '#4A154B' }
];

const FEATURES = [
  {
    title: 'A/B Testing at Scale',
    desc: 'Rapidly iterate on conversational flows. Test multiple strategies simultaneously to identify the highest performing engagement patterns.',
    id: '01'
  },
  {
    title: 'Maximize Right-Party Contacts',
    desc: 'Reach the right customer at the right time. Our behavioral engine predicts optimal engagement windows to increase resolution rates.',
    id: '02'
  },
  {
    title: 'Omni-Channel Communications',
    desc: 'Unify Voice, Email, and SMS. Orchestrate a consistent, intelligent experience across every touchpoint in the customer lifecycle.',
    id: '03'
  }
];

export default function Integrations() {
  return (
    <section id="integrations" className="bg-black py-24 lg:py-48 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header: Exact Domu.ai 1:1 Header */}
        <div className="flex flex-col mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#3448ff]" />
            <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">Integrations & Features</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[64px] font-bold text-white tracking-tighter leading-[1] max-w-[900px]"
          >
            A trusted AI partner for <br />
            <span className="text-white/40 font-medium">financial services.</span>
          </motion.h2>
        </div>

        {/* Feature Grid: Exact Domu.ai propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="text-[12px] font-black text-[#3448ff] mb-6 tracking-widest">{feature.id}</div>
              <h3 className="text-white text-[22px] font-bold mb-4 group-hover:text-[#3448ff] transition-colors">{feature.title}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-[340px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* One platform, unlimited integrations Section */}
        <div className="relative pt-24 border-t border-white/5 group">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[44px] font-bold text-white tracking-tighter leading-none"
            >
              One platform, <br />
              <span className="text-white/40">unlimited integrations.</span>
            </motion.h3>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-black text-[12px] font-black uppercase tracking-widest shadow-lg"
            >
                View All Partners
            </motion.button>
          </div>

          <div className="relative overflow-hidden py-10 rounded-[40px] bg-[#050505] border border-white/5">
            <motion.div 
              className="flex gap-10 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ width: 'max-content' }}
            >
              {[...INTEGRATIONS, ...INTEGRATIONS].map((item, i) => (
                <div 
                  key={i}
                  className="group/card flex items-center gap-6 px-10 py-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-[#3448ff]/30 transition-all duration-500"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-[18px] text-white/20 group-hover/card:text-white transition-all duration-500"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    {item.name[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-white uppercase tracking-tight">
                        {item.name}
                    </span>
                    <span className="text-[9px] text-gray-600 font-bold uppercase">Official Partner</span>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Mask for Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
