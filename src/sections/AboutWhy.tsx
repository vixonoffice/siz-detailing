import { motion } from 'framer-motion';
import AutoVideo from '../components/AutoVideo';

const easeOut = [0.16, 1, 0.3, 1];

export default function AboutWhy() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Videos */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="grid grid-cols-2 gap-3"
          >
            {/* Label deasupra */}
            <div className="col-span-2 flex items-center gap-3 mb-1">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">Munca Noastră</span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="col-span-2 aspect-video overflow-hidden rounded-2xl border border-white/[0.06]">
              <AutoVideo
                src="/videos/munca1.mp4"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Separator între videouri */}
            <div className="col-span-2 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/[0.04]" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <div className="h-px flex-1 bg-white/[0.04]" />
            </div>

            <div className="col-span-2 aspect-video overflow-hidden rounded-2xl border border-white/[0.06]">
              <AutoVideo
                src="/videos/munca2.mp4"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-4 block">Despre noi</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display uppercase leading-tight text-white mb-6">
              Nu doar <span className="text-primary">Curat.</span>
              <br />Impecabil.
            </h2>
            <div className="space-y-4 text-white/40 text-sm leading-relaxed mb-8">
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

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.05]">
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
