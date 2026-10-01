import {
  ShieldCheck,
  BarChart3,
  Code,
  Wrench,
  Database,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  'bar-chart-3': BarChart3,
  code: Code,
  wrench: Wrench,
  database: Database,
};

export default function Skills() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="habilidades" className="section-padding bg-cream-100">
      <div
        ref={ref}
        className={`container-max reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-14">
          <span className="font-mono text-sm text-sage-500">03 / Habilidades</span>
          <h2 className="mt-2 text-3xl text-charcoal md:text-4xl">
            Áreas de especialización
          </h2>
          <p className="mt-3 max-w-xl text-sm text-charcoal-soft">
            Una visión general de las herramientas y competencias que utilizo
            en mi trabajo diario.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code;
            return (
              <article
                key={i}
                className="group rounded-2xl bg-cream-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-sage-100 p-2.5 text-sage-600 transition-colors group-hover:bg-sage-600 group-hover:text-cream-50 dark:group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg text-charcoal">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="rounded-lg border border-sage-200 bg-cream-100 px-3 py-1.5 text-xs font-medium text-charcoal-light transition-colors hover:border-sage-300 hover:bg-sage-50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
