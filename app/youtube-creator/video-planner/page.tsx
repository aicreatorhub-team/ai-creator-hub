"use client";

import { useState } from "react";

export default function VideoPlannerPage() {
  const [topic, setTopic] = useState("");
  const [plan, setPlan] = useState("");

  function generatePlan() {
    if (!topic.trim()) {
      setPlan("Please enter a video topic first.");
      return;
    }

    setPlan(
`Professional YouTube Video Structure:

TOPIC:
${topic}

HOOK (0-10 seconds):
"Most people don't know this about ${topic}..."

INTRO:
Explain why this topic matters and what viewers will learn.

SECTION 1:
What is ${topic}?
- Basic explanation
- Background information
- Important facts

SECTION 2:
Why ${topic} is important:
- Benefits
- Opportunities
- Real examples

SECTION 3:
Future of ${topic}:
- Predictions
- Trends
- Possible changes

B-ROLL IDEAS:
- Technology footage
- Screen recordings
- Real examples
- Animation scenes

OUTRO:
Summarize key points and encourage viewers to subscribe.

CALL TO ACTION:
"Subscribe to AI Creator Hub for more AI tools and creator resources."`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        Video Structure Planner AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Plan professional YouTube videos from idea to final structure.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generatePlan}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate Video Plan
      </button>

      {plan && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {plan}
          </pre>
        </div>
      )}

    </main>
  );
}