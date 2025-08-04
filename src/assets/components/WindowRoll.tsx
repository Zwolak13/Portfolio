import {type ReactNode, useState } from "react";
import {ChevronUpIcon} from "lucide-react"

import { motion, AnimatePresence} from "framer-motion";

interface WindowComponentProps {
  title?: string;
  icon?: string;
  children: ReactNode;
  onClose?: () => void; 
  footerText?: string;
  className?: string;
}

export default function WindowRoll({
  title = "Window",
  icon = "📋",
  children,
  footerText,
  className = ""
}: WindowComponentProps){
    const [active, setActive] = useState<boolean>(false);

    function handleListRoll() {
    setActive((prev) => !prev);
  }




    return <div className={`lg:w-[90%] w-full max-w-3xl ${className}`}>
        <div className="bg-gray-800/95 backdrop-blur-xl border border-blue-400/30 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
            </div>
            <span className="text-white font-medium text-sm">{icon} {title}</span>
          </div>
          
          
            <button
            onClick={handleListRoll}
            className="group relative w-8 h-8 bg-white/10 hover:bg-red-500 border border-white/20 hover:border-red-400 rounded-md transition-all duration-200 flex items-center justify-center"
          >
            <motion.div
                animate={{rotate: active ? 180 : 0}}
                transition={{ duration: 0.3 }}>
            <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform"><ChevronUpIcon /></span>
            </motion.div>
            <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/20 rounded-md transition-colors"></div>
          </button>
        </div>

        <AnimatePresence initial={true}>
          {!active &&  <motion.div
            key="projects-list"
            initial={{ height: 0, opacity: 0, translateY: -30}}
            animate={{ height: "auto", opacity: 1, translateY: 0}}
            exit={{ height: 0, opacity: 0, translateY: -30}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm ">
            {children}
            </div>
        
            {footerText && (
            <div className="bg-gray-700/60 px-4 py-2 text-right">
                <span className="text-gray-400 text-xs">{footerText}</span>
            </div>
            )}</motion.div>
        }
        </AnimatePresence>
        </div>
    </div>
}