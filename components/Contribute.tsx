import React from "react";
import ContributionModal from "./ContributionModal";

const Contribute: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Want to Contribute?
        </h2>
        <p className="text-slate-500 mb-8 text-lg">
          We are always looking for stories, ideas, and volunteers to help grow
          the SEAblings community. Tap below to share yours.
        </p>
        <ContributionModal />
        <p className="text-slate-400 text-sm mt-6">
          Or email us directly at{" "}
          <a
            href="mailto:team@seablings.org"
            className="text-sea-600 hover:text-sea-700 underline"
          >
            team@seablings.org
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contribute;
