import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Case studies moved from /projects/* in the previous version of the site.
    // Only the case-study slugs: /projects/*.jpg and *.png are images in public/.
    return [
      {
        source: "/projects/:slug(smart-duplicate-detector|tajstore|educonnect)",
        destination: "/work/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
