import newsData from "@/data/news.json";
import type { Country } from "@/types";

interface NewsItem {
  country: string;
  headline: string;
  source: string;
  url: string;
  date: string;
}

function matches(country: string, item: NewsItem): boolean {
  if (item.country === country) return true;
  if (country.includes(item.country)) return true;
  if (item.country.includes(country)) return true;
  return false;
}

export default function CountryNews({ country }: { country: Country }) {
  const items = (newsData as { items: NewsItem[] }).items.filter((it) =>
    matches(country.name, it)
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
        Latest from {country.name}
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