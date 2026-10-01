import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { links, personal } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('form-name', 'contacto');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => setError(false), 6000);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: links.email.replace('mailto:', ''), href: links.email },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: links.linkedin === '[URL DE LINKEDIN]' ? '[PENDIENTE]' : 'Ver perfil',
      href: links.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: links.github === '[URL DE GITHUB]' ? '[PENDIENTE]' : 'Ver perfil',
      href: links.github,
    },
  ];

  return (
    <section id="contacto" className="section-padding">
      <div
        ref={ref}
        className={`container-max reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-14">
          <span className="font-mono text-sm text-sage-500">06 / Contacto</span>
          <h2 className="mt-2 text-3xl text-charcoal md:text-4xl">
            Hablemos
          </h2>
          <p className="mt-3 max-w-lg text-sm text-charcoal-soft">
            ¿Interesado en colaborar o tienes una oportunidad? Estoy abierto a
            conversar sobre proyectos de QA, análisis de datos y desarrollo web.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-3">
            {contactLinks.map((c, i) => {
              const Icon = c.icon;
              const isPlaceholder =
                c.href.startsWith('[') || c.href.startsWith('mailto:');
              return (
                <a
                  key={i}
                  href={c.href}
                  {...(!isPlaceholder && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group flex items-center gap-4 rounded-2xl bg-cream-100 p-5 shadow-soft transition-all duration-300 hover:shadow-soft-md"
                >
                  <div className="rounded-xl bg-sage-100 p-3 text-sage-600 transition-colors group-hover:bg-sage-600 group-hover:text-cream-50 dark:group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-sage-500">
                      {c.label}
                    </p>
                    <p className="text-sm text-charcoal">{c.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Form */}
          <form
            name="contacto"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="rounded-2xl bg-cream-100 p-6 shadow-soft md:p-8"
          >
            <div className="space-y-4">
              <input type="hidden" name="form-name" value="contacto" />
              <p className="hidden">
                <label>
                  No llenes este campo: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-sage-500"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-sage-200 bg-cream-50 px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-sage-400 focus:ring-1 focus:ring-sage-400"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-sage-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-sage-200 bg-cream-50 px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-sage-400 focus:ring-1 focus:ring-sage-400"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-sage-500"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-sage-200 bg-cream-50 px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-sage-400 focus:ring-1 focus:ring-sage-400"
                  placeholder="Cuéntame en qué puedo ayudarte..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sage-600 px-5 py-3 text-sm font-medium text-cream-50 transition-all dark:text-white duration-300 hover:bg-sage-700 hover:shadow-soft-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sent ? (
                  '¡Mensaje enviado!'
                ) : submitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream-50 border-t-transparent dark:border-white dark:border-t-transparent" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensaje
                  </>
                )}
              </button>
              {sent && (
                <p className="text-center text-xs text-sage-600">
                  Gracias por tu mensaje. Te responderé pronto.
                </p>
              )}
              {error && (
                <p className="text-center text-xs text-red-600">
                  No se pudo enviar el mensaje. Inténtalo de nuevo.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
