import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
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
      className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10"
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
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover grayscale brightness-75" />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-primary/80 backdrop-blur-sm z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,163,255,0.5)] border-2 border-white/20">
          <ChevronLeft className="w-4 h-4 text-white -mr-1" />
          <ChevronRight className="w-4 h-4 text-white -ml-1" />
        </div>
      </div>
    </div>
  );
}

const comparisons = [
  {
    before: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1603584173870-7f3118020352?q=80&w=1000&auto=format&fit=crop'
  },
  {
    before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1552519507-811f4a2916ad?q=80&w=1000&auto=format&fit=crop'
  },
  {
    before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function BeforeAfter() {
  return (
    <section id="results" className="py-32 px-6 md:px-12 bg-[#010101] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Analiză Comparativă</span>
            </div>
            <h2 className="text-7xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.8]">
              Impact <br />
              <span className="text-primary italic">Vizual</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.slice(0, 2).map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative group cursor-none"
            >
              <div className="absolute -inset-1 bg-primary/20 blur-3xl rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative rounded-[4rem] overflow-hidden border border-white/5 bg-[#050505]">
                <BeforeAfterSlider beforeImage={comp.before} afterImage={comp.after} />
                
                {/* Overlay UI */}
                <div className="absolute bottom-8 left-10 pointer-events-none">
                  <div className="flex items-center gap-4">
                    <div className="text-[8px] font-black text-white/30 uppercase tracking-[0.4em]">Scan_Mode: Active</div>
                    <div className="h-[1px] w-8 bg-primary/50" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
