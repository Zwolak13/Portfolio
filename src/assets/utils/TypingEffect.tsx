import { useState } from 'react';

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
  className = "" 
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');

  useState(() => {
    let currentTextIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let isPaused = false;

    const tick = () => {
      const targetText = texts[currentTextIndex];

      if (isPaused) {
        setTimeout(() => {
          isPaused = false;
          isDeleting = true;
          tick();
        }, pauseDuration);
        return;
      }

      if (!isDeleting && currentText === targetText) {
        isPaused = true;
        tick();
        return;
      }

      if (isDeleting && currentText === '') {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        tick();
        return;
      }

      if (isDeleting) {
        currentText = targetText.substring(0, currentText.length - 1);
      } else {
        currentText = targetText.substring(0, currentText.length + 1);
      }

      setDisplayText(currentText);
      setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    };

    tick();
  });

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-current">|</span>
    </span>
  );
}