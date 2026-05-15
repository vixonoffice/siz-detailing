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
    <footer
      className="relative overflow-hidden"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(255,45,45,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-14 pt-12 md:pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">

          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center mb-5 w-fit" aria-label="Siz Detailing — acasă">
              <img
                src="/images/sizlogo.png"
                alt="Siz Detailing Auto — Passion for Perfection"
                width={1245}
                height={447}
                style={{ height: '44px', width: 'auto', display: 'block' }}
              />
            </a>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--ink-3)' }}>
              Detailing interior profesional în Rm. Vâlcea. Curățare prin injecție-extracție pentru mașini, furgoane și TIR-uri.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-200"
              style={{
                color: '#25D366',
                fontFamily: '"Geist Mono", monospace',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                border: '1px solid rgba(37,211,102,0.2)',
                padding: '8px 14px',
              }}
            >
              <WhatsAppIcon />
              Cere ofertă
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="mono-label mb-5" style={{ color: 'var(--ink-3)' }}>Navigare</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm hover:text-[var(--ink)] transition-colors duration-200"
                  style={{ color: 'var(--ink-3)' }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mono-label mb-5" style={{ color: 'var(--ink-3)' }}>Contact</p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:0761639988"
                className="flex items-center gap-3 text-sm hover:text-[var(--ink)] transition-colors duration-200 group"
                style={{ color: 'var(--ink-3)' }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center group-hover:border-[var(--red)] transition-colors"
                  style={{ border: '1px solid var(--line)' }}
                >
                  <Phone size={13} style={{ color: 'var(--red)' }} />
                </div>
                <span>0761 639 988</span>
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--ink-3)' }}>
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0"
                  style={{ border: '1px solid var(--line)' }}
                >
                  <MapPin size={13} style={{ color: 'var(--red)' }} />
                </div>
                <span>Calea București 256, Rm. Vâlcea</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          <p className="mono-label" style={{ color: 'var(--ink-4)' }}>
            &copy; {new Date().getFullYear()} Siz Detailing — Toate drepturile rezervate
          </p>
          <a
            href="https://vixonlab.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 transition-colors duration-200 hover:text-[var(--ink)]"
            style={{
              fontFamily: '"Geist Mono", monospace',
              fontSize: '11px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}
          >
            <span>Website creat de</span>
            <span style={{ color: 'var(--red)', fontWeight: 700 }}>VixonLab</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
