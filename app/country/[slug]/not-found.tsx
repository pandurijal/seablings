import Link from "next/link";

export default function CountryNotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12 text-center">
      <h1 className="text-3xl font-bold text-sea-900 mb-3">Country not found</h1>
      <p className="text-sea-700/80 mb-6">
        We couldn&rsquo; find that country. Try one of the ten ASEAN member states.
      </p>
      <Link
        href="/"
        className="rounded-full bg-sea-500 px-5 py-2 text-white font-medium hover:bg-sea-600 transition-colors"
      >
        Back home
      </Link>
    </main>
  );
}