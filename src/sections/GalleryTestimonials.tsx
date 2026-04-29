import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const images = [
  { src: '/images/brand.webp', alt: 'Siz Detailing — Studio Rm. Vâlcea' },
  { src: '/images/munca1.webp', alt: 'La lucru în studio' },
  { src: '/images/bord-curat.webp', alt: 'Bord TIR după detailing' },
  { src: '/images/munca2.webp', alt: 'Tratament profesional' },
  { src: '/images/interior-curat.webp', alt: 'Interior curat după detailing' },
  { src: '/images/scaun.webp', alt: 'Scaun BMW impecabil' },
  { src: '/images/motor-curat.webp', alt: 'Compartiment motor curat' },
];

const ease = [0.16, 1, 0.3, 1];

export default function GalleryTestimonials() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="gallery"
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
              Galerie
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
              Munca <span style={{ color: 'var(--ink-4)' }}>Noastră</span>
            </h2>
          </div>
          <p
            className="hidden md:block text-right max-w-xs"
            style={{ color: 'var(--ink-3)', fontSize: '0.875rem', lineHeight: 1.7 }}
          >
            Click pe imagini pentru a vedea în detaliu.
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
          style={{ perspective: '1200px' }}
        >
          {/* Large image — 2×2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease }}
            className="col-span-2 row-span-2"
          >
            <TiltCard intensity={6} className="h-full cursor-pointer group">
              <div
                onClick={() => setSelected(images[0].src)}
                className="relative h-full min-h-[280px] md:min-h-[420px] overflow-hidden"
                style={{ border: '1px solid var(--line)' }}
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.2)' }}>
                  <ZoomIn size={28} className="text-white" />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Smaller images */}
          {images.slice(1).map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: (i + 1) * 0.07, ease }}
            >
              <TiltCard intensity={10} className="cursor-pointer group h-full">
                <div
                  onClick={() => setSelected(img.src)}
                  className="relative h-full min-h-[130px] md:min-h-[200px] overflow-hidden"
                  style={{ border: '1px solid var(--line)' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.25)' }}>
                    <ZoomIn size={16} className="text-white" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.96)' }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white cursor-pointer transition-colors"
              style={{ border: '1px solid var(--line-2)' }}
              onClick={() => setSelected(null)}
            >
              <X size={16} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              src={selected}
              alt=""
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
