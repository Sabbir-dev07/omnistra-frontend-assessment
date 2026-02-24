import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';

/**
 * Root App component.
 * Layout: Navbar (fixed, 68px) → Hero → Integrations → Footer
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar — transparent at top, white on scroll */}
      <Navbar />

      <main>
        {/* pt-[88px] clears the fixed navbar height with some breathing room */}
        <div className="pt-[88px]">
          <Hero />
        </div>

        {/* Integrations section (dark background) */}
        <Integrations />

        {/* Footer */}
        <footer className="bg-[#060609] border-t border-[#1e1e2e] py-12 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Brand */}
            <div className="flex items-center gap-2 select-none">
              <div
                className="w-7 h-7 rounded-[8px] flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0066ff, #0044cc)' }}
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M10 1L3.5 9H8.5L6 15L12.5 7H7.5L10 1Z" fill="white" />
                </svg>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Charge<span style={{ color: '#3b82f6' }}>flow</span>
              </span>
            </div>

            <p className="text-xs text-gray-600 text-center">
              © {new Date().getFullYear()} Chargeflow, Inc. · Omnistra Frontend Assessment
            </p>

            <div className="flex gap-5 text-xs text-gray-600">
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
