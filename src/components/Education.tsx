import { useState } from 'react';
import { GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

const INITIAL_COUNT = 6;

export default function Education() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [expanded, setExpanded] = useState(false);

  const degrees = education.filter((e) => e.type === 'degree');
  const certifications = education.filter((e) => e.type === 'certification');

  const visibleCerts = expanded
    ? certifications
    : certifications.slice(0, INITIAL_COUNT);

  const hasMore = certifications.length > INITIAL_COUNT;

  return (
    <section id="educacion" className="section-padding bg-cream-100">
      <div
        ref={ref}
        className={`container-max reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-14">
          <span className="font-mono text-sm text-sage-500">05 / Educación</span>
          <h2 className="mt-2 text-3xl text-charcoal md:text-4xl">
            Formación y certificaciones
          </h2>
        </div>

        <div className="grid gap-10">
          {/* Degrees */}
          <div className="w-full">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-sage-100 p-2.5 text-sage-600">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl text-charcoal">Ingeniería</h3>
            </div>

            <div className="space-y-4">
              {degrees.map((item, i) => (
                <article
                  key={i}
                  className="rounded-2xl border border-transparent bg-cream-50 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-soft-md dark:hover:border-sage-500"
                >
                  <h4 className="text-base text-charcoal">{item.title}</h4>
                  <p className="mt-1 text-sm text-sage-600">{item.institution}</p>
                  <p className="mt-1 text-xs font-mono text-charcoal-soft">
                    {item.dates}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="w-full">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-wood-100 p-2.5 text-sage-600">
                <Award size={20} />
              </div>
              <h3 className="text-xl text-charcoal">Certificaciones</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCerts.map((item, i) => (
                <article
                  key={i}
                  className={`rounded-2xl border border-transparent bg-cream-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-soft-md dark:hover:border-sage-500 ${
                    expanded || i < INITIAL_COUNT
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <h4 className="text-base text-charcoal">{item.title}</h4>
                  <p className="mt-1 text-sm text-sage-600">{item.institution}</p>
                  <p className="mt-1 text-xs font-mono text-charcoal-soft">
                    {item.dates}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setExpanded((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-xl bg-sage-600 px-6 py-3 text-sm font-medium text-cream-50 transition-all dark:text-white duration-300 hover:bg-sage-700 hover:shadow-soft-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600"
                >
                  {expanded ? (
                    <>
                      Mostrar menos
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Ver todos los certificados
                      <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
