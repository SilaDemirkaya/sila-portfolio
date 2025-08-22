import Projects from "../../components/sections/Projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <Projects standalone />
    </main>
  );
}
