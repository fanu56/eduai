import { Settings } from "lucide-react";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { createClient } from "@/lib/supabase/server";

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  const email = typeof claims?.email === "string" ? claims.email : "Not available";
  const name = typeof claims?.user_metadata?.full_name === "string" ? claims.user_metadata.full_name : email.split("@")[0] || "Student";

  return (
    <>
      <DashboardPageHeader eyebrow="Account" title="Settings" description="Review the account information associated with your EduAI sign-in." />
      <section className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="profile-heading">
        <div className="flex items-center gap-3"><span className="rounded-xl bg-blue-50 p-2.5 text-blue-700"><Settings size={20} /></span><div><h2 id="profile-heading" className="font-bold text-slate-950">Profile information</h2><p className="mt-0.5 text-sm text-slate-500">Read from your authenticated account</p></div></div>
        <dl className="mt-6 divide-y divide-slate-100">
          <div className="grid gap-1 py-4 sm:grid-cols-[150px_1fr] sm:gap-4"><dt className="text-sm font-semibold text-slate-500">Full name</dt><dd className="text-sm font-semibold text-slate-900">{name}</dd></div>
          <div className="grid gap-1 py-4 sm:grid-cols-[150px_1fr] sm:gap-4"><dt className="text-sm font-semibold text-slate-500">Email</dt><dd className="break-all text-sm font-semibold text-slate-900">{email}</dd></div>
        </dl>
        <p className="mt-4 rounded-xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">Profile editing and notification preferences will be added with the student profile database. Your sign-in credentials remain managed by Supabase Auth.</p>
      </section>
    </>
  );
}
