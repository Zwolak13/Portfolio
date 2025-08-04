import Nav from './assets/components/Nav.tsx'
import Header from './assets/components/Header.tsx';
import CustomCursor from './assets/components/CustomCursor.tsx';
import WavyDecor from './assets/components/WavyDecor.tsx';
import Projects from './assets/components/Projects.tsx';
import Education from './assets/components/Education.tsx';
import Stacks from './assets/components/Stacks.tsx';
import About from './assets/components/About.tsx';
import Contact from './assets/components/Contact.tsx';


function App() {
  const isMobile = window.innerWidth < 640;
  const Waves = window.innerWidth < 1450;

  return (
    <>
    {!isMobile && <>
      <CustomCursor />
      <Nav />
    </>}
    {!Waves &&
          <WavyDecor />
          }
    <main className='bg-black w-[100vw] h-fit overflow-hidden'>
      <Header />
      <Education />
      <Stacks />
      <Projects />
      <About />
      <Contact />
    </main>
    </>
  )
}

export default App
