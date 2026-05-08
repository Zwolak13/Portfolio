import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [dot, setDot] = useState({ x: -200, y: -200 });
  const [ring, setRing] = useState({ x: -200, y: -200 });
  const [hovering, setHovering] = useState(false);

  const posRef = useRef({ x: -200, y: -200 });
  const ringRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setDot({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button'));
    };

    const loop = () => {
      const cur = posRef.current;
      const prev = ringRef.current;
      const nx = prev.x + (cur.x - prev.x) * 0.1;
      const ny = prev.y + (cur.y - prev.y) * 0.1;
      ringRef.current = { x: nx, y: ny };
      setRing({ x: nx, y: ny });
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const ringSize = hovering ? 40 : 28;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: ring.x,
          top: ring.y,
          width: ringSize,
          height: ringSize,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          border: '1px solid rgba(232,229,223,0.25)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.15s, height 0.15s',
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: dot.x,
          top: dot.y,
          width: 4,
          height: 4,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: '#e8e5df',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  );
}
