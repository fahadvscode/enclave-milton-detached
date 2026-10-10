import Link from "next/link";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { LeadForm } from "@/components/LeadForm";
import { LocationMap } from "@/components/LocationMap";
import { SchoolsTransit } from "@/components/SchoolsTransit";
import { Breadcrumbs, JsonLd, PricingDisclaimer, Prose, Section } from "@/components/ui";
import {
  answerFirstLocation,
  comparableIntro,
  comparables,
  hospitalNote,
  hospitals,
  locationContext,
  miltonContext,
  pageMeta,
  placeNotes,
} from "@/lib/content";
import { breadcrumbJsonLd, imageObjectJsonLd } from "@/lib/jsonld";
import { images } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.location);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Location", path: "/location" },
];

export default function LocationPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={imageObjectJsonLd(images.map)} />
      <Section>
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mb-3">Southeast Milton</p>
        <h1 className="max-w-[20ch] text-4xl md:text-5xl">Location — Britannia Road &amp; James Snow Parkway, Milton</h1>
        <div className="mt-8">
          <AnswerFirstSummary
            heading="New detached homes at Britannia Road, Milton"
            text={answerFirstLocation}
          />
        </div>
        <PricingDisclaimer />
      </Section>
      <Section alt>
        <Prose>
          {locationContext.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </Prose>
        <div className="mt-8">
          <LocationMap />
        </div>
      </Section>
      <Section>
        <SchoolsTransit />
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">Milton, Halton, and this intersection</h2>
        <Prose>
          <div className="mt-5">
            {miltonContext.map((paragraph) => (
              <p key={paragraph.slice(0, 42)}>{paragraph}</p>
            ))}
          </div>
        </Prose>
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Retail, parks, and landmarks</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {placeNotes.map((place) => (
            <article key={place.title} className="card">
              <h3 className="font-sans text-xl font-semibold">{place.title}</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed">
                {place.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 36)}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">Hospitals</h2>
        <Prose>
          <p className="mt-5">{hospitalNote}</p>
        </Prose>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {hospitals.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Nearby Milton pre-construction context</h2>
        <Prose>
          <p className="mt-5">{comparableIntro}</p>
        </Prose>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {comparables.map((item) => (
            <article key={item.name} className="card">
              <h3 className="font-sans text-xl font-semibold">
                <a href={item.sourceUrl} className="text-link" rel="noopener noreferrer" target="_blank">
                  {item.name}
                </a>
              </h3>
              <p className="mt-2 text-base">{item.product}</p>
              <p className="mt-1 text-base text-text-muted">{item.location}</p>
              <p className="mt-2 text-sm text-text-muted">Confirmed on {item.sourceLabel} in October 2026. No price is quoted here.</p>
            </article>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/masterplan" className="text-link">
            See the full approved housing mix
          </Link>
        </p>
      </Section>
      <Section id="register">
        <h2 className="text-3xl md:text-4xl">Register for detached collection updates</h2>
        <Prose>
          <p className="mt-5">
            The Britannia Road and James Snow Parkway site is where detached homes are planned. Pricing and a launch date are still to be announced. Register to be told when Sundial Homes publishes them.
          </p>
        </Prose>
        <div className="mt-8 max-w-3xl">
          <LeadForm pagePath="/location" />
        </div>
      </Section>
    </>
  );
}
