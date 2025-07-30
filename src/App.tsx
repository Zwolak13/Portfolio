import './index.css'
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


  return (
    <>
    <CustomCursor />
    <WavyDecor />
    <main className='bg-black w-[100vw] h-[100vh]'>
      <Nav />
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
