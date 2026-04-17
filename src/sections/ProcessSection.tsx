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
    if (!triggerRef.current) return;

    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.process-step');

      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: isMobile ? 0.5 : 1,
          // No snap on mobile — prevents the "replay" glitch on touch
          ...(isMobile ? {} : { snap: 1 / (horizontalSections.length - 1) }),
          start: 'top top',
          end: isMobile ? '+=2500' : '+=3000',
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div className="overflow-hidden bg-transparent">
      <div ref={triggerRef} className="relative">
        <div className="flex flex-nowrap w-[400vw]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step h-screen w-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden"
            >
              {/* Giant background number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] lg:text-[35vw] font-black text-white/[0.015] pointer-events-none select-none italic tracking-tighter">
                {step.number}
              </div>

              {/* ── Content: stack on mobile, side-by-side on desktop ── */}
              <div className="max-w-[1800px] w-full flex flex-col lg:grid lg:grid-cols-[55%_40%] gap-6 lg:gap-24 items-center relative z-10">
                {/* Text */}
                <div className="relative">
                  <div className="absolute -inset-20 bg-primary/5 blur-[100px] pointer-events-none" />
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 mb-4 lg:mb-6">
                      <div className="w-8 lg:w-12 h-[1px] bg-primary" />
                      <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                        Phase {step.number}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 lg:mb-8">
                      {step.title}
                    </h2>
                    <p className="text-white/60 text-base md:text-xl lg:text-2xl font-light leading-relaxed max-w-xl drop-shadow-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ scale: 1.2, opacity: 0, rotateY: 20 }}
                  whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full aspect-[16/10] lg:aspect-video rounded-2xl lg:rounded-[4rem] overflow-hidden group"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 border border-white/5 rounded-2xl lg:rounded-[4rem] pointer-events-none" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
