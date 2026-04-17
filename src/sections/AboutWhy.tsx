import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Eye, Clock, ThumbsUp } from 'lucide-react';

function Counter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4); // ease-out quart
        setCount(Math.floor(eased * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <div ref={ref}>
      <div className="text-4xl md:text-5xl font-black text-primary text-glow mb-2 tracking-tighter">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{label}</div>
    </div>
  );
}

const features = [
  {
    icon: Award,
    title: 'Produse Premium',
    description: 'Lucrăm exclusiv cu branduri de top din industria detailing-ului auto.',
  },
  {
    icon: Eye,
    title: 'Atenție la Detalii',
    description: 'Fiecare centimetru al mașinii tale primește atenția pe care o merită.',
  },
  {
    icon: Clock,
    title: 'Programare Flexibilă',
    description: 'Ne adaptăm programului tău. Programări rapide, fără așteptare.',
  },
  {
    icon: ThumbsUp,
    title: 'Garanția Satisfacției',
    description: 'Nu pleci până nu ești 100% mulțumit de rezultat.',
  },
];

export default function AboutWhy() {
  return (
    <div className="bg-[#020202] overflow-hidden">
      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] md:aspect-square group"
            >
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="w-full h-full overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-white/[0.06] relative">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop"
                  alt="Detailing"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
              </div>

              {/* Floating stat element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] hidden lg:block"
              >
                <div className="text-5xl md:text-6xl font-black text-primary mb-2 text-glow">05+</div>
                <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">
                  Ani de <br />
                  Perfecțiune
                </div>
              </motion.div>
            </motion.div>

            {/* Text Side */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-8 block">
                  Moștenire & Viziune
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                  Nu doar <br />
                  <span className="text-primary italic">Curat.</span> <br />
                  <span className="text-white/10">Impecabil.</span>
                </h2>
                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                  La Siz Detailing, nu spălăm mașini. Le restaurăm demnitatea. Folosim tehnologie de ultimă oră și o
                  atenție obsesivă la detalii pentru a transforma orice vehicul într-o capodoperă vizuală.
                </p>
              </motion.div>

              {/* Animated Counters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-8 md:gap-12 pt-12 border-t border-white/[0.06]"
              >
                <Counter end={500} suffix="+" label="Proiecte Finalizate" />
                <Counter end={100} suffix="%" label="Satisfacție Elite" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us — Feature Grid */}
      <section className="py-32 px-6 md:px-12 relative bg-[#050505]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Section header */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">
              De ce noi
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter">
              Excelență <span className="text-primary italic">Garantată</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-10 md:p-12 bg-[#020202] border border-white/[0.04] rounded-[2rem] hover:border-primary/20 hover:bg-[#0A0A0A] transition-all duration-700"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] transition-all duration-700">
                    <feature.icon className="text-white/40 group-hover:text-primary w-6 h-6 transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wider mb-4 group-hover:text-primary transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-white/20 text-sm font-medium leading-relaxed group-hover:text-white/50 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700 rounded-b-[2rem]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
