import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCountryBySlug,
  countries,
} from "@/types";
import {
  getTopicById,
  getAllTopics,
  filterNgosByTopic,
  filterWaysByTopic,
  getRelatedCountriesOnTopic,
  type NewsItemTopic,
} from "@/lib/topics";
import { buildTopicMetadata } from "@/lib/topicSeo";
import { getSiteUrl } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CountryHero from "@/components/CountryHero";
import CountryCTA from "@/components/CountryCTA";
import CountryNews from "@/components/CountryNews";
import TopicOverview from "@/components/TopicOverview";
import TopicRelatedCountries from "@/components/TopicRelatedCountries";
import CountryNGOs from "@/components/CountryNGOs";
import CountryHowToHelp from "@/components/CountryHowToHelp";
import TopicPageJsonLd from "@/components/JsonLd/TopicPage";
import BreadcrumbJsonLd from "@/components/JsonLd/BreadcrumbList";
import newsData from "@/data/news.json";

interface Props {
  params: Promise<{ slug: string; topic: string }>;
}

export const dynamicParams = true;

export function generateStaticParams() {
  const params: Array<{ slug: string; topic: string }> = [];
  for (const country of countries) {
    for (const topic of getAllTopics()) {
      params.push({ slug: country.slug, topic: topic.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, topic } = await params;
  const country = getCountryBySlug(slug);
  const topicDef = getTopicById(topic);
  if (!country || !topicDef) return {};
  return buildTopicMetadata(country, topicDef);
}

export default async function TopicPage({ params }: Props) {
  const { slug, topic } = await params;
  const country = getCountryBySlug(slug);
  const topicDef = getTopicById(topic);
  if (!country || !topicDef) notFound();

  const siteUrl = getSiteUrl();
  const path = `/country/${country.slug}/${topicDef.id}`;
  const url = `${siteUrl}${path}`;
  const filteredNgos = filterNgosByTopic(country, topicDef.id);
  const filteredWays = filterWaysByTopic(country, topicDef.id);
  const allNews = (newsData as { items: NewsItemTopic[] }).items;
  const relatedCountries = getRelatedCountriesOnTopic(
    country,
    topicDef.id,
    countries,
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: country.name, href: `/country/${country.slug}` },
          { name: topicDef.name, href: path },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteUrl}/` },
          { name: country.name, url: `${siteUrl}/country/${country.slug}` },
          { name: topicDef.name, url },
        ]}
      />
      <div className="space-y-8">
        <CountryHero
          country={country}
          topicBadge={{ name: topicDef.name, iconKey: topicDef.iconKey }}
        />
        <CountryCTA country={country} />
        <TopicOverview country={country} topic={topicDef} />
        <CountryNews
          country={country}
          topicsFilter={[topicDef.id]}
          headingOverride={`${topicDef.name} news from ${country.name}`}
        />
        <CountryNGOs
          country={country}
          topicsFilter={[topicDef.id]}
          headingOverride={`Organizations working on ${topicDef.name} in ${country.name}`}
        />
        <CountryHowToHelp
          country={country}
          topicsFilter={[topicDef.id]}
          headingOverride={`Ways to support ${topicDef.name} in ${country.name}`}
        />
        <TopicRelatedCountries
          currentCountry={country}
          topic={topicDef}
          relatedCountries={relatedCountries}
        />
      </div>
      <TopicPageJsonLd country={country} topic={topicDef} url={url} />
    </>
  );
}
