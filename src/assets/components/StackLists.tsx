import { Monitor, Database, Server, Settings} from 'lucide-react';

import { useState } from 'react';
import StackObject from './StackObject';
import stacks from '../Data/Stacks'
import Window from './Window';
import WindowAnimate from './WindowAnimate';

interface StackListsProps{
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    visible: boolean;
}

const options = [
    {name:'Frontend', icon: Monitor},
    {name:'Backend', icon: Database},
    {name:'Database', icon: Server},
    {name:'Tools', icon: Settings},

]

export default function StackLists({setVisible,visible}: StackListsProps){
    const [activeStack, setActiveStack] = useState('Frontend')
    

    function handleStackChange(stack: string){
        setActiveStack(stack);
    }

    function handleClose(){
        setVisible(prev => prev = !prev);
    }

    return (
  <WindowAnimate  show={!visible}>
        <Window title='Stack.exe' tabs={options} onTabChange={handleStackChange} activeTab={activeStack} onClose={handleClose}
        className='absolute lg:top-50 lg:left-[10%] top-40 '>
          <div className="w-full grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 px-4 py-2 grid-rows-3">
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
  </WindowAnimate>
);
}
