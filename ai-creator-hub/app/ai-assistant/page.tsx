"use client";

import { useState } from "react";

const modes = [
  "Content Creator",
  "YouTube Expert",
  "Writer",
  "Business Coach",
  "Marketing Expert",
];

export default function AIAssistantPage() {
  const [prompt, setPrompt] = useState("");
  const [selectedMode, setSelectedMode] = useState("Content Creator");
  const [result, setResult] = useState("");

  function generate() {
    setResult(
      `AI Assistant Mode: ${selectedMode}

Your request:
${prompt}

AI generation will be connected here.`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            AI Assistant Pro
          </h1>

          <p className="text-zinc-400 text-lg">
            Your personal AI workspace for creation, business and growth.
          </p>
        </div>


        <div className="grid md:grid-cols-5 gap-4 mb-10">
          {modes.map((mode) => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className={`rounded-xl border p-4 transition ${
                selectedMode === mode
                  ? "bg-white text-black border-white"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>


        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-5">
            What do you want to create?
          </h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Create a YouTube script about AI business ideas..."
            className="w-full h-40 bg-black border border-zinc-700 rounded-xl p-5 text-white"
          />

          <button
            onClick={generate}
            className="mt-6 bg-white text-black px-8 py-4 rounded-xl font-bold"
          >
            Generate AI Content
          </button>

        </div>


        {result && (
          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-xl font-bold mb-4">
              AI Result
            </h2>

            <pre className="whitespace-pre-wrap text-zinc-300">
              {result}
            </pre>

          </div>
        )}

      </section>
    </main>
  );
}