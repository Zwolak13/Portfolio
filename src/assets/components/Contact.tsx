import { useState } from "react";
import NotepadWindow from "./NotepadWindow";
import WindowAnimate from "./WindowAnimate";

export default function Contact(){
    const [isClosed,setIsClosed] = useState(false);

    function handleClose(what:boolean){
        setIsClosed(what);
    }

    return <section id="six" className={`w-[100vw] min-h-[100vh] bg-black flex justify-center  text-blue-500 relative `}>
        <h1 className="absolute text-blue-400 text-5xl top-20 right-150" onClick={() => handleClose(true)}>
            Contact
        </h1>

        <WindowAnimate show={!isClosed}>
            <NotepadWindow className="absolute top-60 left-80" title="Contact.txt" onClose={() => handleClose(false)}>
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