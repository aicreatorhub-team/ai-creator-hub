"use client";

import { useState } from "react";

export default function ThumbnailGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [ideas, setIdeas] = useState("");

  function generateThumbnailIdeas() {
    if (!topic.trim()) {
      setIdeas("Please enter a video topic first.");
      return;
    }

    setIdeas(
`YouTube Thumbnail Ideas for: ${topic}

IDEA 1:
Main Text:
"AI WILL CHANGE EVERYTHING"

Visual:
A person looking at a futuristic AI screen, dramatic lighting, modern technology background.

Colors:
Black + Blue + Neon Glow

STYLE:
High CTR YouTube thumbnail


IDEA 2:
Main Text:
"The Future of ${topic}"

Visual:
Before and after comparison showing transformation.

Colors:
Strong contrast, bright elements, professional creator style.


IDEA 3:
Main Text:
"I Tested ${topic}"

Visual:
Creator face reaction + large object + curiosity effect.

AI IMAGE PROMPT:
Professional YouTube thumbnail, high contrast, cinematic lighting, futuristic technology, viral YouTube style.`
    );
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
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate Thumbnail Ideas
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