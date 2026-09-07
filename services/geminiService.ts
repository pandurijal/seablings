import "server-only";
import { GoogleGenAI } from "@google/genai";
import type { NewsItem } from "@/types";

const apiKey = process.env.GEMINI_API_KEY ?? process.env.API_KEY;

const ai = new GoogleGenAI({ apiKey: apiKey ?? "" });

export const fetchAseanNews = async (): Promise<NewsItem[]> => {
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set; returning empty news feed.");
    return [];
  }

  try {
    const prompt = `
      Find exactly one recent, positive or neutral news headline (in English) for each of these Southeast Asian countries:
      Indonesia, Malaysia, Thailand, Vietnam, Philippines, Singapore.

      Focus on culture, community, technology, or environment. Avoid crime or heavy politics.

      Return a JSON array where each object has these keys: "country", "headline", "source", "url".
      The "url" should be a plausible URL for the news source or a placeholder.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "";

    // Attempt to extract JSON from the text response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const parsedData = JSON.parse(jsonMatch[0]);
      return parsedData as NewsItem[];
    }

    // Fallback if structured JSON parsing fails.
    console.warn("Could not parse JSON from Gemini response, using fallback.");
    return [
      { country: "Indonesia", headline: "New Green Energy Initiatives Launched in Bali", source: "ASEAN Post", url: "#" },
      { country: "Vietnam", headline: "Tech Startups Boom in Ho Chi Minh City", source: "Vietnam News", url: "#" },
      { country: "Thailand", headline: "Bangkok Street Food Festival Returns", source: "Thai PBS", url: "#" },
    ];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
