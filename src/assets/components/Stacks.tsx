import { useState } from "react";
import StackLists from "./StackLists";
import {MousePointerClick} from 'lucide-react'


export default function Stacks(){
    const [isClosed, setIsClosed] = useState(false);

    return <section id="three" className={`w-[100vw] lg:min-h-[100vh] min-h-[120vh] bg-black flex  text-blue-500 relative overflow-hidden`}>
       <h1 className="absolute text-blue-400 text-5xl lg:top-10 lg:!right-[45%]  top-10 right-[35%]"
        onClick={() => setIsClosed(false)}>
            My Stack
            <div>
                <MousePointerClick className="w-10 h-10 text-white absolute left-45 top-10"/>
            </div>
        </h1>
       
       <StackLists setVisible={setIsClosed} visible={isClosed}/>
        
    </section>
}   