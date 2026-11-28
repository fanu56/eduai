"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function UpdatePasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Your passwords don’t match.");
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setMessage(error.message);
        return;
      }
      router.replace("/dashboard");
      router.refresh();
    } catch {
      setMessage("We couldn’t update your password. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="password" className="mb-2 block font-medium text-slate-700">New password</label>
        <input id="password" type="password" autoComplete="new-password" required minLength={8} maxLength={72}
          value={password} onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
      </div>
      <div>
        <label htmlFor="confirm-password" className="mb-2 block font-medium text-slate-700">Confirm new password</label>
        <input id="confirm-password" type="password" autoComplete="new-password" required minLength={8} maxLength={72}
          value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
      </div>
      {message && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{message}</p>}
      <button type="submit" disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
        {loading ? "Updating…" : "Update password"}
      </button>
    </form>
  );
}
