import type { Metadata } from "next";
import { images, site } from "@/lib/content";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export function buildMetadata({ title, description, path, noindex = false }: MetaInput): Metadata {
  const url = path === "/" ? `${site.url}/` : `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "The Enclave Detached",
      images: [
        {
          url: `${site.url}${images.hero.src}`,
          width: 1200,
          height: 630,
          alt: images.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}${images.hero.src}`],
    },
  };
}
