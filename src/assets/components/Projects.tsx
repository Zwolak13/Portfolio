import { motion, AnimatePresence } from "framer-motion";
import ProjectsList from "./ProjectsList";
import {ChevronUpIcon} from "lucide-react"
import { useState } from "react";


export default function Projects(){
    const [active, setActive] = useState<boolean>(false);

    function handleListRoll() {
    setActive((prev) => !prev);
  }

    return <section id="four" className={`w-[100vw] min-h-[100vh] bg-black  relative -z-20`}>
        <div className=" w-[100%]  translate-x-100">
            <h1 className="text-white text-5xl bg-blue-400 w-200 h-fit flex flex-row p-4 justify-between"
        onClick={handleListRoll}>
            Projects 
            <motion.div
                animate={{rotate: active ? 180 : 0}}
                transition={{ duration: 0.3 }}>
                <ChevronUpIcon  className={`w-12 h-12 self-center transition ease-linear duration-200`}/>
            </motion.div>
        </h1>
        <AnimatePresence initial={false}>
            {active && (
                <motion.div
            key="projects-list"
            initial={{ height: 0, opacity: 0, translateY: -30}}
            animate={{ height: "auto", opacity: 1, translateY: 0}}
            exit={{ height: 0, opacity: 0, translateY: -30}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden w-200"
          >
                   <ProjectsList />
                </motion.div>
            )}
        </AnimatePresence>
        </div>
    </section>
}