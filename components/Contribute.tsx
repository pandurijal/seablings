import React from 'react';
import { Mail } from 'lucide-react';

const Contribute: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Want to Contribute?</h2>
        <p className="text-slate-500 mb-8 text-lg">
          We are always looking for stories, ideas, and volunteers to help grow the SEAblings community. Reach out to us and be part of the movement.
        </p>
        <a 
          href="mailto:team@seablings.org" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-sea-600 text-white font-medium rounded-full hover:bg-sea-700 transition-colors shadow-sm hover:shadow-md"
        >
          <Mail className="w-5 h-5" />
          team@seablings.org
        </a>
      </div>
    </section>
  );
};

export default Contribute;
