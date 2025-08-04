import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineDotProps{
    last?: boolean;
    side: 'left' | 'right';
    name: string,
    title: string,
    period: string,
}

export default function TimelineDot({last,side,name,title,period}:TimelineDotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 20%"]
  });

  const dotOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const dotY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.2, 0.5], [side === 'left' ? -40 : 40, 0]);
  
  const lineHeight = useTransform(scrollYProgress, [0.4, 1], [0, last ? 0 : 240]);

  return (
    <div ref={containerRef} className={`flex flex-col items-center relative mt-4 w-1/2 ${!last && 'min-h-[300px]'}`}>
      <motion.div 
        style={{ opacity: dotOpacity, y: dotY }}
        className="relative lg:h-12 lg:w-12 w-8 h-8 flex items-center justify-center"
      >
        <div className="h-3/5 w-3/5 bg-blue-400 rounded-full z-10" />
        <motion.svg
          className="absolute top-0 left-0 w-full h-full z-0"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeDasharray="20 10 40 30 50 40"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>

      <motion.div 
        style={{ opacity: textOpacity, x: textX }}
        className={`absolute flex flex-col ${side === 'left' ? 'lg:left-16 left-10 items-start text-start' : 'lg:right-16 right-10 items-end text-end'}`}
      >
        <h1 className={`text-white lg:text-3xl lg:w-100 text-[12px] w-fit`}>{name}</h1>
        <h2 className={`text-white/50 lg:*:text-2xl`}>{title}</h2>
        <span className={`lg:text-xl font-bold flex flex-row ${side === 'left' ? 'justify-start' : 'justify-end' } w-30`}>{period}</span>
      </motion.div>

      {!last && (
        <motion.div 
          style={{ height: lineHeight }}
          className="w-3 bg-blue-400 mt-4 rounded-2xl origin-top" 
        />
      )}
    </div>
  );
}