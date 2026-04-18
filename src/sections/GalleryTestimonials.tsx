import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  { src: '/images/brand.jpeg', alt: 'Siz Detailing — Studio Rm. Vâlcea' },
  { src: '/images/munca1.jpeg', alt: 'La lucru în studio' },
  { src: '/images/munca2.jpeg', alt: 'Tratament scaun' },
  { src: '/images/interior-curat.jpeg', alt: 'Interior curat după detailing' },
  { src: '/images/bord-curat.jpeg', alt: 'Bord TIR după detailing' },
  { src: '/images/motor-curat.jpeg', alt: 'Compartiment motor curat' },
];

export default function GalleryTestimonials() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Galerie</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white">
            Munca <span className="text-primary">Noastră</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={() => setSelected(img.src)}
              className={`overflow-hidden rounded-xl border border-white/[0.06] cursor-pointer group ${
                i === 0 ? 'col-span-2 row-span-1' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
            </motion.button>
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>
            <img
              src={selected}
              alt=""
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
