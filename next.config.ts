import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old domain permanently redirects to fetehadin.com, keeping the path.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?fetehadin\\.pro\\.et" }],
        destination: "https://fetehadin.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.fetehadin\\.com" }],
        destination: "https://fetehadin.com/:path*",
        permanent: true,
      },
      // Case studies moved from /projects/* in the previous version of the site.
      // Only the case-study slugs: /projects/*.jpg and *.png are images in public/.
      {
        source: "/projects/:slug(smart-duplicate-detector|tajstore|educonnect)",
        destination: "/work/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// Lets `next dev` read Cloudflare bindings locally.
initOpenNextCloudflareForDev();
