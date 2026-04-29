import { useState, useRef, useCallback, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { src: '/images/scaun.webp',         cls: 'g-a', tag: '[ 01 ]', cap: 'Scaun BMW · Piele',    label: 'După' },
  { src: '/images/brand.webp',          cls: 'g-b', tag: '[ 02 ]', cap: 'Audi · Studio',         label: 'Cover' },
  { src: '/images/bord-curat.webp',     cls: 'g-c', tag: '[ 03 ]', cap: 'DAF · Bord',            label: 'După' },
  { src: '/images/munca2.webp',         cls: 'g-d', tag: '[ 04 ]', cap: 'Studio · BTS',          label: 'Proces' },
  { src: '/images/interior-curat.webp', cls: 'g-e', tag: '[ 05 ]', cap: 'Sprinter · Interior',   label: 'După' },
  { src: '/images/motor-curat.webp',    cls: 'g-f', tag: '[ 06 ]', cap: 'Sprinter · Motor',      label: 'După' },
  { src: '/images/munca1.webp',         cls: 'g-g', tag: '[ 07 ]', cap: 'La lucru',              label: 'Proces' },
  { src: '/images/home.webp',           cls: 'g-h', tag: '[ 08 ]', cap: 'Studio · Home base',    label: 'Vâlcea' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const lbRef      = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = sectionRef.current?.querySelectorAll('.item');
    if (!items) return;
    gsap.from(Array.from(items), {
      opacity: 0,
      y: 40,
      stagger: 0.06,
      duration: 0.7,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  // Lightbox open animation
  useEffect(() => {
    if (lightbox !== null && lbRef.current) {
      gsap.fromTo(lbRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'expo.out' }
      );
      const img = lbRef.current.querySelector('img');
      if (img) {
        gsap.fromTo(img,
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.2)' }
        );
      }
    }
  }, [lightbox]);

  const close = useCallback(() => {
    if (!lbRef.current) return;
    gsap.to(lbRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setLightbox(null),
    });
  }, []);

  const prev = () => setLightbox(l => l !== null ? (l - 1 + ITEMS.length) % ITEMS.length : null);
  const next = () => setLightbox(l => l !== null ? (l + 1) % ITEMS.length : null);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, close]);

  return (
    <section className="velo-section" ref={sectionRef}>
      <div className="velo-section-num">
        <span className="red">[06]</span>&nbsp;/&nbsp;Galerie
      </div>

      <div className="velo-section-head">
        <div className="label">→ Selecție recentă</div>
        <h2>
          Zile bune <span className="serif">la</span><br />
          <span className="red">birou.</span>
        </h2>
        <p className="aside">Lucrări din studio. Fără stoc, fără filtre Instagram.</p>
      </div>

      <div className="velo-gallery">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className={`item ${item.cls}`}
            onClick={() => setLightbox(i)}
            role="button"
            tabIndex={0}
          >
            <img src={item.src} alt={item.cap} loading="lazy" />
            <span className="tag">{item.tag}</span>
            <div className="caption">
              <span>{item.cap}</span>
              <span className="red">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="velo-lightbox open"
          ref={lbRef}
          onClick={close}
        >
          <div
            className="velo-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={ITEMS[lightbox].src} alt={ITEMS[lightbox].cap} />
            <button className="velo-lightbox-close" onClick={close}>✕</button>
          </div>
          <button className="velo-lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>←</button>
          <button className="velo-lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>→</button>
        </div>
      )}
    </section>
  );
}
