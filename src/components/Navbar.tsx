import { useEffect, useState } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { navItems, personal } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="font-serif text-lg text-charcoal transition-colors hover:text-sage-600"
        >
          {personal.name.split(' ')[0] || '[NOMBRE]'}
          <span className="text-sage-500">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.slice(1).map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-sm text-charcoal-soft transition-colors hover:text-sage-600"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-charcoal transition-colors hover:bg-sage-100"
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href={personal.cvUrl}
            download
            className="hidden items-center gap-2 rounded-lg bg-sage-600 px-4 py-2 text-sm font-medium text-cream-50 transition-all dark:text-white duration-300 hover:bg-sage-700 hover:shadow-soft-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600 sm:inline-flex"
          >
            <Download size={15} />
            CV
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-lg p-2 text-charcoal transition-colors hover:bg-sage-100 lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-2xl bg-cream-100 p-4 shadow-soft-md">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-charcoal transition-colors hover:bg-sage-100"
                  >
                    {item.number && (
                      <span className="text-xs font-mono text-sage-500">
                        {item.number}
                      </span>
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={personal.cvUrl}
                  download
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-lg bg-sage-600 px-4 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-sage-700 dark:text-white"
                >
                  <Download size={16} />
                  Descargar CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
