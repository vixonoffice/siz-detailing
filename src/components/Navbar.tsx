import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Acasă', href: '#home' },
  { name: 'Servicii', href: '#services' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Despre', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-10 px-12 md:px-24',
        isScrolled 
          ? 'py-6 bg-black/50 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Logo - Minimal & Aggressive */}
        <a href="#home" className="flex items-baseline gap-1 group">
          <span className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors">Siz</span>
          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
        </a>

        {/* Desktop Links - Minimalist Approach */}
        <div className="hidden lg:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="group relative px-10 py-4"
          >
            <div className="absolute inset-0 bg-white/5 rounded-full border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500" />
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white">Rezervă Acum</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 p-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs text-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20"
            >
              Programează-te Acum
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
