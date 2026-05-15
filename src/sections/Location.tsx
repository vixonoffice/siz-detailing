import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import AutoVideo from '../components/AutoVideo';

const ease = [0.16, 1, 0.3, 1];

export default function Location() {
  return (
    <section
      className="py-14 md:py-24 px-6 md:px-14"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16"
        >
          <div>
            <span className="mono-label block mb-3" style={{ color: 'rgba(255,45,45,0.7)' }}>
              Unde ne găsești
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
              Locația <span style={{ color: 'var(--ink-4)' }}>Noastră</span>
            </h2>
          </div>
          <div className="flex items-center gap-2" style={{ color: 'var(--ink-3)', fontSize: '0.875rem' }}>
            <MapPin size={14} style={{ color: 'var(--red)', flexShrink: 0 }} />
            <span>Calea București 256, Rm. Vâlcea</span>
          </div>
        </motion.div>

        {/* Location video */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden mb-3"
          style={{ aspectRatio: '16/9', border: '1px solid var(--line)' }}
        >
          <AutoVideo src="/videos/locatie.mp4" poster="/images/locatie-poster.jpg" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.55), transparent)' }}
          />
          <div className="absolute bottom-5 left-5 flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{ background: 'var(--red)' }}
            >
              <MapPin size={13} style={{ color: 'var(--ink)' }} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: '"Archivo Narrow", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  color: 'var(--ink)',
                }}
              >
                Siz Detailing
              </p>
              <p className="mono-label" style={{ color: 'var(--ink-3)', fontSize: '10px' }}>
                Calea București 256, Rm. Vâlcea
              </p>
            </div>
          </div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease }}
          className="overflow-hidden"
          style={{ height: '240px', border: '1px solid var(--line)' }}
        >
          <iframe
            src="https://www.google.com/maps?q=Calea+Bucuresti+256+Ramnicu+Valcea&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Siz Detailing — Locație Rm. Vâlcea"
          />
        </motion.div>

      </div>
    </section>
  );
}
