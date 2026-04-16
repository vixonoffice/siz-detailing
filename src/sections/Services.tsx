import { motion } from 'framer-motion';
import { Droplets, Armchair, Sparkles, Crown, Shield, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import Tilt from 'react-parallax-tilt';

const services = [
  {
    icon: Droplets,
    title: 'Detailing Exterior',
    description: 'Decontaminare chimică, corecție vopsea și protecție de lungă durată.',
    price: 'Elite Care',
  },
  {
    icon: Armchair,
    title: 'Curățare Interior',
    description: 'Dezinfectare cu ozon și tratament special pentru piele sau alcantara.',
    price: 'Deep Clean',
  },
  {
    icon: Shield,
    title: 'Protecție Ceramică',
    description: 'Tehnologie nano-ceramică pentru protecție împotriva razelor UV și zgârieturilor.',
    price: 'Nano Guard',
  },
  {
    icon: Sparkles,
    title: 'Corecție Vopsea',
    description: 'Eliminăm defectele vopselei pentru un aspect de showroom impecabil.',
    price: 'Pro Polish',
  },
  {
    icon: Crown,
    title: 'Pachet Complet',
    description: 'Experiența supremă: detailing total interior, exterior și motor.',
    price: 'Full Elite',
  },
  {
    icon: Wrench,
    title: 'Motor Detailing',
    description: 'Degresare profesională și protecție pentru componentele compartimentului motor.',
    price: 'Engine Care',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Servicii Premium</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8]">
              Standard <br />
              <span className="text-primary italic">Absolut</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 1 }}
            >
              <Tilt
                perspective={1500}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#FF0000"
                glarePosition="all"
                scale={1.05}
                className="h-full"
              >
                <div className="group relative h-full bg-[#020202] border border-white/[0.03] p-16 flex flex-col justify-between hover:bg-[#050505] transition-all duration-700 overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center mb-12 group-hover:bg-primary group-hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all duration-700">
                      <service.icon className="w-8 h-8 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-xl font-light leading-relaxed mb-12 group-hover:text-white/80 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 mb-2">Category</span>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{service.price}</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <span className="text-2xl italic">→</span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
