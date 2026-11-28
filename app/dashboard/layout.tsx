import { Suspense } from "react";
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { createClient } from "@/lib/supabase/server";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-50" aria-label="Loading dashboard" />}>
      <AuthenticatedDashboard>{children}</AuthenticatedDashboard>
    </Suspense>
  );
}

async function AuthenticatedDashboard({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) redirect("/login");

  const claims = data.claims;
  const email = typeof claims.email === "string" ? claims.email : "";
  const displayName = typeof claims.user_metadata?.full_name === "string"
    ? claims.user_metadata.full_name
    : email.split("@")[0] || "Student";

  return <DashboardShell displayName={displayName} email={email}>{children}</DashboardShell>;
}
