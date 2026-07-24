"use client";

import { useState } from "react";


export default function VoicePlannerPage() {

  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);


  async function generateVoicePlan() {

    if (!topic.trim()) {
      setResult("Please enter a topic first.");
      return;
    }


    setLoading(true);
    setResult("");


    try {

      const response = await fetch(
        "/api/youtube/voice-planner",
        {
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
          }),
        }
      );


      const data = await response.json();


      if (!data.success) {
        setResult(data.message);
        return;
      }


      setResult(
        JSON.stringify(data.result, null, 2)
      );


    } catch {

      setResult(
        "Something went wrong."
      );

    } finally {

      setLoading(false);

    }

  }



  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        AI Voice Planner
      </h1>


      <p className="text-zinc-400 mb-8">
        Create professional narration plans for your videos.
      </p>


      <input
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 p-4 rounded-xl"
      />


      <button
        onClick={generateVoicePlan}
        disabled={loading}
        className="mt-5 bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Generating..." : "Generate Voice Plan"}
      </button>


      {result && (

        <div className="mt-8 bg-zinc-900 p-6 rounded-xl">

          <pre className="whitespace-pre-wrap">
            {result}
          </pre>

        </div>

      )}

    </main>

  );
}