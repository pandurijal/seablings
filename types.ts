export interface NewsItem {
  country: string;
  headline: string;
  source: string;
  url: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type SocialPlatform = "twitter" | "bluesky" | "mastodon";

export interface TweetAuthor {
  name: string;
  handle: string;
  avatar: string;
  verified: boolean;
}

export interface TweetMetrics {
  replies: number;
  reposts: number;
  likes: number;
  views: number;
}

export interface TweetMedia {
  images: string[];
}

export interface Tweet {
  id: string;
  platform: SocialPlatform;
  user: TweetAuthor;
  content: string;
  url: string;
  postedAt: string;
  lang: string;
  metrics: TweetMetrics;
  media: TweetMedia;
}

export interface TweetsFile {
  schemaVersion: number;
  updatedAt: string;
  items: Tweet[];
}

export type VerificationStatus = "verified" | "unverified";

export interface NGO {
  name: string;
  url: string;
  focus: string;
  verificationStatus: VerificationStatus;
  topics: string[];
}

export interface WayToHelp {
  title: string;
  description: string;
  topics: string[];
}

export type TopicId =
  | "education"
  | "environment"
  | "disaster-relief"
  | "health"
  | "humanitarian"
  | "indigenous-communities"
  | "women-girls"
  | "youth-leadership"
  | "food-security"
  | "cultural-heritage";

export interface NewsItemTopic {
  country: string;
  headline: string;
  source: string;
  url: string;
  date: string;
  topics: string[];
}

export interface CountrySource {
  label: string;
  url: string;
}

export interface Country {
  slug: string;
  name: string;
  iso2: string;
  iso3: string;
  capital: string;
  region: string;
  population: number;
  area_km2: number;
  languages: string[];
  currency: string;
  flagSrc: string;
  heroHeadline: string;
  overview: string;
  waysToHelp: WayToHelp[];
  ngos: NGO[];
  relatedCountries: string[];
  sources: CountrySource[];
}

export interface CountriesData {
  countries: Country[];
}

import countriesData from "@/data/countries.json";

export const countries: Country[] = (countriesData as CountriesData).countries;
export const getCountryBySlug = (slug: string): Country | undefined =>
  countries.find((c) => c.slug === slug);
export const getAllCountrySlugs = (): string[] => countries.map((c) => c.slug);
