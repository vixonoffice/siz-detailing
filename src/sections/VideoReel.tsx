import { motion } from 'framer-motion';
import AutoVideo from '../components/AutoVideo';

const VIDEOS = [
  '/videos/siz-v1.mp4',
  '/videos/siz-v2.mp4',
  '/videos/siz-v3.mp4',
  '/videos/siz-v4.mp4',
  '/videos/siz-v5.mp4',
  '/videos/siz-v6.mp4',
  '/videos/siz-v7.mp4',
  '/videos/siz-v8.mp4',
];

const ease = [0.16, 1, 0.3, 1];

export default function VideoReel() {
  return (
    <section
      id="results"
      className="py-14 md:py-24 px-6 md:px-14"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 md:mb-16"
        >
          <span className="mono-label block mb-3" style={{ color: 'rgba(255,45,45,0.7)' }}>
            Reel
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
            Rezultate <span style={{ color: 'var(--ink-4)' }}>Reale.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {VIDEOS.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                aspectRatio: '9/16',
                border: '1px solid var(--line)',
              }}
            >
              <AutoVideo
                src={src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(255,45,45,0.15), transparent)' }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
