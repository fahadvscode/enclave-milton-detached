"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function TrackOnView({
  event,
  children,
}: {
  event: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || fired.current) return;
        fired.current = true;
        trackEvent(event);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [event]);

  return <div ref={ref}>{children}</div>;
}
