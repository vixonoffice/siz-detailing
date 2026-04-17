import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Decontaminare',
    description: 'Eliminăm particulele feroase și impuritățile care distrug vopseaua.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1000&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Corecție Vopsea',
    description: 'Polish profesional în mai multe etape pentru eliminarea zgârieturilor.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'Protecție Ceramică',
    description: 'Aplicăm un strat nanotehnologic pentru un luciu de oglindă permanent.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Final Touch',
    description: 'Fiecare detaliu este inspectat sub lumini speciale pentru perfecțiune.',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function ProcessSection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 1024
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile || !triggerRef.current) return;

    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.process-step');

      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          start: 'top top',
          end: '+=3000',
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [isMobile]);

  /* ── MOBILE: vertical cards with dramatic reveal ── */
  if (isMobile) {
    return (
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
              Procesul Nostru
            </span>
          </div>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-[0.85]">
            Pași spre <br />
            <span className="text-primary italic">Perfecțiune</span>
          </h2>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Giant watermark number */}
              <div className="text-[12rem] font-black text-white/[0.02] absolute -top-20 -left-4 pointer-events-none select-none italic leading-none">
                {step.number}
              </div>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden mb-8 aspect-[4/3] border border-white/[0.06]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-[#010101]/20 to-transparent" />

                {/* Phase badge */}
                <div className="absolute top-5 left-5 flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                  <div className="w-6 h-[2px] bg-primary" />
                  <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em]">
                    Phase {step.number}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">
                  {step.title}
                </h3>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Accent line */}
              <div className="mt-8 w-20 h-[2px] bg-gradient-to-r from-primary to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  /* ── DESKTOP: horizontal scroll with GSAP ── */
  return (
    <div className="overflow-hidden bg-transparent">
      <div ref={triggerRef} className="relative">
        <div className="flex flex-nowrap w-[400vw]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step h-screen w-screen flex items-center justify-center px-24 relative overflow-hidden"
            >
              {/* Giant background number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-white/[0.015] pointer-events-none select-none italic tracking-tighter">
                {step.number}
              </div>

              <div className="max-w-[1800px] w-full grid grid-cols-[55%_40%] gap-24 items-center relative z-10">
                <div className="space-y-12 relative">
                  <div className="absolute -inset-20 bg-primary/5 blur-[100px] pointer-events-none" />
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-[1px] bg-primary" />
                      <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                        Phase {step.number}
                      </span>
                    </div>
                    <h2 className="text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                      {step.title}
                    </h2>
                    <p className="text-white/70 text-2xl font-light leading-relaxed max-w-xl drop-shadow-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 1.2, opacity: 0, rotateY: 20 }}
                  whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-video rounded-[4rem] overflow-hidden group"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 border border-white/5 rounded-[4rem] pointer-events-none" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
