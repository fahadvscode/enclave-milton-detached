import { faqs, images, project, site } from "@/lib/content";

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${site.url}/` : `${site.url}${item.path}`,
    })),
  };
}

export function residenceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: project.siteName,
    description:
      "A planned detached-home component within Sundial Homes' 1,094-unit Enclave masterplan community at 6071 Fourth Line, Milton, Ontario, approved under Town of Milton file 24T-21006/M. Pricing and launch date not yet announced.",
    address: {
      "@type": "PostalAddress",
      streetAddress: project.streetAddress,
      addressLocality: project.locality,
      addressRegion: project.region,
      addressCountry: project.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    url: `${site.url}/`,
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function imageObjectJsonLd(image: {
  src: string;
  alt: string;
  name: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${site.url}${image.src}`,
    description: image.alt,
    name: image.name,
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Enclave Detached — Independent Information Resource",
  url: `${site.url}/`,
  description:
    "An independent website providing information and registration for the detached-home component of The Enclave masterplan community in Milton, Ontario.",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Enclave Detached",
  url: `${site.url}/`,
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/faq?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const heroImageJsonLd = imageObjectJsonLd(images.hero);
