import { Monitor, Database, Server, Settings} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

import { useState } from 'react';
import StackObject from './StackObject';
import stacks from '../Data/Stacks'

interface StackListsProps{
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const options = [
    {name:'Frontend', icon: Monitor},
    {name:'Backend', icon: Database},
    {name:'Database', icon: Server},
    {name:'Tools', icon: Settings},

]

export default function StackLists({setVisible}: StackListsProps){
    const [activeStack, setActiveStack] = useState('Frontend')
    

    function handleStackChange(stack: string){
        setActiveStack(stack);
    }

    function handleClose(){
        setVisible(prev => prev = !prev);
    }

    return (
  <AnimatePresence>
    (
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="w-[40%] h-full translate-x-60 translate-y-60">
          <div className="w-full flex flex-row text-xl justify-center bg-blue-400">
            {options.map((item, index) => (
              <h2
                key={index}
                className={`flex flex-row py-2 px-8 gap-2 justify-center text-black font-medium items-center ${
                  activeStack === item.name && "bg-blue-500/50 text-white"
                }`}
                onClick={() => handleStackChange(item.name)}
              >
                <item.icon />
                {item.name}
              </h2>
            ))}
            <h2
              className="py-2 px-4 flex justify-center border-2 bg-white font-bold border-white ml-auto"
              onClick={handleClose}
            >
              X
            </h2>
          </div>

          <div className="w-full bg-white/40 border-x-2 border-b-2 border-gray-300/40 grid grid-cols-4 gap-4 px-4 py-2 grid-rows-3">
            {stacks
              .filter((el) => el.type === activeStack)
              .map((item, index) => (
                <StackObject
                  key={index}
                  name={item.name}
                  image_path={item.img_path}
                />
              ))}
          </div>
        </div>
      </motion.div>
    )
  </AnimatePresence>
);
}
