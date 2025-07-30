import { useState } from "react";
import StackLists from "./StackLists";
import {MousePointerClick} from 'lucide-react'


export default function Stacks(){
    const [isClosed, setIsClosed] = useState(false);

    return <section id="three" className={`w-[100vw] min-h-[100vh] bg-black flex  text-blue-500 relative -z-20`}>
        {isClosed && <StackLists setVisible={setIsClosed} />}
        <h1 className="absolute text-blue-400 text-5xl top-20 right-140 "
        onClick={() => setIsClosed(true)}>
            My Stack
            <div>
                <MousePointerClick className="w-10 h-10 text-white absolute left-45 top-10"/>
            </div>
        </h1>
    </section>
}   