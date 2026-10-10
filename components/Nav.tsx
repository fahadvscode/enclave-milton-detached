"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navItems, project } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-brand-deep text-surface">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="max-w-[16rem] no-underline md:max-w-none">
          <span className="block font-display text-[1.15rem] leading-tight text-surface md:text-[1.35rem]">
            {project.siteName}
          </span>
          <span className="mt-1 block h-px w-14 bg-brand-accent" aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="border border-surface/30 px-3 py-2 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" aria-label="Primary" className="hidden md:block">
          <NavList pathname={pathname} />
        </nav>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-white/10 px-5 py-4 md:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <NavList pathname={pathname} stacked />
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavList({ pathname, stacked = false }: { pathname: string; stacked?: boolean }) {
  return (
    <ul className={stacked ? "flex flex-col gap-3" : "flex items-center gap-6"}>
      {navItems.map((item) => {
        const current = pathname === item.href;
        const register = item.href === "/register";
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              onClick={() => {
                if (register) trackEvent("register_cta_click", { location: "nav" });
              }}
              className={
                register
                  ? "btn-primary px-3 py-2 text-sm"
                  : `text-sm font-semibold text-surface no-underline ${current ? "underline decoration-brand-accent underline-offset-4" : ""}`
              }
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
