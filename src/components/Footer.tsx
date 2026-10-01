import { Github, Linkedin, Mail } from 'lucide-react';
import { personal, links, navItems } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-sage-100 bg-cream-100 px-6 py-12 md:px-12">
      <div className="container-max">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-charcoal">{personal.name}</p>
            <p className="mt-1 text-sm text-charcoal-soft">{personal.role}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-charcoal-soft transition-colors hover:text-sage-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {links.github !== '[URL DE GITHUB]' && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-soft transition-colors hover:text-sage-600"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {links.linkedin !== '[URL DE LINKEDIN]' && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-soft transition-colors hover:text-sage-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            <a
              href={links.email}
              className="text-charcoal-soft transition-colors hover:text-sage-600"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-sage-100 pt-6 text-center">
          <p className="text-xs text-charcoal-soft">
            &copy; {new Date().getFullYear()} {personal.name}. Diseñado con
            cuidado.
          </p>
        </div>
      </div>
    </footer>
  );
}
