import MEPNG from '../IMG/me.png'
import WindowComponent from './Window'
import NotepadWindow from './NotepadWindow'
import { useState } from 'react';
import WindowAnimate from './WindowAnimate';

export default function About(){
    const [isClosedPhoto, setIsClosedPhoto] = useState(false);
    const [isClosedText, setIsClosedText] = useState(false);
    const [dynamicIndex, setDynamicIndex] = useState(false);

    function handleClose(window:string){
        if(window === 'photo'){
            setIsClosedPhoto(prev => prev = !prev);
        }else if(window === 'text'){
            setIsClosedText(prev => prev = !prev);
        }else{
            setIsClosedText(false);
            setIsClosedPhoto(false);
            setDynamicIndex(prev => prev = !prev);
        }
    }


    return <section id="five" className={`w-[100%] min-h-[100vh] bg-black flex  text-blue-500 relative  justify-center`}>
            <h1 className="absolute text-blue-400 text-5xl top-60 left-220"
                onClick={() => handleClose('all')}>
                About me
            </h1>
 
            <WindowAnimate show={!isClosedPhoto}>
                {!isClosedPhoto && <WindowComponent title='Me.png' className={`flex justify-center h-fit w-fit absolute top-20 left-50 ${dynamicIndex ? 'z-10' : 'z-0'}`} icon='🖼️'
                onClose={()=>handleClose('photo')}> 
                <img src={MEPNG} alt='Zwolak Photo' className='h-150'/>
                </WindowComponent>}
            </WindowAnimate>
            
            <WindowAnimate show={!isClosedText}>
                <NotepadWindow className={`absolute bottom-20 right-150 ${!dynamicIndex ? 'z-10' : 'z-0'}`} title='About.txt'
                 onClose={()=>handleClose('text')}>
                <span>
                    Currently studying towards a Master’s degree in Computer Science. Focusing on web development while exploring game development and AI as side interests.  
                    <br /><br />
                    I enjoy building things that help me learn — whether it’s small tools, prototypes, or just fun experiments. Clean code, simple interfaces, and real-world challenges keep me motivated.  
                    <br /><br />
                    Outside of tech, I’m a longtime World of Warcraft player and proud member of the Horde.
                </span>
            </NotepadWindow>
            </WindowAnimate>
    </section>
}