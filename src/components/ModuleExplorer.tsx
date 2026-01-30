import { ProjectModule } from './ProjectModule';
import { HardDrive, ShieldAlert, BarChart3, Calendar } from 'lucide-react';

export function ModuleExplorer() {
  const projects = [
    {
      id: "PROJETO 1",
      title: "LemurLog Analytics",
      category: "Infraestrutura e Segurança",
      status: "STABLE" as const,
      tech: ["React", "NestJS", "JWT", "Bcrypt", "Prisma", "Tailwind"],
      description: "Sistema de monitorização de integridade e auditoria de acessos. Implementa análise de logs em tempo real.",
      isCritical: true,
      githubUrl: "https://github.com/IagoArouca/SecurityLogs", 
      deployUrl: "https://security-logs.vercel.app/login" 
    },
    {
      id: "PROJETO 2",
      title: "E-COMMERCE",
      category: "Fullstack",
      status: "STABLE" as const,
      tech: ["React.JS", "JavaScript", "Jwt", "MongoDB"],
      description: "Desenvolvi este e-commerce funcional para venda de produtos digitais, com foco em usabilidade, performance e experiência de compra online intuitiva.",
      githubUrl: "https://github.com/IagoArouca/E-commerce-Produtos-Digitais",
      deployUrl: "https://e-commerce-produtos-digitais.vercel.app/"
    },
    {
      id: "MEU PRIMEIRO SAAS",
      title: "LuzNo Codigo",
      category: "Fullstack",
      status: "BETA" as const,
      tech: ["Nest.js", "Docker", "WebSockets", "React.JS", "Postgresql"],
      description: "Visibilidade Reversa: A plataforma foi desenhada para que os recrutadores naveguem e descubram perfis qualificados. Você constrói seu valor e o sistema te coloca sob os holofotes.",
      githubUrl: "https://github.com/IagoArouca/Saas",
      deployUrl: "https://saas-pied-mu.vercel.app/"
    },
    {
      id: "PROJETO 4",
      title: "Docker Swarm",
      category: "Docker",
      status: "BETA" as const,
      tech: ["Vagrant", "Docker"],
      description: "Criei e provisionei um cluster Docker Swarm completo (1 Gerente e 3 Workers) usando Vagrant e VirtualBox para gerenciar as VMs Ubuntu.",
      githubUrl: "https://github.com/IagoArouca/Cluster-Docker-Swarm",
    }
  ];

  return (
    <div className="space-y-6 mb-24">
      <div className="bg-slate-900/40 border border-slate-800 p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <HardDrive size={20} className="text-emerald-500" />
          <h2 className="text-xs font-black text-white uppercase tracking-widest">
            REPOSITORIO DE PROJETOS
          </h2>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 4 ATIVOS
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectModule key={project.id} {...project} />
        ))}
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-sm overflow-hidden">
        <div className="p-4 border-b border-slate-800 bg-slate-900/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert size={14} className="text-emerald-500" />
            <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em]">
              Métricas ao vivo do GitHub // IagoArouca
            </span>
          </div>
        </div>

        <div className="p-6 space-y-8 bg-black/20">

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-500 px-2">
              <BarChart3 size={12} />
              <span className="text-[8px] font-mono uppercase tracking-tighter">{">"} fetch --languages</span>
            </div>
            <div className="w-full flex justify-center bg-[#0d1117] p-4 rounded border border-slate-800">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=IagoArouca&layout=compact&theme=github_dark&hide_border=true&bg_color=0d1117&title_color=10b981&icon_color=10b981" 
                alt="Top Languages"
                className="max-w-full"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('eight-theta')) {
                    target.src = "https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=IagoArouca&layout=compact&theme=github_dark&hide_border=true&bg_color=0d1117&title_color=10b981&icon_color=10b981";
                  } else {
                    target.style.display = 'none'; 
                  }
                }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-500 px-2">
              <Calendar size={12} />
              <span className="text-[8px] font-mono uppercase tracking-tighter">{">"} load --contribution-heatmap</span>
            </div>
            <div className="w-full overflow-x-auto bg-[#0d1117] p-6 rounded border border-slate-800 flex justify-center">
              <img 
                src="https://ghchart.rshah.org/40c463/IagoArouca" 
                alt="GitHub Heatmap"
                className="max-w-none md:max-w-full"
                style={{ 
                  filter: 'invert(1) hue-rotate(180deg) brightness(0.8)',
                  mixBlendMode: 'lighten'
                }}
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-slate-800 bg-slate-950/50 flex justify-between items-center">
          <span className="text-[7px] font-mono text-slate-600 uppercase">System_Auth: SUCCESS</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-emerald-500/20" />
            <div className="w-1 h-1 bg-emerald-500/50" />
            <div className="w-1 h-1 bg-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
}