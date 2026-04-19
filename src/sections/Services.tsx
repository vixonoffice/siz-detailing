import { motion } from 'framer-motion';
import { Layers, Armchair, Sparkles, Wrench, Package, Wind } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20personalizat%C4%83.%20Trimit%20poze%20cu%20ma%C8%99ina.";

const services = [
  {
    icon: Layers,
    title: 'Curățare Mochetă',
    description: 'Injecție-extracție profesională. Scoatem murdăria adânc infiltrată, petele vechi, mirosurile.',
  },
  {
    icon: Armchair,
    title: 'Scaune & Banchetă',
    description: 'Curățare injecție-extracție textil. Scaunele par noi după tratament.',
  },
  {
    icon: Sparkles,
    title: 'Degresare Plastice',
    description: 'Toate suprafețele din plastic, bord, console — curate și tratate.',
  },
  {
    icon: Wind,
    title: 'Curățare Chedere',
    description: 'Chedere tratate corect, fără urme de murdărie sau mucegai.',
  },
  {
    icon: Package,
    title: 'Curățare Portbagaj',
    description: 'Portbagaj complet curat — mochetă, plastice, colțuri.',
  },
  {
    icon: Wrench,
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
          className="mb-12 md:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Ce facem</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white mb-4">
            Servicii <span className="text-primary">Detailing</span>
          </h2>
          <p className="text-white/40 text-base max-w-lg">
            Lucrăm cu mașini de orice tip — autoturisme, furgoane, TIR-uri. Oricare ar fi starea interiorului.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card p-6 md:p-8 group hover:border-primary/20 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                {s.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pricing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ borderColor: 'rgba(220,38,38,0.25)' }}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Prețuri</span>
            <h3 className="text-2xl md:text-3xl font-bold font-display uppercase text-white mb-2">
              Ofertă Personalizată
            </h3>
            <p className="text-white/40 text-sm max-w-md leading-relaxed">
              Prețul diferă în funcție de mașină, dimensiune și gradul de murdărie.
              Trimite câteva poze cu interiorul și îți facem prețul corect pe loc.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap">
              Trimite Poze pe WhatsApp
              <ArrowRight size={16} />
            </a>
            <span className="text-[11px] text-white/20 uppercase tracking-wider">Răspundem în mai puțin de 1 oră</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
