import { renderAmp, type AmpUtm } from "@/lib/amp";

export async function GET(request: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const url = new URL(request.url);
  const utm: AmpUtm = {
    utm_source: url.searchParams.get("utm_source") ?? "",
    utm_medium: url.searchParams.get("utm_medium") ?? "",
    utm_campaign: url.searchParams.get("utm_campaign") ?? "",
    utm_term: url.searchParams.get("utm_term") ?? "",
    utm_content: url.searchParams.get("utm_content") ?? "",
  };
  const html = renderAmp(slug, utm);
  if (!html) return new Response("Not found", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
