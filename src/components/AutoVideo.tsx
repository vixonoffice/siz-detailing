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
    v.play().catch(() => {});

    const forcePlay = () => { v.muted = true; v.play().catch(() => {}); };
    document.addEventListener('touchstart', forcePlay, { once: true, passive: true });
    document.addEventListener('scroll', forcePlay, { once: true, passive: true });
    return () => {
      document.removeEventListener('touchstart', forcePlay);
      document.removeEventListener('scroll', forcePlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
