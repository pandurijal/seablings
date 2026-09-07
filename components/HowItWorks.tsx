import React from 'react';
import { Newspaper } from 'lucide-react';
import newsData from '@/data/news.json';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            What's happening in Southeast Asia
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Latest news and updates from across the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.items.map((news, idx) => (
            <a
              key={`${news.country}-${idx}`}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-sea-200 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <Newspaper className="w-5 h-5 text-sea-500" />
                <span className="text-sm font-semibold text-sea-600 uppercase tracking-wider">
                  {news.country}
                </span>
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-4 leading-snug">
                {news.headline}
              </h3>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{news.source}</span>
                <time dateTime={news.date}>
                  {dateFormatter.format(new Date(news.date))}
                </time>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
