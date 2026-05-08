import { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = '',
}: TypingEffectProps) {
  const [display, setDisplay] = useState('');
  const state = useRef({ idx: 0, deleting: false, paused: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const { idx, deleting, paused } = state.current;
      const target = texts[idx];

      if (paused) {
        state.current.paused = false;
        state.current.deleting = true;
        timer = setTimeout(tick, pauseDuration);
        return;
      }

      if (!deleting) {
        setDisplay(prev => {
          const next = target.substring(0, prev.length + 1);
          if (next === target) state.current.paused = true;
          return next;
        });
        timer = setTimeout(tick, typingSpeed);
      } else {
        setDisplay(prev => {
          const next = prev.substring(0, prev.length - 1);
          if (next === '') {
            state.current.deleting = false;
            state.current.idx = (idx + 1) % texts.length;
          }
          return next;
        });
        timer = setTimeout(tick, deletingSpeed);
      }
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {display}
      <span style={{ opacity: 1, animation: 'blink 1s step-end infinite' }}>|</span>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}
