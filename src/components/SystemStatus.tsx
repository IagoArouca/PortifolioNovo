// src/components/SystemStatus.tsx
import { Activity, Cpu, Zap, Database, Brain, Users, Lightbulb, MessageSquare } from 'lucide-react';

interface SkillProps {
  label: string;
  value: number;
  colorClass: string;
  status: string;
}

function ResourceBar({ label, value, colorClass, status }: SkillProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
          <span className="text-[9px] font-mono text-slate-600 italic">{status}</span>
        </div>
        <span className={`text-xs font-mono font-bold ${colorClass.replace('bg-', 'text-')}`}>{value}%</span>
      </div>
      <div className="h-1.5 bg-slate-800/50 border border-slate-700/30 overflow-hidden relative">
        <div 
          className={`h-full ${colorClass} transition-all duration-1000 ease-out relative`}
          style={{ width: `${value}%` }}
        >
          <div className="absolute top-0 right-0 w-4 h-full bg-white/20 blur-sm" />
        </div>
      </div>
    </div>
  );
}

export function SystemStatus() {
  return (
    <div className="bg-slate-900/40 border border-slate-800 p-6 relative overflow-hidden group">
      <div className="absolute top-2 right-2 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[8px] font-mono text-emerald-500/70 tracking-tighter">Open_To_Work</span>
      </div>

      <div className="grid grid-cols-1 gap-8">

        <div className="space-y-6">
          <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
            <Activity size={14} className="text-emerald-500" />
            Hard Skills:
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Cpu size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Core Engine (Frontend)</span>
            </div>
            <ResourceBar label="React / Next.js" value={94} colorClass="bg-emerald-500" status="PERFORMANCE" />
            <ResourceBar label="TypeScript" value={92} colorClass="bg-blue-500" status="SEGURANÇA" />
          </div>
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 text-slate-400">
              <Database size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Neural Link (Backend)</span>
            </div>
            <ResourceBar label="Node.js / NestJS" value={98} colorClass="bg-amber-500" status="SERVIDOR" />
            <ResourceBar label="PostgreSQL / Prisma" value={75} colorClass="bg-indigo-500" status="BANCO DE DADOS" />
          </div>
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 text-slate-400">
              <Zap size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Security & Cloud</span>
            </div>
            <ResourceBar label="AWS Services" value={70} colorClass="bg-orange-500" status="INFRAESTRUTURA" />
            <ResourceBar label="Auth (JWT/Bcrypt)" value={91} colorClass="bg-red-500" status="CRIPTOGRAFIA" />
          </div>
        </div>
        <div className="space-y-6 border-t border-slate-800 pt-8">
          <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
            <Brain size={14} className="text-purple-500" />
            Soft Skils:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Users size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Time</span>
              </div>
              <ResourceBar label="Liderança" value={90} colorClass="bg-purple-500" status="GERENCIAMENTO" />
              <ResourceBar label="Colaboração" value={95} colorClass="bg-purple-500" status="SINERGIA" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Lightbulb size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Solução de problemas</span>
              </div>
              <ResourceBar label="Pensamento Analítico" value={90} colorClass="bg-pink-500" status="LÓGICA" />
              <ResourceBar label="Comunicação" value={88} colorClass="bg-pink-500" status="TRANSMISSÃO" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
        <div className="text-[9px] font-mono">
          <span className="text-slate-600 block uppercase">Load Average</span>
          <span className="text-slate-300">0.42 / 0.58 / 0.61</span>
        </div>
        <div className="text-[9px] font-mono text-right">
          <span className="text-slate-600 block uppercase">Memory Usage</span>
          <span className="text-slate-300">14.2 GB / 32 GB</span>
        </div>
      </div>
    </div>
  );
}