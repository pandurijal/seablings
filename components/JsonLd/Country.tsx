import type { Country } from "@/types";

export default function CountryJsonLd({ country }: { country: Country }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Country",
    name: country.name,
    alternateName: country.iso3,
    identifier: country.iso2,
    // TODO: enrich with real lat/lng when data becomes available
    url: `https://seablings.org/country/${country.slug}`,
    description: country.heroHeadline,
    containedInPlace: { "@type": "Continent", name: "Asia" },
    geo: { "@type": "GeoCoordinates", latitude: 0, longitude: 0 },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
