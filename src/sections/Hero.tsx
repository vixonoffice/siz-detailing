import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing%20interior.%20Trimit%20poze%20cu%20ma%C8%99ina.";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image — mai vizibila */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home.png')",
          opacity: 0.28,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Gradient overlay — puternic jos, usor sus */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />

      {/* Linie rosie verticala — element design */}
      <div className="absolute left-6 md:left-10 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

      {/* Content — left aligned */}
      <div className="relative z-10 w-full px-6 md:px-16 pb-20 pt-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Rm. Vâlcea · Detailing Interior
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold uppercase leading-[0.88] tracking-tighter mb-6">
            <span className="block text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] text-white">
              Siz
            </span>
            <span className="block text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] text-white/20">
              Detailing
            </span>
          </h1>

          {/* Linie separator */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <p className="text-white/50 text-sm md:text-base font-body leading-relaxed max-w-md">
              Detailing interior profesional pentru mașini, furgoane și TIR-uri.
              Prețul se face pe loc după poze — fără surprize.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm w-full sm:w-auto justify-center">
              Trimite Poze pe WhatsApp
              <ArrowRight size={16} />
            </a>
            <a href="#results" className="btn-secondary text-sm w-full sm:w-auto justify-center">
              Vezi Rezultatele
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-10 text-white/20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] rotate-90 origin-center mb-2">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
