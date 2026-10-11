import { AmpLink } from "@/components/AmpLink";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadForm } from "@/components/LeadForm";
import { Breadcrumbs, JsonLd, PricingDisclaimer, Prose, Section } from "@/components/ui";
import { answerFirstHome, faqs, pageMeta, registerFaqIndexes } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.register);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Register", path: "/register" },
];

export default function RegisterPage() {
  const excerpt = registerFaqIndexes.map((index) => faqs[index]);

  return (
    <>
      <AmpLink path="/register" />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Section className="py-12 md:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="max-w-[18ch] text-4xl md:text-5xl">Register for The Enclave — Detached Collection Updates</h1>
        <Prose>
          <p className="mt-5">{answerFirstHome}</p>
        </Prose>
        <PricingDisclaimer />
        <div className="mt-8 max-w-3xl">
          <LeadForm pagePath="/register" />
        </div>
      </Section>
      <Section alt>
        <h2 className="text-3xl md:text-4xl">Registration questions</h2>
        <div className="mt-6">
          <FaqAccordion items={excerpt} openFirst />
        </div>
      </Section>
    </>
  );
}
