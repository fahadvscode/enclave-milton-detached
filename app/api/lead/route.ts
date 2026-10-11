import { NextResponse } from "next/server";
import { budgetOptions, buyerTypeOptions, emptyToNull, leadSchema, timelineOptions } from "@/lib/schema";
import { getSupabaseAdmin, LEADS_TABLE } from "@/lib/supabase";

export const runtime = "nodejs";

const FORM_NAME = "Detached Collection Registration";
const COLLECTION = "Detached Collection";
const SOURCE = "theenclavedetached.com";

function safePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("://")) return "/";
  return path.slice(0, 200);
}

function labelFor(options: readonly { value: string; label: string }[], value: string | undefined) {
  if (!value) return null;
  return options.find((option) => option.value === value)?.label ?? null;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Check the form and try again." }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const elapsed = Date.now() - parsed.data.submittedAt;
  if (!Number.isFinite(parsed.data.submittedAt) || elapsed < 3000 || elapsed > 1000 * 60 * 60 * 12) {
    return NextResponse.json(
      { error: "Please wait a moment and submit the form again." },
      { status: 400 },
    );
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
    const supabase = getSupabaseAdmin();
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
      return NextResponse.json({ error: "Something went wrong — please try again." }, { status: 500 });
    }
  } catch (error) {
    console.error("Lead route failed", error);
    return NextResponse.json({ error: "Something went wrong — please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
