import React from 'react';
import { Newspaper } from 'lucide-react';

const DUMMY_NEWS = [
  {
    country: "Indonesia",
    headline: "Jakarta's new MRT line opens, connecting more communities.",
    date: "2 hours ago"
  },
  {
    country: "Malaysia",
    headline: "Kuala Lumpur to host the next ASEAN tech summit.",
    date: "5 hours ago"
  },
  {
    country: "Thailand",
    headline: "Bangkok street food vendors receive new sustainability awards.",
    date: "1 day ago"
  },
  {
    country: "Vietnam",
    headline: "Ho Chi Minh City sees record growth in renewable energy.",
    date: "2 days ago"
  },
  {
    country: "Philippines",
    headline: "Manila community clean-up drive gathers thousands of volunteers.",
    date: "2 days ago"
  },
  {
    country: "Singapore",
    headline: "New cross-border digital payment system launched with neighbors.",
    date: "3 days ago"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">What's happening in Southeast Asia</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Latest news and updates from across the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_NEWS.map((news, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-sea-200 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Newspaper className="w-5 h-5 text-sea-500" />
                <span className="text-sm font-semibold text-sea-600 uppercase tracking-wider">{news.country}</span>
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-4 leading-snug">{news.headline}</h3>
              <p className="text-xs text-slate-400">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;