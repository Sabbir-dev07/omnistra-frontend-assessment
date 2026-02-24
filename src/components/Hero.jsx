import { motion } from 'framer-motion';

/**
 * Hero/placeholder section between Navbar and Integrations.
 * Light background matching Chargeflow's clean aesthetic.
 */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f5f0ff 40%, #eef2ff 100%)' }}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Badge */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-xs font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
          AI-Powered Chargeback Management
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]"
        >
          Win back your{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
            }}
          >
            revenue.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
        >
          Trusted by 15,000+ brands. Chargeflow automates chargeback prevention &amp;
          recovery with AI-powered evidence and a 4× ROI guarantee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(124,58,237,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)' }}
          >
            Get started for free
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-200 shadow-sm hover:border-violet-300 transition-colors"
          >
            Schedule a demo →
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-6 text-center"
        >
          {[
            { value: '15K+', label: 'Brands' },
            { value: '4×', label: 'ROI Guarantee' },
            { value: '90%', label: 'Chargeback Prevention' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">{s.value}</span>
              <span className="text-xs text-gray-400 mt-0.5">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
