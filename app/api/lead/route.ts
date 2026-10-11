import { NextResponse } from "next/server";
import { budgetOptions, buyerTypeOptions, emptyToNull, leadSchema, timelineOptions } from "@/lib/schema";
import { getSupabase, LEADS_TABLE } from "@/lib/supabase";

export const runtime = "nodejs";

const FORM_NAME = "Detached Collection Registration";
const COLLECTION = "Detached Collection";
const SOURCE = "theenclavedetached.com";
const SITE_ORIGIN = "https://theenclavedetached.com";
const ALLOWED_SOURCE_ORIGINS = new Set([SITE_ORIGIN, "https://www.theenclavedetached.com"]);

function isAmpRequest(request: Request) {
  const url = new URL(request.url);
  return request.headers.get("amp-same-origin") === "true" || url.searchParams.has("__amp_source_origin");
}

function allowedAmpOrigin(origin: string) {
  if (ALLOWED_SOURCE_ORIGINS.has(origin)) return true;
  try {
    return new URL(origin).hostname.endsWith(".cdn.ampproject.org");
  } catch {
    return false;
  }
}

function ampCorsHeaders(request: Request) {
  const origin = request.headers.get("origin");
  const source = new URL(request.url).searchParams.get("__amp_source_origin");
  const headers: Record<string, string> = {
    "Access-Control-Expose-Headers": "AMP-Access-Control-Allow-Source-Origin, AMP-Redirect-To",
    Vary: "Origin",
  };
  if (origin && allowedAmpOrigin(origin)) headers["Access-Control-Allow-Origin"] = origin;
  if (!source || ALLOWED_SOURCE_ORIGINS.has(source)) {
    headers["AMP-Access-Control-Allow-Source-Origin"] = source && ALLOWED_SOURCE_ORIGINS.has(source) ? source : SITE_ORIGIN;
  }
  return headers;
}

function respond(request: Request, amp: boolean, body: { ok?: boolean; error?: string }, status = 200, redirect = false) {
  if (!amp) return NextResponse.json(body, { status });
  const headers = ampCorsHeaders(request);
  if (redirect) headers["AMP-Redirect-To"] = `${SITE_ORIGIN}/thank-you`;
  return NextResponse.json(body, { status, headers });
}

async function readBody(request: Request, amp: boolean) {
  if (!amp) return request.json();
  const form = await request.formData();
  const raw: Record<string, unknown> = {};
  for (const [key, value] of form.entries()) {
    if (typeof value === "string") raw[key] = value;
  }
  raw.consent = raw.consent === "true" || raw.consent === "on";
  raw.submittedAt = Date.now() - 4000;
  return raw;
}

function safePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("://")) return "/";
  return path.slice(0, 200);
}

function labelFor(options: readonly { value: string; label: string }[], value: string | undefined) {
  if (!value) return null;
  return options.find((option) => option.value === value)?.label ?? null;
}

export function OPTIONS(request: Request) {
  const source = new URL(request.url).searchParams.get("__amp_source_origin");
  if (source && !ALLOWED_SOURCE_ORIGINS.has(source)) {
    return NextResponse.json({ error: "Invalid source." }, { status: 403 });
  }
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...ampCorsHeaders(request),
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, AMP-Same-Origin",
    },
  });
}

export async function POST(request: Request) {
  const amp = isAmpRequest(request);
  const source = new URL(request.url).searchParams.get("__amp_source_origin");
  if (source && !ALLOWED_SOURCE_ORIGINS.has(source)) {
    return NextResponse.json({ error: "Invalid source." }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await readBody(request, amp);
  } catch {
    return respond(request, amp, { error: "Invalid JSON." }, 400);
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return respond(request, amp, { error: "Check the form and try again." }, 400);
  }

  if (parsed.data.honeypot) {
    return respond(request, amp, { ok: true }, 200, amp);
  }

  const elapsed = Date.now() - parsed.data.submittedAt;
  if (!Number.isFinite(parsed.data.submittedAt) || elapsed < 3000 || elapsed > 1000 * 60 * 60 * 12) {
    return respond(request, amp, { error: "Please wait a moment and submit the form again." }, 400);
  }

  const utm = [
    emptyToNull(parsed.data.utm_source),
    emptyToNull(parsed.data.utm_medium),
    emptyToNull(parsed.data.utm_campaign),
    emptyToNull(parsed.data.utm_term),
    emptyToNull(parsed.data.utm_content),
  ]
    .filter(Boolean)
    .join("/");

  const model = [
    "Detached Homes",
    parsed.data.isBroker === "yes" ? "Broker" : "Not a broker",
    labelFor(budgetOptions, emptyToNull(parsed.data.budgetRange) ?? undefined),
    labelFor(buyerTypeOptions, emptyToNull(parsed.data.buyerType) ?? undefined),
    labelFor(timelineOptions, emptyToNull(parsed.data.timeline) ?? undefined),
    `page ${safePath(parsed.data.pagePath)}`,
    utm ? `utm ${utm}` : null,
    emptyToNull(parsed.data.message),
  ]
    .filter(Boolean)
    .join(" · ")
    .slice(0, 4000);

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from(LEADS_TABLE).insert({
      first_name: parsed.data.firstName.trim(),
      last_name: parsed.data.lastName.trim(),
      email: parsed.data.email.trim().toLowerCase(),
      phone: parsed.data.phone.trim(),
      model,
      collection: COLLECTION,
      source: SOURCE,
      form_name: FORM_NAME,
    });

    if (error) {
      console.error("Lead insert failed", error.message);
      return respond(request, amp, { error: "Something went wrong — please try again." }, 500);
    }
  } catch (error) {
    console.error("Lead route failed", error);
    return respond(request, amp, { error: "Something went wrong — please try again." }, 500);
  }

  return respond(request, amp, { ok: true }, 200, amp);
}
