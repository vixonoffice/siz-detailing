import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 200, suffix: '+', label: 'Mașini Detaliate' },
  { value: 8, suffix: 'h', label: 'Timp Maxim de Lucru' },
  { value: 100, suffix: '%', label: 'Clienți Mulțumiți' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-14 bg-[#060608]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-3xl sm:text-4xl md:text-6xl font-bold font-display text-white leading-none mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white/25">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
