import type { Country } from "@/types";
import type { TopicDefinition } from "@/lib/topics";
import { getSiteUrl } from "@/lib/seo";

export default function TopicPageJsonLd({
  country,
  topic,
  url,
}: {
  country: Country;
  topic: TopicDefinition;
  url: string;
}) {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${topic.name} in ${country.name} — Solidarity & Ways to Help`,
    description: `${topic.tagline} Explore ${topic.name.toLowerCase()} NGOs, projects, and ways to support ${country.name} through the Seablings community.`,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Seablings",
      url: siteUrl,
    },
    about: {
      "@type": "Thing",
      name: topic.name,
      description: topic.tagline,
    },
    inLanguage: "en",
    keywords: [
      "solidarity",
      topic.name.toLowerCase(),
      country.name,
      "ASEAN",
      "volunteer",
      "NGO",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
