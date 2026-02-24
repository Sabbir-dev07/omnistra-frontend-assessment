import { motion } from 'framer-motion';
import { SonarButton } from './ui/SonarButton';

/**
 * Hero section — styled to match Chargeflow's light, clean aesthetic.
 * Sits between the fixed Navbar and the dark Integrations section.
 */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(155deg, #f8faff 0%, #eef4ff 45%, #f0f0ff 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -left-24 w-[580px] h-[580px] rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #93c5fd 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-0 right-[-60px] w-[480px] h-[480px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a5b4fc 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div className="relative z-10 text-center max-w-[780px] mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          AI-Powered Chargeback Management
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-gray-900 leading-[1.08]"
        >
          Win back your{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #0066ff 0%, #4f46e5 100%)' }}
          >
            revenue.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-gray-500 max-w-[540px] mx-auto leading-relaxed"
        >
          Trusted by 15,000+ brands. Chargeflow automates chargeback prevention &amp; recovery
          with AI-powered evidence and a 4× ROI guarantee.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <SonarButton color="blue" href="#" className="w-[200px]">
            Get started for free
          </SonarButton>
          <SonarButton color="white" href="#" className="w-[200px]">
            Schedule a demo
          </SonarButton>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-[52px] flex items-center justify-center gap-8"
        >
          {[
            { value: '15K+', label: 'Brands' },
            { value: '4×',   label: 'ROI Guarantee' },
            { value: '90%',  label: 'Chargeback Prevention' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-[22px] font-bold text-gray-900">{value}</span>
              <span className="text-[11px] text-gray-400 mt-0.5">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
