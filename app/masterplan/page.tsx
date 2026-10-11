import Image from "next/image";
import Link from "next/link";
import { AmpLink } from "@/components/AmpLink";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { LeadForm } from "@/components/LeadForm";
import { MasterplanBreakdown } from "@/components/MasterplanBreakdown";
import { TrackOnView } from "@/components/TrackOnView";
import { Breadcrumbs, JsonLd, PricingDisclaimer, Prose, Section } from "@/components/ui";
import {
  answerFirstMasterplan,
  communityFeatures,
  housingTypeNotes,
  images,
  masterplanReading,
  pageMeta,
  project,
  questionsToAsk,
  site,
  sourceCitation,
} from "@/lib/content";
import { breadcrumbJsonLd, imageObjectJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.masterplan);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Masterplan", path: "/masterplan" },
];

export default function MasterplanPage() {
  return (
    <>
      <AmpLink path="/masterplan" />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={imageObjectJsonLd(images.context)} />
      <Section>
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mb-3">Town file {project.townFile}</p>
        <h1 className="max-w-[18ch] text-4xl md:text-5xl">The Enclave Masterplan — 6071 Fourth Line, Milton</h1>
        <div className="mt-8">
          <AnswerFirstSummary heading="6071 Fourth Line detached homes in the approved mix" text={answerFirstMasterplan} />
        </div>
        <PricingDisclaimer />
      </Section>
      <Section alt>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Prose>
            {masterplanReading.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
          <Image
            src={images.context.src}
            alt={images.context.alt}
            width={images.context.width}
            height={images.context.height}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="h-auto w-full border border-border"
          />
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Housing-type breakdown</h2>
        <Prose>
          <p className="mt-5">
            Read the approved-plan column as the Town of Milton record. Read the released column as what Sundial Homes has actually put on the market under The Enclave name. Detached dwellings are in the first column and not in the second.
          </p>
        </Prose>
        <div className="mt-6">
          <TrackOnView event="masterplan_table_view">
            <MasterplanBreakdown />
          </TrackOnView>
        </div>
        <PricingDisclaimer />
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">What each housing type means here</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {housingTypeNotes.map((note) => (
            <article key={note.title} className="card">
              <h3 className="font-sans text-xl font-semibold">{note.title}</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed">
                {note.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <PricingDisclaimer />
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Community features in the Town filing</h2>
        <div className="mt-8 grid gap-8">
          {communityFeatures.map((feature) => (
            <article key={feature.title}>
              <h3 className="font-sans text-2xl font-semibold">{feature.title}</h3>
              <Prose>
                <div className="mt-3">
                  {feature.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </Prose>
            </article>
          ))}
        </div>
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">Source</h2>
        <Prose>
          <p className="mt-5">{sourceCitation}</p>
          <p>
            <a className="text-link" href={site.townSourceUrl} rel="noopener noreferrer" target="_blank">
              {site.townSourceLabel}
            </a>
          </p>
          <p>
            The citation is the reason detached homes can be discussed at all. If the Town page changes the file status, that municipal page wins over this one. Re-check it before treating any later sales claim as current.
          </p>
        </Prose>
        <ul className="mt-6 flex flex-col gap-3">
          <li>
            <Link href="/location" className="text-link">
              See transit, schools &amp; amenities near this site
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-link">
              Is the detached collection priced yet? See the FAQ
            </Link>
          </li>
        </ul>
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Questions to ask when detached details are released</h2>
        <Prose>
          <div className="mt-5">
            {questionsToAsk.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </Prose>
      </Section>
      <Section id="register" alt>
        <h2 className="text-3xl md:text-4xl">Register for detached collection updates</h2>
        <Prose>
          <p className="mt-5">
            Pricing, lot widths, and a launch date for detached homes at 6071 Fourth Line are to be announced. Registration is the way to hear those details from the update list.
          </p>
        </Prose>
        <div className="mt-8 max-w-3xl">
          <LeadForm pagePath="/masterplan" />
        </div>
      </Section>
    </>
  );
}
