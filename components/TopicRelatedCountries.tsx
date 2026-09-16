import Link from "next/link";
import Image from "next/image";
import type { Country } from "@/types";
import type { TopicDefinition } from "@/lib/topics";

export default function TopicRelatedCountries({
  currentCountry,
  topic,
  relatedCountries,
}: {
  currentCountry: Country;
  topic: TopicDefinition;
  relatedCountries: Country[];
}) {
  return (
    <section
      aria-labelledby="topic-related-heading"
      className="rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-sm"
    >
      <h2
        id="topic-related-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3"
      >
        Other ASEAN countries on {topic.name}
      </h2>
      <p className="text-sm text-slate-600 mb-5">
        {relatedCountries.length === 0
          ? `Be the first to add ${topic.name.toLowerCase()} work for another ASEAN country.`
          : `${relatedCountries.length} of 9 other ASEAN members have ${topic.name.toLowerCase()} work featured on Seablings.`}
      </p>
      {relatedCountries.length > 0 && (
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {relatedCountries.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/country/${r.slug}/${topic.id}`}
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
                  <span className="block font-semibold text-slate-900 truncate">
                    {r.name}
                  </span>
                  <span className="block text-xs text-slate-500 truncate">
                    {r.capital}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!relatedCountries.includes(currentCountry) &&
        currentCountry && (
          <p className="mt-4 text-xs text-slate-500">
            <Link
              href={`/country/${currentCountry.slug}`}
              className="text-sea-700 hover:text-sea-900 underline-offset-2"
            >
              ← Back to {currentCountry.name} overview
            </Link>
          </p>
        )}
    </section>
  );
}
