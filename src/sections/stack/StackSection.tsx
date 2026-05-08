import { useState } from 'react';
import stackCategories from '../../data/StackCategories';
import { motion, AnimatePresence } from 'framer-motion';

export default function StackSection() {
  const [active, setActive] = useState(0);
  const current = stackCategories[active];

  return (
    <section
      style={{ scrollSnapAlign: 'start' }}
      className="relative flex-shrink-0 w-screen min-h-screen bg-[#090909] overflow-hidden flex flex-col md:flex-row"
    >
      <div className="md:w-[38%] shrink-0 flex flex-col justify-center px-8 md:px-14 lg:px-24 pt-16 pb-6 md:py-0">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <div className="w-6 md:w-8 h-px bg-blue-400/40" />
          <span className="font-liber text-[10px] text-blue-400/50 tracking-[0.45em] uppercase">Skills</span>
          <span className="font-liber text-[9px] text-[#e8e5df]/15 tracking-widest ml-auto">03 / 05</span>
        </div>

        <h2
          className="font-geist font-black text-[#e8e5df] leading-[0.88] tracking-tight mb-8 md:mb-12"
          style={{ fontSize: 'clamp(2rem, 4vw, 4.2rem)' }}
        >
          My<br />Stack.
        </h2>

        <div className="flex-col gap-0.5 hidden md:flex">
          {stackCategories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className="text-left py-3 pl-5 border-l-2 transition-all duration-300 flex items-center justify-between"
              style={{
                borderColor: active === i ? 'rgb(96,165,250)' : 'rgba(232,229,223,0.07)',
                cursor: 'none',
              }}
            >
              <span
                className="font-liber text-[11px] tracking-[0.3em] transition-colors duration-300"
                style={{ color: active === i ? 'rgba(232,229,223,0.85)' : 'rgba(232,229,223,0.22)' }}
              >
                {cat.label.toUpperCase()}
              </span>
              <span
                className="font-liber text-[9px] tracking-widest mr-4 transition-colors duration-300"
                style={{ color: active === i ? 'rgb(96,165,250)' : 'rgba(232,229,223,0.1)' }}
              >
                {cat.items.length}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 md:hidden">
          {stackCategories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className="font-liber text-[9px] tracking-[0.25em] px-3 py-1.5 rounded-sm border transition-all duration-300"
              style={{
                borderColor: active === i ? 'rgb(96,165,250)' : 'rgba(232,229,223,0.1)',
                color: active === i ? 'rgb(96,165,250)' : 'rgba(232,229,223,0.3)',
                background: active === i ? 'rgba(96,165,250,0.05)' : 'transparent',
                cursor: 'auto',
              }}
            >
              {cat.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="w-px shrink-0 my-20 hidden md:block" style={{ background: 'rgba(232,229,223,0.05)' }} />

      <div className="flex-1 flex flex-col justify-center pl-8 pr-8 md:pl-14 md:pr-40 lg:pl-20 lg:pr-48 pb-16 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <p className="font-liber text-[10px] text-blue-400/45 tracking-[0.4em] uppercase mb-6 md:mb-8">
              {current.label}
            </p>

            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {current.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  className="font-geist font-medium text-sm md:text-base text-[#e8e5df]/55 border px-3 md:px-4 py-1.5 md:py-2 rounded-sm
                             hover:text-[#e8e5df]/85 transition-all duration-300 cursor-default"
                  style={{ borderColor: 'rgba(232,229,223,0.09)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(96,165,250,0.35)';
                    el.style.color = 'rgba(232,229,223,0.88)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(232,229,223,0.09)';
                    el.style.color = 'rgba(232,229,223,0.55)';
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 md:mt-14 flex items-center gap-3">
              <div className="w-10 md:w-12 h-px" style={{ background: 'rgba(232,229,223,0.07)' }} />
              <span className="font-liber text-[9px] tracking-widest" style={{ color: 'rgba(232,229,223,0.12)' }}>
                {current.items.length} {current.items.length === 1 ? 'TECHNOLOGY' : 'TECHNOLOGIES'}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="absolute right-0 bottom-0 font-geist font-black select-none pointer-events-none text-white hidden md:block"
        style={{ fontSize: '18vw', opacity: 0.015, lineHeight: 0.85 }}
      >
        STACK
      </div>
    </section>
  );
}
