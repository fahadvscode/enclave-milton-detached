import Link from "next/link";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function Section({
  id,
  children,
  alt = false,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section id={id} className={`${alt ? "bg-surface-alt" : "bg-surface"} py-24 md:py-28 lg:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow mb-3 flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-brand-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="prose-measure text-[1.075rem] leading-[1.7] md:text-[1.125rem]">{children}</div>;
}

export function PricingDisclaimer() {
  return (
    <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-text-muted">
      Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of October 2026.
    </p>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span aria-current="page" className="text-text-primary">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="text-link">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function SiblingLink({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://www.enclavemilton.com/"
      className={`text-link ${className}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      See The Enclave&apos;s released freehold townhomes
    </a>
  );
}
