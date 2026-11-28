import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { UpdatePasswordForm } from "./update-password-form";

export default function UpdatePasswordPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-50" aria-label="Loading password form" />}>
      <UpdatePasswordContent />
    </Suspense>
  );
}

async function UpdatePasswordContent() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login?error=reset_session_required");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <Link href="/login" className="text-sm font-semibold text-blue-700 hover:underline">← Back to login</Link>
        <h1 className="mt-6 text-3xl font-bold text-slate-900">Choose a new password</h1>
        <p className="mt-2 text-slate-600">Use at least 8 characters for your new password.</p>
        <UpdatePasswordForm />
      </section>
    </main>
  );
}
