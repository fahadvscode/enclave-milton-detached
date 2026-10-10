"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/lib/content";

export function FaqAccordion({
  items = faqs,
  openFirst = true,
}: {
  items?: typeof faqs;
  openFirst?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(openFirst ? 0 : null);
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("q")?.trim() ?? "";
    setQuery(value);
    if (!value) return;
    const match = items.findIndex((item) =>
      `${item.question} ${item.answer}`.toLowerCase().includes(value.toLowerCase()),
    );
    if (match >= 0) setOpenIndex(match);
  }, [items]);

  return (
    <div className="faq-accordion">
      {query ? (
        <p className="mb-4 text-base text-text-muted">
          Showing every question. Matches for “{query}” are marked.
        </p>
      ) : null}
      {items.map((item, index) => {
        const open = openIndex === index;
        const matched =
          query.length > 0 &&
          `${item.question} ${item.answer}`.toLowerCase().includes(query.toLowerCase());
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question} className={`card mb-3 ${matched ? "border-brand-accent" : ""}`}>
            <h3 className="font-sans text-[1.15rem] font-semibold leading-snug">
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <motion.span
                  aria-hidden="true"
                  className="mt-1 inline-block text-brand-accent"
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.3 }}
                >
                  +
                </motion.span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={open ? undefined : true}
              className={open ? "mt-3" : "max-h-0 overflow-hidden"}
            >
              <p className="max-w-[70ch] text-base leading-relaxed">{item.answer}</p>
              {item.registerCta ? (
                <p className="mt-3">
                  <Link href="/register" className="text-link">
                    Register to be notified
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
