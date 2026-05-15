import { useEffect, useRef } from 'react';

interface AutoVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AutoVideo({ src, poster, className = '', style }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    (v as HTMLVideoElement & { defaultMuted: boolean }).defaultMuted = true;

    // Stage 1 — start buffering ~600px BEFORE the tile scrolls into view,
    // so the clip is ready by the time it's actually on screen.
    const preloader = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.preload = 'auto';
          v.load();
          preloader.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    preloader.observe(v);

    // Stage 2 — only play while genuinely visible (no off-screen CPU drain).
    const player = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.1 }
    );
    player.observe(v);

    return () => {
      preloader.disconnect();
      player.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      poster={poster}
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
