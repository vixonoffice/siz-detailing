import { motion } from 'framer-motion';

export default function AboutWhy() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.06]">
              <img
                src="/images/munca1.jpeg"
                alt="Siz Detailing — la lucru în studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl border border-white/[0.06]">
              <img
                src="/images/scaun.jpeg"
                alt="Scaun impecabil după detailing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl border border-white/[0.06]">
              <img
                src="/images/munca2.jpeg"
                alt="Siz Detailing studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">Despre noi</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display uppercase leading-tight text-white mb-6">
              Nu doar <span className="text-primary">Curat.</span>
              <br />Impecabil.
            </h2>
            <div className="space-y-4 text-white/50 text-base leading-relaxed mb-8">
              <p>
                Suntem Siz Detailing din Rm. Vâlcea — specializați în curățarea interiorului auto prin metoda
                injecție-extracție.
              </p>
              <p>
                Lucrăm cu autoturisme, furgoane și TIR-uri. Indiferent cât de murdar e interiorul,
                îl aducem la starea originală.
              </p>
              <p>
                Nu avem prețuri fixe — pentru că fiecare mașină e diferită. Trimiți poze, îți facem
                prețul corect, vii cu mașina. Simplu.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/[0.06]">
              {[
                { label: 'Mașini & Furgoane & TIR-uri', icon: '🚗' },
                { label: 'Prețuri corecte pe loc', icon: '💬' },
                { label: 'Studio propriu Rm. Vâlcea', icon: '📍' },
                { label: 'Satisfacție garantată', icon: '✓' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-white/50 text-sm leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
