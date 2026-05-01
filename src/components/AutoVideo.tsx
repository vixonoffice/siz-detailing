import { useEffect, useRef } from 'react';

interface AutoVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AutoVideo({ src, className = '', style }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    (v as HTMLVideoElement & { defaultMuted: boolean }).defaultMuted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(v);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="none"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
