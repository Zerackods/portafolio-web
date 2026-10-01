import { Sprout } from 'lucide-react';
import { about } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const cards = [
    { label: 'Presentación', content: about.presentation },
    { label: 'Intereses', content: about.interests },
    { label: 'Objetivos profesionales', content: about.goals },
  ];

  return (
    <section id="sobre-mi" className="section-padding bg-cream-100">
      <div
        ref={ref}
        className={`container-max reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-14 flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-sm text-sage-500">01 / Sobre mí</span>
            <h2 className="mt-2 text-3xl text-charcoal md:text-4xl">
              Un poco sobre mi trayectoria
            </h2>
          </div>
          <Sprout className="hidden text-sage-300 sm:block" size={40} />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <article
              key={i}
              className="rounded-2xl bg-cream-50 p-7 shadow-soft transition-all duration-300 hover:shadow-soft-md"
            >
              <h3 className="mb-4 text-lg text-sage-700">{card.label}</h3>
              <p className="text-sm leading-relaxed text-charcoal-soft">
                {card.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
