"use client";

import { useState } from "react";

export default function SeoTagsGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);


  async function generateTags() {

    if (!topic.trim()) {
      setTags("Please enter a video topic first.");
      return;
    }


    setLoading(true);
    setTags("");


    try {

      const response = await fetch("/api/youtube/seo-tags", {
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
        setTags(data.message);
        return;
      }


      setTags(
        JSON.stringify(data.result, null, 2)
      );


    } catch {

      setTags("Something went wrong.");

    } finally {

      setLoading(false);

    }
  }


  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        YouTube SEO Tags Generator AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Generate SEO tags and hashtags for YouTube videos.
      </p>


      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />


      <button
        onClick={generateTags}
        disabled={loading}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Generating..." : "Generate SEO Tags"}
      </button>


      {tags && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {tags}
          </pre>
        </div>
      )}

    </main>
  );
}