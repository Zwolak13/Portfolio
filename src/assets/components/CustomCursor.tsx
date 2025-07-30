import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed w-5 h-5 bg-blue-200 bg-opacity-80 border-2 border-white rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}