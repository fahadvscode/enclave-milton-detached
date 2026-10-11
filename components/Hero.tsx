import Image from "next/image";
import Link from "next/link";
import { hero, images } from "@/lib/content";
import { LeadForm } from "@/components/LeadForm";
import { StatusBanner } from "@/components/StatusBanner";

export function Hero() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-[1200px] lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,24rem)] lg:items-stretch">
        <div className="relative min-h-[240px] sm:min-h-[380px] lg:min-h-[640px]">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            width={images.hero.width}
            height={images.hero.height}
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/25 to-brand-deep/10 lg:bg-gradient-to-r lg:from-brand-deep/55 lg:via-brand-deep/20 lg:to-transparent"
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full min-h-[240px] flex-col justify-end px-5 pb-5 pt-8 sm:min-h-[380px] sm:px-8 sm:pb-8 sm:pt-24 lg:min-h-[640px] lg:justify-center lg:py-16">
            <StatusBanner />
            <h1 className="mt-4 max-w-[12ch] text-[2.6rem] leading-[1.05] text-surface sm:text-5xl lg:text-6xl">
              {hero.h1}
            </h1>
            <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-surface sm:text-lg">{hero.subhead}</p>
            <div className="mt-6">
              <Link href="/masterplan" className="btn-secondary">
                See the Full Masterplan
              </Link>
            </div>
          </div>
        </div>
        <div id="register" className="scroll-mt-24 px-5 pb-8 pt-5 sm:px-8 lg:flex lg:items-center lg:py-10 lg:pl-6 lg:pr-8">
          <div className="w-full">
            <h2 className="mb-3 text-2xl text-text-primary">Register for Detached Homes</h2>
            <LeadForm pagePath="/" idPrefix="hero" compact />
          </div>
        </div>
      </div>
    </section>
  );
}
