import type { NGO } from "@/types";

export default function NGOOrganizationJsonLd({
  ngo,
  countryName,
}: {
  ngo: NGO;
  countryName: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: ngo.name,
    url: ngo.url,
    description: ngo.focus,
    areaServed: { "@type": "Country", name: countryName },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
