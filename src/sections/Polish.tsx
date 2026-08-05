import { motion } from 'framer-motion';
import AutoVideo from '../components/AutoVideo';

const CLIP_COUNT = 12;
const CLIPS = Array.from({ length: CLIP_COUNT }, (_, i) => ({
  src: `/videos/polish-v${i + 1}.mp4`,
  poster: `/images/polish/polish-v${i + 1}.jpg`,
}));

const ease = [0.16, 1, 0.3, 1];

export default function Polish() {
  return (
    <section
      id="polish"
      className="py-14 md:py-24 px-6 md:px-14"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <span className="mono-label block mb-3" style={{ color: 'rgba(255,45,45,0.7)' }}>
              Serviciu Nou
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
              Polish <span style={{ color: 'var(--ink-4)' }}>Caroserie.</span>
            </h2>
          </div>
          <p
            className="max-w-xs text-right hidden md:block"
            style={{ color: 'var(--ink-3)', fontSize: '0.875rem', lineHeight: 1.7 }}
          >
            Lustruire profesională, corectare vopsea și luciu de oglindă — direct din atelier.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {CLIPS.map((clip, i) => (
            <motion.div
              key={clip.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                aspectRatio: '9/16',
                border: '1px solid var(--line)',
              }}
            >
              <AutoVideo
                src={clip.src}
                poster={clip.poster}
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
