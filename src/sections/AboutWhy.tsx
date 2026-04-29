import { motion } from 'framer-motion';
import AutoVideo from '../components/AutoVideo';

const ease = [0.16, 1, 0.3, 1];

export default function AboutWhy() {
  return (
    <section
      id="about"
      className="py-14 md:py-24 px-6 md:px-14"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 md:mb-18"
        >
          <span className="mono-label block mb-3" style={{ color: 'rgba(255,45,45,0.7)' }}>
            Despre noi
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
            Artă &amp; <span style={{ color: 'var(--ink-4)' }}>Precizie</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div
              className="overflow-hidden aspect-video"
              style={{ border: '1px solid var(--line)' }}
            >
              <AutoVideo src="/videos/munca2.mp4" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="lg:pt-4"
          >
            <h3
              className="mb-6"
              style={{
                fontFamily: '"Archivo Narrow", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                letterSpacing: '-0.025em',
                textTransform: 'uppercase',
                lineHeight: 1,
                color: 'var(--ink)',
              }}
            >
              Nu doar <span style={{ color: 'var(--red)' }}>Curat.</span>
              <br />Impecabil.
            </h3>

            <div className="space-y-4 mb-10" style={{ color: 'var(--ink-3)', fontSize: 'clamp(0.9rem, 3.5vw, 0.95rem)', lineHeight: 1.75 }}>
              <p>
                Suntem Siz Detailing din Rm. Vâlcea — specializați în curățarea interiorului auto prin metoda injecție-extracție.
              </p>
              <p>
                Lucrăm cu autoturisme, furgoane și TIR-uri. Indiferent cât de murdar e interiorul, îl aducem la starea originală.
              </p>
              <p>
                Nu avem prețuri fixe — pentru că fiecare mașină e diferită. Trimiți poze, îți facem prețul corect, vii cu mașina. Simplu.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8"
              style={{ borderTop: '1px solid var(--line)' }}
            >
              {[
                'Mașini, Furgoane & TIR-uri',
                'Prețuri corecte pe loc',
                'Studio propriu Rm. Vâlcea',
                'Satisfacție garantată',
              ].map((label) => (
                <div key={label} className="flex items-start gap-3">
                  <span style={{ color: 'var(--red)', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✓</span>
                  <span style={{ color: 'var(--ink-3)', fontSize: '0.875rem', lineHeight: 1.4 }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
