import { site } from "@/lib/content";

export function ampUrl(path: string) {
  return path === "/" ? `${site.url}/amp` : `${site.url}/amp${path}`;
}

export function AmpLink({ path }: { path: string }) {
  return <link rel="amphtml" href={ampUrl(path)} />;
}
