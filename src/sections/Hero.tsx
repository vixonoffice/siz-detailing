import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, rotateX: 45 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y: y1, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-7xl pt-20"
      >
        <motion.div
          variants={itemVariants}
          className="mb-4 inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Excluzivitate & Performanță</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter mb-8 leading-[0.85] uppercase"
        >
          Siz <br />
          <span className="text-primary text-glow italic">Detailing</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="relative h-20 overflow-hidden mb-12"
        >
          <p className="text-xl md:text-3xl text-white/40 font-light tracking-widest uppercase">
            "Perfecțiunea are un nume."
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#contact">
            <MagneticButton variant="primary" className="h-16 px-12 text-lg uppercase tracking-widest">
              Rezervă Acum
            </MagneticButton>
          </a>
          <a href="#services">
            <MagneticButton variant="secondary" className="h-16 px-12 text-lg uppercase tracking-widest border-primary/20 hover:border-primary/50">
              Servicii Elite
            </MagneticButton>
          </a>
        </motion.div>
      </motion.div>

      {/* Background Text Mask Effect */}
      <motion.div 
        style={{ x: useTransform(scrollY, [0, 1000], [0, -500]) }}
        className="absolute bottom-20 left-0 whitespace-nowrap text-[20rem] font-black text-white/[0.02] pointer-events-none select-none z-0"
      >
        PROFESSIONAL DETAILING RM VALCEA PREMIUM CARE
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/20" size={32} />
      </div>
    </section>
  );
}
