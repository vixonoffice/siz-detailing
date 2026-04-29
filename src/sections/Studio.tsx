import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';

gsap.registerPlugin(ScrollTrigger);

export default function Studio() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef     = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(imgRef.current, {
      clipPath: 'inset(100% 0 0 0)',
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    });

    gsap.from(textRef.current, {
      opacity: 0,
      x: 40,
      duration: 0.9,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="studio" className="velo-section" ref={sectionRef}>
      <div className="velo-section-num">
        <span className="red">[05]</span>&nbsp;/&nbsp;Studio
      </div>

      <div className="velo-section-head">
        <div className="label">→ Un om · Un garaj</div>
        <h2>
          <span className="outline">UN OM.</span><br />
          O <span className="serif">mașină</span>.<br />
          <span className="red">PATRU</span> ore.
        </h2>
        <p className="aside">
          Studio propriu în Râmnicu Vâlcea. Fiecare mașină stă cât trebuie să stea.
        </p>
      </div>

      <div className="velo-studio">
        <div className="velo-studio-img" ref={imgRef} style={{ clipPath: 'inset(0 0 0 0)' }}>
          <img src="/images/munca1.webp" alt="La lucru în studio" loading="lazy" />
          <span className="corner-tag">SHOT 04 · 2026</span>
          <span className="badge">● LIVE FROM STUDIO</span>
        </div>

        <div className="velo-studio-text" ref={textRef}>
          <h3>Răbdarea <span className="serif">făcută</span> vizibilă.</h3>
          <p>
            Lucrez singur. Nu deleg pe nimeni să facă jumătatea ta de detaliu. De la primul aspirator până la ultima ștergere cu microfibră, e mâna mea pe interior.
          </p>
          <p>
            Echipament Mytee, Tornador, IPC. Detergenți profesionali, nu chimicale ieftine care lasă urme. Fiecare TIR primește același tratament ca un Audi: timpul cât trebuie, nu cât pot să fac mai repede.
          </p>

          <div className="velo-studio-meta">
            <div>
              <div className="key">Echipament</div>
              <div className="val">Mytee Lite II<br />Tornador Black<br />IPC PW-C45</div>
            </div>
            <div>
              <div className="key">Acoperire</div>
              <div className="val">Vâlcea + 80km<br />Deplasare la cerere<br />L–S 09–19</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
