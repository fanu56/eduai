import Link from "next/link";
import { ArrowRight, BookOpen, BrainCircuit, ChartNoAxesCombined, ClipboardCheck, FileText, MessageSquareText, Sparkles } from "lucide-react";
import { DashboardPageHeader } from "@/components/dashboard/page-header";

const shortcuts = [
  { href: "/dashboard/subjects", title: "Explore subjects", text: "Browse the Cambridge O-Level catalog.", icon: BookOpen, tone: "bg-blue-50 text-blue-700" },
  { href: "/dashboard/tutor", title: "Meet your tutor", text: "Get guided help as the tutor experience comes online.", icon: BrainCircuit, tone: "bg-violet-50 text-violet-700" },
  { href: "/dashboard/practice", title: "Practice", text: "Build confidence with topic-based questions.", icon: ClipboardCheck, tone: "bg-emerald-50 text-emerald-700" },
  { href: "/dashboard/past-papers", title: "Past papers", text: "See the planned exam-preparation workspace.", icon: FileText, tone: "bg-amber-50 text-amber-700" },
];

export default function DashboardPage() {
  return (
    <>
      <DashboardPageHeader
        eyebrow="Student dashboard"
        title="Welcome back"
        description="Your O-Level learning space is ready. Start by exploring the subjects you’re studying."
      />

      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-700 to-indigo-800 p-6 text-white shadow-lg shadow-blue-950/10 sm:p-9">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-50"><Sparkles size={14} /> A clearer way to study</div>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">Let’s set up your learning plan.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">Choose the subjects that matter to you, then use EduAI to organize your practice and learning sessions.</p>
            <Link href="/dashboard/subjects" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50">
              Explore subjects <ArrowRight size={17} />
            </Link>
          </div>
          <div className="hidden h-36 w-36 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 md:flex">
            <GraduationGraphic />
          </div>
        </div>
      </section>

      <section className="mt-9" aria-labelledby="quick-links-heading">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Your workspace</p>
            <h2 id="quick-links-heading" className="mt-1 text-xl font-extrabold text-slate-950">Pick up where you want to begin</h2>
          </div>
          <Link href="/dashboard/progress" className="hidden items-center gap-1 text-sm font-semibold text-blue-700 hover:underline sm:inline-flex">View progress <ArrowRight size={15} /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {shortcuts.map(({ href, title, text, icon: Icon, tone }) => (
            <Link key={href} href={href} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone}`}><Icon size={20} /></span>
              <h3 className="mt-4 flex items-center justify-between font-bold text-slate-950">{title}<ArrowRight size={16} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" /></h3>
              <p className="mt-2 text-sm leading-5 text-slate-600">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
          <div className="flex items-center gap-3"><span className="rounded-xl bg-indigo-50 p-2.5 text-indigo-700"><ChartNoAxesCombined size={19} /></span><div><h2 className="font-bold text-slate-950">Learning progress</h2><p className="mt-0.5 text-xs text-slate-500">Based on your recorded activity</p></div></div>
          <div className="mt-6 rounded-xl bg-slate-50 px-5 py-6 text-center">
            <p className="text-sm font-semibold text-slate-800">Your progress will appear here as you study.</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">There’s no learning activity recorded yet.</p>
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
          <div className="flex items-center gap-3"><span className="rounded-xl bg-cyan-50 p-2.5 text-cyan-700"><MessageSquareText size={19} /></span><div><h2 className="font-bold text-slate-950">Recent sessions</h2><p className="mt-0.5 text-xs text-slate-500">Your tutoring history</p></div></div>
          <p className="mt-5 text-sm leading-6 text-slate-600">Your conversations will be listed here once you start a tutoring session.</p>
          <Link href="/dashboard/sessions" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">Open chat history <ArrowRight size={15} /></Link>
        </article>
      </section>
    </>
  );
}

function GraduationGraphic() {
  return <div aria-hidden="true" className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/10"><BookOpen size={47} strokeWidth={1.25} /><span className="absolute -right-1 -top-1 rounded-full bg-cyan-300 p-2 text-blue-950"><Sparkles size={15} /></span></div>;
}
