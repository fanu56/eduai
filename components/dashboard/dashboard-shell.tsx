"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  BrainCircuit,
  ChartNoAxesCombined,
  CircleHelp,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  Menu,
  MessageSquareText,
  Settings,
  Sparkles,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavigationItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const primaryNavigation: NavigationItem[] = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/subjects", label: "My subjects", icon: BookOpen },
  { href: "/dashboard/tutor", label: "AI tutor", icon: BrainCircuit },
  { href: "/dashboard/practice", label: "Practice", icon: ClipboardCheck },
  { href: "/dashboard/past-papers", label: "Past papers", icon: FileText },
  { href: "/dashboard/progress", label: "Progress", icon: ChartNoAxesCombined },
  { href: "/dashboard/sessions", label: "Chat history", icon: MessageSquareText },
];

export function DashboardShell({
  children,
  displayName,
  email,
}: {
  children: ReactNode;
  displayName: string;
  email: string;
}) {
  const pathname = usePathname();
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const initials = displayName.trim().slice(0, 2).toUpperCase() || "S";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 lg:flex">
      {mobileNavigationOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
          aria-label="Close navigation"
          onClick={() => setMobileNavigationOpen(false)}
        />
      )}

      <aside
        className={`${mobileNavigationOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0`}
        aria-label="Student navigation"
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <Link href="/dashboard" className="flex items-center gap-3" onClick={() => setMobileNavigationOpen(false)}>
            <span className="rounded-xl bg-blue-600 p-2.5 text-white shadow-sm shadow-blue-200"><BrainCircuit size={21} /></span>
            <span className="text-xl font-extrabold tracking-tight">Edu<span className="text-blue-600">AI</span></span>
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close navigation"
            onClick={() => setMobileNavigationOpen(false)}
          >
            <X size={19} />
          </button>
        </div>

        <div className="px-4 pt-6">
          <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Learning space</p>
          <nav className="mt-3 space-y-1">
            {primaryNavigation.map(({ href, label, icon: Icon }) => {
              const active = href === "/dashboard" ? pathname === href : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileNavigationOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"}`}
                >
                  <Icon size={18} strokeWidth={active ? 2.4 : 1.9} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
            <div className="flex items-center gap-2 text-blue-700"><Sparkles size={16} /><span className="text-xs font-bold uppercase tracking-wide">Your plan</span></div>
            <p className="mt-2 text-sm font-bold text-slate-900">Free learning plan</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">Choose up to two subjects to shape your study space.</p>
            <Link href="/dashboard/upgrade" onClick={() => setMobileNavigationOpen(false)} className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline">
              View plan details <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-3 space-y-1">
            <Link href="/dashboard/settings" onClick={() => setMobileNavigationOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${pathname.startsWith("/dashboard/settings") ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
              <Settings size={18} /> Settings
            </Link>
            <Link href="/dashboard/help" onClick={() => setMobileNavigationOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${pathname.startsWith("/dashboard/help") ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
              <CircleHelp size={18} /> Help
            </Link>
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-7">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
              aria-label="Open navigation"
              aria-expanded={mobileNavigationOpen}
              onClick={() => setMobileNavigationOpen(true)}
            >
              <Menu size={19} />
            </button>
            <span className="hidden text-sm font-medium text-slate-500 sm:inline">Cambridge O-Level learning</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-900">{displayName}</p>
              <p className="max-w-48 truncate text-xs text-slate-500">{email}</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-extrabold text-blue-800" aria-label={`${displayName} profile`}>
              {initials}
            </div>
            <form action="/auth/signout" method="post">
              <button type="submit" className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 sm:px-4 sm:text-sm">Log out</button>
            </form>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-7 sm:py-10 lg:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}
