import { AmpLink } from "@/components/AmpLink";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Breadcrumbs, JsonLd, PricingDisclaimer, Prose, Section } from "@/components/ui";
import { pageMeta } from "@/lib/content";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.faq);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export default function FaqPage() {
  return (
    <>
      <AmpLink path="/faq" />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqPageJsonLd()} />
      <Section>
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mb-3">Questions buyers ask</p>
        <h1 className="max-w-[18ch] text-4xl md:text-5xl">FAQ — The Enclave Detached Homes in Milton</h1>
        <Prose>
          <p className="mt-5">
            These answers cover The Enclave detached homes in Milton: what the collection is, who is building it, what it costs, when it might launch, where 6071 Fourth Line sits, which home types are planned, whether file 24T-21006/M is approved, and how registration works. Every answer is on this page when it loads.
          </p>
          <p>
            Where Sundial Homes has not published a number, the answer says so. Detached pricing, the deposit structure, incentives, and VIP access are all in that category as of October 2026. The released freehold townhomes, starting from $599,990, are a different product.
          </p>
        </Prose>
        <PricingDisclaimer />
        <div className="mt-10">
          <h2 className="mb-5 text-3xl">Questions about The Enclave detached homes</h2>
          <FaqAccordion />
        </div>
      </Section>
    </>
  );
}
