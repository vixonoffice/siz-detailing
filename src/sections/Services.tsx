import { motion } from 'framer-motion';
import { Droplets, Armchair, Sparkles, Crown, Shield, Wrench } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Detailing Exterior',
    description: 'Decontaminare chimică, corecție vopsea și protecție de lungă durată.',
    tag: 'Elite Care',
    number: '01',
  },
  {
    icon: Armchair,
    title: 'Curățare Interior',
    description: 'Dezinfectare cu ozon și tratament special pentru piele sau alcantara.',
    tag: 'Deep Clean',
    number: '02',
  },
  {
    icon: Shield,
    title: 'Protecție Ceramică',
    description: 'Tehnologie nano-ceramică pentru protecție împotriva razelor UV și zgârieturilor.',
    tag: 'Nano Guard',
    number: '03',
  },
  {
    icon: Sparkles,
    title: 'Corecție Vopsea',
    description: 'Eliminăm defectele vopselei pentru un aspect de showroom impecabil.',
    tag: 'Pro Polish',
    number: '04',
  },
  {
    icon: Crown,
    title: 'Pachet Complet',
    description: 'Experiența supremă: detailing total interior, exterior și motor.',
    tag: 'Full Elite',
    number: '05',
  },
  {
    icon: Wrench,
    title: 'Motor Detailing',
    description: 'Degresare profesională și protecție pentru componentele compartimentului motor.',
    tag: 'Engine Care',
    number: '06',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                Servicii Premium
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8]">
              Standard <br />
              <span className="text-primary italic">Absolut</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/30 text-lg font-light max-w-md text-right hidden lg:block"
          >
            Fiecare serviciu este executat cu precizie chirurgicală și materiale de top mondial.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-px bg-primary/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative h-full bg-[#0A0A0A] border border-white/[0.06] hover:border-primary/30 rounded-[2rem] p-10 md:p-12 lg:p-14 flex flex-col justify-between transition-all duration-700 overflow-hidden min-h-[400px]">
                {/* Large number watermark */}
                <div className="absolute -right-3 -top-6 text-[11rem] font-black text-white/[0.025] pointer-events-none select-none leading-none italic group-hover:text-primary/[0.06] transition-colors duration-700">
                  {service.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-10 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_rgba(255,0,0,0.15)] transition-all duration-700">
                    <service.icon className="w-7 h-7 text-white/40 group-hover:text-primary transition-colors duration-500" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-5 group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-white/25 text-base md:text-lg font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Bottom divider + tag */}
                <div className="relative z-10 flex items-center justify-between mt-10 pt-8 border-t border-white/[0.04] group-hover:border-primary/20 transition-colors duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 group-hover:text-primary transition-colors">
                    {service.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500">
                    <span className="text-white/20 group-hover:text-white transition-colors text-lg">→</span>
                  </div>
                </div>

                {/* Animated bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/0 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
