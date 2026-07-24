"use client";

import { useState } from "react";

export default function UploadOptimizerPage() {
  const [topic, setTopic] = useState("");
  const [checklist, setChecklist] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateOptimization() {
    if (!topic.trim()) {
      setChecklist("Please enter a video topic first.");
      return;
    }

    setLoading(true);
    setChecklist("");

    try {
      const response = await fetch("/api/youtube/upload-optimizer", {
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
        setChecklist(data.message);
        return;
      }

      setChecklist(
        JSON.stringify(data.result, null, 2)
      );

    } catch {
      setChecklist("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        YouTube Upload Optimizer AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Optimize videos before publishing.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateOptimization}
        disabled={loading}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Optimizing..." : "Optimize Upload"}
      </button>

      {checklist && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {checklist}
          </pre>
        </div>
      )}

    </main>
  );
}