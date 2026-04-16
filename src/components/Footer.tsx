import { motion } from 'framer-motion';
import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react';

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
    <footer className="bg-[#020202] pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-32">
          {/* Column 1: Brand */}
          <div className="space-y-10">
            <a href="#home" className="text-4xl font-black tracking-tighter uppercase">
              <span className="text-primary">Siz</span> <span className="italic">Detailing</span>
            </a>
            <p className="text-white/30 text-lg leading-relaxed font-light">
              "Perfecțiunea are un nume." — Experiență de detailing auto la cel mai înalt nivel în Rm. Vâlcea.
            </p>
            <div className="flex gap-6">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: TikTokIcon, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all duration-500 group"
                >
                  <social.icon className="text-white/40 group-hover:text-white transition-colors w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-10">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Navigare</h3>
            <ul className="space-y-6">
              {['Acasă', 'Servicii', 'Galerie', 'Despre', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/40 hover:text-white transition-all text-sm uppercase tracking-widest font-bold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-10">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Contact</h3>
            <ul className="space-y-8">
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <a href="tel:0761639988" className="text-white/40 group-hover:text-white transition-all font-bold tracking-widest">0761 639 988</a>
              </li>
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <span className="text-white/40 group-hover:text-white transition-all font-bold tracking-widest">Rm. Vâlcea, România</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-black">
            © {currentYear} Siz Detailing. Toate drepturile rezervate.
          </div>
          <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-black">
            Crafted by{' '}
            <a 
              href="https://vixonlab.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              VixonLab
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
