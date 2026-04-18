import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  label?: string;
}

function BeforeAfterSlider({ beforeImage, afterImage, label }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    setSliderPosition((x / width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden cursor-ew-resize select-none rounded-2xl md:rounded-[2.5rem] border border-white/[0.06] group"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image */}
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before Image Overlay */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20">
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] bg-black/50 backdrop-blur-xl text-white/50 px-3 py-1.5 rounded-full border border-white/10">
          Before
        </span>
      </div>
      <div className="absolute top-4 md:top-6 right-4 md:right-6 z-20">
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] bg-primary/70 backdrop-blur-xl text-white px-3 py-1.5 rounded-full border border-primary/30 shadow-glow-sm">
          After
        </span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-primary/60 z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-glow border border-white/20 backdrop-blur-sm">
          <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-white -mr-0.5" />
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white -ml-0.5" />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      {/* Label overlay */}
      {label && (
        <div className="absolute bottom-3 md:bottom-5 left-4 md:left-6 pointer-events-none z-20">
          <span className="text-[8px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{label}</span>
        </div>
      )}
    </div>
  );
}

const comparisons = [
  {
    before: '/images/interior-murdar.jpeg',
    after: '/images/interior-curat.jpeg',
    label: 'Interior Detailing',
  },
  {
    before: '/images/bord-murdar.jpeg',
    after: '/images/bord-curat.jpeg',
    label: 'Bord & Plastice',
  },
  {
    before: '/images/usa-murdara.jpeg',
    after: '/images/usa-curata.jpeg',
    label: 'Uși Interior',
  },
];

export default function BeforeAfter() {
  return (
    <section id="results" className="py-24 md:py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/[0.03] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-purple/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-32 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
              <span className="text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px]">
                Analiză Comparativă
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-gradient uppercase tracking-tighter leading-[0.8] font-display">
              Impact <br />
              <span className="text-gradient-red italic">Vizual</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/25 text-base md:text-lg font-light max-w-sm text-left md:text-right"
          >
            Glisează pentru a vedea diferența. Rezultate reale, clienți reali.
          </motion.p>
        </div>

        {/* Hero comparison — full width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-4 md:mb-6"
        >
          <div className="absolute -inset-3 bg-primary/8 blur-[60px] rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative">
            <BeforeAfterSlider
              beforeImage={comparisons[0].before}
              afterImage={comparisons[0].after}
              label={comparisons[0].label}
            />
          </div>
        </motion.div>

        {/* Two side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {comparisons.slice(1).map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-primary/10 blur-[40px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative">
                <BeforeAfterSlider beforeImage={comp.before} afterImage={comp.after} label={comp.label} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
