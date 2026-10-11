import Image from "next/image";
import Link from "next/link";
import { hero, images } from "@/lib/content";
import { LeadForm } from "@/components/LeadForm";
import { StatusBanner } from "@/components/StatusBanner";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        width={images.hero.width}
        height={images.hero.height}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-[center_62%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-deep/80 via-brand-deep/62 to-brand-deep/48"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-start gap-8 px-5 pb-28 pt-10 md:px-8 md:pb-16 md:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:gap-12">
        <div className="lg:pt-4">
          <StatusBanner />
          <h1 className="mt-6 max-w-[16ch] text-4xl text-surface md:text-6xl">{hero.h1}</h1>
          <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-surface/95">{hero.subhead}</p>
          <div className="mt-8">
            <Link href="/masterplan" className="btn-secondary">
              See the Full Masterplan
            </Link>
          </div>
        </div>
        <div id="register" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl text-surface md:text-3xl">Register for detached collection updates</h2>
          <LeadForm pagePath="/" idPrefix="hero" />
        </div>
      </div>
    </section>
  );
}
