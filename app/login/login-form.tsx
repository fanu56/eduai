"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function LoginForm({ initialMessage }: { initialMessage: string }) {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(initialMessage);
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setMessage("We couldn’t sign you in with those details. Check them and try again.");
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch {
      setMessage("We couldn’t sign you in. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">← EduAI home</Link>
        <h1 className="mt-6 text-3xl font-bold text-slate-900">Welcome back</h1>
        <p className="mt-2 text-slate-600">Log in to continue learning.</p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block font-medium text-slate-700">Email address</label>
            <input id="email" type="email" autoComplete="email" required maxLength={254}
              value={email} onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block font-medium text-slate-700">Password</label>
            <div className="flex rounded-lg border border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
              <input id="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required
                value={password} onChange={(event) => setPassword(event.target.value)}
                className="min-w-0 flex-1 rounded-lg px-4 py-3 text-slate-900 outline-none" />
              <button type="button" onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="px-4 text-slate-500 hover:text-slate-800">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="text-right">
            <Link href="/forgot-password" className="text-sm font-semibold text-blue-700 hover:underline">Forgot password?</Link>
          </div>
          {message && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{message}</p>}
          <button type="submit" disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
            {loading ? "Logging in…" : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-center text-slate-600">
          New to EduAI? <Link href="/signup" className="font-semibold text-blue-700 hover:underline">Create an account</Link>
        </p>
      </section>
    </main>
  );
}
