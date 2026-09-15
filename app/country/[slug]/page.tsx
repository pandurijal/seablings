import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCountryBySlug, getAllCountrySlugs, countries } from "@/types";
import { buildCountryMetadata, getSiteUrl } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CountryHero from "@/components/CountryHero";
import CountryCTA from "@/components/CountryCTA";
import CountryOverview from "@/components/CountryOverview";
import CountryNews from "@/components/CountryNews";
import CountryNGOs from "@/components/CountryNGOs";
import CountryHowToHelp from "@/components/CountryHowToHelp";
import CountryJsonLd from "@/components/JsonLd/Country";
import BreadcrumbJsonLd from "@/components/JsonLd/BreadcrumbList";
import Link from "next/link";
import Image from "next/image";
import type { Country } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};
  return buildCountryMetadata(country);
}

function RelatedCountries({ country }: { country: Country }) {
  if (country.relatedCountries.length === 0) return null;
  const related = country.relatedCountries
    .map((slug) => countries.find((c) => c.slug === slug))
    .filter((c): c is Country => Boolean(c));
  if (related.length === 0) return null;
  return (
    <section
      aria-labelledby="related-heading"
      className="rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-sm"
    >
      <h2
        id="related-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4"
      >
        Neighboring solidarity
      </h2>
      <p className="text-sm text-slate-600 mb-5">
        Countries that share close regional, linguistic, or historical ties with {country.name}.
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {related.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/country/${r.slug}`}
              className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 hover:border-sea-200 hover:bg-sea-50/30 transition-colors"
            >
              <span className="relative h-8 w-12 rounded overflow-hidden ring-1 ring-slate-200/70 bg-white shrink-0">
                <Image
                  src={r.flagSrc}
                  alt={`Flag of ${r.name}`}
                  fill
                  sizes="3rem"
                  className="object-cover"
                />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-slate-900 truncate">{r.name}</span>
                <span className="block text-xs text-slate-500 truncate">{r.capital}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const siteUrl = getSiteUrl();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: country.name, href: `/country/${country.slug}` },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteUrl}/` },
          { name: country.name, url: `${siteUrl}/country/${country.slug}` },
        ]}
      />
      <div className="space-y-8">
        <CountryHero country={country} />
        <CountryCTA country={country} />
        <CountryOverview country={country} />
        <CountryNews country={country} />
        <CountryNGOs country={country} />
        <CountryHowToHelp country={country} />
        <RelatedCountries country={country} />
      </div>
      <CountryJsonLd country={country} />
    </>
  );
}