import { motion, AnimatePresence } from "framer-motion";
import {type  ReactNode } from "react";

interface WindowAnimateProps{
    children?: ReactNode;
    show: boolean;
}

export default function WindowAnimate({children, show}:WindowAnimateProps){
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}