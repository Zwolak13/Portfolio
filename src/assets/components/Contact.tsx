import { useState } from "react";
import NotepadWindow from "./NotepadWindow";
import WindowAnimate from "./WindowAnimate";

export default function Contact(){
    const [isClosed,setIsClosed] = useState(false);

    function handleClose(what:boolean){
        setIsClosed(what);
    }

    return <section id="six" className={`w-[100vw] min-h-[100vh] bg-black flex justify-center  text-blue-500 relative overflow-hidden`}>
        <h1 className="absolute text-blue-400 text-5xl sm:top-20 sm:right-150" onClick={() => handleClose(false)}>
            Contact
        </h1>

        <WindowAnimate show={!isClosed}>
            <NotepadWindow className="absolute sm:top-60 sm:left-80 top-30" title="Contact.txt" onClose={() => handleClose(true)}>
                <span className="underline decoration-wavy decoration-red-500 underline-offset-2">Mail</span> <br/>
                dawzwolak@gmail.com<br/><br/>
                <span className="underline decoration-wavy decoration-red-500 underline-offset-2">Linkedin</span> <br/>
                <a href="https://www.linkedin.com/in/dawid-zwolak-6607b8298" target="_blank" className=" hover:text-blue-400">Dawid Zwolak </a><br/><br/>
                <span className="underline decoration-wavy decoration-red-500 underline-offset-2">Discord</span><br/>
                zwolak
            </NotepadWindow>
        </WindowAnimate>
    </section>
}