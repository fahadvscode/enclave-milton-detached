import { project } from "@/lib/content";

export function StatusBanner() {
  return (
    <p className="inline-flex max-w-xl items-center gap-2 border border-brand-accent px-3 py-2 text-left text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-surface">
      <span className="h-2 w-2 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
      {project.heroBadge}
    </p>
  );
}
