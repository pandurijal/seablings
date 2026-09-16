import type { Country, NGO, WayToHelp } from "@/types";

export interface TopicDefinition {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  iconKey: string;
  ogImageAlt: string;
}

import topicsData from "@/data/topics.json";

const TOPICS_RAW = (topicsData as { topics: TopicDefinition[] }).topics;

if (TOPICS_RAW.length !== 10) {
  throw new Error(
    `Expected 10 topics in data/topics.json, found ${TOPICS_RAW.length}`,
  );
}

export const topics: readonly TopicDefinition[] = TOPICS_RAW;

export const TOPIC_IDS: readonly string[] = topics.map((t) => t.id);

export function getTopicById(id: string): TopicDefinition | undefined {
  return topics.find((t) => t.id === id);
}

export function getAllTopics(): TopicDefinition[] {
  return [...topics];
}

export function filterNgosByTopic(
  country: Country,
  topicId: string,
): NGO[] {
  return country.ngos.filter((n) => Array.isArray(n.topics) && n.topics.includes(topicId));
}

export function filterWaysByTopic(
  country: Country,
  topicId: string,
): WayToHelp[] {
  return country.waysToHelp.filter(
    (w) => Array.isArray(w.topics) && w.topics.includes(topicId),
  );
}

export interface NewsItemTopic {
  country: string;
  headline: string;
  source: string;
  url: string;
  date: string;
  topics: string[];
}

export function filterNewsByTopic(
  countryName: string,
  topicId: string,
  newsItems: NewsItemTopic[],
): NewsItemTopic[] {
  const matches = (s: string) =>
    s === countryName ||
    s.includes(countryName) ||
    countryName.includes(s);
  return newsItems.filter(
    (item) =>
      matches(item.country) &&
      Array.isArray(item.topics) &&
      item.topics.includes(topicId),
  );
}

export function getRelatedCountriesOnTopic(
  country: Country,
  topicId: string,
  allCountries: Country[],
): Country[] {
  return allCountries.filter(
    (c) =>
      c.slug !== country.slug &&
      (c.ngos.some(
        (n) => Array.isArray(n.topics) && n.topics.includes(topicId),
      ) ||
        c.waysToHelp.some(
          (w) => Array.isArray(w.topics) && w.topics.includes(topicId),
        )),
  );
}
