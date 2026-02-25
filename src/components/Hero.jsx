import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { transitions, variants } from '../utils/motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative bg-black flex flex-col justify-center overflow-hidden min-h-[80vh]">
      {/* ── Page-level radial gradient ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,70,229,0.14) 0%, transparent 65%)',
          y: y1
        }}
      />

      {/* ── Content ── */}
      <div className="container relative z-10 pt-20 pb-24">

        <motion.div
          variants={variants.staggerContainer(0.1, 0.2)}
          initial="initial"
          animate="animate"
        >
          {/* Eyebrow */}
          <motion.div variants={variants.fadeUp(0)} className="eyebrow mb-6">
            <span className="eyebrow-dot" />
            The AI Platform for Financial Services
          </motion.div>

          {/* H1 */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              variants={variants.fadeUp(0.1, 60)}
              className="section-h max-w-[850px] py-1"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              AI Agents Built For{' '}
              <br />
              <span className="dim">Intelligent Servicing</span>
            </motion.h1>
          </div>

          {/* Sub copy */}
          <motion.p
            variants={variants.fadeUp(0.2, 20)}
            className="section-sub mb-12 max-w-[550px]"
          >
            Mitigate human compliance risk with rigorous model governance. Trusted by leading financial institutions to unify Voice, Email, and SMS across the entire customer lifecycle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={variants.fadeUp(0.3, 10)}
            className="flex items-center gap-4 flex-wrap"
          >
            <Button variant="secondary" size="lg" href="#" icon="→" className="group">
              Start a Pilot
            </Button>
            <span className="text-white/30 text-lg font-thin hidden sm:block">|</span>
            <Button variant="outline" size="lg" href="#" icon="→" className="group">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Subtle marquee watermark with parallax ── */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden select-none pointer-events-none opacity-[0.015]"
        >
          <motion.div
            animate={{ x: ['0%', '-40%'] }}
            transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
            className="text-[250px] font-black text-white italic tracking-tighter leading-none whitespace-nowrap"
          >
            INTELLIGENT SERVICING · AI AGENTS · FINANCIAL RECOVERY ·
          </motion.div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-24 pt-10 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <span className="text-[11px] font-bold text-white/20 uppercase tracking-[0.3em]">
            Institutional Grade
          </span>
          <div className="flex items-center gap-8 opacity-25 hover:opacity-50 transition-opacity duration-700 cursor-pointer">
            {['Y Combinator', '·', 'Fintech Approved', '·', 'SOC 2 Certified'].map((t, i) => (
              <span key={i} className="text-[12px] font-bold text-white tracking-[0.2em]">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
