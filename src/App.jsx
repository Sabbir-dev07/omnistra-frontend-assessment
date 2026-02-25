import './index.css';
import Navbar from './components/Navbar/Navbar';
import Integrations from './components/Integrations';
import MissionControl from './components/MissionControl';
import Compliance from './components/Compliance';
import Agents from './components/Agents';
import { ChatBubble } from './components/ui/ChatBubble';

/**
 * Root App — Navbar (fixed 40px + 72px = 112px) → Hero → Integrations → Footer
 */
function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Fixed header: 24px announcement bar + 12px top + 48px nav + 48px bottom = 132px */}
      <Navbar />

      <main className="pt-[72px]">

        {/* Domu-style Section Suite */}
        <Integrations />
        <MissionControl />
        <Compliance />
        <Agents />

        {/* Footer */}
        <footer className="bg-[#050508] border-t border-[#1a1a26] py-12 px-6 lg:px-16">
          <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2.5 select-none">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#3448ff]"
              >
                <svg width="18" height="14" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4591 23.996L16.4118 18.3721C16.4118 18.3721 24.1707 12.0345 26.791 6.16874C26.7723 6.14897 17.7054 10.7632 17.7054 10.7632L14.0061 5.62295C20.772 0.983474 24.7214 1.69848 25.7767 3.16527L30.1387 9.22647C31.7551 11.4726 26.029 19.6752 20.4587 23.996H20.4591ZM9.95881 -0.000976563L14.0061 5.62295C14.0061 5.62295 6.24723 11.9605 3.62693 17.8263C3.64561 17.846 12.7126 13.2319 12.7126 13.2319L16.4118 18.3721C9.64591 23.0115 5.69657 22.2965 4.64125 20.8297L0.278806 14.7685C-1.33764 12.5224 4.38893 4.31985 9.95881 -0.000976563Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-[15px] font-bold text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Charge<span className="text-[#3448ff]">flow</span>
              </span>
            </div>

            <p className="text-[11px] text-gray-600 text-center">
              © {new Date().getFullYear()} Chargeflow, Inc. · Omnistra Frontend Assessment
            </p>

            <div className="flex gap-5 text-[11px] text-gray-600">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
        {/* Floating Chat Bubble */}
        <ChatBubble />
      </main>
    </div>
  );
}

export default App;
