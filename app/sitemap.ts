import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-10T00:00:00.000Z");
  const routes = ["", "/masterplan", "/location", "/faq", "/register", "/privacy", "/terms"];
  return routes.map((route) => ({
    url: route === "" ? `${site.url}/` : `${site.url}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
