import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { DashboardPageHeader } from "@/components/dashboard/page-header";

const freeFeatures = ["Choose up to two subjects", "Build your study space", "Access learning tools as they become available"];
const premiumFeatures = ["All available subjects", "Advanced tutoring and exam preparation", "Expanded practice and progress insights"];

export default function UpgradePage() {
  return (
    <>
      <DashboardPageHeader eyebrow="Plans" title="Choose how you want to learn" description="EduAI is planned as a free and premium learning platform. Premium pricing and billing are still being finalized." />
      <div className="grid max-w-4xl gap-5 lg:grid-cols-2">
        <PlanCard title="Free" subtitle="A simple place to start" features={freeFeatures} />
        <PlanCard title="Premium" subtitle="More room for your study goals" features={premiumFeatures} premium />
      </div>
      <p className="mt-5 max-w-4xl text-xs leading-5 text-slate-500">Plan descriptions explain the intended product direction. Subscription status, prices, checkout, and entitlements are not active yet.</p>
    </>
  );
}

function PlanCard({ title, subtitle, features, premium = false }: { title: string; subtitle: string; features: string[]; premium?: boolean }) {
  return (
    <section className={`rounded-3xl border bg-white p-6 sm:p-8 ${premium ? "border-blue-300 shadow-lg shadow-blue-950/5" : "border-slate-200"}`}>
      <div className="flex items-start justify-between gap-4"><div><h2 className="text-xl font-extrabold text-slate-950">{title}</h2><p className="mt-1 text-sm text-slate-600">{subtitle}</p></div>{premium && <span className="rounded-full bg-blue-50 p-2.5 text-blue-700"><Sparkles size={18} /></span>}</div>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-slate-700"><Check size={17} className="mt-0.5 shrink-0 text-emerald-600" />{feature}</li>)}
      </ul>
      <div className="mt-7 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">{premium ? "Details coming later" : "Available as the starting plan"}</div>
      {!premium && <Link href="/dashboard/subjects" className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:underline">Browse subjects →</Link>}
    </section>
  );
}
