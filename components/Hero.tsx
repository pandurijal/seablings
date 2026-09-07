"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToHow = () => {
    const el = document.getElementById('how-it-works');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center px-6 overflow-hidden bg-gradient-to-br from-sea-50 via-white to-kelp-50">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sea-200/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-kelp-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-2xl text-center space-y-8">
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-3 py-1 rounded-full border border-sea-100 shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-sea-500 animate-pulse"></span>
          <span className="text-xs font-medium text-sea-800 tracking-wide uppercase">Community Beta Live</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 tracking-tight leading-[1.1]">
          Southeast Asia, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-600 to-kelp-600">
            stronger together.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">
          Seablings is a community platform for cross-border kindness. 
          Join our movement to connect neighbors through shared stories and cultural exchange.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={scrollToHow}
            className="group relative px-8 py-3.5 bg-slate-900 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all transform hover:-translate-y-0.5"
          >
            Explore News
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce text-sea-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
};

export default Hero;