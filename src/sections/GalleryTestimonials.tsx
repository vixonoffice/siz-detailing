import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { src: '/images/brand.jpeg', alt: 'Siz Detailing — Studio Rm. Vâlcea', span: 'large' },
  { src: '/images/munca1.jpeg', alt: 'La lucru în studio', span: 'small' },
  { src: '/images/bord-curat.jpeg', alt: 'Bord TIR după detailing', span: 'small' },
  { src: '/images/munca2.jpeg', alt: 'Tratament profesional', span: 'small' },
  { src: '/images/interior-curat.jpeg', alt: 'Interior curat după detailing', span: 'small' },
  { src: '/images/scaun.jpeg', alt: 'Scaun BMW impecabil', span: 'small' },
  { src: '/images/motor-curat.jpeg', alt: 'Compartiment motor curat', span: 'small' },
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Galerie</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white">
              Munca <span className="text-white/20">Noastră</span>
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed md:text-right">
            Fiecare mașină, o poveste. Click pe imagini pentru detalii.
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {/* Imaginea mare — span 2 col x 2 row */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelected(images[0].src)}
            className="col-span-2 row-span-2 overflow-hidden rounded-2xl border border-white/[0.06] cursor-pointer group relative"
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.button>

          {/* Restul imaginilor — câte una per celulă */}
          {images.slice(1).map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: (i + 1) * 0.06 }}
              onClick={() => setSelected(img.src)}
              className="overflow-hidden rounded-xl border border-white/[0.06] cursor-pointer group relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
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
