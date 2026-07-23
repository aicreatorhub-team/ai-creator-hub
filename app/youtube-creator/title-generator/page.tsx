"use client";

import { useState } from "react";

export default function TitleGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [titles, setTitles] = useState("");

  function generateTitles() {
    if (!topic.trim()) {
      setTitles("Please enter a video topic first.");
      return;
    }

    setTitles(
`YouTube Title Ideas for: ${topic}

🔥 Viral Style:
1. The Truth About ${topic} Nobody Tells You
2. I Tested ${topic} For 7 Days - Here's What Happened
3. ${topic} Will Change Everything in 2026

🎯 Professional Style:
4. Complete Guide To ${topic}
5. How ${topic} Works And Why It Matters

🚀 Curiosity Style:
6. You Won't Believe What ${topic} Can Do
7. The Future Of ${topic} Explained`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        YouTube Title Generator AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Create SEO friendly and high CTR YouTube titles.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateTitles}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate Titles
      </button>

      {titles && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {titles}
          </pre>
        </div>
      )}

    </main>
  );
}