// src/components/HeroTerminal.tsx
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroTerminalProps {
  onComplete: () => void;
}

const lines = [
  "Iniciando protocolo pessoal...",
  "Carregando Engineer_Profile.json...",
  "Status: Online. Processando credenciais...",
  "Acesso concedido a IAGO.",
  "Cargo: Engenheiro de Software Fullstack.",
  "Especialização: Sistemas de alto desempenho e Segurança.",
  "Comando: Inicializando interface do Painel...",
];

export function HeroTerminal({ onComplete }: HeroTerminalProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(finishTimeout);
    }

    const currentLine = lines[currentLineIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentLine && charIndex < currentLine.length) {
        const nextChar = currentLine[charIndex];
        setDisplayedText(prev => prev + nextChar);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        
        setTimeout(() => {
          setDisplayedText(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
        }, 300);
      }
    }, 30); 

    return () => clearInterval(typingInterval);
  }, [currentLineIndex, onComplete]);

  return (
    <section className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] p-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[101] bg-[length:100%_2px,3px_100%]" />
      
      <div className="w-full max-w-2xl font-mono relative z-[102]">
        <div className="flex items-center gap-2 mb-4 text-emerald-500 border-b border-emerald-500/20 pb-2 text-glow-emerald">
          <ChevronRight size={18} className="animate-pulse" />
          <span className="text-xs font-black uppercase tracking-[0.3em]">
            Sequência de Inicialização do Sistema
          </span>
        </div>
        
        <pre className="text-emerald-500/90 text-sm md:text-base leading-relaxed whitespace-pre-wrap drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">
          {displayedText}
          <span className="animate-blink inline-block w-2 h-4 bg-emerald-500 align-middle ml-1" />
        </pre>
      </div>
    </section>
  );
}