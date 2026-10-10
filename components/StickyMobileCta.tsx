"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-accent bg-brand-deep p-3 md:hidden">
      <Link
        href="/register"
        className="btn-primary w-full text-center text-[0.98rem]"
        onClick={() => trackEvent("register_cta_click", { location: "sticky" })}
      >
        Register for Detached Collection Updates
      </Link>
    </div>
  );
}
