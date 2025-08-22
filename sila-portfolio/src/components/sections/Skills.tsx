import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="card p-6">
            <h3 className="font-semibold mb-3">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
