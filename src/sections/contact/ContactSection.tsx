export default function ContactSection() {
  return (
    <section
      style={{ scrollSnapAlign: 'start' }}
      className="relative flex-shrink-0 w-screen min-h-screen bg-[#090909] flex items-center overflow-hidden"
    >
      <div
        className="absolute left-0 bottom-0 font-geist font-black select-none pointer-events-none text-white hidden md:block"
        style={{ fontSize: '16vw', opacity: 0.015, lineHeight: 0.85 }}
      >
        CONTACT
      </div>

      <div className="relative z-10 pl-8 pr-8 md:pl-14 md:pr-40 lg:pl-28 lg:pr-48 w-full py-20 md:py-0">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <div className="w-6 md:w-8 h-px bg-blue-400/40" />
          <span className="font-liber text-[10px] text-blue-400/50 tracking-[0.4em] uppercase">Get in touch</span>
          <span className="font-liber text-[9px] text-[#e8e5df]/15 tracking-widest ml-auto">05 / 05</span>
        </div>

        <h2
          className="font-geist font-black text-[#e8e5df] leading-[0.87] tracking-tight mb-12 md:mb-16"
          style={{ fontSize: 'clamp(2.8rem, 7.5vw, 7.5rem)' }}
        >
          Let's<br />
          <span style={{ WebkitTextStroke: '1.5px rgba(232,229,223,0.28)', color: 'transparent' }}>
            Talk.
          </span>
        </h2>

        <div className="flex flex-col gap-6 md:gap-7">
          <a href="mailto:dawzwolak@gmail.com" className="group flex items-baseline gap-6 md:gap-8 w-fit">
            <span className="font-liber text-[9px] text-[#e8e5df]/18 tracking-[0.4em] w-14 shrink-0">MAIL</span>
            <span className="font-geist text-[#e8e5df]/50 text-lg md:text-xl group-hover:text-[#e8e5df]/85 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#e8e5df]/30 group-hover:after:w-full after:transition-all after:duration-400">
              dawzwolak@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/dawid-zwolak-6607b8298"
            target="_blank"
            className="group flex items-baseline gap-6 md:gap-8 w-fit"
          >
            <span className="font-liber text-[9px] text-[#e8e5df]/18 tracking-[0.4em] w-14 shrink-0">LINKEDIN</span>
            <span className="font-geist text-[#e8e5df]/50 text-lg md:text-xl group-hover:text-[#e8e5df]/85 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#e8e5df]/30 group-hover:after:w-full after:transition-all after:duration-400">
              Dawid Zwolak
            </span>
          </a>

          <div className="flex items-baseline gap-6 md:gap-8">
            <span className="font-liber text-[9px] text-[#e8e5df]/18 tracking-[0.4em] w-14 shrink-0">DISCORD</span>
            <span className="font-geist text-[#e8e5df]/50 text-lg md:text-xl">zwolak</span>
          </div>
        </div>

        <div className="mt-16 md:absolute md:bottom-8 md:left-0 md:right-0 md:px-14 lg:px-28 flex justify-between items-end">
          <span className="font-liber text-[8px] text-[#e8e5df]/10 tracking-[0.4em]">© 2025 DAWID ZWOLAK</span>
          <span className="font-liber text-[8px] text-[#e8e5df]/8 tracking-[0.3em] hidden md:block">REACT + VITE + TAILWIND</span>
        </div>
      </div>
    </section>
  );
}
