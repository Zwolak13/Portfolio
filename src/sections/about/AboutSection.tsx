import MEPNG from '../../assets/IMG/me.png';
import education from '../../data/Education';

export default function AboutSection() {
  return (
    <section
      style={{ scrollSnapAlign: 'start' }}
      className="relative flex-shrink-0 w-screen min-h-screen bg-[#090909] flex overflow-hidden"
    >
      <div className="hidden md:block relative w-[38%] h-full shrink-0" style={{ minHeight: '100vh' }}>
        <img
          src={MEPNG}
          alt="Dawid Zwolak"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'grayscale(100%) brightness(0.5)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, #090909)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(9,9,9,0.7) 0%, transparent 50%)' }} />
        <div className="absolute bottom-8 left-8">
          <p className="font-liber text-[9px] text-[#e8e5df]/25 tracking-[0.4em]">DAWID ZWOLAK</p>
          <p className="font-liber text-[9px] text-[#e8e5df]/12 tracking-[0.35em] mt-1">LUBLIN, POLAND</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center pl-8 pr-8 md:pl-10 md:pr-40 lg:pl-20 lg:pr-48 inner-scroll py-16 md:py-14">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <div className="w-6 md:w-8 h-px bg-blue-400/40" />
          <span className="font-liber text-[10px] text-blue-400/50 tracking-[0.4em] uppercase">About & Experience</span>
          <span className="font-liber text-[9px] text-[#e8e5df]/15 tracking-widest ml-auto">02 / 05</span>
        </div>

        <h2
          className="font-geist font-black text-[#e8e5df] leading-[0.88] tracking-tight mb-8 md:mb-10"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)' }}
        >
          Hello,<br />I'm Dawid.
        </h2>

        <p className="font-geist text-[#e8e5df]/40 leading-[1.9] text-sm md:text-[15px] mb-10 md:mb-12 max-w-md">
          Studying towards a Master's in Computer Science, working as a Junior React Developer.
          I build things for the web — and occasionally for fun: games, tools, experiments.
          <br /><br />
          Outside of code: World of Warcraft, Horde side.
        </p>

        <div className="flex flex-col">
          {education.map((item, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="flex flex-col items-center shrink-0 w-4">
                <div className="w-2 h-2 rounded-full border border-[#e8e5df]/18 bg-[#090909] mt-[5px] shrink-0 group-hover:border-blue-400/50 transition-colors duration-300" />
                {i < education.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: 'rgba(232,229,223,0.08)' }} />
                )}
              </div>
              <div className={i < education.length - 1 ? 'pb-6' : ''}>
                <span className="font-liber text-[9px] text-blue-400/45 tracking-[0.35em] block mb-1">
                  {item.period}
                </span>
                <h3 className="font-geist font-semibold text-[#e8e5df]/68 text-sm mb-0.5 group-hover:text-[#e8e5df]/88 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-liber text-[10px] text-[#e8e5df]/22 tracking-wider">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute left-[35%] bottom-0 font-geist font-black select-none pointer-events-none text-white hidden md:block"
        style={{ fontSize: '18vw', opacity: 0.015, lineHeight: 0.85 }}
      >
        ABOUT
      </div>
    </section>
  );
}
