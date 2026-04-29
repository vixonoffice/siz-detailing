import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import { useIsDesktop } from '../hooks/useIsDesktop';

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!isDesktop) return;

    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    const xDot  = gsap.quickTo(dot,  'x', { duration: 0.15, ease: 'power3' });
    const yDot  = gsap.quickTo(dot,  'y', { duration: 0.15, ease: 'power3' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.4,  ease: 'power3' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.4,  ease: 'power3' });

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onEnterLink = () => {
      gsap.to(ring, { width: 60, height: 60, borderColor: 'var(--red)', duration: 0.3 });
    };
    const onLeaveLink = () => {
      gsap.to(ring, { width: 40, height: 40, borderColor: 'rgba(250,250,247,0.5)', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    const links = document.querySelectorAll('a, button, [data-cursor-link]');
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      links.forEach(el => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div className="velo-cursor-dot" ref={dotRef} />
      <div className="velo-cursor-ring" ref={ringRef} />
    </>
  );
}
