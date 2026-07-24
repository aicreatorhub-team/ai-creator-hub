"use client";

import { useState } from "react";

export default function ScriptWriterPage() {
  const [topic, setTopic] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);


  async function generateScript() {

    if (!topic.trim()) {
      setScript("Please enter a video topic first.");
      return;
    }


    setLoading(true);
    setScript("");


    try {

      const response = await fetch("/api/youtube/script", {
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
        setScript(data.message);
        return;
      }


      setScript(
        JSON.stringify(data.result, null, 2)
      );


    } catch {

      setScript("Something went wrong.");

    } finally {

      setLoading(false);

    }
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
        disabled={loading}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Generating..." : "Generate Script"}
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