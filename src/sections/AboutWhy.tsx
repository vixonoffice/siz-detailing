import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Eye, Clock, ThumbsUp } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

function Counter({ end, suffix = '', label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-primary text-glow mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm md:text-base font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

const features = [
  {
    icon: Award,
    title: 'Produse Premium',
    description: 'Lucrăm exclusiv cu branduri de top din industria detailing-ului auto.'
  },
  {
    icon: Eye,
    title: 'Atenție la Detalii',
    description: 'Fiecare centimetru al mașinii tale primește atenția pe care o merită.'
  },
  {
    icon: Clock,
    title: 'Programare Flexibilă',
    description: 'Ne adaptăm programului tău. Programări rapide, fără așteptare.'
  },
  {
    icon: ThumbsUp,
    title: 'Garanția Satisfacției',
    description: 'Nu pleci până nu ești 100% mulțumit de rezultat.'
  }
];

export default function AboutWhy() {
  return (
    <div className="bg-[#020202] overflow-hidden">
      {/* About Section - Cinematic */}
      <section id="about" className="py-32 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Image Side with sophisticated masking */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] md:aspect-square group"
            >
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="w-full h-full overflow-hidden rounded-[4rem] border border-white/5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Detailing" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
              </div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] hidden lg:block"
              >
                <div className="text-6xl font-black text-primary mb-2">05+</div>
                <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Ani de <br />Perfecțiune</div>
              </motion.div>
            </motion.div>

            {/* Text Side - High-end Typography */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1 }}
              >
                <span className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-8 block">Moștenire & Viziune</span>
                <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                  Nu doar <br />
                  <span className="text-primary italic">Curat.</span> <br />
                  <span className="text-white/10">Impecabil.</span>
                </h2>
                <p className="text-white/60 text-xl font-light leading-relaxed max-w-lg">
                  La Siz Detailing, nu spălăm mașini. Le restaurăm demnitatea. Folosim tehnologie de ultimă oră și o atenție obsesivă la detalii pentru a transforma orice vehicul într-o capodoperă vizuală.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tighter">500+</div>
                  <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Proiecte Finalizate</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tighter">100%</div>
                  <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Satisfacție Elite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Why Us - Grid Modern */}
      <section className="py-32 px-6 md:px-12 relative bg-[#050505]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 1 }}
                className="group relative p-12 bg-[#020202] border border-white/[0.02] hover:bg-[#080808] transition-all duration-700"
              >
                <div className="relative z-10">
                  <feature.icon className="text-primary w-10 h-10 mb-10 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-xl font-black text-white uppercase tracking-widest mb-6">{feature.title}</h3>
                  <p className="text-white/20 text-sm font-medium leading-relaxed group-hover:text-white/40 transition-colors">
                    {feature.description}
                  </p>
                </div>
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/[0.05] group-hover:border-primary/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
