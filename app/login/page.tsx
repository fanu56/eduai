import { Suspense } from "react";
import { LoginForm } from "./login-form";

type LoginPageProps = {
  searchParams: Promise<{ error?: string | string[] }>;
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-50" aria-label="Loading login page" />}>
      <LoginPageContent searchParams={searchParams} />
    </Suspense>
  );
}

async function LoginPageContent({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;
  const errorCode = Array.isArray(error) ? error[0] : error;
  const initialMessage = errorCode === "auth_callback_failed"
    ? "That confirmation link is invalid or expired. Request a new link and try again."
    : errorCode === "reset_session_required"
      ? "That password reset link is invalid or expired. Request a new one and try again."
      : "";

  return <LoginForm initialMessage={initialMessage} />;
}
