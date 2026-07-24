"use client";

import { useState } from "react";

export default function ThumbnailGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [ideas, setIdeas] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateThumbnailIdeas() {

    if (!topic.trim()) {
      setIdeas("Please enter a video topic first.");
      return;
    }

    setLoading(true);
    setIdeas("");

    try {

      const response = await fetch("/api/youtube/thumbnail", {
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
        setIdeas(data.message);
        return;
      }

      setIdeas(
        JSON.stringify(data.result, null, 2)
      );

    } catch {

      setIdeas("Something went wrong.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        YouTube Thumbnail Generator AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Create professional thumbnail concepts and AI image prompts.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateThumbnailIdeas}
        disabled={loading}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Generating..." : "Generate Thumbnail Ideas"}
      </button>

      {ideas && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {ideas}
          </pre>
        </div>
      )}

    </main>
  );
}