import type { Country } from "@/types";
import type { TopicDefinition } from "@/lib/topics";

export default function TopicOverview({
  country,
  topic,
}: {
  country: Country;
  topic: TopicDefinition;
}) {
  return (
    <section
      id="topic-overview"
      aria-labelledby="topic-overview-heading"
      className="rounded-2xl bg-white border border-slate-100 p-6 md:p-8 shadow-sm"
    >
      <h2
        id="topic-overview-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3"
      >
        {topic.name} across {country.name}
      </h2>
      <p className="text-base md:text-lg text-sea-700 font-medium mb-4 leading-relaxed">
        {topic.tagline}
      </p>
      <p className="text-base md:text-lg text-slate-700 leading-relaxed whitespace-pre-line">
        {topic.overview}
      </p>
      <p className="mt-5 pt-4 border-t border-slate-100 text-sm text-slate-600">
        On this page: {topic.name.toLowerCase()} organizations and ways to support{" "}
        {country.name}, plus other ASEAN countries working on the same topic.
      </p>
    </section>
  );
}
