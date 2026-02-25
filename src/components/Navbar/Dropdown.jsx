 import { motion } from 'framer-motion';

// ─── SVG Illustrations ───────────────────────────────────────────────────────

const Illustrations = {
  Node: () => (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d="M100 0 L100 200 M0 100 L200 100" stroke="white" strokeWidth="0.2" />
      <circle cx="100" cy="60" r="3" fill="#4f46e5" />
      <circle cx="140" cy="100" r="3" fill="#4f46e5" />
      <circle cx="60" cy="100" r="3" fill="#4f46e5" />
    </svg>
  ),
  Orbit: () => (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 200 200" fill="none">
      {[40, 60, 80].map((r, i) => (
        <circle key={i} cx="100" cy="100" r={r} stroke="white" strokeWidth="0.5" opacity={0.3} />
      ))}
      <motion.circle 
        cx="100" cy="100" r="60" stroke="#4f46e5" strokeWidth="1" strokeDasharray="10 180"
        animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  ),
  Wave: () => (
    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 200 200" fill="none">
      <path d="M0 140 Q 50 100 100 140 T 200 140" stroke="white" strokeWidth="0.5" />
      <path d="M0 150 Q 50 110 100 150 T 200 150" stroke="#4f46e5" strokeWidth="0.5" opacity="0.5" />
      <path d="M0 160 Q 50 120 100 160 T 200 160" stroke="white" strokeWidth="0.5" opacity="0.4" />
    </svg>
  ),
  Layers: () => (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 200 200" fill="none">
      <rect x="60" y="60" width="80" height="50" rx="4" stroke="white" strokeWidth="0.5" transform="rotate(-10 100 100)" />
      <rect x="60" y="75" width="80" height="50" rx="4" stroke="#4f46e5" strokeWidth="0.5" transform="rotate(-10 100 100)" />
      <rect x="60" y="90" width="80" height="50" rx="4" stroke="white" strokeWidth="0.5" transform="rotate(-10 100 100)" />
    </svg>
  )
};

const badgeColors = {
  NEW: { bg: 'rgba(79, 70, 229, 0.1)', text: '#818cf8', border: 'rgba(79, 70, 229, 0.2)' },
  FREE: { bg: 'rgba(255, 255, 255, 0.05)', text: '#94a3b8', border: 'rgba(255, 255, 255, 0.1)' },
  'FOR PLATFORMS': { bg: 'rgba(255, 255, 255, 0.08)', text: '#fff', border: 'rgba(255, 255, 255, 0.2)' },
  HIRING: { bg: 'rgba(16, 185, 129, 0.1)', text: '#10b981', border: 'rgba(16, 185, 129, 0.2)' },
};

// ─── Shared Components ───────────────────────────────────────────────────────

function Badge({ text }) {
  if (!text) return null;
  const colors = badgeColors[text] || { bg: 'rgba(255,255,255,0.05)', text: '#94a3b8', border: 'rgba(255,255,255,0.1)' };
  return (
    <span 
      className="ml-2 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-[0.12em] border"
      style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
    >
      {text}
    </span>
  );
}

function CardWrapper({ children, className = "", illustration }) {
  const Illustration = Illustrations[illustration] || (() => null);
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`group relative p-6 rounded-3xl bg-[#0c0c0c] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer h-full flex flex-col ${className}`}
    >
      <Illustration />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
      {/* Localized Glow */}
      <div className="absolute -inset-1 bg-linear-to-br from-[#4f46e5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none" />
    </motion.div>
  );
}

// ─── Product Card ────────────────────────────────────────────────────────────

