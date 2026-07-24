"use client";

import { useState } from "react";

export default function WorkflowManagerPage() {
  const [idea, setIdea] = useState("");
  const [workflow, setWorkflow] = useState("");

  function generateWorkflow() {
    if (!idea.trim()) {
      setWorkflow("Please enter a video idea first.");
      return;
    }

    setWorkflow(
`AI VIDEO FACTORY WORKFLOW

PROJECT:
${idea}

STEP 1 - IDEA ANALYSIS ✅

AI will analyze:
- Audience
- Market interest
- Video potential
- Competition

STEP 2 - SCRIPT CREATION ✅

Generate:
- Hook
- Introduction
- Main sections
- Storytelling
- Ending CTA

STEP 3 - VIDEO PRODUCTION PLAN ✅

Prepare:
- Scenes
- B-roll
- Visual ideas
- Animations

STEP 4 - VOICE & NARRATION ✅

Create:
- Voice style
- Emotion
- Narration instructions

STEP 5 - THUMBNAIL STRATEGY ✅

Generate:
- Thumbnail concept
- Text
- Visual direction

STEP 6 - SEO OPTIMIZATION ✅

Create:
- Title options
- Description
- Tags
- Keywords

STEP 7 - PUBLISHING ✅

Checklist:
- Thumbnail
- Captions
- End screen
- Cards
- Upload settings

STEP 8 - CONTENT DISTRIBUTION ✅

Transform into:
- Shorts
- TikTok
- Instagram Reels
- LinkedIn posts

PROJECT STATUS:
Ready for AI production pipeline`
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        AI Video Factory Workflow
      </h1>

      <p className="text-zinc-400 mb-8">
        Create a complete YouTube production workflow from one idea.
      </p>

      <input
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter your video idea..."
        className="w-full bg-zinc-900 rounded-xl p-4 mb-5"
      />

      <button
        onClick={generateWorkflow}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Generate Video Workflow
      </button>

      {workflow && (
        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap">
            {workflow}
          </pre>
        </div>
      )}

    </main>
  );
}