import React from 'react';
import { Twitter, Heart, Repeat } from 'lucide-react';

// Mock data to simulate the look and feel of the community feed
const MOCK_TWEETS = [
  {
    user: "Ariya from Bangkok",
    handle: "@ariya_bkk",
    content: "The morning light at Wat Arun is magical today. Sending peace to all my ASEAN friends! 🇹🇭✨ Where is everyone else starting their day? #Seablings #ASEAN",
    time: "10m ago",
    likes: 124,
    color: "bg-orange-100 text-orange-700"
  },
  {
    user: "Minh Le",
    handle: "@minhle_vn",
    content: "Best Banh Mi in District 1? Just found this tiny stall. Food really brings us together. Come visit Vietnam soon! 🇻🇳🥖 #Seablings",
    time: "45m ago",
    likes: 89,
    color: "bg-blue-100 text-blue-700"
  },
  {
    user: "Rizky",
    handle: "@rizky_jkt",
    content: "Rainy afternoon in Jakarta, perfect for reading. Connecting with a friend in KL via #Seablings today. We share so much history! 🇮🇩🤝🇲🇾",
    time: "2h ago",
    likes: 432,
    color: "bg-emerald-100 text-emerald-700"
  }
];

const CommunityFeed: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-sea-600">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">What They Say in Social Media</h2>
            <p className="text-sea-100">Curated social media content mentioning SEAblings.</p>
          </div>
          <a 
            href="https://twitter.com/search?q=%23Seablings" 
            target="_blank"
            rel="noreferrer"
            className="text-white font-medium hover:text-sea-50 flex items-center gap-2 text-sm bg-sea-700/50 hover:bg-sea-700 px-4 py-2 rounded-full transition-colors"
          >
            View live feed <Twitter className="w-4 h-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_TWEETS.map((tweet, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${tweet.color}`}>
                    {tweet.user[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{tweet.user}</p>
                    <p className="text-slate-400 text-xs">{tweet.handle}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {tweet.content}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-slate-400 text-xs border-t border-slate-50 pt-3">
                <span>{tweet.time}</span>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1 hover:text-red-400 cursor-pointer"><Heart className="w-3 h-3" /> {tweet.likes}</span>
                  <span className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"><Repeat className="w-3 h-3" /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFeed;