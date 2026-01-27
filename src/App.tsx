import { useState } from 'react';

import { Navbar } from './components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import { SystemStatus } from './components/SystemStatus';
import { ModuleExplorer } from './components/ModuleExplorer';
import { LiveAuditFooter } from './components/LiveAuditFooter';
import { HeroTerminal } from './components/HeroTerminal';

export default function App() {

  const [isBooting, setIsBooting] = useState(true);

  return (
    <div className="bg-[#020617] min-h-screen font-mono text-slate-300 selection:bg-emerald-500/30 overflow-x-hidden">

      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      {isBooting ? (

        <HeroTerminal onComplete={() => setIsBooting(false)} />
      ) : (

        <div className="relative z-10 animate-dashboard-entry">
          
          <Navbar /> 
          <main className="max-w-350 mx-auto p-4 md:p-8 grid grid-cols-12 gap-6 pb-24">

            <section className="col-span-12 lg:col-span-4 space-y-6">
              <ProfileCard />
              <SystemStatus />
            </section>

            <section className="col-span-12 lg:col-span-8">
              <ModuleExplorer />
            </section>

          </main>

          <LiveAuditFooter />
        </div>
      )}
    </div>
  );
}