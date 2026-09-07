import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

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
] as const;

const CATEGORIES = ["story", "volunteer", "partnership", "general"] as const;

type Category = (typeof CATEGORIES)[number];

type SubmissionInput = {
  name: string;
  email: string;
  country?: string | null;
  category?: string;
  message: string;
};

type ValidationResult =
  | { ok: true; data: Required<Omit<SubmissionInput, "country" | "category">> & { country: string | null; category: Category } }
  | { ok: false; error: string };

function validate(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }
  const b = body as Record<string, unknown>;

  const name = typeof b.name === "string" ? b.name.trim() : "";
  if (name.length < 1 || name.length > 100) {
    return { ok: false, error: "Name is required (max 100 characters)" };
  }

  const email = typeof b.email === "string" ? b.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return { ok: false, error: "A valid email is required" };
  }

  const message = typeof b.message === "string" ? b.message.trim() : "";
  if (message.length < 1 || message.length > 2000) {
    return { ok: false, error: "Message is required (max 2000 characters)" };
  }

  const countryRaw = typeof b.country === "string" ? b.country.trim() : "";
  const country =
    countryRaw && (ASEAN_COUNTRIES as readonly string[]).includes(countryRaw)
      ? countryRaw
      : null;

  const categoryRaw = typeof b.category === "string" ? b.category.trim() : "";
  const category: Category = (CATEGORIES as readonly string[]).includes(categoryRaw)
    ? (categoryRaw as Category)
    : "general";

  return {
    ok: true,
    data: {
      name,
      email: email.toLowerCase(),
      country,
      category,
      message,
    },
  };
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Body must be valid JSON" }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  try {
    const sql = getDb();
    await sql`
      INSERT INTO submissions (name, email, country, category, message)
      VALUES (
        ${result.data.name},
        ${result.data.email},
        ${result.data.country},
        ${result.data.category},
        ${result.data.message}
      )
    `;
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Submission insert failed:", error);
    return NextResponse.json(
      { error: "Could not save your submission. Please try again or email team@seablings.org." },
      { status: 500 },
    );
  }
}
