import type { MetadataRoute } from "next";
import { getAllCountrySlugs } from "@/types";
import { getAllTopics } from "@/lib/topics";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://seablings.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const countryEntries: MetadataRoute.Sitemap = getAllCountrySlugs().map(
    (slug) => ({
      url: `${SITE_URL}/country/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const topicEntries: MetadataRoute.Sitemap = [];
  for (const slug of getAllCountrySlugs()) {
    for (const topic of getAllTopics()) {
      topicEntries.push({
        url: `${SITE_URL}/country/${slug}/${topic.id}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    ...countryEntries,
    ...topicEntries,
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
