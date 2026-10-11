import type { NextConfig } from "next";

const xmlHeaders = [
  { key: "Content-Type", value: "text/xml; charset=utf-8" },
  { key: "X-Content-Type-Options", value: "nosniff" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/sitemap.xml", headers: xmlHeaders },
      { source: "/sitemap/sitemap.xml", headers: xmlHeaders },
    ];
  },
};

export default nextConfig;
