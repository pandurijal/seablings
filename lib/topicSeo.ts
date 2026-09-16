import type { Metadata } from "next";
import type { Country } from "@/types";
import type { TopicDefinition } from "./topics";
import { getSiteUrl } from "./seo";

export function buildTopicMetadata(
  country: Country,
  topic: TopicDefinition,
): Metadata {
  const title = `${topic.name} in ${country.name} — Solidarity & Ways to Help`;
  const description = `${topic.tagline} Explore ${topic.name.toLowerCase()} NGOs, projects, and ways to support ${country.name} through the Seablings community.`.slice(
    0,
    160,
  );
  const path = `/country/${country.slug}/${topic.id}`;
  const url = `${getSiteUrl()}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: "Seablings",
      images: [
        {
          url: `${getSiteUrl()}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${getSiteUrl()}/opengraph-image`],
    },
  };
}
