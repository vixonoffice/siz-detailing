import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Kinetic() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref    = useRef<HTMLDivElement>(null);
  const row2Ref    = useRef<HTMLDivElement>(null);
  const row3Ref    = useRef<HTMLDivElement>(null);
  const reduced    = useReducedMotion();

  useGSAP(() => {
    if (reduced) return;

    const cfg = { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 };

    gsap.to(row1Ref.current, { x: '-15%', ease: 'none', scrollTrigger: cfg });
    gsap.to(row2Ref.current, { x: '10%',  ease: 'none', scrollTrigger: cfg });
    gsap.to(row3Ref.current, { x: '-8%',  ease: 'none', scrollTrigger: cfg });
  }, { scope: sectionRef });

  return (
    <div className="velo-kinetic" ref={sectionRef}>
      <div className="velo-kinetic-row l1" ref={row1Ref}>
        <span>SIZ DETAILING — SIZ DETAILING —</span>
      </div>
      <div className="velo-kinetic-row l2" ref={row2Ref}>
        <span>SIZ DETAILING — SIZ DETAILING —</span>
      </div>
      <div className="velo-kinetic-row l3" ref={row3Ref}>
        <span>obsedat de interior —</span>
      </div>
    </div>
  );
}
