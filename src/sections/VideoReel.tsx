import { motion } from 'framer-motion';
import AutoVideo from '../components/AutoVideo';

const VIDEOS = [
  '/videos/siz-v2.mp4',
  '/videos/siz-v3.mp4',
  '/videos/siz-v4.mp4',
  '/videos/siz-v5.mp4',
  '/videos/siz-v6.mp4',
  '/videos/siz-v7.mp4',
  '/videos/siz-v8.mp4',
];

export default function VideoReel() {
  return (
    <section className="py-10 md:py-16 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display uppercase leading-tight text-white">
            Rezultate <span className="text-white/20">reale.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {VIDEOS.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] group cursor-pointer"
              style={{ aspectRatio: '9/16' }}
            >
              <AutoVideo
                src={src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
