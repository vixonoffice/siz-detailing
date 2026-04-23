import { Phone, MapPin } from 'lucide-react';

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing%20interior.";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { name: 'Servicii', href: '#services' },
  { name: 'Rezultate', href: '#results' },
  { name: 'Despre', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-14 pt-12 md:pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">

          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-1.5 mb-5">
              <span className="text-2xl font-bold font-display uppercase text-white tracking-tight">Siz</span>
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-2xl font-bold font-display uppercase text-white/20 tracking-tight">Detailing</span>
            </a>
            <p className="text-white/25 text-sm leading-relaxed mb-5">
              Detailing interior profesional în Rm. Vâlcea. Curățare prin injecție-extracție pentru mașini, furgoane și TIR-uri.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#25D366] border border-[#25D366]/20 px-4 py-2.5 rounded-xl hover:bg-[#25D366]/10 transition-colors duration-200"
            >
              <WhatsAppIcon />
              Cere ofertă
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">Navigare</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/30 hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:0761639988"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                <span>0761 639 988</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <div className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span>Calea București 256, Rm. Vâlcea</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Siz Detailing — Toate drepturile rezervate
          </p>
          <a
            href="https://vixonlab.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/30 hover:text-white transition-colors duration-200"
          >
            <span>Website creat de</span>
            <span className="text-primary group-hover:text-primary/80 font-bold transition-colors">VixonLab</span>
            <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
