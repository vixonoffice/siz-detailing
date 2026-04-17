import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const galleryImages = [
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603584173870-7f3118020352?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552519507-811f4a2916ad?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop',
];

const testimonials = [
  {
    name: 'Andrei M.',
    model: 'BMW Seria 3',
    text: 'Am rămas uimit de rezultat! Mașina arată mai bine decât când am luat-o din showroom. Recomand cu încredere!',
    stars: 5,
  },
  {
    name: 'Maria P.',
    model: 'Mercedes C-Class',
    text: 'Profesionalism desăvârșit. Au scos zgârieturi pe care le credeam permanente. Vopsea ca oglinda!',
    stars: 5,
  },
  {
    name: 'Cristian D.',
    model: 'Audi A4',
    text: 'Cel mai bun detailing din Vâlcea, fără discuție. Interiorul mașinii miroase și arată ca nou.',
    stars: 5,
  },
  {
    name: 'Elena S.',
    model: 'Volkswagen Golf',
    text: 'Protecția ceramică a fost cea mai bună investiție. După 6 luni mașina încă arată impecabil.',
    stars: 5,
  },
  {
    name: 'Bogdan T.',
    model: 'Ford Focus',
    text: 'Rapiditate, calitate și prețuri corecte. Nu merg în altă parte de acum.',
    stars: 5,
  },
];

export default function GalleryTestimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-40 px-6 md:px-12 relative">
        {/* Ambient */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent-purple/8 blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/[0.03] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                <span className="text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px]">Arhivă Vizuală</span>
              </div>
              <h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] font-display">
                <span className="text-gradient">Rezultate</span> <br />
                <span className="text-white/[0.07] italic">Premium</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.05, duration: 0.8 }}
                onClick={() => setSelectedImage(image)}
                className={cn(
                  'relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.04] bg-background-card hover-lift',
                  index === 0 || index === 7
                    ? 'md:col-span-2 md:row-span-2 h-[200px] md:h-[500px] lg:h-[600px]'
                    : 'md:col-span-1 md:row-span-1 h-[150px] md:h-[240px] lg:h-[290px]'
                )}
              >
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 md:p-6 flex flex-col justify-between">
                  <div className="text-[7px] md:text-[8px] font-bold text-white/30 tracking-widest uppercase">ID_{index + 1024}</div>
                  <div className="text-[8px] md:text-[10px] font-black text-primary/80 uppercase tracking-[0.15em] border border-primary/20 w-fit px-2 md:px-3 py-1 rounded-full bg-primary/5 backdrop-blur-sm">
                    View
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-primary/0 group-hover:border-primary/15 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — CSS marquee */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        {/* Ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-4 md:mb-8 font-display">
              <span className="text-gradient">Clienți</span> <span className="text-gradient-red italic">Satisfăcuți</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex gap-4 md:gap-6 py-6 md:py-10">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="glass-card p-8 md:p-10 w-[320px] md:w-[420px] shrink-0 rounded-2xl md:rounded-[2.5rem] group hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex gap-1 mb-5 md:mb-6">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white/50 text-base md:text-lg font-light italic mb-8 md:mb-10 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 md:w-10 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                  <div>
                    <div className="text-white/80 font-bold uppercase tracking-wider text-sm">{t.name}</div>
                    <div className="text-white/15 text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-1">{t.model}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5 text-white/60" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
