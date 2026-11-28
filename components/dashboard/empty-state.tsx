import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <section className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center sm:px-10" aria-label={title}>
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon size={25} /></div>
      <h2 className="mt-5 text-lg font-bold text-slate-950">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">{description}</p>
      {actionLabel && actionHref && (
        <Link href={actionHref} className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
          {actionLabel}<span aria-hidden="true">→</span>
        </Link>
      )}
    </section>
  );
}
