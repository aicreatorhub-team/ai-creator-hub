"use client";

import { useState } from "react";

export default function SeoTagsGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [tags, setTags] = useState("");

  function generateTags() {
    if (!topic.trim()) {
      setTags("Please enter a video topic first.");
      return;
    }

    setTags(
`YouTube SEO Tags for: ${topic}

${topic},
${topic} tutorial,
${topic} explained,
${topic} guide,
${topic} 2026,
future of ${topic},
best ${topic},
how to use ${topic},
${topic} tips,
${topic} for beginners,
technology,
AI,
innovation,
digital future

HASHTAGS:

#${topic.replace(/\s+/g, "")}
#AI
#Technology
#Innovation
#Future`
    );
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
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate SEO Tags
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