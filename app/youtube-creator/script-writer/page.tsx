"use client";

import { useState } from "react";

export default function ScriptWriterPage() {
  const [topic, setTopic] = useState("");
  const [script, setScript] = useState("");

  function generateScript() {
    if (!topic.trim()) {
      setScript("Please enter a video topic first.");
      return;
    }

    setScript(
`TITLE:
The Future of ${topic}

HOOK:
Did you know that ${topic} is changing the world faster than ever?

INTRO:
Welcome back to AI Creator Hub. Today we explore ${topic} and discover why it matters.

MAIN CONTENT:

1. What is ${topic}?
Explain the basic concept and why people should care.

2. Why is ${topic} important?
Explain the benefits, opportunities and future potential.

3. How can people use ${topic}?
Provide practical examples.

CONCLUSION:
The future of ${topic} is only beginning. Subscribe for more AI-powered content.

CALL TO ACTION:
Like, subscribe and follow for more videos.`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        YouTube Script Writer AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Create professional YouTube video scripts.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateScript}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate Script
      </button>

      {script && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {script}
          </pre>
        </div>
      )}

    </main>
  );
}