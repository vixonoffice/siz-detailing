import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: '01',
    name: <>Trimiți <span className="serif">poze</span></>,
    desc: '4–5 poze cu interiorul. Scaune, mochetă, bord, portbagaj. WhatsApp-ul e cel mai rapid.',
    time: '2 minute',
  },
  {
    num: '02',
    name: <>Primești <span className="serif">oferta</span></>,
    desc: 'Răspund cu prețul exact și estimarea de timp. Fără negociere de bazar.',
    time: '< 2 ore',
  },
  {
    num: '03',
    name: <><span className="serif">Programare</span></>,
    desc: 'Stabilim ziua. Aduci mașina la studio sau o iau eu, dacă ești în Vâlcea.',
    time: '1–3 zile',
  },
  {
    num: '04',
    name: <>Lucrez <span className="serif">eu</span></>,
    desc: 'Singur, în studio, cu echipamentul meu. Fără ucenici, fără shortcut-uri.',
    time: '3–8 ore',
  },
  {
    num: '05',
    name: <>Predare <span className="serif">cheie</span></>,
    desc: 'Îți arăt fiecare zonă lucrată. Plătești cash, card sau transfer.',
    time: '15 minute',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef   = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!stepsRef.current) return;
    const steps = Array.from(stepsRef.current.children) as HTMLElement[];

    gsap.from(steps, {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.7,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="process" className="velo-section" style={{ background: 'var(--bg-card)' }} ref={sectionRef}>
      <div className="velo-section-num">
        <span className="red">[04]</span>&nbsp;/&nbsp;Proces
      </div>

      <div className="velo-section-head">
        <div className="label">→ Cum lucrăm</div>
        <h2>
          Cinci pași.<br />
          <span className="serif">Zero</span> <span className="red">stres.</span>
        </h2>
        <p className="aside">De la primul mesaj până la cheile înapoi în mâna ta.</p>
      </div>

      <div className="velo-process" ref={stepsRef}>
        {STEPS.map((step, i) => (
          <div className="velo-process-step" key={step.num}>
            <div className="step-num">{step.num}</div>
            <div className="step-name">{step.name}</div>
            <div className="step-desc">{step.desc}</div>
            <div className="step-time">
              <span className="red">●</span> {step.time}
            </div>
            {i < STEPS.length - 1 && <div className="step-arrow">→</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
