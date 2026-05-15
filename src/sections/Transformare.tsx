import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useIsDesktop } from '../hooks/useIsDesktop';
import { useReducedMotion } from '../hooks/useReducedMotion';

const WA_LINK =
  'https://wa.me/40761639988?text=Bun%C4%83!%20Am%20v%C4%83zut%20transformarea%20Aveo%20%C8%99i%20vreau%20o%20ofert%C4%83%20pentru%20interiorul%20ma%C8%99inii%20mele.';

const ease = [0.16, 1, 0.3, 1] as const;

const STAGES = [
  { label: 'Mizeria', start: 0.0 },
  { label: 'Demontaj total', start: 0.25 },
  { label: 'Abur & frecat', start: 0.37 },
  { label: 'Remontaj', start: 0.70 },
  { label: 'Impecabil', start: 0.82 },
];

function stageFor(p: number): number {
  let s = 0;
  for (let i = 0; i < STAGES.length; i++) if (p >= STAGES[i].start) s = i;
  return s;
}

/* ── Shared copy block ─────────────────────────────────── */
function Copy({ active }: { active: number }) {
  return (
    <>
      <span className="mono-label block mb-4" style={{ color: 'rgba(255,45,45,0.7)' }}>
        Cazul Extrem · Studiu de Caz
      </span>

      <h2
        style={{
          fontFamily: '"Archivo Narrow", sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
          letterSpacing: '-0.03em',
          textTransform: 'uppercase',
          lineHeight: 0.88,
          color: 'var(--ink)',
        }}
      >
        De la mizerie
        <br />
        <span style={{ color: 'var(--red)' }}>la tablă goală.</span>
      </h2>

      <p
        className="mt-6 max-w-md"
        style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.7 }}
      >
        Un Chevrolet Aveo în care se adunase pământ în podea, an după an. L-am
        demontat complet — scaune scoase, totul adus la tabla goală — abur,
        injecție-extracție și frecat manual fiecare centimetru. Remontat la
        nivel de showroom.
      </p>

      <div className="mt-9 space-y-3">
        {STAGES.map((s, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <div key={s.label} className="flex items-center gap-3">
              <span
                className="mono-label"
                style={{
                  width: '1.5rem',
                  color: isActive
                    ? 'var(--red)'
                    : isDone
                    ? 'var(--ink-2)'
                    : 'var(--ink-3)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                style={{
                  fontFamily: '"Archivo Narrow", sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  fontSize: '1.1rem',
                  color: isActive
                    ? 'var(--ink)'
                    : isDone
                    ? 'var(--ink-2)'
                    : 'var(--ink-3)',
                  transition: 'color 0.35s ease',
                }}
              >
                {s.label}
              </span>
              <span
                className="flex-1 h-px"
                style={{
                  background: isActive ? 'var(--red)' : 'var(--line)',
                  opacity: isActive ? 0.6 : 1,
                  transition: 'background 0.35s ease',
                }}
              />
            </div>
          );
        })}
      </div>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex mt-9 w-full sm:w-auto justify-center items-center gap-2"
      >
        Vreau și eu o transformare
        <ArrowRight size={14} />
      </a>
    </>
  );
}

