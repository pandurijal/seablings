import React from "react";
import { CheckCircle2, Heart, Repeat, MessageCircle } from "lucide-react";
import tweetsData from "@/data/tweets.json";
import type { TweetsFile } from "@/types";

const data = tweetsData as TweetsFile;

const rt = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

function relativeTime(iso: string): string {
  const diffMs = new Date(iso).getTime() - Date.now();
  const diffSec = Math.round(diffMs / 1000);
  const abs = Math.abs(diffSec);

  if (abs < 60) return rt.format(diffSec, "second");
  if (abs < 3600) return rt.format(Math.round(diffSec / 60), "minute");
  if (abs < 86400) return rt.format(Math.round(diffSec / 3600), "hour");
  if (abs < 86400 * 30) return rt.format(Math.round(diffSec / 86400), "day");
  if (abs < 86400 * 365) return rt.format(Math.round(diffSec / (86400 * 30)), "month");
  return rt.format(Math.round(diffSec / (86400 * 365)), "year");
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}

function avatarFallbackColor(name: string): string {
  const palette = [
    "bg-orange-100 text-orange-700",
    "bg-blue-100 text-blue-700",
    "bg-emerald-100 text-emerald-700",
    "bg-purple-100 text-purple-700",
    "bg-rose-100 text-rose-700",
    "bg-amber-100 text-amber-700",
    "bg-cyan-100 text-cyan-700",
    "bg-indigo-100 text-indigo-700",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return palette[hash % palette.length];
}

function TweetImages({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  const cols = images.length === 1 ? 1 : 2;
  const isThree = images.length === 3;

  return (
    <div
      className={`mb-3 grid gap-1 rounded-xl overflow-hidden max-h-48 ${
        cols === 1 ? "grid-cols-1" : "grid-cols-2"
      }`}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`bg-slate-100 aspect-video ${
            isThree && i === 0 ? "row-span-2" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function TweetCard({ tweet }: { tweet: TweetsFile["items"][number] }) {
  const fallback = avatarFallbackColor(tweet.user.name);
  const initial = tweet.user.name.trim()[0]?.toUpperCase() ?? "?";
  const { user, metrics, media } = tweet;

  return (
    <a
      href={tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sea-200 transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`relative w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm overflow-hidden shrink-0 ${fallback}`}
        >
          <span className="relative">{initial}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={user.avatar}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-slate-800 text-sm truncate flex items-center gap-1">
            <span className="truncate">{user.name}</span>
            {user.verified && (
              <CheckCircle2
                className="w-4 h-4 fill-sea-500 text-white shrink-0"
                aria-label="Verified"
              />
            )}
          </p>
          <p className="text-slate-400 text-xs truncate">{user.handle}</p>
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
        {tweet.content}
      </p>

      <TweetImages images={media.images} />

      <div className="flex items-center justify-between text-slate-400 text-xs border-t border-slate-50 pt-3 gap-2">
        <time
          dateTime={tweet.postedAt}
          suppressHydrationWarning
          className="whitespace-nowrap shrink-0"
        >
          {relativeTime(tweet.postedAt)}
        </time>
        <div className="flex gap-3">
          <span className="flex items-center gap-1" title={`${metrics.replies} replies`}>
            <MessageCircle className="w-3 h-3" /> {formatCount(metrics.replies)}
          </span>
          <span className="flex items-center gap-1" title={`${metrics.reposts} reposts`}>
            <Repeat className="w-3 h-3" /> {formatCount(metrics.reposts)}
          </span>
          <span className="flex items-center gap-1" title={`${metrics.likes} likes`}>
            <Heart className="w-3 h-3" /> {formatCount(metrics.likes)}
          </span>
        </div>
      </div>
    </a>
  );
}

const CommunityFeed: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-sea-600">
      <div className="mb-12 px-2 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          What They Say in Social Media
        </h2>
        <p className="text-sea-100">
          Curated social media content mentioning SEAblings.
        </p>
        <a
          href="https://twitter.com/search?q=%23Seablings"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-5 text-white font-medium hover:text-sea-50 text-sm bg-sea-700/50 hover:bg-sea-700 px-4 py-2 rounded-full transition-colors"
        >
          View live feed
        </a>
      </div>

      <div className="px-2 grid gap-4 grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]">
        {data.items.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </section>
  );
};

export default CommunityFeed;
