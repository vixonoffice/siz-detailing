import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.85]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Ambient glow behind hero text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,0,0.08) 0%, rgba(255,0,0,0.02) 40%, transparent 70%)',
        }}
      />

      <motion.div
        style={{ y: y1, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-7xl pt-10 md:pt-20"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 md:mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
            Premium Auto Detailing
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-black tracking-tighter mb-4 md:mb-6 leading-[0.85] uppercase font-display"
        >
          <span className="text-gradient">Siz</span> <br />
          <span className="text-gradient-red text-glow italic">Detailing</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-8 md:mb-14"
        >
          <p className="text-lg md:text-2xl lg:text-3xl text-white/30 font-light tracking-[0.15em] md:tracking-[0.3em] uppercase">
            Perfecțiunea are un nume.
          </p>
          <p className="text-sm md:text-base text-white/15 font-light mt-2 tracking-widest">
            Rm. Vâlcea — Detailing Auto de Elită
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <a href="#contact">
            <MagneticButton variant="primary" className="h-14 md:h-16 px-10 md:px-14 text-sm md:text-base uppercase tracking-[0.2em] glow-pulse">
              Rezervă Acum
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </a>
          <a href="#services">
            <MagneticButton variant="secondary" className="h-14 md:h-16 px-10 md:px-14 text-sm md:text-base uppercase tracking-[0.2em] border-primary/15 hover:border-primary/40">
              Servicii Elite
            </MagneticButton>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-12 md:mt-20 flex items-center justify-center gap-6 md:gap-10"
        >
          {[
            { value: '500+', label: 'Proiecte' },
            { value: '5★', label: 'Rating' },
            { value: '5+', label: 'Ani' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-sm md:text-lg font-black text-primary/80">{stat.value}</div>
              <div className="text-[8px] md:text-[10px] font-bold text-white/15 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scrolling watermark text */}
      <motion.div
        style={{ x: useTransform(scrollY, [0, 1000], [0, -400]) }}
        className="absolute bottom-16 md:bottom-20 left-0 whitespace-nowrap text-[8rem] md:text-[18rem] font-black text-white/[0.015] pointer-events-none select-none z-0 font-display"
      >
        PROFESSIONAL DETAILING RM VALCEA
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-bold text-white/15 uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="text-white/15" size={20} />
      </motion.div>
    </section>
  );
}
