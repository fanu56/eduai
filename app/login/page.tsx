import { LoginForm } from "./login-form";

type LoginPageProps = {
  searchParams: Promise<{ error?: string | string[] }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;
  const errorCode = Array.isArray(error) ? error[0] : error;
  const initialMessage = errorCode === "auth_callback_failed"
    ? "That confirmation link is invalid or expired. Request a new link and try again."
    : errorCode === "reset_session_required"
      ? "That password reset link is invalid or expired. Request a new one and try again."
      : "";

  return <LoginForm initialMessage={initialMessage} />;
}
