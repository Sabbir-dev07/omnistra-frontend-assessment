import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const STATS = [
  { label: 'Conversion',   val: '64.2%', color: '#4f46e5', pct: 64 },
  { label: 'Settlement',   val: '82.8%', color: '#c3f967', pct: 83 },
  { label: 'Compliance',   val: '100%',  color: '#fff',    pct: 100 },
];

const AGENTS_MOCK = [
  { id: 1, name: 'Agent_01', status: 'Active' },
  { id: 2, name: 'Agent_02', status: 'Processing' },
  { id: 3, name: 'Agent_03', status: 'Active' },
];

import { variants } from '../utils/motion';

export default function MissionControl() {
  return (
    <section id="mission-control" className="section bg-transparent py-24 lg:py-32">
      <div className="container relative z-10">

        {/* ── Header (centered) ── */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            variants={variants.fadeUp(0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="tag mb-6 shadow-[0_0_20px_rgba(79,70,229,0.15)]"
          >
            <span className="eyebrow-dot !w-[5px] !h-[5px]" />
            Dashboard Control
          </motion.div>

          <motion.h2
            variants={variants.fadeUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-h max-w-[900px] leading-[1.05]"
          >
            Your Mission Control for{' '}
            <br />
            <span className="dim">End-To-End Servicing.</span>
          </motion.h2>

          <motion.p
            variants={variants.fadeUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-sub mx-auto text-center max-w-[720px] mt-8"
          >
            A centralized command center for high-stakes recovery. Track performance and agent activity in real-time with a continuous data stream designed for rapid, informed decision-making.
          </motion.p>
        </div>

        {/* ── Dashboard Mock ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[1240px] mx-auto rounded-[48px] border border-white/[0.08] bg-[#050505] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)] group relative"
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between px-10 py-6 border-b border-white/[0.05] bg-white/[0.02]">
            <div className="flex gap-2.5">
              <div className="w-3 h-3 rounded-full bg-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/30" />
            </div>
            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#0f0f0f] border border-white/[0.08] text-[10px] text-[#4f46e5] font-black uppercase tracking-[0.2em]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#4f46e5] animate-pulse inline-block" />
              Live · Monitoring Active
            </div>
            <div className="w-20" />
          </div>

          {/* Panel grid */}
          <div className="p-8 lg:p-10 grid grid-cols-12 gap-8 min-h-[500px]">
            {/* Main metric */}
            <div className="col-span-12 lg:col-span-8 bg-[#080808] rounded-[32px] border border-white/[0.05] p-10 lg:p-14 flex flex-col relative overflow-hidden">
              <p className="text-[11px] font-black text-white/50 uppercase tracking-[0.25em] mb-4">Total Recovery Yield</p>
              <h4 className="text-[56px] lg:text-[72px] font-bold text-white tracking-tighter leading-none mb-12">
                $14,248,392
              </h4>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-8 mt-auto relative z-10">
                {STATS.map(s => (
                  <div key={s.label} className="flex flex-col gap-3">
                    <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">{s.label}</span>
                    <span className="text-[24px] lg:text-[28px] font-bold text-white">{s.val}</span>
                    <div className="h-[4px] bg-white/[0.08] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        transition={{ duration: 2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
              />
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4 flex flex-row lg:flex-col gap-8">
              {/* Agents */}
              <div className="flex-1 bg-[#080808] rounded-[32px] border border-white/[0.05] p-8 lg:p-10">
                <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.25em] mb-6">Active Agents</p>
                <div className="flex flex-col gap-5">
                  {AGENTS_MOCK.map((a, idx) => (
                    <motion.div 
                      key={a.id} 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + idx * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.1] overflow-hidden" />
                        <div>
                          <p className="text-[14px] font-bold text-white/90 leading-none mb-1">{a.name}</p>
                          <p className="text-[10px] text-white/50 font-black uppercase tracking-widest">{a.status}</p>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#c3f967] shadow-[0_0_10px_#c3f967]" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sentiment */}
              <div className="flex-1 bg-[#080808] rounded-[32px] border border-white/[0.05] p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-[10px] font-black text-[#4f46e5] uppercase tracking-[0.25em] mb-4">Sentiment Score</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-[48px] lg:text-[56px] font-bold text-white tracking-tighter leading-none">98.2</span>
                  <span className="text-[15px] font-black text-[#c3f967] tracking-tight">↑ 2.4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover tint animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/[0.05] via-transparent to-[#c3f967]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          variants={variants.fadeUp(0.6)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-8"
        >
          <Button variant="secondary" size="lg" href="#" icon="→" className="group">
            Explore Dashboard
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
