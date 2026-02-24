import { motion } from 'framer-motion';

// ─── Integration partner logos data ────────────────────────────────────────
// Each item has name + color scheme for the logo placeholder
const INTEGRATIONS = [
  { name: 'Salesforce', abbr: 'SF', color: '#00A1E0', bg: '#e6f7ff' },
  { name: 'AWS', abbr: 'AWS', color: '#FF9900', bg: '#fff8ec' },
  { name: 'Microsoft', abbr: 'MS', color: '#00A4EF', bg: '#e6f7ff' },
  { name: 'Google Cloud', abbr: 'GC', color: '#4285F4', bg: '#eaf2ff' },
  { name: 'Twilio', abbr: 'TW', color: '#F22F46', bg: '#fff1f2' },
  { name: 'Stripe', abbr: 'ST', color: '#635BFF', bg: '#f0f0ff' },
  { name: 'HubSpot', abbr: 'HS', color: '#FF7A59', bg: '#fff3ef' },
  { name: 'Zendesk', abbr: 'ZD', color: '#03363D', bg: '#e5f4f5' },
  { name: 'Pega', abbr: 'PG', color: '#00B2A9', bg: '#e5f8f7' },
  { name: 'Five9', abbr: 'F9', color: '#E22E38', bg: '#ffeef0' },
  { name: 'NICE', abbr: 'NC', color: '#005E5D', bg: '#e5f2f2' },
  { name: 'Genesys', abbr: 'GN', color: '#FF4F1F', bg: '#fff2ee' },
  { name: 'Snowflake', abbr: 'SN', color: '#29B5E8', bg: '#eaf8fd' },
  { name: 'Databricks', abbr: 'DB', color: '#FF3621', bg: '#fff2f1' },
  { name: 'Equifax', abbr: 'EQ', color: '#E30B1C', bg: '#fff0f1' },
  { name: 'Experian', abbr: 'EX', color: '#CE0F69', bg: '#fff0f7' },
  { name: 'TransUnion', abbr: 'TU', color: '#2072B6', bg: '#eaf3fc' },
  { name: 'LexisNexis', abbr: 'LN', color: '#E63329', bg: '#fff1f0' },
];

// ─── Animation variants ─────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Logo Card ──────────────────────────────────────────────────────────────
function LogoCard({ item }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.08,
        boxShadow: '0 8px 32px rgba(99,102,241,0.18)',
        borderColor: '#6366f1',
        y: -4,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-[#1e1e2e] bg-[#111118] cursor-pointer select-none"
      style={{ minHeight: '90px' }}
    >
      {/* Subtle glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${item.color}18 0%, transparent 70%)`,
        }}
      />

      {/* Logo mark */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0"
        style={{ backgroundColor: item.bg, color: item.color }}
      >
        {item.abbr}
      </div>

      {/* Name */}
      <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200 transition-colors text-center leading-tight">
        {item.name}
      </span>
    </motion.div>
  );
}

// ─── Main Integrations Section ──────────────────────────────────────────────
export default function Integrations() {
  return (
    <section className="bg-[#0a0a0f] py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* ─ Header row ─ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-md bg-indigo-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-indigo-400" />
              </div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                Integrations
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight">
              One platform,{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%)',
                }}
              >
                unlimited integrations
              </span>
            </h2>

            <p className="mt-3 text-sm text-gray-400 max-w-md leading-relaxed">
              Connect seamlessly with the tools your team already uses — from CRMs to cloud
              platforms to compliance data providers.
            </p>
          </div>

          {/* CTA */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
          >
            View all integrations
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* ─ Logo grid ─ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {INTEGRATIONS.map((item) => (
            <LogoCard key={item.name} item={item} />
          ))}
        </motion.div>

        {/* ─ Bottom stats strip ─ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-[#1e1e2e] grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { value: '50+', label: 'Integrations available' },
            { value: 'REST & Webhook', label: 'API-first architecture' },
            { value: '< 1 day', label: 'Average setup time' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
