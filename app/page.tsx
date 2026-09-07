import FlagRibbon from "@/components/FlagRibbon";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CommunityFeed from "@/components/CommunityFeed";
import Contribute from "@/components/Contribute";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-sea-100 selection:text-sea-900">
      <nav className="fixed top-0 w-full z-50 px-6 py-4 pointer-events-none">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="pointer-events-auto bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-sm">
            <span className="font-bold text-slate-800 tracking-tight">
              Seablings
            </span>
            <span className="text-sea-500 mx-1">.</span>
            <span className="text-xs text-slate-500 font-medium">
              SEA Solidarity
            </span>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <FlagRibbon />
        <HowItWorks />
        <CommunityFeed />
        <Contribute />
      </main>

      <Footer />
    </div>
  );
}
