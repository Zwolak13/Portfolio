import { Monitor, Database, Server, Settings} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

import { useState } from 'react';
import StackObject from './StackObject';
import stacks from '../Data/Stacks'
import Window from './Window';

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
        <Window title='Stack.exe' tabs={options} onTabChange={handleStackChange} activeTab={activeStack} onClose={handleClose}
        className='absolute top-50 left-40'>
          <div className="w-full grid grid-cols-6 gap-4 px-4 py-2 grid-rows-3">
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
        </Window>
      </motion.div>
    )
  </AnimatePresence>
);
}
