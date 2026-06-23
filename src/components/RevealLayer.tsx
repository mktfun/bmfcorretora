import React, { useEffect, useRef } from 'react';

interface RevealLayerProps {
  image: string;
}

const SPOTLIGHT_R = 260;

export const RevealLayer: React.FC<RevealLayerProps> = ({ image }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Real mouse position
  const targetPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  // Lerped mouse position
  const currentPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Lerp 0.1
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1;

      if (containerRef.current) {
        const { x, y } = currentPos.current;
        const gradient = `radial-gradient(${SPOTLIGHT_R}px circle at ${x}px ${y}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`;
        
        containerRef.current.style.webkitMaskImage = gradient;
        containerRef.current.style.maskImage = gradient;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 z-30 pointer-events-none"
      ref={containerRef}
      style={{
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat'
      }}
    >
      <img 
        src={image} 
        alt="Revealed background" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};
