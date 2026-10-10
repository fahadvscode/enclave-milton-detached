import Link from "next/link";
import { independenceDisclaimer, navItems, project, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8">
        <p className="font-display text-2xl text-surface">{project.siteName}</p>
        <span className="mt-3 block h-px w-16 bg-brand-accent" aria-hidden="true" />
        <p className="mt-6 max-w-[75ch] text-[0.98rem] leading-relaxed text-surface/90">
          {independenceDisclaimer}
        </p>
        <p className="mt-4 text-sm text-surface/80">Last updated: {site.asOfDate}</p>
        <nav aria-label="Footer" className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/" className="text-surface underline decoration-brand-accent underline-offset-4">
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-surface underline decoration-brand-accent underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className="text-surface underline decoration-brand-accent underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-surface underline decoration-brand-accent underline-offset-4">
            Terms
          </Link>
          <a
            href={site.siblingUrl}
            className="text-surface underline decoration-brand-accent underline-offset-4"
            rel="noopener noreferrer"
            target="_blank"
          >
            {site.siblingAnchor}
          </a>
        </nav>
      </div>
    </footer>
  );
}
