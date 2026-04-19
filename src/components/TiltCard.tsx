import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export default function TiltCard({ children, className = '', intensity = 8, glare = true }: TiltCardProps) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 25 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-intensity, intensity]);

  // Disable on touch devices e pe reduced motion
  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    x.set(xPct - 0.5);
    y.set(yPct - 0.5);
    if (glare) setGlarePos({ x: xPct * 100, y: yPct * 100, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (glare) setGlarePos((p) => ({ ...p, opacity: 0 }));
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${className} relative`}
    >
      {children}

      {/* Glare overlay */}
      {glare && (
        <div
          className="absolute inset-0 rounded-inherit pointer-events-none z-10 transition-opacity duration-300"
          style={{
            borderRadius: 'inherit',
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 60%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </motion.div>
  );
}
