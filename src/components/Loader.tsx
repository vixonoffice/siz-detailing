import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

export default function Loader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Animate progress 0 → 100 over ~1.2s
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => setDone(true), 200);
        setTimeout(() => onComplete(), 900);
      }
    };

    const id = setTimeout(() => requestAnimationFrame(tick), 100);
    return () => clearTimeout(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'var(--bg)' }}
          exit={{ clipPath: 'inset(100% 0 0 0)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo */}
          <motion.div
            className="overflow-hidden mb-12"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span
              style={{
                fontFamily: '"Archivo Narrow", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
              }}
            >
              SIZ<span style={{ color: 'var(--red)' }}>·</span>DETAILING
            </span>
          </motion.div>

          {/* Progress bar */}
          <div
            className="relative overflow-hidden"
            style={{ width: 'min(320px, 80vw)', height: '1px', background: 'var(--line)' }}
          >
            <motion.div
              style={{
                position: 'absolute',
                left: 0, top: 0, bottom: 0,
                background: 'var(--red)',
                width: `${progress}%`,
              }}
              transition={{ duration: 0 }}
            />
          </div>

          {/* Counter */}
          <span
            className="mt-4 mono-label"
            style={{ color: 'var(--ink-3)' }}
          >
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
