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
    <div className="relative overflow-hidden border-y border-white/[0.05] bg-[#060608] py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />

      <div className="marquee-track flex gap-0">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/25 px-6 whitespace-nowrap">
              {item}
            </span>
            <span className="text-primary/40 text-xs">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
