import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing%20interior.%20Trimit%20poze%20cu%20ma%C8%99ina.";
const ease = [0.16, 1, 0.3, 1];

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
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 64px)',
        paddingTop: '64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* Video BG */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
          autoPlay muted loop playsInline disablePictureInPicture
          poster="/images/home.webp"
          preload="none"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.15) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.85) 0%, transparent 60%)' }} />

      {/* Vertical red rule */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '3.5rem',
          top: '20%',
          height: '55%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, var(--red) 50%, transparent)',
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-14 pb-14 md:pb-24 pt-24 max-w-7xl mx-auto">

        {/* Mono label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8"
        >
          <span
            className="mono-label inline-flex items-center gap-2 px-3 py-1.5"
            style={{
              border: '1px solid rgba(255,45,45,0.2)',
              background: 'rgba(255,45,45,0.05)',
              color: 'rgba(255,45,45,0.85)',
            }}
          >
            <span
              style={{
                width: '5px', height: '5px',
                borderRadius: '50%',
                background: 'var(--red)',
                display: 'inline-block',
              }}
            />
            Rm. Vâlcea · Detailing Interior
          </span>
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            style={{
              fontFamily: '"Archivo Narrow", sans-serif',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.85,
            }}
            initial="hidden"
            animate="visible"
          >
            {/* SIZ */}
            <motion.span
              className="block"
              style={{
                fontSize: 'clamp(5rem, 16vw, 14rem)',
                background: 'linear-gradient(135deg, #ffffff 0%, #aaaaaa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 80px rgba(255,45,45,0.25)) drop-shadow(0 0 160px rgba(255,45,45,0.08))',
              }}
              initial={shouldReduce ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
            >
              Siz
            </motion.span>

            {/* DETAILING — faded */}
            <motion.span
              className="block"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 7.5rem)',
                color: 'rgba(250,250,247,0.12)',
                marginTop: '-0.05em',
              }}
              initial={shouldReduce ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.25 }}
            >
              Detailing
            </motion.span>
          </motion.h1>
        </div>

        {/* Descriptor */}
        <motion.div
          className="flex items-start gap-4 mt-6 mb-8"
          style={{ maxWidth: '32rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.42 }}
        >
          <div
            style={{
              width: '32px',
              height: '1px',
              background: 'var(--red)',
              marginTop: '11px',
              flexShrink: 0,
            }}
          />
          <p style={{ color: 'var(--ink-3)', fontSize: 'clamp(0.9rem, 3.5vw, 1rem)', lineHeight: 1.7 }}>
            Detailing interior profesional pentru mașini, furgoane și TIR-uri.
            Prețul se face pe loc după poze — fără surprize.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.52 }}
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Trimite Poze pe WhatsApp
            <ArrowRight size={14} />
          </motion.a>
          <motion.a
            href="#results"
            className="btn-secondary justify-center"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Vezi Rezultatele
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
