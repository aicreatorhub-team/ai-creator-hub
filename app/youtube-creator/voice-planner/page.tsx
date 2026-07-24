"use client";

import { useState } from "react";

export default function VoicePlannerPage() {
  const [topic, setTopic] = useState("");
  const [voicePlan, setVoicePlan] = useState("");

  function generateVoicePlan() {
    if (!topic.trim()) {
      setVoicePlan("Please enter a video topic first.");
      return;
    }

    setVoicePlan(
`AI Voice & Narration Plan

VIDEO TOPIC:
${topic}

VOICE STYLE:
Professional YouTube documentary style

TONE:
- Confident
- Clear
- Engaging
- Inspirational

NARRATION STRUCTURE:

INTRO (0-10 seconds):
Create curiosity and immediately explain why viewers should continue watching.

MAIN CONTENT:
Use a calm professional voice.
Pause after important points.
Emphasize key words.

EMOTION:
- Excitement during discoveries
- Confidence during explanations
- Curiosity during future predictions

VOICE SETTINGS:
Speed: Medium
Pitch: Natural
Energy: High

AI VOICE PROMPT:
Professional narrator voice, cinematic YouTube documentary style, clear pronunciation, engaging storytelling, modern technology channel.

READY FOR:
ElevenLabs
AI voice generators
Future video automation pipeline`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        Voice & Narration Planner AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Create professional voice-over plans for videos.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateVoicePlan}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate Voice Plan
      </button>

      {voicePlan && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {voicePlan}
          </pre>
        </div>
      )}

    </main>
  );
}