import { Instagram, Facebook } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.02 1.63-.14.74-.07 1.53.22 2.22.4.96 1.21 1.76 2.18 2.12.74.28 1.55.33 2.33.15.74-.18 1.41-.57 1.92-1.14.54-.58.84-1.34.91-2.12.04-3.5.02-7.01.02-10.51z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <span className="text-xl font-bold font-display uppercase text-white">Siz</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </a>

        {/* Social */}
        <div className="flex items-center gap-3">
          {[
            { icon: Instagram, href: '#', label: 'Instagram' },
            { icon: Facebook, href: '#', label: 'Facebook' },
            { icon: TikTokIcon, href: '#', label: 'TikTok' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-colors duration-200"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

        {/* Credits */}
        <p className="text-white/20 text-xs uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Siz Detailing · Crafted by{' '}
          <a href="https://vixonlab.com" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors">
            VixonLab
          </a>
        </p>

      </div>
    </footer>
  );
}
