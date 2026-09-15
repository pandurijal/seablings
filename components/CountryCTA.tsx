import Link from "next/link";
import type { Country } from "@/types";

const CTAs = [
  {
    label: "Share a story",
    type: "story",
    style: "primary" as const,
    description: "Tell us about community work happening in your area.",
  },
  {
    label: "Volunteer with us",
    type: "volunteer",
    style: "secondary" as const,
    description: "Offer your time and skills to a regional initiative.",
  },
  {
    label: "Partner with Seablings",
    type: "partnership",
    style: "secondary" as const,
    description: "Bring your organization into the solidarity network.",
  },
];

export default function CountryCTA({ country }: { country: Country }) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="rounded-2xl bg-gradient-to-br from-sea-500 to-kelp-500 p-6 md:p-8 text-white shadow-md"
    >
      <h2
        id="cta-heading"
        className="text-2xl md:text-3xl font-bold tracking-tight"
      >
        Join the solidarity movement
      </h2>
      <p className="mt-2 text-sea-50/90 max-w-2xl">
        Every contribution — a story, an hour, a partnership — strengthens the
        network across Southeast Asia.
      </p>
      <ul className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
        {CTAs.map((c) => {
          const isPrimary = c.style === "primary";
          return (
            <li key={c.type}>
              <Link
                href={`/?country=${country.slug}&type=${c.type}#contribute`}
                className={
                  isPrimary
                    ? "block rounded-xl bg-white px-4 py-3 text-sea-700 hover:bg-sea-50 transition-colors h-full"
                    : "block rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-white hover:bg-white/20 transition-colors h-full"
                }
              >
                <span className="block font-semibold">{c.label}</span>
                <span
                  className={
                    isPrimary
                      ? "mt-0.5 block text-sm text-sea-700/80"
                      : "mt-0.5 block text-sm text-white/80"
                  }
                >
                  {c.description}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}