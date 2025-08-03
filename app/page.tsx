"use client";

import { useState } from "react";

export default function Home() {
  const [likedPlants, setLikedPlants] = useState<string[]>([]);
  const [season, setSeason] = useState("spring");
  const [recs, setRecs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecs = async () => {
    if (likedPlants.length === 0) {
      setError("Lütfen en az bir bitki seç.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likedPlants, season }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Hata");
      setRecs(data.recommendations);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">UrbanGrow 🌱</h1>
      <p className="mb-4">
        Mevcut bitkilerine ve mevsime göre öneri almak için seçimini yap.
      </p>
      <div className="mb-4">
        <label className="block mb-1">Seçili Bitkiler (örnek id’ler):</label>
        <input
          placeholder="Örn: 1,2"
          className="border p-2 w-full"
          onChange={(e) =>
            setLikedPlants(
              e.target.value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
            )
          }
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Mevsim:</label>
        <select
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="border p-2"
        >
          <option value="spring">İlkbahar</option>
          <option value="summer">Yaz</option>
          <option value="autumn">Sonbahar</option>
          <option value="winter">Kış</option>
        </select>
      </div>
      <button
        onClick={fetchRecs}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Yükleniyor..." : "Öneri Al"}
      </button>
      {error && <div className="text-red-600 mt-2">{error}</div>}

      {recs.length > 0 && (
        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">Önerilen Bitkiler</h2>
          {recs.map((r, i) => (
            <div
              key={i}
              className="border p-3 rounded bg-white shadow-sm"
            >
              <h3 className="font-bold">{r.name}</h3>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
