import { useState, useEffect } from 'react';
import TypingEffect from '../../utils/TypingEffect';

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const p = (depth: number): React.CSSProperties => ({
    transform: `translate(${mouse.x * depth}px, ${mouse.y * depth}px)`,
    transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
  });

  return (
    <section
      style={{ scrollSnapAlign: 'start' }}
      className="relative flex-shrink-0 w-screen min-h-screen bg-[#090909] flex items-center overflow-hidden"
    >
      <div className="absolute rounded-full border border-white/[0.025] pointer-events-none hidden md:block"
        style={{ width: '60vw', height: '60vw', right: '-8vw', top: '50%', marginTop: '-30vw', ...p(16) }} />
      <div className="absolute rounded-full border border-blue-400/[0.07] pointer-events-none hidden md:block"
        style={{ width: '40vw', height: '40vw', right: '7vw', top: '50%', marginTop: '-20vw', ...p(28) }} />
      <div className="absolute rounded-full border border-blue-400/[0.05] pointer-events-none hidden md:block"
        style={{ width: '20vw', height: '20vw', right: '22vw', top: '50%', marginTop: '-10vw', ...p(44) }} />
      <div className="absolute w-2 h-2 rounded-full bg-blue-400/25 pointer-events-none hidden md:block"
        style={{ right: '33vw', top: '28%', ...p(62) }} />

      <div
        className="absolute right-0 bottom-0 font-geist font-black select-none pointer-events-none text-white hidden md:block"
        style={{ fontSize: '30vw', opacity: 0.018, lineHeight: 0.85 }}
      >
        DZ
      </div>

      <div className="relative z-10 pl-8 pr-8 md:pl-14 md:pr-14 lg:pl-28 lg:pr-20 py-20 md:py-0 w-full md:w-1/2">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-6 md:w-8 h-px bg-blue-400/40" />
          <span className="font-liber text-[10px] text-blue-400/50 tracking-[0.4em] uppercase">
            01 — Portfolio 2025
          </span>
        </div>

        <h1
          className="font-geist font-black text-[#e8e5df] leading-[0.87] tracking-tight mb-8"
          style={{ fontSize: 'clamp(3rem, 7vw, 7.5rem)' }}
        >
          Dawid<br />
          <span style={{ WebkitTextStroke: '1.5px rgba(232,229,223,0.28)', color: 'transparent' }}>
            Zwolak
          </span>
        </h1>

        <div className="flex items-center gap-3 mb-8">
          <span className="font-liber text-[#e8e5df]/22 text-base">~$</span>
          <TypingEffect
            texts={['WebDev', 'Frontend Dev', 'Backend Dev', 'GameDev']}
            typingSpeed={120}
            deletingSpeed={55}
            pauseDuration={2400}
            className="font-liber text-base text-[#e8e5df]/45 tracking-widest"
          />
        </div>

        <p className="font-liber text-[11px] text-[#e8e5df]/22 leading-loose tracking-wider mb-8">
          CS student · Junior React Developer at HTRI<br />
          Based in Lublin, Poland
        </p>

        <div className="flex items-center gap-3 mb-10">
          <div className="relative shrink-0 w-1.5 h-1.5">
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
            <div className="relative w-1.5 h-1.5 rounded-full bg-green-400"
              style={{ boxShadow: '0 0 8px rgba(74,222,128,0.9)' }} />
          </div>
          <span className="font-liber text-[9px] text-[#e8e5df]/30 tracking-[0.4em]">AVAILABLE</span>
          <span
            className="font-liber text-[9px] tracking-[0.4em]"
            style={{ color: 'rgb(96,165,250)', textShadow: '0 0 14px rgba(96,165,250,0.55)' }}
          >
            OPEN TO WORK
          </span>
        </div>

        <span className="font-liber text-[9px] text-[#e8e5df]/12 tracking-[0.4em] hidden md:block">SCROLL →</span>
      </div>

      <div className="absolute top-6 right-6 md:top-8 md:right-40 font-liber text-[10px] text-[#e8e5df]/15 tracking-widest">
        01 / 05
      </div>
    </section>
  );
}
