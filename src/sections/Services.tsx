import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20personalizat%C4%83.%20Trimit%20poze%20cu%20ma%C8%99ina.";

const services = [
  {
    title: 'Curățare Mochetă',
    description: 'Injecție-extracție profesională. Murdăria adânc infiltrată, petele vechi, mirosurile — eliminate complet.',
  },
  {
    title: 'Scaune & Banchetă',
    description: 'Curățare injecție-extracție textil. Scaunele arată și miros a nou după tratament.',
  },
  {
    title: 'Degresare Plastice',
    description: 'Toate suprafețele din plastic, bord, console — curate, tratate, fără urme.',
  },
  {
    title: 'Curățare Chedere',
    description: 'Chedere tratate corect, fără urme de murdărie sau mucegai.',
  },
  {
    title: 'Curățare Portbagaj',
    description: 'Portbagaj complet curat — mochetă, plastice, fiecare colț.',
  },
  {
    title: 'Detailing Motor',
    description: 'Degresare completă a compartimentului motor. Aspect impecabil, protecție inclusă.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Ce facem</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white">
              Servicii <span className="text-white/20">Detailing</span>
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed md:text-right">
            Lucrăm cu mașini de orice tip — autoturisme, furgoane, TIR-uri.
          </p>
        </motion.div>

        {/* Numbered list — premium style */}
        <div className="border-t border-white/[0.06]">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group border-b border-white/[0.06] py-5 md:py-6 flex items-center gap-5 md:gap-8 hover:bg-white/[0.02] transition-colors duration-200 cursor-default px-2"
            >
              {/* Number */}
              <span className="font-display font-bold text-xs text-primary/60 tabular-nums shrink-0 w-6">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Linie decorativa */}
              <div className="hidden md:block w-8 h-px bg-white/10 shrink-0 group-hover:bg-primary/30 transition-colors duration-300" />

              {/* Title */}
              <span className="font-display font-bold uppercase tracking-tight text-white text-base md:text-lg flex-1 group-hover:text-white transition-colors">
                {s.title}
              </span>

              {/* Description — ascunsa pe mobile */}
              <span className="hidden lg:block text-white/25 text-sm max-w-xs leading-relaxed group-hover:text-white/40 transition-colors duration-200">
                {s.description}
              </span>

              {/* Arrow */}
              <ArrowUpRight
                size={16}
                className="text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 md:p-10 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(220,38,38,0.06) 0%, rgba(17,17,24,0) 60%)',
            border: '1px solid rgba(220,38,38,0.15)',
          }}
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-display uppercase text-white mb-2">
              Prețul depinde de mașina ta.
            </h3>
            <p className="text-white/35 text-sm max-w-sm leading-relaxed">
              Trimite câteva poze cu interiorul și primești oferta pe loc. Răspundem în mai puțin de 1 oră.
            </p>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap shrink-0">
            Trimite Poze pe WhatsApp
            <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
