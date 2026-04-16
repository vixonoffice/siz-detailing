import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Decontaminare',
    description: 'Eliminăm particulele feroase și impuritățile care distrug vopseaua.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1000&auto=format&fit=crop'
  },
  {
    number: '02',
    title: 'Corecție Vopsea',
    description: 'Polish profesional în mai multe etape pentru eliminarea zgârieturilor.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    number: '03',
    title: 'Protecție Ceramică',
    description: 'Aplicăm un strat nanotehnologic pentru un luciu de oglindă permanent.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    number: '04',
    title: 'Final Touch',
    description: 'Fiecare detaliu este inspectat sub lumini speciale pentru perfecțiune.',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.process-step');
      
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          start: "top top",
          end: "+=3000",
          invalidateOnRefresh: true,
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden bg-transparent">
      <div ref={triggerRef} className="relative">
        <div ref={sectionRef} className="flex flex-nowrap w-[400vw]">
          {steps.map((step, index) => (
            <div key={index} className="process-step h-screen w-screen flex items-center justify-center px-6 md:px-24 relative overflow-hidden group/step">
              {/* Background HUD Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-white/[0.01] pointer-events-none select-none italic tracking-tighter">
                {step.number}
              </div>

              <div className="max-w-[1800px] w-full grid grid-cols-1 lg:grid-cols-[55%_40%] gap-12 lg:gap-24 items-center relative z-10">
                <div className="space-y-12 relative">
                  {/* Subtle Glow behind text for readability */}
                  <div className="absolute -inset-20 bg-primary/5 blur-[100px] pointer-events-none" />
                  
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-[1px] bg-primary" />
                      <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Phase {step.number}</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 max-w-[1.2em] md:max-w-none">
                      {step.title}
                    </h2>
                    <p className="text-white/70 text-lg md:text-2xl font-light leading-relaxed max-w-xl drop-shadow-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 1.2, opacity: 0, rotateY: 20 }}
                  whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-square md:aspect-video rounded-[4rem] overflow-hidden group md:cursor-none"
                >
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
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
