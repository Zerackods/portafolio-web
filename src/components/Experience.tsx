import { Briefcase } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Experience() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="experiencia" className="section-padding">
      <div
        ref={ref}
        className={`container-max reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-14">
          <span className="font-mono text-sm text-sage-500">02 / Experiencia</span>
          <h2 className="mt-2 text-3xl text-charcoal md:text-4xl">
            Trayectoria profesional
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 h-full w-px bg-sage-200 md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-1.5 -translate-x-1/2 md:left-1/2">
                  <div className="h-3 w-3 rounded-full border-2 border-sage-500 bg-cream-50" />
                </div>

                {/* Spacer for desktop alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <article className="rounded-2xl border border-transparent bg-cream-100 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-soft-md dark:hover:border-sage-500 md:p-7">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-sage-100 p-2 text-sage-600">
                          <Briefcase size={18} />
                        </div>
                        <div>
                          <h3 className="text-lg text-charcoal">{exp.position}</h3>
                          <p className="text-sm text-sage-600">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    <p className="mb-3 text-xs font-mono text-charcoal-soft">
                      {exp.dates}
                    </p>

                    <p className="mb-4 text-sm leading-relaxed text-charcoal-soft">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-sage-500">
                        Responsabilidades
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((r, j) => (
                          <li
                            key={j}
                            className="flex gap-2 text-sm text-charcoal-soft"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sage-400" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="rounded-md bg-wood-100 px-2.5 py-1 text-xs text-charcoal-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
