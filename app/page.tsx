
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  GraduationCap,
  Menu,
  MessageCircle,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

const subjects = [
  { name: "Mathematics", code: "4024", icon: "∑", color: "bg-blue-50 text-blue-600" },
  { name: "Physics", code: "5054", icon: "⚛", color: "bg-purple-50 text-purple-600" },
  { name: "Chemistry", code: "5070", icon: "⚗", color: "bg-green-50 text-green-600" },
  { name: "Biology", code: "5090", icon: "🧬", color: "bg-pink-50 text-pink-600" },
  { name: "Computer Science", code: "2210", icon: "</>", color: "bg-orange-50 text-orange-600" },
  { name: "Economics", code: "2281", icon: "📊", color: "bg-cyan-50 text-cyan-600" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <BrainCircuit size={25} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              Edu<span className="text-blue-600">AI</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="#home" className="hover:text-blue-600">Home</Link>
            <Link href="#subjects" className="hover:text-blue-600">Subjects</Link>
            <Link href="#features" className="hover:text-blue-600">Features</Link>
            <Link href="#pricing" className="hover:text-blue-600">Pricing</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden text-sm font-semibold hover:text-blue-600 sm:block">
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
            <button className="md:hidden" aria-label="Menu">
              <Menu size={24} />
            </button>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              Your Personal AI Learning Companion
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Learn Smarter.
              <span className="block text-blue-600">Achieve Better.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Meet your personal AI tutor for O-Level studies.
              Understand difficult concepts, practice questions,
              and prepare for exams with personalized guidance.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Start Learning <ArrowRight size={19} />
              </Link>

              <Link
                href="#subjects"
                className="rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore Subjects
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-500" />
                Personalized learning
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-500" />
                Learn anytime
              </span>
            </div>
          </div>

          {/* AI TUTOR PREVIEW */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-200 opacity-30 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-100">

              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-600 p-3 text-white">
                    <BrainCircuit size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold">EduAI Tutor</h3>
                    <p className="text-xs text-green-600">● AI Tutor Assistant</p>
                  </div>
                </div>
                <Sparkles className="text-blue-500" />
              </div>

              <div className="space-y-6 py-7">
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-slate-100 p-4 text-sm leading-6">
                  Hello! 👋 I'm your personal O-Level tutor.
                  What would you like to learn today?
                </div>

                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-blue-600 p-4 text-sm leading-6 text-white">
                  Can you explain Newton's Second Law?
                </div>

                <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-blue-50 p-4 text-sm leading-6">
                  <p className="mb-3 font-bold text-blue-700">
                    Newton's Second Law
                  </p>
                  It states that the acceleration of an object is directly
                  proportional to the resultant force and inversely
                  proportional to its mass.

                  <div className="my-4 rounded-xl bg-white p-4 text-center">
                    <span className="text-2xl font-bold text-blue-700">
                      F = m × a
                    </span>
                  </div>

                  <p className="text-slate-600">
                    Would you like a numerical example to understand it better?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
                <MessageCircle size={19} className="text-slate-400" />
                <span className="flex-1 text-sm text-slate-400">
                  Ask your tutor anything...
                </span>
                <div className="rounded-lg bg-blue-600 p-2 text-white">
                  <ArrowRight size={17} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-3">

          <div className="flex items-center justify-center gap-3">
            <BrainCircuit className="text-blue-600" size={27} />
            <span className="font-semibold">AI-Powered Learning</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="text-blue-600" size={27} />
            <span className="font-semibold">O-Level Focused</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Trophy className="text-blue-600" size={27} />
            <span className="font-semibold">Personalized Progress</span>
          </div>

        </div>
      </section>

      {/* SUBJECTS */}
      <section id="subjects" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-600">
              Explore Learning
            </span>
            <h2 className="mt-4 text-4xl font-extrabold">
              Choose Your Subjects
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Explore your O-Level subjects and get personalized assistance
              from your AI tutor.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold ${subject.color}`}>
                  {subject.icon}
                </div>

                <h3 className="text-xl font-bold">{subject.name}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Cambridge O-Level · {subject.code}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-semibold text-slate-500">
                    Explore subject
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-blue-600 transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-600">
              Why EduAI?
            </span>
            <h2 className="mt-4 text-4xl font-extrabold">
              A Smarter Way to Learn
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-blue-50 p-8">
              <BrainCircuit size={35} className="text-blue-600" />
              <h3 className="mt-6 text-xl font-bold">Personalized AI Tutor</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Get explanations based on your learning needs and
                understanding level.
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-8">
              <BookOpen size={35} className="text-purple-600" />
              <h3 className="mt-6 text-xl font-bold">Practice & Understand</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Practice questions, understand difficult topics,
                and improve your knowledge.
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-8">
              <Zap size={35} className="text-green-600" />
              <h3 className="mt-6 text-xl font-bold">Learn Anytime</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Access your AI tutor whenever you need help with
                your O-Level studies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-14 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-600">
              Simple Pricing
            </span>
            <h2 className="mt-4 text-4xl font-extrabold">
              Choose Your Learning Plan
            </h2>
            <p className="mt-4 text-slate-500">
              Start for free. Upgrade when you need more subjects.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-bold">Free Plan</h3>
              <p className="mt-2 text-slate-500">For getting started</p>

              <div className="my-7 text-4xl font-extrabold">
                Rs. 0
                <span className="text-base font-normal text-slate-400"> / forever</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3"><CheckCircle2 className="text-green-500" /> Access to any 2 subjects</li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500" /> AI tutoring assistance</li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500" /> Basic learning history</li>
              </ul>

              <Link href="/signup" className="mt-9 block rounded-xl border border-blue-600 py-4 text-center font-bold text-blue-600 transition hover:bg-blue-50">
                Get Started Free
              </Link>
            </div>

            <div className="relative rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl shadow-blue-100">
              <div className="absolute -top-4 right-8 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">
                PREMIUM
              </div>

              <h3 className="text-2xl font-bold">Premium Plan</h3>
              <p className="mt-2 text-slate-500">For serious learners</p>

              <div className="my-7 text-4xl font-extrabold">
                Custom
                <span className="text-base font-normal text-slate-400"> / pricing</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3"><CheckCircle2 className="text-green-500" /> Access to all subjects</li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500" /> AI tutoring assistance</li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500" /> Practice tests and quizzes</li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500" /> Detailed learning progress</li>
              </ul>

              <Link href="/signup" className="mt-9 block rounded-xl bg-blue-600 py-4 text-center font-bold text-white transition hover:bg-blue-700">
                Upgrade to Premium
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-700 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold">
            Ready to Transform Your Learning?
          </h2>
          <p className="mt-5 leading-7 text-blue-100">
            Start your O-Level learning journey with a personal AI tutor.
            Learn at your own pace and build confidence.
          </p>

          <Link
            href="/signup"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Start Learning Today <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">

          <div>
            <h2 className="text-2xl font-extrabold">
              Edu<span className="text-blue-400">AI</span>
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Your personal AI tutoring platform for smarter O-Level learning.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-slate-400">
            <Link href="#home" className="hover:text-white">Home</Link>
            <Link href="#subjects" className="hover:text-white">Subjects</Link>
            <Link href="#features" className="hover:text-white">Features</Link>
            <Link href="#pricing" className="hover:text-white">Pricing</Link>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-7 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} EduAI. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
