import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const emailOtpTypes: EmailOtpType[] = [
  "signup",
  "invite",
  "magiclink",
  "recovery",
  "email_change",
  "email",
];

function safeInternalPath(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) {
    return "/dashboard";
  }

  try {
    const destination = new URL(value, "https://eduai.invalid");
    if (destination.origin !== "https://eduai.invalid") return "/dashboard";
    return `${destination.pathname}${destination.search}${destination.hash}`;
  } catch {
    return "/dashboard";
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const destination = safeInternalPath(url.searchParams.get("next"));
  const supabase = await createClient();
  let error: { message: string } | null = null;

  const code = url.searchParams.get("code");
  const tokenHash = url.searchParams.get("token_hash");
  const otpType = url.searchParams.get("type") as EmailOtpType | null;

  if (code) {
    ({ error } = await supabase.auth.exchangeCodeForSession(code));
  } else if (tokenHash && otpType && emailOtpTypes.includes(otpType)) {
    ({ error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: otpType }));
  } else {
    error = { message: "Missing or invalid authentication token" };
  }

  if (!error) {
    return NextResponse.redirect(new URL(destination, url.origin));
  }

  return NextResponse.redirect(new URL("/login?error=auth_callback_failed", url.origin));
}
