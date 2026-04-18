import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20Trimit%20poze%20cu%20interiorul%20ma%C8%99inii%20mele%20pentru%20o%20ofert%C4%83.";

interface SliderProps {
  before: string;
  after: string;
  label: string;
}

function Slider({ before, after, label }: SliderProps) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const { left, width } = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    setPos((x / width) * 100);
  };

  return (
    <div className="space-y-3">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/[0.06] cursor-ew-resize select-none"
        onMouseDown={() => setDragging(true)}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onMouseMove={(e) => dragging && move(e.clientX)}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
        onTouchMove={(e) => dragging && move(e.touches[0].clientX)}
      >
        {/* After image (full) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white/60 px-2.5 py-1 rounded-full">
          Before
        </span>
        <span className="absolute top-3 right-3 z-10 text-[10px] font-bold uppercase tracking-wider bg-primary/80 text-white px-2.5 py-1 rounded-full">
          After
        </span>

        {/* Handle */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/60 z-10" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="text-black text-xs font-bold select-none">⟺</span>
          </div>
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-white/30 text-center">{label}</p>
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
    label: 'Interior Sprinter — Înainte & După',
  },
  {
    before: '/images/motor-murdar.jpeg',
    after: '/images/motor-curat.jpeg',
    label: 'Compartiment Motor — Înainte & După',
  },
];

export default function BeforeAfter() {
  return (
    <section id="results" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Rezultate Reale</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white mb-4">
            Înainte &amp; <span className="text-primary">După</span>
          </h2>
          <p className="text-white/40 text-base max-w-lg">
            Glisează pe imagine pentru a vedea diferența. Clienți reali, rezultate reale.
          </p>
        </motion.div>

        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Slider {...pair} />
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
          <p className="text-white/40 mb-4 text-sm">Ai văzut diferența? Mașina ta e următoarea.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
            Trimite Poze pentru Ofertă
            <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
