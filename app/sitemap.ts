import type { MetadataRoute } from "next";
import { profile, projects } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.site, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${profile.site}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
