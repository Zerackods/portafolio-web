import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import { personal, links } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-5%] h-[400px] w-[400px] rounded-full bg-sage-100/60 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[300px] w-[300px] rounded-full bg-wood-100/50 blur-3xl" />
      </div>

      <div className="container-max w-full px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Text */}
          <div className="animate-fade-up">
            <span className="inline-block rounded-full bg-sage-100 px-4 py-1.5 text-xs font-medium tracking-wide text-sage-700">
              {personal.tagline}
            </span>

            <h1 className="mt-6 text-4xl leading-tight text-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
              {personal.name}
            </h1>

            <p className="mt-3 font-serif text-xl text-sage-600 md:text-2xl">
              {personal.role}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-soft md:text-lg">
              {personal.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-xl bg-sage-600 px-6 py-3 text-sm font-medium text-cream-50 transition-all dark:text-white duration-300 hover:bg-sage-700 hover:shadow-soft-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600"
              >
                Ver proyectos
              </a>
              <a
                href={personal.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-sage-300 bg-transparent px-6 py-3 text-sm font-medium text-sage-700 transition-all duration-300 hover:bg-sage-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              {links.github !== '[URL DE GITHUB]' && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-soft transition-colors hover:text-sage-600"
                  aria-label="GitHub"
                >
                  <Github size={22} />
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
                  <Linkedin size={22} />
                </a>
              )}
              <a
                href={links.email}
                className="text-charcoal-soft transition-colors hover:text-sage-600"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 -m-4 rounded-full border border-sage-200" />
              <div className="absolute inset-0 -m-8 rounded-full border border-sage-100" />
              <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-cream-100 shadow-soft-lg sm:h-72 sm:w-72 md:h-80 md:w-80">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="h-full w-full object-cover"
                  loading="eager"
                  width="320"
                  height="320"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center lg:mt-8">
          <a
            href="#sobre-mi"
            className="flex flex-col items-center gap-2 text-xs text-charcoal-soft transition-colors hover:text-sage-600"
            aria-label="Desplazarse hacia abajo"
          >
            <span className="tracking-widest uppercase">Desliza</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
