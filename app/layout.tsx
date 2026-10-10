import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { UtmCapture } from "@/components/UtmCapture";
import { JsonLd } from "@/components/ui";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

function publicId(name: string) {
  const value = process.env[name];
  if (!value || !/^[A-Za-z0-9_-]+$/.test(value)) return "";
  return value;
}

const gaId = publicId("NEXT_PUBLIC_GA_ID");
const gtmId = publicId("NEXT_PUBLIC_GTM_ID");
const pixelId = publicId("NEXT_PUBLIC_META_PIXEL_ID");
const googleVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Enclave Detached Homes — Milton, ON | Sundial Homes",
    template: "%s",
  },
  description:
    "Detached homes are planned at The Enclave, Sundial Homes' 1,094-unit Milton masterplan. Register for pricing & launch updates.",
  // Search Console and Bing verification strings are supplied through
  // NEXT_PUBLIC_GSC_VERIFICATION and NEXT_PUBLIC_BING_VERIFICATION when issued.
  verification: {
    google: googleVerification || undefined,
    other: bingVerification ? { "msvalidate.01": bingVerification } : undefined,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site summary" />
      </head>
      <body className="pb-32 antialiased md:pb-0">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <UtmCapture />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={organizationJsonLd} />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCta />
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
        {gtmId ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
        {pixelId ? (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
