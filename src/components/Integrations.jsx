import { motion } from 'framer-motion';

// ─── Integration partners (visual match to domu.ai) ─────────────────────────
const INTEGRATIONS = [
  { name: 'Salesforce',  abbr: 'SF',  color: '#00A1E0', bg: '#e6f7ff' },
  { name: 'AWS',         abbr: 'AWS', color: '#FF9900', bg: '#fff8ec' },
  { name: 'Microsoft',   abbr: 'MS',  color: '#00A4EF', bg: '#e6f7ff' },
  { name: 'Google Cloud',abbr: 'GC',  color: '#4285F4', bg: '#eaf2ff' },
  { name: 'Twilio',      abbr: 'TW',  color: '#F22F46', bg: '#fff1f2' },
  { name: 'Stripe',      abbr: 'ST',  color: '#635BFF', bg: '#f0f0ff' },
  { name: 'HubSpot',     abbr: 'HS',  color: '#FF7A59', bg: '#fff3ef' },
  { name: 'Zendesk',     abbr: 'ZD',  color: '#03363D', bg: '#e5f4f5' },
  { name: 'Pega',        abbr: 'PG',  color: '#00B2A9', bg: '#e5f8f7' },
  { name: 'Five9',       abbr: 'F9',  color: '#E22E38', bg: '#ffeef0' },
  { name: 'NICE',        abbr: 'NC',  color: '#005E5D', bg: '#e5f2f2' },
  { name: 'Genesys',     abbr: 'GN',  color: '#FF4F1F', bg: '#fff2ee' },
  { name: 'Snowflake',   abbr: 'SN',  color: '#29B5E8', bg: '#eaf8fd' },
  { name: 'Databricks',  abbr: 'DB',  color: '#FF3621', bg: '#fff2f1' },
  { name: 'Equifax',     abbr: 'EQ',  color: '#E30B1C', bg: '#fff0f1' },
  { name: 'Experian',    abbr: 'EX',  color: '#CE0F69', bg: '#fff0f7' },
  { name: 'TransUnion',  abbr: 'TU',  color: '#2072B6', bg: '#eaf3fc' },
  { name: 'LexisNexis',  abbr: 'LN',  color: '#E63329', bg: '#fff1f0' },
];

// ─── Stagger container ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// ─── Individual card reveal ──────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Single logo card ────────────────────────────────────────────────────────
function LogoCard({ item }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.08,
        boxShadow: '0 10px 25px rgba(0,0,0,0.10)',
        borderColor: '#60a5fa', // blue-400
        y: -4,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-[#1e1e2e] bg-[#111118] cursor-pointer select-none"
      style={{ minHeight: '92px' }}
    >
      {/* Brand-color glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${item.color}22 0%, transparent 70%)`,
        }}
      />

      {/* Logo tile */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[11px] tracking-wide shrink-0 transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: item.bg, color: item.color }}
      >
        {item.abbr}
      </div>

      {/* Name label */}
      <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200 transition-colors text-center leading-snug">
        {item.name}
      </span>
    </motion.div>
  );
}

// ─── Integrations Section ────────────────────────────────────────────────────
export default function Integrations() {
  return (
    <section className="bg-[#0a0a0f] py-20 lg:py-32 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            {/* Label chip */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-[0.14em]">
                Integrations
              </span>
            </div>

            {/* Main heading with gradient */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.12] tracking-tight">
              <span className="text-white">One platform,&nbsp;</span>
              <br className="hidden sm:block" />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
                }}
              >
                unlimited integrations
              </span>
            </h2>

            <p className="mt-4 text-[14px] text-gray-400 max-w-[420px] leading-relaxed">
              Connect seamlessly with the tools your team already relies on — CRMs, cloud
              platforms, compliance data providers, and more.
            </p>
          </div>

          {/* "View all" CTA */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, boxShadow: '0 0 18px rgba(99,102,241,0.35)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
          >
            View all integrations
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>

        {/* ── Logo grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4"
        >
          {INTEGRATIONS.map((item) => (
            <LogoCard key={item.name} item={item} />
          ))}
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-16 pt-10 border-t border-[#1e1e2e] grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { value: '50+',           label: 'Integrations available' },
            { value: 'REST & Webhook',label: 'API-first architecture' },
            { value: '< 1 day',       label: 'Average setup time' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-[12px] text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
