import { ExternalLink, Github, Cpu, ShieldCheck } from 'lucide-react';

interface ProjectProps {
  id: string;
  title: string;
  category: string;
  status: 'STABLE' | 'DEPRECATED' | 'BETA';
  tech: string[];
  description: string;
  isCritical?: boolean;
  githubUrl?: string;
  deployUrl?: string; 
}

export function ProjectModule({ 
  id, 
  title, 
  status, 
  tech, 
  description, 
  isCritical,
  githubUrl,
  deployUrl 
}: ProjectProps) {
  return (
    <div className={`group relative bg-slate-900/40 border ${isCritical ? 'border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]' : 'border-slate-800'} p-6 transition-all hover:bg-slate-900/60`}>
      
      {isCritical && (
        <div className="absolute -top-px left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500 to-transparent" />
      )}

      <header className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`text-[9px] font-mono ${isCritical ? 'text-emerald-500' : 'text-slate-500'}`}>
              {id}
            </span>
            {isCritical && <ShieldCheck size={10} className="text-emerald-500 animate-pulse" />}
          </div>
          <h3 className="text-lg font-black text-white uppercase tracking-tighter group-hover:text-emerald-500 transition-colors">
            {title}
          </h3>
        </div>
        
        <div className="flex gap-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="View Code" 
              className="p-1.5 text-slate-600 hover:text-white transition-colors cursor-pointer"
            >
              <Github size={16} />
            </a>
          )}
          {deployUrl && (
            <a 
              href={deployUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Open Deployment" 
              className="p-1.5 text-slate-600 hover:text-emerald-500 transition-colors cursor-pointer"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </header>

      <div className="space-y-4">
        <p className="text-xs text-slate-400 font-sans leading-relaxed min-h-15">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {tech.map(t => (
            <span key={t} className="text-[8px] font-mono border border-slate-800 bg-slate-950/50 px-2 py-0.5 text-slate-500 group-hover:border-emerald-500/30 group-hover:text-slate-300 transition-all">
              {t}
            </span>
          ))}
        </div>
      </div>

      <footer className="mt-6 flex items-center justify-between border-t border-slate-800/50 pt-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-600 uppercase font-black">Status</span>
            <span className={`text-[10px] font-bold ${status === 'STABLE' ? 'text-emerald-500' : 'text-amber-500'}`}>
              ● {status}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-600 uppercase font-black">Integrity</span>
            <span className="text-[10px] font-bold text-slate-300">100% SECURE</span>
          </div>
        </div>
        <div className="p-2 bg-slate-800/50 rounded">
          <Cpu size={14} className={isCritical ? "text-emerald-500" : "text-slate-600"} />
        </div>
      </footer>
    </div>
  );
}