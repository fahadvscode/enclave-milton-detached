"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function RegisterCta({
  href,
  location,
  children,
  className = "btn-primary",
}: {
  href: string;
  location: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent("register_cta_click", { location })}
    >
      {children}
    </Link>
  );
}
