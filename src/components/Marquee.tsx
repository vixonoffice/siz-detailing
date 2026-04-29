const items = [
  'Curățare Mochetă',
  'Scaune & Banchetă',
  'Degresare Plastice',
  'Detailing Motor',
  'Curățare Portbagaj',
  'Curățare Chedere',
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        background: 'rgba(255,45,45,0.04)',
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }}
      />

      <div className="marquee-track flex gap-0">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span
              className="mono-label px-8 whitespace-nowrap"
              style={{ color: 'var(--ink-3)' }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--red)', opacity: 0.6, fontSize: '10px' }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
