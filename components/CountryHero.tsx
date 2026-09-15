import Image from "next/image";
import Link from "next/link";
import type { Country } from "@/types";

export default function CountryHero({ country }: { country: Country }) {
  return (
    <section
      aria-labelledby="country-hero-heading"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-50 via-white to-kelp-50 border border-sea-100/60 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 p-8 md:p-12 items-center">
        <div className="shrink-0">
          <div className="relative h-28 w-44 md:h-36 md:w-56 rounded-xl overflow-hidden shadow-md ring-1 ring-slate-200/70 bg-white">
            <Image
              src={country.flagSrc}
              alt={`Flag of ${country.name}`}
              fill
              sizes="(min-width: 768px) 14rem, 11rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.18em] text-sea-600 font-semibold mb-2">
            {country.region} · {country.iso2}
          </p>
          <h1
            id="country-hero-heading"
            className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
          >
            {country.name}
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl">
            {country.heroHeadline}
          </p>
          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <div>
              <dt className="inline font-medium text-slate-500">Capital · </dt>
              <dd className="inline text-slate-800">{country.capital}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-slate-500">Population · </dt>
              <dd className="inline text-slate-800">
                {country.population.toLocaleString("en-US")}
              </dd>
            </div>
            <div>
              <dt className="inline font-medium text-slate-500">Languages · </dt>
              <dd className="inline text-slate-800">
                {country.languages.join(", ")}
              </dd>
            </div>
          </dl>
          <nav
            aria-label="Page sections"
            className="mt-6 flex flex-wrap gap-2"
          >
            <Link
              href="#ways-to-help"
              className="rounded-full bg-sea-500 px-4 py-2 text-sm font-medium text-white hover:bg-sea-600 transition-colors"
            >
              How to help
            </Link>
            <Link
              href="#ngos"
              className="rounded-full border border-sea-300 px-4 py-2 text-sm font-medium text-sea-700 hover:bg-sea-50 transition-colors"
            >
              Organizations
            </Link>
            <Link
              href="#news"
              className="rounded-full border border-sea-300 px-4 py-2 text-sm font-medium text-sea-700 hover:bg-sea-50 transition-colors"
            >
              Latest news
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
