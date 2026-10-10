import { NextResponse } from "next/server";
import { emptyToNull, leadSchema } from "@/lib/schema";
import { getSupabase } from "@/lib/supabase";

export const runtime = "nodejs";

function safePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("://")) return "/";
  return path.slice(0, 200);
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

  try {
    const supabase = getSupabase();
    const row = {
      first_name: parsed.data.firstName,
      last_name: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      is_broker: parsed.data.isBroker,
      home_type_interest: parsed.data.homeTypeInterest,
      budget_range: emptyToNull(parsed.data.budgetRange),
      buyer_type: emptyToNull(parsed.data.buyerType),
      timeline: emptyToNull(parsed.data.timeline),
      notes: emptyToNull(parsed.data.message),
      consent: true,
      consent_timestamp: new Date().toISOString(),
      page_path: safePath(parsed.data.pagePath),
      site_source: "theenclavedetached.com",
      utm_source: emptyToNull(parsed.data.utm_source),
      utm_medium: emptyToNull(parsed.data.utm_medium),
      utm_campaign: emptyToNull(parsed.data.utm_campaign),
      utm_term: emptyToNull(parsed.data.utm_term),
      utm_content: emptyToNull(parsed.data.utm_content),
    };

    let { error } = await supabase.from("enclave_milton_leads").insert(row);
    if (error && /notes/i.test(error.message)) {
      const { notes, ...retryRow } = row;
      void notes;
      const retry = await supabase.from("enclave_milton_leads").insert(retryRow);
      error = retry.error;
    }

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
