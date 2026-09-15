import Image from "next/image";
import Link from "next/link";
import FlagRibbon from "@/components/FlagRibbon";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CommunityFeed from "@/components/CommunityFeed";
import Contribute from "@/components/Contribute";
import Footer from "@/components/Footer";
import { countries } from "@/types";

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-sea-100 selection:text-sea-900">
      <nav className="fixed top-0 w-full z-50 px-6 py-4 pointer-events-none">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="pointer-events-auto bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-sm flex items-center gap-3">
            <span className="font-bold text-slate-800 tracking-tight">
              Seablings
            </span>
            <span className="text-sea-500">.</span>
            <span className="text-xs text-slate-500 font-medium">
              SEA Solidarity
            </span>
            <span className="text-slate-300" aria-hidden="true">|</span>
            <Link
              href="#countries"
              className="text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              Countries
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <FlagRibbon />
        <section
          id="countries"
          aria-labelledby="countries-heading"
          className="max-w-6xl mx-auto px-6 py-16"
        >
          <div className="text-center mb-10">
            <h2
              id="countries-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
            >
              Explore by country
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Pick a member state to discover solidarity projects, partner organizations, and ways to get involved.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/country/${c.slug}`}
                  className="block rounded-2xl bg-white border border-slate-100 p-4 hover:border-sea-200 hover:shadow-sm transition-all h-full"
                >
                  <span className="relative block h-12 w-20 rounded overflow-hidden ring-1 ring-slate-200/70 bg-white mb-3 mx-auto">
                    <Image
                      src={c.flagSrc}
                      alt={`Flag of ${c.name}`}
                      fill
                      sizes="5rem"
                      className="object-cover"
                    />
                  </span>
                  <span className="block text-center">
                    <span className="block text-sm font-semibold text-slate-900 truncate">{c.name}</span>
                    <span className="block text-xs text-slate-500 truncate">{c.capital}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <HowItWorks />
        <CommunityFeed />
        <Contribute />
      </main>

      <Footer />
    </div>
  );
}