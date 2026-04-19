import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { value: 200, suffix: '+', label: 'Mașini Detaliate' },
  { value: 8, suffix: 'h', label: 'Timp Maxim de Lucru' },
  { value: 100, suffix: '%', label: 'Clienți Mulțumiți' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) { setCount(target); return; }
    let start = 0;
    const step = 16;
    const increment = target / (1400 / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target, shouldReduce]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const easeOut = [0.16, 1, 0.3, 1];

export default function Stats() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-20 md:py-28 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduce ? false : { opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: easeOut }}
              className="text-center md:text-left"
            >
              <div className="text-3xl sm:text-4xl md:text-6xl font-bold font-display text-white leading-none mb-3">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-white/25">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
