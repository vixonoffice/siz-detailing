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
        const eased = 1 - Math.pow(1 - progress, 4);
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
      <div className="text-3xl md:text-5xl font-black text-primary text-glow-sm mb-2 tracking-tighter font-display">
        {count}
        {suffix}
      </div>
      <div className="text-[9px] md:text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">{label}</div>
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
    <div className="overflow-hidden">
      {/* About Section */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-12 relative">
        {/* Ambient */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent-purple/8 blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/[0.03] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] md:aspect-square group"
            >
              <div className="absolute -inset-8 bg-primary/8 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="w-full h-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/[0.06] relative">
                <img
                  src="/images/brand.jpeg"
                  alt="Siz Detailing Rm. Vâlcea"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                {/* Overlay glow on hover */}
                <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Floating stat element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 glass-card p-6 md:p-8 rounded-2xl md:rounded-[2rem] hidden lg:block"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 text-glow-sm font-display">05+</div>
                <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">
                  Ani de <br />
                  Perfecțiune
                </div>
              </motion.div>
            </motion.div>

            {/* Text Side */}
            <div className="space-y-8 md:space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 md:mb-8 block">
                  Moștenire & Viziune
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6 md:mb-8 font-display">
                  <span className="text-gradient">Nu doar</span> <br />
                  <span className="text-gradient-red italic">Curat.</span> <br />
                  <span className="text-white/[0.08]">Impecabil.</span>
                </h2>
                <p className="text-white/30 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-lg">
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
                className="grid grid-cols-2 gap-6 md:gap-12 pt-8 md:pt-12 border-t border-white/[0.06]"
              >
                <Counter end={500} suffix="+" label="Proiecte Finalizate" />
                <Counter end={100} suffix="%" label="Satisfacție Elite" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us — Feature Grid */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative">
        {/* Ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] blur-[200px] rounded-full pointer-events-none" />

        {/* Section header */}
        <div className="max-w-7xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 md:mb-6 block">
              De ce noi
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter font-display">
              <span className="text-gradient">Excelență</span> <span className="text-gradient-red italic">Garantată</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 md:p-10 bg-background-card/80 backdrop-blur-sm border border-white/[0.04] rounded-2xl md:rounded-[2rem] hover:border-primary/15 hover:bg-background-lighter/60 transition-all duration-700 hover-lift overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[100px] bg-primary/[0.06] blur-[50px] rounded-full" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:shadow-glow-sm transition-all duration-700">
                    <feature.icon className="text-white/30 group-hover:text-primary w-5 h-5 md:w-6 md:h-6 transition-colors duration-500" />
                  </div>
                  <h3 className="text-base md:text-lg font-black text-white/80 uppercase tracking-wide mb-3 md:mb-4 group-hover:text-white transition-colors duration-500 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-white/20 text-xs md:text-sm font-medium leading-relaxed group-hover:text-white/40 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Animated bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/0 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
