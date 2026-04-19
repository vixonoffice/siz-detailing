import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20Trimit%20poze%20cu%20interiorul%20ma%C8%99inii%20mele%20pentru%20o%20ofert%C4%83.";

interface SliderProps {
  before: string;
  after: string;
  label: string;
  size?: 'large' | 'small';
}

function Slider({ before, after, label, size = 'small' }: SliderProps) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const { left, width } = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    setPos((x / width) * 100);
  };

  const aspectClass = size === 'large' ? 'aspect-[16/7]' : 'aspect-[4/3]';

  return (
    <div className="space-y-3">
      <div
        ref={ref}
        className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl border border-white/[0.06] cursor-ew-resize select-none`}
        onMouseDown={() => setDragging(true)}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onMouseMove={(e) => dragging && move(e.clientX)}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
        onTouchMove={(e) => dragging && move(e.touches[0].clientX)}
      >
        {/* After image */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 z-10 text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
          Înainte
        </span>
        <span className="absolute top-4 right-4 z-10 text-[10px] font-bold uppercase tracking-wider bg-primary/90 text-white px-3 py-1.5 rounded-full">
          După
        </span>

        {/* Handle */}
        <div className="absolute top-0 bottom-0 w-px bg-white/80 z-10" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xl border border-white/20">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25 text-center">{label}</p>
    </div>
  );
}

const pairs = [
  {
    before: '/images/bord-murdar.jpeg',
    after: '/images/bord-curat.jpeg',
    label: 'Bord TIR — Înainte & După',
  },
  {
    before: '/images/interior-murdar.jpeg',
    after: '/images/interior-curat.jpeg',
    label: 'Interior Sprinter',
  },
  {
    before: '/images/motor-murdar.jpeg',
    after: '/images/motor-curat.jpeg',
    label: 'Compartiment Motor',
  },
];

export default function BeforeAfter() {
  return (
    <section id="results" className="py-24 md:py-32 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Rezultate Reale</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white">
              Înainte <span className="text-white/20">&</span> <span className="text-primary">După</span>
            </h2>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Glisează pe imagine. Clienți reali, rezultate reale — fără filtre.
            </p>
          </div>
        </motion.div>

        {/* Slider 1 — FULL WIDTH, mare */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <Slider {...pairs[0]} size="large" />
        </motion.div>

        {/* Slidere 2 & 3 — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {pairs.slice(1).map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Slider {...pair} size="small" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-white/30 mb-5 text-sm">Ai văzut diferența? Mașina ta e următoarea.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex w-full sm:w-auto justify-center">
            Trimite Poze pentru Ofertă
            <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
