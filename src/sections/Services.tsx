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
    <section id="services" className="py-24 md:py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.03] blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-purple/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-primary/0" />
              <span className="text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px]">Servicii Premium</span>
            </div>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-gradient uppercase tracking-tighter leading-[0.8] font-display">
              Standard <br />
              <span className="text-gradient-red italic">Absolut</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/25 text-base md:text-lg font-light max-w-md text-left md:text-right"
          >
            Fiecare serviciu este executat cu precizie chirurgicală și materiale de top mondial.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group relative h-full bg-background-card/80 backdrop-blur-sm border border-white/[0.04] p-8 md:p-12 lg:p-14 flex flex-col justify-between hover:bg-background-lighter/80 transition-all duration-700 overflow-hidden min-h-[360px] md:min-h-[420px] rounded-2xl md:rounded-3xl hover-lift shimmer">
                {/* Large number watermark */}
                <div className="absolute -right-3 -top-6 text-[8rem] md:text-[11rem] font-black text-white/[0.015] pointer-events-none select-none leading-none italic group-hover:text-primary/[0.04] transition-colors duration-1000 font-display">
                  {service.number}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-primary/[0.06] blur-[80px] rounded-full" />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/[0.03] border border-white/[0.06] rounded-2xl md:rounded-[1.5rem] flex items-center justify-center mb-8 md:mb-12 group-hover:bg-primary/90 group-hover:border-primary group-hover:shadow-glow transition-all duration-700">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white/50 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white/90 uppercase tracking-tight mb-4 md:mb-6 group-hover:text-white transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-white/30 text-sm md:text-base lg:text-lg font-light leading-relaxed mb-8 md:mb-12 group-hover:text-white/60 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/10 mb-1">Category</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-primary/80 group-hover:text-primary transition-colors">{service.tag}</span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <span className="text-white/20 text-xl md:text-2xl group-hover:text-primary transition-colors">→</span>
                  </div>
                </div>

                {/* Animated bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-transparent w-0 group-hover:w-full transition-all duration-1000" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-primary/30 to-transparent" />
                  <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-primary/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
