import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { value: 200, suffix: '+', label: 'Mașini Detaliate' },
  { value: 0, suffix: '', label: 'Compromisuri' },
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

const ease = [0.16, 1, 0.3, 1];

export default function Stats() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="px-6 md:px-14 py-14 md:py-24"
      style={{ borderBottom: '1px solid var(--line)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="text-center md:text-left"
            >
              <div
                className="leading-none mb-3"
                style={{
                  fontFamily: '"Archivo Narrow", sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                  letterSpacing: '-0.04em',
                  color: 'var(--ink)',
                }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ color: 'var(--ink-4)', fontFamily: '"Geist Mono", monospace', fontSize: '10px', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: '4px' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
