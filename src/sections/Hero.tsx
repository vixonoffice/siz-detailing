import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing%20interior.%20Trimit%20poze%20cu%20ma%C8%99ina.";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/brand.jpeg')",
          opacity: 0.12,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Red ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Rm. Vâlcea · Detailing Interior
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold font-display uppercase leading-none tracking-tighter mb-6">
          <span className="text-white">Siz</span>
          <br />
          <span className="text-primary">Detailing</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-white/50 font-body mb-10 max-w-xl mx-auto leading-relaxed">
          Detailing interior profesional pentru mașini, furgoane și TIR-uri.
          Prețul se face pe loc după poze — fără surprize.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Trimite Poze pe WhatsApp
            <ArrowRight size={16} />
          </a>
          <a href="#results" className="btn-secondary text-sm">
            Vezi Rezultatele
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