/* ── Vertical video frame (shared shell) ───────────────── */
function VideoFrame({
  children,
  stageLabel,
  barWidth,
}: {
  children: React.ReactNode;
  stageLabel: string;
  barWidth: string | MotionValue<string>;
}) {
  return (
    <div className="relative w-full max-w-[420px]" style={{ aspectRatio: '9 / 16' }}>
      <div
        className="absolute -inset-8 -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(255,45,45,0.22), transparent 65%)',
          filter: 'blur(34px)',
        }}
      />
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ border: '1px solid var(--line-2)', background: 'var(--bg-card)' }}
      >
        {children}

        <div
          className="absolute top-4 left-4 mono-label px-2.5 py-1.5 pointer-events-none"
          style={{
            background: 'rgba(10,10,10,0.78)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--red)',
            color: 'var(--red)',
          }}
        >
          {stageLabel}
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        >
          <motion.div
            className="h-full"
            style={{
              width: barWidth,
              background: 'var(--red)',
              boxShadow: '0 0 12px rgba(255,45,45,0.7)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: scroll-scrubbed scene ────────────────────── */
function ScrubScene({ reduced }: { reduced: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const durRef = useRef(0);
  const [stage, setStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  });
  const spring = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 26,
    restDelta: 0.0005,
  });
  // Scrubbing is user-driven, so it stays on under reduced-motion —
  // we only drop the inertial spring smoothing in that case.
  const driver = reduced ? scrollYProgress : spring;

  const barWidth = useTransform(driver, (v) => `${Math.min(v * 100, 100)}%`);
  const hintOpacity = useTransform(driver, [0, 0.04], [1, 0]);

  useMotionValueEvent(driver, 'change', (v) => {
    const next = stageFor(v);
    setStage((s) => (s === next ? s : next));
  });

  // Drive the playback head from a rAF loop that always chases the
  // latest scroll position (smooth) rather than serialising seeks.
  useEffect(() => {
    const v = videoRef.current;
    const wrap = wrapRef.current;
    if (!v || !wrap) return;
    let raf = 0;
    let active = false;
    let last = -1;
    const tick = () => {
      const d = durRef.current;
      if (d > 0 && v.readyState >= 2) {
        const t = Math.min(driver.get(), 0.999) * d;
        if (Math.abs(t - last) > d * 0.0015) {
          last = t;
          try {
            v.currentTime = t;
          } catch {
            /* noop */
          }
        }
      }
      if (active) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !active) {
          active = true;
          raf = requestAnimationFrame(tick);
        } else if (!e.isIntersecting) {
          active = false;
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: '60% 0px' }
    );
    io.observe(wrap);
    return () => {
      active = false;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [driver]);

  return (
    <section
      id="transformare"
      ref={wrapRef}
      style={{ height: '340vh', borderTop: '1px solid var(--line)' }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden px-6 md:px-14">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <Copy active={stage} />
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <VideoFrame stageLabel={STAGES[stage].label} barWidth={barWidth}>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/transformare-poster.jpg"
                  muted
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  onLoadedMetadata={(e) => {
                    const v = e.currentTarget;
                    durRef.current = v.duration || 0;
                    try {
                      v.pause();
                      v.currentTime = 0.001;
                    } catch {
                      /* noop */
                    }
                  }}
                >
                  <source src="/videos/transformare-scrub.mp4" type="video/mp4" />
                </video>

                <motion.div
                  className="absolute bottom-7 left-0 right-0 flex flex-col items-center gap-1 pointer-events-none"
                  style={{ opacity: hintOpacity, color: 'var(--ink-2)' }}
                >
                  <span className="mono-label">Derulează</span>
                  <ChevronDown size={16} />
                </motion.div>
              </VideoFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Mobile: autoplay loop scene ───────────────────────── */
function LoopScene() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stage, setStage] = useState(0);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    (v as HTMLVideoElement & { defaultMuted: boolean }).defaultMuted = true;

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.25 }
    );
    io.observe(v);

    const onTime = () => {
      if (!v.duration) return;
      const p = v.currentTime / v.duration;
      setPct(p * 100);
      const next = stageFor(p);
      setStage((s) => (s === next ? s : next));
    };
    v.addEventListener('timeupdate', onTime);
    return () => {
      io.disconnect();
      v.removeEventListener('timeupdate', onTime);
    };
  }, []);

  return (
    <section
      id="transformare"
      className="py-14 md:py-24 px-6 md:px-14"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-6"
          >
            <Copy active={stage} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-6 flex justify-center"
          >
            <VideoFrame stageLabel={STAGES[stage].label} barWidth={`${pct}%`}>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/images/transformare-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
              >
                <source src="/videos/transformare.mp4" type="video/mp4" />
              </video>
            </VideoFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Transformare() {
  const isDesktop = useIsDesktop();
  const reduced = useReducedMotion();
  return isDesktop ? <ScrubScene reduced={reduced} /> : <LoopScene />;
}
