import MEPNG from '../IMG/me.png'
import WindowComponent from './Window'
import NotepadWindow from './NotepadWindow'

export default function About(){

    return <section id="five" className={`w-[100vw] min-h-[100vh] bg-black flex  text-blue-500 relative -z-20 justify-center`}>
            <WindowComponent title='Me.png' className='flex justify-center h-fit absolute left-10 top-20' icon='🖼️'> 
                <img src={MEPNG} alt='Zwolak Photo' className='h-150'/>
            </WindowComponent>
            <NotepadWindow className='absolute bottom-20' title='About.txt'>
                <span>
                    Currently studying towards a Master’s degree in Computer Science. Focusing on web development while exploring game development and AI as side interests.  
                    <br /><br />
                    I enjoy building things that help me learn — whether it’s small tools, prototypes, or just fun experiments. Clean code, simple interfaces, and real-world challenges keep me motivated.  
                    <br /><br />
                    Outside of tech, I’m a longtime World of Warcraft player and proud member of the Horde.
                </span>
            </NotepadWindow>
    </section>
}