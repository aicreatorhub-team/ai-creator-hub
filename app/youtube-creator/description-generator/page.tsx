"use client";

import { useState } from "react";

export default function DescriptionGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  function generateDescription() {
    if (!topic.trim()) {
      setDescription("Please enter a video topic first.");
      return;
    }

    setDescription(
`YouTube Description for: ${topic}

ABOUT THIS VIDEO:
Discover everything about ${topic} and learn why this topic is becoming important.

In this video you will learn:
✓ What is ${topic}
✓ How it works
✓ Why it matters
✓ Future opportunities

TIMESTAMPS:
00:00 Introduction
01:00 Understanding ${topic}
03:00 Key benefits
05:00 Future predictions

SEO KEYWORDS:
${topic}, AI, technology, future, innovation, tutorial

SUBSCRIBE:
Subscribe to AI Creator Hub for more professional content creation tools.

#AI #Technology #Innovation`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        YouTube Description Generator AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Create SEO optimized YouTube descriptions.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateDescription}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate Description
      </button>

      {description && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {description}
          </pre>
        </div>
      )}

    </main>
  );
}