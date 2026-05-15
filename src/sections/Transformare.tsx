import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WA_LINK =
  'https://wa.me/40761639988?text=Bun%C4%83!%20Am%20v%C4%83zut%20transformarea%20Aveo%20%C8%99i%20vreau%20o%20ofert%C4%83%20pentru%20interiorul%20ma%C8%99inii%20mele.';

const ease = [0.16, 1, 0.3, 1] as const;

const STAGES = [
  { label: 'Starea inițială', start: 0.0 },
  { label: 'Demontaj total', start: 0.25 },
  { label: 'Curățare în profunzime', start: 0.37 },
  { label: 'Remontaj', start: 0.70 },
  { label: 'Impecabil', start: 0.82 },
];

function stageFor(p: number): number {
  let s = 0;
  for (let i = 0; i < STAGES.length; i++) if (p >= STAGES[i].start) s = i;
  return s;
}

export default function Transformare() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stage, setStage] = useState(0);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    (v as HTMLVideoElement & { defaultMuted: boolean }).defaultMuted = true;

    const tryPlay = () => v.play().catch(() => {});
    tryPlay();

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? tryPlay() : v.pause()),
      { threshold: 0.15 }
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
    v.addEventListener('loadeddata', tryPlay);

    return () => {
      io.disconnect();
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadeddata', tryPlay);
    };
  }, []);

  return (
    <section
      id="transformare"
      className="py-14 md:py-24 px-6 md:px-14"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-6"
          >
            <span
              className="mono-label block mb-4"
              style={{ color: 'rgba(255,45,45,0.7)' }}
            >
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
              Un Chevrolet Aveo în care se adunase pământ în podea, an după an.
              L-am demontat complet — scaune scoase, totul adus la tabla goală —
              abur, injecție-extracție și frecat manual fiecare centimetru.
              Remontat la nivel de showroom.
            </p>

            <div className="mt-9 space-y-3">
              {STAGES.map((s, i) => {
                const isActive = i === stage;
                const isDone = i < stage;
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
          </motion.div>

          {/* Reel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-6 flex justify-center"
          >
            <div
              className="relative w-full max-w-[420px]"
              style={{ aspectRatio: '9 / 16' }}
            >
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
                style={{
                  border: '1px solid var(--line-2)',
                  background: 'var(--bg-card)',
                }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/transformare-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                >
                  <source
                    src="/videos/transformare-scrub-3.mp4"
                    type="video/mp4"
                  />
                </video>

                <div
                  className="absolute top-4 left-4 mono-label px-2.5 py-1.5 pointer-events-none"
                  style={{
                    background: 'rgba(10,10,10,0.78)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--red)',
                    color: 'var(--red)',
                  }}
                >
                  {STAGES[stage].label}
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <div
                    className="h-full"
                    style={{
                      width: `${pct}%`,
                      background: 'var(--red)',
                      boxShadow: '0 0 12px rgba(255,45,45,0.7)',
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
