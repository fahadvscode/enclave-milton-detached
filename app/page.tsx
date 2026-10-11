import Link from "next/link";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { MasterplanBreakdown } from "@/components/MasterplanBreakdown";
import { QuickFacts } from "@/components/QuickFacts";
import { JsonLd, PricingDisclaimer, Prose, Section, SiblingLink } from "@/components/ui";
import {
  aboutSundial,
  answerFirstHome,
  budgetNote,
  detachedAnnouncements,
  howToRead,
  overviewParagraphs,
  pageMeta,
  townsVersusDetached,
  whyRegister,
} from "@/lib/content";
import { breadcrumbJsonLd, heroImageJsonLd, residenceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={residenceJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd data={heroImageJsonLd} />
      <Hero />
      <Section>
        <AnswerFirstSummary heading="The Enclave detached homes in Milton" text={answerFirstHome} />
        <PricingDisclaimer />
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">Quick facts</h2>
        <div className="mt-6">
          <QuickFacts />
        </div>
        <PricingDisclaimer />
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Project overview</h2>
        <Prose>
          <div className="mt-5">
            {overviewParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Prose>
        <p className="mt-6">
          <SiblingLink />
        </p>
        <PricingDisclaimer />
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">Detached Homes</h2>
        <Prose>
          <p className="mt-5">
            Detached Homes are releasing soon. Count, lot width, unit size, bedroom count, price, deposit, incentives, and a launch date are listed as coming soon.
          </p>
        </Prose>
        <div className="mt-6 overflow-x-auto">
          <table className="data-table">
            <caption className="sr-only">Detached Homes details that are coming soon</caption>
            <thead>
              <tr>
                <th scope="col">Detached detail</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {detachedAnnouncements.map((row) => (
                <tr key={row.field}>
                  <th scope="row" className="normal-case tracking-normal text-text-primary">
                    {row.field}
                  </th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Prose>
          <p className="mt-5">{budgetNote}</p>
        </Prose>
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Masterplan snapshot</h2>
        <Prose>
          <p className="mt-5">
            The Town filing mixes detached dwellings with several townhouse types and apartments. Sundial Homes has priced only the freehold townhomes so far. The snapshot below keeps that difference visible.
          </p>
        </Prose>
        <div className="mt-6">
          <MasterplanBreakdown condensed />
        </div>
        <p className="mt-5">
          <Link href="/masterplan" className="text-link">
            See the full masterplan breakdown
          </Link>
        </p>
        <PricingDisclaimer />
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">How to read the detached status</h2>
        <Prose>
          <div className="mt-5">
            {howToRead.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Prose>
        <PricingDisclaimer />
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Detached Homes and townhomes</h2>
        <Prose>
          <div className="mt-5">
            {townsVersusDetached.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Prose>
        <p className="mt-6">
          <SiblingLink />
        </p>
        <PricingDisclaimer />
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">About Sundial Homes</h2>
        <Prose>
          <div className="mt-5">
            {aboutSundial.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Prose>
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Why register</h2>
        <Prose>
          <div className="mt-5">
            {whyRegister.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Prose>
        <ul className="mt-6 flex flex-col gap-3 text-base">
          <li>
            <Link href="/location" className="text-link">
              Explore the Britannia Road &amp; James Snow Parkway location
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-link">
              Read the full FAQ
            </Link>
          </li>
          <li>
            <Link href="/register" className="text-link">
              Register for detached collection updates
            </Link>
          </li>
        </ul>
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">Register for detached collection updates</h2>
        <Prose>
          <p className="mt-5">
            The form goes to the detached-home update list for The Enclave at 6071 Fourth Line. It is free. Use the message field if you are asking for a record to be deleted.
          </p>
        </Prose>
        <div className="mt-8 max-w-3xl">
          <LeadForm pagePath="/" idPrefix="page" />
        </div>
      </Section>
    </>
  );
}
