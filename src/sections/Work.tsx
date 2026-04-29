import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import SplitType from 'split-type';
import BeforeAfter from '../components/BeforeAfter';

gsap.registerPlugin(ScrollTrigger);

const PAIRS = [
  {
    before: '/images/bord-murdar.webp',
    after:  '/images/bord-curat.webp',
    num: 'JOB · 01',
    title: 'DAF Cabină / Bord',
    meta: '8h · Injecție-extracție · Degresare',
  },
  {
    before: '/images/interior-murdar.webp',
    after:  '/images/interior-curat.webp',
    num: 'JOB · 02',
    title: 'Sprinter / Interior',
    meta: '6h · Mochetă + Scaune + Plastice',
  },
  {
    before: '/images/motor-murdar.webp',
    after:  '/images/motor-curat.webp',
    num: 'JOB · 03',
    title: 'Compartiment Motor',
    meta: '3h · Degresare pH neutru',
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref      = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!h2Ref.current) return;
    const split = new SplitType(h2Ref.current, { types: 'words', tagName: 'span' });
    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      stagger: 0.07,
      duration: 0.8,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    });
    return () => split.revert();
  }, { scope: sectionRef });

  return (
    <section id="work" className="velo-section" ref={sectionRef}>
      <div className="velo-section-num">
        <span className="red">[02]</span>&nbsp;/&nbsp;Lucrări
      </div>

      <div className="velo-section-head">
        <div className="label">→ Lucrări reale · Fără filtre</div>
        <h2 ref={h2Ref}>
          <span className="serif">înainte</span> &amp;<br />
          <span className="red">după.</span><br />
          <span className="outline">fără retuș.</span>
        </h2>
        <p className="aside">
          Drag pe oricare card. Toate sunt poze reale, neretușate, scoase din studio.
        </p>
      </div>

      <div className="velo-ba">
        {PAIRS.map((pair) => (
          <BeforeAfter key={pair.num} {...pair} />
        ))}
      </div>
    </section>
  );
}
