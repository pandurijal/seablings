import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Seablings collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 mb-10">
          Last updated: September 7, 2026
        </p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              What we collect
            </h2>
            <p>
              When you submit the contribution form on our homepage, we collect
              the information you provide: your name, email address, country
              (optional), the category of your inquiry, and your message. We do
              not collect any other personal data from visitors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              How we use it
            </h2>
            <p>
              We use the information you submit solely to read and respond to
              your inquiry. We do not use it for marketing, advertising, or any
              automated decision-making.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Where it is stored
            </h2>
            <p>
              Submissions are stored in a PostgreSQL database hosted on{" "}
              <a
                href="https://neon.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sea-600 hover:text-sea-700 underline"
              >
                Neon
              </a>
              , a serverless Postgres provider. Database servers are located in
              the AWS Asia Pacific (Singapore) region. All connections use
              SSL/TLS encryption.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              What we do not do
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>We do not use cookies for tracking or advertising.</li>
              <li>We do not use third-party analytics or advertising scripts.</li>
              <li>We do not sell, rent, or share your information with third parties.</li>
              <li>We do not send marketing emails.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Your rights
            </h2>
            <p>
              You can request access to, correction of, or deletion of any
              personal data we hold about you at any time by emailing{" "}
              <a
                href="mailto:team@seablings.org"
                className="text-sea-600 hover:text-sea-700 underline"
              >
                team@seablings.org
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Data retention
            </h2>
            <p>
              We retain submissions for as long as needed to respond to your
              inquiry and for a reasonable archive period thereafter. You may
              request earlier deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Children&apos;s privacy
            </h2>
            <p>
              The Site is not directed at children under 13, and we do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Changes to this policy
            </h2>
            <p>
              If we update this policy, we will revise the &quot;Last
              updated&quot; date above. Material changes will be announced on
              the homepage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Contact
            </h2>
            <p>
              For privacy-related questions, email{" "}
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
