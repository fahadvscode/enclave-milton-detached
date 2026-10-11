import Link from "next/link";
import { AmpLink } from "@/components/AmpLink";
import { Breadcrumbs, Prose, Section } from "@/components/ui";
import { pageMeta, privacySections, site } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageMeta.privacy);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <Section>
      <AmpLink path="/privacy" />
      <Breadcrumbs items={crumbs} />
      <h1 className="text-4xl md:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-text-muted">Last updated: {site.asOfDate}</p>
      <Prose>
        <div className="mt-8 space-y-8">
          {privacySections.map((section) => (
            <div key={section.heading ?? "intro"}>
              {section.heading ? <h2 className="text-2xl">{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={section.heading ? "mt-3" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Prose>
      <p className="mt-8">
        <Link href="/register" className="text-link">
          Open the registration form
        </Link>
      </p>
    </Section>
  );
}
