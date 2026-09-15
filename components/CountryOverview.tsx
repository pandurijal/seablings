import type { Country } from "@/types";

export default function CountryOverview({ country }: { country: Country }) {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-sm"
    >
      <h2
        id="overview-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4"
      >
        About {country.name}
      </h2>
      <p className="text-base md:text-lg text-slate-700 leading-relaxed whitespace-pre-line">
        {country.overview}
      </p>
      {country.sources.length > 0 && (
        <div className="mt-6 pt-5 border-t border-slate-100">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Sources
          </h3>
          <ol className="space-y-1.5 text-sm">
            {country.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sea-700 hover:text-sea-900 underline underline-offset-2"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}