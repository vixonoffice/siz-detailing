import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useIsDesktop } from '../hooks/useIsDesktop';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticBtn({
  children,
  className,
  href,
  target,
  rel,
  onClick,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isDesktop = useIsDesktop();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    if (!isDesktop || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - left - width / 2) * strength);
    y.set((e.clientY - top - height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      className={className}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, display: 'inline-flex' }}
    >
      {children}
    </motion.a>
  );
}
