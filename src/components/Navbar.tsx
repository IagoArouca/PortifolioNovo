// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Terminal, Wifi, Battery, Clock } from 'lucide-react';

export function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="sticky top-0 z-60 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-emerald-500" />
          
        </div>
      </div>
      <div className="flex items-center gap-6 md:gap-8">
        <div className="hidden sm:flex items-center gap-2">
          <Wifi size={14} className="text-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-slate-500 uppercase">Signal: Stable</span>
        </div>
        
        <div className="hidden sm:flex items-center gap-2">
          <Battery size={14} className="text-emerald-500" />
          <span className="text-[10px] font-mono text-slate-500 uppercase">Power: 100%</span>
        </div>

        <div className="flex items-center gap-2 border-l border-slate-800 pl-6 md:pl-8">
          <Clock size={14} className="text-slate-500" />
          <span className="text-[11px] font-mono text-emerald-500 font-bold tabular-nums">
            {time}
          </span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-1">
        <div className="w-1 h-1 bg-emerald-500/20" />
        <div className="w-1 h-1 bg-emerald-500/40" />
        <div className="w-1 h-1 bg-emerald-500" />
      </div>
    </nav>
  );
}