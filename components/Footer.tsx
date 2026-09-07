"use client";

import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-10 pb-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
        <p>© {new Date().getFullYear()} Seablings Initiative. Open source & non-profit.</p>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 items-center">
            <a href="mailto:hello@seablings.org" className="hover:text-sea-600 flex items-center gap-1">
                <Mail className="w-3 h-3" /> hello@seablings.org
            </a>
            <span className="hidden md:inline text-slate-300">|</span>
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;