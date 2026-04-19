import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing%20interior.%20Trimit%20poze%20cu%20ma%C8%99ina.";

const easeOut = [0.16, 1, 0.3, 1];

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    (v as HTMLVideoElement & { defaultMuted: boolean }).defaultMuted = true;
    v.play().catch(() => {});
    const forcePlay = () => { v.muted = true; v.play().catch(() => {}); };
    document.addEventListener('touchstart', forcePlay, { once: true, passive: true });
    document.addEventListener('scroll', forcePlay, { once: true, passive: true });
    return () => {
      document.removeEventListener('touchstart', forcePlay);
      document.removeEventListener('scroll', forcePlay);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden bg-[#0A0A0F]">

      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
          autoPlay muted loop playsInline disablePictureInPicture
          poster="/images/home.png"
          preload="auto"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/75 to-[#0A0A0F]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/80 via-transparent to-transparent" />

      {/* Red ambient glow — titlu */}
      <div className="absolute bottom-[30%] left-[5%] w-[40vw] h-[30vh] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Linie verticala rosie */}
      <div className="absolute left-6 md:left-14 top-[20%] h-[55%] w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-14 pb-12 md:pb-24 pt-36 max-w-7xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
            Rm. Vâlcea · Detailing Interior
          </span>
        </motion.div>

        {/* Titlu cu 3D word reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-display font-bold uppercase leading-[0.85] tracking-tighter"
            initial="hidden"
            animate="visible"
          >
            {/* SIZ — gradient text + glow rosu */}
            <motion.span
              className="block text-[5.5rem] sm:text-[7.5rem] md:text-[10rem] lg:text-[13rem]"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 60%, #888888 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
                filter: 'drop-shadow(0 0 60px rgba(220,38,38,0.3)) drop-shadow(0 0 120px rgba(220,38,38,0.12))',
              }}
              initial={shouldReduce ? false : { opacity: 0, y: 80, rotateX: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
            >
              Siz
            </motion.span>

            {/* DETAILING — estompat, 3D reveal cu delay */}
            <motion.span
              className="block text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] text-white/15 -mt-2 md:-mt-4"
              initial={shouldReduce ? false : { opacity: 0, y: 60, rotateX: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.28 }}
            >
              Detailing
            </motion.span>
          </motion.h1>
        </div>

        {/* Separator + descriere */}
        <motion.div
          className="flex items-start gap-4 mt-6 mb-8 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.45 }}
        >
          <div className="h-px w-10 bg-primary mt-3 shrink-0" />
          <p className="text-white/45 text-sm md:text-base leading-relaxed">
            Detailing interior profesional pentru mașini, furgoane și TIR-uri.
            Prețul se face pe loc după poze — fără surprize.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.55 }}
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Trimite Poze pe WhatsApp
            <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#results"
            className="btn-secondary justify-center"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Vezi Rezultatele
          </motion.a>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-6 md:right-14 flex flex-col items-center gap-2 text-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

    </section>
  );
}
