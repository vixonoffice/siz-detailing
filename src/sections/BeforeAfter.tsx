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
      className="relative aspect-video w-full overflow-hidden cursor-ew-resize select-none border border-white/[0.06] rounded-2xl md:rounded-[3rem]"
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
      <div className="absolute top-4 md:top-8 left-4 md:left-8 z-20">
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] bg-black/60 backdrop-blur-md text-white/60 px-3 py-1.5 rounded-full border border-white/10">
          Before
        </span>
      </div>
      <div className="absolute top-4 md:top-8 right-4 md:right-8 z-20">
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] bg-primary/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-primary/30">
          After
        </span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-primary/80 z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] border-2 border-white/20">
          <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-white -mr-0.5" />
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white -ml-0.5" />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Label overlay */}
      {label && (
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-8 pointer-events-none z-20">
          <span className="text-[8px] md:text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{label}</span>
        </div>
      )}
    </div>
  );
}

const comparisons = [
  {
    before: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1603584173870-7f3118020352?q=80&w=1000&auto=format&fit=crop',
    label: 'Exterior Detailing',
  },
  {
    before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1552519507-811f4a2916ad?q=80&w=1000&auto=format&fit=crop',
    label: 'Paint Correction',
  },
  {
    before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop',
    label: 'Ceramic Coating',
  },
];

export default function BeforeAfter() {
  return (
    <section id="results" className="py-32 px-6 md:px-12 bg-[#010101] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                Analiză Comparativă
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.8]">
              Impact <br />
              <span className="text-primary italic">Vizual</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/30 text-lg font-light max-w-sm text-right hidden lg:block"
          >
            Glisează pentru a vedea diferența. Rezultate reale, clienți reali.
          </motion.p>
        </div>

        {/* Hero comparison — full width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-6 md:mb-8"
        >
          <div className="absolute -inset-2 bg-primary/10 blur-3xl rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative">
            <BeforeAfterSlider
              beforeImage={comparisons[0].before}
              afterImage={comparisons[0].after}
              label={comparisons[0].label}
            />
          </div>
        </motion.div>

        {/* Two side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {comparisons.slice(1).map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-primary/15 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
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
