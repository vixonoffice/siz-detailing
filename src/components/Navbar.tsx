import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const navLinks = [
  { name: 'Servicii', href: '#services' },
  { name: 'Rezultate', href: '#results' },
  { name: 'Despre', href: '#about' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const WA_LINK = "https://wa.me/40761639988?text=Bun%C4%83!%20A%C8%99%20vrea%20o%20ofert%C4%83%20pentru%20detailing.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="max-w-7xl mx-auto px-6 md:px-14"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            height: '64px',
          }}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center z-50 w-fit" aria-label="Siz Detailing — acasă">
            <img
              src="/images/sizlogo.png"
              alt="Siz Detailing Auto — Passion for Perfection"
              width={1245}
              height={447}
              style={{ height: '38px', width: 'auto', display: 'block' }}
            />
          </a>

          {/* Desktop center links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group"
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  padding: '4px 0',
                }}
              >
                {link.name}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0, left: 0,
                    height: '1px',
                    background: 'var(--red)',
                    width: 0,
                    transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  className="group-hover:!w-full"
                />
              </a>
            ))}
          </nav>

          {/* Desktop right — status + CTA */}
          <div className="hidden md:flex items-center justify-end gap-4">
            <span className="status-dot">
              <span className="dot" />
              Disponibil
            </span>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Cere Ofertă
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex justify-end">
            <button
              className="z-50 w-9 h-9 flex items-center justify-center cursor-pointer"
              style={{ color: 'var(--ink)' }}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ background: 'var(--bg)' }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center cursor-pointer"
              style={{ color: 'var(--ink-3)' }}
              aria-label="Închide meniu"
            >
              <X size={24} />
            </button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  fontFamily: '"Archivo Narrow", sans-serif',
                  fontWeight: 700,
                  fontSize: '2.5rem',
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-2)',
                }}
                className="hover:!text-[var(--ink)] transition-colors cursor-pointer"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href={WA_LINK}
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
