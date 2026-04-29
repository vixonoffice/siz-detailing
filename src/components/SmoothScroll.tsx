import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '../lib/gsap';
import { gsap } from '../lib/gsap';
import { useIsDesktop } from '../hooks/useIsDesktop';

interface Props {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  const isDesktop = useIsDesktop();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!isDesktop) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isDesktop]);

  return <>{children}</>;
}
