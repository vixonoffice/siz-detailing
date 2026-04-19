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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Floating navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.04]' : ''
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-14 h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1.5 z-50">
            <span className="text-xl font-bold font-display text-white uppercase tracking-tight">Siz</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-widest text-white/35 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Cere Ofertă
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden z-50 w-9 h-9 flex items-center justify-center text-white cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#0A0A0F] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-3xl font-bold font-display uppercase tracking-tight text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="btn-primary mt-2 cursor-pointer"
            >
              Cere Ofertă
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
