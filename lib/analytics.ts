export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  if (name === "form_submit") {
    window.fbq?.("track", "Lead");
  }
}