function ProductCard({ item, index }) {
  const illustrations = ['Node', 'Orbit', 'Wave', 'Node', 'Layers'];
  return (
    <CardWrapper illustration={illustrations[index % illustrations.length]}>
      <div className="flex items-center mb-4">
        <span className="text-[14px] font-bold text-white group-hover:text-[#4f46e5] transition-colors uppercase tracking-tight">
          {item.title}
        </span>
        <Badge text={item.badge} />
      </div>
      <p className="text-[12px] text-gray-500 leading-[1.6] group-hover:text-gray-400 transition-colors grow">
        {item.desc}
      </p>
      {/* Action Indicator */}
      <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-[#4f46e5] opacity-0 group-hover:opacity-100 transform -translate-x-2.5 group-hover:translate-x-0 transition-all duration-300">
        LEARN MORE <span className="text-xs">→</span>
      </div>
    </CardWrapper>
  );
}

// ─── Main Content Layouts ────────────────────────────────────────────────────

function ProductLayout({ items }) {
  return (
    <div className="grid grid-cols-5 gap-3 w-full">
      {items.map((item, i) => (
        <ProductCard key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}

function CustomersLayout({ data }) {
  return (
    <div className="flex gap-3 w-full">
      <div className="w-[35%]">
        <CardWrapper className="h-full flex flex-col justify-center text-center p-10 bg-[#111] border-[#4f46e5]/10">
          <h3 className="text-[18px] font-bold text-white mb-3 uppercase tracking-tight">{data.leftSide.title}</h3>
          <p className="text-[13px] text-gray-500 mb-8">{data.leftSide.desc}</p>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#4f46e5]"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </CardWrapper>
      </div>
      <div className="w-[65%] grid grid-cols-2 gap-3">
        {data.items.map((item) => (
          <CardWrapper key={item.title}>
            <div className="text-[9px] font-black text-[#4f46e5] uppercase tracking-[0.15em] mb-3 px-2 py-1 bg-[#4f46e5]/5 rounded-full w-fit">
              {item.category}
            </div>
            <div className="text-[16px] font-bold text-white mb-2">{item.title}</div>
            <div className="text-[13px] text-gray-500 italic leading-relaxed">"{item.desc}"</div>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
}

function IntegrationsLayout({ data }) {
  return (
    <div className="flex gap-3 w-full">
       <div className="w-[50%]">
          <CardWrapper className="h-full flex flex-col justify-center items-center text-center p-10 bg-[#0a0a0a]">
              <div className="w-16 h-16 rounded-[20px] bg-[#4f46e5]/5 border border-[#4f46e5]/20 flex items-center justify-center mb-6">
                <div className="w-8 h-8 rounded-full bg-[#4f46e5] blur-xl opacity-30" />
                <span className="text-2xl relative z-10 opacity-80">🔌</span>
              </div>
              <h3 className="text-[18px] font-bold text-white mb-3 uppercase tracking-tight">{data.leftSide.title}</h3>
              <p className="text-[13px] text-gray-600">{data.leftSide.desc}</p>
          </CardWrapper>
       </div>
       <div className="w-[50%] flex flex-col gap-2">
          {data.items.map(item => (
            <div key={item.title} className="group flex items-center gap-4 p-4 rounded-[18px] hover:bg-white/[0.04] transition-all cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center font-bold text-[14px] text-white group-hover:border-[#4f46e5]/20 group-hover:bg-[#4f46e5]/5 transition-all">
                    {item.title[0]}
                </div>
                <div>
                   <div className="text-[14px] font-bold text-white mb-1 group-hover:text-[#4f46e5] transition-colors">{item.title}</div>
                   <div className="text-[11px] text-gray-600 leading-tight">{item.desc}</div>
                </div>
            </div>
          ))}
       </div>
    </div>
  );
}

function ResourcesLayout({ data }) {
  return (
    <div className="flex gap-3 w-full">
        <div className="w-[70%] grid grid-cols-2 gap-3">
            {data.items.map((item, i) => (
                <CardWrapper key={item.title} className="min-h-[140px] flex flex-col justify-end" illustration={i % 2 === 0 ? 'Orbit' : 'Wave'}>
                    <div className="text-[16px] font-bold text-white uppercase tracking-tight mb-2">{item.title}</div>
                    <div className="text-[11px] text-gray-600 leading-normal">{item.desc}</div>
                </CardWrapper>
            ))}
        </div>
        <div className="w-[30%] flex flex-col gap-3">
            {data.sidebar.map(item => (
                <div key={item.title} className="group p-6 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-[#4f46e5]/20 transition-all cursor-pointer">
                    <div className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] mb-4 group-hover:text-[#4f46e5] transition-colors">{item.title}</div>
                    <div className="text-[13px] font-bold text-white mb-1">{item.desc}</div>
                    <div className="text-[11px] text-[#4f46e5] opacity-0 group-hover:opacity-100 transition-opacity">View Details →</div>
                </div>
            ))}
        </div>
    </div>
  );
}

function CompanyLayout({ items }) {
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {items.map((item) => (
        <CardWrapper key={item.title}>
          <div className="flex items-center mb-3">
            <div className="text-[14px] font-bold text-white group-hover:text-[#4f46e5] transition-colors uppercase tracking-tight">{item.title}</div>
            <Badge text={item.badge} />
          </div>
          <p className="text-[12px] text-gray-600 group-hover:text-gray-500 transition-colors">{item.desc}</p>
        </CardWrapper>
      ))}
    </div>
  );
}

// ─── Dropdown Entry Point ────────────────────────────────────────────────────

export const Dropdown = ({ type, items, leftSide, sidebar }) => {
  const data = { items, leftSide, sidebar };
  
  return (
    <div className="pointer-events-auto w-full">
      {type === 'product' && <ProductLayout items={items} />}
      {type === 'customers' && <CustomersLayout data={data} />}
      {type === 'integrations' && <IntegrationsLayout data={data} />}
      {type === 'resources' && <ResourcesLayout data={data} />}
      {type === 'company' && <CompanyLayout items={items} />}
    </div>
  );
};

