import { images } from "@/lib/content";
import Image from "next/image";

// A basic Google Maps embed needs no API key. Set NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY
// later if a richer Maps Embed API iframe is wanted.
export function LocationMap() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;
  const src = key
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=Britannia+Road+and+James+Snow+Parkway%2C+Milton%2C+Ontario`
    : "https://maps.google.com/maps?q=Britannia%20Road%20%26%20James%20Snow%20Parkway%2C%20Milton%2C%20Ontario&z=14&output=embed";

  return (
    <div className="grid gap-6">
      <Image
        src={images.map.src}
        alt={images.map.alt}
        width={images.map.width}
        height={images.map.height}
        sizes="(min-width: 1200px) 1100px, 100vw"
        className="h-auto w-full border border-border"
      />
      <iframe
        title="Map of Britannia Road and James Snow Parkway, Milton, Ontario"
        src={src}
        className="h-[420px] w-full border border-border"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
