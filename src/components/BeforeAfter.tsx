import { useState, useRef, useEffect } from 'react';

interface Props {
  before: string;
  after: string;
  num: string;
  title: string;
  meta: string;
}

export default function BeforeAfter({ before, after, num, title, meta }: Props) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [demoed, setDemoed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Auto-demo on first viewport entry
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !demoed) {
          setDemoed(true);
          setTimeout(() => setPos(20), 500);
          setTimeout(() => setPos(50), 1400);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [demoed]);

  const move = (clientX: number) => {
    if (!cardRef.current) return;
    const { left, width } = cardRef.current.getBoundingClientRect();
    const x = Math.max(2, Math.min(clientX - left, width - 2));
    setPos((x / width) * 100);
  };

  return (
    <div
      className="velo-ba-card"
      ref={cardRef}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={(e) => dragging && move(e.clientX)}
      onTouchStart={() => setDragging(true)}
      onTouchEnd={() => setDragging(false)}
      onTouchMove={(e) => {
        setDragging(true);
        move(e.touches[0].clientX);
      }}
    >
      <div className="stack">
        {/* Before (full) */}
        <img src={before} alt="Înainte" loading="lazy" />
        {/* After (clipped to pos%) */}
        <img
          src={after}
          alt="După"
          loading="lazy"
          style={{
            clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
            transition: dragging ? 'none' : 'clip-path 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </div>

      {/* Seam line */}
      <div
        className="seam"
        style={{
          left: `${pos}%`,
          transition: dragging ? 'none' : 'left 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <span className="seam-handle">↔</span>
      </div>

      <span className="ba-label ba-before">Înainte</span>
      <span className="ba-label ba-after">După</span>

      <div className="ba-foot">
        <div className="num">{num}</div>
        <div className="title">{title}</div>
        <div className="meta">{meta}</div>
      </div>
    </div>
  );
}
