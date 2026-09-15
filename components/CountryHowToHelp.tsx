import Link from "next/link";
import type { Country } from "@/types";

export default function CountryHowToHelp({ country }: { country: Country }) {
  return (
    <section
      id="ways-to-help"
      aria-labelledby="ways-heading"
      className="rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-sm"
    >
      <h2
        id="ways-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4"
      >
        How to support {country.name}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {country.waysToHelp.map((w, i) => (
          <li
            key={`${country.slug}-way-${i}`}
            className="rounded-xl border border-slate-100 p-5 bg-gradient-to-br from-white to-kelp-50/30"
          >
            <h3 className="text-lg font-semibold text-slate-900">{w.title}</h3>
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
              {w.description}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-3">
        <Link
          href={`/?country=${country.slug}&type=story#contribute`}
          className="rounded-full bg-sea-500 px-4 py-2 text-sm font-medium text-white hover:bg-sea-600 transition-colors"
        >
          Submit a story
        </Link>
        <Link
          href={`/?country=${country.slug}&type=partnership#contribute`}
          className="rounded-full border border-sea-300 px-4 py-2 text-sm font-medium text-sea-700 hover:bg-sea-50 transition-colors"
        >
          Become a partner
        </Link>
      </div>
    </section>
  );
}
