import type { NextConfig } from "next";
import { site } from "./src/lib/site";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ws-na.amazon-adsystem.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "www.fratellowatches.com",
      },
      {
        protocol: "https",
        hostname: "lunns.com",
      },
      {
        protocol: "https",
        hostname: "www.christopherward.com",
      },
      {
        protocol: "https",
        hostname: "www-breitling.eu.saleor.cloud",
      },
      {
        protocol: "https",
        hostname: "www.egardwatches.com",
      },
      {
        protocol: "https",
        hostname: "monochrome-watches.com",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "fpro.com",
      },
      {
        protocol: "https",
        hostname: "store.richdad.com",
      },
      {
        protocol: "https",
        hostname: "pisces.bbystatic.com",
      },
    ],
  },
  async redirects() {
    const canonical = `https://${site.domain}/:path*`;
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: site.redirectDomain }],
        destination: canonical,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${site.redirectDomain}` }],
        destination: canonical,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${site.domain}` }],
        destination: canonical,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
