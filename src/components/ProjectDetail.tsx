import { useEffect } from 'react';
import { X, Github, Target, Workflow, TrendingUp, CheckCircle } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const categoryLabel = project.category === 'web' ? 'Desarrollo Web' : 'Data Analytics';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-charcoal/40 backdrop-blur-sm dark:bg-black/60 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-3xl rounded-2xl bg-cream-50 shadow-soft-lg animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-lg bg-cream-50/90 p-2 text-charcoal-soft backdrop-blur-sm transition-colors hover:bg-sage-100 hover:text-sage-700"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {/* Hero image */}
        <div className="relative h-56 overflow-hidden rounded-t-2xl sm:h-72">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent dark:from-black/70" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="rounded-md bg-cream-50/90 px-2.5 py-1 text-xs font-medium text-sage-700 backdrop-blur-sm">
              {categoryLabel}
            </span>
            <h2 className="mt-2 text-2xl text-cream-50 drop-shadow-sm dark:text-white sm:text-3xl">
              {project.name}
            </h2>
          </div>
        </div>

        <div className="space-y-8 p-6 sm:p-8">
          {/* Description */}
          <div>
            <p className="text-sm leading-relaxed text-charcoal-soft">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-sage-500">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, j) => (
                <span
                  key={j}
                  className="rounded-lg bg-wood-100 px-3 py-1.5 text-xs text-charcoal-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Objective */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-lg text-charcoal">
              <Target size={18} className="text-sage-500" />
              Objetivo
            </h3>
            <p className="text-sm leading-relaxed text-charcoal-soft">
              {project.objective}
            </p>
          </div>

          {/* Process */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-lg text-charcoal">
              <Workflow size={18} className="text-sage-500" />
              Proceso
            </h3>
            <ol className="space-y-3">
              {project.process.map((step, j) => (
                <li key={j} className="flex gap-3 text-sm text-charcoal-soft">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage-100 text-xs font-medium text-sage-700">
                    {j + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Results */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-lg text-charcoal">
              <TrendingUp size={18} className="text-sage-500" />
              Resultados
            </h3>
            <ul className="space-y-2">
              {project.results.map((result, j) => (
                <li key={j} className="flex gap-2 text-sm text-charcoal-soft">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-sage-500" />
                  <span className="leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-sage-500">
                Galería
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.gallery.map((img, j) => (
                  <div
                    key={j}
                    className="overflow-hidden rounded-xl border border-sage-100"
                  >
                    <img
                      src={img}
                      alt={`${project.name} — imagen ${j + 1}`}
                      className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conclusion */}
          <div>
            <h3 className="mb-3 text-lg text-charcoal">Conclusiones</h3>
            <p className="text-sm leading-relaxed text-charcoal-soft">
              {project.conclusion}
            </p>
          </div>

          {/* GitHub link */}
          {project.github && project.github !== '[URL DE GITHUB]' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-charcoal px-5 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-sage-700 dark:bg-sage-600 dark:text-white dark:hover:bg-sage-700"
            >
              <Github size={18} />
              Ver en GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
