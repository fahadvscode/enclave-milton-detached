const ORIGIN = "https://theenclavedetached.com";
const LASTMOD = "2026-10-11";

const PATHS = ["/", "/masterplan", "/location", "/faq", "/register", "/privacy", "/terms"] as const;

export const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PATHS.map(
  (path) => `  <url>
    <loc>${ORIGIN}${path}</loc>
    <lastmod>${LASTMOD}</lastmod>
  </url>`,
).join("\n")}
</urlset>
`;

export function sitemapResponse() {
  return new Response(SITEMAP_XML, {
    status: 200,
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
