import Link from "next/link";
import { redirect } from "next/navigation";
import { BookOpen, BrainCircuit, GraduationCap, MessageCircle, Sparkles } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) redirect("/login");

  const claims = data.claims;

  const email = typeof claims.email === "string" ? claims.email : "Student";
  const displayName = typeof claims.user_metadata?.full_name === "string"
    ? claims.user_metadata.full_name
    : email.split("@")[0] || "Student";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="EduAI home">
            <span className="rounded-xl bg-blue-600 p-2 text-white"><BrainCircuit size={22} /></span>
            <span className="text-xl font-extrabold tracking-tight">Edu<span className="text-blue-600">AI</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-slate-600 sm:block">{email}</span>
            <form action="/auth/signout" method="post">
              <button type="submit" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">Log out</button>
            </form>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Student dashboard</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Welcome, {displayName}</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Your learning space is ready. Choose a subject to start building your study plan.</p>

        <section className="mt-8 grid gap-5 md:grid-cols-3" aria-label="Learning overview">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 text-blue-700"><BookOpen size={20} /><h2 className="font-semibold text-slate-900">My subjects</h2></div>
            <p className="mt-4 text-sm leading-6 text-slate-600">You haven’t selected any subjects yet.</p>
            <Link href="/#subjects" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">Explore subjects <span aria-hidden="true">→</span></Link>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 text-blue-700"><GraduationCap size={20} /><h2 className="font-semibold text-slate-900">Learning progress</h2></div>
            <p className="mt-4 text-sm leading-6 text-slate-600">Progress will appear here as you study. No activity has been recorded yet.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 text-blue-700"><MessageCircle size={20} /><h2 className="font-semibold text-slate-900">Recent sessions</h2></div>
            <p className="mt-4 text-sm leading-6 text-slate-600">Your tutoring conversations will appear here when you start a session.</p>
          </article>
        </section>

        <section className="mt-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-7 text-white sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-100"><Sparkles size={18} /><span className="text-sm font-semibold">Your next step</span></div>
              <h2 className="mt-2 text-2xl font-bold">Choose what you’re studying</h2>
              <p className="mt-2 max-w-xl text-blue-100">Explore the Cambridge O-Level subjects available on EduAI.</p>
            </div>
            <Link href="/#subjects" className="inline-flex shrink-0 justify-center rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50">Browse subjects</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
