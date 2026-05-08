import { useEffect, useState, useRef } from 'react';
import CustomCursor from './components/CustomCursor';
import HeroSection from './sections/hero/HeroSection';
import AboutSection from './sections/about/AboutSection';
import StackSection from './sections/stack/StackSection';
import ProjectsSection from './sections/projects/ProjectsSection';
import ContactSection from './sections/contact/ContactSection';

const SECTIONS = 5;
const TRANSITION = 'transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)';
const NAV = ['INTRO', 'ABOUT', 'STACK', 'WORK', 'CONTACT'];

export default function App() {
  const [panel, setPanel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const lockedRef = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'auto';
      document.body.style.cursor = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
      document.body.style.cursor = 'none';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.cursor = '';
    };
  }, [isMobile]);

  const goTo = (i: number) => {
    setPanel(Math.max(0, Math.min(SECTIONS - 1, i)));
  };

  useEffect(() => {
    if (isMobile) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (lockedRef.current) return;
      lockedRef.current = true;
      const dir = e.deltaY > 0 || e.deltaX > 0 ? 1 : -1;
      setPanel(p => Math.max(0, Math.min(SECTIONS - 1, p + dir)));
      setTimeout(() => { lockedRef.current = false; }, 900);
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(panel + 1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(panel - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobile, panel]);

  const sections = [
    <HeroSection key="hero" />,
    <AboutSection key="about" />,
    <StackSection key="stack" />,
    <ProjectsSection key="projects" />,
    <ContactSection key="contact" />,
  ];

  if (isMobile) {
    return <main style={{ background: '#090909' }}>{sections}</main>;
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#090909' }}>
      <CustomCursor />

      <nav style={{
        position: 'fixed', right: 28, top: '50%', transform: 'translateY(-50%)',
        zIndex: 50, display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-end',
      }}>
        {NAV.map((name, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{ cursor: 'none', background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <span style={{
              fontFamily: '"Libertinus Mono", monospace',
              fontSize: 9, letterSpacing: '0.3em',
              color: panel === i ? 'rgb(96,165,250)' : 'rgba(232,229,223,0.18)',
              transition: 'color 0.3s',
            }}>
              {name}
            </span>
            <div style={{
              height: 3,
              width: panel === i ? 20 : 3,
              borderRadius: panel === i ? 1 : '50%',
              background: panel === i ? 'rgb(96,165,250)' : 'rgba(232,229,223,0.18)',
              transition: 'all 0.35s',
            }} />
          </button>
        ))}
      </nav>

      <div style={{
        display: 'flex',
        width: `${SECTIONS * 100}vw`,
        height: '100vh',
        transform: `translateX(-${panel * 100}vw)`,
        transition: TRANSITION,
        willChange: 'transform',
      }}>
        {sections}
      </div>
    </div>
  );
}
