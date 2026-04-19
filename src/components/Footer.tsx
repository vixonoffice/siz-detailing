export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-14 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <span className="text-xl font-bold font-display uppercase text-white">Siz</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </a>

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
