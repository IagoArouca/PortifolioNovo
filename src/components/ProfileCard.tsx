
import { Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="relative group bg-slate-900/40 border border-slate-800 p-6 overflow-hidden transition-all hover:border-emerald-500/30">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-emerald-500/40 to-transparent -translate-y-full group-hover:translate-y-62.5 transition-all duration-3000 ease-in-out opacity-0 group-hover:opacity-100 z-20" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-32 h-32 mb-6 border-2 border-slate-700 p-1 bg-slate-950">
          <div className="absolute inset-0 z-10 border border-emerald-500/20 pointer-events-none" />
          <img 
            src="https://github.com/IagoArouca.png" 
            alt="Operator"
            className="w-full h-full object-cover grayscale brightness-75 contrast-125 hover:grayscale-0 transition-all duration-500"
          />

          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500" />
        </div>

        <div className="text-center w-full">
          <div className="flex justify-center items-center gap-2 mb-1">
            <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded uppercase tracking-widest">Level: JUNIOR_Dev</span>
            <span className="text-[10px] font-mono text-slate-500">ID: ******</span>
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Iago Arouca</h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-800 pb-4">
             DEV FULLSTACK E SECURITY
          </p>
        </div>
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin size={14} className="text-emerald-500" />
              <span>LOCALIZAÇÃO:</span>
            </div>
            <span className="text-slate-300">BRAZIL // BAHIA</span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-2 text-slate-500">
              <Mail size={14} className="text-emerald-500" />
              <span>EMAIL:</span>
            </div>
            <span className="text-slate-300">Iagoaroucaferreira@hotmail.com</span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-2 text-slate-500">
              <Globe size={14} className="text-emerald-500" />
              <span>NETWORK:</span>
            </div>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/iago-arouca-b0b5381ab/" className="text-emerald-500 hover:text-white transition-colors underline decoration-emerald-500/30">LinkedIn</a>
              <span className="text-slate-700">|</span>
              <a href="https://github.com/IagoArouca" className="text-emerald-500 hover:text-white transition-colors underline decoration-emerald-500/30">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full py-2 bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center gap-2">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em]">
          Integridade das credenciais verificada</span>
        </div>
      </div>
    </div>
  );
}