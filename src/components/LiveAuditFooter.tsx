


const LOGS = [
  "EM BUSCA DE EMPREGO", "EM BUSCA DE EMPREGO", "EM BUSCA DE EMPREGO", 
  "EM BUSCA DE EMPREGO", "EM BUSCA DE EMPREGO", "EM BUSCA DE EMPREGO"
];

export function LiveAuditFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-[#020617] border-t border-emerald-500/20 py-1">
      <div className="flex items-center w-full overflow-hidden">

        <div className="bg-[#020617] pr-4 pl-6 flex items-center gap-2 shrink-0 z-20 border-r border-slate-800">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Dev</span>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 px-6">
            {LOGS.concat(LOGS).map((log, i) => (
              <span key={i} className="text-[10px] font-mono text-slate-500 uppercase">
                <span className="text-emerald-500/30 mr-2">#</span>{log}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap gap-12 px-6" aria-hidden="true">
            {LOGS.concat(LOGS).map((log, i) => (
              <span key={`clone-${i}`} className="text-[10px] font-mono text-slate-500 uppercase">
                <span className="text-emerald-500/30 mr-2">#</span>{log}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}