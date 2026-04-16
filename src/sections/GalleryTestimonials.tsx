import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
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
    <div className="bg-[#010101] overflow-hidden">
      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 md:px-12 relative">
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
                <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Arhivă Vizuală</span>
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8]">
                Rezultate <br />
                <span className="text-white/10 italic">Premium</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.05, duration: 0.8 }}
                onClick={() => setSelectedImage(image)}
                className={cn(
                  'relative group md:cursor-none cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#050505]',
                  index === 0 || index === 7
                    ? 'md:col-span-2 md:row-span-2 h-[600px]'
                    : 'md:col-span-1 md:row-span-1 h-[290px]'
                )}
              >
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-between">
                  <div className="text-[8px] font-black text-white/40 tracking-widest uppercase">ID_{index + 1024}</div>
                  <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] border border-primary/20 w-fit px-3 py-1 rounded-full bg-primary/5">
                    Project_Active
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — CSS marquee for seamless infinite loop */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8">
              Clienți <span className="text-primary italic">Satisfăcuți</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex gap-8 py-10">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] border border-white/5 p-12 w-[380px] md:w-[480px] shrink-0 rounded-[3rem] group hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white/60 text-xl font-light italic mb-10 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-primary" />
                  <div>
                    <div className="text-white font-black uppercase tracking-widest">{t.name}</div>
                    <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest mt-1">{t.model}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Gallery" className="max-w-full max-h-full object-contain rounded-2xl" />
        </motion.div>
      )}
    </div>
  );
}
