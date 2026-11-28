import { BookOpen, BrainCircuit, Calculator, FlaskConical, LineChart, Microscope, Sigma } from "lucide-react";

const subjects = [
  { name: "Mathematics", code: "4024", description: "Build confidence with number, algebra, geometry, and statistics.", icon: Sigma, tone: "bg-blue-50 text-blue-700" },
  { name: "Physics", code: "5054", description: "Explore forces, energy, waves, electricity, and matter.", icon: BrainCircuit, tone: "bg-violet-50 text-violet-700" },
  { name: "Chemistry", code: "5070", description: "Study particles, reactions, acids, metals, and organic chemistry.", icon: FlaskConical, tone: "bg-emerald-50 text-emerald-700" },
  { name: "Biology", code: "5090", description: "Learn about cells, organisms, ecology, and human biology.", icon: Microscope, tone: "bg-rose-50 text-rose-700" },
  { name: "Computer Science", code: "2210", description: "Understand computational thinking, systems, and programming.", icon: Calculator, tone: "bg-amber-50 text-amber-700" },
  { name: "Economics", code: "2281", description: "Explore markets, choices, development, and the wider economy.", icon: LineChart, tone: "bg-cyan-50 text-cyan-700" },
];

export function SubjectCatalog() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {subjects.map(({ name, code, description, icon: Icon, tone }) => (
        <article key={code} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone}`}><Icon size={22} /></span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{code}</span>
          </div>
          <h2 className="mt-5 text-lg font-bold text-slate-950">{name}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
            <BookOpen size={15} /> Cambridge O-Level
          </div>
        </article>
      ))}
    </div>
  );
}
