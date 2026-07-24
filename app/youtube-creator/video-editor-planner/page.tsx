"use client";

import { useState } from "react";

export default function VideoEditorPlannerPage() {
  const [topic, setTopic] = useState("");
  const [plan, setPlan] = useState("");

  function generateEditingPlan() {
    if (!topic.trim()) {
      setPlan("Please enter a video topic first.");
      return;
    }

    setPlan(
`AI Video Editing Plan

VIDEO TOPIC:
${topic}

VIDEO STYLE:
Professional YouTube documentary / creator style

SCENE PLAN:

SCENE 1 - HOOK (0-10 sec)
Visual:
- Fast attention grabbing clips
- Strong opening image
- Animated text

Editing:
- Quick cuts
- Zoom effects
- High energy music

SCENE 2 - INTRO
Visual:
- Channel branding
- Topic explanation
- Supporting footage

Editing:
- Smooth transitions
- Lower third text

SCENE 3 - MAIN CONTENT

Use:
- B-roll footage
- Screen recordings
- Animations
- Examples

Effects:
- Highlight important information
- Add subtitles
- Use motion graphics

SCENE 4 - KEY MOMENTS

Add:
- Text animations
- Sound effects
- Visual emphasis

SCENE 5 - OUTRO

Include:
- Summary
- Subscribe animation
- Call to action

CAPCUT STYLE SETTINGS:

Transitions:
Modern cinematic

Music:
Inspirational technology background

Subtitles:
Automatic captions

Export:
YouTube 4K
16:9 format

READY FOR:
CapCut
Premiere Pro
AI Video Generators`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        Video Editor Planner AI
      </h1>

      <p className="text-zinc-400 mb-8">
        Create professional editing plans for YouTube videos.
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter video topic..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateEditingPlan}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate Editing Plan
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