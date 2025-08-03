// app/api/recommendations/route.js
import { NextResponse } from "next/server";

// Mock bitki/veri tabanı (gerçek uygulamada bunu gerçek veriyle değiştir)
const PLANT_DATABASE = [
  {
    id: "1",
    name: "Nane",
    description: "Küçük alanlarda hızlı büyür, nemli toprağı sever, hafif aroma verir.",
    category: "herb",
  },
  {
    id: "2",
    name: "Fesleğen",
    description: "Güneşli yerlerde iyi gelişir, aromatik ve çok yönlü bir bitki.",
    category: "herb",
  },
  {
    id: "3",
    name: "Biberiye",
    description: "Kuraklığa dayanıklı, odunsu bir kokuya sahip, bahçelerde kolayca yetişir.",
    category: "shrub",
  },
  {
    id: "4",
    name: "Limon otu",
    description: "Ferah kokulu, sıcak iklimlerde iyi gelişir, böcekleri uzak tutar.",
    category: "grass",
  },
];

// Yapay zekâ öneri fonksiyonu (Gemini)
async function getAIRecommendations(likedPlants, season) {
  const selected = PLANT_DATABASE.filter((p) =>
    likedPlants.includes(p.id)
  );
  if (selected.length === 0) {
    throw new Error("Seçili bitki bulunamadı");
  }

  const itemList = selected
    .map((p) => `${p.name} (${p.description})`)
    .join(", ");

  const prompt = `You are a smart urban gardening advisor. Based on the user's current plants and the season, recommend 3 additional plants that would complement their mini garden.

User's current plants: ${itemList}
Season: ${season}

Provide exactly 3 plant recommendations in the following JSON format:
[
  {
    "name": "Plant Name",
    "description": "Why this plant is a good complement for their existing plants and season, including care tips and characteristics"
  }
]

Requirements:
- Recommendations must be different from the user's current selections
- Must suit the ${season} season
- Should complement the existing taste/profile
- Include specific care notes and why it's a good match

Return only the JSON array.`;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Gemini yoksa mock fallback: sadece benzer olmayan rastgele 3 öneri döndür
    const fallback = PLANT_DATABASE.filter((p) => !likedPlants.includes(p.id))
      .slice(0, 3)
      .map((p) => ({
        name: p.name,
        description: `Öneri (mock): ${p.description} Mevsime uygun ve mevcut bitkilerle uyumlu.`,
      }));
    return fallback;
  }

  const payload = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    },
  };

  const callModel = async (modelName) => {
    return fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
  };

  let response = await callModel("gemini-1.5-flash");
  if (!response.ok) {
    response = await callModel("gemini-pro");
    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      throw new Error(
        `Gemini API hatası: ${response.status} - ${
          errBody.error?.message || JSON.stringify(errBody)
        }`
      );
    }
  }

  const data = await response.json();
  const rawText =
    data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

  const cleaned = rawText.replace(/```json/g, "").replace(/```/g, "").trim();

  try {
    const recommendations = JSON.parse(cleaned);
    if (!Array.isArray(recommendations) || recommendations.length === 0) {
      throw new Error("Yapay zekâdan geçersiz öneri formatı alındı");
    }
    return recommendations.map((rec) => ({
      name: rec.name || "Bilinmeyen Bitki",
      description: rec.description || "Açıklama yok",
    }));
  } catch (e) {
    console.warn("JSON parse hatası, ham çıktı dönülüyor:", e);
    return [
      {
        name: "AI Önerisi (fallback)",
        description: rawText,
      },
    ];
  }
}

export async function POST(request) {
  try {
    const { likedPlants, season } = await request.json();

    if (
      !likedPlants ||
      !Array.isArray(likedPlants) ||
      likedPlants.length === 0 ||
      !season
    ) {
      return NextResponse.json(
        { error: "Gerekli parametreler eksik veya geçersiz" },
        { status: 400 }
      );
    }

    const recommendations = await getAIRecommendations(likedPlants, season);

    return NextResponse.json({
      recommendations,
      selectedPlants: likedPlants,
      season,
    });
  } catch (error) {
    console.error("POST handler hatası:", error);
    const message = error instanceof Error ? error.message : "Bilinmeyen hata";
    const status = message.includes("429") ? 429 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
