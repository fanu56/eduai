"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: { full_name: fullName.trim() },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (data.session) {
        router.replace("/dashboard");
        router.refresh();
      } else {
        setMessage("Account created. Check your email for a confirmation link.");
      }
    } catch {
      setMessage("We couldn’t create your account. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">← EduAI home</Link>
        <h1 className="mt-6 text-3xl font-bold text-slate-900">Create your EduAI account</h1>
        <p className="mb-8 mt-2 text-slate-600">Start your personalized O-Level learning journey.</p>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label htmlFor="full-name" className="mb-2 block font-medium text-slate-700">Full name</label>
            <input id="full-name" type="text" autoComplete="name" required maxLength={100}
              value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block font-medium text-slate-700">Email address</label>
            <input id="email" type="email" autoComplete="email" required maxLength={254}
              value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block font-medium text-slate-700">Password</label>
            <input id="password" type="password" autoComplete="new-password" required minLength={8} maxLength={72}
              value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 8 characters"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
          </div>
          {message && <p role="status" aria-live="polite" className="rounded-lg bg-blue-50 p-3 text-sm text-blue-700">{message}</p>}
          <button type="submit" disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-slate-600">
          Already have an account? <Link href="/login" className="font-semibold text-blue-700 hover:underline">Log in</Link>
        </p>
      </section>
    </main>
  );
}
