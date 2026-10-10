import Image from "next/image";
import Link from "next/link";
import { hero, images } from "@/lib/content";
import { StatusBanner } from "@/components/StatusBanner";
import { RegisterCta } from "@/components/RegisterCta";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-brand-deep md:min-h-[88vh]">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        width={images.hero.width}
        height={images.hero.height}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-deep/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-36 pt-28 md:px-8 md:pb-24">
        <StatusBanner />
        <h1 className="mt-6 max-w-[16ch] text-4xl text-surface md:text-6xl">{hero.h1}</h1>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-surface/95">{hero.subhead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <RegisterCta href="#register" location="hero">
            Register for Detached Collection Updates
          </RegisterCta>
          <Link href="/masterplan" className="btn-secondary">
            See the Full Masterplan
          </Link>
        </div>
      </div>
    </section>
  );
}
