import newsData from "@/data/news.json";
import type { NewsItemTopic } from "@/lib/topics";
import type { Country } from "@/types";

interface NewsItemLocal extends NewsItemTopic {}

function matches(countryName: string, item: NewsItemLocal): boolean {
  if (item.country === countryName) return true;
  if (countryName.includes(item.country)) return true;
  if (item.country.includes(countryName)) return true;
  return false;
}

function matchesTopic(item: NewsItemLocal, topicsFilter: string[]): boolean {
  return (
    Array.isArray(item.topics) &&
    item.topics.some((t) => topicsFilter.includes(t))
  );
}

export default function CountryNews({
  country,
  topicsFilter,
  headingOverride,
}: {
  country: Country;
  topicsFilter?: string[];
  headingOverride?: string;
}) {
  const allItems = (newsData as { items: NewsItemLocal[] }).items;
  const items = allItems.filter(
    (it) =>
      matches(country.name, it) &&
      (topicsFilter ? matchesTopic(it, topicsFilter) : true),
  );

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-sm"
    >
      <h2
        id="news-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4"
      >
        {headingOverride ?? `Latest from ${country.name}`}
      </h2>
      {items.length > 0 ? (
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li
              key={`${it.country}-${i}`}
              className="rounded-xl border border-slate-100 p-4 hover:border-sea-200 transition-colors"
            >
              <a
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="text-base md:text-lg font-medium text-slate-900 hover:text-sea-700">
                  {it.headline}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {it.source} · {it.date}
                </p>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-600 italic">
          No curated story this week — check back soon.
        </p>
      )}
    </section>
  );
}
