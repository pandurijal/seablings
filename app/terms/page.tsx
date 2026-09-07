import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of the Seablings website.",
};

export default function TermsPage() {
  return (
    <article className="py-20 px-6 bg-white min-h-[80vh]">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-sea-600 hover:text-sea-700 mb-8"
        >
          <span aria-hidden="true" className="mr-1">
            &larr;
          </span>
          Back to home
        </Link>

        <h1 className="text-4xl font-bold text-slate-800 mb-2 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400 mb-10">
          Last updated: September 7, 2026
        </p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Acceptance
            </h2>
            <p>
              By using seablings.org (the &quot;Site&quot;), you agree to these
              terms. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              What the Site is
            </h2>
            <p>
              Seablings is a community platform celebrating the ten ASEAN member
              nations. The Site displays curated news headlines, a community
              feed, an animated ribbon of national flags, and a contact form
              for contributions and inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Acceptable use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-outside ml-5 space-y-2 mt-3">
              <li>
                Submit false, misleading, defamatory, or unlawful content
                through our forms.
              </li>
              <li>
                Submit content that infringes intellectual property rights or
                the privacy of others.
              </li>
              <li>
                Submit spam, malware, or unsolicited commercial content.
              </li>
              <li>
                Attempt to disrupt the Site or its underlying infrastructure.
              </li>
              <li>
                Scrape or reproduce Site content at scale without prior written
                permission.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Submissions
            </h2>
            <p>
              By submitting content through our form, you confirm that you have
              the right to share it and you grant us a non-exclusive license to
              review and respond to it. We may anonymize and quote excerpts in
              community materials, but only with your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Intellectual property
            </h2>
            <p>
              The Site design, code, and curated news content are owned by the
              Seablings Initiative. ASEAN member flag SVGs are sourced from
              Wikimedia Commons under their respective licenses. You may link to
              or share our content for non-commercial purposes with attribution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Disclaimers
            </h2>
            <p>
              The Site is provided &quot;as is&quot; without warranties of any
              kind. We strive to keep the Site available and its content
              accurate, but we cannot guarantee uninterrupted service or
              error-free information.
            </p>
            <p className="mt-3">
              Curated news headlines on the homepage are summarized from public
              sources and do not necessarily represent the views of the
              Seablings Initiative.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, the Seablings Initiative
              is not liable for any indirect, incidental, or consequential
              damages arising from your use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Changes
            </h2>
            <p>
              We may update these terms occasionally. Material changes will be
              announced on the homepage. Continued use of the Site after
              changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Contact
            </h2>
            <p>
              For questions about these terms, email{" "}
              <a
                href="mailto:team@seablings.org"
                className="text-sea-600 hover:text-sea-700 underline"
              >
                team@seablings.org
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
