import { AmpLink } from "@/components/AmpLink";
import { Breadcrumbs, Prose, Section } from "@/components/ui";
import { pageMeta, site, termsSections } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.terms);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms", path: "/terms" },
];

export default function TermsPage() {
  return (
    <Section>
      <AmpLink path="/terms" />
      <Breadcrumbs items={crumbs} />
      <h1 className="text-4xl md:text-5xl">Terms of Use</h1>
      <p className="mt-3 text-text-muted">Last updated: {site.asOfDate}</p>
      <Prose>
        <p className="mt-8">By using this website, you agree to the following terms.</p>
        <div className="mt-8 space-y-8">
          {termsSections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-3">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Prose>
    </Section>
  );
}
