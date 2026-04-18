import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Brand image background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/brand.jpeg')`,
          opacity: 0.07,
          filter: 'saturate(0) contrast(1.2)',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none bg-primary/[0.06] blur-[120px] rounded-full" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-7xl pt-10 md:pt-20"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 md:mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
            Premium Auto Detailing · Rm. Vâlcea
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-black tracking-tighter mb-4 md:mb-6 leading-[0.85] uppercase font-display"
        >
          <span className="text-gradient">Siz</span> <br />
          <span className="text-gradient-red italic">Detailing</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mb-8 md:mb-14 text-lg md:text-2xl text-white/30 font-light tracking-[0.15em] md:tracking-[0.3em] uppercase"
        >
          Mașina ta merită mai mult.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="#contact"
            className="h-14 md:h-16 px-10 md:px-14 text-sm md:text-base uppercase tracking-[0.2em] font-black bg-primary hover:bg-primary-light text-white rounded-xl transition-colors duration-300 flex items-center gap-2"
          >
            Cere Ofertă Gratuită
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="h-14 md:h-16 px-10 md:px-14 text-sm md:text-base uppercase tracking-[0.2em] font-black border border-white/10 hover:border-primary/40 text-white/60 hover:text-white rounded-xl transition-all duration-300 flex items-center"
          >
            Servicii
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-12 md:mt-20 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '500+', label: 'Mașini Tratate' },
            { value: '5★', label: 'Rating Google' },
            { value: '100%', label: 'Satisfacție' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-base md:text-xl font-black text-primary/80">{stat.value}</div>
              <div className="text-[8px] md:text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <ChevronDown className="text-white/15" size={20} />
      </motion.div>
    </section>
  );
}
