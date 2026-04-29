import { useRef, ReactNode } from 'react';
import { gsap } from '../lib/gsap';
import { useIsDesktop } from '../hooks/useIsDesktop';

interface Props {
  children: ReactNode;
  className?: string;
  as?: 'a' | 'button';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticBtn({
  children,
  className,
  as: Tag = 'a',
  href,
  target,
  rel,
  onClick,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();

  const onMove = (e: React.MouseEvent) => {
    if (!isDesktop || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width  / 2) * strength;
    const y = (e.clientY - top  - height / 2) * strength;
    gsap.to(ref.current, { x, y, duration: 0.4, ease: 'power3.out' });
  };

  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
  };

  return (
    <Tag
      // @ts-expect-error — dynamic tag
      ref={ref}
      className={className}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </Tag>
  );
}
