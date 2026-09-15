import type { Country } from "@/types";
import NGOOrganizationJsonLd from "@/components/JsonLd/NGOOrganization";

export default function CountryNGOs({ country }: { country: Country }) {
  return (
    <section
      id="ngos"
      aria-labelledby="ngos-heading"
      className="rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-sm"
    >
      <h2
        id="ngos-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4"
      >
        Organizations working in {country.name}
      </h2>
      <p className="text-sm text-slate-600 mb-6">
        Listed organizations are provided for reference. Inclusion here is
        informational — confirm details before donating or partnering.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {country.ngos.map((ngo) => {
          const verified = ngo.verificationStatus === "verified";
          return (
            <li
              key={ngo.url}
              className="rounded-xl border border-slate-100 p-5 hover:border-sea-200 transition-colors bg-gradient-to-br from-white to-sea-50/30"
            >
              <div className="flex items-start justify-between gap-3">
                <a
                  href={ngo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-slate-900 hover:text-sea-700 underline-offset-2"
                >
                  {ngo.name}
                </a>
                <span
                  title={
                    verified
                      ? "Verified partner"
                      : "Listed — not yet verified. Inclusion here is informational. Confirm before donating."
                  }
                  className={
                    verified
                      ? "shrink-0 inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 ring-1 ring-emerald-200"
                      : "shrink-0 inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-800 text-xs font-medium px-2.5 py-1 ring-1 ring-amber-200"
                  }
                >
                  <span
                    aria-hidden="true"
                    className={
                      verified
                        ? "h-1.5 w-1.5 rounded-full bg-emerald-500"
                        : "h-1.5 w-1.5 rounded-full bg-amber-500"
                    }
                  />
                  {verified ? "Verified partner" : "Listed — not yet verified"}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{ngo.focus}</p>
              <NGOOrganizationJsonLd ngo={ngo} countryName={country.name} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
