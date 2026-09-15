import type { Metadata } from "next";
import type { Country } from "@/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://seablings.org";

export const getSiteUrl = (): string => SITE_URL;

export interface PageSeo {
  title: string;            // without " · Seablings" suffix
  description: string;       // 140–160 chars
  path: string;              // e.g. "/country/thailand"
  ogImagePath?: string;     // defaults to "/opengraph-image"
}

export function buildMetadata({
  title,
  description,
  path,
  ogImagePath,
}: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  const imagePath = ogImagePath ?? "/opengraph-image";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: "Seablings",
      images: [{ url: `${SITE_URL}${imagePath}`, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${imagePath}`],
    },
  };
}

export function buildCountryMetadata(country: Country): Metadata {
  const title = `${country.name} — Solidarity, Stories & Ways to Help`;
  const description = `${country.heroHeadline} Discover solidarity projects, NGOs, and ways to support ${country.name} through the Seablings community.`.slice(0, 160);
  return buildMetadata({
    title,
    description,
    path: `/country/${country.slug}`,
  });
}
