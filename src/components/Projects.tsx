import { useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import ProjectDetail from './ProjectDetail';

type Filter = 'all' | 'web' | 'data';

const filterLabels: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'web', label: 'Desarrollo Web' },
  { value: 'data', label: 'Analista de Datos' },
];

export default function Projects() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const categoryLabel = (cat: Project['category']) =>
    cat === 'web' ? 'Desarrollo Web' : 'Data Analytics';

  return (
    <section id="proyectos" className="section-padding">
      <div
        ref={ref}
        className={`container-max reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-10">
          <span className="font-mono text-sm text-sage-500">04 / Proyectos</span>
          <h2 className="mt-2 text-3xl text-charcoal md:text-4xl">
            Trabajos seleccionados
          </h2>
          <p className="mt-3 max-w-xl text-sm text-charcoal-soft">
            Una colección de proyectos que reflejan mi experiencia en desarrollo
            web y análisis de datos.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {filterLabels.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === f.value
                  ? 'bg-sage-600 text-cream-50 shadow-soft dark:text-white'
                  : 'bg-cream-100 text-charcoal-soft hover:bg-sage-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-cream-100 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="192"
                />
                <span className="absolute left-3 top-3 rounded-md bg-cream-50/90 px-2.5 py-1 text-xs font-medium text-sage-700 backdrop-blur-sm">
                  {categoryLabel(project.category)}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg text-charcoal">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-soft">
                  {project.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, j) => (
                    <span
                      key={j}
                      className="rounded-md bg-wood-100 px-2 py-0.5 text-xs text-charcoal-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-600 transition-colors hover:text-sage-700"
                  >
                    Ver detalles
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                  {project.github && project.github !== '[URL DE GITHUB]' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-charcoal-soft transition-colors hover:text-sage-600"
                      aria-label={`GitHub de ${project.name}`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectDetail
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
