import Link from "next/link";
import { ThankYouEvent } from "@/components/ThankYouEvent";
import { Prose, Section } from "@/components/ui";
import { pageMeta } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ ...pageMeta.thankYou, noindex: true });

export default function ThankYouPage() {
  return (
    <Section>
      <ThankYouEvent />
      <p className="eyebrow mb-3">Detached Collection Updates</p>
      <h1 className="max-w-[16ch] text-4xl md:text-5xl">You are on the detached update list</h1>
      <Prose>
        <p className="mt-5">
          The registration for The Enclave detached collection updates has been received. Sundial Homes has not announced detached pricing, floor plans, or a launch date. This registration does not reserve a lot or a price.
        </p>
        <p>
          When those details are published, the update list is how registrants are told. Until then, the masterplan page and the FAQ remain the public record of what is known.
        </p>
      </Prose>
      <ul className="mt-6 flex flex-col gap-3">
        <li>
          <Link href="/masterplan" className="text-link">
            See the full masterplan breakdown
          </Link>
        </li>
        <li>
          <Link href="/faq" className="text-link">
            Read the full FAQ
          </Link>
        </li>
      </ul>
    </Section>
  );
}
