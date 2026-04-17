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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-6 md:py-8 px-6 md:px-12 lg:px-24',
        isScrolled
          ? 'py-4 md:py-5 bg-background/60 backdrop-blur-2xl border-b border-white/[0.04]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-baseline gap-1 group relative z-50">
          <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors font-display">
            Siz
          </span>
          <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 group-hover:shadow-glow-sm transition-all duration-300" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-14">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/25 hover:text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-primary/0 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="group relative px-8 py-3"
          >
            <div className="absolute inset-0 bg-white/[0.03] rounded-full border border-white/[0.08] group-hover:bg-primary group-hover:border-primary group-hover:shadow-glow transition-all duration-500" />
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors">
              Rezervă Acum
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col items-center justify-center"
          >
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/[0.06] blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white/60 hover:text-white transition-colors font-display"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.5 }}
                className="mt-4 w-64 text-center px-8 py-4 bg-primary text-white font-black uppercase tracking-wider rounded-xl shadow-glow text-sm"
              >
                Programează-te Acum
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
