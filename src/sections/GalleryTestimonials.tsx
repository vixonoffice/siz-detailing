import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const images = [
  { src: '/images/brand.jpeg', alt: 'Siz Detailing — Studio Rm. Vâlcea' },
  { src: '/images/munca1.jpeg', alt: 'La lucru în studio' },
  { src: '/images/bord-curat.jpeg', alt: 'Bord TIR după detailing' },
  { src: '/images/munca2.jpeg', alt: 'Tratament profesional' },
  { src: '/images/interior-curat.jpeg', alt: 'Interior curat după detailing' },
  { src: '/images/scaun.jpeg', alt: 'Scaun BMW impecabil' },
  { src: '/images/motor-curat.jpeg', alt: 'Compartiment motor curat' },
];

export default function GalleryTestimonials() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-3 block">Galerie</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white">
              Munca <span className="text-white/15">Noastră</span>
            </h2>
          </div>
          <p className="text-white/25 text-sm max-w-sm leading-relaxed md:text-right">
            Click pe imagini pentru a vedea în detaliu.
          </p>
        </motion.div>

        {/* Asymmetric 3D grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          style={{ perspective: '1200px' }}
        >
          {/* Imaginea mare — span 2x2, cu TiltCard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="col-span-2 row-span-2"
          >
            <TiltCard intensity={6} className="h-full cursor-pointer group">
              <div
                onClick={() => setSelected(images[0].src)}
                className="relative h-full min-h-[280px] md:min-h-[420px] overflow-hidden rounded-2xl border border-white/[0.06]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn size={30} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: 'translateZ(20px)' }} />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Celelalte imagini cu 3D tilt */}
          {images.slice(1).map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: (i + 1) * 0.07 }}
            >
              <TiltCard intensity={10} className="cursor-pointer group h-full">
                <div
                  onClick={() => setSelected(img.src)}
                  className="relative h-full min-h-[130px] md:min-h-[200px] overflow-hidden rounded-xl border border-white/[0.06]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setSelected(null)}
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              src={selected}
              alt=""
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
