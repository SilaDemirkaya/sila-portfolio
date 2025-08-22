import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-12 pb-8">
      <div className="inline-flex items-center gap-2 text-sm rounded-full px-3 py-1 mb-4
        border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-sm">
        <MapPin className="h-4 w-4 text-[var(--accent)]" />
        Calgary, AB
    </div>


      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Sila Demirkaya</h1>
      <p className="mt-2 text-xl text-[var(--muted)]">Software Developer</p>

      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Full-stack developer focused on React/Next.js, Node.js and PostgreSQL.
        I like shipping clean UI, strong UX, and secure, production-ready features.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href="#projects" className="btn">See Projects</a>
        <a href="/SilaDemirkayaResumeJuly.pdf" className="btn-outline">View Resume</a>
      </div>
    </section>
  );
}
