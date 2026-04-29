import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const TILES = [
  {
    vid: '/videos/siz-v1.mp4',
    poster: '/images/munca1.webp',
    tags: [{ label: 'LIVE', live: true }, { label: '02:14' }, { label: 'REEL · 04/26' }],
    title: <>Detailing complet <span className="serif">— Sprinter</span></>,
    desc: '6 ore comprimate în 2 minute · sound on',
    large: true,
  },
  {
    vid: '/videos/siz-v2.mp4',
    poster: '/images/bord-curat.webp',
    tags: [{ label: '00:48' }],
    title: 'Bord cabină DAF',
    desc: 'Before / After timelapse',
  },
  {
    vid: '/videos/siz-v3.mp4',
    poster: '/images/munca2.webp',
    tags: [{ label: '00:32' }],
    title: 'La lucru',
    desc: 'Studio timelapse',
  },
  {
    vid: '/videos/siz-v4.mp4',
    poster: '/images/motor-curat.webp',
    tags: [{ label: '01:02' }],
    title: <>Motor <span className="serif">degresat</span></>,
    desc: '3 ore · pH neutru',
  },
  {
    vid: '/videos/siz-v5.mp4',
    poster: '/images/interior-curat.webp',
    tags: [{ label: '00:45' }],
    title: 'Interior Sprinter',
    desc: 'Injecție-extracție · complet',
  },
];

export default function Reel() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    const split = new SplitType(titleRef.current, { types: 'words', tagName: 'span' });
    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      stagger: 0.06,
      duration: 0.7,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
    });
    return () => split.revert();
  }, { scope: sectionRef });

  return (
    <section id="reel" className="velo-reel" ref={sectionRef}>
      <div className="velo-section-num" style={{ position: 'absolute', top: 32, right: 32, zIndex: 5 }}>
        <span className="red">[01]</span>&nbsp;/&nbsp;Reel
      </div>

      <div
        ref={titleRef}
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 24px)',
          left: 32,
          fontFamily: '"Archivo Narrow", sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(20px, 2vw, 28px)',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          display: 'none',
        }}
      />

      <div className="velo-reel-grid">
        {TILES.map((tile, i) => (
          <div
            key={i}
            className={`velo-reel-tile${tile.large ? '' : ''}`}
            style={tile.large ? { gridRow: 'span 2' } : {}}
          >
            <video
              className="vid-bg"
              src={tile.vid}
              poster={tile.poster}
              muted
              loop
              playsInline
              autoPlay
              preload="none"
            />
            <div className="frame-overlay" />

            <div className="reel-meta">
              {tile.tags.map((tag, j) => (
                <span key={j} className={`reel-tag${tag.live ? ' live' : ''}`}>
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="play-btn">▶</div>

            <div className="reel-foot">
              <div className="reel-title">{tile.title}</div>
              <div className="reel-desc">{tile.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
