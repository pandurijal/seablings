import { readFileSync } from "fs";
import { resolve } from "path";

const VALID_TOPICS = new Set([
  "education",
  "environment",
  "disaster-relief",
  "health",
  "humanitarian",
  "indigenous-communities",
  "women-girls",
  "youth-leadership",
  "food-security",
  "cultural-heritage",
]);

const ROOT = resolve(__dirname, "..");

function load<T>(p: string): T {
  return JSON.parse(readFileSync(resolve(ROOT, p), "utf8")) as T;
}

interface TopicsFile {
  topics: { id: string }[];
}
interface CountriesFile {
  countries: {
    slug: string;
    ngos: { name: string; topics?: string[] }[];
    waysToHelp: { title: string; topics?: string[] }[];
  }[];
}
interface NewsFile {
  items: { country: string; headline: string; topics?: string[] }[];
}

const topicsFile = load<TopicsFile>("data/topics.json");
const countriesFile = load<CountriesFile>("data/countries.json");
const newsFile = load<NewsFile>("data/news.json");

const errors: string[] = [];
const warnings: string[] = [];

if (topicsFile.topics.length !== 10) {
  errors.push(`data/topics.json must have exactly 10 topics, found ${topicsFile.topics.length}`);
}
for (const t of topicsFile.topics) {
  if (!VALID_TOPICS.has(t.id)) {
    errors.push(`data/topics.json contains unknown topic id "${t.id}"`);
  }
}

const ngoTopicCounts: Record<string, number> = {};
const wayTopicCounts: Record<string, number> = {};

for (const country of countriesFile.countries) {
  for (const ngo of country.ngos) {
    if (!ngo.topics) {
      errors.push(`[${country.slug}] NGO "${ngo.name}" missing topics field`);
      continue;
    }
    if (ngo.topics.length === 0) {
      errors.push(`[${country.slug}] NGO "${ngo.name}" has empty topics array`);
      continue;
    }
    for (const t of ngo.topics) {
      if (!VALID_TOPICS.has(t)) {
        errors.push(`[${country.slug}] NGO "${ngo.name}" has unknown topic "${t}"`);
      } else {
        ngoTopicCounts[t] = (ngoTopicCounts[t] || 0) + 1;
      }
    }
  }
  for (const w of country.waysToHelp) {
    if (!w.topics) {
      errors.push(`[${country.slug}] WayToHelp "${w.title}" missing topics field`);
      continue;
    }
    if (w.topics.length === 0) {
      errors.push(`[${country.slug}] WayToHelp "${w.title}" has empty topics array`);
      continue;
    }
    for (const t of w.topics) {
      if (!VALID_TOPICS.has(t)) {
        errors.push(`[${country.slug}] WayToHelp "${w.title}" has unknown topic "${t}"`);
      } else {
        wayTopicCounts[t] = (wayTopicCounts[t] || 0) + 1;
      }
    }
  }
}

for (const item of newsFile.items) {
  if (!item.topics) {
    errors.push(`[news] "${item.headline}" missing topics field`);
    continue;
  }
  if (item.topics.length === 0) {
    errors.push(`[news] "${item.headline}" has empty topics array`);
    continue;
  }
  for (const t of item.topics) {
    if (!VALID_TOPICS.has(t)) {
      errors.push(`[news] "${item.headline}" has unknown topic "${t}"`);
    }
  }
}

for (const t of VALID_TOPICS) {
  const ngoCount = ngoTopicCounts[t] || 0;
  const wayCount = wayTopicCounts[t] || 0;
  if (ngoCount === 0) {
    warnings.push(`Topic "${t}" has 0 NGOs globally — topic pages will all show empty-state for NGOs`);
  }
  if (wayCount < 3) {
    warnings.push(`Topic "${t}" has only ${wayCount} WaysToHelp globally`);
  }
}

const totalNgos = countriesFile.countries.reduce((n, c) => n + c.ngos.length, 0);
const totalWays = countriesFile.countries.reduce((n, c) => n + c.waysToHelp.length, 0);

console.log(
  `OK: ${totalNgos} NGOs, ${totalWays} WaysToHelp, ${newsFile.items.length} news items, all tagged`,
);

if (warnings.length) {
  console.log("\nWARNINGS:");
  for (const w of warnings) console.log("  " + w);
}

if (errors.length) {
  console.error("\nERRORS:");
  for (const e of errors) console.error("  " + e);
  process.exit(1);
}

console.log("\nNGO topic distribution:");
for (const t of VALID_TOPICS) console.log(`  ${t}: ${ngoTopicCounts[t] || 0}`);
console.log("\nWaysToHelp topic distribution:");
for (const t of VALID_TOPICS) console.log(`  ${t}: ${wayTopicCounts[t] || 0}`);
