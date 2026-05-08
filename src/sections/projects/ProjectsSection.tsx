import { FaGithub, FaItchIo } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import projects from '../../data/Projects';

export default function ProjectsSection() {
  return (
    <section
      style={{ scrollSnapAlign: 'start' }}
      className="relative flex-shrink-0 w-screen min-h-screen bg-[#090909] flex flex-col justify-center overflow-hidden"
    >
      <div className="pl-6 pr-6 md:pl-14 md:pr-40 lg:pl-28 lg:pr-48 mb-6 shrink-0 pt-16 md:pt-0">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-blue-400/40" />
          <span className="font-liber text-[10px] text-blue-400/50 tracking-[0.45em] uppercase">Work</span>
          <span className="font-liber text-[9px] text-[#e8e5df]/15 tracking-widest ml-auto">04 / 05</span>
        </div>
        <h2
          className="font-geist font-black text-[#e8e5df] leading-[0.88] tracking-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)' }}
        >
          Projects.
        </h2>
      </div>

      <div className="pl-6 pr-6 md:pl-14 md:pr-40 lg:pl-28 lg:pr-48 inner-scroll flex-1 pb-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex items-center gap-4 py-4 border-t group cursor-default"
            style={{ borderColor: 'rgba(232,229,223,0.06)' }}
          >
            <span className="font-liber text-[9px] tracking-widest w-5 shrink-0 text-[#e8e5df]/12 group-hover:text-blue-400/40 transition-colors duration-300">
              {String(i + 1).padStart(2, '0')}
            </span>

            <h3 className="font-geist font-bold text-base md:text-[17px] w-28 md:w-36 shrink-0 text-[#e8e5df]/72 group-hover:text-blue-400 transition-colors duration-300">
              {project.name}
            </h3>

            <p className="font-geist text-[13px] flex-1 leading-relaxed hidden md:block"
              style={{ color: 'rgba(232,229,223,0.28)' }}>
              {project.descritpion}
            </p>

            <div className="flex gap-1.5 flex-wrap justify-end w-48 shrink-0 hidden lg:flex">
              {project.stack.slice(0, 3).map((tech, j) => (
                <span
                  key={j}
                  className="font-liber text-[8px] tracking-wider px-2 py-0.5 rounded-sm text-[#e8e5df]/18 group-hover:text-[#e8e5df]/32 transition-colors"
                  style={{ border: '1px solid rgba(232,229,223,0.07)' }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 shrink-0 items-center">
              {project.github_link && (
                <a href={project.github_link} target="_blank"
                  className="text-[#e8e5df]/18 hover:text-[#e8e5df]/65 transition-colors duration-200"
                  onClick={e => e.stopPropagation()}>
                  <FaGithub className="w-4 h-4" />
                </a>
              )}
              {project.live_link && (
                <a href={project.live_link} target="_blank"
                  className="text-[#e8e5df]/18 hover:text-blue-400/70 transition-colors duration-200"
                  onClick={e => e.stopPropagation()}>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.itchio_link && (
                <a href={project.itchio_link} target="_blank"
                  className="text-[#e8e5df]/18 hover:text-pink-400/70 transition-colors duration-200"
                  onClick={e => e.stopPropagation()}>
                  <FaItchIo className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
        <div className="border-t" style={{ borderColor: 'rgba(232,229,223,0.06)' }} />
      </div>

      <div
        className="absolute right-0 bottom-0 font-geist font-black select-none pointer-events-none text-white hidden md:block"
        style={{ fontSize: '20vw', opacity: 0.015, lineHeight: 0.85 }}
      >
        WORK
      </div>
    </section>
  );
}
