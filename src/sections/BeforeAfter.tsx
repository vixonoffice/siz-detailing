import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20Trimit%20poze%20cu%20interiorul%20ma%C8%99inii%20mele%20pentru%20o%20ofert%C4%83.";
const ease = [0.16, 1, 0.3, 1];

const pairs = [
  {
    before: '/images/bord-murdar.webp',
    after: '/images/bord-curat.webp',
    num: '01',
    title: 'Bord TIR',
    meta: 'Injecție-extracție · Degresare',
  },
  {
    before: '/images/interior-murdar.webp',
    after: '/images/interior-curat.webp',
    num: '02',
    title: 'Interior Sprinter',
    meta: 'Mochetă · Scaune · Plastice',
  },
  {
    before: '/images/motor-murdar.webp',
    after: '/images/motor-curat.webp',
    num: '03',
    title: 'Motor',
    meta: 'Degresare Completă',
  },
];

function BACard({ before, after, num, title, meta, index }: typeof pairs[0] & { index: number }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hinted, setHinted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Auto-demo when card enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hinted) {
          setHinted(true);
          setTimeout(() => setPos(25), 500 + index * 150);
          setTimeout(() => setPos(50), 1300 + index * 150);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hinted, index]);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const { left, width } = ref.current.getBoundingClientRect();
    const x = Math.max(2, Math.min(clientX - left, width - 2));
    setPos((x / width) * 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
      ref={ref}
      className="relative overflow-hidden select-none cursor-ew-resize"
      style={{
        aspectRatio: '5/6',
        background: 'var(--bg-card)',
        border: '1px solid var(--line)',
      }}
      onMouseDown={(e) => { setDragging(true); move(e.clientX); }}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={(e) => dragging && move(e.clientX)}
      onTouchStart={(e) => { setDragging(true); move(e.touches[0].clientX); }}
      onTouchEnd={() => setDragging(false)}
      onTouchMove={(e) => { dragging && move(e.touches[0].clientX); }}
    >
      {/* Before — base layer, always full */}
      <img
        src={before}
        alt="Înainte"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ filter: 'contrast(1.05)' }}
        loading="lazy"
      />

      {/* After — clipped to left of seam */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${pos}%` }}
      >
        <img
          src={after}
          alt="După"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'contrast(1.05)' }}
          loading="lazy"
        />
      </div>

      {/* Red seam */}
      <div
        className="absolute top-0 bottom-0 z-[2] pointer-events-none"
        style={{
          left: `${pos}%`,
          width: '2px',
          transform: 'translateX(-50%)',
          background: 'var(--red)',
          boxShadow: '0 0 16px rgba(255,45,45,0.5)',
          transition: dragging ? 'none' : 'left 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-10"
          style={{
            width: '34px',
            height: '34px',
            background: 'var(--red)',
            borderRadius: '50%',
            color: 'var(--ink)',
            fontSize: '13px',
            boxShadow: '0 0 20px rgba(255,45,45,0.6)',
          }}
        >
          ↔
        </div>
      </div>

      {/* Labels */}
      <span
        className="absolute top-4 left-4 z-[3] mono-label px-2.5 py-1.5 pointer-events-none"
        style={{
          background: 'rgba(10,10,10,0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--line-2)',
          color: 'var(--ink-2)',
        }}
      >
        Înainte
      </span>
      <span
        className="absolute top-4 right-4 z-[3] mono-label px-2.5 py-1.5 pointer-events-none"
        style={{
          background: 'rgba(10,10,10,0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--red)',
          color: 'var(--red)',
        }}
      >
        După
      </span>

      {/* Card footer */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[3] p-5 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 30%, transparent)' }}
      >
        <div className="mono-label mb-1.5" style={{ color: 'var(--red)' }}>{num}</div>
        <div
          style={{
            fontFamily: '"Archivo Narrow", sans-serif',
            fontWeight: 700,
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: '4px',
          }}
        >
          {title}
        </div>
        <div className="mono-label" style={{ color: 'var(--ink-3)' }}>{meta}</div>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter() {
  return (
    <section
      className="py-14 md:py-24 px-6 md:px-14"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16"
        >
          <div>
            <span className="mono-label block mb-3" style={{ color: 'rgba(255,45,45,0.7)' }}>
              Rezultate Reale
            </span>
            <h2
              style={{
                fontFamily: '"Archivo Narrow", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                lineHeight: 0.9,
                color: 'var(--ink)',
              }}
            >
              Înainte <span style={{ color: 'var(--ink-4)' }}>&</span>{' '}
              <span style={{ color: 'var(--red)' }}>După</span>
            </h2>
          </div>
          <p
            className="hidden md:block max-w-xs text-right"
            style={{ color: 'var(--ink-3)', fontSize: '0.875rem', lineHeight: 1.7 }}
          >
            Trage în stânga și dreapta pentru a vedea transformarea.
          </p>
        </motion.div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
          {pairs.map((pair, i) => (
            <BACard key={pair.num} {...pair} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center"
        >
          <p className="mb-5 text-sm" style={{ color: 'var(--ink-3)' }}>
            Ai văzut diferența? Mașina ta e următoarea.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex w-full sm:w-auto justify-center items-center gap-2"
          >
            Trimite Poze pentru Ofertă
            <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
