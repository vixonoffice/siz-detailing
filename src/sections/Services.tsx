import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20personalizat%C4%83.%20Trimit%20poze%20cu%20ma%C8%99ina.";

const services = [
  {
    title: 'Curățare Mochetă',
    description: 'Injecție-extracție profesională. Murdărie adâncă, pete vechi, mirosuri — eliminate complet.',
  },
  {
    title: 'Scaune & Banchetă',
    description: 'Curățare injecție-extracție textil. Scaunele arată și miros a nou după tratament.',
  },
  {
    title: 'Degresare Plastice',
    description: 'Bord, console, toate suprafețele din plastic — curate, tratate, fără urme.',
  },
  {
    title: 'Curățare Chedere',
    description: 'Chedere tratate corect, fără murdărie sau mucegai.',
  },
  {
    title: 'Curățare Portbagaj',
    description: 'Portbagaj complet — mochetă, plastice, fiecare colț.',
  },
  {
    title: 'Detailing Motor',
    description: 'Degresare completă a compartimentului motor. Aspect impecabil.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-32 px-6 md:px-14">
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
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-3 block">Ce facem</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white">
              Servicii <span className="text-white/15">Detailing</span>
            </h2>
          </div>
          <p className="text-white/25 text-sm max-w-sm leading-relaxed md:text-right">
            Mașini, furgoane, TIR-uri — oricare ar fi starea interiorului.
          </p>
        </motion.div>

        {/* Numbered list cu 3D hover */}
        <div
          className="border-t border-white/[0.05]"
          style={{ perspective: '600px' }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ x: 6, rotateX: -1, backgroundColor: 'rgba(255,255,255,0.02)' }}
              className="group border-b border-white/[0.05] py-5 md:py-7 flex items-center gap-5 md:gap-8 transition-colors duration-200 cursor-default px-2 md:px-4 rounded-sm"
              style={{ transformOrigin: 'left center' }}
            >
              <span className="font-display font-bold text-[11px] text-primary/50 tabular-nums shrink-0 w-6">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="hidden md:block w-6 h-px bg-white/10 shrink-0 group-hover:bg-primary/30 transition-colors" />
              <span className="font-display font-bold uppercase tracking-tight text-white text-base md:text-lg flex-1">
                {s.title}
              </span>
              <span className="hidden lg:block text-white/20 text-sm max-w-xs leading-relaxed">
                {s.description}
              </span>
              <ArrowUpRight size={15} className="text-primary/50 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            background: 'linear-gradient(135deg, rgba(220,38,38,0.07) 0%, rgba(6,6,8,0) 70%)',
            border: '1px solid rgba(220,38,38,0.12)',
          }}
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-display uppercase text-white mb-2">
              Prețul depinde de mașina ta.
            </h3>
            <p className="text-white/30 text-sm max-w-sm leading-relaxed">
              Trimite câteva poze cu interiorul și primești oferta pe loc. Răspundem în mai puțin de 1 oră.
            </p>
          </div>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto justify-center shrink-0"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Trimite Poze pe WhatsApp
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
