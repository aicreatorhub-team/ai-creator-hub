"use client";

import { useState } from "react";

export default function DescriptionGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);


  async function generateDescription() {

    if (!topic.trim()) {
      setDescription("Please enter a video topic first.");
      return;
    }


    setLoading(true);
    setDescription("");


    try {

      const response = await fetch("/api/youtube/description", {
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
        setDescription(data.message);
        return;
      }


      setDescription(
        JSON.stringify(data.result, null, 2)
      );


    } catch {

      setDescription("Something went wrong.");

    } finally {

      setLoading(false);

    }
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
        disabled={loading}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Generating..." : "Generate Description"}
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