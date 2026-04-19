import { motion } from 'framer-motion';
import AutoVideo from '../components/AutoVideo';

const easeOut = [0.16, 1, 0.3, 1];

export default function AboutWhy() {
  return (
    <section id="about" className="py-14 md:py-32 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">

        {/* Titlu mare — full width deasupra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-3 block">Despre noi</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white">
            Artă &amp; <span className="text-white/20">Precizie</span>
          </h2>
        </motion.div>

        {/* Grid: videouri stanga, text dreapta */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Videouri */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="flex flex-col gap-6"
          >
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/[0.06]">
              <AutoVideo src="/videos/munca1.mp4" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/[0.06]">
              <AutoVideo src="/videos/munca2.mp4" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
            className="lg:pt-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display uppercase leading-tight text-white mb-6">
              Nu doar <span className="text-primary">Curat.</span>
              <br />Impecabil.
            </h3>
            <div className="space-y-5 text-white/40 text-sm leading-relaxed mb-10">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/[0.05]">
              {[
                'Mașini, Furgoane & TIR-uri',
                'Prețuri corecte pe loc',
                'Studio propriu Rm. Vâlcea',
                'Satisfacție garantată',
              ].map((label) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                  <span className="text-white/40 text-sm leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
