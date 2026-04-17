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

/* ═══════════════════════════════════════════
   MOBILE: Vertical scroll cards
   ═══════════════════════════════════════════ */
function MobileProcess() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-lg mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-primary to-transparent" />
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Procesul Nostru</span>
          </div>
          <h2 className="text-4xl font-black text-gradient uppercase tracking-tighter leading-[0.85] font-display">
            Etapele <br />
            <span className="text-gradient-red italic">Perfecțiunii</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-2 w-[18px] h-[18px] rounded-full border-2 border-primary/50 bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="glass-card p-6 rounded-2xl overflow-hidden">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                    <div className="absolute top-3 left-3 text-[10px] font-black text-primary/80 uppercase tracking-[0.3em] bg-background/60 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20">
                      Phase {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 font-display">{step.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   DESKTOP: Horizontal scroll
   ═══════════════════════════════════════════ */
function DesktopProcess() {
  const triggerRef = useRef<HTMLDivElement>(null);

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
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          start: 'top top',
          end: '+=3000',
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={triggerRef} className="relative">
        <div className="flex flex-nowrap w-[400vw]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step h-screen w-screen flex items-center justify-center px-12 lg:px-24 relative overflow-hidden"
            >
              {/* Giant background number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-white/[0.012] pointer-events-none select-none italic tracking-tighter font-display">
                {step.number}
              </div>

              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.04] blur-[120px] rounded-full pointer-events-none" />

              <div className="max-w-[1800px] w-full grid grid-cols-[55%_40%] gap-24 items-center relative z-10">
                {/* Text */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                      <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                        Phase {step.number}
                      </span>
                    </div>
                    <h2 className="text-6xl lg:text-8xl font-black text-gradient uppercase tracking-tighter leading-[0.9] mb-8 font-display">
                      {step.title}
                    </h2>
                    <p className="text-white/50 text-xl lg:text-2xl font-light leading-relaxed max-w-xl">
                      {step.description}
                    </p>

                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mt-12">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-[3px] rounded-full transition-all duration-500 ${
                            i === index ? 'w-12 bg-primary shadow-glow-sm' : 'w-6 bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ scale: 1.15, opacity: 0, rotateY: 15 }}
                  whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-video rounded-[3rem] overflow-hidden group"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
                  <div className="absolute inset-0 border border-white/[0.06] rounded-[3rem] pointer-events-none" />

                  {/* Corner glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 1024
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile ? <MobileProcess /> : <DesktopProcess />;
}
