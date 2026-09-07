"use client";

import { useEffect, useState, type FormEvent } from "react";

const ASEAN_COUNTRIES = [
  "Brunei",
  "Cambodia",
  "Indonesia",
  "Laos",
  "Malaysia",
  "Myanmar",
  "Philippines",
  "Singapore",
  "Thailand",
  "Vietnam",
  "Other",
  "Prefer not to say",
];

const CATEGORIES = [
  { value: "general", label: "Just saying hi / general" },
  { value: "story", label: "Share a story of kindness" },
  { value: "volunteer", label: "I want to volunteer" },
  { value: "partnership", label: "Partnership / organization" },
];

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  country: string;
  category: string;
  message: string;
};

type SubmissionFormProps = {
  onSuccess?: () => void;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  country: "",
  category: "general",
  message: "",
};

export default function SubmissionForm({ onSuccess }: SubmissionFormProps = {}) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (status === "success" && onSuccess) {
      const timer = setTimeout(onSuccess, 1500);
      return () => clearTimeout(timer);
    }
  }, [status, onSuccess]);

  const update =
    <K extends keyof FormState>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          country: form.country || null,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sea-500 focus:outline-none focus:ring-2 focus:ring-sea-500/20 transition-colors";

  if (status === "success") {
    return (
      <div className="rounded-xl border border-kelp-100 bg-kelp-50/50 p-6 text-center">
        <h3 className="text-lg font-semibold text-kelp-700 mb-2">
          Thank you
        </h3>
        <p className="text-sm text-slate-600">
          Your message is on its way to the SEAblings team. We will be in touch
          soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-sea-600 hover:text-sea-700 underline"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1.5">
            Country <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <select
            id="country"
            value={form.country}
            onChange={update("country")}
            className={inputClass}
            disabled={status === "submitting"}
          >
            <option value="">Select your country</option>
            {ASEAN_COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1.5">
            What brings you here?
          </label>
          <select
            id="category"
            value={form.category}
            onChange={update("category")}
            className={inputClass}
            disabled={status === "submitting"}
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          maxLength={2000}
          value={form.message}
          onChange={update("message")}
          placeholder="Share your story, idea, or how you'd like to help..."
          className={`${inputClass} resize-y min-h-32`}
          disabled={status === "submitting"}
        />
        <div className="mt-1 text-xs text-slate-400 text-right">
          {form.message.length}/2000
        </div>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
        <p className="text-xs text-slate-400">
          By submitting, you agree we may contact you about your message.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sea-600 text-white font-medium rounded-full hover:bg-sea-700 transition-colors shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
