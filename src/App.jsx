import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';

/**
 * Root App component.
 * Layout: Announcement bar + Navbar (fixed) → Hero → Integrations → Footer stub
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar (includes announcement bar) */}
      <Navbar />

      {/* Hero – padded top to clear fixed navbar (announcement ~32px + navbar ~64px = ~96px) */}
      <main>
        <div className="pt-24">
          <Hero />
        </div>

        {/* Integrations Section (dark) */}
        <Integrations />

        {/* Minimal footer */}
        <footer className="bg-[#060609] border-t border-[#1e1e2e] py-12 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 select-none">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M9.5 1L3 9H8L6.5 15L13 7H8L9.5 1Z" fill="white" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                charge<span className="text-violet-400">flow</span>
              </span>
            </div>
            <p className="text-xs text-gray-600 text-center">
              © {new Date().getFullYear()} Chargeflow, Inc. · Omnistra Frontend Assessment
            </p>
            <div className="flex gap-4 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
