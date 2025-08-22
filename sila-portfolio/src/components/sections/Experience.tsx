import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experience.map((e) => (
          <div key={e.role} className="card p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <div className="text-sm text-[var(--muted)]">{e.org} • {e.place}</div>
              </div>
              <div className="text-sm text-[var(--muted)]">{e.timeframe}</div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-[var(--muted)]">
              {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
