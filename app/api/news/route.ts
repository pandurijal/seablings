import { NextResponse } from "next/server";
import { fetchAseanNews } from "@/services/geminiService";
import type { NewsItem } from "@/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse<NewsItem[]>> {
  const news = await fetchAseanNews();
  return NextResponse.json(news);
}
