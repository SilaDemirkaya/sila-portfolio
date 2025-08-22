import { projects } from "@/lib/content";

export default function Projects({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="projects" className={standalone ? "" : "py-10"}>
      {!standalone && <h2 className="text-3xl font-bold mb-6">Projects</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.name} className="card p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="text-sm text-[var(--muted)]">{p.timeframe}</div>
              </div>
              {p.href && (
                <a href={p.href} className="text-sm underline opacity-80 hover:opacity-100">View</a>
              )}
            </div>

            <ul className="mt-3 list-disc pl-5 space-y-2 text-[var(--muted)]">
              {p.desc.map((d, i) => <li key={i}>{d}</li>)}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
