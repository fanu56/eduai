export function DashboardPageHeader({
  eyebrow = "Your learning space",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
    </header>
  );
}
