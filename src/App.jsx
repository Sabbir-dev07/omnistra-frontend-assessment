import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import MissionControl from './components/MissionControl';
import Compliance from './components/Compliance';
import Agents from './components/Agents';
import ClientCases from './components/ClientCases';
import { Logo } from './components/Navbar/Logo';
import { motion } from 'framer-motion';

const FOOTER_LINKS = [
  { label: 'Product',   href: '#' },
  { label: 'Customers', href: '#' },
  { label: 'Pricing',   href: '#' },
  { label: 'Company',   href: '#' },
];

const LEGAL_LINKS = ['Privacy', 'Terms', 'Contact'];

function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/[0.04] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4f46e5]/[0.035] blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 py-16 lg:py-24">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-20">
          <Logo active={false} scrolled={true} />
          
          <nav className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {FOOTER_LINKS.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -2, color: '#fff' }}
                className="text-[14px] font-bold text-white/30 uppercase tracking-[0.2em] transition-colors"
                title={link.label}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/[0.04]">
          <p className="text-[12px] text-white/20 font-medium tracking-tight">
            © 2026 Omnistra. Built for the era of intelligent servicing.
          </p>
          
          <div className="flex items-center gap-8">
            {LEGAL_LINKS.map(link => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: '#fff' }}
                className="text-[12px] text-white/20 font-medium hover:text-white transition-colors"
                title={link}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import AnimatedBackground from './components/ui/AnimatedBackground';
import ScrollReveal from './components/ui/ScrollReveal';

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-[#4f46e5]/30">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 pt-32 lg:pt-40">
        <Hero />
        
        <ScrollReveal>
          <Integrations />
        </ScrollReveal>

        <ScrollReveal>
          <MissionControl />
        </ScrollReveal>

        <ScrollReveal>
          <Compliance />
        </ScrollReveal>

        <ScrollReveal>
          <Agents />
        </ScrollReveal>

        <ScrollReveal>
          <ClientCases />
        </ScrollReveal>

        <Footer />
      </main>
    </div>
  );
}

export default App;
