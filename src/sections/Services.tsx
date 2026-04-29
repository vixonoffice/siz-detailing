import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, X } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20personalizat%C4%83.%20Trimit%20poze%20cu%20ma%C8%99ina.";

const services = [
  {
    title: 'Curățare Mochetă',
    description: 'Injecție-extracție profesională cu aparat Mytee. Murdărie adâncă, pete vechi, sare de iarnă, miros de țigară — eliminate complet. Fibra curățată până la bază, uscată complet.',
    detail: 'Timp estimat: 1–2h · Valabil pentru toate tipurile de vehicule',
  },
  {
    title: 'Scaune & Banchetă',
    description: 'Curățare injecție-extracție pentru tapițerie textil și piele. Scaunele arată și miros a nou după tratament. Petele de cafea, sânge, alimente — fără urmă.',
    detail: 'Timp estimat: 1–3h · Textil și piele ecologică',
  },
  {
    title: 'Degresare Plastice',
    description: 'Bord, console, portiere, toate suprafețele din plastic — curățate și tratate cu produse profesionale. Fără urme albe, fără străluciri ieftine.',
    detail: 'Timp estimat: 30min–1h · Inclus în pachetul complet',
  },
  {
    title: 'Curățare Chedere',
    description: 'Chederele sunt punctul unde se adunează cel mai mult murdăria și mucegaiul. Le tratăm corect și le protejăm pentru durabilitate maximă.',
    detail: 'Timp estimat: 30min · Recomandat sezonier',
  },
  {
    title: 'Curățare Portbagaj',
    description: 'Portbagaj complet — mochetă, plastice, cotiere, fiecare colț. Indiferent dacă transporti materiale de construcție sau faci naveta zilnic.',
    detail: 'Timp estimat: 30min–1h · Injecție-extracție sau uscat',
  },
  {
    title: 'Detailing Motor',
    description: 'Degresare completă a compartimentului motor. Eliminăm petele de ulei, praful și murdăria acumulată. Aspect impecabil, fără risc de deteriorare a componentelor electrice.',
    detail: 'Timp estimat: 45min–1.5h · Protecție plastice incluse',
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-14 md:py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20"
        >
          <div>
            <span className="mono-label block mb-3" style={{ color: 'rgba(255,45,45,0.7)' }}>
              Ce facem
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
              Servicii <span style={{ color: 'var(--ink-4)' }}>Detailing</span>
            </h2>
          </div>
          <p
            className="max-w-xs text-right hidden md:block"
            style={{ color: 'var(--ink-3)', fontSize: '0.875rem', lineHeight: 1.7 }}
          >
            Mașini, furgoane, TIR-uri — oricare ar fi starea interiorului.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {services.map((s, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
                style={{ borderBottom: '1px solid var(--line)' }}
              >
                {/* Row — clickable */}
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full text-left flex items-center gap-5 md:gap-8 py-5 md:py-7 px-2 md:px-4 cursor-pointer group transition-colors duration-200"
                  style={{
                    background: isOpen ? 'rgba(255,45,45,0.04)' : 'transparent',
                  }}
                >
                  <span
                    className="mono-label shrink-0 w-6"
                    style={{ color: 'rgba(255,45,45,0.4)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="hidden md:block w-6 shrink-0 transition-colors duration-300"
                    style={{
                      height: '1px',
                      background: isOpen ? 'var(--red)' : 'var(--line-2)',
                    }}
                  />
                  <span
                    className="flex-1"
                    style={{
                      fontFamily: '"Archivo Narrow", sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                      letterSpacing: '-0.02em',
                      textTransform: 'uppercase',
                      color: isOpen ? 'var(--red)' : 'var(--ink)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {s.title}
                  </span>

                  {/* Desktop: show description when closed */}
                  {!isOpen && (
                    <span
                      className="hidden lg:block max-w-xs"
                      style={{ color: 'var(--ink-3)', fontSize: '0.8rem', lineHeight: 1.6 }}
                    >
                      {s.description.slice(0, 60)}…
                    </span>
                  )}

                  <span
                    className="shrink-0 flex items-center justify-center transition-transform duration-300"
                    style={{
                      color: 'var(--red)',
                      transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)',
                    }}
                  >
                    {isOpen ? <X size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {/* Expanded panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                    >
                      <div
                        className="px-4 md:px-10 pb-6 pt-2 flex flex-col md:flex-row gap-4 md:gap-12"
                        style={{ borderTop: '1px solid var(--line)' }}
                      >
                        <p
                          className="flex-1"
                          style={{ color: 'var(--ink-2)', fontSize: '0.9rem', lineHeight: 1.75 }}
                        >
                          {s.description}
                        </p>
                        <div
                          className="shrink-0 md:w-56 mono-label flex items-start gap-2 mt-1"
                          style={{ color: 'var(--ink-3)' }}
                        >
                          <span style={{ color: 'var(--red)', marginTop: '1px' }}>▸</span>
                          {s.detail}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mt-14 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 md:p-10"
          style={{
            background: 'linear-gradient(135deg, rgba(255,45,45,0.06) 0%, transparent 70%)',
            border: '1px solid rgba(255,45,45,0.12)',
          }}
        >
          <div>
            <h3
              className="mb-2"
              style={{
                fontFamily: '"Archivo Narrow", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
              }}
            >
              Prețul depinde de mașina ta.
            </h3>
            <p style={{ color: 'var(--ink-3)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '28rem' }}>
              Trimite câteva poze cu interiorul și primești oferta pe loc. Răspundem în mai puțin de 1 oră.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto justify-center shrink-0 inline-flex items-center gap-2"
          >
            Trimite Poze pe WhatsApp
            <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
