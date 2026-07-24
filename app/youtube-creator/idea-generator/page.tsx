"use client";

import { useState } from "react";

export default function IdeaGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateIdeas() {
    if (!topic.trim()) {
      setResult("Please enter a topic first.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/youtube/ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          userId: "demo-user",
          email: "demo@example.com",
          deviceId: "browser",
          accountCount: 1,
          credits: 100,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setResult(data.message);
        return;
      }

      setResult(
        JSON.stringify(data.result, null, 2)
      );

    } catch {
      setResult("Something went wrong.");
    } finally {
      setLoading(false);
    }
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
        disabled={loading}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Generating..." : "Generate Ideas"}
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