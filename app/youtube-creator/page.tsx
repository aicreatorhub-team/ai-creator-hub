"use client";

import { useState } from "react";

export default function IdeaGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  function generateIdeas() {
    if (!topic.trim()) {
      setResult("Please enter a topic first.");
      return;
    }

    setResult(
      `AI YouTube Ideas for: ${topic}

1. The Future of ${topic}
2. 10 Things Nobody Knows About ${topic}
3. How ${topic} Will Change The World
4. Beginner Guide To ${topic}
5. I Tested ${topic} For 7 Days`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        YouTube Idea Generator AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Generate professional YouTube video ideas.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter your niche or topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateIdeas}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate Ideas
      </button>

      {result && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {result}
          </pre>
        </div>
      )}

    </main>
  );
}