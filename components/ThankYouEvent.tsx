"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ThankYouEvent() {
  useEffect(() => {
    try {
      const pagePath = sessionStorage.getItem("enclave_detached_lead");
      if (!pagePath) return;
      sessionStorage.removeItem("enclave_detached_lead");
      trackEvent("form_submit", { page_path: pagePath });
    } catch {
      trackEvent("form_submit", { page_path: "/thank-you" });
    }
  }, []);
  return null;
}
