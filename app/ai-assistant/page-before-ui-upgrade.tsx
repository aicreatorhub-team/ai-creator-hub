"use client";

import { useState } from "react";
import { createProject } from "@/lib/storage/projects";

export default function AIAssistantPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateAI() {
    if (!prompt.trim()) {
      setResult("Please enter your request first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          mode: "Content Creator",
        }),
      });

      const data = await response.json();

      setResult(
        data.message || "No response generated."
      );
    } catch {
      setResult("AI Engine unavailable.");
    } finally {
      setLoading(false);
    }
  }

  function saveProject() {
    if (!result) return;

    createProject({
      title: "AI Project",
      content: result,
      mode: "Content Creator",
      type: "AI_GENERATION",
    });
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        AI Creator Hub
      </h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-40 bg-zinc-900 p-4 rounded-xl"
        placeholder="Write your idea..."
      />

      <button
        onClick={generateAI}
        disabled={loading}
        className="mt-5 bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Creating..." : "Generate AI"}
      </button>

      {result && (
        <div className="mt-8 bg-zinc-900 p-6 rounded-xl">
          <pre className="whitespace-pre-wrap">
            {result}
          </pre>

          <button
            onClick={saveProject}
            className="mt-5 bg-green-600 px-5 py-2 rounded-xl"
          >
            Save Project
          </button>
        </div>
      )}
    </main>
  );
}