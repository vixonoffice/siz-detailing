import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Servicii', href: '#services' },
  { name: 'Rezultate', href: '#results' },
  { name: 'Despre', href: '#about' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-background/90 border-b border-white/[0.06] md:[backdrop-filter:blur(12px)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 z-50">
          <span className="text-2xl font-bold font-display text-white uppercase tracking-tight">
            Siz
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-0.5" />
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5 px-5"
          >
            Cere Ofertă
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden z-50 w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold font-display uppercase tracking-tight text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              Cere Ofertă Gratuită
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
