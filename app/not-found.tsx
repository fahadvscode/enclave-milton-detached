import Link from "next/link";
import { Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <h1 className="text-4xl">Page not found</h1>
      <p className="prose-measure mt-4">
        That address is not part of this detached-collection site. The masterplan, location, and registration pages are linked below.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li>
          <Link href="/" className="text-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/masterplan" className="text-link">
            See the full masterplan breakdown
          </Link>
        </li>
        <li>
          <Link href="/register" className="text-link">
            Register for detached collection updates
          </Link>
        </li>
      </ul>
    </Section>
  );
}
