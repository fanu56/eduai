import Link from "next/link";
import { CircleHelp } from "lucide-react";
import { DashboardPageHeader } from "@/components/dashboard/page-header";

const topics = [
  { title: "Which subjects are available?", text: "The catalog currently lists six Cambridge O-Level subjects. Subject selection will be connected to your account in a later milestone." },
  { title: "How does the free plan work?", text: "The planned free plan supports up to two subjects. Plan enforcement will be implemented with the student database." },
  { title: "When can I start tutoring?", text: "The AI tutor page is being prepared. It will open once the server-side AI service and usage protections are configured." },
];

export default function HelpPage() {
  return (
    <>
      <DashboardPageHeader eyebrow="Help" title="How EduAI is coming together" description="A quick guide to what is available in this early dashboard milestone." />
      <section className="max-w-3xl space-y-4" aria-label="Frequently asked questions">
        {topics.map(({ title, text }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><div className="flex gap-3"><span className="mt-0.5 text-blue-700"><CircleHelp size={18} /></span><div><h2 className="font-bold text-slate-950">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div></div></article>)}
      </section>
      <p className="mt-6 text-sm text-slate-600">Explore the <Link href="/dashboard/subjects" className="font-semibold text-blue-700 hover:underline">subject catalog</Link> or return to your <Link href="/dashboard" className="font-semibold text-blue-700 hover:underline">overview</Link>.</p>
    </>
  );
}
