import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing%20interior.%20Trimit%20poze%20cu%20ma%C8%99ina.";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ease = [0.16, 1, 0.3, 1];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-14 md:py-24 px-6 md:px-14"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="max-w-4xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="mono-label block mb-4" style={{ color: 'rgba(255,45,45,0.7)' }}>
            Contact
          </span>
          <h2
            className="mb-6"
            style={{
              fontFamily: '"Archivo Narrow", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              lineHeight: 0.9,
              color: 'var(--ink)',
            }}
          >
            Hai să <span style={{ color: 'var(--red)' }}>Lucrăm</span>
          </h2>
          <p
            className="max-w-md mx-auto mb-12"
            style={{ color: 'var(--ink-3)', fontSize: 'clamp(0.9rem, 3.5vw, 1rem)', lineHeight: 1.7 }}
          >
            Trimite-ne câteva poze cu interiorul mașinii pe WhatsApp și îți facem oferta pe loc.
            Fără formulare, fără așteptare.
          </p>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mb-12"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5"
            style={{
              background: '#25D366',
              color: 'var(--ink)',
              fontFamily: '"Geist Mono", monospace',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              padding: '16px 32px',
            }}
          >
            <WhatsAppIcon />
            Scrie-ne pe WhatsApp
          </a>
          <p
            className="mt-3 mono-label"
            style={{ color: 'var(--ink-4)' }}
          >
            Răspundem în mai puțin de 1 oră
          </p>
        </motion.div>

        {/* Secondary info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          style={{ color: 'var(--ink-3)' }}
        >
          <a
            href="tel:0761639988"
            className="flex items-center gap-3 hover:text-[var(--ink)] transition-colors duration-200 group"
          >
            <div
              className="w-10 h-10 flex items-center justify-center group-hover:border-[var(--red)] transition-colors duration-200"
              style={{ border: '1px solid var(--line-2)' }}
            >
              <Phone size={15} style={{ color: 'var(--red)' }} />
            </div>
            <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: '13px', letterSpacing: '0.04em' }}>
              0761 639 988
            </span>
          </a>

          <div className="w-px h-8 hidden sm:block" style={{ background: 'var(--line)' }} />

          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ border: '1px solid var(--line-2)' }}
            >
              <MapPin size={15} style={{ color: 'var(--red)' }} />
            </div>
            <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: '13px', letterSpacing: '0.04em' }}>
              Calea București 256, Rm. Vâlcea
            </span>
          </div>
        </motion.div>

        {/* Google Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-14 pt-10 flex flex-col items-center gap-4"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFC64D">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <p style={{ color: 'var(--ink-3)', fontSize: '0.875rem' }}>
            Ai lucrat cu noi? Lasă o recenzie și ajuți alți clienți.
          </p>
          <a
            href="https://share.google/dH6cwmA7u00jVzbnz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5"
            style={{
              background: 'var(--ink)',
              color: 'var(--bg)',
              fontFamily: '"Geist Mono", monospace',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              padding: '13px 26px',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Lasă o recenzie pe Google
          </a>
        </motion.div>

      </div>
    </section>
  );
}
