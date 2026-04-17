import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.02 1.63-.14.74-.07 1.53.22 2.22.4.96 1.21 1.76 2.18 2.12.74.28 1.55.33 2.33.15.74-.18 1.41-.57 1.92-1.14.54-.58.84-1.34.91-2.12.04-3.5.02-7.01.02-10.51z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 md:pt-32 pb-8 md:pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/[0.06] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-24">
          {/* Column 1: Brand */}
          <div className="space-y-6 md:space-y-8">
            <a href="#home" className="text-3xl md:text-4xl font-black tracking-tighter uppercase font-display inline-block">
              <span className="text-primary">Siz</span> <span className="italic text-gradient">Detailing</span>
            </a>
            <p className="text-white/20 text-sm md:text-base leading-relaxed font-light">
              "Perfecțiunea are un nume." — Experiență de detailing auto la cel mai înalt nivel în Rm. Vâlcea.
            </p>
            <div className="flex gap-3 md:gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: TikTokIcon, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:bg-primary hover:border-primary hover:shadow-glow-sm transition-all duration-500 group"
                >
                  <social.icon className="text-white/30 group-hover:text-white transition-colors w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Navigare</h3>
            <ul className="space-y-3 md:space-y-4">
              {['Acasă', 'Servicii', 'Galerie', 'Despre', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/25 hover:text-white/70 transition-all text-xs md:text-sm uppercase tracking-widest font-bold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Contact</h3>
            <ul className="space-y-5 md:space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-primary/10 transition-all">
                  <Phone className="text-primary w-4 h-4" />
                </div>
                <a href="tel:0761639988" className="text-white/30 group-hover:text-white/70 transition-all font-bold tracking-wider text-sm">
                  0761 639 988
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-primary/10 transition-all">
                  <MapPin className="text-primary w-4 h-4" />
                </div>
                <span className="text-white/30 group-hover:text-white/70 transition-all font-bold tracking-wider text-sm">
                  Rm. Vâlcea, România
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-white/15 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">
            &copy; {currentYear} Siz Detailing. Toate drepturile rezervate.
          </div>
          <div className="text-white/15 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">
            Crafted by{' '}
            <a
              href="https://vixonlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-primary transition-colors"
            >
              VixonLab
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
